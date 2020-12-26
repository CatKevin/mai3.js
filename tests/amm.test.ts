import BigNumber from 'bignumber.js'
import {
  initAMMTradingContext,
  initAMMTradingContextEagerEvaluation,
  computeAMMInternalTrade,
  computeAMMPoolMargin,
  isAMMSafe,
  computeDeltaMargin,
  computeAMMSafeShortPositionAmount,
  computeAMMSafeLongPositionAmount,
  computeBestAskBidPrice,
  computeFundingRate,
} from '../src/amm'
import { _0, _1 } from '../src/constants'
import {
  PerpetualState,
  PerpetualStorage,
  LiquidityPoolStorage,
  AMMTradingContext,
  InsufficientLiquidityError,
} from '../src/types'
import { normalizeBigNumberish } from '../src/utils'
import { extendExpect } from './helper'

extendExpect()

const defaultPool: LiquidityPoolStorage = {
  operator: '0x0',
  collateral: '0x0',
  vault: '0x0',
  governor: '0x0',
  shareToken: '0x0',

  vaultFeeRate: new BigNumber(0.0001),
  insuranceFundCap: new BigNumber(10000),
  insuranceFund: _0,
  donatedInsuranceFund: _0,
  totalClaimableFee: _0,
  poolCashBalance: _0, // set me later
  fundingTime: 1579601290,
  
  perpetuals: new Map() // set me later
}

const perpetual1: PerpetualStorage = {
  symbol: 0,
  underlyingSymbol: 'T',
  state: PerpetualState.NORMAL,
  oracle: "0x0",

  markPrice: new BigNumber(95),
  indexPrice: new BigNumber(100),
  unitAccumulativeFunding: new BigNumber('1.9'),

  initialMarginRate: new BigNumber(0.1),
  maintenanceMarginRate: new BigNumber(0.05),
  operatorFeeRate: new BigNumber(0.0001),
  lpFeeRate: new BigNumber(0.0008),
  referrerRebateRate: new BigNumber(0.0000),
  liquidationPenaltyRate: new BigNumber(0.005),
  keeperGasReward: new BigNumber(2),
  insuranceFundRate: new BigNumber(0.0001),

  halfSpread: new BigNumber(0.001),
  openSlippageFactor: new BigNumber(100),
  closeSlippageFactor: new BigNumber(90),
  fundingRateLimit: new BigNumber(0.005),
  ammMaxLeverage: new BigNumber(3),

  ammCashBalance: _0, // assign me later
  ammPositionAmount: _0, // assign me later
}

const TEST_MARKET_INDEX0 = 0
const TEST_MARKET_INDEX1 = 1

// [0] zero
// available cash = 10000
// available margin = 10000, 10000
// max pos2 = 100, -141.42135623730950488
const poolStorage0: LiquidityPoolStorage = {
  ...defaultPool,
  poolCashBalance: new BigNumber('10000'),
  perpetuals: new Map([
    [TEST_MARKET_INDEX0, { ...perpetual1, ammPositionAmount: _0 }],
    [TEST_MARKET_INDEX1, { ...perpetual1, ammPositionAmount: _0 }],
  ]),
}

// [1] short 1: normal
// available cash = 10100 - 1.9 * (-10) - 1.9 * (10) = 10100
// available margin = 10000, 10005.0479311506160242805
// max pos2 = -141.067359796658844252
const poolStorage1: LiquidityPoolStorage = {
  ...defaultPool,
  poolCashBalance: new BigNumber('10100'),
  perpetuals: new Map([
    [TEST_MARKET_INDEX0, { ...perpetual1, ammPositionAmount: new BigNumber('-10') }],
    [TEST_MARKET_INDEX1, { ...perpetual1, ammPositionAmount: new BigNumber('10') }],
  ]),
}

// [2] short 2: loss but safe
// available cash = 14599 - 1.9 * (-50) - 1.9 * (10) = 14675
// available margin = 9273.09477715884768908142691791, 9428.820844177342198192
// max pos2 = -130.759540184393963844
const poolStorage2: LiquidityPoolStorage = {
  ...defaultPool,
  poolCashBalance: new BigNumber('14599'),
  perpetuals: new Map([
    [TEST_MARKET_INDEX0, { ...perpetual1, ammPositionAmount: new BigNumber('-50') }],
    [TEST_MARKET_INDEX1, { ...perpetual1, ammPositionAmount: new BigNumber('10') }],
  ]),
}

