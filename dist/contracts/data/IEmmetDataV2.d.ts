import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../../common";
export declare namespace IDataTypes {
    type ChainStruct = {
        CCTPClaim: BigNumberish;
        lprelease: BigNumberish;
        mint: BigNumberish;
        unlock: BigNumberish;
        swap1: BigNumberish;
        swap2: BigNumberish;
        swap3: BigNumberish;
        swap4: BigNumberish;
        swap5: BigNumberish;
        swap6: BigNumberish;
        name: BytesLike;
        tokenDecimals: BigNumberish;
        flags: BytesLike;
        priceFeed: AddressLike;
    };
    type ChainStructOutput = [
        CCTPClaim: bigint,
        lprelease: bigint,
        mint: bigint,
        unlock: bigint,
        swap1: bigint,
        swap2: bigint,
        swap3: bigint,
        swap4: bigint,
        swap5: bigint,
        swap6: bigint,
        name: string,
        tokenDecimals: bigint,
        flags: string,
        priceFeed: string
    ] & {
        CCTPClaim: bigint;
        lprelease: bigint;
        mint: bigint;
        unlock: bigint;
        swap1: bigint;
        swap2: bigint;
        swap3: bigint;
        swap4: bigint;
        swap5: bigint;
        swap6: bigint;
        name: string;
        tokenDecimals: bigint;
        flags: string;
        priceFeed: string;
    };
    type TokenStruct = {
        target: AddressLike;
        tokenDecimals: BigNumberish;
        priceDecimals: BigNumberish;
        symbolLength: BigNumberish;
        priceFeed: AddressLike;
        symbol: BytesLike;
    };
    type TokenStructOutput = [
        target: string,
        tokenDecimals: bigint,
        priceDecimals: bigint,
        symbolLength: bigint,
        priceFeed: string,
        symbol: string
    ] & {
        target: string;
        tokenDecimals: bigint;
        priceDecimals: bigint;
        symbolLength: bigint;
        priceFeed: string;
        symbol: string;
    };
}
export interface IEmmetDataV2Interface extends Interface {
    getFunction(nameOrSignature: "estimateForeignFees" | "getChain" | "getForeignFee" | "getForeignStrategies" | "getIncomingStrategies" | "getLocalStrategies" | "getNativeCoinName" | "getStrategies" | "getToken" | "isChainSupported" | "isTokenSupported" | "supportsInterface"): FunctionFragment;
    encodeFunctionData(functionFragment: "estimateForeignFees", values: [BigNumberish, string, string]): string;
    encodeFunctionData(functionFragment: "getChain", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getForeignFee", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getForeignStrategies", values: [BigNumberish, string, string]): string;
    encodeFunctionData(functionFragment: "getIncomingStrategies", values: [BigNumberish, string, string]): string;
    encodeFunctionData(functionFragment: "getLocalStrategies", values: [BigNumberish, string, string]): string;
    encodeFunctionData(functionFragment: "getNativeCoinName", values?: undefined): string;
    encodeFunctionData(functionFragment: "getStrategies", values: [BigNumberish, string, string]): string;
    encodeFunctionData(functionFragment: "getToken", values: [string]): string;
    encodeFunctionData(functionFragment: "isChainSupported", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "isTokenSupported", values: [string]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
    decodeFunctionResult(functionFragment: "estimateForeignFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getChain", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getForeignFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getForeignStrategies", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getIncomingStrategies", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLocalStrategies", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNativeCoinName", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getStrategies", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isChainSupported", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isTokenSupported", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
}
export interface IEmmetDataV2 extends BaseContract {
    connect(runner?: ContractRunner | null): IEmmetDataV2;
    waitForDeployment(): Promise<this>;
    interface: IEmmetDataV2Interface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    estimateForeignFees: TypedContractMethod<[
        toChainId: BigNumberish,
        fromToken: string,
        toToken: string
    ], [
        bigint
    ], "view">;
    getChain: TypedContractMethod<[
        chainId: BigNumberish
    ], [
        IDataTypes.ChainStructOutput
    ], "view">;
    getForeignFee: TypedContractMethod<[
        foreignChainId: BigNumberish,
        op: BigNumberish
    ], [
        bigint
    ], "view">;
    getForeignStrategies: TypedContractMethod<[
        chainId: BigNumberish,
        fromToken: string,
        toToken: string
    ], [
        bigint[]
    ], "view">;
    getIncomingStrategies: TypedContractMethod<[
        chainId: BigNumberish,
        fromToken: string,
        toToken: string
    ], [
        bigint[]
    ], "view">;
    getLocalStrategies: TypedContractMethod<[
        chainId: BigNumberish,
        fromToken: string,
        toToken: string
    ], [
        bigint[]
    ], "view">;
    getNativeCoinName: TypedContractMethod<[], [string], "view">;
    getStrategies: TypedContractMethod<[
        chainId: BigNumberish,
        fromToken: string,
        toToken: string
    ], [
        [
            bigint[],
            bigint[],
            bigint[]
        ] & {
            foreign: bigint[];
            incoming: bigint[];
            local: bigint[];
        }
    ], "view">;
    getToken: TypedContractMethod<[
        symbol: string
    ], [
        IDataTypes.TokenStructOutput
    ], "view">;
    isChainSupported: TypedContractMethod<[
        chainId: BigNumberish
    ], [
        boolean
    ], "view">;
    isTokenSupported: TypedContractMethod<[symbol: string], [boolean], "view">;
    supportsInterface: TypedContractMethod<[
        interfaceId: BytesLike
    ], [
        boolean
    ], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "estimateForeignFees"): TypedContractMethod<[
        toChainId: BigNumberish,
        fromToken: string,
        toToken: string
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "getChain"): TypedContractMethod<[
        chainId: BigNumberish
    ], [
        IDataTypes.ChainStructOutput
    ], "view">;
    getFunction(nameOrSignature: "getForeignFee"): TypedContractMethod<[
        foreignChainId: BigNumberish,
        op: BigNumberish
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "getForeignStrategies"): TypedContractMethod<[
        chainId: BigNumberish,
        fromToken: string,
        toToken: string
    ], [
        bigint[]
    ], "view">;
    getFunction(nameOrSignature: "getIncomingStrategies"): TypedContractMethod<[
        chainId: BigNumberish,
        fromToken: string,
        toToken: string
    ], [
        bigint[]
    ], "view">;
    getFunction(nameOrSignature: "getLocalStrategies"): TypedContractMethod<[
        chainId: BigNumberish,
        fromToken: string,
        toToken: string
    ], [
        bigint[]
    ], "view">;
    getFunction(nameOrSignature: "getNativeCoinName"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "getStrategies"): TypedContractMethod<[
        chainId: BigNumberish,
        fromToken: string,
        toToken: string
    ], [
        [
            bigint[],
            bigint[],
            bigint[]
        ] & {
            foreign: bigint[];
            incoming: bigint[];
            local: bigint[];
        }
    ], "view">;
    getFunction(nameOrSignature: "getToken"): TypedContractMethod<[
        symbol: string
    ], [
        IDataTypes.TokenStructOutput
    ], "view">;
    getFunction(nameOrSignature: "isChainSupported"): TypedContractMethod<[chainId: BigNumberish], [boolean], "view">;
    getFunction(nameOrSignature: "isTokenSupported"): TypedContractMethod<[symbol: string], [boolean], "view">;
    getFunction(nameOrSignature: "supportsInterface"): TypedContractMethod<[interfaceId: BytesLike], [boolean], "view">;
    filters: {};
}
