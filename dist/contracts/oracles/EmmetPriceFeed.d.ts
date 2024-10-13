import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../../common";
export interface EmmetPriceFeedInterface extends Interface {
    getFunction(nameOrSignature: "CFO_ROLE" | "DEFAULT_ADMIN_ROLE" | "MANAGER_ROLE" | "SIGNER_ROLE" | "UPGRADE_INTERFACE_VERSION" | "ccm" | "decimals" | "description" | "getRoleAdmin" | "grantRole" | "hasRole" | "initialize" | "initializePriceFeed" | "latestAnswer" | "latestRoundData" | "pause" | "paused" | "proxiableUUID" | "renounceRole" | "revokeRole" | "startedAt" | "supportsInterface" | "unpause" | "updateCCM" | "updateTokenPrice" | "upgradeToAndCall"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "CCMUpdated" | "Initialized" | "Paused" | "PriceUpdated" | "RoleAdminChanged" | "RoleGranted" | "RoleRevoked" | "Unpaused" | "Upgraded"): EventFragment;
    encodeFunctionData(functionFragment: "CFO_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "DEFAULT_ADMIN_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "MANAGER_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "SIGNER_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "UPGRADE_INTERFACE_VERSION", values?: undefined): string;
    encodeFunctionData(functionFragment: "ccm", values?: undefined): string;
    encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "description", values?: undefined): string;
    encodeFunctionData(functionFragment: "getRoleAdmin", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "grantRole", values: [BytesLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "hasRole", values: [BytesLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "initialize", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "initializePriceFeed", values: [BigNumberish, string, AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "latestAnswer", values?: undefined): string;
    encodeFunctionData(functionFragment: "latestRoundData", values?: undefined): string;
    encodeFunctionData(functionFragment: "pause", values?: undefined): string;
    encodeFunctionData(functionFragment: "paused", values?: undefined): string;
    encodeFunctionData(functionFragment: "proxiableUUID", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceRole", values: [BytesLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "revokeRole", values: [BytesLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "startedAt", values?: undefined): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
    encodeFunctionData(functionFragment: "updateCCM", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "updateTokenPrice", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "upgradeToAndCall", values: [AddressLike, BytesLike]): string;
    decodeFunctionResult(functionFragment: "CFO_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "DEFAULT_ADMIN_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MANAGER_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "SIGNER_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "UPGRADE_INTERFACE_VERSION", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ccm", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "description", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initializePriceFeed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "latestAnswer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "latestRoundData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proxiableUUID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startedAt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateCCM", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateTokenPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeToAndCall", data: BytesLike): Result;
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
export declare namespace PriceUpdatedEvent {
    type InputTuple = [
        oldPrice: BigNumberish,
        newPrice: BigNumberish,
        answeredInRound: BigNumberish
    ];
    type OutputTuple = [
        oldPrice: bigint,
        newPrice: bigint,
        answeredInRound: bigint
    ];
    interface OutputObject {
        oldPrice: bigint;
        newPrice: bigint;
        answeredInRound: bigint;
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
export interface EmmetPriceFeed extends BaseContract {
    connect(runner?: ContractRunner | null): EmmetPriceFeed;
    waitForDeployment(): Promise<this>;
    interface: EmmetPriceFeedInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    CFO_ROLE: TypedContractMethod<[], [string], "view">;
    DEFAULT_ADMIN_ROLE: TypedContractMethod<[], [string], "view">;
    MANAGER_ROLE: TypedContractMethod<[], [string], "view">;
    SIGNER_ROLE: TypedContractMethod<[], [string], "view">;
    UPGRADE_INTERFACE_VERSION: TypedContractMethod<[], [string], "view">;
    ccm: TypedContractMethod<[], [string], "view">;
    decimals: TypedContractMethod<[], [bigint], "view">;
    description: TypedContractMethod<[], [string], "view">;
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
    initializePriceFeed: TypedContractMethod<[
        decimals_: BigNumberish,
        description_: string,
        manager_: AddressLike,
        cfo_: AddressLike
    ], [
        void
    ], "nonpayable">;
    latestAnswer: TypedContractMethod<[], [bigint], "view">;
    latestRoundData: TypedContractMethod<[
    ], [
        [
            bigint,
            bigint,
            bigint,
            bigint,
            bigint
        ] & {
            roundId: bigint;
            answer: bigint;
            _startedAt: bigint;
            updatedAt: bigint;
            answeredInRound: bigint;
        }
    ], "view">;
    pause: TypedContractMethod<[], [void], "nonpayable">;
    paused: TypedContractMethod<[], [boolean], "view">;
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
    startedAt: TypedContractMethod<[], [bigint], "view">;
    supportsInterface: TypedContractMethod<[
        interfaceId: BytesLike
    ], [
        boolean
    ], "view">;
    unpause: TypedContractMethod<[], [void], "nonpayable">;
    updateCCM: TypedContractMethod<[ccm_: AddressLike], [void], "nonpayable">;
    updateTokenPrice: TypedContractMethod<[
        newPrice_: BigNumberish,
        answeredInRound_: BigNumberish
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
    getFunction(nameOrSignature: "CFO_ROLE"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "DEFAULT_ADMIN_ROLE"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "MANAGER_ROLE"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "SIGNER_ROLE"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "UPGRADE_INTERFACE_VERSION"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "ccm"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "decimals"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "description"): TypedContractMethod<[], [string], "view">;
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
    getFunction(nameOrSignature: "initializePriceFeed"): TypedContractMethod<[
        decimals_: BigNumberish,
        description_: string,
        manager_: AddressLike,
        cfo_: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "latestAnswer"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "latestRoundData"): TypedContractMethod<[
    ], [
        [
            bigint,
            bigint,
            bigint,
            bigint,
            bigint
        ] & {
            roundId: bigint;
            answer: bigint;
            _startedAt: bigint;
            updatedAt: bigint;
            answeredInRound: bigint;
        }
    ], "view">;
    getFunction(nameOrSignature: "pause"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "paused"): TypedContractMethod<[], [boolean], "view">;
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
    getFunction(nameOrSignature: "startedAt"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "supportsInterface"): TypedContractMethod<[interfaceId: BytesLike], [boolean], "view">;
    getFunction(nameOrSignature: "unpause"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "updateCCM"): TypedContractMethod<[ccm_: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "updateTokenPrice"): TypedContractMethod<[
        newPrice_: BigNumberish,
        answeredInRound_: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "upgradeToAndCall"): TypedContractMethod<[
        newImplementation: AddressLike,
        data: BytesLike
    ], [
        void
    ], "payable">;
    getEvent(key: "CCMUpdated"): TypedContractEvent<CCMUpdatedEvent.InputTuple, CCMUpdatedEvent.OutputTuple, CCMUpdatedEvent.OutputObject>;
    getEvent(key: "Initialized"): TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
    getEvent(key: "Paused"): TypedContractEvent<PausedEvent.InputTuple, PausedEvent.OutputTuple, PausedEvent.OutputObject>;
    getEvent(key: "PriceUpdated"): TypedContractEvent<PriceUpdatedEvent.InputTuple, PriceUpdatedEvent.OutputTuple, PriceUpdatedEvent.OutputObject>;
    getEvent(key: "RoleAdminChanged"): TypedContractEvent<RoleAdminChangedEvent.InputTuple, RoleAdminChangedEvent.OutputTuple, RoleAdminChangedEvent.OutputObject>;
    getEvent(key: "RoleGranted"): TypedContractEvent<RoleGrantedEvent.InputTuple, RoleGrantedEvent.OutputTuple, RoleGrantedEvent.OutputObject>;
    getEvent(key: "RoleRevoked"): TypedContractEvent<RoleRevokedEvent.InputTuple, RoleRevokedEvent.OutputTuple, RoleRevokedEvent.OutputObject>;
    getEvent(key: "Unpaused"): TypedContractEvent<UnpausedEvent.InputTuple, UnpausedEvent.OutputTuple, UnpausedEvent.OutputObject>;
    getEvent(key: "Upgraded"): TypedContractEvent<UpgradedEvent.InputTuple, UpgradedEvent.OutputTuple, UpgradedEvent.OutputObject>;
    filters: {
        "CCMUpdated(address)": TypedContractEvent<CCMUpdatedEvent.InputTuple, CCMUpdatedEvent.OutputTuple, CCMUpdatedEvent.OutputObject>;
        CCMUpdated: TypedContractEvent<CCMUpdatedEvent.InputTuple, CCMUpdatedEvent.OutputTuple, CCMUpdatedEvent.OutputObject>;
        "Initialized(uint64)": TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
        Initialized: TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
        "Paused(address)": TypedContractEvent<PausedEvent.InputTuple, PausedEvent.OutputTuple, PausedEvent.OutputObject>;
        Paused: TypedContractEvent<PausedEvent.InputTuple, PausedEvent.OutputTuple, PausedEvent.OutputObject>;
        "PriceUpdated(int256,int256,uint80)": TypedContractEvent<PriceUpdatedEvent.InputTuple, PriceUpdatedEvent.OutputTuple, PriceUpdatedEvent.OutputObject>;
        PriceUpdated: TypedContractEvent<PriceUpdatedEvent.InputTuple, PriceUpdatedEvent.OutputTuple, PriceUpdatedEvent.OutputObject>;
        "RoleAdminChanged(bytes32,bytes32,bytes32)": TypedContractEvent<RoleAdminChangedEvent.InputTuple, RoleAdminChangedEvent.OutputTuple, RoleAdminChangedEvent.OutputObject>;
        RoleAdminChanged: TypedContractEvent<RoleAdminChangedEvent.InputTuple, RoleAdminChangedEvent.OutputTuple, RoleAdminChangedEvent.OutputObject>;
        "RoleGranted(bytes32,address,address)": TypedContractEvent<RoleGrantedEvent.InputTuple, RoleGrantedEvent.OutputTuple, RoleGrantedEvent.OutputObject>;
        RoleGranted: TypedContractEvent<RoleGrantedEvent.InputTuple, RoleGrantedEvent.OutputTuple, RoleGrantedEvent.OutputObject>;
        "RoleRevoked(bytes32,address,address)": TypedContractEvent<RoleRevokedEvent.InputTuple, RoleRevokedEvent.OutputTuple, RoleRevokedEvent.OutputObject>;
        RoleRevoked: TypedContractEvent<RoleRevokedEvent.InputTuple, RoleRevokedEvent.OutputTuple, RoleRevokedEvent.OutputObject>;
        "Unpaused(address)": TypedContractEvent<UnpausedEvent.InputTuple, UnpausedEvent.OutputTuple, UnpausedEvent.OutputObject>;
        Unpaused: TypedContractEvent<UnpausedEvent.InputTuple, UnpausedEvent.OutputTuple, UnpausedEvent.OutputObject>;
        "Upgraded(address)": TypedContractEvent<UpgradedEvent.InputTuple, UpgradedEvent.OutputTuple, UpgradedEvent.OutputObject>;
        Upgraded: TypedContractEvent<UpgradedEvent.InputTuple, UpgradedEvent.OutputTuple, UpgradedEvent.OutputObject>;
    };
}