// [3] short 3: unsafe
// available cash = 16753.12619691409782671538929731 - 1.9 * (-80) - 1.9 * (10) = 16886.12619691409782671538929731
// available margin = unsafe / unsafe
const poolStorage3: LiquidityPoolStorage = {
  ...defaultPool,
  poolCashBalance: new BigNumber('16753.12619691409782671538929731'),
  perpetuals: new Map([
    [TEST_MARKET_INDEX0, { ...perpetual1, ammPositionAmount: new BigNumber('-80') }],
    [TEST_MARKET_INDEX1, { ...perpetual1, ammPositionAmount: new BigNumber('10') }],
  ]),
}

// [4] long 1: normal
// available cash = 8138 - 1.9 * (10) - 1.9 * (10)= 8100
// available margin = 10000, 10005.0479311506160242805
// max pos2 = 100
const poolStorage4: LiquidityPoolStorage = {
  ...defaultPool,
  poolCashBalance: new BigNumber('8138'),
  perpetuals: new Map([
    [TEST_MARKET_INDEX0, { ...perpetual1, ammPositionAmount: new BigNumber('10') }],
    [TEST_MARKET_INDEX1, { ...perpetual1, ammPositionAmount: new BigNumber('10') }],
  ]),
}

// [5] long 2: loss but safe
// available cash = 1664 - 1.9 * (50) - 1.9 * (10) = 1550
// available margin = 4893.31346231725208539935787445, 5356.336460086846919343
// max pos2 = 48.933134623172520854
const poolStorage5: LiquidityPoolStorage = {
  ...defaultPool,
  poolCashBalance: new BigNumber('1664'),
  perpetuals: new Map([
    [TEST_MARKET_INDEX0, { ...perpetual1, ammPositionAmount: new BigNumber('50') }],
    [TEST_MARKET_INDEX1, { ...perpetual1, ammPositionAmount: new BigNumber('10') }],
  ]),
}

// [6]
// long 3: unsafe
// available cash = 1925 - 1.9 * (80) - 1.9 * (10) = 1754
// available margin = unsafe / unsafe
const poolStorage6: LiquidityPoolStorage = {
  ...defaultPool,
  poolCashBalance: new BigNumber('1925'),
  perpetuals: new Map([
    [TEST_MARKET_INDEX0, { ...perpetual1, ammPositionAmount: new BigNumber('80') }],
    [TEST_MARKET_INDEX1, { ...perpetual1, ammPositionAmount: new BigNumber('10') }],
  ]),
}

describe('computeM0', function () {
  const openSlippageFactor = new BigNumber('100')

  interface ComputeAccountCase {
    amm: LiquidityPoolStorage
    availableCash: BigNumber
    isAMMSafe: boolean
    poolMargin: BigNumber
  }

  const successCases: Array<ComputeAccountCase> = [
    {
      amm: poolStorage0,
      availableCash: new BigNumber('10000'),
      isAMMSafe: true,
      poolMargin: new BigNumber('10000'),
    },
    {
      amm: poolStorage1,
      availableCash: new BigNumber('10100'),
      isAMMSafe: true,
      poolMargin: new BigNumber('10000'),
    },
    {
      amm: poolStorage2,
      availableCash: new BigNumber('14675'),
      isAMMSafe: true,
      poolMargin: new BigNumber('9273.09477715884768908142691791'),
    },
    {
      amm: poolStorage3,
      availableCash: new BigNumber('16886.12619691409782671538929731'),
      isAMMSafe: false,
      poolMargin: _0
    },
    {
      amm: poolStorage4,
      availableCash: new BigNumber('8100'),
      isAMMSafe: true,
      poolMargin: new BigNumber('10000'),
    },
    {
      amm: poolStorage5,
      availableCash: new BigNumber('1550'),
      isAMMSafe: true,
      poolMargin: new BigNumber('4893.31346231725208539935787445'),
    },
    {
      amm: poolStorage6,
      availableCash: new BigNumber('1754'),
      isAMMSafe: false,
      poolMargin: _0,
    },
  ]

  successCases.forEach((element, index) => {
    it(`${index}`, function () {
      const context1 = initAMMTradingContext(element.amm, TEST_MARKET_INDEX0)
      expect(context1.cash).toApproximate(normalizeBigNumberish(element.availableCash))

      const safe = isAMMSafe(context1, openSlippageFactor)
      expect(safe).toEqual(element.isAMMSafe)

      if (element.isAMMSafe) {
        const context2 = computeAMMPoolMargin(context1, openSlippageFactor)
        expect(context2.poolMargin).toApproximate(normalizeBigNumberish(element.poolMargin))
      }
    })
  })
})

