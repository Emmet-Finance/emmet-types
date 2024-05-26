import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../../common";
export declare namespace IEmmetRestaking {
    type StakeStruct = {
        amount: BigNumberish;
        timestamp: BigNumberish;
        apy: BigNumberish;
    };
    type StakeStructOutput = [
        amount: bigint,
        timestamp: bigint,
        apy: bigint
    ] & {
        amount: bigint;
        timestamp: bigint;
        apy: bigint;
    };
}
export interface EmmetRestakingInterface extends Interface {
    getFunction(nameOrSignature: "calculateReward" | "currentAPY" | "getStake" | "lpToken" | "numberOfStakes" | "owner" | "renounceOwnership" | "setAPY" | "stake" | "transferOwnership" | "withdraw"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "APYChanged" | "OwnershipTransferred" | "Staked" | "Withdrawn"): EventFragment;
    encodeFunctionData(functionFragment: "calculateReward", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "currentAPY", values?: undefined): string;
    encodeFunctionData(functionFragment: "getStake", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "lpToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "numberOfStakes", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "setAPY", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "stake", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "withdraw", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "calculateReward", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "currentAPY", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getStake", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lpToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "numberOfStakes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAPY", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stake", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
}
export declare namespace APYChangedEvent {
    type InputTuple = [newAPY: BigNumberish];
    type OutputTuple = [newAPY: bigint];
    interface OutputObject {
        newAPY: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace OwnershipTransferredEvent {
    type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
    type OutputTuple = [previousOwner: string, newOwner: string];
    interface OutputObject {
        previousOwner: string;
        newOwner: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace StakedEvent {
    type InputTuple = [
        user: AddressLike,
        amount: BigNumberish,
        index: BigNumberish,
        apy: BigNumberish
    ];
    type OutputTuple = [
        user: string,
        amount: bigint,
        index: bigint,
        apy: bigint
    ];
    interface OutputObject {
        user: string;
        amount: bigint;
        index: bigint;
        apy: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace WithdrawnEvent {
    type InputTuple = [
        user: AddressLike,
        amount: BigNumberish,
        reward: BigNumberish,
        index: BigNumberish
    ];
    type OutputTuple = [
        user: string,
        amount: bigint,
        reward: bigint,
        index: bigint
    ];
    interface OutputObject {
        user: string;
        amount: bigint;
        reward: bigint;
        index: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface EmmetRestaking extends BaseContract {
    connect(runner?: ContractRunner | null): EmmetRestaking;
    waitForDeployment(): Promise<this>;
    interface: EmmetRestakingInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    calculateReward: TypedContractMethod<[
        staker: AddressLike,
        index: BigNumberish
    ], [
        bigint
    ], "view">;
    currentAPY: TypedContractMethod<[], [bigint], "view">;
    getStake: TypedContractMethod<[
        staker: AddressLike,
        index: BigNumberish
    ], [
        IEmmetRestaking.StakeStructOutput
    ], "view">;
    lpToken: TypedContractMethod<[], [string], "view">;
    numberOfStakes: TypedContractMethod<[staker: AddressLike], [bigint], "view">;
    owner: TypedContractMethod<[], [string], "view">;
    renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;
    setAPY: TypedContractMethod<[apy_: BigNumberish], [void], "nonpayable">;
    stake: TypedContractMethod<[amount: BigNumberish], [void], "nonpayable">;
    transferOwnership: TypedContractMethod<[
        newOwner: AddressLike
    ], [
        void
    ], "nonpayable">;
    withdraw: TypedContractMethod<[index: BigNumberish], [void], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "calculateReward"): TypedContractMethod<[
        staker: AddressLike,
        index: BigNumberish
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "currentAPY"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "getStake"): TypedContractMethod<[
        staker: AddressLike,
        index: BigNumberish
    ], [
        IEmmetRestaking.StakeStructOutput
    ], "view">;
    getFunction(nameOrSignature: "lpToken"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "numberOfStakes"): TypedContractMethod<[staker: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "owner"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "renounceOwnership"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "setAPY"): TypedContractMethod<[apy_: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "stake"): TypedContractMethod<[amount: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "transferOwnership"): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "withdraw"): TypedContractMethod<[index: BigNumberish], [void], "nonpayable">;
    getEvent(key: "APYChanged"): TypedContractEvent<APYChangedEvent.InputTuple, APYChangedEvent.OutputTuple, APYChangedEvent.OutputObject>;
    getEvent(key: "OwnershipTransferred"): TypedContractEvent<OwnershipTransferredEvent.InputTuple, OwnershipTransferredEvent.OutputTuple, OwnershipTransferredEvent.OutputObject>;
    getEvent(key: "Staked"): TypedContractEvent<StakedEvent.InputTuple, StakedEvent.OutputTuple, StakedEvent.OutputObject>;
    getEvent(key: "Withdrawn"): TypedContractEvent<WithdrawnEvent.InputTuple, WithdrawnEvent.OutputTuple, WithdrawnEvent.OutputObject>;
    filters: {
        "APYChanged(uint256)": TypedContractEvent<APYChangedEvent.InputTuple, APYChangedEvent.OutputTuple, APYChangedEvent.OutputObject>;
        APYChanged: TypedContractEvent<APYChangedEvent.InputTuple, APYChangedEvent.OutputTuple, APYChangedEvent.OutputObject>;
        "OwnershipTransferred(address,address)": TypedContractEvent<OwnershipTransferredEvent.InputTuple, OwnershipTransferredEvent.OutputTuple, OwnershipTransferredEvent.OutputObject>;
        OwnershipTransferred: TypedContractEvent<OwnershipTransferredEvent.InputTuple, OwnershipTransferredEvent.OutputTuple, OwnershipTransferredEvent.OutputObject>;
        "Staked(address,uint256,uint256,uint256)": TypedContractEvent<StakedEvent.InputTuple, StakedEvent.OutputTuple, StakedEvent.OutputObject>;
        Staked: TypedContractEvent<StakedEvent.InputTuple, StakedEvent.OutputTuple, StakedEvent.OutputObject>;
        "Withdrawn(address,uint256,uint256,uint256)": TypedContractEvent<WithdrawnEvent.InputTuple, WithdrawnEvent.OutputTuple, WithdrawnEvent.OutputObject>;
        Withdrawn: TypedContractEvent<WithdrawnEvent.InputTuple, WithdrawnEvent.OutputTuple, WithdrawnEvent.OutputObject>;
    };
}
