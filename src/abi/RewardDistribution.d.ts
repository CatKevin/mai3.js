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

interface RewardDistributionInterface extends ethers.utils.Interface {
  functions: {
    "REWARD_DISTRIBUTION_ADMIN_ROLE()": FunctionFragment;
    "authenticator()": FunctionFragment;
    "baseToken()": FunctionFragment;
    "beforeBurningToken(address,uint256,uint256)": FunctionFragment;
    "beforeMintingToken(address,uint256,uint256)": FunctionFragment;
    "createRewardPlan(address,uint256)": FunctionFragment;
    "earned(address,address)": FunctionFragment;
    "getAllRewards()": FunctionFragment;
    "getReward(address)": FunctionFragment;
    "getRewardPlan(address)": FunctionFragment;
    "getRewardTokens()": FunctionFragment;
    "hasPlan(address)": FunctionFragment;
    "lastTimeRewardApplicable(address)": FunctionFragment;
    "notifyRewardAmount(address,uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "rewardPerToken(address)": FunctionFragment;
    "setRewardRate(address,uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "xmcb()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "REWARD_DISTRIBUTION_ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "authenticator",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "baseToken", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "beforeBurningToken",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "beforeMintingToken",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "createRewardPlan",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "earned",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getAllRewards",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getReward", values: [string]): string;
  encodeFunctionData(
    functionFragment: "getRewardPlan",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getRewardTokens",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "hasPlan", values: [string]): string;
  encodeFunctionData(
    functionFragment: "lastTimeRewardApplicable",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "notifyRewardAmount",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewardPerToken",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setRewardRate",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "xmcb", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "REWARD_DISTRIBUTION_ADMIN_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "authenticator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "baseToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "beforeBurningToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "beforeMintingToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createRewardPlan",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "earned", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getAllRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getReward", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getRewardPlan",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRewardTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "hasPlan", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lastTimeRewardApplicable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "notifyRewardAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardPerToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRewardRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "xmcb", data: BytesLike): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
    "RewardAdded(uint256,uint256)": EventFragment;
    "RewardPaid(address,uint256)": EventFragment;
    "RewardPlanCreated(address,uint256)": EventFragment;
    "RewardRateChanged(uint256,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RewardAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RewardPaid"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RewardPlanCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RewardRateChanged"): EventFragment;
}

export class RewardDistribution extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: RewardDistributionInterface;

  functions: {
    REWARD_DISTRIBUTION_ADMIN_ROLE(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "REWARD_DISTRIBUTION_ADMIN_ROLE()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    authenticator(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "authenticator()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    baseToken(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "baseToken()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    beforeBurningToken(
      account: string,
      arg1: BigNumberish,
      arg2: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "beforeBurningToken(address,uint256,uint256)"(
      account: string,
      arg1: BigNumberish,
      arg2: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    beforeMintingToken(
      account: string,
      arg1: BigNumberish,
      arg2: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "beforeMintingToken(address,uint256,uint256)"(
      account: string,
      arg1: BigNumberish,
      arg2: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    createRewardPlan(
      token: string,
      rewardRate: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "createRewardPlan(address,uint256)"(
      token: string,
      rewardRate: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    earned(
      token: string,
      account: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "earned(address,address)"(
      token: string,
      account: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    getAllRewards(overrides?: Overrides): Promise<ContractTransaction>;

    "getAllRewards()"(overrides?: Overrides): Promise<ContractTransaction>;

    getReward(
      token: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "getReward(address)"(
      token: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    getRewardPlan(
      token: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
      1: BigNumber;
    }>;

    "getRewardPlan(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
      1: BigNumber;
    }>;

    getRewardTokens(
      overrides?: CallOverrides
    ): Promise<{
      0: string[];
    }>;

    "getRewardTokens()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string[];
    }>;

    hasPlan(
      token: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "hasPlan(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    lastTimeRewardApplicable(
      token: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "lastTimeRewardApplicable(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    notifyRewardAmount(
      token: string,
      reward: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "notifyRewardAmount(address,uint256)"(
      token: string,
      reward: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    owner(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "owner()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

    rewardPerToken(
      token: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "rewardPerToken(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    setRewardRate(
      token: string,
      newRewardRate: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setRewardRate(address,uint256)"(
      token: string,
      newRewardRate: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    xmcb(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "xmcb()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;
  };

  REWARD_DISTRIBUTION_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

  "REWARD_DISTRIBUTION_ADMIN_ROLE()"(
    overrides?: CallOverrides
  ): Promise<string>;

  authenticator(overrides?: CallOverrides): Promise<string>;

  "authenticator()"(overrides?: CallOverrides): Promise<string>;

  baseToken(overrides?: CallOverrides): Promise<string>;

  "baseToken()"(overrides?: CallOverrides): Promise<string>;

  beforeBurningToken(
    account: string,
    arg1: BigNumberish,
    arg2: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "beforeBurningToken(address,uint256,uint256)"(
    account: string,
    arg1: BigNumberish,
    arg2: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  beforeMintingToken(
    account: string,
    arg1: BigNumberish,
    arg2: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "beforeMintingToken(address,uint256,uint256)"(
    account: string,
    arg1: BigNumberish,
    arg2: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  createRewardPlan(
    token: string,
    rewardRate: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "createRewardPlan(address,uint256)"(
    token: string,
    rewardRate: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  earned(
    token: string,
    account: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "earned(address,address)"(
    token: string,
    account: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getAllRewards(overrides?: Overrides): Promise<ContractTransaction>;

  "getAllRewards()"(overrides?: Overrides): Promise<ContractTransaction>;

  getReward(token: string, overrides?: Overrides): Promise<ContractTransaction>;

  "getReward(address)"(
    token: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  getRewardPlan(
    token: string,
    overrides?: CallOverrides
  ): Promise<{
    0: BigNumber;
    1: BigNumber;
  }>;

  "getRewardPlan(address)"(
    token: string,
    overrides?: CallOverrides
  ): Promise<{
    0: BigNumber;
    1: BigNumber;
  }>;

  getRewardTokens(overrides?: CallOverrides): Promise<string[]>;

  "getRewardTokens()"(overrides?: CallOverrides): Promise<string[]>;

  hasPlan(token: string, overrides?: CallOverrides): Promise<boolean>;

  "hasPlan(address)"(
    token: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  lastTimeRewardApplicable(
    token: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "lastTimeRewardApplicable(address)"(
    token: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  notifyRewardAmount(
    token: string,
    reward: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "notifyRewardAmount(address,uint256)"(
    token: string,
    reward: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

  "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

  rewardPerToken(token: string, overrides?: CallOverrides): Promise<BigNumber>;

  "rewardPerToken(address)"(
    token: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  setRewardRate(
    token: string,
    newRewardRate: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setRewardRate(address,uint256)"(
    token: string,
    newRewardRate: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transferOwnership(address)"(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  xmcb(overrides?: CallOverrides): Promise<string>;

  "xmcb()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    REWARD_DISTRIBUTION_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

    "REWARD_DISTRIBUTION_ADMIN_ROLE()"(
      overrides?: CallOverrides
    ): Promise<string>;

    authenticator(overrides?: CallOverrides): Promise<string>;

    "authenticator()"(overrides?: CallOverrides): Promise<string>;

    baseToken(overrides?: CallOverrides): Promise<string>;

    "baseToken()"(overrides?: CallOverrides): Promise<string>;

    beforeBurningToken(
      account: string,
      arg1: BigNumberish,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "beforeBurningToken(address,uint256,uint256)"(
      account: string,
      arg1: BigNumberish,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    beforeMintingToken(
      account: string,
      arg1: BigNumberish,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "beforeMintingToken(address,uint256,uint256)"(
      account: string,
      arg1: BigNumberish,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    createRewardPlan(
      token: string,
      rewardRate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "createRewardPlan(address,uint256)"(
      token: string,
      rewardRate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    earned(
      token: string,
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "earned(address,address)"(
      token: string,
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAllRewards(overrides?: CallOverrides): Promise<void>;

    "getAllRewards()"(overrides?: CallOverrides): Promise<void>;

    getReward(token: string, overrides?: CallOverrides): Promise<void>;

    "getReward(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<void>;

    getRewardPlan(
      token: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
      1: BigNumber;
    }>;

    "getRewardPlan(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
      1: BigNumber;
    }>;

    getRewardTokens(overrides?: CallOverrides): Promise<string[]>;

    "getRewardTokens()"(overrides?: CallOverrides): Promise<string[]>;

    hasPlan(token: string, overrides?: CallOverrides): Promise<boolean>;

    "hasPlan(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    lastTimeRewardApplicable(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "lastTimeRewardApplicable(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    notifyRewardAmount(
      token: string,
      reward: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "notifyRewardAmount(address,uint256)"(
      token: string,
      reward: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    rewardPerToken(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "rewardPerToken(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setRewardRate(
      token: string,
      newRewardRate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setRewardRate(address,uint256)"(
      token: string,
      newRewardRate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    xmcb(overrides?: CallOverrides): Promise<string>;

    "xmcb()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): EventFilter;

    RewardAdded(reward: null, periodFinish: null): EventFilter;

    RewardPaid(user: string | null, reward: null): EventFilter;

    RewardPlanCreated(token: string | null, rewardRate: null): EventFilter;

    RewardRateChanged(
      previousRate: null,
      currentRate: null,
      periodFinish: null
    ): EventFilter;
  };

  estimateGas: {
    REWARD_DISTRIBUTION_ADMIN_ROLE(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "REWARD_DISTRIBUTION_ADMIN_ROLE()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    authenticator(overrides?: CallOverrides): Promise<BigNumber>;

    "authenticator()"(overrides?: CallOverrides): Promise<BigNumber>;

    baseToken(overrides?: CallOverrides): Promise<BigNumber>;

    "baseToken()"(overrides?: CallOverrides): Promise<BigNumber>;

    beforeBurningToken(
      account: string,
      arg1: BigNumberish,
      arg2: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "beforeBurningToken(address,uint256,uint256)"(
      account: string,
      arg1: BigNumberish,
      arg2: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    beforeMintingToken(
      account: string,
      arg1: BigNumberish,
      arg2: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "beforeMintingToken(address,uint256,uint256)"(
      account: string,
      arg1: BigNumberish,
      arg2: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    createRewardPlan(
      token: string,
      rewardRate: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "createRewardPlan(address,uint256)"(
      token: string,
      rewardRate: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    earned(
      token: string,
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "earned(address,address)"(
      token: string,
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAllRewards(overrides?: Overrides): Promise<BigNumber>;

    "getAllRewards()"(overrides?: Overrides): Promise<BigNumber>;

    getReward(token: string, overrides?: Overrides): Promise<BigNumber>;

    "getReward(address)"(
      token: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    getRewardPlan(token: string, overrides?: CallOverrides): Promise<BigNumber>;

    "getRewardPlan(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRewardTokens(overrides?: CallOverrides): Promise<BigNumber>;

    "getRewardTokens()"(overrides?: CallOverrides): Promise<BigNumber>;

    hasPlan(token: string, overrides?: CallOverrides): Promise<BigNumber>;

    "hasPlan(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lastTimeRewardApplicable(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "lastTimeRewardApplicable(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    notifyRewardAmount(
      token: string,
      reward: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "notifyRewardAmount(address,uint256)"(
      token: string,
      reward: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides): Promise<BigNumber>;

    "renounceOwnership()"(overrides?: Overrides): Promise<BigNumber>;

    rewardPerToken(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "rewardPerToken(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setRewardRate(
      token: string,
      newRewardRate: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setRewardRate(address,uint256)"(
      token: string,
      newRewardRate: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    xmcb(overrides?: CallOverrides): Promise<BigNumber>;

    "xmcb()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    REWARD_DISTRIBUTION_ADMIN_ROLE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "REWARD_DISTRIBUTION_ADMIN_ROLE()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    authenticator(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "authenticator()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    baseToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "baseToken()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    beforeBurningToken(
      account: string,
      arg1: BigNumberish,
      arg2: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "beforeBurningToken(address,uint256,uint256)"(
      account: string,
      arg1: BigNumberish,
      arg2: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    beforeMintingToken(
      account: string,
      arg1: BigNumberish,
      arg2: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "beforeMintingToken(address,uint256,uint256)"(
      account: string,
      arg1: BigNumberish,
      arg2: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    createRewardPlan(
      token: string,
      rewardRate: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "createRewardPlan(address,uint256)"(
      token: string,
      rewardRate: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    earned(
      token: string,
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "earned(address,address)"(
      token: string,
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAllRewards(overrides?: Overrides): Promise<PopulatedTransaction>;

    "getAllRewards()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    getReward(
      token: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "getReward(address)"(
      token: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    getRewardPlan(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getRewardPlan(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRewardTokens(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getRewardTokens()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    hasPlan(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "hasPlan(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lastTimeRewardApplicable(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "lastTimeRewardApplicable(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    notifyRewardAmount(
      token: string,
      reward: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "notifyRewardAmount(address,uint256)"(
      token: string,
      reward: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides): Promise<PopulatedTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    rewardPerToken(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "rewardPerToken(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setRewardRate(
      token: string,
      newRewardRate: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setRewardRate(address,uint256)"(
      token: string,
      newRewardRate: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    xmcb(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "xmcb()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