describe('isAMMSafe', function () {
  // long: larger index is safer
  it(`long - always safe (sqrt < 0)`, function () {
    const context: AMMTradingContext = initAMMTradingContextEagerEvaluation({
      cash: new BigNumber('100000'),
      index: new BigNumber('1'),
      position1: new BigNumber('110'),
      otherIndex: [ new BigNumber('100') ],
      otherPosition: [ new BigNumber('1') ],
      openSlippageFactor: new BigNumber('1000'),
      closeSlippageFactor: new BigNumber('1000'),
      halfSpread: _0, fundingRateLimit: _0, ammMaxLeverage: _0,
      otherOpenSlippageFactor: [ new BigNumber('100') ],
      otherAMMMaxLeverage: [ _0 ],
      poolMargin: _0, deltaMargin: _0, deltaPosition: _0, bestAskBidPrice: null,
      valueWithoutCurrent: _0, squareValueWithoutCurrent: _0, positionMarginWithoutCurrent: _0,
    })
    expect(isAMMSafe(context, new BigNumber('1000') /* beta */)).toBeTruthy()
  })
  it(`long - ok`, function () {
    const context: AMMTradingContext = initAMMTradingContextEagerEvaluation({
      cash: new BigNumber('10000'),
      index: new BigNumber('337.9088160260'),
      position1: new BigNumber('100'),
      otherIndex: [ new BigNumber('100') ],
      otherPosition: [ new BigNumber('1000') ],
      openSlippageFactor: new BigNumber('100'),
      closeSlippageFactor: new BigNumber('100'),
      halfSpread: _0, fundingRateLimit: _0, ammMaxLeverage: _0,
      otherOpenSlippageFactor: [ new BigNumber('100') ],
      otherAMMMaxLeverage: [ _0 ],
      poolMargin: _0, deltaMargin: _0, deltaPosition: _0, bestAskBidPrice: null,
      valueWithoutCurrent: _0, squareValueWithoutCurrent: _0, positionMarginWithoutCurrent: _0,
    })
    expect(isAMMSafe(context, new BigNumber('100') /* beta */)).toBeTruthy()
  })
  it(`long - fail`, function () {
    const context: AMMTradingContext = initAMMTradingContextEagerEvaluation({
      cash: new BigNumber('10000'),
      index: new BigNumber('337.9088160259'),
      position1: new BigNumber('100'),
      otherIndex: [ new BigNumber('100') ],
      otherPosition: [ new BigNumber('1000') ],
      openSlippageFactor: new BigNumber('100'),
      closeSlippageFactor: new BigNumber('100'),
      halfSpread: _0, fundingRateLimit: _0, ammMaxLeverage: _0,
      otherOpenSlippageFactor: [ new BigNumber('100') ],
      otherAMMMaxLeverage: [ _0 ],
      poolMargin: _0, deltaMargin: _0, deltaPosition: _0, bestAskBidPrice: null,
      valueWithoutCurrent: _0, squareValueWithoutCurrent: _0, positionMarginWithoutCurrent: _0,
    })
    expect(isAMMSafe(context, new BigNumber('100') /* beta */)).toBeFalsy()
  })
  // short: lower index is safer
  it(`short - unsafe (margin balance < 0)`, function () {
    const context: AMMTradingContext = initAMMTradingContextEagerEvaluation({
      cash: new BigNumber('100000'),
      index: new BigNumber('1'),
      position1: new BigNumber('-110'),
      otherIndex: [ new BigNumber('100') ],
      otherPosition: [ new BigNumber('-1001') ],
      openSlippageFactor: new BigNumber('1000'),
      closeSlippageFactor: new BigNumber('1000'),
      halfSpread: _0, fundingRateLimit: _0, ammMaxLeverage: _0,
      otherOpenSlippageFactor: [ new BigNumber('100') ],
      otherAMMMaxLeverage: [ _0 ],
      poolMargin: _0, deltaMargin: _0, deltaPosition: _0, bestAskBidPrice: null,
      valueWithoutCurrent: _0, squareValueWithoutCurrent: _0, positionMarginWithoutCurrent: _0,
    })
    expect(isAMMSafe(context, new BigNumber('100') /* beta */)).toBeFalsy()
  })
  it(`short - ok`, function () {
    const context: AMMTradingContext = initAMMTradingContextEagerEvaluation({
      cash: new BigNumber('100000'),
      index: new BigNumber('482.1023652650379499133'),
      position1: new BigNumber('-110'),
      otherIndex: [ new BigNumber('100') ],
      otherPosition: [ new BigNumber('-100') ],
      openSlippageFactor: new BigNumber('100'),
      closeSlippageFactor: new BigNumber('100'),
      halfSpread: _0, fundingRateLimit: _0, ammMaxLeverage: _0,
      otherOpenSlippageFactor: [ new BigNumber('100') ],
      otherAMMMaxLeverage: [ _0 ],
      poolMargin: _0, deltaMargin: _0, deltaPosition: _0, bestAskBidPrice: null,
      valueWithoutCurrent: _0, squareValueWithoutCurrent: _0, positionMarginWithoutCurrent: _0,
    })
    expect(isAMMSafe(context, new BigNumber('100') /* beta */)).toBeTruthy()
  })
  it(`short - fail`, function () {
    const context: AMMTradingContext = initAMMTradingContextEagerEvaluation({
      cash: new BigNumber('100000'),
      index: new BigNumber('482.1023652650379499134'),
      position1: new BigNumber('-110'),
      otherIndex: [ new BigNumber('100') ],
      otherPosition: [ new BigNumber('-100') ],
      openSlippageFactor: new BigNumber('100'),
      closeSlippageFactor: new BigNumber('100'),
      halfSpread: _0, fundingRateLimit: _0, ammMaxLeverage: _0,
      otherOpenSlippageFactor: [ new BigNumber('100') ],
      otherAMMMaxLeverage: [ _0 ],
      poolMargin: _0, deltaMargin: _0, deltaPosition: _0, bestAskBidPrice: null,
      valueWithoutCurrent: _0, squareValueWithoutCurrent: _0, positionMarginWithoutCurrent: _0,
    })
    expect(isAMMSafe(context, new BigNumber('100') /* beta */)).toBeFalsy()
  })
})

