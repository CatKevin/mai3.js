/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { Reader } from "./Reader";

export class ReaderFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<Reader> {
    return super.deploy(overrides || {}) as Promise<Reader>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Reader {
    return super.attach(address) as Reader;
  }
  connect(signer: Signer): ReaderFactory {
    return super.connect(signer) as ReaderFactory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Reader {
    return new Contract(address, _abi, signerOrProvider) as Reader;
  }
}

const _abi = [
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
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "getAccountStorage",
    outputs: [
      {
        components: [
          {
            internalType: "int256",
            name: "cashBalance",
            type: "int256",
          },
          {
            internalType: "int256",
            name: "positionAmount",
            type: "int256",
          },
        ],
        internalType: "struct MarginAccount",
        name: "marginAccount",
        type: "tuple",
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
    ],
    name: "getLiquidityPoolStorage",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "operator",
            type: "address",
          },
          {
            internalType: "address",
            name: "collateral",
            type: "address",
          },
          {
            internalType: "address",
            name: "vault",
            type: "address",
          },
          {
            internalType: "address",
            name: "governor",
            type: "address",
          },
          {
            internalType: "address",
            name: "shareToken",
            type: "address",
          },
          {
            internalType: "int256",
            name: "vaultFeeRate",
            type: "int256",
          },
          {
            internalType: "int256",
            name: "insuranceFundCap",
            type: "int256",
          },
          {
            internalType: "int256",
            name: "insuranceFund",
            type: "int256",
          },
          {
            internalType: "int256",
            name: "donatedInsuranceFund",
            type: "int256",
          },
          {
            internalType: "int256",
            name: "totalClaimableFee",
            type: "int256",
          },
          {
            internalType: "int256",
            name: "poolCashBalance",
            type: "int256",
          },
          {
            internalType: "uint256",
            name: "fundingTime",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "string",
                name: "underlyingAsset",
                type: "string",
              },
              {
                internalType: "enum PerpetualState",
                name: "state",
                type: "uint8",
              },
              {
                internalType: "address",
                name: "oracle",
                type: "address",
              },
              {
                internalType: "int256",
                name: "markPrice",
                type: "int256",
              },
              {
                internalType: "int256",
                name: "indexPrice",
                type: "int256",
              },
              {
                internalType: "int256",
                name: "unitAccumulativeFunding",
                type: "int256",
              },
              {
                internalType: "int256",
                name: "initialMarginRate",
                type: "int256",
              },
              {
                internalType: "int256",
                name: "maintenanceMarginRate",
                type: "int256",
              },
              {
                internalType: "int256",
                name: "operatorFeeRate",
                type: "int256",
              },
              {
                internalType: "int256",
                name: "lpFeeRate",
                type: "int256",
              },
              {
                internalType: "int256",
                name: "referrerRebateRate",
                type: "int256",
              },
              {
                internalType: "int256",
                name: "liquidationPenaltyRate",
                type: "int256",
              },
              {
                internalType: "int256",
                name: "keeperGasReward",
                type: "int256",
              },
              {
                internalType: "int256",
                name: "insuranceFundRate",
                type: "int256",
              },
              {
                internalType: "int256",
                name: "halfSpread",
                type: "int256",
              },
              {
                internalType: "int256",
                name: "openSlippageFactor",
                type: "int256",
              },
              {
                internalType: "int256",
                name: "closeSlippageFactor",
                type: "int256",
              },
              {
                internalType: "int256",
                name: "fundingRateLimit",
                type: "int256",
              },
              {
                internalType: "int256",
                name: "maxLeverage",
                type: "int256",
              },
              {
                internalType: "int256",
                name: "ammPositionAmount",
                type: "int256",
              },
            ],
            internalType: "struct Reader.PerpetualStorage[]",
            name: "perpetualStorages",
            type: "tuple[]",
          },
        ],
        internalType: "struct Reader.LiquidityPoolStorage",
        name: "pool",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610ee3806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063574408c11461003b578063eb16510d14610064575b600080fd5b61004e61004936600461096d565b610084565b60405161005b9190610d2f565b60405180910390f35b610077610072366004610990565b6106be565b60405161005b9190610e0a565b61008c610751565b60006100966107e6565b61009e610804565b846001600160a01b031663c83937d16040518163ffffffff1660e01b81526004016101e06040518083038186803b1580156100d857600080fd5b505afa1580156100ec573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061011091906109d1565b6101608801526020808401516001600160a01b0390811689526040808601518216838b01526060808701518316828c01526080808801518416828d015260a097880151909316838c01528551878c01529285015160c08b015284015160e08a01529083015161010089015282015161012088015291015161014086015292508291505067ffffffffffffffff811180156101a957600080fd5b506040519080825280602002602001820160405280156101e357816020015b6101d0610822565b8152602001906001900390816101c85790505b5061018083015260005b818110156106b7576101fd6108c5565b6040516304562d3d60e41b81526001600160a01b03861690634562d3d090610229908590600401610e21565b61026060405180830381600087803b15801561024457600080fd5b505af1158015610258573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061027c9190610a66565b866101800151858151811061028d57fe5b602002602001015160200187610180015186815181106102a957fe5b6020026020010151604001829550836001600160a01b03166001600160a01b03168152508360048111156102d957fe5b60048111156102e457fe5b9052505050602081015161018085015180518490811061030057fe5b602090810291909101015160600152604081015161018085015180518490811061032657fe5b602090810291909101015160800152606081015161018085015180518490811061034c57fe5b602090810291909101015160a00152608081015161018085015180518490811061037257fe5b602090810291909101015160c0015260a081015161018085015180518490811061039857fe5b602090810291909101015160e0015260c08101516101808501518051849081106103be57fe5b6020908102919091010151610100015260e08101516101808501518051849081106103e557fe5b6020908102919091010151610120015261010081015161018085015180518490811061040d57fe5b6020908102919091010151610140015261012081015161018085015180518490811061043557fe5b6020908102919091010151610160015261014081015161018085015180518490811061045d57fe5b6020908102919091010151610180015280600b6020020151846101800151838151811061048657fe5b60209081029190910101516101a0015280600c602002015184610180015183815181106104af57fe5b60209081029190910101516101c001526101a08101516101808501518051849081106104d757fe5b60209081029190910101516101e001526101c08101516101808501518051849081106104ff57fe5b602090810291909101015161020001526101e081015161018085015180518490811061052757fe5b6020908102919091010151610220015261020081015161018085015180518490811061054f57fe5b602002602001015161024001818152505050826101800151818151811061057257fe5b6020026020010151604001516001600160a01b0316637158da7c6040518163ffffffff1660e01b815260040160006040518083038186803b1580156105b657600080fd5b505afa1580156105ca573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526105f29190810190610b20565b836101800151828151811061060357fe5b602090810291909101015152604051633063c35560e21b81526001600160a01b0385169063c18f0d549061063d9084908890600401610e2a565b604080518083038186803b15801561065457600080fd5b505afa158015610668573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061068c9190610afd565b9050836101800151828151811061069f57fe5b602090810291909101015161026001526001016101ed565b5050919050565b6106c66108e4565b604051633063c35560e21b81526001600160a01b0385169063c18f0d54906106f49086908690600401610e2a565b604080518083038186803b15801561070b57600080fd5b505afa15801561071f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107439190610afd565b602083015281529392505050565b604051806101a0016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001606081525090565b6040518060c001604052806006906020820280368337509192915050565b6040518060e001604052806007906020820280368337509192915050565b60408051610280810190915260608152602081016000815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061022001604052806011906020820280368337509192915050565b604051806040016040528060008152602001600081525090565b600082601f83011261090e578081fd5b60405160e0810181811067ffffffffffffffff8211171561092b57fe5b6040529050808260e0810185101561094257600080fd5b60005b6007811015610964578151835260209283019290910190600101610945565b50505092915050565b60006020828403121561097e578081fd5b813561098981610e95565b9392505050565b6000806000606084860312156109a4578182fd5b83356109af81610e95565b92506020840135915060408401356109c681610e95565b809150509250925092565b6000806000806101e085870312156109e7578081fd5b85601f8601126109f5578081fd5b6109ff60c0610e41565b808660c0880189811115610a11578485fd5b845b6006811015610a3c578251610a2781610e95565b85526020948501949290920191600101610a13565b50829750610a4a8a826108fe565b6101a08a01516101c0909a0151989b909a509650505050505050565b6000806000610260808587031215610a7c578384fd5b845160058110610a8a578485fd5b80945050602080860151610a9d81610e95565b9350605f86018713610aad578283fd5b610ab8610220610e41565b806040880189858a011115610acb578586fd5b8594505b6011851015610aee578051835260019490940193918301918301610acf565b50809450505050509250925092565b60008060408385031215610b0f578182fd5b505080516020909101519092909150565b600060208284031215610b31578081fd5b815167ffffffffffffffff80821115610b48578283fd5b818401915084601f830112610b5b578283fd5b815181811115610b6757fe5b610b7a601f8201601f1916602001610e41565b9150808252856020828501011115610b90578384fd5b610ba1816020840160208601610e65565b50949350505050565b6001600160a01b03169052565b60008282518085526020808601955080818302840101818601855b84811015610ce857601f1986840301895281516102808151818652610bf982870182610d03565b91505085820151610c0c87870182610cf5565b50604080830151610c1f82880182610baa565b5050606082810151908601526080808301519086015260a0808301519086015260c0808301519086015260e08083015190860152610100808301519086015261012080830151908601526101408083015190860152610160808301519086015261018080830151908601526101a080830151908601526101c080830151908601526101e080830151908601526102008083015190860152610220808301519086015261024080830151908601526102609182015191909401529783019790830190600101610bd2565b5090979650505050505050565b60058110610cff57fe5b9052565b60008151808452610d1b816020860160208601610e65565b601f01601f19169290920160200192915050565b600060208252610d43602083018451610baa565b6020830151610d556040840182610baa565b506040830151610d686060840182610baa565b506060830151610d7b6080840182610baa565b506080830151610d8e60a0840182610baa565b5060a083015160c08381019190915283015160e08084019190915283015161010080840191909152830151610120808401919091528301516101408084019190915283015161016080840191909152830151610180808401919091528301516101a080840152610e026101c0840182610bb7565b949350505050565b815181526020918201519181019190915260400190565b90815260200190565b9182526001600160a01b0316602082015260400190565b60405181810167ffffffffffffffff81118282101715610e5d57fe5b604052919050565b60005b83811015610e80578181015183820152602001610e68565b83811115610e8f576000848401525b50505050565b6001600160a01b0381168114610eaa57600080fd5b5056fea2646970667358221220ca2a9c9559483507064243ad087b88f451f205c54f0db33a3677405f6206c16f64736f6c63430007040033";