import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../../../../common";
export interface IEmmetLPInterface extends Interface {
    getFunction(nameOrSignature: "boost" | "currentAPY" | "decimals" | "deposit" | "getProviderRewards" | "getTokenFee" | "releaseTokens" | "withdrawFees" | "withdrawTokens"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "Deposited" | "LpTransfer" | "ReleasedToken" | "RewardPaid" | "Withdrawn"): EventFragment;
    encodeFunctionData(functionFragment: "boost", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "currentAPY", values?: undefined): string;
    encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "deposit", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getProviderRewards", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getTokenFee", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "releaseTokens", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "withdrawFees", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdrawTokens", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "boost", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "currentAPY", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getProviderRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTokenFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "releaseTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawTokens", data: BytesLike): Result;
}
export declare namespace DepositedEvent {
    type InputTuple = [staker: AddressLike, amount: BigNumberish];
    type OutputTuple = [staker: string, amount: bigint];
    interface OutputObject {
        staker: string;
        amount: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace LpTransferEvent {
    type InputTuple = [to: AddressLike, amount: BigNumberish];
    type OutputTuple = [to: string, amount: bigint];
    interface OutputObject {
        to: string;
        amount: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace ReleasedTokenEvent {
    type InputTuple = [amount: BigNumberish];
    type OutputTuple = [amount: bigint];
    interface OutputObject {
        amount: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace RewardPaidEvent {
    type InputTuple = [user: AddressLike, reward: BigNumberish];
    type OutputTuple = [user: string, reward: bigint];
    interface OutputObject {
        user: string;
        reward: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace WithdrawnEvent {
    type InputTuple = [staker: AddressLike, amount: BigNumberish];
    type OutputTuple = [staker: string, amount: bigint];
    interface OutputObject {
        staker: string;
        amount: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface IEmmetLP extends BaseContract {
    connect(runner?: ContractRunner | null): IEmmetLP;
    waitForDeployment(): Promise<this>;
    interface: IEmmetLPInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    boost: TypedContractMethod<[amount: BigNumberish], [void], "nonpayable">;
    currentAPY: TypedContractMethod<[], [bigint], "view">;
    decimals: TypedContractMethod<[], [bigint], "view">;
    deposit: TypedContractMethod<[amount: BigNumberish], [void], "nonpayable">;
    getProviderRewards: TypedContractMethod<[
        provider: AddressLike
    ], [
        bigint
    ], "view">;
    getTokenFee: TypedContractMethod<[
        amount: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    releaseTokens: TypedContractMethod<[
        to: AddressLike,
        amount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    withdrawFees: TypedContractMethod<[], [void], "nonpayable">;
    withdrawTokens: TypedContractMethod<[
        amount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "boost"): TypedContractMethod<[amount: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "currentAPY"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "decimals"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "deposit"): TypedContractMethod<[amount: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "getProviderRewards"): TypedContractMethod<[provider: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "getTokenFee"): TypedContractMethod<[amount: BigNumberish], [bigint], "nonpayable">;
    getFunction(nameOrSignature: "releaseTokens"): TypedContractMethod<[
        to: AddressLike,
        amount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "withdrawFees"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "withdrawTokens"): TypedContractMethod<[amount: BigNumberish], [void], "nonpayable">;
    getEvent(key: "Deposited"): TypedContractEvent<DepositedEvent.InputTuple, DepositedEvent.OutputTuple, DepositedEvent.OutputObject>;
    getEvent(key: "LpTransfer"): TypedContractEvent<LpTransferEvent.InputTuple, LpTransferEvent.OutputTuple, LpTransferEvent.OutputObject>;
    getEvent(key: "ReleasedToken"): TypedContractEvent<ReleasedTokenEvent.InputTuple, ReleasedTokenEvent.OutputTuple, ReleasedTokenEvent.OutputObject>;
    getEvent(key: "RewardPaid"): TypedContractEvent<RewardPaidEvent.InputTuple, RewardPaidEvent.OutputTuple, RewardPaidEvent.OutputObject>;
    getEvent(key: "Withdrawn"): TypedContractEvent<WithdrawnEvent.InputTuple, WithdrawnEvent.OutputTuple, WithdrawnEvent.OutputObject>;
    filters: {
        "Deposited(address,uint256)": TypedContractEvent<DepositedEvent.InputTuple, DepositedEvent.OutputTuple, DepositedEvent.OutputObject>;
        Deposited: TypedContractEvent<DepositedEvent.InputTuple, DepositedEvent.OutputTuple, DepositedEvent.OutputObject>;
        "LpTransfer(address,uint256)": TypedContractEvent<LpTransferEvent.InputTuple, LpTransferEvent.OutputTuple, LpTransferEvent.OutputObject>;
        LpTransfer: TypedContractEvent<LpTransferEvent.InputTuple, LpTransferEvent.OutputTuple, LpTransferEvent.OutputObject>;
        "ReleasedToken(uint256)": TypedContractEvent<ReleasedTokenEvent.InputTuple, ReleasedTokenEvent.OutputTuple, ReleasedTokenEvent.OutputObject>;
        ReleasedToken: TypedContractEvent<ReleasedTokenEvent.InputTuple, ReleasedTokenEvent.OutputTuple, ReleasedTokenEvent.OutputObject>;
        "RewardPaid(address,uint256)": TypedContractEvent<RewardPaidEvent.InputTuple, RewardPaidEvent.OutputTuple, RewardPaidEvent.OutputObject>;
        RewardPaid: TypedContractEvent<RewardPaidEvent.InputTuple, RewardPaidEvent.OutputTuple, RewardPaidEvent.OutputObject>;
        "Withdrawn(address,uint256)": TypedContractEvent<WithdrawnEvent.InputTuple, WithdrawnEvent.OutputTuple, WithdrawnEvent.OutputObject>;
        Withdrawn: TypedContractEvent<WithdrawnEvent.InputTuple, WithdrawnEvent.OutputTuple, WithdrawnEvent.OutputObject>;
    };
}
