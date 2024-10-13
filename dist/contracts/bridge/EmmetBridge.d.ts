import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../../common";
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
export interface EmmetBridgeInterface extends Interface {
    getFunction(nameOrSignature: "BridgeSettings" | "BridgeSettingsAdmin" | "CFO_ROLE" | "DEFAULT_ADMIN_ROLE" | "MANAGER_ROLE" | "SIGNER_ROLE" | "UPGRADE_INTERFACE_VERSION" | "addBridgeModule" | "ccm" | "coinWithdraw" | "estimateFee" | "feedback" | "getRoleAdmin" | "grantRole" | "hasRole" | "initialize" | "modules" | "outIndex" | "pause" | "paused" | "proxiableUUID" | "receiveInstallment" | "renounceRole" | "revokeRole" | "sendInstallment" | "sendMessage" | "supportsInterface" | "tokenWithdraw" | "unpause" | "updateCCM" | "updateEmmetData" | "updateEmmetDataAdmin" | "upgradeToAndCall" | "withdrawStuck"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "BridgeDataAdminUpdated" | "BridgeDataUpdated" | "CCMUpdated" | "Initialized" | "ModuleUpdated" | "Paused" | "ReceivedInstallment" | "Refund" | "RoleAdminChanged" | "RoleGranted" | "RoleRevoked" | "SentInstallment" | "Unpaused" | "Upgraded" | "Withdraw"): EventFragment;
    encodeFunctionData(functionFragment: "BridgeSettings", values?: undefined): string;
    encodeFunctionData(functionFragment: "BridgeSettingsAdmin", values?: undefined): string;
    encodeFunctionData(functionFragment: "CFO_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "DEFAULT_ADMIN_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "MANAGER_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "SIGNER_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "UPGRADE_INTERFACE_VERSION", values?: undefined): string;
    encodeFunctionData(functionFragment: "addBridgeModule", values: [AddressLike, BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "ccm", values?: undefined): string;
    encodeFunctionData(functionFragment: "coinWithdraw", values?: undefined): string;
    encodeFunctionData(functionFragment: "estimateFee", values: [BigNumberish, string, string, boolean]): string;
    encodeFunctionData(functionFragment: "feedback", values: [BytesLike, boolean, string]): string;
    encodeFunctionData(functionFragment: "getRoleAdmin", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "grantRole", values: [BytesLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "hasRole", values: [BytesLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "initialize", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "modules", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "outIndex", values?: undefined): string;
    encodeFunctionData(functionFragment: "pause", values?: undefined): string;
    encodeFunctionData(functionFragment: "paused", values?: undefined): string;
    encodeFunctionData(functionFragment: "proxiableUUID", values?: undefined): string;
    encodeFunctionData(functionFragment: "receiveInstallment", values: [BytesLike, BridgeTypes.ReceiveParamsStruct]): string;
    encodeFunctionData(functionFragment: "renounceRole", values: [BytesLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "revokeRole", values: [BytesLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "sendInstallment", values: [BridgeTypes.SendParamsStruct]): string;
    encodeFunctionData(functionFragment: "sendMessage", values: [BigNumberish, BigNumberish, string, BytesLike, BytesLike, boolean]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "tokenWithdraw", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
    encodeFunctionData(functionFragment: "updateCCM", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "updateEmmetData", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "updateEmmetDataAdmin", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "upgradeToAndCall", values: [AddressLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "withdrawStuck", values: [BytesLike]): string;
    decodeFunctionResult(functionFragment: "BridgeSettings", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "BridgeSettingsAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "CFO_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "DEFAULT_ADMIN_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MANAGER_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "SIGNER_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "UPGRADE_INTERFACE_VERSION", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addBridgeModule", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ccm", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "coinWithdraw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "estimateFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "feedback", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "modules", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "outIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proxiableUUID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "receiveInstallment", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendInstallment", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendMessage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenWithdraw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateCCM", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateEmmetData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateEmmetDataAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeToAndCall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawStuck", data: BytesLike): Result;
}
export declare namespace BridgeDataAdminUpdatedEvent {
    type InputTuple = [
        oldDataAdmin: AddressLike,
        newDataAdmin: AddressLike
    ];
    type OutputTuple = [oldDataAdmin: string, newDataAdmin: string];
    interface OutputObject {
        oldDataAdmin: string;
        newDataAdmin: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace BridgeDataUpdatedEvent {
    type InputTuple = [oldData: AddressLike, newData: AddressLike];
    type OutputTuple = [oldData: string, newData: string];
    interface OutputObject {
        oldData: string;
        newData: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace CCMUpdatedEvent {
    type InputTuple = [newCCM: AddressLike];
    type OutputTuple = [newCCM: string];
    interface OutputObject {
        newCCM: string;
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
export declare namespace ModuleUpdatedEvent {
    type InputTuple = [
        module: AddressLike,
        step: BigNumberish,
        operation: string
    ];
    type OutputTuple = [module: string, step: bigint, operation: string];
    interface OutputObject {
        module: string;
        step: bigint;
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
export declare namespace ReceivedInstallmentEvent {
    type InputTuple = [
        ccmHash: BytesLike,
        fromChainId: BigNumberish,
        foreignIndexOut: BigNumberish,
        sentAmount: BigNumberish,
        receiveAmount: BigNumberish,
        to: AddressLike,
        fromToken: string,
        toToken: string
    ];
    type OutputTuple = [
        ccmHash: string,
        fromChainId: bigint,
        foreignIndexOut: bigint,
        sentAmount: bigint,
        receiveAmount: bigint,
        to: string,
        fromToken: string,
        toToken: string
    ];
    interface OutputObject {
        ccmHash: string;
        fromChainId: bigint;
        foreignIndexOut: bigint;
        sentAmount: bigint;
        receiveAmount: bigint;
        to: string;
        fromToken: string;
        toToken: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace RefundEvent {
    type InputTuple = [
        user: AddressLike,
        amount: BigNumberish,
        token: string
    ];
    type OutputTuple = [user: string, amount: bigint, token: string];
    interface OutputObject {
        user: string;
        amount: bigint;
        token: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace RoleAdminChangedEvent {
    type InputTuple = [
        role: BytesLike,
        previousAdminRole: BytesLike,
        newAdminRole: BytesLike
    ];
    type OutputTuple = [
        role: string,
        previousAdminRole: string,
        newAdminRole: string
    ];
    interface OutputObject {
        role: string;
        previousAdminRole: string;
        newAdminRole: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace RoleGrantedEvent {
    type InputTuple = [
        role: BytesLike,
        account: AddressLike,
        sender: AddressLike
    ];
    type OutputTuple = [role: string, account: string, sender: string];
    interface OutputObject {
        role: string;
        account: string;
        sender: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace RoleRevokedEvent {
    type InputTuple = [
        role: BytesLike,
        account: AddressLike,
        sender: AddressLike
    ];
    type OutputTuple = [role: string, account: string, sender: string];
    interface OutputObject {
        role: string;
        account: string;
        sender: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace SentInstallmentEvent {
    type InputTuple = [
        txHash: BytesLike,
        toChainId: BigNumberish,
        sentAmount: BigNumberish,
        fromToken: string,
        toToken: string,
        to: string
    ];
    type OutputTuple = [
        txHash: string,
        toChainId: bigint,
        sentAmount: bigint,
        fromToken: string,
        toToken: string,
        to: string
    ];
    interface OutputObject {
        txHash: string;
        toChainId: bigint;
        sentAmount: bigint;
        fromToken: string;
        toToken: string;
        to: string;
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
export interface EmmetBridge extends BaseContract {
    connect(runner?: ContractRunner | null): EmmetBridge;
    waitForDeployment(): Promise<this>;
    interface: EmmetBridgeInterface;
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
    BridgeSettingsAdmin: TypedContractMethod<[], [string], "view">;
    CFO_ROLE: TypedContractMethod<[], [string], "view">;
    DEFAULT_ADMIN_ROLE: TypedContractMethod<[], [string], "view">;
    MANAGER_ROLE: TypedContractMethod<[], [string], "view">;
    SIGNER_ROLE: TypedContractMethod<[], [string], "view">;
    UPGRADE_INTERFACE_VERSION: TypedContractMethod<[], [string], "view">;
    addBridgeModule: TypedContractMethod<[
        module: AddressLike,
        steps: BigNumberish[]
    ], [
        void
    ], "nonpayable">;
    ccm: TypedContractMethod<[], [string], "view">;
    coinWithdraw: TypedContractMethod<[], [void], "nonpayable">;
    estimateFee: TypedContractMethod<[
        toChainId: BigNumberish,
        fromToken: string,
        toToken: string,
        isFeeERC20: boolean
    ], [
        bigint
    ], "view">;
    feedback: TypedContractMethod<[
        txHash: BytesLike,
        isSucceess: boolean,
        message: string
    ], [
        void
    ], "nonpayable">;
    getRoleAdmin: TypedContractMethod<[role: BytesLike], [string], "view">;
    grantRole: TypedContractMethod<[
        role: BytesLike,
        account: AddressLike
    ], [
        void
    ], "nonpayable">;
    hasRole: TypedContractMethod<[
        role: BytesLike,
        account: AddressLike
    ], [
        boolean
    ], "view">;
    initialize: TypedContractMethod<[
        cfo_: AddressLike,
        manager_: AddressLike
    ], [
        void
    ], "nonpayable">;
    modules: TypedContractMethod<[step: BigNumberish], [string], "view">;
    outIndex: TypedContractMethod<[], [bigint], "view">;
    pause: TypedContractMethod<[], [void], "nonpayable">;
    paused: TypedContractMethod<[], [boolean], "view">;
    proxiableUUID: TypedContractMethod<[], [string], "view">;
    receiveInstallment: TypedContractMethod<[
        txHash: BytesLike,
        params: BridgeTypes.ReceiveParamsStruct
    ], [
        string
    ], "nonpayable">;
    renounceRole: TypedContractMethod<[
        role: BytesLike,
        callerConfirmation: AddressLike
    ], [
        void
    ], "nonpayable">;
    revokeRole: TypedContractMethod<[
        role: BytesLike,
        account: AddressLike
    ], [
        void
    ], "nonpayable">;
    sendInstallment: TypedContractMethod<[
        params: BridgeTypes.SendParamsStruct
    ], [
        void
    ], "payable">;
    sendMessage: TypedContractMethod<[
        value: BigNumberish,
        toChainId: BigNumberish,
        receiver: string,
        data: BytesLike,
        selector: BytesLike,
        isFeeERC20: boolean
    ], [
        string
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
    updateCCM: TypedContractMethod<[ccm_: AddressLike], [void], "nonpayable">;
    updateEmmetData: TypedContractMethod<[
        newData: AddressLike
    ], [
        void
    ], "nonpayable">;
    updateEmmetDataAdmin: TypedContractMethod<[
        newDataAdmin: AddressLike
    ], [
        void
    ], "nonpayable">;
    upgradeToAndCall: TypedContractMethod<[
        newImplementation: AddressLike,
        data: BytesLike
    ], [
        void
    ], "payable">;
    withdrawStuck: TypedContractMethod<[txHash: BytesLike], [void], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "BridgeSettings"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "BridgeSettingsAdmin"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "CFO_ROLE"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "DEFAULT_ADMIN_ROLE"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "MANAGER_ROLE"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "SIGNER_ROLE"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "UPGRADE_INTERFACE_VERSION"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "addBridgeModule"): TypedContractMethod<[
        module: AddressLike,
        steps: BigNumberish[]
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "ccm"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "coinWithdraw"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "estimateFee"): TypedContractMethod<[
        toChainId: BigNumberish,
        fromToken: string,
        toToken: string,
        isFeeERC20: boolean
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "feedback"): TypedContractMethod<[
        txHash: BytesLike,
        isSucceess: boolean,
        message: string
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "getRoleAdmin"): TypedContractMethod<[role: BytesLike], [string], "view">;
    getFunction(nameOrSignature: "grantRole"): TypedContractMethod<[
        role: BytesLike,
        account: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "hasRole"): TypedContractMethod<[
        role: BytesLike,
        account: AddressLike
    ], [
        boolean
    ], "view">;
    getFunction(nameOrSignature: "initialize"): TypedContractMethod<[
        cfo_: AddressLike,
        manager_: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "modules"): TypedContractMethod<[step: BigNumberish], [string], "view">;
    getFunction(nameOrSignature: "outIndex"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "pause"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "paused"): TypedContractMethod<[], [boolean], "view">;
    getFunction(nameOrSignature: "proxiableUUID"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "receiveInstallment"): TypedContractMethod<[
        txHash: BytesLike,
        params: BridgeTypes.ReceiveParamsStruct
    ], [
        string
    ], "nonpayable">;
    getFunction(nameOrSignature: "renounceRole"): TypedContractMethod<[
        role: BytesLike,
        callerConfirmation: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "revokeRole"): TypedContractMethod<[
        role: BytesLike,
        account: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "sendInstallment"): TypedContractMethod<[
        params: BridgeTypes.SendParamsStruct
    ], [
        void
    ], "payable">;
    getFunction(nameOrSignature: "sendMessage"): TypedContractMethod<[
        value: BigNumberish,
        toChainId: BigNumberish,
        receiver: string,
        data: BytesLike,
        selector: BytesLike,
        isFeeERC20: boolean
    ], [
        string
    ], "payable">;
    getFunction(nameOrSignature: "supportsInterface"): TypedContractMethod<[interfaceId: BytesLike], [boolean], "view">;
    getFunction(nameOrSignature: "tokenWithdraw"): TypedContractMethod<[
        tokenContract: AddressLike,
        amount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "unpause"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "updateCCM"): TypedContractMethod<[ccm_: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "updateEmmetData"): TypedContractMethod<[newData: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "updateEmmetDataAdmin"): TypedContractMethod<[newDataAdmin: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "upgradeToAndCall"): TypedContractMethod<[
        newImplementation: AddressLike,
        data: BytesLike
    ], [
        void
    ], "payable">;
    getFunction(nameOrSignature: "withdrawStuck"): TypedContractMethod<[txHash: BytesLike], [void], "nonpayable">;
    getEvent(key: "BridgeDataAdminUpdated"): TypedContractEvent<BridgeDataAdminUpdatedEvent.InputTuple, BridgeDataAdminUpdatedEvent.OutputTuple, BridgeDataAdminUpdatedEvent.OutputObject>;
    getEvent(key: "BridgeDataUpdated"): TypedContractEvent<BridgeDataUpdatedEvent.InputTuple, BridgeDataUpdatedEvent.OutputTuple, BridgeDataUpdatedEvent.OutputObject>;
    getEvent(key: "CCMUpdated"): TypedContractEvent<CCMUpdatedEvent.InputTuple, CCMUpdatedEvent.OutputTuple, CCMUpdatedEvent.OutputObject>;
    getEvent(key: "Initialized"): TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
    getEvent(key: "ModuleUpdated"): TypedContractEvent<ModuleUpdatedEvent.InputTuple, ModuleUpdatedEvent.OutputTuple, ModuleUpdatedEvent.OutputObject>;
    getEvent(key: "Paused"): TypedContractEvent<PausedEvent.InputTuple, PausedEvent.OutputTuple, PausedEvent.OutputObject>;
    getEvent(key: "ReceivedInstallment"): TypedContractEvent<ReceivedInstallmentEvent.InputTuple, ReceivedInstallmentEvent.OutputTuple, ReceivedInstallmentEvent.OutputObject>;
    getEvent(key: "Refund"): TypedContractEvent<RefundEvent.InputTuple, RefundEvent.OutputTuple, RefundEvent.OutputObject>;
    getEvent(key: "RoleAdminChanged"): TypedContractEvent<RoleAdminChangedEvent.InputTuple, RoleAdminChangedEvent.OutputTuple, RoleAdminChangedEvent.OutputObject>;
    getEvent(key: "RoleGranted"): TypedContractEvent<RoleGrantedEvent.InputTuple, RoleGrantedEvent.OutputTuple, RoleGrantedEvent.OutputObject>;
    getEvent(key: "RoleRevoked"): TypedContractEvent<RoleRevokedEvent.InputTuple, RoleRevokedEvent.OutputTuple, RoleRevokedEvent.OutputObject>;
    getEvent(key: "SentInstallment"): TypedContractEvent<SentInstallmentEvent.InputTuple, SentInstallmentEvent.OutputTuple, SentInstallmentEvent.OutputObject>;
    getEvent(key: "Unpaused"): TypedContractEvent<UnpausedEvent.InputTuple, UnpausedEvent.OutputTuple, UnpausedEvent.OutputObject>;
    getEvent(key: "Upgraded"): TypedContractEvent<UpgradedEvent.InputTuple, UpgradedEvent.OutputTuple, UpgradedEvent.OutputObject>;
    getEvent(key: "Withdraw"): TypedContractEvent<WithdrawEvent.InputTuple, WithdrawEvent.OutputTuple, WithdrawEvent.OutputObject>;
    filters: {
        "BridgeDataAdminUpdated(address,address)": TypedContractEvent<BridgeDataAdminUpdatedEvent.InputTuple, BridgeDataAdminUpdatedEvent.OutputTuple, BridgeDataAdminUpdatedEvent.OutputObject>;
        BridgeDataAdminUpdated: TypedContractEvent<BridgeDataAdminUpdatedEvent.InputTuple, BridgeDataAdminUpdatedEvent.OutputTuple, BridgeDataAdminUpdatedEvent.OutputObject>;
        "BridgeDataUpdated(address,address)": TypedContractEvent<BridgeDataUpdatedEvent.InputTuple, BridgeDataUpdatedEvent.OutputTuple, BridgeDataUpdatedEvent.OutputObject>;
        BridgeDataUpdated: TypedContractEvent<BridgeDataUpdatedEvent.InputTuple, BridgeDataUpdatedEvent.OutputTuple, BridgeDataUpdatedEvent.OutputObject>;
        "CCMUpdated(address)": TypedContractEvent<CCMUpdatedEvent.InputTuple, CCMUpdatedEvent.OutputTuple, CCMUpdatedEvent.OutputObject>;
        CCMUpdated: TypedContractEvent<CCMUpdatedEvent.InputTuple, CCMUpdatedEvent.OutputTuple, CCMUpdatedEvent.OutputObject>;
        "Initialized(uint64)": TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
        Initialized: TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
        "ModuleUpdated(address,uint8,string)": TypedContractEvent<ModuleUpdatedEvent.InputTuple, ModuleUpdatedEvent.OutputTuple, ModuleUpdatedEvent.OutputObject>;
        ModuleUpdated: TypedContractEvent<ModuleUpdatedEvent.InputTuple, ModuleUpdatedEvent.OutputTuple, ModuleUpdatedEvent.OutputObject>;
        "Paused(address)": TypedContractEvent<PausedEvent.InputTuple, PausedEvent.OutputTuple, PausedEvent.OutputObject>;
        Paused: TypedContractEvent<PausedEvent.InputTuple, PausedEvent.OutputTuple, PausedEvent.OutputObject>;
        "ReceivedInstallment(bytes32,uint128,uint256,uint256,uint256,address,string,string)": TypedContractEvent<ReceivedInstallmentEvent.InputTuple, ReceivedInstallmentEvent.OutputTuple, ReceivedInstallmentEvent.OutputObject>;
        ReceivedInstallment: TypedContractEvent<ReceivedInstallmentEvent.InputTuple, ReceivedInstallmentEvent.OutputTuple, ReceivedInstallmentEvent.OutputObject>;
        "Refund(address,uint256,string)": TypedContractEvent<RefundEvent.InputTuple, RefundEvent.OutputTuple, RefundEvent.OutputObject>;
        Refund: TypedContractEvent<RefundEvent.InputTuple, RefundEvent.OutputTuple, RefundEvent.OutputObject>;
        "RoleAdminChanged(bytes32,bytes32,bytes32)": TypedContractEvent<RoleAdminChangedEvent.InputTuple, RoleAdminChangedEvent.OutputTuple, RoleAdminChangedEvent.OutputObject>;
        RoleAdminChanged: TypedContractEvent<RoleAdminChangedEvent.InputTuple, RoleAdminChangedEvent.OutputTuple, RoleAdminChangedEvent.OutputObject>;
        "RoleGranted(bytes32,address,address)": TypedContractEvent<RoleGrantedEvent.InputTuple, RoleGrantedEvent.OutputTuple, RoleGrantedEvent.OutputObject>;
        RoleGranted: TypedContractEvent<RoleGrantedEvent.InputTuple, RoleGrantedEvent.OutputTuple, RoleGrantedEvent.OutputObject>;
        "RoleRevoked(bytes32,address,address)": TypedContractEvent<RoleRevokedEvent.InputTuple, RoleRevokedEvent.OutputTuple, RoleRevokedEvent.OutputObject>;
        RoleRevoked: TypedContractEvent<RoleRevokedEvent.InputTuple, RoleRevokedEvent.OutputTuple, RoleRevokedEvent.OutputObject>;
        "SentInstallment(bytes32,uint128,uint256,string,string,string)": TypedContractEvent<SentInstallmentEvent.InputTuple, SentInstallmentEvent.OutputTuple, SentInstallmentEvent.OutputObject>;
        SentInstallment: TypedContractEvent<SentInstallmentEvent.InputTuple, SentInstallmentEvent.OutputTuple, SentInstallmentEvent.OutputObject>;
        "Unpaused(address)": TypedContractEvent<UnpausedEvent.InputTuple, UnpausedEvent.OutputTuple, UnpausedEvent.OutputObject>;
        Unpaused: TypedContractEvent<UnpausedEvent.InputTuple, UnpausedEvent.OutputTuple, UnpausedEvent.OutputObject>;
        "Upgraded(address)": TypedContractEvent<UpgradedEvent.InputTuple, UpgradedEvent.OutputTuple, UpgradedEvent.OutputObject>;
        Upgraded: TypedContractEvent<UpgradedEvent.InputTuple, UpgradedEvent.OutputTuple, UpgradedEvent.OutputObject>;
        "Withdraw(string,address)": TypedContractEvent<WithdrawEvent.InputTuple, WithdrawEvent.OutputTuple, WithdrawEvent.OutputObject>;
        Withdraw: TypedContractEvent<WithdrawEvent.InputTuple, WithdrawEvent.OutputTuple, WithdrawEvent.OutputObject>;
    };
}