describe('computeDeltaMargin', function () {
  const openSlippageFactor = new BigNumber('100')
  interface ComputeAccountCase {
    name: string
    amm: LiquidityPoolStorage
    pos2: BigNumber

    // expected
    deltaMargin: BigNumber
  }

  const successCases: Array<ComputeAccountCase> = [
    {
      name: '0 -> +5',
      amm: poolStorage0,
      pos2: new BigNumber('5'),
      deltaMargin: new BigNumber('-487.5')
    },
    {
      name: '0 -> -5',
      amm: poolStorage0,
      pos2: new BigNumber('-5'),
      deltaMargin: new BigNumber('512.5')
    },
  ]

  successCases.forEach(element => {
    it(element.name, function () {
      const context = computeAMMPoolMargin(initAMMTradingContext(element.amm, TEST_MARKET_INDEX0), openSlippageFactor)
      const deltaMargin = computeDeltaMargin(context, openSlippageFactor, element.pos2)
      expect(deltaMargin).toApproximate(normalizeBigNumberish(element.deltaMargin))
    })
  })
})

describe('safePosition', function () {
  it('short: condition3 √, condition2 ∞. condition 3 selected', function () {
    const beta = new BigNumber('100')
    const context = computeAMMPoolMargin(initAMMTradingContext(poolStorage1, TEST_MARKET_INDEX0), beta)
    expect(isAMMSafe(context, beta)).toBeTruthy()
    const pos2 = computeAMMSafeShortPositionAmount(context, beta)
    expect(pos2).toApproximate(normalizeBigNumberish(new BigNumber('-141.067359796658844252321636909')))
  })

  it('short: condition3 √, condition2 √. condition 2 selected', function () {
    const beta = new BigNumber('100')
    const context = computeAMMPoolMargin(initAMMTradingContext({
      ...poolStorage1,
      perpetuals: new Map([
        [TEST_MARKET_INDEX0, {
          ...poolStorage1.perpetuals.get(TEST_MARKET_INDEX0) as PerpetualStorage,
          ammMaxLeverage: new BigNumber('0.5'), }],
        [TEST_MARKET_INDEX1, poolStorage1.perpetuals.get(TEST_MARKET_INDEX1) as PerpetualStorage],
      ])
    }, TEST_MARKET_INDEX0), beta)
    expect(isAMMSafe(context, beta)).toBeTruthy()
    const pos2 = computeAMMSafeShortPositionAmount(context, beta)
    expect(pos2).toApproximate(normalizeBigNumberish(new BigNumber('-56.589168238006977708561982164')))
  })

  it('short: condition3 √, condition2 √. condition 3 selected', function () {
    const beta = new BigNumber('142.6933822319389')
    const context = computeAMMPoolMargin(initAMMTradingContext({
      ...poolStorage1,
      perpetuals: new Map([
        [TEST_MARKET_INDEX0, {
          ...poolStorage1.perpetuals.get(TEST_MARKET_INDEX0) as PerpetualStorage,
          ammMaxLeverage: new BigNumber('0.5'), indexPrice: new BigNumber(100),
          ammPositionAmount: new BigNumber('-10'), openSlippageFactor: beta }],
        [TEST_MARKET_INDEX1, {
          ...poolStorage1.perpetuals.get(TEST_MARKET_INDEX1) as PerpetualStorage,
          indexPrice: new BigNumber('90'),
          ammPositionAmount: new BigNumber('85.5148648938521'), openSlippageFactor: new BigNumber('200'), }],
        ])
    }, TEST_MARKET_INDEX0), beta)
    expect(isAMMSafe(context, beta)).toBeTruthy()
    const pos2 = computeAMMSafeShortPositionAmount(context, beta)
    expect(pos2).toApproximate(normalizeBigNumberish(new BigNumber('-69.2197544117782')))
  })

  it('short: condition3 ∞', function () {
    // TODO
  })

  it('long: condition3 √, condition2 ∞, condition 1 selected', function () {
    const beta = new BigNumber('100')
    const context = computeAMMPoolMargin(initAMMTradingContext(poolStorage4, TEST_MARKET_INDEX0), beta)
    expect(isAMMSafe(context, beta)).toBeTruthy()
    const pos2 = computeAMMSafeLongPositionAmount(context, beta)
    expect(pos2).toApproximate(normalizeBigNumberish(new BigNumber('100')))
  })

  it('long: condition3 √, condition2 √, condition 2 selected', function () {
    const beta = new BigNumber('100')
    const context = computeAMMPoolMargin(initAMMTradingContext({
      ...poolStorage4,
      perpetuals: new Map([
        [TEST_MARKET_INDEX0, {
          ...poolStorage4.perpetuals.get(TEST_MARKET_INDEX0) as PerpetualStorage,
          ammMaxLeverage: new BigNumber('0.5'), }],
        [TEST_MARKET_INDEX1, poolStorage4.perpetuals.get(TEST_MARKET_INDEX1) as PerpetualStorage],
      ])
    }, TEST_MARKET_INDEX0), beta)
    expect(isAMMSafe(context, beta)).toBeTruthy()
    const pos2 = computeAMMSafeLongPositionAmount(context, beta)
    expect(pos2).toApproximate(normalizeBigNumberish(new BigNumber('56.589168238006977708561982164')))
  })

  it('long: condition3 √, condition2 ∞, condition 3 selected', function () {
    const beta = new BigNumber('39.77')
    const context = computeAMMPoolMargin(initAMMTradingContext({
      ...poolStorage4,
      perpetuals: new Map([
        [TEST_MARKET_INDEX0, {
          ...poolStorage4.perpetuals.get(TEST_MARKET_INDEX0) as PerpetualStorage,
          openSlippageFactor: beta }],
        [TEST_MARKET_INDEX1, {
          ...poolStorage4.perpetuals.get(TEST_MARKET_INDEX1) as PerpetualStorage,
          indexPrice: new BigNumber('10'),
          ammPositionAmount: new BigNumber('-109'), openSlippageFactor: new BigNumber('30'), }],
        ])
    }, TEST_MARKET_INDEX0), beta)
    expect(isAMMSafe(context, beta)).toBeTruthy()
    const pos2 = computeAMMSafeLongPositionAmount(context, beta)
    expect(pos2).toApproximate(normalizeBigNumberish(new BigNumber('176.61598769492977')))
  })

  it('long: condition3 ∞', function () {
    // TODO
  })
})

