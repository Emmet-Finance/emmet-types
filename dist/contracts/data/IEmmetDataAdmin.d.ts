import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../../common";
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
export interface IEmmetDataAdminInterface extends Interface {
    getFunction(nameOrSignature: "chains" | "getGasConsumed" | "getInHashToIndex" | "getIndexIn" | "getIndexOut" | "getNativeCoin" | "getOutHashToIndex" | "getToken" | "incommingTransactions" | "outgoingTransactions" | "saveIncomingTx" | "saveOutgoingTx" | "strategies" | "supportsInterface" | "updateChain" | "updateGasPrice" | "updateGasUsed" | "updateToken" | "updateTokenStrategy" | "updateTransaction"): FunctionFragment;
    encodeFunctionData(functionFragment: "chains", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getGasConsumed", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getInHashToIndex", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getIndexIn", values?: undefined): string;
    encodeFunctionData(functionFragment: "getIndexOut", values?: undefined): string;
    encodeFunctionData(functionFragment: "getNativeCoin", values?: undefined): string;
    encodeFunctionData(functionFragment: "getOutHashToIndex", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getToken", values: [string]): string;
    encodeFunctionData(functionFragment: "incommingTransactions", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "outgoingTransactions", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "saveIncomingTx", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "saveOutgoingTx", values: [BytesLike, BridgeTypes.SendParamsStruct]): string;
    encodeFunctionData(functionFragment: "strategies", values: [BigNumberish, string, string]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
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
    decodeFunctionResult(functionFragment: "chains", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getGasConsumed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getInHashToIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getIndexIn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getIndexOut", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNativeCoin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getOutHashToIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "incommingTransactions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "outgoingTransactions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "saveIncomingTx", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "saveOutgoingTx", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "strategies", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateChain", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateGasPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateGasUsed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateTokenStrategy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateTransaction", data: BytesLike): Result;
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
    chains: TypedContractMethod<[
        chainId: BigNumberish
    ], [
        BridgeTypes.ChainStructOutput
    ], "view">;
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
    getToken: TypedContractMethod<[
        symbol: string
    ], [
        BridgeTypes.TokenStructOutput
    ], "view">;
    incommingTransactions: TypedContractMethod<[
        index: BigNumberish
    ], [
        bigint
    ], "view">;
    outgoingTransactions: TypedContractMethod<[
        index: BigNumberish
    ], [
        BridgeTypes.OutStoreStructOutput
    ], "view">;
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
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "chains"): TypedContractMethod<[
        chainId: BigNumberish
    ], [
        BridgeTypes.ChainStructOutput
    ], "view">;
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
    getFunction(nameOrSignature: "getToken"): TypedContractMethod<[
        symbol: string
    ], [
        BridgeTypes.TokenStructOutput
    ], "view">;
    getFunction(nameOrSignature: "incommingTransactions"): TypedContractMethod<[index: BigNumberish], [bigint], "view">;
    getFunction(nameOrSignature: "outgoingTransactions"): TypedContractMethod<[
        index: BigNumberish
    ], [
        BridgeTypes.OutStoreStructOutput
    ], "view">;
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
    filters: {};
}
