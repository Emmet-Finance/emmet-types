import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../../common";
export interface IEmmetDataAdminInterface extends Interface {
    getFunction(nameOrSignature: "deleteChain" | "deleteCrossChainTokenStrategy" | "deleteIncomingTokenStrategy" | "deletePriceFeed" | "deleteToken" | "incrementIndex" | "updateCctpChain" | "updateChain" | "updateCrossChainTokenStrategy" | "updateGasFeesAddress" | "updateIncomingTokenStrategy" | "updatePriceFeed" | "updateProtocolFee" | "updateToken"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "CCTPChainDeleted" | "CctpChainUpdated" | "ChainDeleted" | "ChainUpdate" | "TokenDeleted" | "TokenUpdate" | "UpdatedGasFeesAddress" | "UpdatedProtocolFee"): EventFragment;
    encodeFunctionData(functionFragment: "deleteChain", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "deleteCrossChainTokenStrategy", values: [BigNumberish, string, string]): string;
    encodeFunctionData(functionFragment: "deleteIncomingTokenStrategy", values: [string, string]): string;
    encodeFunctionData(functionFragment: "deletePriceFeed", values: [string]): string;
    encodeFunctionData(functionFragment: "deleteToken", values: [string]): string;
    encodeFunctionData(functionFragment: "incrementIndex", values?: undefined): string;
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
    decodeFunctionResult(functionFragment: "deleteChain", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deleteCrossChainTokenStrategy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deleteIncomingTokenStrategy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deletePriceFeed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deleteToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "incrementIndex", data: BytesLike): Result;
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
export interface IEmmetDataAdmin extends BaseContract {
    connect(runner?: ContractRunner | null): IEmmetDataAdmin;
    waitForDeployment(): Promise<this>;
    interface: IEmmetDataAdminInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
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
    incrementIndex: TypedContractMethod<[], [bigint], "nonpayable">;
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
    getFunction(nameOrSignature: "incrementIndex"): TypedContractMethod<[], [bigint], "nonpayable">;
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
