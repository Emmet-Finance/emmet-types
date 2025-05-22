import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../../common";
export interface StrategiesMockInterface extends Interface {
    getFunction(nameOrSignature: "getForeignStrategies" | "getIncomingStrategies" | "getLocalStrategies" | "getStrategies" | "packStrategies" | "setStrategies" | "unpackStrategies"): FunctionFragment;
    encodeFunctionData(functionFragment: "getForeignStrategies", values: [BigNumberish, string, string]): string;
    encodeFunctionData(functionFragment: "getIncomingStrategies", values: [BigNumberish, string, string]): string;
    encodeFunctionData(functionFragment: "getLocalStrategies", values: [BigNumberish, string, string]): string;
    encodeFunctionData(functionFragment: "getStrategies", values: [BigNumberish, string, string]): string;
    encodeFunctionData(functionFragment: "packStrategies", values: [BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "setStrategies", values: [
        BigNumberish,
        string,
        string,
        BigNumberish[],
        BigNumberish[],
        BigNumberish[]
    ]): string;
    encodeFunctionData(functionFragment: "unpackStrategies", values: [BytesLike]): string;
    decodeFunctionResult(functionFragment: "getForeignStrategies", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getIncomingStrategies", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLocalStrategies", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getStrategies", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "packStrategies", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setStrategies", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unpackStrategies", data: BytesLike): Result;
}
export interface StrategiesMock extends BaseContract {
    connect(runner?: ContractRunner | null): StrategiesMock;
    waitForDeployment(): Promise<this>;
    interface: StrategiesMockInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
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
    packStrategies: TypedContractMethod<[
        steps: BigNumberish[]
    ], [
        string
    ], "view">;
    setStrategies: TypedContractMethod<[
        chainId: BigNumberish,
        fromToken: string,
        toToken: string,
        foreign: BigNumberish[],
        incoming: BigNumberish[],
        local: BigNumberish[]
    ], [
        void
    ], "nonpayable">;
    unpackStrategies: TypedContractMethod<[
        packedData: BytesLike
    ], [
        bigint[]
    ], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
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
    getFunction(nameOrSignature: "packStrategies"): TypedContractMethod<[steps: BigNumberish[]], [string], "view">;
    getFunction(nameOrSignature: "setStrategies"): TypedContractMethod<[
        chainId: BigNumberish,
        fromToken: string,
        toToken: string,
        foreign: BigNumberish[],
        incoming: BigNumberish[],
        local: BigNumberish[]
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "unpackStrategies"): TypedContractMethod<[packedData: BytesLike], [bigint[]], "view">;
    filters: {};
}