describe('trade - success', function () {
  interface ComputeAccountCase {
    name: string
    amm: LiquidityPoolStorage
    amount: BigNumber

    // expected
    deltaMargin: BigNumber
  }

  const successCases: Array<ComputeAccountCase> = [
    {
      name: 'open 0 -> -141.421, near pos2 limit',
      amm: poolStorage0,
      amount: new BigNumber('-141.421'),
      deltaMargin: new BigNumber('24142.0496205')
    },
    {
      name: 'open 0 -> -0.1, effected by spread',
      amm: poolStorage0,
      amount: new BigNumber('-0.1'),
      deltaMargin: new BigNumber('10.01')
    },
    {
      name: 'open -10 -> -141.067, near pos2 limit',
      amm: poolStorage1,
      amount: new BigNumber('-131.067'),
      deltaMargin: new BigNumber('23006.6492445')
    },
    {
      name: 'open -10 -> -10.1, effected by spread',
      amm: poolStorage1,
      amount: new BigNumber('-0.1'),
      deltaMargin: new BigNumber('11.011')
    },
    {
      name: 'open 0 -> 100, near pos2 limit',
      amm: poolStorage0,
      amount: new BigNumber('100'),
      deltaMargin: new BigNumber('-5000')
    },
    {
      name: 'open 0 -> 0.1, effected by spread',
      amm: poolStorage0,
      amount: new BigNumber('0.1'),
      deltaMargin: new BigNumber('-9.99')
    },
    {
      name: 'open 10 -> 100, near pos2 limit',
      amm: poolStorage4,
      amount: new BigNumber('90'),
      deltaMargin: new BigNumber('-4050')
    },
    {
      name: 'open 10 -> 10.1, effected by spread',
      amm: poolStorage4,
      amount: new BigNumber('0.1'),
      deltaMargin: new BigNumber('-8.991')
    },
    {
      name: 'close -10 -> -9, normal',
      amm: poolStorage1,
      amount: new BigNumber('1'),
      deltaMargin: new BigNumber('-108.54568619644455781471685713')
    },
    {
      name: 'close -10 -> -9.9, effected by spread',
      amm: poolStorage1,
      amount: new BigNumber('0.1'),
      deltaMargin: new BigNumber('-10.88864636949980139546338319')
    },
    {
      name: 'close -10 -> 0, to zero',
      amm: poolStorage1,
      amount: new BigNumber('10'),
      deltaMargin: new BigNumber('-1044.97729577076083060377293227')
    },
    {
      name: 'close 10 -> 9, normal',
      amm: poolStorage4,
      amount: new BigNumber('-1'),
      deltaMargin: new BigNumber('91.45431380355544218528314287')
    },
    {
      name: 'close 10 -> 9.9, effected by spread',
      amm: poolStorage4,
      amount: new BigNumber('-0.1'),
      deltaMargin: new BigNumber('9.109554538669368171312465896')
    },
    {
      name: 'close 10 -> 0',
      amm: poolStorage4,
      amount: new BigNumber('-10'),
      deltaMargin: new BigNumber('955.02270422923916939622706773')
    },
    {
      name: 'close unsafe -10 -> -9, normal',
      amm: poolStorage3,
      amount: new BigNumber('1'),
      deltaMargin: new BigNumber('-99.9')
    },
    {
      name: 'close unsafe -10 -> -9.9, small',
      amm: poolStorage3,
      amount: new BigNumber('0.1'),
      deltaMargin: new BigNumber('-9.99')
    },
    {
      name: 'close unsafe 10 -> 9, normal',
      amm: poolStorage6,
      amount: new BigNumber('-1'),
      deltaMargin: new BigNumber('100.1')
    },
    {
      name: 'close unsafe 10 -> 9, small',
      amm: poolStorage6,
      amount: new BigNumber('-0.1'),
      deltaMargin: new BigNumber('10.01')
    },
  ]

  successCases.forEach(element => {
    it(element.name, function () {
      const context = computeAMMInternalTrade(element.amm, TEST_MARKET_INDEX0, element.amount)
      expect(context.deltaMargin).toApproximate(normalizeBigNumberish(element.deltaMargin))
    })
  })
})

