import type { BaseContract, BytesLike, FunctionFragment, Result, Interface, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../../../common";
export interface IUniswapV2PairInterface extends Interface {
    getFunction(nameOrSignature: "getReserves" | "token0" | "token1"): FunctionFragment;
    encodeFunctionData(functionFragment: "getReserves", values?: undefined): string;
    encodeFunctionData(functionFragment: "token0", values?: undefined): string;
    encodeFunctionData(functionFragment: "token1", values?: undefined): string;
    decodeFunctionResult(functionFragment: "getReserves", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "token0", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "token1", data: BytesLike): Result;
}
export interface IUniswapV2Pair extends BaseContract {
    connect(runner?: ContractRunner | null): IUniswapV2Pair;
    waitForDeployment(): Promise<this>;
    interface: IUniswapV2PairInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    getReserves: TypedContractMethod<[
    ], [
        [
            bigint,
            bigint,
            bigint
        ] & {
            reserve0: bigint;
            reserve1: bigint;
            blockTimestampLast: bigint;
        }
    ], "view">;
    token0: TypedContractMethod<[], [string], "view">;
    token1: TypedContractMethod<[], [string], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "getReserves"): TypedContractMethod<[
    ], [
        [
            bigint,
            bigint,
            bigint
        ] & {
            reserve0: bigint;
            reserve1: bigint;
            blockTimestampLast: bigint;
        }
    ], "view">;
    getFunction(nameOrSignature: "token0"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "token1"): TypedContractMethod<[], [string], "view">;
    filters: {};
}
