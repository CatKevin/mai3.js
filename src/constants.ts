import BigNumber from 'bignumber.js'

export const DECIMALS = 18
export const FUNDING_TIME = 28800

export const _0: BigNumber = new BigNumber('0')
export const _1: BigNumber = new BigNumber('1')
export const _2: BigNumber = new BigNumber('2')
export const _3: BigNumber = new BigNumber('3')

export const CHAIN_ID_TO_READER_ADDRESS: { [chainID: number]: string } = {
  // kovan
  42: '0x1605275a33b2ab2f00dc96e75190b3fe49272401',
  // s10poa
  1337: '0xAc8D499B661D5423Ce0c36461F00CEb32D04feC6'
}

export const CHAIN_ID_TO_POOL_CREATOR_ADDRESS: { [chainID: number]: string } = {
  42: '0xF55cF7BbaF548115DCea6DF10c57DF7c7eD88b9b',
  1337: '0x89210672214826533dC7c014987be77e8de6E498'
}

export const CHAIN_ID_TO_BROKER_ADDRESS: { [chainID: number]: string } = {
  42: '0xA529f01Fd86908b3b1afccB16eCf0A1a3d9F4d32',
  1337: '0xAE46009A8F054f871217f27518D4f2DEF535333d'
}

export const CHAIN_ID_TO_ORACLE_ROUTER_CREATOR_ADDRESS: { [chainID: number]: string } = {
  42: '0x380bd9EE6c4a00a4c98a64CBcC5bd6affBEa06a7',
  1337: '0xc7b1229fd865f8CC0964FeEDCE7ACa288a8E0A36'
}

// leave 1% when calculating withdrawal penalty if position != 0
export const REMOVE_LIQUIDITY_MAX_SHARE_RELAX = new BigNumber('0.99')
