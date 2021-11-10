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
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface TunableOracleInterface extends ethers.utils.Interface {
  functions: {
    "collateral()": FunctionFragment;
    "externalOracle()": FunctionFragment;
    "externalPrice()": FunctionFragment;
    "fineTunedPrice()": FunctionFragment;
    "fineTuner()": FunctionFragment;
    "initialize(address,address,address)": FunctionFragment;
    "isMarketClosed()": FunctionFragment;
    "isReleased()": FunctionFragment;
    "isTerminated()": FunctionFragment;
    "liquidityPool()": FunctionFragment;
    "priceTWAPLong()": FunctionFragment;
    "priceTWAPShort()": FunctionFragment;
    "register()": FunctionFragment;
    "release()": FunctionFragment;
    "setFineTuner(address)": FunctionFragment;
    "setPrice(int256)": FunctionFragment;
    "underlyingAsset()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "collateral",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "externalOracle",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "externalPrice",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "fineTunedPrice",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "fineTuner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "isMarketClosed",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isReleased",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isTerminated",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "liquidityPool",
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
  encodeFunctionData(functionFragment: "register", values?: undefined): string;
  encodeFunctionData(functionFragment: "release", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setFineTuner",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setPrice",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "underlyingAsset",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "collateral", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "externalOracle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "externalPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fineTunedPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "fineTuner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isMarketClosed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isReleased", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isTerminated",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "liquidityPool",
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
  decodeFunctionResult(functionFragment: "register", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "release", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setFineTuner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setPrice", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "underlyingAsset",
    data: BytesLike
  ): Result;

  events: {
    "Released()": EventFragment;
    "SetFineTuner(address)": EventFragment;
    "SetPrice(int256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Released"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetFineTuner"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetPrice"): EventFragment;
}

export class TunableOracle extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: TunableOracleInterface;

  functions: {
    collateral(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "collateral()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    externalOracle(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "externalOracle()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    externalPrice(overrides?: CallOverrides): Promise<{
      price: BigNumber;
      timestamp: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    "externalPrice()"(overrides?: CallOverrides): Promise<{
      price: BigNumber;
      timestamp: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    fineTunedPrice(overrides?: CallOverrides): Promise<{
      price: BigNumber;
      timestamp: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    "fineTunedPrice()"(overrides?: CallOverrides): Promise<{
      price: BigNumber;
      timestamp: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    fineTuner(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "fineTuner()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    initialize(
      tunableOracleRegister_: string,
      liquidityPool_: string,
      externalOracle_: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "initialize(address,address,address)"(
      tunableOracleRegister_: string,
      liquidityPool_: string,
      externalOracle_: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    isMarketClosed(overrides?: Overrides): Promise<ContractTransaction>;

    "isMarketClosed()"(overrides?: Overrides): Promise<ContractTransaction>;

    isReleased(overrides?: CallOverrides): Promise<{
      0: boolean;
    }>;

    "isReleased()"(overrides?: CallOverrides): Promise<{
      0: boolean;
    }>;

    isTerminated(overrides?: Overrides): Promise<ContractTransaction>;

    "isTerminated()"(overrides?: Overrides): Promise<ContractTransaction>;

    liquidityPool(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "liquidityPool()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    priceTWAPLong(overrides?: Overrides): Promise<ContractTransaction>;

    "priceTWAPLong()"(overrides?: Overrides): Promise<ContractTransaction>;

    priceTWAPShort(overrides?: Overrides): Promise<ContractTransaction>;

    "priceTWAPShort()"(overrides?: Overrides): Promise<ContractTransaction>;

    register(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "register()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    release(overrides?: Overrides): Promise<ContractTransaction>;

    "release()"(overrides?: Overrides): Promise<ContractTransaction>;

    setFineTuner(
      newFineTuner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setFineTuner(address)"(
      newFineTuner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setPrice(
      newPrice: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setPrice(int256)"(
      newPrice: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    underlyingAsset(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "underlyingAsset()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;
  };

  collateral(overrides?: CallOverrides): Promise<string>;

  "collateral()"(overrides?: CallOverrides): Promise<string>;

  externalOracle(overrides?: CallOverrides): Promise<string>;

  "externalOracle()"(overrides?: CallOverrides): Promise<string>;

  externalPrice(overrides?: CallOverrides): Promise<{
    price: BigNumber;
    timestamp: BigNumber;
    0: BigNumber;
    1: BigNumber;
  }>;

  "externalPrice()"(overrides?: CallOverrides): Promise<{
    price: BigNumber;
    timestamp: BigNumber;
    0: BigNumber;
    1: BigNumber;
  }>;

  fineTunedPrice(overrides?: CallOverrides): Promise<{
    price: BigNumber;
    timestamp: BigNumber;
    0: BigNumber;
    1: BigNumber;
  }>;

  "fineTunedPrice()"(overrides?: CallOverrides): Promise<{
    price: BigNumber;
    timestamp: BigNumber;
    0: BigNumber;
    1: BigNumber;
  }>;

  fineTuner(overrides?: CallOverrides): Promise<string>;

  "fineTuner()"(overrides?: CallOverrides): Promise<string>;

  initialize(
    tunableOracleRegister_: string,
    liquidityPool_: string,
    externalOracle_: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "initialize(address,address,address)"(
    tunableOracleRegister_: string,
    liquidityPool_: string,
    externalOracle_: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  isMarketClosed(overrides?: Overrides): Promise<ContractTransaction>;

  "isMarketClosed()"(overrides?: Overrides): Promise<ContractTransaction>;

  isReleased(overrides?: CallOverrides): Promise<boolean>;

  "isReleased()"(overrides?: CallOverrides): Promise<boolean>;

  isTerminated(overrides?: Overrides): Promise<ContractTransaction>;

  "isTerminated()"(overrides?: Overrides): Promise<ContractTransaction>;

  liquidityPool(overrides?: CallOverrides): Promise<string>;

  "liquidityPool()"(overrides?: CallOverrides): Promise<string>;

  priceTWAPLong(overrides?: Overrides): Promise<ContractTransaction>;

  "priceTWAPLong()"(overrides?: Overrides): Promise<ContractTransaction>;

  priceTWAPShort(overrides?: Overrides): Promise<ContractTransaction>;

  "priceTWAPShort()"(overrides?: Overrides): Promise<ContractTransaction>;

  register(overrides?: CallOverrides): Promise<string>;

  "register()"(overrides?: CallOverrides): Promise<string>;

  release(overrides?: Overrides): Promise<ContractTransaction>;

  "release()"(overrides?: Overrides): Promise<ContractTransaction>;

  setFineTuner(
    newFineTuner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setFineTuner(address)"(
    newFineTuner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setPrice(
    newPrice: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setPrice(int256)"(
    newPrice: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  underlyingAsset(overrides?: CallOverrides): Promise<string>;

  "underlyingAsset()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    collateral(overrides?: CallOverrides): Promise<string>;

    "collateral()"(overrides?: CallOverrides): Promise<string>;

    externalOracle(overrides?: CallOverrides): Promise<string>;

    "externalOracle()"(overrides?: CallOverrides): Promise<string>;

    externalPrice(overrides?: CallOverrides): Promise<{
      price: BigNumber;
      timestamp: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    "externalPrice()"(overrides?: CallOverrides): Promise<{
      price: BigNumber;
      timestamp: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    fineTunedPrice(overrides?: CallOverrides): Promise<{
      price: BigNumber;
      timestamp: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    "fineTunedPrice()"(overrides?: CallOverrides): Promise<{
      price: BigNumber;
      timestamp: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    fineTuner(overrides?: CallOverrides): Promise<string>;

    "fineTuner()"(overrides?: CallOverrides): Promise<string>;

    initialize(
      tunableOracleRegister_: string,
      liquidityPool_: string,
      externalOracle_: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "initialize(address,address,address)"(
      tunableOracleRegister_: string,
      liquidityPool_: string,
      externalOracle_: string,
      overrides?: CallOverrides
    ): Promise<void>;

    isMarketClosed(overrides?: CallOverrides): Promise<boolean>;

    "isMarketClosed()"(overrides?: CallOverrides): Promise<boolean>;

    isReleased(overrides?: CallOverrides): Promise<boolean>;

    "isReleased()"(overrides?: CallOverrides): Promise<boolean>;

    isTerminated(overrides?: CallOverrides): Promise<boolean>;

    "isTerminated()"(overrides?: CallOverrides): Promise<boolean>;

    liquidityPool(overrides?: CallOverrides): Promise<string>;

    "liquidityPool()"(overrides?: CallOverrides): Promise<string>;

    priceTWAPLong(overrides?: CallOverrides): Promise<{
      0: BigNumber;
      1: BigNumber;
    }>;

    "priceTWAPLong()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
      1: BigNumber;
    }>;

    priceTWAPShort(overrides?: CallOverrides): Promise<{
      0: BigNumber;
      1: BigNumber;
    }>;

    "priceTWAPShort()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
      1: BigNumber;
    }>;

    register(overrides?: CallOverrides): Promise<string>;

    "register()"(overrides?: CallOverrides): Promise<string>;

    release(overrides?: CallOverrides): Promise<void>;

    "release()"(overrides?: CallOverrides): Promise<void>;

    setFineTuner(
      newFineTuner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "setFineTuner(address)"(
      newFineTuner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setPrice(newPrice: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "setPrice(int256)"(
      newPrice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    underlyingAsset(overrides?: CallOverrides): Promise<string>;

    "underlyingAsset()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    Released(): EventFilter;

    SetFineTuner(fineTuner: null): EventFilter;

    SetPrice(price: null, timestamp: null): EventFilter;
  };

  estimateGas: {
    collateral(overrides?: CallOverrides): Promise<BigNumber>;

    "collateral()"(overrides?: CallOverrides): Promise<BigNumber>;

    externalOracle(overrides?: CallOverrides): Promise<BigNumber>;

    "externalOracle()"(overrides?: CallOverrides): Promise<BigNumber>;

    externalPrice(overrides?: CallOverrides): Promise<BigNumber>;

    "externalPrice()"(overrides?: CallOverrides): Promise<BigNumber>;

    fineTunedPrice(overrides?: CallOverrides): Promise<BigNumber>;

    "fineTunedPrice()"(overrides?: CallOverrides): Promise<BigNumber>;

    fineTuner(overrides?: CallOverrides): Promise<BigNumber>;

    "fineTuner()"(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      tunableOracleRegister_: string,
      liquidityPool_: string,
      externalOracle_: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "initialize(address,address,address)"(
      tunableOracleRegister_: string,
      liquidityPool_: string,
      externalOracle_: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    isMarketClosed(overrides?: Overrides): Promise<BigNumber>;

    "isMarketClosed()"(overrides?: Overrides): Promise<BigNumber>;

    isReleased(overrides?: CallOverrides): Promise<BigNumber>;

    "isReleased()"(overrides?: CallOverrides): Promise<BigNumber>;

    isTerminated(overrides?: Overrides): Promise<BigNumber>;

    "isTerminated()"(overrides?: Overrides): Promise<BigNumber>;

    liquidityPool(overrides?: CallOverrides): Promise<BigNumber>;

    "liquidityPool()"(overrides?: CallOverrides): Promise<BigNumber>;

    priceTWAPLong(overrides?: Overrides): Promise<BigNumber>;

    "priceTWAPLong()"(overrides?: Overrides): Promise<BigNumber>;

    priceTWAPShort(overrides?: Overrides): Promise<BigNumber>;

    "priceTWAPShort()"(overrides?: Overrides): Promise<BigNumber>;

    register(overrides?: CallOverrides): Promise<BigNumber>;

    "register()"(overrides?: CallOverrides): Promise<BigNumber>;

    release(overrides?: Overrides): Promise<BigNumber>;

    "release()"(overrides?: Overrides): Promise<BigNumber>;

    setFineTuner(
      newFineTuner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setFineTuner(address)"(
      newFineTuner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setPrice(newPrice: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    "setPrice(int256)"(
      newPrice: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    underlyingAsset(overrides?: CallOverrides): Promise<BigNumber>;

    "underlyingAsset()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    collateral(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "collateral()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    externalOracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "externalOracle()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    externalPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "externalPrice()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    fineTunedPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "fineTunedPrice()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    fineTuner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "fineTuner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      tunableOracleRegister_: string,
      liquidityPool_: string,
      externalOracle_: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "initialize(address,address,address)"(
      tunableOracleRegister_: string,
      liquidityPool_: string,
      externalOracle_: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    isMarketClosed(overrides?: Overrides): Promise<PopulatedTransaction>;

    "isMarketClosed()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    isReleased(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "isReleased()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isTerminated(overrides?: Overrides): Promise<PopulatedTransaction>;

    "isTerminated()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    liquidityPool(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "liquidityPool()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    priceTWAPLong(overrides?: Overrides): Promise<PopulatedTransaction>;

    "priceTWAPLong()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    priceTWAPShort(overrides?: Overrides): Promise<PopulatedTransaction>;

    "priceTWAPShort()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    register(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "register()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    release(overrides?: Overrides): Promise<PopulatedTransaction>;

    "release()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    setFineTuner(
      newFineTuner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setFineTuner(address)"(
      newFineTuner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setPrice(
      newPrice: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setPrice(int256)"(
      newPrice: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    underlyingAsset(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "underlyingAsset()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
