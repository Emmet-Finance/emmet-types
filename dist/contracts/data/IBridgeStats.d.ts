import type { BaseContract, BytesLike, FunctionFragment, Result, Interface, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../../common";
export interface IBridgeStatsInterface extends Interface {
    getFunction(nameOrSignature: "getStats" | "getUserStats"): FunctionFragment;
    encodeFunctionData(functionFragment: "getStats", values?: undefined): string;
    encodeFunctionData(functionFragment: "getUserStats", values: [string]): string;
    decodeFunctionResult(functionFragment: "getStats", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUserStats", data: BytesLike): Result;
}
export interface IBridgeStats extends BaseContract {
    connect(runner?: ContractRunner | null): IBridgeStats;
    waitForDeployment(): Promise<this>;
    interface: IBridgeStatsInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    getStats: TypedContractMethod<[
    ], [
        [
            bigint,
            bigint,
            bigint
        ] & {
            totalAmountUSD: bigint;
            totalFeesUSD: bigint;
            uniqueAddresses: bigint;
        }
    ], "view">;
    getUserStats: TypedContractMethod<[
        user: string
    ], [
        [bigint, bigint] & {
            received: bigint;
            sent: bigint;
        }
    ], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "getStats"): TypedContractMethod<[
    ], [
        [
            bigint,
            bigint,
            bigint
        ] & {
            totalAmountUSD: bigint;
            totalFeesUSD: bigint;
            uniqueAddresses: bigint;
        }
    ], "view">;
    getFunction(nameOrSignature: "getUserStats"): TypedContractMethod<[
        user: string
    ], [
        [bigint, bigint] & {
            received: bigint;
            sent: bigint;
        }
    ], "view">;
    filters: {};
}
