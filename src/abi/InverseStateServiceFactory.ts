/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { InverseStateService } from "./InverseStateService";

export class InverseStateServiceFactory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): InverseStateService {
    return new Contract(address, _abi, signerOrProvider) as InverseStateService;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
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
        internalType: "bool",
        name: "isInverse",
        type: "bool",
      },
    ],
    name: "SetInverseState",
    type: "event",
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
    name: "export",
    outputs: [
      {
        internalType: "bytes32[]",
        name: "result",
        type: "bytes32[]",
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
    name: "isInverse",
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
      {
        internalType: "uint256",
        name: "perpetualIndex",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isInverse_",
        type: "bool",
      },
    ],
    name: "setInverseState",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
