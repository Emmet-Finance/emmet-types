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
export interface CCTPModuleInterface extends Interface {
    getFunction(nameOrSignature: "BridgeSettings" | "admin" | "bridge" | "cctpIds" | "coinWithdraw" | "messageTransmitter" | "pause" | "paused" | "receiveInstallment" | "sendInstallment" | "supportsInterface" | "tokenFees" | "tokenMessenger" | "tokenWithdraw" | "tokens" | "unpause" | "updateAdmin" | "updateBridge" | "updateChain" | "updateData" | "updateToken" | "updateTokenFee"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "AdminUpdated" | "BridgeUpdated" | "DataUpdated" | "Paused" | "Unpaused" | "UpdateChain" | "UpdateToken" | "UpdateTokenFee" | "Withdraw"): EventFragment;
    encodeFunctionData(functionFragment: "BridgeSettings", values?: undefined): string;
    encodeFunctionData(functionFragment: "admin", values?: undefined): string;
    encodeFunctionData(functionFragment: "bridge", values?: undefined): string;
    encodeFunctionData(functionFragment: "cctpIds", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "coinWithdraw", values?: undefined): string;
    encodeFunctionData(functionFragment: "messageTransmitter", values?: undefined): string;
    encodeFunctionData(functionFragment: "pause", values?: undefined): string;
    encodeFunctionData(functionFragment: "paused", values?: undefined): string;
    encodeFunctionData(functionFragment: "receiveInstallment", values: [BigNumberish, BridgeTypes.ReceiveParamsStruct]): string;
    encodeFunctionData(functionFragment: "sendInstallment", values: [BigNumberish, BridgeTypes.SendParamsStruct]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "tokenFees", values: [string]): string;
    encodeFunctionData(functionFragment: "tokenMessenger", values?: undefined): string;
    encodeFunctionData(functionFragment: "tokenWithdraw", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "tokens", values: [string]): string;
    encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
    encodeFunctionData(functionFragment: "updateAdmin", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "updateBridge", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "updateChain", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "updateData", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "updateToken", values: [AddressLike, string]): string;
    encodeFunctionData(functionFragment: "updateTokenFee", values: [BigNumberish, string]): string;
    decodeFunctionResult(functionFragment: "BridgeSettings", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bridge", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cctpIds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "coinWithdraw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "messageTransmitter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "receiveInstallment", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendInstallment", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenMessenger", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenWithdraw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateBridge", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateChain", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateTokenFee", data: BytesLike): Result;
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
export declare namespace UpdateChainEvent {
    type InputTuple = [chainId: BigNumberish, cctpId: BigNumberish];
    type OutputTuple = [chainId: bigint, cctpId: bigint];
    interface OutputObject {
        chainId: bigint;
        cctpId: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace UpdateTokenEvent {
    type InputTuple = [symbol: string, token: AddressLike];
    type OutputTuple = [symbol: string, token: string];
    interface OutputObject {
        symbol: string;
        token: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace UpdateTokenFeeEvent {
    type InputTuple = [symbol: string, fee: BigNumberish];
    type OutputTuple = [symbol: string, fee: bigint];
    interface OutputObject {
        symbol: string;
        fee: bigint;
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
export interface CCTPModule extends BaseContract {
    connect(runner?: ContractRunner | null): CCTPModule;
    waitForDeployment(): Promise<this>;
    interface: CCTPModuleInterface;
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
    cctpIds: TypedContractMethod<[chainId: BigNumberish], [bigint], "view">;
    coinWithdraw: TypedContractMethod<[], [void], "nonpayable">;
    messageTransmitter: TypedContractMethod<[], [string], "view">;
    pause: TypedContractMethod<[], [void], "nonpayable">;
    paused: TypedContractMethod<[], [boolean], "view">;
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
    tokenFees: TypedContractMethod<[symbol: string], [bigint], "view">;
    tokenMessenger: TypedContractMethod<[], [string], "view">;
    tokenWithdraw: TypedContractMethod<[
        tokenContract: AddressLike,
        amount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    tokens: TypedContractMethod<[symbol: string], [string], "view">;
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
    updateChain: TypedContractMethod<[
        chainId: BigNumberish,
        cctpId: BigNumberish
    ], [
        void
    ], "nonpayable">;
    updateData: TypedContractMethod<[
        newEmmetData: AddressLike
    ], [
        void
    ], "nonpayable">;
    updateToken: TypedContractMethod<[
        token: AddressLike,
        symbol: string
    ], [
        void
    ], "nonpayable">;
    updateTokenFee: TypedContractMethod<[
        fee: BigNumberish,
        symbol: string
    ], [
        void
    ], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "BridgeSettings"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "admin"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "bridge"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "cctpIds"): TypedContractMethod<[chainId: BigNumberish], [bigint], "view">;
    getFunction(nameOrSignature: "coinWithdraw"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "messageTransmitter"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "pause"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "paused"): TypedContractMethod<[], [boolean], "view">;
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
    getFunction(nameOrSignature: "tokenFees"): TypedContractMethod<[symbol: string], [bigint], "view">;
    getFunction(nameOrSignature: "tokenMessenger"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "tokenWithdraw"): TypedContractMethod<[
        tokenContract: AddressLike,
        amount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "tokens"): TypedContractMethod<[symbol: string], [string], "view">;
    getFunction(nameOrSignature: "unpause"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "updateAdmin"): TypedContractMethod<[newAdmin: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "updateBridge"): TypedContractMethod<[newBridge: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "updateChain"): TypedContractMethod<[
        chainId: BigNumberish,
        cctpId: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "updateData"): TypedContractMethod<[newEmmetData: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "updateToken"): TypedContractMethod<[
        token: AddressLike,
        symbol: string
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "updateTokenFee"): TypedContractMethod<[
        fee: BigNumberish,
        symbol: string
    ], [
        void
    ], "nonpayable">;
    getEvent(key: "AdminUpdated"): TypedContractEvent<AdminUpdatedEvent.InputTuple, AdminUpdatedEvent.OutputTuple, AdminUpdatedEvent.OutputObject>;
    getEvent(key: "BridgeUpdated"): TypedContractEvent<BridgeUpdatedEvent.InputTuple, BridgeUpdatedEvent.OutputTuple, BridgeUpdatedEvent.OutputObject>;
    getEvent(key: "DataUpdated"): TypedContractEvent<DataUpdatedEvent.InputTuple, DataUpdatedEvent.OutputTuple, DataUpdatedEvent.OutputObject>;
    getEvent(key: "Paused"): TypedContractEvent<PausedEvent.InputTuple, PausedEvent.OutputTuple, PausedEvent.OutputObject>;
    getEvent(key: "Unpaused"): TypedContractEvent<UnpausedEvent.InputTuple, UnpausedEvent.OutputTuple, UnpausedEvent.OutputObject>;
    getEvent(key: "UpdateChain"): TypedContractEvent<UpdateChainEvent.InputTuple, UpdateChainEvent.OutputTuple, UpdateChainEvent.OutputObject>;
    getEvent(key: "UpdateToken"): TypedContractEvent<UpdateTokenEvent.InputTuple, UpdateTokenEvent.OutputTuple, UpdateTokenEvent.OutputObject>;
    getEvent(key: "UpdateTokenFee"): TypedContractEvent<UpdateTokenFeeEvent.InputTuple, UpdateTokenFeeEvent.OutputTuple, UpdateTokenFeeEvent.OutputObject>;
    getEvent(key: "Withdraw"): TypedContractEvent<WithdrawEvent.InputTuple, WithdrawEvent.OutputTuple, WithdrawEvent.OutputObject>;
    filters: {
        "AdminUpdated(address)": TypedContractEvent<AdminUpdatedEvent.InputTuple, AdminUpdatedEvent.OutputTuple, AdminUpdatedEvent.OutputObject>;
        AdminUpdated: TypedContractEvent<AdminUpdatedEvent.InputTuple, AdminUpdatedEvent.OutputTuple, AdminUpdatedEvent.OutputObject>;
        "BridgeUpdated(address)": TypedContractEvent<BridgeUpdatedEvent.InputTuple, BridgeUpdatedEvent.OutputTuple, BridgeUpdatedEvent.OutputObject>;
        BridgeUpdated: TypedContractEvent<BridgeUpdatedEvent.InputTuple, BridgeUpdatedEvent.OutputTuple, BridgeUpdatedEvent.OutputObject>;
        "DataUpdated(address)": TypedContractEvent<DataUpdatedEvent.InputTuple, DataUpdatedEvent.OutputTuple, DataUpdatedEvent.OutputObject>;
        DataUpdated: TypedContractEvent<DataUpdatedEvent.InputTuple, DataUpdatedEvent.OutputTuple, DataUpdatedEvent.OutputObject>;
        "Paused(address)": TypedContractEvent<PausedEvent.InputTuple, PausedEvent.OutputTuple, PausedEvent.OutputObject>;
        Paused: TypedContractEvent<PausedEvent.InputTuple, PausedEvent.OutputTuple, PausedEvent.OutputObject>;
        "Unpaused(address)": TypedContractEvent<UnpausedEvent.InputTuple, UnpausedEvent.OutputTuple, UnpausedEvent.OutputObject>;
        Unpaused: TypedContractEvent<UnpausedEvent.InputTuple, UnpausedEvent.OutputTuple, UnpausedEvent.OutputObject>;
        "UpdateChain(uint128,uint32)": TypedContractEvent<UpdateChainEvent.InputTuple, UpdateChainEvent.OutputTuple, UpdateChainEvent.OutputObject>;
        UpdateChain: TypedContractEvent<UpdateChainEvent.InputTuple, UpdateChainEvent.OutputTuple, UpdateChainEvent.OutputObject>;
        "UpdateToken(string,address)": TypedContractEvent<UpdateTokenEvent.InputTuple, UpdateTokenEvent.OutputTuple, UpdateTokenEvent.OutputObject>;
        UpdateToken: TypedContractEvent<UpdateTokenEvent.InputTuple, UpdateTokenEvent.OutputTuple, UpdateTokenEvent.OutputObject>;
        "UpdateTokenFee(string,uint256)": TypedContractEvent<UpdateTokenFeeEvent.InputTuple, UpdateTokenFeeEvent.OutputTuple, UpdateTokenFeeEvent.OutputObject>;
        UpdateTokenFee: TypedContractEvent<UpdateTokenFeeEvent.InputTuple, UpdateTokenFeeEvent.OutputTuple, UpdateTokenFeeEvent.OutputObject>;
        "Withdraw(string,address)": TypedContractEvent<WithdrawEvent.InputTuple, WithdrawEvent.OutputTuple, WithdrawEvent.OutputObject>;
        Withdraw: TypedContractEvent<WithdrawEvent.InputTuple, WithdrawEvent.OutputTuple, WithdrawEvent.OutputObject>;
    };
}
