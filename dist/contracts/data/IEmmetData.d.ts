import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../../common";
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
export interface IEmmetDataInterface extends Interface {
    getFunction(nameOrSignature: "getCCTPChain" | "getChain" | "getChainId" | "getCrossChainTokenStrategy" | "getForeignFeeCompensation" | "getIncomingStrategy" | "getPriceDecimals" | "getProtocolFee" | "getToken" | "getTokenPrice" | "nativeCoin"): FunctionFragment;
    encodeFunctionData(functionFragment: "getCCTPChain", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getChain", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getChainId", values?: undefined): string;
    encodeFunctionData(functionFragment: "getCrossChainTokenStrategy", values: [BigNumberish, string, string]): string;
    encodeFunctionData(functionFragment: "getForeignFeeCompensation", values: [BigNumberish, string, string]): string;
    encodeFunctionData(functionFragment: "getIncomingStrategy", values: [BigNumberish, string, string]): string;
    encodeFunctionData(functionFragment: "getPriceDecimals", values: [string]): string;
    encodeFunctionData(functionFragment: "getProtocolFee", values?: undefined): string;
    encodeFunctionData(functionFragment: "getToken", values: [string]): string;
    encodeFunctionData(functionFragment: "getTokenPrice", values: [string]): string;
    encodeFunctionData(functionFragment: "nativeCoin", values?: undefined): string;
    decodeFunctionResult(functionFragment: "getCCTPChain", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getChain", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getChainId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCrossChainTokenStrategy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getForeignFeeCompensation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getIncomingStrategy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPriceDecimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getProtocolFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTokenPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nativeCoin", data: BytesLike): Result;
}
export interface IEmmetData extends BaseContract {
    connect(runner?: ContractRunner | null): IEmmetData;
    waitForDeployment(): Promise<this>;
    interface: IEmmetDataInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
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
    getChainId: TypedContractMethod<[], [bigint], "view">;
    getCrossChainTokenStrategy: TypedContractMethod<[
        toChainId: BigNumberish,
        fromToken: string,
        toToken: string
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
        fromChainId: BigNumberish,
        fromToken: string,
        toToken: string
    ], [
        bigint[]
    ], "view">;
    getPriceDecimals: TypedContractMethod<[symbol_: string], [bigint], "view">;
    getProtocolFee: TypedContractMethod<[], [bigint], "view">;
    getToken: TypedContractMethod<[
        symbol_: string
    ], [
        IEmmetDataTypes.STokenStructOutput
    ], "view">;
    getTokenPrice: TypedContractMethod<[symbol_: string], [bigint], "view">;
    nativeCoin: TypedContractMethod<[], [string], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
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
    getFunction(nameOrSignature: "getChainId"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "getCrossChainTokenStrategy"): TypedContractMethod<[
        toChainId: BigNumberish,
        fromToken: string,
        toToken: string
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
        fromChainId: BigNumberish,
        fromToken: string,
        toToken: string
    ], [
        bigint[]
    ], "view">;
    getFunction(nameOrSignature: "getPriceDecimals"): TypedContractMethod<[symbol_: string], [bigint], "view">;
    getFunction(nameOrSignature: "getProtocolFee"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "getToken"): TypedContractMethod<[
        symbol_: string
    ], [
        IEmmetDataTypes.STokenStructOutput
    ], "view">;
    getFunction(nameOrSignature: "getTokenPrice"): TypedContractMethod<[symbol_: string], [bigint], "view">;
    getFunction(nameOrSignature: "nativeCoin"): TypedContractMethod<[], [string], "view">;
    filters: {};
}
