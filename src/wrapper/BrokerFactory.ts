/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { Broker } from "./Broker";

export class BrokerFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<Broker> {
    return super.deploy(overrides || {}) as Promise<Broker>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Broker {
    return super.attach(address) as Broker;
  }
  connect(signer: Signer): BrokerFactory {
    return super.connect(signer) as BrokerFactory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Broker {
    return new Contract(address, _abi, signerOrProvider) as Broker;
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "userData1",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "userData2",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "string",
        name: "functionSignature",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "callData",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "CallFunction",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "orderHash",
        type: "bytes32",
      },
    ],
    name: "CancelOrder",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "trader",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "orderHash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "fillAmount",
        type: "int256",
      },
    ],
    name: "FillOrder",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "orderHash",
        type: "bytes32",
      },
      {
        components: [
          {
            internalType: "address",
            name: "trader",
            type: "address",
          },
          {
            internalType: "address",
            name: "broker",
            type: "address",
          },
          {
            internalType: "address",
            name: "relayer",
            type: "address",
          },
          {
            internalType: "address",
            name: "referrer",
            type: "address",
          },
          {
            internalType: "address",
            name: "liquidityPool",
            type: "address",
          },
          {
            internalType: "int256",
            name: "minTradeAmount",
            type: "int256",
          },
          {
            internalType: "int256",
            name: "amount",
            type: "int256",
          },
          {
            internalType: "int256",
            name: "limitPrice",
            type: "int256",
          },
          {
            internalType: "int256",
            name: "triggerPrice",
            type: "int256",
          },
          {
            internalType: "uint256",
            name: "chainID",
            type: "uint256",
          },
          {
            internalType: "uint64",
            name: "expiredAt",
            type: "uint64",
          },
          {
            internalType: "uint32",
            name: "perpetualIndex",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "brokerFeeLimit",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "flags",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "salt",
            type: "uint32",
          },
        ],
        indexed: false,
        internalType: "struct Order",
        name: "order",
        type: "tuple",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "amount",
        type: "int256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "reason",
        type: "string",
      },
    ],
    name: "TradeFailed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "orderHash",
        type: "bytes32",
      },
      {
        components: [
          {
            internalType: "address",
            name: "trader",
            type: "address",
          },
          {
            internalType: "address",
            name: "broker",
            type: "address",
          },
          {
            internalType: "address",
            name: "relayer",
            type: "address",
          },
          {
            internalType: "address",
            name: "referrer",
            type: "address",
          },
          {
            internalType: "address",
            name: "liquidityPool",
            type: "address",
          },
          {
            internalType: "int256",
            name: "minTradeAmount",
            type: "int256",
          },
          {
            internalType: "int256",
            name: "amount",
            type: "int256",
          },
          {
            internalType: "int256",
            name: "limitPrice",
            type: "int256",
          },
          {
            internalType: "int256",
            name: "triggerPrice",
            type: "int256",
          },
          {
            internalType: "uint256",
            name: "chainID",
            type: "uint256",
          },
          {
            internalType: "uint64",
            name: "expiredAt",
            type: "uint64",
          },
          {
            internalType: "uint32",
            name: "perpetualIndex",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "brokerFeeLimit",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "flags",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "salt",
            type: "uint32",
          },
        ],
        indexed: false,
        internalType: "struct Order",
        name: "order",
        type: "tuple",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "amount",
        type: "int256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "gasReward",
        type: "uint256",
      },
    ],
    name: "TradeSuccess",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "trader",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Withdraw",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "trader",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes[]",
        name: "compressedOrders",
        type: "bytes[]",
      },
      {
        internalType: "int256[]",
        name: "amounts",
        type: "int256[]",
      },
      {
        internalType: "uint256[]",
        name: "gasRewards",
        type: "uint256[]",
      },
    ],
    name: "batchTrade",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "userData1",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "userData2",
        type: "bytes32",
      },
      {
        internalType: "string",
        name: "functionSignature",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "callData",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "callFunction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "trader",
            type: "address",
          },
          {
            internalType: "address",
            name: "broker",
            type: "address",
          },
          {
            internalType: "address",
            name: "relayer",
            type: "address",
          },
          {
            internalType: "address",
            name: "referrer",
            type: "address",
          },
          {
            internalType: "address",
            name: "liquidityPool",
            type: "address",
          },
          {
            internalType: "int256",
            name: "minTradeAmount",
            type: "int256",
          },
          {
            internalType: "int256",
            name: "amount",
            type: "int256",
          },
          {
            internalType: "int256",
            name: "limitPrice",
            type: "int256",
          },
          {
            internalType: "int256",
            name: "triggerPrice",
            type: "int256",
          },
          {
            internalType: "uint256",
            name: "chainID",
            type: "uint256",
          },
          {
            internalType: "uint64",
            name: "expiredAt",
            type: "uint64",
          },
          {
            internalType: "uint32",
            name: "perpetualIndex",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "brokerFeeLimit",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "flags",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "salt",
            type: "uint32",
          },
        ],
        internalType: "struct Order",
        name: "order",
        type: "tuple",
      },
    ],
    name: "cancelOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "getNonce",
    outputs: [
      {
        internalType: "uint32",
        name: "nonce",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50600160008190555061002b61003360201b610b3a1760201c565b600155610037565b4690565b61217c806100466000396000f3fe6080604052600436106100745760003560e01c806378e648921161004e57806378e648921461010b578063abee6e5c1461012b578063ce4d643b1461014b578063d0e30db01461016b57610083565b80632d0335ab146100885780632e1a7d4d146100be57806370a08231146100de57610083565b366100835761008161016f565b005b600080fd5b34801561009457600080fd5b506100a86100a336600461137a565b610238565b6040516100b59190611f69565b60405180910390f35b3480156100ca57600080fd5b506100816100d93660046116dc565b61025d565b3480156100ea57600080fd5b506100fe6100f936600461137a565b610339565b6040516100b59190611ac6565b34801561011757600080fd5b50610081610126366004611528565b610354565b34801561013757600080fd5b506100816101463660046113b2565b610522565b34801561015757600080fd5b506100816101663660046115d8565b6108bf565b6100815b600260005414156101c7576040805162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b60026000908155338152600460205260409020546101e59034610b3e565b33600081815260046020526040908190209290925590517fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c90610229903490611ac6565b60405180910390a26001600055565b6001600160a01b03811660009081526003602052604090205463ffffffff165b919050565b600260005414156102b5576040805162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b60026000908155338152600460205260409020546102d39082610b9f565b336000818152600460205260409020919091556102f09082610be1565b336001600160a01b03167f884edad9ce6fa2440d8a54cc123490eb96d2768479d49ff9c7366125a9424364826040516103299190611ac6565b60405180910390a2506001600055565b6001600160a01b031660009081526004602052604090205490565b60008060008061036389610ccb565b93509350935093506000806103778a610ceb565b915091508263ffffffff168163ffffffff1611156103b05760405162461bcd60e51b81526004016103a790611f3e565b60405180910390fd5b428463ffffffff1610156103d65760405162461bcd60e51b81526004016103a790611edd565b6001600160a01b03861660009081526003602052604090205463ffffffff8681169116146104165760405162461bcd60e51b81526004016103a790611efe565b816001600160a01b0316635f3f0db6878b8b89896104338a610d00565b8e6040518863ffffffff1660e01b81526004016104569796959493929190611a4a565b600060405180830381600087803b15801561047057600080fd5b505af1158015610484573d6000803e3d6000fd5b5050506001600160a01b0387166000908152600360205260409020805463ffffffff8082166001011663ffffffff19909116179055506104d6336104c783610d00565b67ffffffffffffffff16610be1565b7ff7a099b6e4317688ffa8d752134614f9ec1394f25cbfc1646032ddead07a19978b8b8b8b8b60405161050d959493929190611acf565b60405180910390a15050505050505050505050565b8460005b818110156108b4576105366111e9565b61059189898481811061054557fe5b90506020028101906105579190611f7a565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610d1392505050565b905060008787848181106105a157fe5b90506020020135905060008686858181106105b857fe5b90506020020135905060006105cc84610dff565b905060015484610120015114610610576000805160206121038339815191528185856040516105fd93929190611c91565b60405180910390a15050505050506108b7565b60008181526006602052604090205460ff1615610648576000805160206121038339815191528185856040516105fd93929190611b6f565b6106558460c00151610f10565b600082815260056020526040902054610677906106729086610f30565b610f10565b131561069e576000805160206121038339815191528185856040516105fd93929190611bc3565b83516106a990610339565b8211156106d1576000805160206121038339815191528185856040516105fd93929190611d45565b633b9aca0084610180015163ffffffff160282111561070b576000805160206121038339815191528185856040516105fd93929190611ce5565b8360a0015161071984610f10565b1215610740576000805160206121038339815191528185856040516105fd93929190611c23565b83608001516001600160a01b0316634fababb38d8d8881811061075f57fe5b90506020028101906107719190611f7a565b866040518463ffffffff1660e01b815260040161079093929190611dfb565b602060405180830381600087803b1580156107aa57600080fd5b505af19250505080156107da575060408051601f3d908101601f191682019092526107d7918101906115c0565b60015b610849576107e6611fe9565b806107f15750610828565b600080516020612103833981519152828686846040516108149493929190611b35565b60405180910390a1505050505050506108b7565b6000805160206121038339815191528185856040516105fd93929190611d7d565b6108538282610f95565b6108668560000151866040015185610ff2565b7fa31c4dcf97bfab49d7f55b0dbc9a7a49d25cdfa4cead657a12315b48bf11f89a8286838660405161089b9493929190611dd2565b60405180910390a1505050600190920191506105269050565b50505b505050505050565b80516001600160a01b0316331415806108ee575080604001516001600160a01b0316336001600160a01b031614155b15610aa8576108fb611265565b81608001516001600160a01b0316630cdc105a6040518163ffffffff1660e01b81526004016101c06040518083038186803b15801561093957600080fd5b505afa15801561094d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109719190611462565b50505050509250505060008160006007811061098957fe5b60200201516001600160a01b03166316d6b5f66040518163ffffffff1660e01b815260040160206040518083038186803b1580156109c657600080fd5b505afa1580156109da573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109fe9190611396565b835160405163c2f3da1d60e01b81529192506000916001600160a01b0384169163c2f3da1d91610a35919033906004908101611a26565b60206040518083038186803b158015610a4d57600080fd5b505afa158015610a61573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a859190611448565b905080610aa45760405162461bcd60e51b81526004016103a790611e8f565b5050505b6000610ab382610dff565b60008181526006602052604090205490915060ff1615610ae55760405162461bcd60e51b81526004016103a790611e58565b60008181526006602052604090819020805460ff19166001179055517f42c76c81a7cba1b9c861353909a184e20747ab960332628dabcbb5852fc5cbb590610b2e908390611ac6565b60405180910390a15050565b4690565b600082820183811015610b98576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b6000610b9883836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f7700008152506110e5565b80471015610c36576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a20696e73756666696369656e742062616c616e6365000000604482015290519081900360640190fd5b6040516000906001600160a01b0384169083908381818185875af1925050503d8060008114610c81576040519150601f19603f3d011682016040523d82523d6000602084013e610c86565b606091505b5050905080610cc65760405162461bcd60e51b815260040180806020018281038252603a8152602001806120c9603a913960400191505060405180910390fd5b505050565b606081901c9163ffffffff604083901c811692602081901c821692911690565b606081901c9160409190911c63ffffffff1690565b63ffffffff811664174876e80002919050565b610d1b6111e9565b61012482511015610d3e5760405162461bcd60e51b81526004016103a790611e33565b6014820151815260288201516020820152603c82015160408083019190915260508301516060808401919091526064840151608080850191909152608485015160a08086019190915260a486015160c08087019190915260c487015160e087015260e4870151610100870152610104870151610120870152610124909601519586901c61014086015263ffffffff9086901c81166101608601529085901c81166101808501529084901c81166101a084015292901c9091166101c082015290565b600080604051602001610e119061188f565b6040516020818303038152906040528051906020012083604051602001610e39929190611b20565b604051602081830303815290604052805190602001209050604051602001610e60906119fd565b60408051601f1981840301815282825280516020918201208383018352600f84526e4d61692050726f746f636f6c20763360881b938201939093529051610eca92917f553f7e2049687f24030220180e64af84dd1272d5c99c4810278beb4f6e74e3099101611881565b6040516020818303038152906040528051906020012081604051602001610ef29291906119e2565b60405160208183030381529060405280519060200120915050919050565b600080821215610f2857610f238261117c565b610f2a565b815b92915050565b6000828201818312801590610f455750838112155b80610f5a5750600083128015610f5a57508381125b610b985760405162461bcd60e51b81526004018080602001828103825260218152602001806120a86021913960400191505060405180910390fd5b600082815260056020526040902054610fae9082610f30565b6000838152600560205260409081902091909155517f66bc40b7d864f86356146c435fb0178293d08d80e04a8fba27d0e372ffe2d82b90610b2e9084908490611881565b80610ffc57610cc6565b6001600160a01b0383166000908152600460205260409020548111156110345760405162461bcd60e51b81526004016103a790611f2c565b6001600160a01b0383166000908152600460205260409020546110579082610b9f565b6001600160a01b0380851660009081526004602052604080822093909355908416815220546110869082610b3e565b6001600160a01b0380841660008181526004602052604090819020939093559151908516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906110d8908590611ac6565b60405180910390a3505050565b600081848411156111745760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611139578181015183820152602001611121565b50505050905090810190601f1680156111665780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b6000610f2a60008360008183038183128015906111995750838113155b806111ae57506000831280156111ae57508381135b610b985760405162461bcd60e51b81526004018080602001828103825260248152602001806121236024913960400191505060405180910390fd5b604080516101e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526101408101829052610160810182905261018081018290526101a081018290526101c081019190915290565b6040518060e001604052806007906020820280368337509192915050565b80356102588161208f565b60008083601f84011261129f578081fd5b50813567ffffffffffffffff8111156112b6578182fd5b60208301915083602080830285010111156112d057600080fd5b9250929050565b8051801515811461025857600080fd5b600082601f8301126112f7578081fd5b813567ffffffffffffffff81111561130b57fe5b61131e601f8201601f1916602001611fbf565b915080825283602082850101111561133557600080fd5b8060208401602084013760009082016020015292915050565b803563ffffffff8116811461025857600080fd5b803567ffffffffffffffff8116811461025857600080fd5b60006020828403121561138b578081fd5b8135610b988161208f565b6000602082840312156113a7578081fd5b8151610b988161208f565b600080600080600080606087890312156113ca578182fd5b863567ffffffffffffffff808211156113e1578384fd5b6113ed8a838b0161128e565b90985096506020890135915080821115611405578384fd5b6114118a838b0161128e565b90965094506040890135915080821115611429578384fd5b5061143689828a0161128e565b979a9699509497509295939492505050565b600060208284031215611459578081fd5b610b98826112d7565b6000806000806000806000806101c0898b03121561147e578182fd5b611487896112d7565b97506020611496818b016112d7565b97508a605f8b01126114a6578283fd5b6114b060e0611fbf565b8060408c016101208d018e8111156114c6578687fd5b865b60078110156114ee5782516114dc8161208f565b855293850193918501916001016114c8565b50829a508051995050505050506101408901519350610160890151925061018089015191506101a089015190509295985092959890939650565b600080600080600060a0868803121561153f578283fd5b8535945060208601359350604086013567ffffffffffffffff80821115611564578485fd5b61157089838a016112e7565b94506060880135915080821115611585578283fd5b61159189838a016112e7565b935060808801359150808211156115a6578283fd5b506115b3888289016112e7565b9150509295509295909350565b6000602082840312156115d1578081fd5b5051919050565b60006101e08083850312156115eb578182fd5b6115f481611fbf565b90506115ff83611283565b815261160d60208401611283565b602082015261161e60408401611283565b604082015261162f60608401611283565b606082015261164060808401611283565b608082015260a083013560a082015260c083013560c082015260e083013560e0820152610100808401358183015250610120808401358183015250610140611689818501611362565b9082015261016061169b84820161134e565b908201526101806116ad84820161134e565b908201526101a06116bf84820161134e565b908201526101c06116d184820161134e565b908201529392505050565b6000602082840312156116ed578081fd5b5035919050565b6001600160a01b03169052565b60008151808452815b818110156117265760208185018101518683018201520161170a565b818111156117375782602083870101525b50601f01601f19169290920160200192915050565b601081526f696e73756666696369656e742066656560801b602082015260400190565b61177a8282516116f4565b602081015161178c60208401826116f4565b50604081015161179f60408401826116f4565b5060608101516117b260608401826116f4565b5060808101516117c560808401826116f4565b5060a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015161180f82850182611873565b50506101608082015161182482850182611869565b50506101808082015161183982850182611869565b50506101a08082015161184e82850182611869565b50506101c08082015161186382850182611869565b50505050565b63ffffffff169052565b67ffffffffffffffff169052565b918252602082015260400190565b7f4f726465722861646472657373207472616465722c616464726573732062726f81527f6b65722c616464726573732072656c617965722c61646472657373207265666560208201527f727265722c61646472657373206c6971756964697479506f6f6c2c000000000060408201527f696e74323536206d696e5472616465416d6f756e742c696e7432353620616d6f605b8201527f756e742c696e74323536206c696d697450726963652c696e7432353620747269607b8201527f6767657250726963652c75696e7432353620636861696e49442c000000000000609b8201527f75696e743634206578706972656441742c75696e74333220706572706574756160b58201527f6c496e6465782c75696e7433322062726f6b65724665654c696d69742c75696e60d58201527574333220666c6167732c75696e7433322073616c742960501b60f582015261010b0190565b61190160f01b81526002810192909252602282015260420190565b7f454950373132446f6d61696e28737472696e67206e616d652900000000000000815260190190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6001600160a01b038816815260e060208201819052600090611a6e90830189611701565b8281036040840152611a808189611701565b63ffffffff88811660608601528716608085015267ffffffffffffffff861660a085015283810360c08501529050611ab88185611701565b9a9950505050505050505050565b90815260200190565b600086825285602083015260a06040830152611aee60a0830186611701565b8281036060840152611b008186611701565b90508281036080840152611b148185611701565b98975050505050505050565b8281526102008101610b98602083018461176f565b6000610240868352611b4a602084018761176f565b8461020084015280610220840152611b6481840185611701565b979650505050505050565b6000610240858352611b84602084018661176f565b836102008401528061022084015260118184015250701bdc99195c881a5cc818d85b98d95b1959607a1b61026083015261028082019050949350505050565b6000610240858352611bd8602084018661176f565b8361020084015280610220840152601881840152507f6e6f20656e6f75676820616d6f756e7420746f2066696c6c000000000000000061026083015261028082019050949350505050565b6000610240858352611c38602084018661176f565b8361020084015280610220840152602481840152507f616d6f756e74206973206c657373207468616e206d696e20747261646520616d610260830152631bdd5b9d60e21b6102808301526102a082019050949350505050565b6000610240858352611ca6602084018661176f565b836102008401528061022084015260118184015250700c6d0c2d2dc40d2c840dad2e6dac2e8c6d607b1b61026083015261028082019050949350505050565b6000610240858352611cfa602084018661176f565b8361020084015280610220840152601b81840152507f666565206578636565647320747261646520676173206c696d6974000000000061026083015261028082019050949350505050565b6000610240858352611d5a602084018661176f565b8361020084015280610220840152611d7381840161174c565b9695505050505050565b6000610240858352611d92602084018661176f565b836102008401528061022084015260128184015250711d1c985b9cd858dd1a5bdb8819985a5b195960721b61026083015261028082019050949350505050565b8481526102408101611de7602083018661176f565b610200820193909352610220015292915050565b6000604082528360408301528385606084013780606085840101526060601f19601f8601168301019050826020830152949350505050565b6020808252600b908201526a62726f6b656e206461746160a81b604082015260600190565b60208082526019908201527f6f7264657220697320616c72656164792063616e63656c656400000000000000604082015260600190565b6020808252602e908201527f73656e646572206d75737420626520747261646572206f722072656c6179657260408201526d081bdc88185d5d1a1bdc9a5e995960921b606082015260800190565b602080825260079082015266195e1c1a5c995960ca1b604082015260600190565b6020808252601490820152736e6f6e2d636f6e74696e756f7573206e6f6e636560601b604082015260600190565b600060208252610f2a6020830161174c565b60208082526011908201527019995948195e18d959591cc81b1a5b5a5d607a1b604082015260600190565b63ffffffff91909116815260200190565b6000808335601e19843603018112611f90578283fd5b83018035915067ffffffffffffffff821115611faa578283fd5b6020019150368190038213156112d057600080fd5b60405181810167ffffffffffffffff81118282101715611fdb57fe5b604052919050565b60e01c90565b600060443d1015611ff95761208c565b600481823e6308c379a061200d8251611fe3565b146120175761208c565b6040513d600319016004823e80513d67ffffffffffffffff8160248401118184111715612047575050505061208c565b82840192508251915080821115612061575050505061208c565b503d830160208284010111156120795750505061208c565b601f01601f191681016020016040529150505b90565b6001600160a01b03811681146120a457600080fd5b5056fe5369676e6564536166654d6174683a206164646974696f6e206f766572666c6f77416464726573733a20756e61626c6520746f2073656e642076616c75652c20726563697069656e74206d617920686176652072657665727465641955905acc03ff235236ed3bc847a2b24e6a1a945754ffad043f7b8e01adaeb75369676e6564536166654d6174683a207375627472616374696f6e206f766572666c6f77a26469706673582212207ee69156e9e73283f3a1878cd7ed57e9c0b8740b08ab043244dddfc2aa67195a64736f6c63430007040033";
