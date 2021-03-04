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
            name: "availableCash",
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
            internalType: "int256",
            name: "vaultFeeRate",
            type: "int256",
          },
          {
            internalType: "int256",
            name: "poolCash",
            type: "int256",
          },
          {
            internalType: "uint256[4]",
            name: "nums",
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
                internalType: "int256",
                name: "ammCashBalance",
                type: "int256",
              },
              {
                internalType: "int256",
                name: "ammPositionAmount",
                type: "int256",
              },
            ],
            internalType: "struct Reader.PerpetualReaderResult[]",
            name: "perpetuals",
            type: "tuple[]",
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
];
