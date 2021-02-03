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
        name: "method",
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
  "0x608060405234801561001057600080fd5b50600160008190555061002b61003360201b610b741760201c565b600155610037565b4690565b612168806100466000396000f3fe6080604052600436106100745760003560e01c806378e648921161004e57806378e648921461010b578063abee6e5c1461012b578063ce4d643b1461014b578063d0e30db01461016b57610083565b80632d0335ab146100885780632e1a7d4d146100be57806370a08231146100de57610083565b366100835761008161016f565b005b600080fd5b34801561009457600080fd5b506100a86100a3366004611338565b610238565b6040516100b59190611f55565b60405180910390f35b3480156100ca57600080fd5b506100816100d936600461169a565b61025d565b3480156100ea57600080fd5b506100fe6100f9366004611338565b610339565b6040516100b59190611a84565b34801561011757600080fd5b506100816101263660046114e6565b610354565b34801561013757600080fd5b50610081610146366004611370565b61055c565b34801561015757600080fd5b50610081610166366004611596565b6108f9565b6100815b600260005414156101c7576040805162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b60026000908155338152600460205260409020546101e59034610b78565b33600081815260046020526040908190209290925590517fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c90610229903490611a84565b60405180910390a26001600055565b6001600160a01b03811660009081526003602052604090205463ffffffff165b919050565b600260005414156102b5576040805162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b60026000908155338152600460205260409020546102d39082610bd9565b336000818152600460205260409020919091556102f09082610c36565b336001600160a01b03167f884edad9ce6fa2440d8a54cc123490eb96d2768479d49ff9c7366125a9424364826040516103299190611a84565b60405180910390a2506001600055565b6001600160a01b031660009081526004602052604090205490565b60008060008061036389610d20565b93509350935093506000806103778a610d40565b9150915061038486610339565b61038d82610d55565b67ffffffffffffffff1611156103be5760405162461bcd60e51b81526004016103b590611efc565b60405180910390fd5b8263ffffffff168163ffffffff1611156103ea5760405162461bcd60e51b81526004016103b590611f2a565b428463ffffffff1610156104105760405162461bcd60e51b81526004016103b590611e9b565b6001600160a01b03861660009081526003602052604090205463ffffffff8681169116146104505760405162461bcd60e51b81526004016103b590611ebc565b816001600160a01b0316635f3f0db6878b8b898961046d8a610d55565b8e6040518863ffffffff1660e01b81526004016104909796959493929190611a08565b600060405180830381600087803b1580156104aa57600080fd5b505af11580156104be573d6000803e3d6000fd5b5050506001600160a01b0387166000908152600360205260409020805463ffffffff8082166001011663ffffffff19909116179055506105103361050183610d55565b67ffffffffffffffff16610c36565b7ff7a099b6e4317688ffa8d752134614f9ec1394f25cbfc1646032ddead07a19978b8b8b8b8b604051610547959493929190611a8d565b60405180910390a15050505050505050505050565b8460005b818110156108ee576105706111a7565b6105cb89898481811061057f57fe5b90506020028101906105919190611f66565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610d6892505050565b905060008787848181106105db57fe5b90506020020135905060008686858181106105f257fe5b905060200201359050600061060684610e54565b90506001548461012001511461064a576000805160206120ef83398151915281858560405161063793929190611c4f565b60405180910390a15050505050506108f1565b60008181526006602052604090205460ff1615610682576000805160206120ef83398151915281858560405161063793929190611b2d565b61068f8460c00151610f65565b6000828152600560205260409020546106b1906106ac9086610f85565b610f65565b13156106d8576000805160206120ef83398151915281858560405161063793929190611b81565b83516106e390610339565b82111561070b576000805160206120ef83398151915281858560405161063793929190611d03565b633b9aca0084610180015163ffffffff1602821115610745576000805160206120ef83398151915281858560405161063793929190611ca3565b8360a0015161075384610f65565b121561077a576000805160206120ef83398151915281858560405161063793929190611be1565b83608001516001600160a01b0316634fababb38d8d8881811061079957fe5b90506020028101906107ab9190611f66565b866040518463ffffffff1660e01b81526004016107ca93929190611db9565b602060405180830381600087803b1580156107e457600080fd5b505af1925050508015610814575060408051601f3d908101601f191682019092526108119181019061157e565b60015b61088357610820611fd5565b8061082b5750610862565b6000805160206120ef8339815191528286868460405161084e9493929190611af3565b60405180910390a1505050505050506108f1565b6000805160206120ef83398151915281858560405161063793929190611d3b565b61088d8282610fea565b6108a08560000151866040015185611047565b7fa31c4dcf97bfab49d7f55b0dbc9a7a49d25cdfa4cead657a12315b48bf11f89a828683866040516108d59493929190611d90565b60405180910390a1505050600190920191506105609050565b50505b505050505050565b80516001600160a01b031633141580610928575080604001516001600160a01b0316336001600160a01b031614155b15610ae257610935611223565b81608001516001600160a01b0316630cdc105a6040518163ffffffff1660e01b81526004016101c06040518083038186803b15801561097357600080fd5b505afa158015610987573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109ab9190611420565b5050505050925050506000816000600781106109c357fe5b60200201516001600160a01b03166316d6b5f66040518163ffffffff1660e01b815260040160206040518083038186803b158015610a0057600080fd5b505afa158015610a14573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a389190611354565b835160405163c2f3da1d60e01b81529192506000916001600160a01b0384169163c2f3da1d91610a6f9190339060049081016119e4565b60206040518083038186803b158015610a8757600080fd5b505afa158015610a9b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610abf9190611406565b905080610ade5760405162461bcd60e51b81526004016103b590611e4d565b5050505b6000610aed82610e54565b60008181526006602052604090205490915060ff1615610b1f5760405162461bcd60e51b81526004016103b590611e16565b60008181526006602052604090819020805460ff19166001179055517f42c76c81a7cba1b9c861353909a184e20747ab960332628dabcbb5852fc5cbb590610b68908390611a84565b60405180910390a15050565b4690565b600082820183811015610bd2576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b600082821115610c30576040805162461bcd60e51b815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b80471015610c8b576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a20696e73756666696369656e742062616c616e6365000000604482015290519081900360640190fd5b6040516000906001600160a01b0384169083908381818185875af1925050503d8060008114610cd6576040519150601f19603f3d011682016040523d82523d6000602084013e610cdb565b606091505b5050905080610d1b5760405162461bcd60e51b815260040180806020018281038252603a8152602001806120b5603a913960400191505060405180910390fd5b505050565b606081901c9163ffffffff604083901c811692602081901c821692911690565b606081901c9160409190911c63ffffffff1690565b63ffffffff811664174876e80002919050565b610d706111a7565b61010082511015610d935760405162461bcd60e51b81526004016103b590611df1565b6014820151815260288201516020820152603c82015160408083019190915260508301516060808401919091526064840151608080850191909152608485015160a08086019190915260a486015160c08087019190915260c487015160e087015260e4870151610100870152610104870151610120870152610124909601519586901c61014086015263ffffffff9086901c81166101608601529085901c81166101808501529084901c81166101a084015292901c9091166101c082015290565b600080604051602001610e669061184d565b6040516020818303038152906040528051906020012083604051602001610e8e929190611ade565b604051602081830303815290604052805190602001209050604051602001610eb5906119bb565b60408051601f1981840301815282825280516020918201208383018352600f84526e4d61692050726f746f636f6c20763360881b938201939093529051610f1f92917f553f7e2049687f24030220180e64af84dd1272d5c99c4810278beb4f6e74e309910161183f565b6040516020818303038152906040528051906020012081604051602001610f479291906119a0565b60405160208183030381529060405280519060200120915050919050565b600080821215610f7d57610f788261113a565b610f7f565b815b92915050565b6000828201818312801590610f9a5750838112155b80610faf5750600083128015610faf57508381125b610bd25760405162461bcd60e51b81526004018080602001828103825260218152602001806120946021913960400191505060405180910390fd5b6000828152600560205260409020546110039082610f85565b6000838152600560205260409081902091909155517f66bc40b7d864f86356146c435fb0178293d08d80e04a8fba27d0e372ffe2d82b90610b68908490849061183f565b8061105157610d1b565b6001600160a01b0383166000908152600460205260409020548111156110895760405162461bcd60e51b81526004016103b590611eea565b6001600160a01b0383166000908152600460205260409020546110ac9082610bd9565b6001600160a01b0380851660009081526004602052604080822093909355908416815220546110db9082610b78565b6001600160a01b0380841660008181526004602052604090819020939093559151908516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9061112d908590611a84565b60405180910390a3505050565b6000610f7f60008360008183038183128015906111575750838113155b8061116c575060008312801561116c57508381135b610bd25760405162461bcd60e51b815260040180806020018281038252602481526020018061210f6024913960400191505060405180910390fd5b604080516101e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526101408101829052610160810182905261018081018290526101a081018290526101c081019190915290565b6040518060e001604052806007906020820280368337509192915050565b80356102588161207b565b60008083601f84011261125d578081fd5b50813567ffffffffffffffff811115611274578182fd5b602083019150836020808302850101111561128e57600080fd5b9250929050565b8051801515811461025857600080fd5b600082601f8301126112b5578081fd5b813567ffffffffffffffff8111156112c957fe5b6112dc601f8201601f1916602001611fab565b91508082528360208285010111156112f357600080fd5b8060208401602084013760009082016020015292915050565b803563ffffffff8116811461025857600080fd5b803567ffffffffffffffff8116811461025857600080fd5b600060208284031215611349578081fd5b8135610bd28161207b565b600060208284031215611365578081fd5b8151610bd28161207b565b60008060008060008060608789031215611388578182fd5b863567ffffffffffffffff8082111561139f578384fd5b6113ab8a838b0161124c565b909850965060208901359150808211156113c3578384fd5b6113cf8a838b0161124c565b909650945060408901359150808211156113e7578384fd5b506113f489828a0161124c565b979a9699509497509295939492505050565b600060208284031215611417578081fd5b610bd282611295565b6000806000806000806000806101c0898b03121561143c578182fd5b61144589611295565b97506020611454818b01611295565b97508a605f8b0112611464578283fd5b61146e60e0611fab565b8060408c016101208d018e811115611484578687fd5b865b60078110156114ac57825161149a8161207b565b85529385019391850191600101611486565b50829a508051995050505050506101408901519350610160890151925061018089015191506101a089015190509295985092959890939650565b600080600080600060a086880312156114fd578283fd5b8535945060208601359350604086013567ffffffffffffffff80821115611522578485fd5b61152e89838a016112a5565b94506060880135915080821115611543578283fd5b61154f89838a016112a5565b93506080880135915080821115611564578283fd5b50611571888289016112a5565b9150509295509295909350565b60006020828403121561158f578081fd5b5051919050565b60006101e08083850312156115a9578182fd5b6115b281611fab565b90506115bd83611241565b81526115cb60208401611241565b60208201526115dc60408401611241565b60408201526115ed60608401611241565b60608201526115fe60808401611241565b608082015260a083013560a082015260c083013560c082015260e083013560e0820152610100808401358183015250610120808401358183015250610140611647818501611320565b9082015261016061165984820161130c565b9082015261018061166b84820161130c565b908201526101a061167d84820161130c565b908201526101c061168f84820161130c565b908201529392505050565b6000602082840312156116ab578081fd5b5035919050565b6001600160a01b03169052565b60008151808452815b818110156116e4576020818501810151868301820152016116c8565b818111156116f55782602083870101525b50601f01601f19169290920160200192915050565b601081526f696e73756666696369656e742066656560801b602082015260400190565b6117388282516116b2565b602081015161174a60208401826116b2565b50604081015161175d60408401826116b2565b50606081015161177060608401826116b2565b50608081015161178360808401826116b2565b5060a081015160a083015260c081015160c083015260e081015160e0830152610100808201518184015250610120808201518184015250610140808201516117cd82850182611831565b5050610160808201516117e282850182611827565b5050610180808201516117f782850182611827565b50506101a08082015161180c82850182611827565b50506101c08082015161182182850182611827565b50505050565b63ffffffff169052565b67ffffffffffffffff169052565b918252602082015260400190565b7f4f726465722861646472657373207472616465722c616464726573732062726f81527f6b65722c616464726573732072656c617965722c61646472657373207265666560208201527f727265722c61646472657373206c6971756964697479506f6f6c2c000000000060408201527f696e74323536206d696e5472616465416d6f756e742c696e7432353620616d6f605b8201527f756e742c696e74323536206c696d697450726963652c696e7432353620747269607b8201527f6767657250726963652c75696e7432353620636861696e49442c000000000000609b8201527f75696e743634206578706972656441742c75696e74333220706572706574756160b58201527f6c496e6465782c75696e7433322062726f6b65724665654c696d69742c75696e60d58201527574333220666c6167732c75696e7433322073616c742960501b60f582015261010b0190565b61190160f01b81526002810192909252602282015260420190565b7f454950373132446f6d61696e28737472696e67206e616d652900000000000000815260190190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6001600160a01b038816815260e060208201819052600090611a2c908301896116bf565b8281036040840152611a3e81896116bf565b63ffffffff88811660608601528716608085015267ffffffffffffffff861660a085015283810360c08501529050611a7681856116bf565b9a9950505050505050505050565b90815260200190565b600086825285602083015260a06040830152611aac60a08301866116bf565b8281036060840152611abe81866116bf565b90508281036080840152611ad281856116bf565b98975050505050505050565b8281526102008101610bd2602083018461172d565b6000610240868352611b08602084018761172d565b8461020084015280610220840152611b22818401856116bf565b979650505050505050565b6000610240858352611b42602084018661172d565b836102008401528061022084015260118184015250701bdc99195c881a5cc818d85b98d95b1959607a1b61026083015261028082019050949350505050565b6000610240858352611b96602084018661172d565b8361020084015280610220840152601881840152507f6e6f20656e6f75676820616d6f756e7420746f2066696c6c000000000000000061026083015261028082019050949350505050565b6000610240858352611bf6602084018661172d565b8361020084015280610220840152602481840152507f616d6f756e74206973206c657373207468616e206d696e20747261646520616d610260830152631bdd5b9d60e21b6102808301526102a082019050949350505050565b6000610240858352611c64602084018661172d565b836102008401528061022084015260118184015250700c6d0c2d2dc40d2c840dad2e6dac2e8c6d607b1b61026083015261028082019050949350505050565b6000610240858352611cb8602084018661172d565b8361020084015280610220840152601b81840152507f666565206578636565647320747261646520676173206c696d6974000000000061026083015261028082019050949350505050565b6000610240858352611d18602084018661172d565b8361020084015280610220840152611d3181840161170a565b9695505050505050565b6000610240858352611d50602084018661172d565b836102008401528061022084015260128184015250711d1c985b9cd858dd1a5bdb8819985a5b195960721b61026083015261028082019050949350505050565b8481526102408101611da5602083018661172d565b610200820193909352610220015292915050565b6000604082528360408301528385606084013780606085840101526060601f19601f8601168301019050826020830152949350505050565b6020808252600b908201526a62726f6b656e206461746160a81b604082015260600190565b60208082526019908201527f6f7264657220697320616c72656164792063616e63656c656400000000000000604082015260600190565b6020808252602e908201527f73656e646572206d75737420626520747261646572206f722072656c6179657260408201526d081bdc88185d5d1a1bdc9a5e995960921b606082015260800190565b602080825260079082015266195e1c1a5c995960ca1b604082015260600190565b6020808252601490820152736e6f6e2d636f6e74696e756f7573206e6f6e636560601b604082015260600190565b600060208252610f7f6020830161170a565b602080825260149082015273696e73756666696369656e74206761732066656560601b604082015260600190565b60208082526011908201527019995948195e18d959591cc81b1a5b5a5d607a1b604082015260600190565b63ffffffff91909116815260200190565b6000808335601e19843603018112611f7c578283fd5b83018035915067ffffffffffffffff821115611f96578283fd5b60200191503681900382131561128e57600080fd5b60405181810167ffffffffffffffff81118282101715611fc757fe5b604052919050565b60e01c90565b600060443d1015611fe557612078565b600481823e6308c379a0611ff98251611fcf565b1461200357612078565b6040513d600319016004823e80513d67ffffffffffffffff81602484011181841117156120335750505050612078565b8284019250825191508082111561204d5750505050612078565b503d8301602082840101111561206557505050612078565b601f01601f191681016020016040529150505b90565b6001600160a01b038116811461209057600080fd5b5056fe5369676e6564536166654d6174683a206164646974696f6e206f766572666c6f77416464726573733a20756e61626c6520746f2073656e642076616c75652c20726563697069656e74206d617920686176652072657665727465641955905acc03ff235236ed3bc847a2b24e6a1a945754ffad043f7b8e01adaeb75369676e6564536166654d6174683a207375627472616374696f6e206f766572666c6f77a2646970667358221220906b8759b065cbe2ee06679c46c6af69d6bf3c0fa550dabff70ed8c39e51163f64736f6c63430007040033";
