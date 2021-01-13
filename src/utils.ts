import { BigNumber } from 'bignumber.js'
import { _MAX_UINT256, _0, _1, _2, _3, DECIMALS } from './constants'
import { BigNumberish, SignerOrProvider, InvalidArgumentError } from './types'
import { ethers } from 'ethers'

export async function getContract(
  address: string,
  ABI: string,
  signerOrProvider: SignerOrProvider
): Promise<ethers.Contract> {
  return new ethers.Contract(address, ABI, signerOrProvider)
}

export function normalizeBigNumberish(bigNumberish: BigNumberish): BigNumber {
  const bigNumber: BigNumber = bigNumberish instanceof BigNumber
    ? bigNumberish
    : new BigNumber(bigNumberish.toString())
  if (bigNumber.isNaN()) {
    throw new InvalidArgumentError(`Passed bigNumberish '${bigNumberish}' of type '${typeof bigNumberish}' is not valid.`)
  }
  return bigNumber
}

export function normalizeAddress(address: string): string {
  return ethers.utils.getAddress(address.toLowerCase())
}

export function hasTheSameSign(x: BigNumber, y: BigNumber): boolean {
  if (x.s === null || y.s === null) {
    throw new InvalidArgumentError(`null x or y`)
  }
  if (x.isZero() || y.isZero()) {
    return true
  }
  return (x.s ^ y.s) == 0
}

export function splitAmount(positionAmount: BigNumber, amount: BigNumber): { close: BigNumber, open: BigNumber } {
  if (hasTheSameSign(positionAmount, amount)) {
    return { close: _0, open: amount }
  } else if (positionAmount.abs().gte(amount.abs())) {
    return { close: amount, open: _0 }
  } else {
    return { close: positionAmount.negated(), open: positionAmount.plus(amount) }
  }
}

export function mostSignificantBit(x: BigNumber): number {
  let t: BigNumber
  let r = 0
  if ((t = (x.idiv('340282366920938463463374607431768211456'))).gt(_0)) { x = t; r += 128 }
  if ((t = (x.idiv('18446744073709551616'))).gt(_0)) { x = t; r += 64 }
  if ((t = (x.idiv('4294967296'))).gt(_0)) { x = t; r += 32 }
  if ((t = (x.idiv('65536'))).gt(_0)) { x = t; r += 16 }
  if ((t = (x.idiv('256'))).gt(_0)) { x = t; r += 8 }
  if ((t = (x.idiv('16'))).gt(_0)) { x = t; r += 4 }
  if ((t = (x.idiv('4'))).gt(_0)) { x = t; r += 2 }
  if ((t = (x.idiv('2'))).gt(_0)) { x = t; r += 1 }
  return r
}

export function sqrt(y: BigNumber): BigNumber {
  if (y.lt(_0)) {
    throw new InvalidArgumentError('negative sqrt')
  }
  
  // we use 10**36 before sqrt
  y = y.shiftedBy(DECIMALS * 2).dp(0, BigNumber.ROUND_DOWN)
  if (y.lt(_3)) {
    const z = y.plus(_1).div(_2)
    return z.shiftedBy(-DECIMALS).dp(DECIMALS, BigNumber.ROUND_DOWN)
  }

  // binary estimate
  // https://en.wikipedia.org/wiki/Methods_of_computing_square_roots#Binary_estimates
  let n = mostSignificantBit(y)
  n = Math.floor((n + 1) / 2)
  let next = _2.pow(n - 1)
  next = next.plus(y.div(_2.pow(n + 1)).dp(0, BigNumber.ROUND_DOWN))

  // modified babylonian method
  // https://github.com/Uniswap/uniswap-v2-core/blob/v1.0.1/contracts/libraries/Math.sol#L11
  let z = y
  while (next.lt(z)) {
    z = next
    next = y.div(next).plus(next).div(_2)
    next = next.dp(0, BigNumber.ROUND_DOWN)
  }
  return z.shiftedBy(-DECIMALS).dp(DECIMALS, BigNumber.ROUND_DOWN)
}
