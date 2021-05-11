/*
  Simulate the smart contract's computation.
*/

import { BigNumber } from 'bignumber.js'

import {
  AccountStorage,
  AccountDetails,
  LiquidityPoolStorage,
  BigNumberish,
  AccountComputed,
  AMMTradingResult,
  InvalidArgumentError,
  BugError,
  InsufficientLiquidityError,
  TradeFlag,
  TradeWithPriceResult,
} from './types'
import { computeAMMInternalTrade, computeAMMPoolMargin, initAMMTradingContext } from './amm'
import { _0, _1 } from './constants'
import { normalizeBigNumberish, hasTheSameSign, splitAmount } from './utils'

export function computeAccount(p: LiquidityPoolStorage, perpetualIndex: number, s: AccountStorage): AccountDetails {
  const perpetual = p.perpetuals.get(perpetualIndex)
  if (!perpetual) {
    throw new InvalidArgumentError(`perpetual {perpetualIndex} not found in the pool`)
  }
  const positionValue = perpetual.markPrice.times(s.positionAmount.abs())
  const positionMargin = positionValue.times(perpetual.initialMarginRate)
  const maintenanceMargin = positionValue.times(perpetual.maintenanceMarginRate)
  let reservedCash = _0
  if (!s.positionAmount.isZero()) {
    reservedCash = perpetual.keeperGasReward
  }
  const availableCashBalance = s.cashBalance.minus(s.positionAmount.times(perpetual.unitAccumulativeFunding))
  const marginBalance = availableCashBalance.plus(perpetual.markPrice.times(s.positionAmount))
  const availableMargin = marginBalance.minus(BigNumber.maximum(reservedCash, positionMargin))
  const withdrawableBalance = BigNumber.maximum(_0, availableMargin)
  const isMMSafe = marginBalance.gte(BigNumber.maximum(reservedCash, maintenanceMargin))
  const isIMSafe = marginBalance.gte(BigNumber.maximum(reservedCash, positionMargin))
  const isMarginSafe = marginBalance.gte(reservedCash)
  let leverage = _0
  if (positionValue.gt(_0)) {
    leverage = marginBalance.gt(_0) ? positionValue.div(marginBalance) : new BigNumber('Infinity')
  }
  let marginRatio = _0
  if (maintenanceMargin.gt(_0)) {
    marginRatio = marginBalance.gt(_0) ? maintenanceMargin.div(marginBalance) : new BigNumber('Infinity')
  }
  let fundingPNL: BigNumber | null = null
  if (s.entryFunding) {
    fundingPNL = s.entryFunding.minus(s.positionAmount.times(perpetual.unitAccumulativeFunding))
  }

  let entryPrice: BigNumber | null = null
  let pnl1: BigNumber | null = null
  let pnl2: BigNumber | null = null
  let roe: BigNumber | null = null
  if (s.entryValue) {
    entryPrice = s.positionAmount.isZero() ? _0 : s.entryValue.div(s.positionAmount)
  }
  if (s.entryValue) {
    pnl1 = perpetual.markPrice.times(s.positionAmount).minus(s.entryValue)
  }
  if (pnl1 && fundingPNL) {
    pnl2 = pnl1.plus(fundingPNL)
  }
  if (pnl2 && s.entryValue && s.entryFunding) {
    let entryCash = s.cashBalance.plus(s.entryValue).minus(s.entryFunding)
    roe = entryCash.isZero() ? _0 : pnl2.div(entryCash)
  }

  // the estimated liquidation price helps traders to know when to close their positions.
  // it has already considered the close position trading fee. this value is different
  // from the keeper's liquidation price who does not pay the trading fee.
  let liquidationPrice = _0
  if (!s.positionAmount.isZero()) {
    let tradingFeeRate = p.vaultFeeRate.plus(perpetual.operatorFeeRate).plus(perpetual.lpFeeRate)
    const t = perpetual.maintenanceMarginRate
      .plus(tradingFeeRate)
      .times(s.positionAmount.abs())
      .minus(s.positionAmount)
    liquidationPrice = availableCashBalance.minus(reservedCash).div(t)
    if (liquidationPrice.isNegative()) {
      liquidationPrice = _0
    }
  }

  const accountComputed: AccountComputed = {
    positionValue,
    positionMargin,
    maintenanceMargin,
    availableCashBalance,
    marginBalance,
    availableMargin,
    withdrawableBalance,
    isMMSafe,
    isIMSafe,
    isMarginSafe,
    leverage,
    marginRatio,

    entryPrice,
    fundingPNL,
    pnl1,
    pnl2,
    roe,
    liquidationPrice
  }
  return { accountStorage: s, accountComputed }
}

