/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { Reader } from "./Reader";

export class ReaderFactory {
  static connect(address: string, signerOrProvider: Signer | Provider): Reader {
    return new Contract(address, _abi, signerOrProvider) as Reader;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "inverseStateService_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
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
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "getAccountStorage",
    outputs: [
      {
        internalType: "bool",
        name: "isSynced",
        type: "bool",
      },
      {
        components: [
          {
            internalType: "int256",
            name: "cash",
            type: "int256",
          },
          {
            internalType: "int256",
            name: "position",
            type: "int256",
          },
          {
            internalType: "int256",
            name: "availableMargin",
            type: "int256",
          },
          {
            internalType: "int256",
            name: "margin",
            type: "int256",
          },
          {
            internalType: "int256",
            name: "settleableMargin",
            type: "int256",
          },
          {
            internalType: "bool",
            name: "isInitialMarginSafe",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "isMaintenanceMarginSafe",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "isMarginSafe",
            type: "bool",
          },
          {
            internalType: "int256",
            name: "targetLeverage",
            type: "int256",
          },
        ],
        internalType: "struct Reader.AccountReaderResult",
        name: "accountStorage",
        type: "tuple",
      },
    ],
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
        name: "begin",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "end",
        type: "uint256",
      },
    ],
    name: "getAccountsInfo",
    outputs: [
      {
        internalType: "bool",
        name: "isSynced",
        type: "bool",
      },
      {
        components: [
          {
            internalType: "address",
            name: "account",
            type: "address",
          },
          {
            internalType: "int256",
            name: "position",
            type: "int256",
          },
          {
            internalType: "int256",
            name: "margin",
            type: "int256",
          },
          {
            internalType: "bool",
            name: "isSafe",
            type: "bool",
          },
          {
            internalType: "int256",
            name: "availableCash",
            type: "int256",
          },
        ],
        internalType: "struct Reader.AccountsResult[]",
        name: "result",
        type: "tuple[]",
      },
    ],
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
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
    ],
    name: "getAccountsInfoByAddress",
    outputs: [
      {
        internalType: "bool",
        name: "isSynced",
        type: "bool",
      },
      {
        components: [
          {
            internalType: "address",
            name: "account",
            type: "address",
          },
          {
            internalType: "int256",
            name: "position",
            type: "int256",
          },
          {
            internalType: "int256",
            name: "margin",
            type: "int256",
          },
          {
            internalType: "bool",
            name: "isSafe",
            type: "bool",
          },
          {
            internalType: "int256",
            name: "availableCash",
            type: "int256",
          },
        ],
        internalType: "struct Reader.AccountsResult[]",
        name: "result",
        type: "tuple[]",
      },
    ],
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
    ],
    name: "getLiquidityPoolStorage",
    outputs: [
      {
        internalType: "bool",
        name: "isSynced",
        type: "bool",
      },
      {
        components: [
          {
            internalType: "bool",
            name: "isRunning",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "isFastCreationEnabled",
            type: "bool",
          },
          {
            internalType: "address[7]",
            name: "addresses",
            type: "address[7]",
          },
          {
            internalType: "int256[5]",
            name: "intNums",
            type: "int256[5]",
          },
          {
            internalType: "uint256[4]",
            name: "uintNums",
            type: "uint256[4]",
          },
          {
            components: [
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
                internalType: "int256[39]",
                name: "nums",
                type: "int256[39]",
              },
              {
                internalType: "uint256",
                name: "symbol",
                type: "uint256",
              },
              {
                internalType: "string",
                name: "underlyingAsset",
                type: "string",
              },
              {
                internalType: "bool",
                name: "isMarketClosed",
                type: "bool",
              },
              {
                internalType: "bool",
                name: "isTerminated",
                type: "bool",
              },
              {
                internalType: "int256",
                name: "ammCashBalance",
                type: "int256",
              },
              {
                internalType: "int256",
                name: "ammPositionAmount",
                type: "int256",
              },
              {
                internalType: "bool",
                name: "isInversePerpetual",
                type: "bool",
              },
            ],
            internalType: "struct Reader.PerpetualReaderResult[]",
            name: "perpetuals",
            type: "tuple[]",
          },
          {
            internalType: "bool",
            name: "isAMMMaintenanceSafe",
            type: "bool",
          },
        ],
        internalType: "struct Reader.LiquidityPoolReaderResult",
        name: "pool",
        type: "tuple",
      },
    ],
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
    ],
    name: "getPoolMargin",
    outputs: [
      {
        internalType: "bool",
        name: "isSynced",
        type: "bool",
      },
      {
        internalType: "int256",
        name: "poolMargin",
        type: "int256",
      },
      {
        internalType: "bool",
        name: "isSafe",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "inverseStateService",
    outputs: [
      {
        internalType: "contract IInverseStateService",
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
        name: "liquidityPool",
        type: "address",
      },
    ],
    name: "isAMMMaintenanceSafe",
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
        name: "liquidityPool",
        type: "address",
      },
      {
        internalType: "int256",
        name: "cashToAdd",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "shareToMint",
        type: "int256",
      },
    ],
    name: "queryAddLiquidity",
    outputs: [
      {
        internalType: "bool",
        name: "isSynced",
        type: "bool",
      },
      {
        internalType: "int256",
        name: "cashToAddResult",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "shareToMintResult",
        type: "int256",
      },
    ],
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
        internalType: "int256",
        name: "shareToRemove",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "cashToReturn",
        type: "int256",
      },
    ],
    name: "queryRemoveLiquidity",
    outputs: [
      {
        internalType: "bool",
        name: "isSynced",
        type: "bool",
      },
      {
        internalType: "int256",
        name: "shareToRemoveResult",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "cashToReturnResult",
        type: "int256",
      },
    ],
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
        internalType: "address",
        name: "trader",
        type: "address",
      },
      {
        internalType: "int256",
        name: "amount",
        type: "int256",
      },
      {
        internalType: "address",
        name: "referrer",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "flags",
        type: "uint32",
      },
    ],
    name: "queryTrade",
    outputs: [
      {
        internalType: "bool",
        name: "isSynced",
        type: "bool",
      },
      {
        internalType: "int256",
        name: "tradePrice",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "totalFee",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "cost",
        type: "int256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "oracles",
        type: "address[]",
      },
    ],
    name: "readIndexPrices",
    outputs: [
      {
        internalType: "bool[]",
        name: "isSuccess",
        type: "bool[]",
      },
      {
        internalType: "int256[]",
        name: "indexPrices",
        type: "int256[]",
      },
      {
        internalType: "uint256[]",
        name: "timestamps",
        type: "uint256[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];
