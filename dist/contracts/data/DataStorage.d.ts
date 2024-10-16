import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../../common";
export declare namespace BytesHelper {
    type DataStruct = {
        part1: BytesLike;
        part2: BytesLike;
    };
    type DataStructOutput = [part1: string, part2: string] & {
        part1: string;
        part2: string;
    };
}
export interface DataStorageInterface extends Interface {
    getFunction(nameOrSignature: "BRIDGE_ROLE" | "DEFAULT_ADMIN_ROLE" | "GAS_ORACLE_ROLE" | "MANAGER_ROLE" | "NATIVE_TOKEN" | "UPGRADE_INTERFACE_VERSION" | "_chains" | "_tokens" | "gasConsumed" | "gasPrices" | "getRoleAdmin" | "grantRole" | "hasRole" | "inHashToIndex" | "inTransactions" | "indexIn" | "indexOut" | "initialize" | "outHashToIndex" | "outTransactions" | "paused" | "proxiableUUID" | "renounceRole" | "revokeRole" | "supportsInterface" | "upgradeToAndCall"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized" | "Paused" | "RoleAdminChanged" | "RoleGranted" | "RoleRevoked" | "Unpaused" | "Upgraded"): EventFragment;
    encodeFunctionData(functionFragment: "BRIDGE_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "DEFAULT_ADMIN_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "GAS_ORACLE_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "MANAGER_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "NATIVE_TOKEN", values?: undefined): string;
    encodeFunctionData(functionFragment: "UPGRADE_INTERFACE_VERSION", values?: undefined): string;
    encodeFunctionData(functionFragment: "_chains", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "_tokens", values: [string]): string;
    encodeFunctionData(functionFragment: "gasConsumed", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "gasPrices", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getRoleAdmin", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "grantRole", values: [BytesLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "hasRole", values: [BytesLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "inHashToIndex", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "inTransactions", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "indexIn", values?: undefined): string;
    encodeFunctionData(functionFragment: "indexOut", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values: [string]): string;
    encodeFunctionData(functionFragment: "outHashToIndex", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "outTransactions", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "paused", values?: undefined): string;
    encodeFunctionData(functionFragment: "proxiableUUID", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceRole", values: [BytesLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "revokeRole", values: [BytesLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "upgradeToAndCall", values: [AddressLike, BytesLike]): string;
    decodeFunctionResult(functionFragment: "BRIDGE_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "DEFAULT_ADMIN_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "GAS_ORACLE_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MANAGER_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "NATIVE_TOKEN", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "UPGRADE_INTERFACE_VERSION", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_chains", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_tokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "gasConsumed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "gasPrices", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "inHashToIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "inTransactions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "indexIn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "indexOut", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "outHashToIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "outTransactions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proxiableUUID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeToAndCall", data: BytesLike): Result;
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
export interface DataStorage extends BaseContract {
    connect(runner?: ContractRunner | null): DataStorage;
    waitForDeployment(): Promise<this>;
    interface: DataStorageInterface;
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
    DEFAULT_ADMIN_ROLE: TypedContractMethod<[], [string], "view">;
    GAS_ORACLE_ROLE: TypedContractMethod<[], [string], "view">;
    MANAGER_ROLE: TypedContractMethod<[], [string], "view">;
    NATIVE_TOKEN: TypedContractMethod<[], [string], "view">;
    UPGRADE_INTERFACE_VERSION: TypedContractMethod<[], [string], "view">;
    _chains: TypedContractMethod<[
        chainId: BigNumberish
    ], [
        [
            BytesHelper.DataStructOutput,
            BytesHelper.DataStructOutput,
            string
        ] & {
            bridge: BytesHelper.DataStructOutput;
            name: BytesHelper.DataStructOutput;
            currency: string;
        }
    ], "view">;
    _tokens: TypedContractMethod<[
        symbol: string
    ], [
        [
            string,
            string,
            bigint
        ] & {
            token: string;
            priceFeed: string;
            decimals: bigint;
        }
    ], "view">;
    gasConsumed: TypedContractMethod<[
        chainId: BigNumberish,
        arg1: BigNumberish
    ], [
        bigint
    ], "view">;
    gasPrices: TypedContractMethod<[chainId: BigNumberish], [bigint], "view">;
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
    inHashToIndex: TypedContractMethod<[txHash: BytesLike], [bigint], "view">;
    inTransactions: TypedContractMethod<[index: BigNumberish], [bigint], "view">;
    indexIn: TypedContractMethod<[], [bigint], "view">;
    indexOut: TypedContractMethod<[], [bigint], "view">;
    initialize: TypedContractMethod<[nativeCoin: string], [void], "nonpayable">;
    outHashToIndex: TypedContractMethod<[txHash: BytesLike], [bigint], "view">;
    outTransactions: TypedContractMethod<[
        index: BigNumberish
    ], [
        [
            string,
            bigint,
            bigint,
            bigint,
            string,
            string,
            BytesHelper.DataStructOutput,
            boolean,
            string
        ] & {
            txHash: string;
            blockNumber: bigint;
            sentAmount: bigint;
            toChainId: bigint;
            fromToken: string;
            toToken: string;
            to: BytesHelper.DataStructOutput;
            isSuccess: boolean;
            outcome: string;
        }
    ], "view">;
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
    supportsInterface: TypedContractMethod<[
        interfaceId: BytesLike
    ], [
        boolean
    ], "view">;
    upgradeToAndCall: TypedContractMethod<[
        newImplementation: AddressLike,
        data: BytesLike
    ], [
        void
    ], "payable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "BRIDGE_ROLE"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "DEFAULT_ADMIN_ROLE"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "GAS_ORACLE_ROLE"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "MANAGER_ROLE"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "NATIVE_TOKEN"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "UPGRADE_INTERFACE_VERSION"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "_chains"): TypedContractMethod<[
        chainId: BigNumberish
    ], [
        [
            BytesHelper.DataStructOutput,
            BytesHelper.DataStructOutput,
            string
        ] & {
            bridge: BytesHelper.DataStructOutput;
            name: BytesHelper.DataStructOutput;
            currency: string;
        }
    ], "view">;
    getFunction(nameOrSignature: "_tokens"): TypedContractMethod<[
        symbol: string
    ], [
        [
            string,
            string,
            bigint
        ] & {
            token: string;
            priceFeed: string;
            decimals: bigint;
        }
    ], "view">;
    getFunction(nameOrSignature: "gasConsumed"): TypedContractMethod<[
        chainId: BigNumberish,
        arg1: BigNumberish
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "gasPrices"): TypedContractMethod<[chainId: BigNumberish], [bigint], "view">;
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
    getFunction(nameOrSignature: "inHashToIndex"): TypedContractMethod<[txHash: BytesLike], [bigint], "view">;
    getFunction(nameOrSignature: "inTransactions"): TypedContractMethod<[index: BigNumberish], [bigint], "view">;
    getFunction(nameOrSignature: "indexIn"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "indexOut"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "initialize"): TypedContractMethod<[nativeCoin: string], [void], "nonpayable">;
    getFunction(nameOrSignature: "outHashToIndex"): TypedContractMethod<[txHash: BytesLike], [bigint], "view">;
    getFunction(nameOrSignature: "outTransactions"): TypedContractMethod<[
        index: BigNumberish
    ], [
        [
            string,
            bigint,
            bigint,
            bigint,
            string,
            string,
            BytesHelper.DataStructOutput,
            boolean,
            string
        ] & {
            txHash: string;
            blockNumber: bigint;
            sentAmount: bigint;
            toChainId: bigint;
            fromToken: string;
            toToken: string;
            to: BytesHelper.DataStructOutput;
            isSuccess: boolean;
            outcome: string;
        }
    ], "view">;
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
    getFunction(nameOrSignature: "supportsInterface"): TypedContractMethod<[interfaceId: BytesLike], [boolean], "view">;
    getFunction(nameOrSignature: "upgradeToAndCall"): TypedContractMethod<[
        newImplementation: AddressLike,
        data: BytesLike
    ], [
        void
    ], "payable">;
    getEvent(key: "Initialized"): TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
    getEvent(key: "Paused"): TypedContractEvent<PausedEvent.InputTuple, PausedEvent.OutputTuple, PausedEvent.OutputObject>;
    getEvent(key: "RoleAdminChanged"): TypedContractEvent<RoleAdminChangedEvent.InputTuple, RoleAdminChangedEvent.OutputTuple, RoleAdminChangedEvent.OutputObject>;
    getEvent(key: "RoleGranted"): TypedContractEvent<RoleGrantedEvent.InputTuple, RoleGrantedEvent.OutputTuple, RoleGrantedEvent.OutputObject>;
    getEvent(key: "RoleRevoked"): TypedContractEvent<RoleRevokedEvent.InputTuple, RoleRevokedEvent.OutputTuple, RoleRevokedEvent.OutputObject>;
    getEvent(key: "Unpaused"): TypedContractEvent<UnpausedEvent.InputTuple, UnpausedEvent.OutputTuple, UnpausedEvent.OutputObject>;
    getEvent(key: "Upgraded"): TypedContractEvent<UpgradedEvent.InputTuple, UpgradedEvent.OutputTuple, UpgradedEvent.OutputObject>;
    filters: {
        "Initialized(uint64)": TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
        Initialized: TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
        "Paused(address)": TypedContractEvent<PausedEvent.InputTuple, PausedEvent.OutputTuple, PausedEvent.OutputObject>;
        Paused: TypedContractEvent<PausedEvent.InputTuple, PausedEvent.OutputTuple, PausedEvent.OutputObject>;
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