export function computeDecreasePosition(
  p: LiquidityPoolStorage,
  perpetualIndex: number,
  a: AccountStorage,
  price: BigNumber,
  amount: BigNumber
): AccountStorage {
  const perpetual = p.perpetuals.get(perpetualIndex)
  if (!perpetual) {
    throw new InvalidArgumentError(`perpetual {perpetualIndex} not found in the pool`)
  }
  let cashBalance = a.cashBalance
  const oldAmount = a.positionAmount
  let entryValue = a.entryValue
  let entryFunding = a.entryFunding
  if (oldAmount.isZero() || amount.isZero() || hasTheSameSign(oldAmount, amount)) {
    throw new InvalidArgumentError(
      `bad amount ${amount.toFixed()} to decrease when position is ${oldAmount.toFixed()}.`
    )
  }
  if (price.lte(_0)) {
    throw new InvalidArgumentError(`bad price ${price.toFixed()}`)
  }
  if (oldAmount.abs().lt(amount.abs())) {
    throw new InvalidArgumentError(`position size |${oldAmount.toFixed()}| is less than amount |${amount.toFixed()}|`)
  }
  cashBalance = cashBalance.minus(price.times(amount))
  cashBalance = cashBalance.plus(perpetual.unitAccumulativeFunding.times(amount))
  const positionAmount = oldAmount.plus(amount)
  entryFunding = entryFunding ? entryFunding.times(positionAmount).div(oldAmount) : null
  entryValue = entryValue ? entryValue.times(positionAmount).div(oldAmount) : null
  return { cashBalance, entryValue, positionAmount, entryFunding, targetLeverage: a.targetLeverage }
}

export function computeIncreasePosition(
  p: LiquidityPoolStorage,
  perpetualIndex: number,
  a: AccountStorage,
  price: BigNumber,
  amount: BigNumber
): AccountStorage {
  const perpetual = p.perpetuals.get(perpetualIndex)
  if (!perpetual) {
    throw new InvalidArgumentError(`perpetual {perpetualIndex} not found in the pool`)
  }
  let cashBalance = a.cashBalance
  const oldAmount = a.positionAmount
  let entryValue = a.entryValue
  let entryFunding = a.entryFunding
  if (price.lte(_0)) {
    throw new InvalidArgumentError(`bad price ${price.toFixed()}`)
  }
  if (amount.isZero()) {
    throw new InvalidArgumentError(`bad amount`)
  }
  if (!oldAmount.isZero() && !hasTheSameSign(oldAmount, amount)) {
    throw new InvalidArgumentError(`bad increase size ${amount.toFixed()} where position is ${oldAmount.toFixed()}`)
  }
  cashBalance = cashBalance.minus(price.times(amount))
  cashBalance = cashBalance.plus(perpetual.unitAccumulativeFunding.times(amount))
  entryValue = entryValue ? entryValue.plus(price.times(amount)) : null
  entryFunding = entryFunding ? entryFunding.plus(perpetual.unitAccumulativeFunding.times(amount)) : null
  const positionAmount = oldAmount.plus(amount)
  return { cashBalance, entryValue, positionAmount, entryFunding, targetLeverage: a.targetLeverage }
}

export function computeFee(
  hasOpened: boolean,
  price: BigNumberish,
  amount: BigNumberish,
  feeRate: BigNumberish,
  afterTrade: AccountDetails,
): BigNumber {
  const normalizedPrice = normalizeBigNumberish(price)
  const normalizedAmount = normalizeBigNumberish(amount)
  const normalizedFeeRate = normalizeBigNumberish(feeRate)
  if (normalizedPrice.lte(_0) || normalizedAmount.isZero()) {
    throw new InvalidArgumentError(`bad price ${normalizedPrice.toFixed()} or amount ${normalizedAmount.toFixed()}`)
  }
  let totalFee = normalizedPrice.times(normalizedAmount.abs()).times(normalizedFeeRate)
  if (!hasOpened) {
    const availableMargin = afterTrade.accountComputed.availableMargin
    if (availableMargin.lte(_0)) {
      totalFee = _0
    } else if (totalFee.gt(availableMargin)) {
      // make sure the sum of fees < available margin
      totalFee = availableMargin
    }
  }
  return totalFee
}

