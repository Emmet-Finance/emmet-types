import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../../common";
export declare namespace EmmetTokenStrategy {
    type CrossChainStrategyStruct = {
        localSteps: BigNumberish[];
        foreignSteps: BigNumberish[];
    };
    type CrossChainStrategyStructOutput = [
        localSteps: bigint[],
        foreignSteps: bigint[]
    ] & {
        localSteps: bigint[];
        foreignSteps: bigint[];
    };
}
export declare namespace IEmmetDataTypes {
    type STokenStruct = {
        symbol: BytesLike;
        addr: AddressLike;
        swap: AddressLike;
        decimals: BigNumberish;
        fee: BigNumberish;
        feeDecimals: BigNumberish;
    };
    type STokenStructOutput = [
        symbol: string,
        addr: string,
        swap: string,
        decimals: bigint,
        fee: bigint,
        feeDecimals: bigint
    ] & {
        symbol: string;
        addr: string;
        swap: string;
        decimals: bigint;
        fee: bigint;
        feeDecimals: bigint;
    };
}
export interface EmmetDataInterface extends Interface {
    getFunction(nameOrSignature: "BRIDGE_ROLE" | "DEFAULT_ADMIN_ROLE" | "MANAGER_ROLE" | "deleteChain" | "deleteCrossChainTokenStrategy" | "deleteIncomingTokenStrategy" | "deletePriceFeed" | "deleteToken" | "gasFees" | "getCCTPChain" | "getChain" | "getCrossChainTokenStrategy" | "getForeignFeeCompensation" | "getIncomingStrategy" | "getPriceDecimals" | "getProtocolFee" | "getRoleAdmin" | "getToken" | "getTokenPrice" | "grantRole" | "hasRole" | "incrementIndex" | "nativeCoin" | "protocolFee" | "renounceRole" | "revokeRole" | "supportsInterface" | "txIndex" | "updateCctpChain" | "updateChain" | "updateCrossChainTokenStrategy" | "updateGasFeesAddress" | "updateIncomingTokenStrategy" | "updatePriceFeed" | "updateProtocolFee" | "updateToken"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "CCTPChainDeleted" | "CctpChainUpdated" | "ChainDeleted" | "ChainUpdate" | "CrossChainPathUpdate" | "IncommingPathUpdate" | "PriceFeedUpdate" | "RoleAdminChanged" | "RoleGranted" | "RoleRevoked" | "TokenDeleted" | "TokenUpdate" | "UpdatedGasFeesAddress" | "UpdatedProtocolFee"): EventFragment;
    encodeFunctionData(functionFragment: "BRIDGE_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "DEFAULT_ADMIN_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "MANAGER_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "deleteChain", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "deleteCrossChainTokenStrategy", values: [BigNumberish, string, string]): string;
    encodeFunctionData(functionFragment: "deleteIncomingTokenStrategy", values: [string, string]): string;
    encodeFunctionData(functionFragment: "deletePriceFeed", values: [string]): string;
    encodeFunctionData(functionFragment: "deleteToken", values: [string]): string;
    encodeFunctionData(functionFragment: "gasFees", values?: undefined): string;
    encodeFunctionData(functionFragment: "getCCTPChain", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getChain", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getCrossChainTokenStrategy", values: [BigNumberish, string, string]): string;
    encodeFunctionData(functionFragment: "getForeignFeeCompensation", values: [BigNumberish, string, string]): string;
    encodeFunctionData(functionFragment: "getIncomingStrategy", values: [string, string]): string;
    encodeFunctionData(functionFragment: "getPriceDecimals", values: [string]): string;
    encodeFunctionData(functionFragment: "getProtocolFee", values?: undefined): string;
    encodeFunctionData(functionFragment: "getRoleAdmin", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getToken", values: [string]): string;
    encodeFunctionData(functionFragment: "getTokenPrice", values: [string]): string;
    encodeFunctionData(functionFragment: "grantRole", values: [BytesLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "hasRole", values: [BytesLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "incrementIndex", values?: undefined): string;
    encodeFunctionData(functionFragment: "nativeCoin", values?: undefined): string;
    encodeFunctionData(functionFragment: "protocolFee", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceRole", values: [BytesLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "revokeRole", values: [BytesLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "txIndex", values?: undefined): string;
    encodeFunctionData(functionFragment: "updateCctpChain", values: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "updateChain", values: [BigNumberish, BigNumberish, string, string]): string;
    encodeFunctionData(functionFragment: "updateCrossChainTokenStrategy", values: [BigNumberish, string, string, BigNumberish[], BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "updateGasFeesAddress", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "updateIncomingTokenStrategy", values: [string, string, BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "updatePriceFeed", values: [string, AddressLike]): string;
    encodeFunctionData(functionFragment: "updateProtocolFee", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "updateToken", values: [
        AddressLike,
        AddressLike,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        string
    ]): string;
    decodeFunctionResult(functionFragment: "BRIDGE_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "DEFAULT_ADMIN_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MANAGER_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deleteChain", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deleteCrossChainTokenStrategy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deleteIncomingTokenStrategy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deletePriceFeed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deleteToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "gasFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCCTPChain", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getChain", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCrossChainTokenStrategy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getForeignFeeCompensation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getIncomingStrategy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPriceDecimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getProtocolFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTokenPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "incrementIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nativeCoin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "protocolFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "txIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateCctpChain", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateChain", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateCrossChainTokenStrategy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateGasFeesAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateIncomingTokenStrategy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updatePriceFeed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateProtocolFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateToken", data: BytesLike): Result;
}
export declare namespace CCTPChainDeletedEvent {
    type InputTuple = [chainId: BigNumberish];
    type OutputTuple = [chainId: bigint];
    interface OutputObject {
        chainId: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace CctpChainUpdatedEvent {
    type InputTuple = [
        chainId: BigNumberish,
        cctpDestId: BigNumberish,
        awaitMinutes: BigNumberish,
        awaitSeconds: BigNumberish,
        numberOfAwaitedBlocks: BigNumberish
    ];
    type OutputTuple = [
        chainId: bigint,
        cctpDestId: bigint,
        awaitMinutes: bigint,
        awaitSeconds: bigint,
        numberOfAwaitedBlocks: bigint
    ];
    interface OutputObject {
        chainId: bigint;
        cctpDestId: bigint;
        awaitMinutes: bigint;
        awaitSeconds: bigint;
        numberOfAwaitedBlocks: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace ChainDeletedEvent {
    type InputTuple = [chainId: BigNumberish];
    type OutputTuple = [chainId: bigint];
    interface OutputObject {
        chainId: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace ChainUpdateEvent {
    type InputTuple = [
        chainId: BigNumberish,
        cctpDestId: BigNumberish,
        name: string,
        token: string
    ];
    type OutputTuple = [
        chainId: bigint,
        cctpDestId: bigint,
        name: string,
        token: string
    ];
    interface OutputObject {
        chainId: bigint;
        cctpDestId: bigint;
        name: string;
        token: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace CrossChainPathUpdateEvent {
    type InputTuple = [
        toChainId: BigNumberish,
        fromToken: string,
        toToken: string,
        oldStrategies: EmmetTokenStrategy.CrossChainStrategyStruct,
        newStrategies: EmmetTokenStrategy.CrossChainStrategyStruct,
        operation: string
    ];
    type OutputTuple = [
        toChainId: bigint,
        fromToken: string,
        toToken: string,
        oldStrategies: EmmetTokenStrategy.CrossChainStrategyStructOutput,
        newStrategies: EmmetTokenStrategy.CrossChainStrategyStructOutput,
        operation: string
    ];
    interface OutputObject {
        toChainId: bigint;
        fromToken: string;
        toToken: string;
        oldStrategies: EmmetTokenStrategy.CrossChainStrategyStructOutput;
        newStrategies: EmmetTokenStrategy.CrossChainStrategyStructOutput;
        operation: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace IncommingPathUpdateEvent {
    type InputTuple = [
        fromToken: string,
        toToken: string,
        oldLocalSteps: BigNumberish[],
        newLocalSteps: BigNumberish[],
        operation: string
    ];
    type OutputTuple = [
        fromToken: string,
        toToken: string,
        oldLocalSteps: bigint[],
        newLocalSteps: bigint[],
        operation: string
    ];
    interface OutputObject {
        fromToken: string;
        toToken: string;
        oldLocalSteps: bigint[];
        newLocalSteps: bigint[];
        operation: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace PriceFeedUpdateEvent {
    type InputTuple = [
        symbol: string,
        oldAddress: AddressLike,
        newAddress: AddressLike,
        operation: string
    ];
    type OutputTuple = [
        symbol: string,
        oldAddress: string,
        newAddress: string,
        operation: string
    ];
    interface OutputObject {
        symbol: string;
        oldAddress: string;
        newAddress: string;
        operation: string;
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
export declare namespace TokenDeletedEvent {
    type InputTuple = [symbol: string];
    type OutputTuple = [symbol: string];
    interface OutputObject {
        symbol: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace TokenUpdateEvent {
    type InputTuple = [
        addr: AddressLike,
        decimals: BigNumberish,
        symbol: string
    ];
    type OutputTuple = [addr: string, decimals: bigint, symbol: string];
    interface OutputObject {
        addr: string;
        decimals: bigint;
        symbol: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace UpdatedGasFeesAddressEvent {
    type InputTuple = [oldGasFees: AddressLike, newGasFees: AddressLike];
    type OutputTuple = [oldGasFees: string, newGasFees: string];
    interface OutputObject {
        oldGasFees: string;
        newGasFees: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace UpdatedProtocolFeeEvent {
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
export interface EmmetData extends BaseContract {
    connect(runner?: ContractRunner | null): EmmetData;
    waitForDeployment(): Promise<this>;
    interface: EmmetDataInterface;
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
    MANAGER_ROLE: TypedContractMethod<[], [string], "view">;
    deleteChain: TypedContractMethod<[
        chainId_: BigNumberish
    ], [
        void
    ], "nonpayable">;
    deleteCrossChainTokenStrategy: TypedContractMethod<[
        toChainId: BigNumberish,
        fromToken: string,
        toToken: string
    ], [
        void
    ], "nonpayable">;
    deleteIncomingTokenStrategy: TypedContractMethod<[
        fromToken: string,
        toToken: string
    ], [
        void
    ], "nonpayable">;
    deletePriceFeed: TypedContractMethod<[symbol: string], [void], "nonpayable">;
    deleteToken: TypedContractMethod<[symbol_: string], [void], "nonpayable">;
    gasFees: TypedContractMethod<[], [string], "view">;
    getCCTPChain: TypedContractMethod<[
        chainId_: BigNumberish
    ], [
        [
            bigint,
            bigint,
            bigint,
            bigint
        ] & {
            cctpDestId: bigint;
            awaitMinutes: bigint;
            awaitSeconds: bigint;
            numberOfAwaitedBlocks: bigint;
        }
    ], "view">;
    getChain: TypedContractMethod<[
        chainId_: BigNumberish
    ], [
        [string, string] & {
            name: string;
            token: string;
        }
    ], "view">;
    getCrossChainTokenStrategy: TypedContractMethod<[
        toChainId_: BigNumberish,
        fromToken_: string,
        toToken_: string
    ], [
        EmmetTokenStrategy.CrossChainStrategyStructOutput
    ], "view">;
    getForeignFeeCompensation: TypedContractMethod<[
        toChainId_: BigNumberish,
        fromToken_: string,
        toToken_: string
    ], [
        bigint
    ], "view">;
    getIncomingStrategy: TypedContractMethod<[
        fromToken: string,
        toToken: string
    ], [
        bigint[]
    ], "view">;
    getPriceDecimals: TypedContractMethod<[symbol_: string], [bigint], "view">;
    getProtocolFee: TypedContractMethod<[], [bigint], "view">;
    getRoleAdmin: TypedContractMethod<[role: BytesLike], [string], "view">;
    getToken: TypedContractMethod<[
        symbol_: string
    ], [
        IEmmetDataTypes.STokenStructOutput
    ], "view">;
    getTokenPrice: TypedContractMethod<[symbol_: string], [bigint], "view">;
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
    incrementIndex: TypedContractMethod<[], [bigint], "nonpayable">;
    nativeCoin: TypedContractMethod<[], [string], "view">;
    protocolFee: TypedContractMethod<[
    ], [
        [bigint, bigint] & {
            decimals: bigint;
            usdEquivalent: bigint;
        }
    ], "view">;
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
    txIndex: TypedContractMethod<[], [bigint], "view">;
    updateCctpChain: TypedContractMethod<[
        chainId_: BigNumberish,
        cctpDestId_: BigNumberish,
        awaitMinutes_: BigNumberish,
        awaitSeconds_: BigNumberish,
        numberOfAwaitedBlocks_: BigNumberish
    ], [
        void
    ], "nonpayable">;
    updateChain: TypedContractMethod<[
        chainId_: BigNumberish,
        cctpDestId_: BigNumberish,
        name_: string,
        token_: string
    ], [
        void
    ], "nonpayable">;
    updateCrossChainTokenStrategy: TypedContractMethod<[
        toChainId: BigNumberish,
        fromToken: string,
        toToken: string,
        localSteps: BigNumberish[],
        foreignSteps: BigNumberish[]
    ], [
        void
    ], "nonpayable">;
    updateGasFeesAddress: TypedContractMethod<[
        newGasFees_: AddressLike
    ], [
        void
    ], "nonpayable">;
    updateIncomingTokenStrategy: TypedContractMethod<[
        fromToken: string,
        toToken: string,
        localSteps: BigNumberish[]
    ], [
        void
    ], "nonpayable">;
    updatePriceFeed: TypedContractMethod<[
        symbol: string,
        priceFeed: AddressLike
    ], [
        void
    ], "nonpayable">;
    updateProtocolFee: TypedContractMethod<[
        newFee_: BigNumberish
    ], [
        void
    ], "nonpayable">;
    updateToken: TypedContractMethod<[
        addr_: AddressLike,
        swap_: AddressLike,
        decimals_: BigNumberish,
        fee_: BigNumberish,
        feeDecimals_: BigNumberish,
        symbol_: string
    ], [
        void
    ], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "BRIDGE_ROLE"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "DEFAULT_ADMIN_ROLE"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "MANAGER_ROLE"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "deleteChain"): TypedContractMethod<[chainId_: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "deleteCrossChainTokenStrategy"): TypedContractMethod<[
        toChainId: BigNumberish,
        fromToken: string,
        toToken: string
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "deleteIncomingTokenStrategy"): TypedContractMethod<[
        fromToken: string,
        toToken: string
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "deletePriceFeed"): TypedContractMethod<[symbol: string], [void], "nonpayable">;
    getFunction(nameOrSignature: "deleteToken"): TypedContractMethod<[symbol_: string], [void], "nonpayable">;
    getFunction(nameOrSignature: "gasFees"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "getCCTPChain"): TypedContractMethod<[
        chainId_: BigNumberish
    ], [
        [
            bigint,
            bigint,
            bigint,
            bigint
        ] & {
            cctpDestId: bigint;
            awaitMinutes: bigint;
            awaitSeconds: bigint;
            numberOfAwaitedBlocks: bigint;
        }
    ], "view">;
    getFunction(nameOrSignature: "getChain"): TypedContractMethod<[
        chainId_: BigNumberish
    ], [
        [string, string] & {
            name: string;
            token: string;
        }
    ], "view">;
    getFunction(nameOrSignature: "getCrossChainTokenStrategy"): TypedContractMethod<[
        toChainId_: BigNumberish,
        fromToken_: string,
        toToken_: string
    ], [
        EmmetTokenStrategy.CrossChainStrategyStructOutput
    ], "view">;
    getFunction(nameOrSignature: "getForeignFeeCompensation"): TypedContractMethod<[
        toChainId_: BigNumberish,
        fromToken_: string,
        toToken_: string
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "getIncomingStrategy"): TypedContractMethod<[
        fromToken: string,
        toToken: string
    ], [
        bigint[]
    ], "view">;
    getFunction(nameOrSignature: "getPriceDecimals"): TypedContractMethod<[symbol_: string], [bigint], "view">;
    getFunction(nameOrSignature: "getProtocolFee"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "getRoleAdmin"): TypedContractMethod<[role: BytesLike], [string], "view">;
    getFunction(nameOrSignature: "getToken"): TypedContractMethod<[
        symbol_: string
    ], [
        IEmmetDataTypes.STokenStructOutput
    ], "view">;
    getFunction(nameOrSignature: "getTokenPrice"): TypedContractMethod<[symbol_: string], [bigint], "view">;
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
    getFunction(nameOrSignature: "incrementIndex"): TypedContractMethod<[], [bigint], "nonpayable">;
    getFunction(nameOrSignature: "nativeCoin"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "protocolFee"): TypedContractMethod<[
    ], [
        [bigint, bigint] & {
            decimals: bigint;
            usdEquivalent: bigint;
        }
    ], "view">;
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
    getFunction(nameOrSignature: "txIndex"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "updateCctpChain"): TypedContractMethod<[
        chainId_: BigNumberish,
        cctpDestId_: BigNumberish,
        awaitMinutes_: BigNumberish,
        awaitSeconds_: BigNumberish,
        numberOfAwaitedBlocks_: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "updateChain"): TypedContractMethod<[
        chainId_: BigNumberish,
        cctpDestId_: BigNumberish,
        name_: string,
        token_: string
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "updateCrossChainTokenStrategy"): TypedContractMethod<[
        toChainId: BigNumberish,
        fromToken: string,
        toToken: string,
        localSteps: BigNumberish[],
        foreignSteps: BigNumberish[]
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "updateGasFeesAddress"): TypedContractMethod<[newGasFees_: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "updateIncomingTokenStrategy"): TypedContractMethod<[
        fromToken: string,
        toToken: string,
        localSteps: BigNumberish[]
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "updatePriceFeed"): TypedContractMethod<[
        symbol: string,
        priceFeed: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "updateProtocolFee"): TypedContractMethod<[newFee_: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "updateToken"): TypedContractMethod<[
        addr_: AddressLike,
        swap_: AddressLike,
        decimals_: BigNumberish,
        fee_: BigNumberish,
        feeDecimals_: BigNumberish,
        symbol_: string
    ], [
        void
    ], "nonpayable">;
    getEvent(key: "CCTPChainDeleted"): TypedContractEvent<CCTPChainDeletedEvent.InputTuple, CCTPChainDeletedEvent.OutputTuple, CCTPChainDeletedEvent.OutputObject>;
    getEvent(key: "CctpChainUpdated"): TypedContractEvent<CctpChainUpdatedEvent.InputTuple, CctpChainUpdatedEvent.OutputTuple, CctpChainUpdatedEvent.OutputObject>;
    getEvent(key: "ChainDeleted"): TypedContractEvent<ChainDeletedEvent.InputTuple, ChainDeletedEvent.OutputTuple, ChainDeletedEvent.OutputObject>;
    getEvent(key: "ChainUpdate"): TypedContractEvent<ChainUpdateEvent.InputTuple, ChainUpdateEvent.OutputTuple, ChainUpdateEvent.OutputObject>;
    getEvent(key: "CrossChainPathUpdate"): TypedContractEvent<CrossChainPathUpdateEvent.InputTuple, CrossChainPathUpdateEvent.OutputTuple, CrossChainPathUpdateEvent.OutputObject>;
    getEvent(key: "IncommingPathUpdate"): TypedContractEvent<IncommingPathUpdateEvent.InputTuple, IncommingPathUpdateEvent.OutputTuple, IncommingPathUpdateEvent.OutputObject>;
    getEvent(key: "PriceFeedUpdate"): TypedContractEvent<PriceFeedUpdateEvent.InputTuple, PriceFeedUpdateEvent.OutputTuple, PriceFeedUpdateEvent.OutputObject>;
    getEvent(key: "RoleAdminChanged"): TypedContractEvent<RoleAdminChangedEvent.InputTuple, RoleAdminChangedEvent.OutputTuple, RoleAdminChangedEvent.OutputObject>;
    getEvent(key: "RoleGranted"): TypedContractEvent<RoleGrantedEvent.InputTuple, RoleGrantedEvent.OutputTuple, RoleGrantedEvent.OutputObject>;
    getEvent(key: "RoleRevoked"): TypedContractEvent<RoleRevokedEvent.InputTuple, RoleRevokedEvent.OutputTuple, RoleRevokedEvent.OutputObject>;
    getEvent(key: "TokenDeleted"): TypedContractEvent<TokenDeletedEvent.InputTuple, TokenDeletedEvent.OutputTuple, TokenDeletedEvent.OutputObject>;
    getEvent(key: "TokenUpdate"): TypedContractEvent<TokenUpdateEvent.InputTuple, TokenUpdateEvent.OutputTuple, TokenUpdateEvent.OutputObject>;
    getEvent(key: "UpdatedGasFeesAddress"): TypedContractEvent<UpdatedGasFeesAddressEvent.InputTuple, UpdatedGasFeesAddressEvent.OutputTuple, UpdatedGasFeesAddressEvent.OutputObject>;
    getEvent(key: "UpdatedProtocolFee"): TypedContractEvent<UpdatedProtocolFeeEvent.InputTuple, UpdatedProtocolFeeEvent.OutputTuple, UpdatedProtocolFeeEvent.OutputObject>;
    filters: {
        "CCTPChainDeleted(uint128)": TypedContractEvent<CCTPChainDeletedEvent.InputTuple, CCTPChainDeletedEvent.OutputTuple, CCTPChainDeletedEvent.OutputObject>;
        CCTPChainDeleted: TypedContractEvent<CCTPChainDeletedEvent.InputTuple, CCTPChainDeletedEvent.OutputTuple, CCTPChainDeletedEvent.OutputObject>;
        "CctpChainUpdated(uint128,uint128,uint8,uint8,uint8)": TypedContractEvent<CctpChainUpdatedEvent.InputTuple, CctpChainUpdatedEvent.OutputTuple, CctpChainUpdatedEvent.OutputObject>;
        CctpChainUpdated: TypedContractEvent<CctpChainUpdatedEvent.InputTuple, CctpChainUpdatedEvent.OutputTuple, CctpChainUpdatedEvent.OutputObject>;
        "ChainDeleted(uint128)": TypedContractEvent<ChainDeletedEvent.InputTuple, ChainDeletedEvent.OutputTuple, ChainDeletedEvent.OutputObject>;
        ChainDeleted: TypedContractEvent<ChainDeletedEvent.InputTuple, ChainDeletedEvent.OutputTuple, ChainDeletedEvent.OutputObject>;
        "ChainUpdate(uint128,uint128,string,string)": TypedContractEvent<ChainUpdateEvent.InputTuple, ChainUpdateEvent.OutputTuple, ChainUpdateEvent.OutputObject>;
        ChainUpdate: TypedContractEvent<ChainUpdateEvent.InputTuple, ChainUpdateEvent.OutputTuple, ChainUpdateEvent.OutputObject>;
        "CrossChainPathUpdate(uint256,string,string,tuple,tuple,string)": TypedContractEvent<CrossChainPathUpdateEvent.InputTuple, CrossChainPathUpdateEvent.OutputTuple, CrossChainPathUpdateEvent.OutputObject>;
        CrossChainPathUpdate: TypedContractEvent<CrossChainPathUpdateEvent.InputTuple, CrossChainPathUpdateEvent.OutputTuple, CrossChainPathUpdateEvent.OutputObject>;
        "IncommingPathUpdate(string,string,uint8[],uint8[],string)": TypedContractEvent<IncommingPathUpdateEvent.InputTuple, IncommingPathUpdateEvent.OutputTuple, IncommingPathUpdateEvent.OutputObject>;
        IncommingPathUpdate: TypedContractEvent<IncommingPathUpdateEvent.InputTuple, IncommingPathUpdateEvent.OutputTuple, IncommingPathUpdateEvent.OutputObject>;
        "PriceFeedUpdate(string,address,address,string)": TypedContractEvent<PriceFeedUpdateEvent.InputTuple, PriceFeedUpdateEvent.OutputTuple, PriceFeedUpdateEvent.OutputObject>;
        PriceFeedUpdate: TypedContractEvent<PriceFeedUpdateEvent.InputTuple, PriceFeedUpdateEvent.OutputTuple, PriceFeedUpdateEvent.OutputObject>;
        "RoleAdminChanged(bytes32,bytes32,bytes32)": TypedContractEvent<RoleAdminChangedEvent.InputTuple, RoleAdminChangedEvent.OutputTuple, RoleAdminChangedEvent.OutputObject>;
        RoleAdminChanged: TypedContractEvent<RoleAdminChangedEvent.InputTuple, RoleAdminChangedEvent.OutputTuple, RoleAdminChangedEvent.OutputObject>;
        "RoleGranted(bytes32,address,address)": TypedContractEvent<RoleGrantedEvent.InputTuple, RoleGrantedEvent.OutputTuple, RoleGrantedEvent.OutputObject>;
        RoleGranted: TypedContractEvent<RoleGrantedEvent.InputTuple, RoleGrantedEvent.OutputTuple, RoleGrantedEvent.OutputObject>;
        "RoleRevoked(bytes32,address,address)": TypedContractEvent<RoleRevokedEvent.InputTuple, RoleRevokedEvent.OutputTuple, RoleRevokedEvent.OutputObject>;
        RoleRevoked: TypedContractEvent<RoleRevokedEvent.InputTuple, RoleRevokedEvent.OutputTuple, RoleRevokedEvent.OutputObject>;
        "TokenDeleted(string)": TypedContractEvent<TokenDeletedEvent.InputTuple, TokenDeletedEvent.OutputTuple, TokenDeletedEvent.OutputObject>;
        TokenDeleted: TypedContractEvent<TokenDeletedEvent.InputTuple, TokenDeletedEvent.OutputTuple, TokenDeletedEvent.OutputObject>;
        "TokenUpdate(address,uint8,string)": TypedContractEvent<TokenUpdateEvent.InputTuple, TokenUpdateEvent.OutputTuple, TokenUpdateEvent.OutputObject>;
        TokenUpdate: TypedContractEvent<TokenUpdateEvent.InputTuple, TokenUpdateEvent.OutputTuple, TokenUpdateEvent.OutputObject>;
        "UpdatedGasFeesAddress(address,address)": TypedContractEvent<UpdatedGasFeesAddressEvent.InputTuple, UpdatedGasFeesAddressEvent.OutputTuple, UpdatedGasFeesAddressEvent.OutputObject>;
        UpdatedGasFeesAddress: TypedContractEvent<UpdatedGasFeesAddressEvent.InputTuple, UpdatedGasFeesAddressEvent.OutputTuple, UpdatedGasFeesAddressEvent.OutputObject>;
        "UpdatedProtocolFee(uint128,uint128)": TypedContractEvent<UpdatedProtocolFeeEvent.InputTuple, UpdatedProtocolFeeEvent.OutputTuple, UpdatedProtocolFeeEvent.OutputObject>;
        UpdatedProtocolFee: TypedContractEvent<UpdatedProtocolFeeEvent.InputTuple, UpdatedProtocolFeeEvent.OutputTuple, UpdatedProtocolFeeEvent.OutputObject>;
    };
}
