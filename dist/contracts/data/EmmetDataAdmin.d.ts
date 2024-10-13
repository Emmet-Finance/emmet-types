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
export declare namespace BridgeTypes {
    type ChainStruct = {
        bridge: BytesHelper.DataStruct;
        name: BytesHelper.DataStruct;
        currency: BytesLike;
    };
    type ChainStructOutput = [
        bridge: BytesHelper.DataStructOutput,
        name: BytesHelper.DataStructOutput,
        currency: string
    ] & {
        bridge: BytesHelper.DataStructOutput;
        name: BytesHelper.DataStructOutput;
        currency: string;
    };
    type TokenStruct = {
        token: AddressLike;
        priceFeed: AddressLike;
        decimals: BigNumberish;
    };
    type TokenStructOutput = [
        token: string,
        priceFeed: string,
        decimals: bigint
    ] & {
        token: string;
        priceFeed: string;
        decimals: bigint;
    };
    type OutStoreStruct = {
        txHash: BytesLike;
        blockNumber: BigNumberish;
        sentAmount: BigNumberish;
        toChainId: BigNumberish;
        fromToken: BytesLike;
        toToken: BytesLike;
        to: BytesHelper.DataStruct;
        isSuccess: boolean;
        outcome: string;
    };
    type OutStoreStructOutput = [
        txHash: string,
        blockNumber: bigint,
        sentAmount: bigint,
        toChainId: bigint,
        fromToken: string,
        toToken: string,
        to: BytesHelper.DataStructOutput,
        isSuccess: boolean,
        outcome: string
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
    type TokenStrategyStruct = {
        outgoing: BigNumberish[];
        incoming: BigNumberish[];
        foreign: BigNumberish[];
    };
    type TokenStrategyStructOutput = [
        outgoing: bigint[],
        incoming: bigint[],
        foreign: bigint[]
    ] & {
        outgoing: bigint[];
        incoming: bigint[];
        foreign: bigint[];
    };
}
export interface EmmetDataAdminInterface extends Interface {
    getFunction(nameOrSignature: "BRIDGE_ROLE" | "DEFAULT_ADMIN_ROLE" | "GAS_ORACLE_ROLE" | "MANAGER_ROLE" | "NATIVE_TOKEN" | "UPGRADE_INTERFACE_VERSION" | "_chains" | "_tokens" | "chains" | "gasConsumed" | "gasPrices" | "getGasConsumed" | "getInHashToIndex" | "getIndexIn" | "getIndexOut" | "getNativeCoin" | "getOutHashToIndex" | "getRoleAdmin" | "getToken" | "grantRole" | "hasRole" | "inHashToIndex" | "inTransactions" | "incommingTransactions" | "indexIn" | "indexOut" | "initialize" | "outHashToIndex" | "outTransactions" | "outgoingTransactions" | "pause" | "paused" | "proxiableUUID" | "renounceRole" | "revokeRole" | "saveIncomingTx" | "saveOutgoingTx" | "strategies" | "supportsInterface" | "unpause" | "updateChain" | "updateGasPrice" | "updateGasUsed" | "updateToken" | "updateTokenStrategy" | "updateTransaction" | "upgradeToAndCall"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "ChainUpdated" | "GasPriceUpdated" | "Initialized" | "Paused" | "RoleAdminChanged" | "RoleGranted" | "RoleRevoked" | "TokenStrategyUpdated" | "TokenUpdated" | "Unpaused" | "Upgraded" | "UsedGasUpdated"): EventFragment;
    encodeFunctionData(functionFragment: "BRIDGE_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "DEFAULT_ADMIN_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "GAS_ORACLE_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "MANAGER_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "NATIVE_TOKEN", values?: undefined): string;
    encodeFunctionData(functionFragment: "UPGRADE_INTERFACE_VERSION", values?: undefined): string;
    encodeFunctionData(functionFragment: "_chains", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "_tokens", values: [string]): string;
    encodeFunctionData(functionFragment: "chains", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "gasConsumed", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "gasPrices", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getGasConsumed", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getInHashToIndex", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getIndexIn", values?: undefined): string;
    encodeFunctionData(functionFragment: "getIndexOut", values?: undefined): string;
    encodeFunctionData(functionFragment: "getNativeCoin", values?: undefined): string;
    encodeFunctionData(functionFragment: "getOutHashToIndex", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getRoleAdmin", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getToken", values: [string]): string;
    encodeFunctionData(functionFragment: "grantRole", values: [BytesLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "hasRole", values: [BytesLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "inHashToIndex", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "inTransactions", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "incommingTransactions", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "indexIn", values?: undefined): string;
    encodeFunctionData(functionFragment: "indexOut", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values: [string]): string;
    encodeFunctionData(functionFragment: "outHashToIndex", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "outTransactions", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "outgoingTransactions", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "pause", values?: undefined): string;
    encodeFunctionData(functionFragment: "paused", values?: undefined): string;
    encodeFunctionData(functionFragment: "proxiableUUID", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceRole", values: [BytesLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "revokeRole", values: [BytesLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "saveIncomingTx", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "saveOutgoingTx", values: [BytesLike, BridgeTypes.SendParamsStruct]): string;
    encodeFunctionData(functionFragment: "strategies", values: [BigNumberish, string, string]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
    encodeFunctionData(functionFragment: "updateChain", values: [BigNumberish, string, string, string]): string;
    encodeFunctionData(functionFragment: "updateGasPrice", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "updateGasUsed", values: [BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "updateToken", values: [AddressLike, AddressLike, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "updateTokenStrategy", values: [
        BigNumberish,
        string,
        string,
        BigNumberish[],
        BigNumberish[],
        BigNumberish[]
    ]): string;
    encodeFunctionData(functionFragment: "updateTransaction", values: [BytesLike, boolean, string]): string;
    encodeFunctionData(functionFragment: "upgradeToAndCall", values: [AddressLike, BytesLike]): string;
    decodeFunctionResult(functionFragment: "BRIDGE_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "DEFAULT_ADMIN_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "GAS_ORACLE_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MANAGER_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "NATIVE_TOKEN", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "UPGRADE_INTERFACE_VERSION", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_chains", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_tokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "chains", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "gasConsumed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "gasPrices", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getGasConsumed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getInHashToIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getIndexIn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getIndexOut", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNativeCoin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getOutHashToIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "inHashToIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "inTransactions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "incommingTransactions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "indexIn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "indexOut", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "outHashToIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "outTransactions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "outgoingTransactions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proxiableUUID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "saveIncomingTx", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "saveOutgoingTx", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "strategies", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateChain", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateGasPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateGasUsed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateTokenStrategy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateTransaction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeToAndCall", data: BytesLike): Result;
}
export declare namespace ChainUpdatedEvent {
    type InputTuple = [
        chainId: BigNumberish,
        name: string,
        bridge: string,
        currency: string
    ];
    type OutputTuple = [
        chainId: bigint,
        name: string,
        bridge: string,
        currency: string
    ];
    interface OutputObject {
        chainId: bigint;
        name: string;
        bridge: string;
        currency: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace GasPriceUpdatedEvent {
    type InputTuple = [chainId: BigNumberish, gasPrice: BigNumberish];
    type OutputTuple = [chainId: bigint, gasPrice: bigint];
    interface OutputObject {
        chainId: bigint;
        gasPrice: bigint;
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
export declare namespace TokenStrategyUpdatedEvent {
    type InputTuple = [
        otherChainId: BigNumberish,
        fromToken: string,
        toToken: string
    ];
    type OutputTuple = [
        otherChainId: bigint,
        fromToken: string,
        toToken: string
    ];
    interface OutputObject {
        otherChainId: bigint;
        fromToken: string;
        toToken: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace TokenUpdatedEvent {
    type InputTuple = [
        token: AddressLike,
        priceFeed: AddressLike,
        symbol: string
    ];
    type OutputTuple = [token: string, priceFeed: string, symbol: string];
    interface OutputObject {
        token: string;
        priceFeed: string;
        symbol: string;
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
export declare namespace UsedGasUpdatedEvent {
    type InputTuple = [
        chainId: BigNumberish,
        step: BigNumberish,
        consumesGas: BigNumberish
    ];
    type OutputTuple = [
        chainId: bigint,
        step: bigint,
        consumesGas: bigint
    ];
    interface OutputObject {
        chainId: bigint;
        step: bigint;
        consumesGas: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface EmmetDataAdmin extends BaseContract {
    connect(runner?: ContractRunner | null): EmmetDataAdmin;
    waitForDeployment(): Promise<this>;
    interface: EmmetDataAdminInterface;
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
    chains: TypedContractMethod<[
        chainId: BigNumberish
    ], [
        BridgeTypes.ChainStructOutput
    ], "view">;
    gasConsumed: TypedContractMethod<[
        chainId: BigNumberish,
        arg1: BigNumberish
    ], [
        bigint
    ], "view">;
    gasPrices: TypedContractMethod<[chainId: BigNumberish], [bigint], "view">;
    getGasConsumed: TypedContractMethod<[
        chainId: BigNumberish,
        step: BigNumberish
    ], [
        bigint
    ], "view">;
    getInHashToIndex: TypedContractMethod<[txHash: BytesLike], [bigint], "view">;
    getIndexIn: TypedContractMethod<[], [bigint], "view">;
    getIndexOut: TypedContractMethod<[], [bigint], "view">;
    getNativeCoin: TypedContractMethod<[], [string], "view">;
    getOutHashToIndex: TypedContractMethod<[txHash: BytesLike], [bigint], "view">;
    getRoleAdmin: TypedContractMethod<[role: BytesLike], [string], "view">;
    getToken: TypedContractMethod<[
        symbol: string
    ], [
        BridgeTypes.TokenStructOutput
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
    inHashToIndex: TypedContractMethod<[txHash: BytesLike], [bigint], "view">;
    inTransactions: TypedContractMethod<[index: BigNumberish], [bigint], "view">;
    incommingTransactions: TypedContractMethod<[
        index: BigNumberish
    ], [
        bigint
    ], "view">;
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
    outgoingTransactions: TypedContractMethod<[
        index: BigNumberish
    ], [
        BridgeTypes.OutStoreStructOutput
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
    saveIncomingTx: TypedContractMethod<[
        ccmHash: BytesLike
    ], [
        void
    ], "nonpayable">;
    saveOutgoingTx: TypedContractMethod<[
        txHash: BytesLike,
        params: BridgeTypes.SendParamsStruct
    ], [
        void
    ], "nonpayable">;
    strategies: TypedContractMethod<[
        chainId: BigNumberish,
        fromToken: string,
        toToken: string
    ], [
        BridgeTypes.TokenStrategyStructOutput
    ], "view">;
    supportsInterface: TypedContractMethod<[
        interfaceId: BytesLike
    ], [
        boolean
    ], "view">;
    unpause: TypedContractMethod<[], [void], "nonpayable">;
    updateChain: TypedContractMethod<[
        chainId: BigNumberish,
        name: string,
        bridge: string,
        currency: string
    ], [
        void
    ], "nonpayable">;
    updateGasPrice: TypedContractMethod<[
        chainId: BigNumberish,
        gasPrice: BigNumberish
    ], [
        void
    ], "nonpayable">;
    updateGasUsed: TypedContractMethod<[
        chainId: BigNumberish,
        step: BigNumberish,
        consumesGas: BigNumberish
    ], [
        void
    ], "nonpayable">;
    updateToken: TypedContractMethod<[
        token: AddressLike,
        priceFeed: AddressLike,
        decimals: BigNumberish,
        symbol: string
    ], [
        void
    ], "nonpayable">;
    updateTokenStrategy: TypedContractMethod<[
        otherChainId: BigNumberish,
        fromToken: string,
        toToken: string,
        outgoing: BigNumberish[],
        incoming: BigNumberish[],
        foreign: BigNumberish[]
    ], [
        void
    ], "nonpayable">;
    updateTransaction: TypedContractMethod<[
        txHash: BytesLike,
        isSucceess: boolean,
        message: string
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
    getFunction(nameOrSignature: "chains"): TypedContractMethod<[
        chainId: BigNumberish
    ], [
        BridgeTypes.ChainStructOutput
    ], "view">;
    getFunction(nameOrSignature: "gasConsumed"): TypedContractMethod<[
        chainId: BigNumberish,
        arg1: BigNumberish
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "gasPrices"): TypedContractMethod<[chainId: BigNumberish], [bigint], "view">;
    getFunction(nameOrSignature: "getGasConsumed"): TypedContractMethod<[
        chainId: BigNumberish,
        step: BigNumberish
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "getInHashToIndex"): TypedContractMethod<[txHash: BytesLike], [bigint], "view">;
    getFunction(nameOrSignature: "getIndexIn"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "getIndexOut"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "getNativeCoin"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "getOutHashToIndex"): TypedContractMethod<[txHash: BytesLike], [bigint], "view">;
    getFunction(nameOrSignature: "getRoleAdmin"): TypedContractMethod<[role: BytesLike], [string], "view">;
    getFunction(nameOrSignature: "getToken"): TypedContractMethod<[
        symbol: string
    ], [
        BridgeTypes.TokenStructOutput
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
    getFunction(nameOrSignature: "inHashToIndex"): TypedContractMethod<[txHash: BytesLike], [bigint], "view">;
    getFunction(nameOrSignature: "inTransactions"): TypedContractMethod<[index: BigNumberish], [bigint], "view">;
    getFunction(nameOrSignature: "incommingTransactions"): TypedContractMethod<[index: BigNumberish], [bigint], "view">;
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
    getFunction(nameOrSignature: "outgoingTransactions"): TypedContractMethod<[
        index: BigNumberish
    ], [
        BridgeTypes.OutStoreStructOutput
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
    getFunction(nameOrSignature: "saveIncomingTx"): TypedContractMethod<[ccmHash: BytesLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "saveOutgoingTx"): TypedContractMethod<[
        txHash: BytesLike,
        params: BridgeTypes.SendParamsStruct
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "strategies"): TypedContractMethod<[
        chainId: BigNumberish,
        fromToken: string,
        toToken: string
    ], [
        BridgeTypes.TokenStrategyStructOutput
    ], "view">;
    getFunction(nameOrSignature: "supportsInterface"): TypedContractMethod<[interfaceId: BytesLike], [boolean], "view">;
    getFunction(nameOrSignature: "unpause"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "updateChain"): TypedContractMethod<[
        chainId: BigNumberish,
        name: string,
        bridge: string,
        currency: string
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "updateGasPrice"): TypedContractMethod<[
        chainId: BigNumberish,
        gasPrice: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "updateGasUsed"): TypedContractMethod<[
        chainId: BigNumberish,
        step: BigNumberish,
        consumesGas: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "updateToken"): TypedContractMethod<[
        token: AddressLike,
        priceFeed: AddressLike,
        decimals: BigNumberish,
        symbol: string
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "updateTokenStrategy"): TypedContractMethod<[
        otherChainId: BigNumberish,
        fromToken: string,
        toToken: string,
        outgoing: BigNumberish[],
        incoming: BigNumberish[],
        foreign: BigNumberish[]
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "updateTransaction"): TypedContractMethod<[
        txHash: BytesLike,
        isSucceess: boolean,
        message: string
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "upgradeToAndCall"): TypedContractMethod<[
        newImplementation: AddressLike,
        data: BytesLike
    ], [
        void
    ], "payable">;
    getEvent(key: "ChainUpdated"): TypedContractEvent<ChainUpdatedEvent.InputTuple, ChainUpdatedEvent.OutputTuple, ChainUpdatedEvent.OutputObject>;
    getEvent(key: "GasPriceUpdated"): TypedContractEvent<GasPriceUpdatedEvent.InputTuple, GasPriceUpdatedEvent.OutputTuple, GasPriceUpdatedEvent.OutputObject>;
    getEvent(key: "Initialized"): TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
    getEvent(key: "Paused"): TypedContractEvent<PausedEvent.InputTuple, PausedEvent.OutputTuple, PausedEvent.OutputObject>;
    getEvent(key: "RoleAdminChanged"): TypedContractEvent<RoleAdminChangedEvent.InputTuple, RoleAdminChangedEvent.OutputTuple, RoleAdminChangedEvent.OutputObject>;
    getEvent(key: "RoleGranted"): TypedContractEvent<RoleGrantedEvent.InputTuple, RoleGrantedEvent.OutputTuple, RoleGrantedEvent.OutputObject>;
    getEvent(key: "RoleRevoked"): TypedContractEvent<RoleRevokedEvent.InputTuple, RoleRevokedEvent.OutputTuple, RoleRevokedEvent.OutputObject>;
    getEvent(key: "TokenStrategyUpdated"): TypedContractEvent<TokenStrategyUpdatedEvent.InputTuple, TokenStrategyUpdatedEvent.OutputTuple, TokenStrategyUpdatedEvent.OutputObject>;
    getEvent(key: "TokenUpdated"): TypedContractEvent<TokenUpdatedEvent.InputTuple, TokenUpdatedEvent.OutputTuple, TokenUpdatedEvent.OutputObject>;
    getEvent(key: "Unpaused"): TypedContractEvent<UnpausedEvent.InputTuple, UnpausedEvent.OutputTuple, UnpausedEvent.OutputObject>;
    getEvent(key: "Upgraded"): TypedContractEvent<UpgradedEvent.InputTuple, UpgradedEvent.OutputTuple, UpgradedEvent.OutputObject>;
    getEvent(key: "UsedGasUpdated"): TypedContractEvent<UsedGasUpdatedEvent.InputTuple, UsedGasUpdatedEvent.OutputTuple, UsedGasUpdatedEvent.OutputObject>;
    filters: {
        "ChainUpdated(uint128,string,string,string)": TypedContractEvent<ChainUpdatedEvent.InputTuple, ChainUpdatedEvent.OutputTuple, ChainUpdatedEvent.OutputObject>;
        ChainUpdated: TypedContractEvent<ChainUpdatedEvent.InputTuple, ChainUpdatedEvent.OutputTuple, ChainUpdatedEvent.OutputObject>;
        "GasPriceUpdated(uint128,uint256)": TypedContractEvent<GasPriceUpdatedEvent.InputTuple, GasPriceUpdatedEvent.OutputTuple, GasPriceUpdatedEvent.OutputObject>;
        GasPriceUpdated: TypedContractEvent<GasPriceUpdatedEvent.InputTuple, GasPriceUpdatedEvent.OutputTuple, GasPriceUpdatedEvent.OutputObject>;
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
        "TokenStrategyUpdated(uint128,string,string)": TypedContractEvent<TokenStrategyUpdatedEvent.InputTuple, TokenStrategyUpdatedEvent.OutputTuple, TokenStrategyUpdatedEvent.OutputObject>;
        TokenStrategyUpdated: TypedContractEvent<TokenStrategyUpdatedEvent.InputTuple, TokenStrategyUpdatedEvent.OutputTuple, TokenStrategyUpdatedEvent.OutputObject>;
        "TokenUpdated(address,address,string)": TypedContractEvent<TokenUpdatedEvent.InputTuple, TokenUpdatedEvent.OutputTuple, TokenUpdatedEvent.OutputObject>;
        TokenUpdated: TypedContractEvent<TokenUpdatedEvent.InputTuple, TokenUpdatedEvent.OutputTuple, TokenUpdatedEvent.OutputObject>;
        "Unpaused(address)": TypedContractEvent<UnpausedEvent.InputTuple, UnpausedEvent.OutputTuple, UnpausedEvent.OutputObject>;
        Unpaused: TypedContractEvent<UnpausedEvent.InputTuple, UnpausedEvent.OutputTuple, UnpausedEvent.OutputObject>;
        "Upgraded(address)": TypedContractEvent<UpgradedEvent.InputTuple, UpgradedEvent.OutputTuple, UpgradedEvent.OutputObject>;
        Upgraded: TypedContractEvent<UpgradedEvent.InputTuple, UpgradedEvent.OutputTuple, UpgradedEvent.OutputObject>;
        "UsedGasUpdated(uint128,uint8,uint256)": TypedContractEvent<UsedGasUpdatedEvent.InputTuple, UsedGasUpdatedEvent.OutputTuple, UsedGasUpdatedEvent.OutputObject>;
        UsedGasUpdated: TypedContractEvent<UsedGasUpdatedEvent.InputTuple, UsedGasUpdatedEvent.OutputTuple, UsedGasUpdatedEvent.OutputObject>;
    };
}
