import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../../../common";
export interface IUniswapV3PoolInterface extends Interface {
    getFunction(nameOrSignature: "fee" | "liquidity" | "slot0" | "ticks" | "token0" | "token1"): FunctionFragment;
    encodeFunctionData(functionFragment: "fee", values?: undefined): string;
    encodeFunctionData(functionFragment: "liquidity", values?: undefined): string;
    encodeFunctionData(functionFragment: "slot0", values?: undefined): string;
    encodeFunctionData(functionFragment: "ticks", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "token0", values?: undefined): string;
    encodeFunctionData(functionFragment: "token1", values?: undefined): string;
    decodeFunctionResult(functionFragment: "fee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "liquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "slot0", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ticks", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "token0", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "token1", data: BytesLike): Result;
}
export interface IUniswapV3Pool extends BaseContract {
    connect(runner?: ContractRunner | null): IUniswapV3Pool;
    waitForDeployment(): Promise<this>;
    interface: IUniswapV3PoolInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    fee: TypedContractMethod<[], [bigint], "view">;
    liquidity: TypedContractMethod<[], [bigint], "view">;
    slot0: TypedContractMethod<[
    ], [
        [
            bigint,
            bigint,
            bigint,
            bigint,
            bigint,
            bigint,
            boolean
        ] & {
            sqrtPriceX96: bigint;
            tick: bigint;
            observationIndex: bigint;
            observationCardinality: bigint;
            observationCardinalityNext: bigint;
            feeProtocol: bigint;
            unlocked: boolean;
        }
    ], "view">;
    ticks: TypedContractMethod<[
        tick: BigNumberish
    ], [
        [
            bigint,
            bigint,
            bigint,
            bigint,
            bigint,
            bigint,
            bigint
        ] & {
            liquidityGross: bigint;
            liquidityNet: bigint;
            feeGrowthOutside0X128: bigint;
            feeGrowthOutside1X128: bigint;
            tickCumulativeOutside: bigint;
            secondsPerLiquidityOutsideX128: bigint;
            secondsOutside: bigint;
        }
    ], "view">;
    token0: TypedContractMethod<[], [string], "view">;
    token1: TypedContractMethod<[], [string], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "fee"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "liquidity"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "slot0"): TypedContractMethod<[
    ], [
        [
            bigint,
            bigint,
            bigint,
            bigint,
            bigint,
            bigint,
            boolean
        ] & {
            sqrtPriceX96: bigint;
            tick: bigint;
            observationIndex: bigint;
            observationCardinality: bigint;
            observationCardinalityNext: bigint;
            feeProtocol: bigint;
            unlocked: boolean;
        }
    ], "view">;
    getFunction(nameOrSignature: "ticks"): TypedContractMethod<[
        tick: BigNumberish
    ], [
        [
            bigint,
            bigint,
            bigint,
            bigint,
            bigint,
            bigint,
            bigint
        ] & {
            liquidityGross: bigint;
            liquidityNet: bigint;
            feeGrowthOutside0X128: bigint;
            feeGrowthOutside1X128: bigint;
            tickCumulativeOutside: bigint;
            secondsPerLiquidityOutsideX128: bigint;
            secondsOutside: bigint;
        }
    ], "view">;
    getFunction(nameOrSignature: "token0"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "token1"): TypedContractMethod<[], [string], "view">;
    filters: {};
}