describe('trade - cross 0', function () {

  interface ComputeAccountCase {
    name: string
    amm: LiquidityPoolStorage
    amount: BigNumber
    halfSpread: BigNumber

    // expected
    deltaMargin: BigNumber
  }

  const successCases: Array<ComputeAccountCase> = [
    // {
    //   name: 'cross -10 -> 10, normal',
    //   amm: poolStorage1,
    //   amount: new BigNumber('20'),
    //   halfSpread: new BigNumber('0.001'),
    //   deltaMargin: new BigNumber('-1995.00252269213768548846967419')
    // },
    {
      name: '-10 -> 10, spread only effects closing', // m0 = 10014.6 after closing
      amm: poolStorage1,
      amount: new BigNumber('20'),
      halfSpread: new BigNumber('0.05'),
      deltaMargin: new BigNumber('-1985.52983586465501239241594197') // -1035.45686196444557814716857131 -950.072973900209434245247370659
    },
    // {
    //   name: '-10 -> 10, spread effects closing and part of opening', // m0 = 10014.6 after closing
    //   amm: poolStorage1,
    //   amount: new BigNumber('20'),
    //   halfSpread: new BigNumber('0.05'),
    //   deltaMargin: new BigNumber('-1985.52983586465501239241594197') // -1035.45686196444557814716857131 -950.072973900209434245247370659
    // },
    // {
    //   name: '-10 -> 10, spread effects all',
    //   amm: poolStorage4,
    //   amount: new BigNumber('20'),
    //   halfSpread: new BigNumber('0.002'),
    //   deltaMargin: new BigNumber('2004.99747730786231451153032581')
    // },
    // {
    //   name: 'cross 10 -> -10, normal',
    //   amm: poolStorage4,
    //   amount: new BigNumber('-20'),
    //   halfSpread: new BigNumber('0.001'),
    //   deltaMargin: new BigNumber('2004.99747730786231451153032581')
    // },
  ]

  successCases.forEach(element => {
    it(element.name, function () {
      console.log('>>>>>>>>>>>>>>>>>>>')
      const p1 = element.amm.perpetuals.get(TEST_MARKET_INDEX0) as PerpetualStorage
      const context = computeAMMInternalTrade({
        ...element.amm,
        perpetuals: new Map([
          ...element.amm.perpetuals,
          [TEST_MARKET_INDEX0, { ...p1, halfSpread: element.halfSpread }],
        ]),
      }, TEST_MARKET_INDEX0, new BigNumber(20))
      console.log('>>>>>>>>>>>>>>>>>>>')
      expect(context.deltaMargin).toApproximate(normalizeBigNumberish(element.deltaMargin))
    })
  })
})

