/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface UniswapV3OracleAdaptorInterface extends ethers.utils.Interface {
  functions: {
    "collateral()": FunctionFragment;
    "dumpPath()": FunctionFragment;
    "isMarketClosed()": FunctionFragment;
    "isTerminated()": FunctionFragment;
    "priceTWAPLong()": FunctionFragment;
    "priceTWAPShort()": FunctionFragment;
    "source()": FunctionFragment;
    "underlyingAsset()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "collateral",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "dumpPath", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "isMarketClosed",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isTerminated",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "priceTWAPLong",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "priceTWAPShort",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "source", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "underlyingAsset",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "collateral", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "dumpPath", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isMarketClosed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isTerminated",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "priceTWAPLong",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "priceTWAPShort",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "source", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "underlyingAsset",
    data: BytesLike
  ): Result;

  events: {};
}

export class UniswapV3OracleAdaptor extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: UniswapV3OracleAdaptorInterface;

  functions: {
    collateral(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "collateral()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    dumpPath(
      overrides?: CallOverrides
    ): Promise<{
      data: {
        path: string[];
        symbols: string[];
        fees: number[];
        shortPeriod: number;
        longPeriod: number;
        0: string[];
        1: string[];
        2: number[];
        3: number;
        4: number;
      };
      0: {
        path: string[];
        symbols: string[];
        fees: number[];
        shortPeriod: number;
        longPeriod: number;
        0: string[];
        1: string[];
        2: number[];
        3: number;
        4: number;
      };
    }>;

    "dumpPath()"(
      overrides?: CallOverrides
    ): Promise<{
      data: {
        path: string[];
        symbols: string[];
        fees: number[];
        shortPeriod: number;
        longPeriod: number;
        0: string[];
        1: string[];
        2: number[];
        3: number;
        4: number;
      };
      0: {
        path: string[];
        symbols: string[];
        fees: number[];
        shortPeriod: number;
        longPeriod: number;
        0: string[];
        1: string[];
        2: number[];
        3: number;
        4: number;
      };
    }>;

    isMarketClosed(
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "isMarketClosed()"(
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    isTerminated(
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "isTerminated()"(
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    priceTWAPLong(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
      1: BigNumber;
    }>;

    "priceTWAPLong()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
      1: BigNumber;
    }>;

    priceTWAPShort(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
      1: BigNumber;
    }>;

    "priceTWAPShort()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
      1: BigNumber;
    }>;

    source(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "source()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    underlyingAsset(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "underlyingAsset()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;
  };

  collateral(overrides?: CallOverrides): Promise<string>;

  "collateral()"(overrides?: CallOverrides): Promise<string>;

  dumpPath(
    overrides?: CallOverrides
  ): Promise<{
    path: string[];
    symbols: string[];
    fees: number[];
    shortPeriod: number;
    longPeriod: number;
    0: string[];
    1: string[];
    2: number[];
    3: number;
    4: number;
  }>;

  "dumpPath()"(
    overrides?: CallOverrides
  ): Promise<{
    path: string[];
    symbols: string[];
    fees: number[];
    shortPeriod: number;
    longPeriod: number;
    0: string[];
    1: string[];
    2: number[];
    3: number;
    4: number;
  }>;

  isMarketClosed(overrides?: CallOverrides): Promise<boolean>;

  "isMarketClosed()"(overrides?: CallOverrides): Promise<boolean>;

  isTerminated(overrides?: CallOverrides): Promise<boolean>;

  "isTerminated()"(overrides?: CallOverrides): Promise<boolean>;

  priceTWAPLong(
    overrides?: CallOverrides
  ): Promise<{
    0: BigNumber;
    1: BigNumber;
  }>;

  "priceTWAPLong()"(
    overrides?: CallOverrides
  ): Promise<{
    0: BigNumber;
    1: BigNumber;
  }>;

  priceTWAPShort(
    overrides?: CallOverrides
  ): Promise<{
    0: BigNumber;
    1: BigNumber;
  }>;

  "priceTWAPShort()"(
    overrides?: CallOverrides
  ): Promise<{
    0: BigNumber;
    1: BigNumber;
  }>;

  source(overrides?: CallOverrides): Promise<string>;

  "source()"(overrides?: CallOverrides): Promise<string>;

  underlyingAsset(overrides?: CallOverrides): Promise<string>;

  "underlyingAsset()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    collateral(overrides?: CallOverrides): Promise<string>;

    "collateral()"(overrides?: CallOverrides): Promise<string>;

    dumpPath(
      overrides?: CallOverrides
    ): Promise<{
      path: string[];
      symbols: string[];
      fees: number[];
      shortPeriod: number;
      longPeriod: number;
      0: string[];
      1: string[];
      2: number[];
      3: number;
      4: number;
    }>;

    "dumpPath()"(
      overrides?: CallOverrides
    ): Promise<{
      path: string[];
      symbols: string[];
      fees: number[];
      shortPeriod: number;
      longPeriod: number;
      0: string[];
      1: string[];
      2: number[];
      3: number;
      4: number;
    }>;

    isMarketClosed(overrides?: CallOverrides): Promise<boolean>;

    "isMarketClosed()"(overrides?: CallOverrides): Promise<boolean>;

    isTerminated(overrides?: CallOverrides): Promise<boolean>;

    "isTerminated()"(overrides?: CallOverrides): Promise<boolean>;

    priceTWAPLong(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
      1: BigNumber;
    }>;

    "priceTWAPLong()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
      1: BigNumber;
    }>;

    priceTWAPShort(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
      1: BigNumber;
    }>;

    "priceTWAPShort()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
      1: BigNumber;
    }>;

    source(overrides?: CallOverrides): Promise<string>;

    "source()"(overrides?: CallOverrides): Promise<string>;

    underlyingAsset(overrides?: CallOverrides): Promise<string>;

    "underlyingAsset()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    collateral(overrides?: CallOverrides): Promise<BigNumber>;

    "collateral()"(overrides?: CallOverrides): Promise<BigNumber>;

    dumpPath(overrides?: CallOverrides): Promise<BigNumber>;

    "dumpPath()"(overrides?: CallOverrides): Promise<BigNumber>;

    isMarketClosed(overrides?: CallOverrides): Promise<BigNumber>;

    "isMarketClosed()"(overrides?: CallOverrides): Promise<BigNumber>;

    isTerminated(overrides?: CallOverrides): Promise<BigNumber>;

    "isTerminated()"(overrides?: CallOverrides): Promise<BigNumber>;

    priceTWAPLong(overrides?: CallOverrides): Promise<BigNumber>;

    "priceTWAPLong()"(overrides?: CallOverrides): Promise<BigNumber>;

    priceTWAPShort(overrides?: CallOverrides): Promise<BigNumber>;

    "priceTWAPShort()"(overrides?: CallOverrides): Promise<BigNumber>;

    source(overrides?: CallOverrides): Promise<BigNumber>;

    "source()"(overrides?: CallOverrides): Promise<BigNumber>;

    underlyingAsset(overrides?: CallOverrides): Promise<BigNumber>;

    "underlyingAsset()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    collateral(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "collateral()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    dumpPath(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "dumpPath()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isMarketClosed(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "isMarketClosed()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isTerminated(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "isTerminated()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    priceTWAPLong(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "priceTWAPLong()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    priceTWAPShort(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "priceTWAPShort()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    source(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "source()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    underlyingAsset(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "underlyingAsset()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