export function computeTradeWithPrice(
  p: LiquidityPoolStorage,
  perpetualIndex: number,
  a: AccountStorage,
  price: BigNumberish,
  amount: BigNumberish,
  feeRate: BigNumberish,
  options: TradeFlag
): TradeWithPriceResult {
  const normalizedPrice = normalizeBigNumberish(price)
  const normalizedAmount = normalizeBigNumberish(amount)
  const normalizedFeeRate = normalizeBigNumberish(feeRate)
  if (normalizedPrice.lte(_0) || normalizedAmount.isZero()) {
    throw new InvalidArgumentError(`bad price ${normalizedPrice.toFixed()} or amount ${normalizedAmount.toFixed()}`)
  }

  // trade
  let newAccount: AccountStorage = { ...a }
  let { close, open } = splitAmount(newAccount.positionAmount, normalizedAmount)
  if (!close.isZero()) {
    newAccount = computeDecreasePosition(p, perpetualIndex, newAccount, normalizedPrice, close)
  }
  if (!open.isZero()) {
    newAccount = computeIncreasePosition(p, perpetualIndex, newAccount, normalizedPrice, open)
  }
  
  // fee
  let afterTrade = computeAccount(p, perpetualIndex, newAccount)
  const totalFee = computeFee(!open.isZero(), normalizedPrice, normalizedAmount, normalizedFeeRate, afterTrade)

  // transfer fee
  newAccount.cashBalance = newAccount.cashBalance.minus(totalFee)
  afterTrade = computeAccount(p, perpetualIndex, newAccount)

  // adjust margin
  let adjustCollateral = _0
  if ((options & TradeFlag.MASK_USE_TARGET_LEVERAGE) != 0) {
    adjustCollateral = adjustMarginLeverage(
      p, perpetualIndex, afterTrade,
      price, close, open, totalFee)
    newAccount.cashBalance = newAccount.cashBalance.plus(adjustCollateral)
  }

  // open position requires margin > IM. close position requires !bankrupt
  afterTrade = computeAccount(p, perpetualIndex, newAccount)
  let tradeIsSafe = afterTrade.accountComputed.isMarginSafe
  if (!open.isZero()) {
    tradeIsSafe = afterTrade.accountComputed.isIMSafe
  }
  return {
    afterTrade,
    tradeIsSafe,
    totalFee,
    adjustCollateral,
  }
}

// must be called after trade, before transferFee
export function adjustMarginLeverage(
  p: LiquidityPoolStorage,
  perpetualIndex: number,
  afterTrade: AccountDetails,
  price: BigNumberish,
  close: BigNumberish,
  open: BigNumberish,
  totalFee: BigNumberish
): BigNumber {
  const normalizedPrice = normalizeBigNumberish(price)
  const normalizedOpen = normalizeBigNumberish(open)
  const normalizedClose = normalizeBigNumberish(close)
  const normalizedTotalFee = normalizeBigNumberish(totalFee)
  const deltaPosition = normalizedClose.plus(normalizedOpen)
  const deltaCash = deltaPosition.times(normalizedPrice).negated()
  const position2 = afterTrade.accountStorage.positionAmount
  const perpetual = p.perpetuals.get(perpetualIndex)
  if (!perpetual) {
    throw new InvalidArgumentError(`perpetual {perpetualIndex} not found in the pool`)
  }
  if (!normalizedClose.isZero() && normalizedOpen.isZero()) {
    // close only
    // when close, keep the effective leverage
    // -withdraw == (availableCash2 * close - (deltaCash - fee) * position2) / position1
    let adjustCollateral = afterTrade.accountComputed.availableCashBalance.times(normalizedClose)
      .minus((deltaCash.minus(normalizedTotalFee)).times(position2))
      .div(position2.minus(normalizedClose))
    // withdraw only when IM is satisfied
    const limit = afterTrade.accountComputed.availableMargin.negated()
    adjustCollateral = BigNumber.maximum(adjustCollateral, limit)
    // never deposit when close positions
    adjustCollateral = BigNumber.minimum(adjustCollateral, _0)
    return adjustCollateral
  } else {
    // open only or close + open
    // when open, deposit mark * | openPosition | / lev
    const leverage = afterTrade.accountStorage.targetLeverage
    if (leverage.lte(_0)) {
      throw new InvalidArgumentError(`target leverage <= 0`)
    }
    let openPositionMargin = normalizedOpen.abs().times(perpetual.markPrice).div(leverage)
    let adjustCollateral = _0
    if (position2.minus(deltaPosition).isZero() || !normalizedClose.isZero()) {
      // strategy: let new margin balance = openPositionMargin
      adjustCollateral = openPositionMargin.minus(afterTrade.accountComputed.marginBalance)
    } else {
      // strategy: always append positionMargin of openPosition
      adjustCollateral = openPositionMargin
    }
    // margin + adjustCollateral >= keeperGasReward
    adjustCollateral = BigNumber.maximum(adjustCollateral, perpetual.keeperGasReward.minus(afterTrade.accountComputed.marginBalance))
    return adjustCollateral
  }
}