describe('trade - fail', function () {
  interface ComputeAccountCase {
    name: string
    amm: LiquidityPoolStorage
    amount: BigNumber
  }

  const failCases: Array<ComputeAccountCase> = [
    {
      name: 'open 0 -> -141.422, pos2 too large',
      amm: poolStorage0,
      amount: new BigNumber('-141.422'),
    },
    {
      name: 'open -10 -> -141.068, pos2 too large',
      amm: poolStorage1,
      amount: new BigNumber('-131.068'),
    },
    {
      name: 'open -10 already unsafe',
      amm: poolStorage3,
      amount: new BigNumber('-0.01'),
    },
    {
      name: 'open 0 -> 100.001',
      amm: poolStorage0,
      amount: new BigNumber('100.001'),
    },
    {
      name: 'open 10 -> 100.001',
      amm: poolStorage4,
      amount: new BigNumber('90.001'),
    },
    {
      name: 'open 10 already unsafe',
      amm: poolStorage6,
      amount: new BigNumber('0.01'),
    },
  ]

  failCases.forEach(element => {
    it(element.name, () => {
      expect((): void => {
        computeAMMInternalTrade(element.amm, TEST_MARKET_INDEX0, element.amount)
      }).toThrow(InsufficientLiquidityError)
    })
  })
})

