import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../../common";
export declare namespace ExplorerUpgradable {
    type ExplorerTransactionStruct = {
        txHash: BytesLike;
        start: BigNumberish;
        finish: BigNumberish;
        sentAmount: BigNumberish;
        receiveAmount: BigNumberish;
        sentInUSD: BigNumberish;
        receivedInUSD: BigNumberish;
        fromChainId: BigNumberish;
        toChainId: BigNumberish;
        protocolFee: BigNumberish;
        compensation: BigNumberish;
        sender: string;
        recipient: string;
        fromToken: string;
        toToken: string;
    };
    type ExplorerTransactionStructOutput = [
        txHash: string,
        start: bigint,
        finish: bigint,
        sentAmount: bigint,
        receiveAmount: bigint,
        sentInUSD: bigint,
        receivedInUSD: bigint,
        fromChainId: bigint,
        toChainId: bigint,
        protocolFee: bigint,
        compensation: bigint,
        sender: string,
        recipient: string,
        fromToken: string,
        toToken: string
    ] & {
        txHash: string;
        start: bigint;
        finish: bigint;
        sentAmount: bigint;
        receiveAmount: bigint;
        sentInUSD: bigint;
        receivedInUSD: bigint;
        fromChainId: bigint;
        toChainId: bigint;
        protocolFee: bigint;
        compensation: bigint;
        sender: string;
        recipient: string;
        fromToken: string;
        toToken: string;
    };
}
export interface ExplorerUpgradableInterface extends Interface {
    getFunction(nameOrSignature: "ADMIN_ROLE" | "DEFAULT_ADMIN_ROLE" | "UPGRADE_INTERFACE_VERSION" | "consensus" | "convertToUsd" | "dataAddress" | "getPriceAndDecimals" | "getPriceDecimals" | "getRoleAdmin" | "getStats" | "getTokenPrice" | "getTransaction" | "getTransactions" | "grantRole" | "hasRole" | "initialize" | "protocolFee" | "proxiableUUID" | "renounceRole" | "revokeRole" | "slice" | "supportsInterface" | "updateConsensus" | "updateData" | "updateProtocolFee" | "updateTransaction" | "upgradeToAndCall"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized" | "RoleAdminChanged" | "RoleGranted" | "RoleRevoked" | "Upgraded"): EventFragment;
    encodeFunctionData(functionFragment: "ADMIN_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "DEFAULT_ADMIN_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "UPGRADE_INTERFACE_VERSION", values?: undefined): string;
    encodeFunctionData(functionFragment: "consensus", values?: undefined): string;
    encodeFunctionData(functionFragment: "convertToUsd", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "dataAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "getPriceAndDecimals", values: [string]): string;
    encodeFunctionData(functionFragment: "getPriceDecimals", values: [string]): string;
    encodeFunctionData(functionFragment: "getRoleAdmin", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getStats", values?: undefined): string;
    encodeFunctionData(functionFragment: "getTokenPrice", values: [string]): string;
    encodeFunctionData(functionFragment: "getTransaction", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getTransactions", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "grantRole", values: [BytesLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "hasRole", values: [BytesLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "initialize", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "protocolFee", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "proxiableUUID", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceRole", values: [BytesLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "revokeRole", values: [BytesLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "slice", values: [BytesLike, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "updateConsensus", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "updateData", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "updateProtocolFee", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "updateTransaction", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "upgradeToAndCall", values: [AddressLike, BytesLike]): string;
    decodeFunctionResult(functionFragment: "ADMIN_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "DEFAULT_ADMIN_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "UPGRADE_INTERFACE_VERSION", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "consensus", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "convertToUsd", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "dataAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPriceAndDecimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPriceDecimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getStats", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTokenPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTransaction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTransactions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "protocolFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proxiableUUID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "slice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateConsensus", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateProtocolFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateTransaction", data: BytesLike): Result;
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
export interface ExplorerUpgradable extends BaseContract {
    connect(runner?: ContractRunner | null): ExplorerUpgradable;
    waitForDeployment(): Promise<this>;
    interface: ExplorerUpgradableInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    ADMIN_ROLE: TypedContractMethod<[], [string], "view">;
    DEFAULT_ADMIN_ROLE: TypedContractMethod<[], [string], "view">;
    UPGRADE_INTERFACE_VERSION: TypedContractMethod<[], [string], "view">;
    consensus: TypedContractMethod<[], [string], "view">;
    convertToUsd: TypedContractMethod<[
        symbol: string,
        amount: BigNumberish
    ], [
        bigint
    ], "view">;
    dataAddress: TypedContractMethod<[], [string], "view">;
    getPriceAndDecimals: TypedContractMethod<[
        symbol: string
    ], [
        [bigint, bigint] & {
            price: bigint;
            decimals: bigint;
        }
    ], "view">;
    getPriceDecimals: TypedContractMethod<[symbol: string], [bigint], "view">;
    getRoleAdmin: TypedContractMethod<[role: BytesLike], [string], "view">;
    getStats: TypedContractMethod<[
    ], [
        [
            bigint,
            bigint,
            bigint,
            bigint
        ] & {
            bridgedInUSD: bigint;
            collectedFees: bigint;
            totalTransactions: bigint;
            uniqueAccounts: bigint;
        }
    ], "view">;
    getTokenPrice: TypedContractMethod<[symbol: string], [bigint], "view">;
    getTransaction: TypedContractMethod<[
        txHash: BytesLike
    ], [
        ExplorerUpgradable.ExplorerTransactionStructOutput
    ], "view">;
    getTransactions: TypedContractMethod<[
        batch: BigNumberish,
        offset: BigNumberish
    ], [
        ExplorerUpgradable.ExplorerTransactionStructOutput[]
    ], "view">;
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
        newData: AddressLike,
        newConsensus: AddressLike
    ], [
        void
    ], "nonpayable">;
    protocolFee: TypedContractMethod<[chainId: BigNumberish], [bigint], "view">;
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
    slice: TypedContractMethod<[
        _bytes: BytesLike,
        _start: BigNumberish,
        _length: BigNumberish
    ], [
        string
    ], "view">;
    supportsInterface: TypedContractMethod<[
        interfaceId: BytesLike
    ], [
        boolean
    ], "view">;
    updateConsensus: TypedContractMethod<[
        newConsensus: AddressLike
    ], [
        void
    ], "nonpayable">;
    updateData: TypedContractMethod<[newData: AddressLike], [void], "nonpayable">;
    updateProtocolFee: TypedContractMethod<[
        chainId: BigNumberish,
        newProtocolFee: BigNumberish
    ], [
        void
    ], "nonpayable">;
    updateTransaction: TypedContractMethod<[
        txHash: BytesLike
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
    getFunction(nameOrSignature: "ADMIN_ROLE"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "DEFAULT_ADMIN_ROLE"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "UPGRADE_INTERFACE_VERSION"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "consensus"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "convertToUsd"): TypedContractMethod<[
        symbol: string,
        amount: BigNumberish
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "dataAddress"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "getPriceAndDecimals"): TypedContractMethod<[
        symbol: string
    ], [
        [bigint, bigint] & {
            price: bigint;
            decimals: bigint;
        }
    ], "view">;
    getFunction(nameOrSignature: "getPriceDecimals"): TypedContractMethod<[symbol: string], [bigint], "view">;
    getFunction(nameOrSignature: "getRoleAdmin"): TypedContractMethod<[role: BytesLike], [string], "view">;
    getFunction(nameOrSignature: "getStats"): TypedContractMethod<[
    ], [
        [
            bigint,
            bigint,
            bigint,
            bigint
        ] & {
            bridgedInUSD: bigint;
            collectedFees: bigint;
            totalTransactions: bigint;
            uniqueAccounts: bigint;
        }
    ], "view">;
    getFunction(nameOrSignature: "getTokenPrice"): TypedContractMethod<[symbol: string], [bigint], "view">;
    getFunction(nameOrSignature: "getTransaction"): TypedContractMethod<[
        txHash: BytesLike
    ], [
        ExplorerUpgradable.ExplorerTransactionStructOutput
    ], "view">;
    getFunction(nameOrSignature: "getTransactions"): TypedContractMethod<[
        batch: BigNumberish,
        offset: BigNumberish
    ], [
        ExplorerUpgradable.ExplorerTransactionStructOutput[]
    ], "view">;
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
        newData: AddressLike,
        newConsensus: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "protocolFee"): TypedContractMethod<[chainId: BigNumberish], [bigint], "view">;
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
    getFunction(nameOrSignature: "slice"): TypedContractMethod<[
        _bytes: BytesLike,
        _start: BigNumberish,
        _length: BigNumberish
    ], [
        string
    ], "view">;
    getFunction(nameOrSignature: "supportsInterface"): TypedContractMethod<[interfaceId: BytesLike], [boolean], "view">;
    getFunction(nameOrSignature: "updateConsensus"): TypedContractMethod<[newConsensus: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "updateData"): TypedContractMethod<[newData: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "updateProtocolFee"): TypedContractMethod<[
        chainId: BigNumberish,
        newProtocolFee: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "updateTransaction"): TypedContractMethod<[txHash: BytesLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "upgradeToAndCall"): TypedContractMethod<[
        newImplementation: AddressLike,
        data: BytesLike
    ], [
        void
    ], "payable">;
    getEvent(key: "Initialized"): TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
    getEvent(key: "RoleAdminChanged"): TypedContractEvent<RoleAdminChangedEvent.InputTuple, RoleAdminChangedEvent.OutputTuple, RoleAdminChangedEvent.OutputObject>;
    getEvent(key: "RoleGranted"): TypedContractEvent<RoleGrantedEvent.InputTuple, RoleGrantedEvent.OutputTuple, RoleGrantedEvent.OutputObject>;
    getEvent(key: "RoleRevoked"): TypedContractEvent<RoleRevokedEvent.InputTuple, RoleRevokedEvent.OutputTuple, RoleRevokedEvent.OutputObject>;
    getEvent(key: "Upgraded"): TypedContractEvent<UpgradedEvent.InputTuple, UpgradedEvent.OutputTuple, UpgradedEvent.OutputObject>;
    filters: {
        "Initialized(uint64)": TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
        Initialized: TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
        "RoleAdminChanged(bytes32,bytes32,bytes32)": TypedContractEvent<RoleAdminChangedEvent.InputTuple, RoleAdminChangedEvent.OutputTuple, RoleAdminChangedEvent.OutputObject>;
        RoleAdminChanged: TypedContractEvent<RoleAdminChangedEvent.InputTuple, RoleAdminChangedEvent.OutputTuple, RoleAdminChangedEvent.OutputObject>;
        "RoleGranted(bytes32,address,address)": TypedContractEvent<RoleGrantedEvent.InputTuple, RoleGrantedEvent.OutputTuple, RoleGrantedEvent.OutputObject>;
        RoleGranted: TypedContractEvent<RoleGrantedEvent.InputTuple, RoleGrantedEvent.OutputTuple, RoleGrantedEvent.OutputObject>;
        "RoleRevoked(bytes32,address,address)": TypedContractEvent<RoleRevokedEvent.InputTuple, RoleRevokedEvent.OutputTuple, RoleRevokedEvent.OutputObject>;
        RoleRevoked: TypedContractEvent<RoleRevokedEvent.InputTuple, RoleRevokedEvent.OutputTuple, RoleRevokedEvent.OutputObject>;
        "Upgraded(address)": TypedContractEvent<UpgradedEvent.InputTuple, UpgradedEvent.OutputTuple, UpgradedEvent.OutputObject>;
        Upgraded: TypedContractEvent<UpgradedEvent.InputTuple, UpgradedEvent.OutputTuple, UpgradedEvent.OutputObject>;
    };
}
