import { BigNumber } from 'bignumber.js'
import { ethers } from 'ethers'
import { Provider } from "@ethersproject/providers"

export type BigNumberish = BigNumber | ethers.BigNumber | string | number

export type SignerOrProvider = ethers.Signer | Provider

/**
 * Indicates that the AMM has insufficient reserves for a desired amount.
 * I.e. if the trade completes, the margin of the AMM will be not enough.
 */
export class InsufficientLiquidityError extends Error {
  public readonly isInsufficientLiquidityError: true = true

  public constructor(message: string) {
    super()
    this.name = message
  }
}

/**
 * Indicates that calling convention error or bugs happened.
 */
export class BugError extends Error {
  public constructor(message: string) {
    super()
    this.name = message
  }
}

export interface PerpetualContract {
  contract: ethers.Contract
}

export interface PerpetualStorage {
  // perpetual gov
  underlyingSymbol: string
  collateralTokenAddress: string
  shareTokenAddress: string
  oracleAddress: string
  initialMarginRate: BigNumber
  maintenanceMarginRate: BigNumber
  operatorFeeRate: BigNumber
  vaultFeeRate: BigNumber
  lpFeeRate: BigNumber
  referrerRebateRate: BigNumber
  liquidatorPenaltyRate: BigNumber
  keeperGasReward: BigNumber

  // amm gov
  halfSpreadRate: BigNumber
  beta1: BigNumber
  beta2: BigNumber
  fundingRateCoefficient: BigNumber
  targetLeverage: BigNumber

  // perpetual state
  isEmergency: boolean
  isGlobalSettled: boolean
  insuranceFund1: BigNumber
  insuranceFund2: BigNumber
  markPrice: BigNumber
  indexPrice: BigNumber
  accumulatedFundingPerContract: BigNumber
  fundingTime: number
}

export interface AccountStorage {
  cashBalance: BigNumber
  positionAmount: BigNumber
  entryFundingLoss: BigNumber

  // read from the graph
  entryValue: BigNumber | null
}

export interface AccountComputed {
  positionValue: BigNumber
  positionMargin: BigNumber
  leverage: BigNumber
  maintenanceMargin: BigNumber
  fundingLoss: BigNumber
  availableCashBalance: BigNumber // cash - loss
  marginBalance: BigNumber // cash + i pos - loss
  availableMargin: BigNumber
  maxWithdrawable: BigNumber
  withdrawableBalance: BigNumber
  isSafe: boolean

  entryPrice: BigNumber | null
  pnl1: BigNumber | null // exit - entry if entry != null
  pnl2: BigNumber | null // pnl1 - loss if entry != null
  roe: BigNumber | null
  liquidationPrice: BigNumber
}

export interface AccountDetails {
  accountStorage: AccountStorage
  accountComputed: AccountComputed
}

export interface TradeCost {
  account: AccountDetails
  marginCost: BigNumber
  fee: BigNumber
}

export interface AMMTradingContext {
  index: BigNumber
  lev: BigNumber
  cash: BigNumber
  pos1: BigNumber
  isSafe: boolean
  m0: BigNumber // original margin
  mv: BigNumber // virtual margin
  ma1: BigNumber // available margin
  deltaMargin: BigNumber // ma2 - ma1
  deltaPosition: BigNumber // pos2 - pos1
}

export interface TradingContext {
  takerAccount: AccountStorage
  makerAccount: AccountStorage
  lpFee: BigNumber
  vaultFee: BigNumber
  operatorFee: BigNumber
  tradingPrice: BigNumber
}
