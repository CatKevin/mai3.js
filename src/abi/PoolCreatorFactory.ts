/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { PoolCreator } from "./PoolCreator";

export class PoolCreatorFactory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PoolCreator {
    return new Contract(address, _abi, signerOrProvider) as PoolCreator;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "governorTemplate",
        type: "address",
      },
      {
        internalType: "address",
        name: "shareTokenTemplate",
        type: "address",
      },
      {
        internalType: "address",
        name: "wethToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "symbolService",
        type: "address",
      },
      {
        internalType: "address",
        name: "globalVault",
        type: "address",
      },
      {
        internalType: "int256",
        name: "globalVaultFeeRate",
        type: "int256",
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
        name: "implementation",
        type: "address",
      },
    ],
    name: "AddVersion",
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
        internalType: "address",
        name: "governor",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "shareToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "collateral",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "collateralDecimals",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isFastCreationEnabled",
        type: "bool",
      },
    ],
    name: "CreateLiquidityPool",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "grantor",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "grantee",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "privilege",
        type: "uint256",
      },
    ],
    name: "GrantPrivilege",
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
        indexed: true,
        internalType: "address",
        name: "grantor",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "grantee",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "privilege",
        type: "uint256",
      },
    ],
    name: "RevokePrivilege",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "int256",
        name: "prevFeeRate",
        type: "int256",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "newFeeRate",
        type: "int256",
      },
    ],
    name: "SetVaultFeeRate",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "trader",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "perpetualIndex",
        type: "uint256",
      },
    ],
    name: "activatePerpetualFor",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "implementation",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "compatibility",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "note",
        type: "string",
      },
    ],
    name: "addVersion",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "collateral",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "collateralDecimals",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isFastCreationEnabled",
        type: "bool",
      },
      {
        internalType: "int256",
        name: "nonce",
        type: "int256",
      },
    ],
    name: "createLiquidityPool",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "implementation",
        type: "address",
      },
      {
        internalType: "address",
        name: "collateral",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "collateralDecimals",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isFastCreationEnabled",
        type: "bool",
      },
      {
        internalType: "int256",
        name: "nonce",
        type: "int256",
      },
    ],
    name: "createLiquidityPoolWith",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "trader",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "perpetualIndex",
        type: "uint256",
      },
    ],
    name: "deactivatePerpetualFor",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAccessController",
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
        name: "trader",
        type: "address",
      },
    ],
    name: "getActiveLiquidityPoolCountOf",
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
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "getDescription",
    outputs: [
      {
        internalType: "address",
        name: "creator",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "creationTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "compatibility",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "note",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getLatestVersion",
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
    inputs: [],
    name: "getLiquidityPoolCount",
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
    inputs: [],
    name: "getMCBToken",
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
        name: "operator",
        type: "address",
      },
    ],
    name: "getOwnedLiquidityPoolsCountOf",
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
    inputs: [],
    name: "getSymbolService",
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
    inputs: [],
    name: "getVault",
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
    inputs: [],
    name: "getVaultFeeRate",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getWeth",
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
        name: "grantee",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "privilege",
        type: "uint256",
      },
    ],
    name: "grantPrivilege",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "trader",
        type: "address",
      },
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
    name: "isActiveLiquidityPoolOf",
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
    inputs: [
      {
        internalType: "address",
        name: "grantor",
        type: "address",
      },
      {
        internalType: "address",
        name: "grantee",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "privilege",
        type: "uint256",
      },
    ],
    name: "isGranted",
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
    inputs: [
      {
        internalType: "address",
        name: "liquidityPool",
        type: "address",
      },
    ],
    name: "isLiquidityPool",
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
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "address",
        name: "base",
        type: "address",
      },
    ],
    name: "isVersionCompatible",
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
    inputs: [
      {
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "isVersionValid",
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
    inputs: [
      {
        internalType: "address",
        name: "trader",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "begin",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "end",
        type: "uint256",
      },
    ],
    name: "listActiveLiquidityPoolsOf",
    outputs: [
      {
        components: [
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
        internalType: "struct Tracer.PerpetualUID[]",
        name: "result",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "start",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "count",
        type: "uint256",
      },
    ],
    name: "listAvailableVersions",
    outputs: [
      {
        internalType: "address[]",
        name: "result",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "begin",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "end",
        type: "uint256",
      },
    ],
    name: "listLiquidityPoolOwnedBy",
    outputs: [
      {
        internalType: "address[]",
        name: "result",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "begin",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "end",
        type: "uint256",
      },
    ],
    name: "listLiquidityPools",
    outputs: [
      {
        internalType: "address[]",
        name: "result",
        type: "address[]",
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
        name: "grantee",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "privilege",
        type: "uint256",
      },
    ],
    name: "revokePrivilege",
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
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "setLiquidityPoolOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "newVaultFeeRate",
        type: "int256",
      },
    ],
    name: "setVaultFeeRate",
    outputs: [],
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
