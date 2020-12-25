/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { SymbolService } from "./SymbolService";

export class SymbolServiceFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    reservedSymbolCount: BigNumberish,
    overrides?: Overrides
  ): Promise<SymbolService> {
    return super.deploy(
      reservedSymbolCount,
      overrides || {}
    ) as Promise<SymbolService>;
  }
  getDeployTransaction(
    reservedSymbolCount: BigNumberish,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(reservedSymbolCount, overrides || {});
  }
  attach(address: string): SymbolService {
    return super.attach(address) as SymbolService;
  }
  connect(signer: Signer): SymbolServiceFactory {
    return super.connect(signer) as SymbolServiceFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SymbolService {
    return new Contract(address, _abi, signerOrProvider) as SymbolService;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "reservedSymbolCount",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "factory",
        type: "address",
      },
    ],
    name: "AddWhitelistedFactory",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "liquidityPool",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "perpetualIndex",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "symbol",
        type: "uint256",
      },
    ],
    name: "AssignSymbol",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "factory",
        type: "address",
      },
    ],
    name: "RemoveWhitelistedFactory",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "factory",
        type: "address",
      },
    ],
    name: "addWhitelistedFactory",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "liquidityPool",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "perpetualIndex",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "symbol",
        type: "uint256",
      },
    ],
    name: "assignReservedSymbol",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "symbol",
        type: "uint256",
      },
    ],
    name: "getPerpetualUID",
    outputs: [
      {
        internalType: "address",
        name: "liquidityPool",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "perpetualIndex",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "liquidityPool",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "perpetualIndex",
        type: "uint256",
      },
    ],
    name: "getSymbols",
    outputs: [
      {
        internalType: "uint256[]",
        name: "symbols",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "factory",
        type: "address",
      },
    ],
    name: "isWhitelistedFactory",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "factory",
        type: "address",
      },
    ],
    name: "removeWhitelistedFactory",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "liquidityPool",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "perpetualIndex",
        type: "uint256",
      },
    ],
    name: "requestSymbol",
    outputs: [
      {
        internalType: "uint256",
        name: "symbol",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161139038038061139083398101604081905261002f91610094565b6000610039610090565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a35060038190556004556100ac565b3390565b6000602082840312156100a5578081fd5b5051919050565b6112d5806100bb6000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c80638da5cb5b116100665780638da5cb5b1461012a578063bd086b861461013f578063dcb7a3e014610152578063f2fde38b14610172578063f3d15042146101855761009e565b806355467ce1146100a35780635b33622d146100cd578063715018a6146100ed578063735492f7146100f7578063745a3f741461010a575b600080fd5b6100b66100b1366004610f26565b610198565b6040516100c4929190610f74565b60405180910390f35b6100e06100db366004610e32565b6101f5565b6040516100c491906111f2565b6100f56103f4565b005b6100f5610105366004610e16565b610496565b61011d610118366004610e32565b610559565b6040516100c49190610fae565b610132610620565b6040516100c49190610f60565b6100f561014d366004610e5d565b61062f565b610165610160366004610e16565b6108b9565b6040516100c49190610ff2565b6100f5610180366004610e16565b6108c6565b6100f5610193366004610e16565b6109be565b600081815260016020526040812080548291906001600160a01b03166101d95760405162461bcd60e51b81526004016101d090611161565b60405180910390fd5b80546001909101546001600160a01b0390911694909350915050565b60003361020181610a77565b61021d5760405162461bcd60e51b81526004016101d09061118b565b610225610d92565b816001600160a01b031663c83937d16040518163ffffffff1660e01b81526004016101e06040518083038186803b15801561025f57600080fd5b505afa158015610273573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102979190610e91565b50505090506102b9816000600681106102ac57fe5b6020020151600590610a7d565b6102d55760405162461bcd60e51b81526004016101d090611034565b6102ff604051806040016040528060078152602001665b44454255475d60c81b8152508686610a99565b600061030b8686610b5d565b600081815260026020526040902090915061032590610b90565b156103425760405162461bcd60e51b81526004016101d090610ffd565b60035493506040805180820182526001600160a01b038881168252602080830189815260008981526001808452868220955186546001600160a01b0319169516949094178555905193909201929092558381526002909152206103a59085610b9b565b506003805460010190556040517f3d75a7a279411c01f02e492506198a4f72212f0996867bac6085a42592c6ef50906103e390889088908890610f8d565b60405180910390a150505092915050565b6103fc610ba7565b6000546001600160a01b0390811691161461044c576040805162461bcd60e51b81526020600482018190526024820152600080516020611280833981519152604482015290519081900360640190fd5b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b61049e610ba7565b6000546001600160a01b039081169116146104ee576040805162461bcd60e51b81526020600482018190526024820152600080516020611280833981519152604482015290519081900360640190fd5b6104f7816108b9565b6105135760405162461bcd60e51b81526004016101d090611136565b61051e600582610bab565b507ff127e51db2d456506cf1c13b384bede8716dd162ed3ac47e59ba5d8f71e79c828160405161054e9190610f60565b60405180910390a150565b606060006105678484610b5d565b60008181526002602052604081209192509061058290610b90565b90508061059057505061061a565b8067ffffffffffffffff811180156105a757600080fd5b506040519080825280602002602001820160405280156105d1578160200160208202803683370190505b50925060005b818110156106165760008381526002602052604090206105f79082610bc0565b84828151811061060357fe5b60209081029190910101526001016105d7565b5050505b92915050565b6000546001600160a01b031690565b610637610ba7565b6000546001600160a01b03908116911614610687576040805162461bcd60e51b81526020600482018190526024820152600080516020611280833981519152604482015290519081900360640190fd5b8261069181610a77565b6106ad5760405162461bcd60e51b81526004016101d09061118b565b6106b5610d92565b816001600160a01b031663c83937d16040518163ffffffff1660e01b81526004016101e06040518083038186803b1580156106ef57600080fd5b505afa158015610703573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107279190610e91565b505050905061073c816000600681106102ac57fe5b6107585760405162461bcd60e51b81526004016101d090611034565b60045483106107795760405162461bcd60e51b81526004016101d09061105b565b6000838152600160205260409020546001600160a01b0316156107ae5760405162461bcd60e51b81526004016101d09061109f565b60006107ba8686610b5d565b60008181526002602052604090209091506107d490610b90565b60011480156107fb575060045460008281526002602052604081206107f891610bc0565b10155b6108175760405162461bcd60e51b81526004016101d0906110ce565b6040805180820182526001600160a01b038881168252602080830189815260008981526001808452868220955186546001600160a01b0319169516949094178555905193909201929092558381526002909152206108759085610b9b565b507f3d75a7a279411c01f02e492506198a4f72212f0996867bac6085a42592c6ef508686866040516108a993929190610f8d565b60405180910390a1505050505050565b600061061a600583610a7d565b6108ce610ba7565b6000546001600160a01b0390811691161461091e576040805162461bcd60e51b81526020600482018190526024820152600080516020611280833981519152604482015290519081900360640190fd5b6001600160a01b0381166109635760405162461bcd60e51b815260040180806020018281038252602681526020018061125a6026913960400191505060405180910390fd5b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b6109c6610ba7565b6000546001600160a01b03908116911614610a16576040805162461bcd60e51b81526020600482018190526024820152600080516020611280833981519152604482015290519081900360640190fd5b610a1f816108b9565b15610a3c5760405162461bcd60e51b81526004016101d0906111c2565b610a47600582610bcc565b507fc8dfd666771ee017e7cf86b4e85b8a1e6a5e8a1b84e33914193996a94d02bb3f8160405161054e9190610f60565b3b151590565b6000610a92836001600160a01b038416610be1565b9392505050565b610b588383836040516024018080602001846001600160a01b03168152602001838152602001828103825285818151815260200191508051906020019080838360005b83811015610af4578181015183820152602001610adc565b50505050905090810190601f168015610b215780820380516001836020036101000a031916815260200191505b5060408051601f198184030181529190526020810180516001600160e01b03166307c8121760e01b1790529450610bf99350505050565b505050565b60008282604051602001610b72929190610f3e565b60405160208183030381529060405280519060200120905092915050565b600061061a82610c1a565b6000610a928383610c1e565b3390565b6000610a92836001600160a01b038416610c68565b6000610a928383610d2e565b6000610a92836001600160a01b038416610c1e565b60009081526001919091016020526040902054151590565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b5490565b6000610c2a8383610be1565b610c605750815460018181018455600084815260208082209093018490558454848252828601909352604090209190915561061a565b50600061061a565b60008181526001830160205260408120548015610d245783546000198083019190810190600090879083908110610c9b57fe5b9060005260206000200154905080876000018481548110610cb857fe5b600091825260208083209091019290925582815260018981019092526040902090840190558654879080610ce857fe5b6001900381819060005260206000200160009055905586600101600087815260200190815260200160002060009055600194505050505061061a565b600091505061061a565b81546000908210610d705760405162461bcd60e51b81526004018080602001828103825260228152602001806112386022913960400191505060405180910390fd5b826000018281548110610d7f57fe5b9060005260206000200154905092915050565b6040518060c001604052806006906020820280368337509192915050565b600082601f830112610dc0578081fd5b60405160e0810181811067ffffffffffffffff82111715610ddd57fe5b6040529050808260e08101851015610df457600080fd5b60005b6007811015610616578151835260209283019290910190600101610df7565b600060208284031215610e27578081fd5b8135610a928161121f565b60008060408385031215610e44578081fd5b8235610e4f8161121f565b946020939093013593505050565b600080600060608486031215610e71578081fd5b8335610e7c8161121f565b95602085013595506040909401359392505050565b6000806000806101e08587031215610ea7578081fd5b85601f860112610eb5578081fd5b610ebf60c06111fb565b808660c0880189811115610ed1578485fd5b845b6006811015610efc578251610ee78161121f565b85526020948501949290920191600101610ed3565b50829750610f0a8a82610db0565b6101a08a01516101c0909a0151989b909a509650505050505050565b600060208284031215610f37578081fd5b5035919050565b60609290921b6bffffffffffffffffffffffff19168252601482015260340190565b6001600160a01b0391909116815260200190565b6001600160a01b03929092168252602082015260400190565b6001600160a01b039390931683526020830191909152604082015260600190565b6020808252825182820181905260009190848201906040850190845b81811015610fe657835183529284019291840191600101610fca565b50909695505050505050565b901515815260200190565b60208082526018908201527f70657270657475616c20616c7265616479206578697374730000000000000000604082015260600190565b6020808252600d908201526c77726f6e6720666163746f727960981b604082015260600190565b60208082526024908201527f73796d626f6c20657863656564732072657365727665642073796d626f6c20636040820152631bdd5b9d60e21b606082015260800190565b60208082526015908201527473796d626f6c20616c72656164792065786973747360581b604082015260600190565b60208082526042908201527f70657270657475616c206d7573742068617665206e6f726d616c2073796d626f60408201527f6c20616e64206d7573746e277420686176652072657665727365642073796d626060820152611bdb60f21b608082015260a00190565b602080825260119082015270199858dd1bdc9e481b9bdd08199bdd5b99607a1b604082015260600190565b60208082526010908201526f1cde5b589bdb081b9bdd08199bdd5b9960821b604082015260600190565b60208082526017908201527f6d7573742063616c6c656420627920636f6e7472616374000000000000000000604082015260600190565b602080825260169082015275666163746f727920616c72656164792065786973747360501b604082015260600190565b90815260200190565b60405181810167ffffffffffffffff8111828210171561121757fe5b604052919050565b6001600160a01b038116811461123457600080fd5b5056fe456e756d657261626c655365743a20696e646578206f7574206f6620626f756e64734f776e61626c653a206e6577206f776e657220697320746865207a65726f20616464726573734f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572a264697066735822122060b614063bb355bd604138edc5b2291f40ad71c7d663a1ce6d016739e5bf0d3964736f6c63430007040033";