describe('computeBestAskBidPrice', function () {
  interface ComputeAccountCase {
    name: string
    amm: LiquidityPoolStorage
    isAMMBuy: boolean

    // expected
    price: BigNumber
  }

  const successCases: Array<ComputeAccountCase> = [
    {
      name: 'open 0 -> -x',
      amm: poolStorage0,
      isAMMBuy: false,
      price: new BigNumber('100.1') // trader buy, (1 + α)
    },
    {
      name: 'open -10',
      amm: poolStorage1,
      isAMMBuy: false,
      price: new BigNumber('110.11') // trader buy, (1 + α)
    },
    {
      name: 'open 0 -> +x',
      amm: poolStorage0,
      isAMMBuy: true,
      price: new BigNumber('99.9') // trader sell, (1 - α)
    },
    {
      name: 'open 10',
      amm: poolStorage4,
      isAMMBuy: true,
      price: new BigNumber('89.91') // trader sell, (1 - α)
    },
    {
      name: 'close -10',
      amm: poolStorage1,
      isAMMBuy: true,
      price: new BigNumber('108.88646369499801395463383186703') // trader sell, (1 - α)
    },
    {
      name: 'close 10',
      amm: poolStorage4,
      isAMMBuy: false,
      price: new BigNumber('91.09554538669368171312465896007') // trader buy, (1 + α)
    },
    {
      name: 'close unsafe -10',
      amm: poolStorage3,
      isAMMBuy: true,
      price: new BigNumber('99.9') // trader sell, 100 (1 - α)
    },
    {
      name: 'close unsafe 10',
      amm: poolStorage6,
      isAMMBuy: false,
      price: new BigNumber('100.1') // trader buy, 100 (1 + α)
    },
  ]

  successCases.forEach(element => {
    it(element.name, function () {
      const price = computeBestAskBidPrice(element.amm, TEST_MARKET_INDEX0, element.isAMMBuy)
      expect(price).toApproximate(normalizeBigNumberish(element.price))
    })
  })
})

describe('computeFundingRate', function () {
  it('normal', () => {
    expect(computeFundingRate(poolStorage0, TEST_MARKET_INDEX0)).toApproximate(normalizeBigNumberish('0'))
    expect(computeFundingRate(poolStorage1, TEST_MARKET_INDEX0)).toApproximate(normalizeBigNumberish('0.0005'))
    expect(computeFundingRate(poolStorage2, TEST_MARKET_INDEX0)).toApproximate(normalizeBigNumberish('0.00269597158238683137'))
    expect(computeFundingRate(poolStorage3, TEST_MARKET_INDEX0)).toApproximate(normalizeBigNumberish('0.005'))
    expect(computeFundingRate(poolStorage4, TEST_MARKET_INDEX0)).toApproximate(normalizeBigNumberish('-0.0005'))
    expect(computeFundingRate(poolStorage5, TEST_MARKET_INDEX0)).toApproximate(normalizeBigNumberish('-0.005')) // clip
    expect(computeFundingRate(poolStorage6, TEST_MARKET_INDEX0)).toApproximate(normalizeBigNumberish('-0.005'))
  })
})

