import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../../../../common";
export declare namespace BridgeTypes {
    type ReceiveParamsStruct = {
        blockNumber: BigNumberish;
        foreignIndexOut: BigNumberish;
        value: BigNumberish;
        start: BigNumberish;
        sentAmount: BigNumberish;
        receiveAmount: BigNumberish;
        fromChainId: BigNumberish;
        toChainId: BigNumberish;
        to: string;
        fromToken: string;
        toToken: string;
        data: BytesLike;
    };
    type ReceiveParamsStructOutput = [
        blockNumber: bigint,
        foreignIndexOut: bigint,
        value: bigint,
        start: bigint,
        sentAmount: bigint,
        receiveAmount: bigint,
        fromChainId: bigint,
        toChainId: bigint,
        to: string,
        fromToken: string,
        toToken: string,
        data: string
    ] & {
        blockNumber: bigint;
        foreignIndexOut: bigint;
        value: bigint;
        start: bigint;
        sentAmount: bigint;
        receiveAmount: bigint;
        fromChainId: bigint;
        toChainId: bigint;
        to: string;
        fromToken: string;
        toToken: string;
        data: string;
    };
    type SendParamsStruct = {
        blockNumber: BigNumberish;
        isFeeERC20: boolean;
        sentAmount: BigNumberish;
        receiveAmount: BigNumberish;
        toChainId: BigNumberish;
        fromToken: string;
        toToken: string;
        to: string;
        isSuccess: boolean;
    };
    type SendParamsStructOutput = [
        blockNumber: bigint,
        isFeeERC20: boolean,
        sentAmount: bigint,
        receiveAmount: bigint,
        toChainId: bigint,
        fromToken: string,
        toToken: string,
        to: string,
        isSuccess: boolean
    ] & {
        blockNumber: bigint;
        isFeeERC20: boolean;
        sentAmount: bigint;
        receiveAmount: bigint;
        toChainId: bigint;
        fromToken: string;
        toToken: string;
        to: string;
        isSuccess: boolean;
    };
}
export interface LPModuleInterface extends Interface {
    getFunction(nameOrSignature: "BridgeSettings" | "admin" | "bridge" | "coinWithdraw" | "pause" | "paused" | "pools" | "receiveInstallment" | "sendInstallment" | "supportsInterface" | "tokenWithdraw" | "unpause" | "updateAdmin" | "updateBridge" | "updateData" | "updateLP"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "AdminUpdated" | "BridgeUpdated" | "DataUpdated" | "LPUpdate" | "Paused" | "Unpaused" | "Withdraw"): EventFragment;
    encodeFunctionData(functionFragment: "BridgeSettings", values?: undefined): string;
    encodeFunctionData(functionFragment: "admin", values?: undefined): string;
    encodeFunctionData(functionFragment: "bridge", values?: undefined): string;
    encodeFunctionData(functionFragment: "coinWithdraw", values?: undefined): string;
    encodeFunctionData(functionFragment: "pause", values?: undefined): string;
    encodeFunctionData(functionFragment: "paused", values?: undefined): string;
    encodeFunctionData(functionFragment: "pools", values: [string]): string;
    encodeFunctionData(functionFragment: "receiveInstallment", values: [BigNumberish, BridgeTypes.ReceiveParamsStruct]): string;
    encodeFunctionData(functionFragment: "sendInstallment", values: [BigNumberish, BridgeTypes.SendParamsStruct]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "tokenWithdraw", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
    encodeFunctionData(functionFragment: "updateAdmin", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "updateBridge", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "updateData", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "updateLP", values: [AddressLike, string]): string;
    decodeFunctionResult(functionFragment: "BridgeSettings", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bridge", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "coinWithdraw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pools", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "receiveInstallment", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendInstallment", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenWithdraw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateBridge", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateLP", data: BytesLike): Result;
}
export declare namespace AdminUpdatedEvent {
    type InputTuple = [newAdmin: AddressLike];
    type OutputTuple = [newAdmin: string];
    interface OutputObject {
        newAdmin: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace BridgeUpdatedEvent {
    type InputTuple = [newBridge: AddressLike];
    type OutputTuple = [newBridge: string];
    interface OutputObject {
        newBridge: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace DataUpdatedEvent {
    type InputTuple = [newEmmetData: AddressLike];
    type OutputTuple = [newEmmetData: string];
    interface OutputObject {
        newEmmetData: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace LPUpdateEvent {
    type InputTuple = [symbol: string, operation: string];
    type OutputTuple = [symbol: string, operation: string];
    interface OutputObject {
        symbol: string;
        operation: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace PausedEvent {
    type InputTuple = [account: AddressLike];
    type OutputTuple = [account: string];
    interface OutputObject {
        account: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace UnpausedEvent {
    type InputTuple = [account: AddressLike];
    type OutputTuple = [account: string];
    interface OutputObject {
        account: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace WithdrawEvent {
    type InputTuple = [symbol: string, recepient: AddressLike];
    type OutputTuple = [symbol: string, recepient: string];
    interface OutputObject {
        symbol: string;
        recepient: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface LPModule extends BaseContract {
    connect(runner?: ContractRunner | null): LPModule;
    waitForDeployment(): Promise<this>;
    interface: LPModuleInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    BridgeSettings: TypedContractMethod<[], [string], "view">;
    admin: TypedContractMethod<[], [string], "view">;
    bridge: TypedContractMethod<[], [string], "view">;
    coinWithdraw: TypedContractMethod<[], [void], "nonpayable">;
    pause: TypedContractMethod<[], [void], "nonpayable">;
    paused: TypedContractMethod<[], [boolean], "view">;
    pools: TypedContractMethod<[symbol: string], [string], "view">;
    receiveInstallment: TypedContractMethod<[
        step: BigNumberish,
        params: BridgeTypes.ReceiveParamsStruct
    ], [
        bigint
    ], "nonpayable">;
    sendInstallment: TypedContractMethod<[
        step: BigNumberish,
        params: BridgeTypes.SendParamsStruct
    ], [
        void
    ], "payable">;
    supportsInterface: TypedContractMethod<[
        interfaceId: BytesLike
    ], [
        boolean
    ], "view">;
    tokenWithdraw: TypedContractMethod<[
        tokenContract: AddressLike,
        amount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    unpause: TypedContractMethod<[], [void], "nonpayable">;
    updateAdmin: TypedContractMethod<[
        newAdmin: AddressLike
    ], [
        void
    ], "nonpayable">;
    updateBridge: TypedContractMethod<[
        newBridge: AddressLike
    ], [
        void
    ], "nonpayable">;
    updateData: TypedContractMethod<[
        newEmmetData: AddressLike
    ], [
        void
    ], "nonpayable">;
    updateLP: TypedContractMethod<[
        pool: AddressLike,
        symbol: string
    ], [
        void
    ], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "BridgeSettings"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "admin"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "bridge"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "coinWithdraw"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "pause"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "paused"): TypedContractMethod<[], [boolean], "view">;
    getFunction(nameOrSignature: "pools"): TypedContractMethod<[symbol: string], [string], "view">;
    getFunction(nameOrSignature: "receiveInstallment"): TypedContractMethod<[
        step: BigNumberish,
        params: BridgeTypes.ReceiveParamsStruct
    ], [
        bigint
    ], "nonpayable">;
    getFunction(nameOrSignature: "sendInstallment"): TypedContractMethod<[
        step: BigNumberish,
        params: BridgeTypes.SendParamsStruct
    ], [
        void
    ], "payable">;
    getFunction(nameOrSignature: "supportsInterface"): TypedContractMethod<[interfaceId: BytesLike], [boolean], "view">;
    getFunction(nameOrSignature: "tokenWithdraw"): TypedContractMethod<[
        tokenContract: AddressLike,
        amount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "unpause"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "updateAdmin"): TypedContractMethod<[newAdmin: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "updateBridge"): TypedContractMethod<[newBridge: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "updateData"): TypedContractMethod<[newEmmetData: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "updateLP"): TypedContractMethod<[
        pool: AddressLike,
        symbol: string
    ], [
        void
    ], "nonpayable">;
    getEvent(key: "AdminUpdated"): TypedContractEvent<AdminUpdatedEvent.InputTuple, AdminUpdatedEvent.OutputTuple, AdminUpdatedEvent.OutputObject>;
    getEvent(key: "BridgeUpdated"): TypedContractEvent<BridgeUpdatedEvent.InputTuple, BridgeUpdatedEvent.OutputTuple, BridgeUpdatedEvent.OutputObject>;
    getEvent(key: "DataUpdated"): TypedContractEvent<DataUpdatedEvent.InputTuple, DataUpdatedEvent.OutputTuple, DataUpdatedEvent.OutputObject>;
    getEvent(key: "LPUpdate"): TypedContractEvent<LPUpdateEvent.InputTuple, LPUpdateEvent.OutputTuple, LPUpdateEvent.OutputObject>;
    getEvent(key: "Paused"): TypedContractEvent<PausedEvent.InputTuple, PausedEvent.OutputTuple, PausedEvent.OutputObject>;
    getEvent(key: "Unpaused"): TypedContractEvent<UnpausedEvent.InputTuple, UnpausedEvent.OutputTuple, UnpausedEvent.OutputObject>;
    getEvent(key: "Withdraw"): TypedContractEvent<WithdrawEvent.InputTuple, WithdrawEvent.OutputTuple, WithdrawEvent.OutputObject>;
    filters: {
        "AdminUpdated(address)": TypedContractEvent<AdminUpdatedEvent.InputTuple, AdminUpdatedEvent.OutputTuple, AdminUpdatedEvent.OutputObject>;
        AdminUpdated: TypedContractEvent<AdminUpdatedEvent.InputTuple, AdminUpdatedEvent.OutputTuple, AdminUpdatedEvent.OutputObject>;
        "BridgeUpdated(address)": TypedContractEvent<BridgeUpdatedEvent.InputTuple, BridgeUpdatedEvent.OutputTuple, BridgeUpdatedEvent.OutputObject>;
        BridgeUpdated: TypedContractEvent<BridgeUpdatedEvent.InputTuple, BridgeUpdatedEvent.OutputTuple, BridgeUpdatedEvent.OutputObject>;
        "DataUpdated(address)": TypedContractEvent<DataUpdatedEvent.InputTuple, DataUpdatedEvent.OutputTuple, DataUpdatedEvent.OutputObject>;
        DataUpdated: TypedContractEvent<DataUpdatedEvent.InputTuple, DataUpdatedEvent.OutputTuple, DataUpdatedEvent.OutputObject>;
        "LPUpdate(string,string)": TypedContractEvent<LPUpdateEvent.InputTuple, LPUpdateEvent.OutputTuple, LPUpdateEvent.OutputObject>;
        LPUpdate: TypedContractEvent<LPUpdateEvent.InputTuple, LPUpdateEvent.OutputTuple, LPUpdateEvent.OutputObject>;
        "Paused(address)": TypedContractEvent<PausedEvent.InputTuple, PausedEvent.OutputTuple, PausedEvent.OutputObject>;
        Paused: TypedContractEvent<PausedEvent.InputTuple, PausedEvent.OutputTuple, PausedEvent.OutputObject>;
        "Unpaused(address)": TypedContractEvent<UnpausedEvent.InputTuple, UnpausedEvent.OutputTuple, UnpausedEvent.OutputObject>;
        Unpaused: TypedContractEvent<UnpausedEvent.InputTuple, UnpausedEvent.OutputTuple, UnpausedEvent.OutputObject>;
        "Withdraw(string,address)": TypedContractEvent<WithdrawEvent.InputTuple, WithdrawEvent.OutputTuple, WithdrawEvent.OutputObject>;
        Withdraw: TypedContractEvent<WithdrawEvent.InputTuple, WithdrawEvent.OutputTuple, WithdrawEvent.OutputObject>;
    };
}
