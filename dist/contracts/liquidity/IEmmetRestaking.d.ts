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
export interface IEmmetRestakingInterface extends Interface {
    getFunction(nameOrSignature: "calculateReward" | "getStake" | "numberOfStakes" | "stake" | "withdraw"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "Staked" | "Withdrawn"): EventFragment;
    encodeFunctionData(functionFragment: "calculateReward", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getStake", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "numberOfStakes", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "stake", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "withdraw", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "calculateReward", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getStake", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "numberOfStakes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stake", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
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
export interface IEmmetRestaking extends BaseContract {
    connect(runner?: ContractRunner | null): IEmmetRestaking;
    waitForDeployment(): Promise<this>;
    interface: IEmmetRestakingInterface;
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
    getStake: TypedContractMethod<[
        staker: AddressLike,
        index: BigNumberish
    ], [
        IEmmetRestaking.StakeStructOutput
    ], "view">;
    numberOfStakes: TypedContractMethod<[staker: AddressLike], [bigint], "view">;
    stake: TypedContractMethod<[amount: BigNumberish], [void], "nonpayable">;
    withdraw: TypedContractMethod<[index: BigNumberish], [void], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "calculateReward"): TypedContractMethod<[
        staker: AddressLike,
        index: BigNumberish
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "getStake"): TypedContractMethod<[
        staker: AddressLike,
        index: BigNumberish
    ], [
        IEmmetRestaking.StakeStructOutput
    ], "view">;
    getFunction(nameOrSignature: "numberOfStakes"): TypedContractMethod<[staker: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "stake"): TypedContractMethod<[amount: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "withdraw"): TypedContractMethod<[index: BigNumberish], [void], "nonpayable">;
    getEvent(key: "Staked"): TypedContractEvent<StakedEvent.InputTuple, StakedEvent.OutputTuple, StakedEvent.OutputObject>;
    getEvent(key: "Withdrawn"): TypedContractEvent<WithdrawnEvent.InputTuple, WithdrawnEvent.OutputTuple, WithdrawnEvent.OutputObject>;
    filters: {
        "Staked(address,uint256,uint256,uint256)": TypedContractEvent<StakedEvent.InputTuple, StakedEvent.OutputTuple, StakedEvent.OutputObject>;
        Staked: TypedContractEvent<StakedEvent.InputTuple, StakedEvent.OutputTuple, StakedEvent.OutputObject>;
        "Withdrawn(address,uint256,uint256,uint256)": TypedContractEvent<WithdrawnEvent.InputTuple, WithdrawnEvent.OutputTuple, WithdrawnEvent.OutputObject>;
        Withdrawn: TypedContractEvent<WithdrawnEvent.InputTuple, WithdrawnEvent.OutputTuple, WithdrawnEvent.OutputObject>;
    };
}
