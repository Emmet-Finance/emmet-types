import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../../../../../common";
export interface EmmetLPAdminInterface extends Interface {
    getFunction(nameOrSignature: "BRIDGE_ROLE" | "CFO_ROLE" | "DEFAULT_ADMIN_ROLE" | "MANAGER_ROLE" | "SIGNER_ROLE" | "UPGRADE_INTERFACE_VERSION" | "bridge" | "ccm" | "feeDecimals" | "getRoleAdmin" | "grantRole" | "hasRole" | "initialize" | "initializeAdmin" | "manageBridge" | "pause" | "paused" | "protocolFee" | "protocolFeeAmount" | "proxiableUUID" | "renounceRole" | "revokeRole" | "supportsInterface" | "token" | "tokenFee" | "unpause" | "updateCCM" | "updateProtocolFee" | "updateTokenFee" | "upgradeToAndCall" | "withdrawProtocolFees"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "BridgeUpdated" | "CCMUpdated" | "Initialized" | "Paused" | "ProtocolFeeUpdated" | "ProtocolFeesWithdrawn" | "RoleAdminChanged" | "RoleGranted" | "RoleRevoked" | "TokenFeeUpdated" | "Unpaused" | "Upgraded"): EventFragment;
    encodeFunctionData(functionFragment: "BRIDGE_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "CFO_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "DEFAULT_ADMIN_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "MANAGER_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "SIGNER_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "UPGRADE_INTERFACE_VERSION", values?: undefined): string;
    encodeFunctionData(functionFragment: "bridge", values?: undefined): string;
    encodeFunctionData(functionFragment: "ccm", values?: undefined): string;
    encodeFunctionData(functionFragment: "feeDecimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "getRoleAdmin", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "grantRole", values: [BytesLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "hasRole", values: [BytesLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "initialize", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "initializeAdmin", values: [BigNumberish, AddressLike, AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "manageBridge", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "pause", values?: undefined): string;
    encodeFunctionData(functionFragment: "paused", values?: undefined): string;
    encodeFunctionData(functionFragment: "protocolFee", values?: undefined): string;
    encodeFunctionData(functionFragment: "protocolFeeAmount", values?: undefined): string;
    encodeFunctionData(functionFragment: "proxiableUUID", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceRole", values: [BytesLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "revokeRole", values: [BytesLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "token", values?: undefined): string;
    encodeFunctionData(functionFragment: "tokenFee", values?: undefined): string;
    encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
    encodeFunctionData(functionFragment: "updateCCM", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "updateProtocolFee", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "updateTokenFee", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "upgradeToAndCall", values: [AddressLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "withdrawProtocolFees", values?: undefined): string;
    decodeFunctionResult(functionFragment: "BRIDGE_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "CFO_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "DEFAULT_ADMIN_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MANAGER_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "SIGNER_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "UPGRADE_INTERFACE_VERSION", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bridge", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ccm", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "feeDecimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initializeAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "manageBridge", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "protocolFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "protocolFeeAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proxiableUUID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateCCM", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateProtocolFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateTokenFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeToAndCall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawProtocolFees", data: BytesLike): Result;
}
export declare namespace BridgeUpdatedEvent {
    type InputTuple = [
        oldBridge: AddressLike,
        newBridge: AddressLike,
        operation: string
    ];
    type OutputTuple = [
        oldBridge: string,
        newBridge: string,
        operation: string
    ];
    interface OutputObject {
        oldBridge: string;
        newBridge: string;
        operation: string;
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
export declare namespace ProtocolFeeUpdatedEvent {
    type InputTuple = [oldFee: BigNumberish, newFee: BigNumberish];
    type OutputTuple = [oldFee: bigint, newFee: bigint];
    interface OutputObject {
        oldFee: bigint;
        newFee: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace ProtocolFeesWithdrawnEvent {
    type InputTuple = [fees: BigNumberish];
    type OutputTuple = [fees: bigint];
    interface OutputObject {
        fees: bigint;
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
export declare namespace TokenFeeUpdatedEvent {
    type InputTuple = [oldFee: BigNumberish, newFee: BigNumberish];
    type OutputTuple = [oldFee: bigint, newFee: bigint];
    interface OutputObject {
        oldFee: bigint;
        newFee: bigint;
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
export interface EmmetLPAdmin extends BaseContract {
    connect(runner?: ContractRunner | null): EmmetLPAdmin;
    waitForDeployment(): Promise<this>;
    interface: EmmetLPAdminInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    BRIDGE_ROLE: TypedContractMethod<[], [string], "view">;
    CFO_ROLE: TypedContractMethod<[], [string], "view">;
    DEFAULT_ADMIN_ROLE: TypedContractMethod<[], [string], "view">;
    MANAGER_ROLE: TypedContractMethod<[], [string], "view">;
    SIGNER_ROLE: TypedContractMethod<[], [string], "view">;
    UPGRADE_INTERFACE_VERSION: TypedContractMethod<[], [string], "view">;
    bridge: TypedContractMethod<[], [string], "view">;
    ccm: TypedContractMethod<[], [string], "view">;
    feeDecimals: TypedContractMethod<[], [bigint], "view">;
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
    initializeAdmin: TypedContractMethod<[
        protocolFee_: BigNumberish,
        token_: AddressLike,
        cfo_: AddressLike,
        manager_: AddressLike
    ], [
        void
    ], "nonpayable">;
    manageBridge: TypedContractMethod<[
        account: AddressLike
    ], [
        void
    ], "nonpayable">;
    pause: TypedContractMethod<[], [void], "nonpayable">;
    paused: TypedContractMethod<[], [boolean], "view">;
    protocolFee: TypedContractMethod<[], [bigint], "view">;
    protocolFeeAmount: TypedContractMethod<[], [bigint], "view">;
    proxiableUUID: TypedContractMethod<[], [string], "view">;
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
    supportsInterface: TypedContractMethod<[
        interfaceId: BytesLike
    ], [
        boolean
    ], "view">;
    token: TypedContractMethod<[], [string], "view">;
    tokenFee: TypedContractMethod<[], [bigint], "view">;
    unpause: TypedContractMethod<[], [void], "nonpayable">;
    updateCCM: TypedContractMethod<[ccm_: AddressLike], [void], "nonpayable">;
    updateProtocolFee: TypedContractMethod<[
        protocolFee_: BigNumberish
    ], [
        void
    ], "nonpayable">;
    updateTokenFee: TypedContractMethod<[
        tokenFee_: BigNumberish
    ], [
        void
    ], "nonpayable">;
    upgradeToAndCall: TypedContractMethod<[
        newImplementation: AddressLike,
        data: BytesLike
    ], [
        void
    ], "payable">;
    withdrawProtocolFees: TypedContractMethod<[], [void], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "BRIDGE_ROLE"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "CFO_ROLE"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "DEFAULT_ADMIN_ROLE"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "MANAGER_ROLE"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "SIGNER_ROLE"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "UPGRADE_INTERFACE_VERSION"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "bridge"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "ccm"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "feeDecimals"): TypedContractMethod<[], [bigint], "view">;
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
    getFunction(nameOrSignature: "initializeAdmin"): TypedContractMethod<[
        protocolFee_: BigNumberish,
        token_: AddressLike,
        cfo_: AddressLike,
        manager_: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "manageBridge"): TypedContractMethod<[account: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "pause"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "paused"): TypedContractMethod<[], [boolean], "view">;
    getFunction(nameOrSignature: "protocolFee"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "protocolFeeAmount"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "proxiableUUID"): TypedContractMethod<[], [string], "view">;
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
    getFunction(nameOrSignature: "supportsInterface"): TypedContractMethod<[interfaceId: BytesLike], [boolean], "view">;
    getFunction(nameOrSignature: "token"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "tokenFee"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "unpause"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "updateCCM"): TypedContractMethod<[ccm_: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "updateProtocolFee"): TypedContractMethod<[protocolFee_: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "updateTokenFee"): TypedContractMethod<[tokenFee_: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "upgradeToAndCall"): TypedContractMethod<[
        newImplementation: AddressLike,
        data: BytesLike
    ], [
        void
    ], "payable">;
    getFunction(nameOrSignature: "withdrawProtocolFees"): TypedContractMethod<[], [void], "nonpayable">;
    getEvent(key: "BridgeUpdated"): TypedContractEvent<BridgeUpdatedEvent.InputTuple, BridgeUpdatedEvent.OutputTuple, BridgeUpdatedEvent.OutputObject>;
    getEvent(key: "CCMUpdated"): TypedContractEvent<CCMUpdatedEvent.InputTuple, CCMUpdatedEvent.OutputTuple, CCMUpdatedEvent.OutputObject>;
    getEvent(key: "Initialized"): TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
    getEvent(key: "Paused"): TypedContractEvent<PausedEvent.InputTuple, PausedEvent.OutputTuple, PausedEvent.OutputObject>;
    getEvent(key: "ProtocolFeeUpdated"): TypedContractEvent<ProtocolFeeUpdatedEvent.InputTuple, ProtocolFeeUpdatedEvent.OutputTuple, ProtocolFeeUpdatedEvent.OutputObject>;
    getEvent(key: "ProtocolFeesWithdrawn"): TypedContractEvent<ProtocolFeesWithdrawnEvent.InputTuple, ProtocolFeesWithdrawnEvent.OutputTuple, ProtocolFeesWithdrawnEvent.OutputObject>;
    getEvent(key: "RoleAdminChanged"): TypedContractEvent<RoleAdminChangedEvent.InputTuple, RoleAdminChangedEvent.OutputTuple, RoleAdminChangedEvent.OutputObject>;
    getEvent(key: "RoleGranted"): TypedContractEvent<RoleGrantedEvent.InputTuple, RoleGrantedEvent.OutputTuple, RoleGrantedEvent.OutputObject>;
    getEvent(key: "RoleRevoked"): TypedContractEvent<RoleRevokedEvent.InputTuple, RoleRevokedEvent.OutputTuple, RoleRevokedEvent.OutputObject>;
    getEvent(key: "TokenFeeUpdated"): TypedContractEvent<TokenFeeUpdatedEvent.InputTuple, TokenFeeUpdatedEvent.OutputTuple, TokenFeeUpdatedEvent.OutputObject>;
    getEvent(key: "Unpaused"): TypedContractEvent<UnpausedEvent.InputTuple, UnpausedEvent.OutputTuple, UnpausedEvent.OutputObject>;
    getEvent(key: "Upgraded"): TypedContractEvent<UpgradedEvent.InputTuple, UpgradedEvent.OutputTuple, UpgradedEvent.OutputObject>;
    filters: {
        "BridgeUpdated(address,address,string)": TypedContractEvent<BridgeUpdatedEvent.InputTuple, BridgeUpdatedEvent.OutputTuple, BridgeUpdatedEvent.OutputObject>;
        BridgeUpdated: TypedContractEvent<BridgeUpdatedEvent.InputTuple, BridgeUpdatedEvent.OutputTuple, BridgeUpdatedEvent.OutputObject>;
        "CCMUpdated(address)": TypedContractEvent<CCMUpdatedEvent.InputTuple, CCMUpdatedEvent.OutputTuple, CCMUpdatedEvent.OutputObject>;
        CCMUpdated: TypedContractEvent<CCMUpdatedEvent.InputTuple, CCMUpdatedEvent.OutputTuple, CCMUpdatedEvent.OutputObject>;
        "Initialized(uint64)": TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
        Initialized: TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
        "Paused(address)": TypedContractEvent<PausedEvent.InputTuple, PausedEvent.OutputTuple, PausedEvent.OutputObject>;
        Paused: TypedContractEvent<PausedEvent.InputTuple, PausedEvent.OutputTuple, PausedEvent.OutputObject>;
        "ProtocolFeeUpdated(uint256,uint256)": TypedContractEvent<ProtocolFeeUpdatedEvent.InputTuple, ProtocolFeeUpdatedEvent.OutputTuple, ProtocolFeeUpdatedEvent.OutputObject>;
        ProtocolFeeUpdated: TypedContractEvent<ProtocolFeeUpdatedEvent.InputTuple, ProtocolFeeUpdatedEvent.OutputTuple, ProtocolFeeUpdatedEvent.OutputObject>;
        "ProtocolFeesWithdrawn(uint256)": TypedContractEvent<ProtocolFeesWithdrawnEvent.InputTuple, ProtocolFeesWithdrawnEvent.OutputTuple, ProtocolFeesWithdrawnEvent.OutputObject>;
        ProtocolFeesWithdrawn: TypedContractEvent<ProtocolFeesWithdrawnEvent.InputTuple, ProtocolFeesWithdrawnEvent.OutputTuple, ProtocolFeesWithdrawnEvent.OutputObject>;
        "RoleAdminChanged(bytes32,bytes32,bytes32)": TypedContractEvent<RoleAdminChangedEvent.InputTuple, RoleAdminChangedEvent.OutputTuple, RoleAdminChangedEvent.OutputObject>;
        RoleAdminChanged: TypedContractEvent<RoleAdminChangedEvent.InputTuple, RoleAdminChangedEvent.OutputTuple, RoleAdminChangedEvent.OutputObject>;
        "RoleGranted(bytes32,address,address)": TypedContractEvent<RoleGrantedEvent.InputTuple, RoleGrantedEvent.OutputTuple, RoleGrantedEvent.OutputObject>;
        RoleGranted: TypedContractEvent<RoleGrantedEvent.InputTuple, RoleGrantedEvent.OutputTuple, RoleGrantedEvent.OutputObject>;
        "RoleRevoked(bytes32,address,address)": TypedContractEvent<RoleRevokedEvent.InputTuple, RoleRevokedEvent.OutputTuple, RoleRevokedEvent.OutputObject>;
        RoleRevoked: TypedContractEvent<RoleRevokedEvent.InputTuple, RoleRevokedEvent.OutputTuple, RoleRevokedEvent.OutputObject>;
        "TokenFeeUpdated(uint256,uint256)": TypedContractEvent<TokenFeeUpdatedEvent.InputTuple, TokenFeeUpdatedEvent.OutputTuple, TokenFeeUpdatedEvent.OutputObject>;
        TokenFeeUpdated: TypedContractEvent<TokenFeeUpdatedEvent.InputTuple, TokenFeeUpdatedEvent.OutputTuple, TokenFeeUpdatedEvent.OutputObject>;
        "Unpaused(address)": TypedContractEvent<UnpausedEvent.InputTuple, UnpausedEvent.OutputTuple, UnpausedEvent.OutputObject>;
        Unpaused: TypedContractEvent<UnpausedEvent.InputTuple, UnpausedEvent.OutputTuple, UnpausedEvent.OutputObject>;
        "Upgraded(address)": TypedContractEvent<UpgradedEvent.InputTuple, UpgradedEvent.OutputTuple, UpgradedEvent.OutputObject>;
        Upgraded: TypedContractEvent<UpgradedEvent.InputTuple, UpgradedEvent.OutputTuple, UpgradedEvent.OutputObject>;
    };
}
