import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../../common";
export interface RewardsInterface extends Interface {
    getFunction(nameOrSignature: "MAX_EXCESS_USAGE_RATIO" | "OPTIMAL_USAGE_RATIO" | "PROTOCOL_FEE" | "Ronna" | "splitRewards" | "stableBorrowRate" | "stakerReward" | "usage" | "variableBorrowRate"): FunctionFragment;
    encodeFunctionData(functionFragment: "MAX_EXCESS_USAGE_RATIO", values?: undefined): string;
    encodeFunctionData(functionFragment: "OPTIMAL_USAGE_RATIO", values?: undefined): string;
    encodeFunctionData(functionFragment: "PROTOCOL_FEE", values?: undefined): string;
    encodeFunctionData(functionFragment: "Ronna", values?: undefined): string;
    encodeFunctionData(functionFragment: "splitRewards", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "stableBorrowRate", values: [BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "stakerReward", values: [BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "usage", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "variableBorrowRate", values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "MAX_EXCESS_USAGE_RATIO", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "OPTIMAL_USAGE_RATIO", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "PROTOCOL_FEE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "Ronna", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "splitRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stableBorrowRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stakerReward", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "usage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "variableBorrowRate", data: BytesLike): Result;
}
export interface Rewards extends BaseContract {
    connect(runner?: ContractRunner | null): Rewards;
    waitForDeployment(): Promise<this>;
    interface: RewardsInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    MAX_EXCESS_USAGE_RATIO: TypedContractMethod<[], [bigint], "view">;
    OPTIMAL_USAGE_RATIO: TypedContractMethod<[], [bigint], "view">;
    PROTOCOL_FEE: TypedContractMethod<[], [bigint], "view">;
    Ronna: TypedContractMethod<[], [bigint], "view">;
    splitRewards: TypedContractMethod<[
        totalRewards_: BigNumberish
    ], [
        [bigint, bigint] & {
            stakerRewards: bigint;
            protocolFee: bigint;
        }
    ], "view">;
    stableBorrowRate: TypedContractMethod<[
        baseStableRate_: BigNumberish,
        stableRateSlope_: BigNumberish,
        usage_: BigNumberish
    ], [
        bigint
    ], "view">;
    stakerReward: TypedContractMethod<[
        totalRewards_: BigNumberish,
        stakerShare_: BigNumberish,
        totalLiquidity_: BigNumberish
    ], [
        bigint
    ], "view">;
    usage: TypedContractMethod<[
        debt: BigNumberish,
        availableLiquidity: BigNumberish
    ], [
        bigint
    ], "view">;
    variableBorrowRate: TypedContractMethod<[
        baseVarRate_: BigNumberish,
        varRateBelowOptimalSlope_: BigNumberish,
        varRateAboveOptimalSlope_: BigNumberish,
        usage_: BigNumberish
    ], [
        bigint
    ], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "MAX_EXCESS_USAGE_RATIO"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "OPTIMAL_USAGE_RATIO"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "PROTOCOL_FEE"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "Ronna"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "splitRewards"): TypedContractMethod<[
        totalRewards_: BigNumberish
    ], [
        [bigint, bigint] & {
            stakerRewards: bigint;
            protocolFee: bigint;
        }
    ], "view">;
    getFunction(nameOrSignature: "stableBorrowRate"): TypedContractMethod<[
        baseStableRate_: BigNumberish,
        stableRateSlope_: BigNumberish,
        usage_: BigNumberish
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "stakerReward"): TypedContractMethod<[
        totalRewards_: BigNumberish,
        stakerShare_: BigNumberish,
        totalLiquidity_: BigNumberish
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "usage"): TypedContractMethod<[
        debt: BigNumberish,
        availableLiquidity: BigNumberish
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "variableBorrowRate"): TypedContractMethod<[
        baseVarRate_: BigNumberish,
        varRateBelowOptimalSlope_: BigNumberish,
        varRateAboveOptimalSlope_: BigNumberish,
        usage_: BigNumberish
    ], [
        bigint
    ], "view">;
    filters: {};
}