export function computeAMMTrade(
  p: LiquidityPoolStorage,
  perpetualIndex: number,
  trader: AccountStorage,
  amount: BigNumberish, // trader's perspective
  options: TradeFlag,
): AMMTradingResult {
  const normalizedAmount = normalizeBigNumberish(amount)
  if (normalizedAmount.isZero()) {
    throw new InvalidArgumentError(`bad amount ${normalizedAmount.toFixed()}`)
  }
  const perpetual = p.perpetuals.get(perpetualIndex)
  if (!perpetual) {
    throw new InvalidArgumentError(`perpetual {perpetualIndex} not found in the pool`)
  }
  let oldOpenInterest = perpetual.openInterest
  let newOpenInterest = oldOpenInterest

  // AMM
  const { deltaAMMAmount, tradingPrice } = computeAMMPrice(p, perpetualIndex, normalizedAmount)
  if (!deltaAMMAmount.negated().eq(normalizedAmount)) {
    throw new BugError(
      `trading amount mismatched ${deltaAMMAmount.negated().toFixed()} != ${normalizedAmount.toFixed()}`
    )
  }

  // trader
  const traderResult = computeTradeWithPrice(
    p,
    perpetualIndex,
    trader,
    tradingPrice,
    deltaAMMAmount.negated(),
    perpetual.lpFeeRate.plus(p.vaultFeeRate).plus(perpetual.operatorFeeRate),
    options
  )
  newOpenInterest = computeOpenInterest(newOpenInterest, trader.positionAmount, deltaAMMAmount.negated())

  // fee
  const totalFeeRate = perpetual.lpFeeRate.plus(p.vaultFeeRate).plus(perpetual.operatorFeeRate)
  const lpFee = totalFeeRate.isZero() ? _0 : traderResult.totalFee.times(perpetual.lpFeeRate).div(totalFeeRate)

  // new AMM
  let newPoolCashBalance = p.poolCashBalance.minus(deltaAMMAmount.times(tradingPrice))
                                            .plus(perpetual.unitAccumulativeFunding.times(deltaAMMAmount))
                                            .plus(lpFee)
  newOpenInterest = computeOpenInterest(newOpenInterest, perpetual.ammPositionAmount, deltaAMMAmount)
  const newPool: LiquidityPoolStorage = {
    // clone the old pool to keep the return value immutable
    ...p,
    poolCashBalance: newPoolCashBalance,
    perpetuals: new Map(p.perpetuals)
  }
  newPool.perpetuals.set(perpetualIndex, {
    ...perpetual,
    ammPositionAmount: perpetual.ammPositionAmount.plus(deltaAMMAmount),
    openInterest: newOpenInterest,
  })

  // check open interest limit
  if (newOpenInterest.gt(oldOpenInterest)) {
    let context = initAMMTradingContext(newPool, perpetualIndex)
    context = computeAMMPoolMargin(context, context.openSlippageFactor, true /* allowUnsafe */)
    const limit = context.poolMargin.times(perpetual.maxOpenInterestRate).div(perpetual.indexPrice)
    if (newOpenInterest.gt(limit)) {
      throw new InsufficientLiquidityError(`open interest exceeds limit: ${newOpenInterest.toFixed()} > ${limit.toFixed()}`)
    }
  }

  return {
    tradeIsSafe: traderResult.tradeIsSafe,
    trader: traderResult.afterTrade,
    newPool,
    totalFee: traderResult.totalFee,
    tradingPrice,
    adjustCollateral: traderResult.adjustCollateral,
  }
}

// don't forget to transfer lpFees into amm after calling this function
export function computeAMMPrice(
  p: LiquidityPoolStorage,
  perpetualIndex: number,
  amount: BigNumberish // trader's perspective
): {
  deltaAMMAmount: BigNumber
  deltaAMMMargin: BigNumber
  tradingPrice: BigNumber
} {
  const normalizedAmount = normalizeBigNumberish(amount)
  if (normalizedAmount.isZero()) {
    throw new InvalidArgumentError(`bad amount ${normalizedAmount.toFixed()}`)
  }
  const ammTrading = computeAMMInternalTrade(p, perpetualIndex, normalizedAmount.negated())
  const deltaAMMMargin = ammTrading.deltaMargin
  const deltaAMMAmount = ammTrading.deltaPosition
  const tradingPrice = deltaAMMMargin.div(deltaAMMAmount).abs()
  return { deltaAMMAmount, deltaAMMMargin, tradingPrice }
}

// > 0 if more collateral required
export function computeOpenInterest(
  oldOpenInterest: BigNumber,
  oldPosition: BigNumber,
  tradeAmount: BigNumber): BigNumber {
  let newOpenInterest = oldOpenInterest
  let newPosition = oldPosition.plus(tradeAmount)
  if (oldPosition.gt(_0)) {
    newOpenInterest = newOpenInterest.minus(oldPosition)
  }
  if (newPosition.gt(_0)) {
    newOpenInterest = newOpenInterest.plus(newPosition)
  }
  return newOpenInterest
}
