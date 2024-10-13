import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../../common";
export declare namespace BridgeTypes {
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
}
export interface IEmmetDataInterface extends Interface {
    getFunction(nameOrSignature: "estimateForeignCost" | "getChain" | "getIncomingTransaction" | "getIncommingTransactions" | "getIndexByHash" | "getNativeCoinName" | "getOutgoingTransaction" | "getOutgoingTransactions" | "getStrategy" | "getToken" | "supportsInterface"): FunctionFragment;
    encodeFunctionData(functionFragment: "estimateForeignCost", values: [BigNumberish, string, string]): string;
    encodeFunctionData(functionFragment: "getChain", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getIncomingTransaction", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getIncommingTransactions", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getIndexByHash", values: [BytesLike, boolean]): string;
    encodeFunctionData(functionFragment: "getNativeCoinName", values?: undefined): string;
    encodeFunctionData(functionFragment: "getOutgoingTransaction", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getOutgoingTransactions", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getStrategy", values: [BigNumberish, string, string]): string;
    encodeFunctionData(functionFragment: "getToken", values: [string]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
    decodeFunctionResult(functionFragment: "estimateForeignCost", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getChain", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getIncomingTransaction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getIncommingTransactions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getIndexByHash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNativeCoinName", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getOutgoingTransaction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getOutgoingTransactions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getStrategy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
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
    estimateForeignCost: TypedContractMethod<[
        chainId: BigNumberish,
        fromToken: string,
        toToken: string
    ], [
        bigint
    ], "view">;
    getChain: TypedContractMethod<[
        chainId: BigNumberish
    ], [
        [
            string,
            string,
            string
        ] & {
            name: string;
            bridge: string;
            currency: string;
        }
    ], "view">;
    getIncomingTransaction: TypedContractMethod<[
        index: BigNumberish
    ], [
        bigint
    ], "view">;
    getIncommingTransactions: TypedContractMethod<[
        batch: BigNumberish,
        skip: BigNumberish
    ], [
        bigint[]
    ], "view">;
    getIndexByHash: TypedContractMethod<[
        txHash: BytesLike,
        isOut: boolean
    ], [
        bigint
    ], "nonpayable">;
    getNativeCoinName: TypedContractMethod<[], [string], "view">;
    getOutgoingTransaction: TypedContractMethod<[
        index: BigNumberish
    ], [
        BridgeTypes.SendParamsStructOutput
    ], "view">;
    getOutgoingTransactions: TypedContractMethod<[
        batch: BigNumberish,
        skip: BigNumberish
    ], [
        BridgeTypes.SendParamsStructOutput[]
    ], "view">;
    getStrategy: TypedContractMethod<[
        toChainId: BigNumberish,
        fromToken: string,
        toToken: string
    ], [
        BridgeTypes.TokenStrategyStructOutput
    ], "view">;
    getToken: TypedContractMethod<[
        symbol: string
    ], [
        BridgeTypes.TokenStructOutput
    ], "view">;
    supportsInterface: TypedContractMethod<[
        interfaceId: BytesLike
    ], [
        boolean
    ], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "estimateForeignCost"): TypedContractMethod<[
        chainId: BigNumberish,
        fromToken: string,
        toToken: string
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "getChain"): TypedContractMethod<[
        chainId: BigNumberish
    ], [
        [
            string,
            string,
            string
        ] & {
            name: string;
            bridge: string;
            currency: string;
        }
    ], "view">;
    getFunction(nameOrSignature: "getIncomingTransaction"): TypedContractMethod<[index: BigNumberish], [bigint], "view">;
    getFunction(nameOrSignature: "getIncommingTransactions"): TypedContractMethod<[
        batch: BigNumberish,
        skip: BigNumberish
    ], [
        bigint[]
    ], "view">;
    getFunction(nameOrSignature: "getIndexByHash"): TypedContractMethod<[
        txHash: BytesLike,
        isOut: boolean
    ], [
        bigint
    ], "nonpayable">;
    getFunction(nameOrSignature: "getNativeCoinName"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "getOutgoingTransaction"): TypedContractMethod<[
        index: BigNumberish
    ], [
        BridgeTypes.SendParamsStructOutput
    ], "view">;
    getFunction(nameOrSignature: "getOutgoingTransactions"): TypedContractMethod<[
        batch: BigNumberish,
        skip: BigNumberish
    ], [
        BridgeTypes.SendParamsStructOutput[]
    ], "view">;
    getFunction(nameOrSignature: "getStrategy"): TypedContractMethod<[
        toChainId: BigNumberish,
        fromToken: string,
        toToken: string
    ], [
        BridgeTypes.TokenStrategyStructOutput
    ], "view">;
    getFunction(nameOrSignature: "getToken"): TypedContractMethod<[
        symbol: string
    ], [
        BridgeTypes.TokenStructOutput
    ], "view">;
    getFunction(nameOrSignature: "supportsInterface"): TypedContractMethod<[interfaceId: BytesLike], [boolean], "view">;
    filters: {};
}
