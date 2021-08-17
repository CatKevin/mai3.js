import BigNumber from 'bignumber.js'

export const DECIMALS = 18
export const FUNDING_TIME = 28800

export const _0: BigNumber = new BigNumber('0')
export const _1: BigNumber = new BigNumber('1')
export const _2: BigNumber = new BigNumber('2')
export const _3: BigNumber = new BigNumber('3')

export const CHAIN_ID_TO_READER_ADDRESS: { [chainID: number]: string } = {
  // kovan
  42: '0xA097B75919F7a41221f140215A4C71fD4EFf7582',
  // s10poa
  1337: '0xBA33bA587645068F3D1d82600F3C8912F121BEAD',
  // arb testnet
  421611: '0x9F6928038d5d165536e1adb42163C59452C6C07e',
  // arb one
  42161: '0x708C17D0901B76cc5CF8F67e1a2E198077FD8641',
}

export const CHAIN_ID_TO_POOL_CREATOR_ADDRESS: { [chainID: number]: string } = {
  // kovan
  42: '0x0956a627788199bE312c9a1f2d8cBA70ec30fCb5',
  // s10poa
  1337: '0x43B368193Be128ED2e39806F1C1F8CEc860d1BF0',
  // arb testnet
  421611: '0x0A1334aCea4E38a746daC7DCf7C3E61F0AB3D834',
  // arb one
  42161: '0x9a691eD8a4482799E9419A17B77b6643cB782E20',
}

export const CHAIN_ID_TO_BROKER_ADDRESS: { [chainID: number]: string } = {
  // kovan
  42: '0xE852039e483F6E9aDbb0408a7d970d4cf5Ec879b',
  // s10poa
  1337: '0x3b07b719366F7D20881DC0F89D7Bd21cC34D65FF',
  // arb testnet
  421611: '0x637691459e757Aa6826BF32De679AcFf9955bDfA',
  // arb one
  42161: '0xf985cA33B8b787599DE77E4Ccf2d0Ecbf27d87d9',
}

export const CHAIN_ID_TO_ORACLE_ROUTER_CREATOR_ADDRESS: { [chainID: number]: string } = {
  // kovan
  42: '0x5374F824c4EB93e37Ee21B5CF4e762F246D82d12',
  // s10poa
  1337: '0x372d180ef40873887768eb1d29dA1ca657895CBF',
  // arb testnet
  421611: '0x9730DD5a6eb170082c7c71c2e41332853681bb92',
  // arb one
  42161: '0xC3E272F76b3740C2AcF8e5272CbEF06D70e14FF3',
}

export const CHAIN_ID_SYMBOL_SERVICE_ADDRESS: { [chainID: number]: string } = {
  // kovan
  42: '0x0A701c621210859eAbE2F47BE37456BEc2427462',
  // s10poa
  1337: '0x3567788fD2a50eeAE932DF705E976787FB39C4ce',
  // arb testnet
  421611: '0xA4109D0a36E0e66d64F3B7794C60694Ca6D66E22',
  // arb one
  42161: '0x20911345975ef55e31634a62666729d84aeE3aaB',
}

export const CHAIN_ID_INVERSE_SERVICE_ADDRESS: { [chainID: number]: string } = {
  // kovan
  42: '0xa72F2f8B0Dd531635f71C43fAC9C817eB4F80f9D',
  // s10poa
  1337: '0x0CeF74EDC3BA4de2C20AC8a40547a24e4d57988D',
  // arb testnet
  421611: '0xc4F97bD99f10Ca08Ce9ec9C9CB05C72F358dbC5E',
  // arb one
  42161: '0x129AD040Bd127c00d6De9051b3CfE9F3E36453D3',
}

export const CHAIN_ID_TO_UNISWAP_V3_ORACLE_ROUTER_CREATOR_ADDRESS: { [chainID: number]: string } = {
  // kovan
  42: '0xF67b243CF00ae7343Bd177Edf2d0EC4bAC4F47B7',
  // arb testnet
  421611: '0xAb228a61C66934f7C9091C249e47B313d6109325',
  // arb one
  42161: '0xCEda10b4d3bdE429DdA3A6daB87b38360313CBdB',
}

export const CHAIN_ID_TO_UNISWAP_V3_TOOL_ADDRESS: { [chainID: number]: string } = {
  // arb testnet
  421611: '0xB8834cD136402398AF58590799B0b6b5f94f872C',
  // arb one
  42161: '0xE2Dd46dD043aaD539d156fEEC2448547c1466A04',
}

// leave 1% when calculating withdrawal penalty if position != 0
export const REMOVE_LIQUIDITY_MAX_SHARE_RELAX = new BigNumber('0.99')
