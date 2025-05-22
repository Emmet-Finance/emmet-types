import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../../../common";
export declare namespace TransactionRegister {
    type OutgoingStruct = {
        sender: AddressLike;
        toChainId: BigNumberish;
        blockNumber: BigNumberish;
    };
    type OutgoingStructOutput = [
        sender: string,
        toChainId: bigint,
        blockNumber: bigint
    ] & {
        sender: string;
        toChainId: bigint;
        blockNumber: bigint;
    };
}
export declare namespace ICrossChainMessenger {
    type ReceiveParamsStruct = {
        txHash: BytesLike;
        nonce: BigNumberish;
        value: BigNumberish;
        timestamp: BigNumberish;
        fromChainId: BigNumberish;
        toChainId: BigNumberish;
        receiver: AddressLike;
        sender: string;
        data: BytesLike;
        relayers: AddressLike[];
        signatures: BytesLike[];
    };
    type ReceiveParamsStructOutput = [
        txHash: string,
        nonce: bigint,
        value: bigint,
        timestamp: bigint,
        fromChainId: bigint,
        toChainId: bigint,
        receiver: string,
        sender: string,
        data: string,
        relayers: string[],
        signatures: string[]
    ] & {
        txHash: string;
        nonce: bigint;
        value: bigint;
        timestamp: bigint;
        fromChainId: bigint;
        toChainId: bigint;
        receiver: string;
        sender: string;
        data: string;
        relayers: string[];
        signatures: string[];
    };
}
export interface CrossChainMessengerV2Interface extends Interface {
    getFunction(nameOrSignature: "UPGRADE_INTERFACE_VERSION" | "admin" | "chains" | "estimateFee" | "feedback" | "fundContract" | "getMappedContract" | "getReceivedMessage" | "getSentMessage" | "initiate" | "isContractMapped" | "mapContracts" | "pause" | "paused" | "proxiableUUID" | "receiveMsg" | "selfChainId" | "sendMsg" | "setBl" | "unpause" | "updateAdmin" | "updateChain" | "updateFees" | "updateRelayer" | "upgradeToAndCall"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "AdminUpdate" | "ChainUpdate" | "FeeTokenUpdate" | "FeedbackReceived" | "Initialized" | "MessageReceived" | "MessageSent" | "Paused" | "RelayerModified" | "Unpaused" | "Upgraded"): EventFragment;
    encodeFunctionData(functionFragment: "UPGRADE_INTERFACE_VERSION", values?: undefined): string;
    encodeFunctionData(functionFragment: "admin", values?: undefined): string;
    encodeFunctionData(functionFragment: "chains", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "estimateFee", values?: undefined): string;
    encodeFunctionData(functionFragment: "feedback", values: [BytesLike, boolean, string, BytesLike[], AddressLike[]]): string;
    encodeFunctionData(functionFragment: "fundContract", values?: undefined): string;
    encodeFunctionData(functionFragment: "getMappedContract", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getReceivedMessage", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getSentMessage", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "initiate", values?: undefined): string;
    encodeFunctionData(functionFragment: "isContractMapped", values: [AddressLike, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "mapContracts", values: [AddressLike, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "pause", values?: undefined): string;
    encodeFunctionData(functionFragment: "paused", values?: undefined): string;
    encodeFunctionData(functionFragment: "proxiableUUID", values?: undefined): string;
    encodeFunctionData(functionFragment: "receiveMsg", values: [ICrossChainMessenger.ReceiveParamsStruct]): string;
    encodeFunctionData(functionFragment: "selfChainId", values?: undefined): string;
    encodeFunctionData(functionFragment: "sendMsg", values: [
        BigNumberish,
        BigNumberish,
        AddressLike,
        string,
        BytesLike,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "setBl", values: [AddressLike, boolean]): string;
    encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
    encodeFunctionData(functionFragment: "updateAdmin", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "updateChain", values: [BigNumberish, boolean]): string;
    encodeFunctionData(functionFragment: "updateFees", values: [BigNumberish, BigNumberish, BigNumberish, AddressLike]): string;
    encodeFunctionData(functionFragment: "updateRelayer", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "upgradeToAndCall", values: [AddressLike, BytesLike]): string;
    decodeFunctionResult(functionFragment: "UPGRADE_INTERFACE_VERSION", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "chains", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "estimateFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "feedback", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fundContract", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getMappedContract", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReceivedMessage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSentMessage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initiate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isContractMapped", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mapContracts", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proxiableUUID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "receiveMsg", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "selfChainId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendMsg", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setBl", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateChain", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateRelayer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeToAndCall", data: BytesLike): Result;
}
export declare namespace AdminUpdateEvent {
    type InputTuple = [admin: AddressLike];
    type OutputTuple = [admin: string];
    interface OutputObject {
        admin: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace ChainUpdateEvent {
    type InputTuple = [id: BigNumberish, supported: boolean];
    type OutputTuple = [id: bigint, supported: boolean];
    interface OutputObject {
        id: bigint;
        supported: boolean;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace FeeTokenUpdateEvent {
    type InputTuple = [newToken: AddressLike];
    type OutputTuple = [newToken: string];
    interface OutputObject {
        newToken: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace FeedbackReceivedEvent {
    type InputTuple = [
        txHash: BytesLike,
        isSuccess: boolean,
        informedCaller: boolean,
        foreignMessage: string,
        callerResponce: string
    ];
    type OutputTuple = [
        txHash: string,
        isSuccess: boolean,
        informedCaller: boolean,
        foreignMessage: string,
        callerResponce: string
    ];
    interface OutputObject {
        txHash: string;
        isSuccess: boolean;
        informedCaller: boolean;
        foreignMessage: string;
        callerResponce: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace InitializedEvent {
    type InputTuple = [version: BigNumberish];
    type OutputTuple = [version: bigint];
    interface OutputObject {
        version: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace MessageReceivedEvent {
    type InputTuple = [
        txHash: BytesLike,
        id: BigNumberish,
        fromChainId: BigNumberish,
        receiver: AddressLike,
        value: BigNumberish,
        signatures: BigNumberish,
        isSuccess: boolean,
        message: string,
        sender: string,
        data: BytesLike
    ];
    type OutputTuple = [
        txHash: string,
        id: bigint,
        fromChainId: bigint,
        receiver: string,
        value: bigint,
        signatures: bigint,
        isSuccess: boolean,
        message: string,
        sender: string,
        data: string
    ];
    interface OutputObject {
        txHash: string;
        id: bigint;
        fromChainId: bigint;
        receiver: string;
        value: bigint;
        signatures: bigint;
        isSuccess: boolean;
        message: string;
        sender: string;
        data: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace MessageSentEvent {
    type InputTuple = [
        txHash: BytesLike,
        blockNumber: BigNumberish,
        compensation: BigNumberish,
        id: BigNumberish,
        toChainId: BigNumberish,
        sender: AddressLike,
        value: BigNumberish,
        timestamp: BigNumberish,
        receiver: string,
        data: BytesLike
    ];
    type OutputTuple = [
        txHash: string,
        blockNumber: bigint,
        compensation: bigint,
        id: bigint,
        toChainId: bigint,
        sender: string,
        value: bigint,
        timestamp: bigint,
        receiver: string,
        data: string
    ];
    interface OutputObject {
        txHash: string;
        blockNumber: bigint;
        compensation: bigint;
        id: bigint;
        toChainId: bigint;
        sender: string;
        value: bigint;
        timestamp: bigint;
        receiver: string;
        data: string;
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
export declare namespace RelayerModifiedEvent {
    type InputTuple = [relayer: AddressLike, operation: string];
    type OutputTuple = [relayer: string, operation: string];
    interface OutputObject {
        relayer: string;
        operation: string;
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
export declare namespace UpgradedEvent {
    type InputTuple = [implementation: AddressLike];
    type OutputTuple = [implementation: string];
    interface OutputObject {
        implementation: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface CrossChainMessengerV2 extends BaseContract {
    connect(runner?: ContractRunner | null): CrossChainMessengerV2;
    waitForDeployment(): Promise<this>;
    interface: CrossChainMessengerV2Interface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    UPGRADE_INTERFACE_VERSION: TypedContractMethod<[], [string], "view">;
    admin: TypedContractMethod<[], [string], "view">;
    chains: TypedContractMethod<[chainId: BigNumberish], [boolean], "view">;
    estimateFee: TypedContractMethod<[], [bigint], "view">;
    feedback: TypedContractMethod<[
        txHash: BytesLike,
        isSuccess: boolean,
        message: string,
        aggregatedSignatureFinal: BytesLike[],
        signersFinal: AddressLike[]
    ], [
        void
    ], "nonpayable">;
    fundContract: TypedContractMethod<[], [void], "payable">;
    getMappedContract: TypedContractMethod<[
        sender: AddressLike,
        chainId: BigNumberish
    ], [
        string
    ], "view">;
    getReceivedMessage: TypedContractMethod<[
        txHash: BytesLike
    ], [
        bigint
    ], "view">;
    getSentMessage: TypedContractMethod<[
        txHash: BytesLike
    ], [
        TransactionRegister.OutgoingStructOutput
    ], "view">;
    initiate: TypedContractMethod<[], [void], "nonpayable">;
    isContractMapped: TypedContractMethod<[
        sender: AddressLike,
        chainId: BigNumberish,
        target: string
    ], [
        boolean
    ], "view">;
    mapContracts: TypedContractMethod<[
        sender: AddressLike,
        chainId: BigNumberish,
        target: string
    ], [
        void
    ], "nonpayable">;
    pause: TypedContractMethod<[], [void], "nonpayable">;
    paused: TypedContractMethod<[], [boolean], "view">;
    proxiableUUID: TypedContractMethod<[], [string], "view">;
    receiveMsg: TypedContractMethod<[
        params: ICrossChainMessenger.ReceiveParamsStruct
    ], [
        void
    ], "payable">;
    selfChainId: TypedContractMethod<[], [bigint], "view">;
    sendMsg: TypedContractMethod<[
        value: BigNumberish,
        toChainId: BigNumberish,
        sender: AddressLike,
        receiver: string,
        data: BytesLike,
        selector: BytesLike
    ], [
        string
    ], "payable">;
    setBl: TypedContractMethod<[
        a: AddressLike,
        flag: boolean
    ], [
        void
    ], "nonpayable">;
    unpause: TypedContractMethod<[], [void], "nonpayable">;
    updateAdmin: TypedContractMethod<[admin_: AddressLike], [void], "nonpayable">;
    updateChain: TypedContractMethod<[
        chainId: BigNumberish,
        supported: boolean
    ], [
        void
    ], "nonpayable">;
    updateFees: TypedContractMethod<[
        protocol: BigNumberish,
        consensus: BigNumberish,
        tokenDecimals: BigNumberish,
        priceFeed: AddressLike
    ], [
        void
    ], "nonpayable">;
    updateRelayer: TypedContractMethod<[
        relayer: AddressLike,
        operation: BigNumberish
    ], [
        void
    ], "nonpayable">;
    upgradeToAndCall: TypedContractMethod<[
        newImplementation: AddressLike,
        data: BytesLike
    ], [
        void
    ], "payable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "UPGRADE_INTERFACE_VERSION"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "admin"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "chains"): TypedContractMethod<[chainId: BigNumberish], [boolean], "view">;
    getFunction(nameOrSignature: "estimateFee"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "feedback"): TypedContractMethod<[
        txHash: BytesLike,
        isSuccess: boolean,
        message: string,
        aggregatedSignatureFinal: BytesLike[],
        signersFinal: AddressLike[]
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "fundContract"): TypedContractMethod<[], [void], "payable">;
    getFunction(nameOrSignature: "getMappedContract"): TypedContractMethod<[
        sender: AddressLike,
        chainId: BigNumberish
    ], [
        string
    ], "view">;
    getFunction(nameOrSignature: "getReceivedMessage"): TypedContractMethod<[txHash: BytesLike], [bigint], "view">;
    getFunction(nameOrSignature: "getSentMessage"): TypedContractMethod<[
        txHash: BytesLike
    ], [
        TransactionRegister.OutgoingStructOutput
    ], "view">;
    getFunction(nameOrSignature: "initiate"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "isContractMapped"): TypedContractMethod<[
        sender: AddressLike,
        chainId: BigNumberish,
        target: string
    ], [
        boolean
    ], "view">;
    getFunction(nameOrSignature: "mapContracts"): TypedContractMethod<[
        sender: AddressLike,
        chainId: BigNumberish,
        target: string
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "pause"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "paused"): TypedContractMethod<[], [boolean], "view">;
    getFunction(nameOrSignature: "proxiableUUID"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "receiveMsg"): TypedContractMethod<[
        params: ICrossChainMessenger.ReceiveParamsStruct
    ], [
        void
    ], "payable">;
    getFunction(nameOrSignature: "selfChainId"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "sendMsg"): TypedContractMethod<[
        value: BigNumberish,
        toChainId: BigNumberish,
        sender: AddressLike,
        receiver: string,
        data: BytesLike,
        selector: BytesLike
    ], [
        string
    ], "payable">;
    getFunction(nameOrSignature: "setBl"): TypedContractMethod<[a: AddressLike, flag: boolean], [void], "nonpayable">;
    getFunction(nameOrSignature: "unpause"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "updateAdmin"): TypedContractMethod<[admin_: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "updateChain"): TypedContractMethod<[
        chainId: BigNumberish,
        supported: boolean
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "updateFees"): TypedContractMethod<[
        protocol: BigNumberish,
        consensus: BigNumberish,
        tokenDecimals: BigNumberish,
        priceFeed: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "updateRelayer"): TypedContractMethod<[
        relayer: AddressLike,
        operation: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "upgradeToAndCall"): TypedContractMethod<[
        newImplementation: AddressLike,
        data: BytesLike
    ], [
        void
    ], "payable">;
    getEvent(key: "AdminUpdate"): TypedContractEvent<AdminUpdateEvent.InputTuple, AdminUpdateEvent.OutputTuple, AdminUpdateEvent.OutputObject>;
    getEvent(key: "ChainUpdate"): TypedContractEvent<ChainUpdateEvent.InputTuple, ChainUpdateEvent.OutputTuple, ChainUpdateEvent.OutputObject>;
    getEvent(key: "FeeTokenUpdate"): TypedContractEvent<FeeTokenUpdateEvent.InputTuple, FeeTokenUpdateEvent.OutputTuple, FeeTokenUpdateEvent.OutputObject>;
    getEvent(key: "FeedbackReceived"): TypedContractEvent<FeedbackReceivedEvent.InputTuple, FeedbackReceivedEvent.OutputTuple, FeedbackReceivedEvent.OutputObject>;
    getEvent(key: "Initialized"): TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
    getEvent(key: "MessageReceived"): TypedContractEvent<MessageReceivedEvent.InputTuple, MessageReceivedEvent.OutputTuple, MessageReceivedEvent.OutputObject>;
    getEvent(key: "MessageSent"): TypedContractEvent<MessageSentEvent.InputTuple, MessageSentEvent.OutputTuple, MessageSentEvent.OutputObject>;
    getEvent(key: "Paused"): TypedContractEvent<PausedEvent.InputTuple, PausedEvent.OutputTuple, PausedEvent.OutputObject>;
    getEvent(key: "RelayerModified"): TypedContractEvent<RelayerModifiedEvent.InputTuple, RelayerModifiedEvent.OutputTuple, RelayerModifiedEvent.OutputObject>;
    getEvent(key: "Unpaused"): TypedContractEvent<UnpausedEvent.InputTuple, UnpausedEvent.OutputTuple, UnpausedEvent.OutputObject>;
    getEvent(key: "Upgraded"): TypedContractEvent<UpgradedEvent.InputTuple, UpgradedEvent.OutputTuple, UpgradedEvent.OutputObject>;
    filters: {
        "AdminUpdate(address)": TypedContractEvent<AdminUpdateEvent.InputTuple, AdminUpdateEvent.OutputTuple, AdminUpdateEvent.OutputObject>;
        AdminUpdate: TypedContractEvent<AdminUpdateEvent.InputTuple, AdminUpdateEvent.OutputTuple, AdminUpdateEvent.OutputObject>;
        "ChainUpdate(uint256,bool)": TypedContractEvent<ChainUpdateEvent.InputTuple, ChainUpdateEvent.OutputTuple, ChainUpdateEvent.OutputObject>;
        ChainUpdate: TypedContractEvent<ChainUpdateEvent.InputTuple, ChainUpdateEvent.OutputTuple, ChainUpdateEvent.OutputObject>;
        "FeeTokenUpdate(address)": TypedContractEvent<FeeTokenUpdateEvent.InputTuple, FeeTokenUpdateEvent.OutputTuple, FeeTokenUpdateEvent.OutputObject>;
        FeeTokenUpdate: TypedContractEvent<FeeTokenUpdateEvent.InputTuple, FeeTokenUpdateEvent.OutputTuple, FeeTokenUpdateEvent.OutputObject>;
        "FeedbackReceived(bytes32,bool,bool,string,string)": TypedContractEvent<FeedbackReceivedEvent.InputTuple, FeedbackReceivedEvent.OutputTuple, FeedbackReceivedEvent.OutputObject>;
        FeedbackReceived: TypedContractEvent<FeedbackReceivedEvent.InputTuple, FeedbackReceivedEvent.OutputTuple, FeedbackReceivedEvent.OutputObject>;
        "Initialized(uint64)": TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
        Initialized: TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
        "MessageReceived(bytes32,uint256,uint128,address,uint256,uint256,bool,string,string,bytes)": TypedContractEvent<MessageReceivedEvent.InputTuple, MessageReceivedEvent.OutputTuple, MessageReceivedEvent.OutputObject>;
        MessageReceived: TypedContractEvent<MessageReceivedEvent.InputTuple, MessageReceivedEvent.OutputTuple, MessageReceivedEvent.OutputObject>;
        "MessageSent(bytes32,uint256,uint256,uint256,uint128,address,uint256,uint256,string,bytes)": TypedContractEvent<MessageSentEvent.InputTuple, MessageSentEvent.OutputTuple, MessageSentEvent.OutputObject>;
        MessageSent: TypedContractEvent<MessageSentEvent.InputTuple, MessageSentEvent.OutputTuple, MessageSentEvent.OutputObject>;
        "Paused(address)": TypedContractEvent<PausedEvent.InputTuple, PausedEvent.OutputTuple, PausedEvent.OutputObject>;
        Paused: TypedContractEvent<PausedEvent.InputTuple, PausedEvent.OutputTuple, PausedEvent.OutputObject>;
        "RelayerModified(address,string)": TypedContractEvent<RelayerModifiedEvent.InputTuple, RelayerModifiedEvent.OutputTuple, RelayerModifiedEvent.OutputObject>;
        RelayerModified: TypedContractEvent<RelayerModifiedEvent.InputTuple, RelayerModifiedEvent.OutputTuple, RelayerModifiedEvent.OutputObject>;
        "Unpaused(address)": TypedContractEvent<UnpausedEvent.InputTuple, UnpausedEvent.OutputTuple, UnpausedEvent.OutputObject>;
        Unpaused: TypedContractEvent<UnpausedEvent.InputTuple, UnpausedEvent.OutputTuple, UnpausedEvent.OutputObject>;
        "Upgraded(address)": TypedContractEvent<UpgradedEvent.InputTuple, UpgradedEvent.OutputTuple, UpgradedEvent.OutputObject>;
        Upgraded: TypedContractEvent<UpgradedEvent.InputTuple, UpgradedEvent.OutputTuple, UpgradedEvent.OutputObject>;
    };
}
