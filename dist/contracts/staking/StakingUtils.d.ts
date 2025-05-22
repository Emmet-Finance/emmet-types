import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../../common";
export interface StakingUtilsInterface extends Interface {
    getFunction(nameOrSignature: "HALF" | "QUARTER" | "QUARTERS3" | "YEAR" | "decimals" | "emmet" | "metrics" | "posCount" | "positions" | "terms" | "token"): FunctionFragment;
    encodeFunctionData(functionFragment: "HALF", values?: undefined): string;
    encodeFunctionData(functionFragment: "QUARTER", values?: undefined): string;
    encodeFunctionData(functionFragment: "QUARTERS3", values?: undefined): string;
    encodeFunctionData(functionFragment: "YEAR", values?: undefined): string;
    encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "emmet", values?: undefined): string;
    encodeFunctionData(functionFragment: "metrics", values?: undefined): string;
    encodeFunctionData(functionFragment: "posCount", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "positions", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "terms", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "token", values?: undefined): string;
    decodeFunctionResult(functionFragment: "HALF", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "QUARTER", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "QUARTERS3", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "YEAR", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "emmet", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "metrics", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "posCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "positions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "terms", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
}
export interface StakingUtils extends BaseContract {
    connect(runner?: ContractRunner | null): StakingUtils;
    waitForDeployment(): Promise<this>;
    interface: StakingUtilsInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    HALF: TypedContractMethod<[], [bigint], "view">;
    QUARTER: TypedContractMethod<[], [bigint], "view">;
    QUARTERS3: TypedContractMethod<[], [bigint], "view">;
    YEAR: TypedContractMethod<[], [bigint], "view">;
    decimals: TypedContractMethod<[], [bigint], "view">;
    emmet: TypedContractMethod<[
    ], [
        [
            string,
            bigint,
            bigint
        ] & {
            emmet: string;
            minAmount: bigint;
            fee: bigint;
        }
    ], "view">;
    metrics: TypedContractMethod<[
    ], [
        [
            bigint,
            bigint,
            bigint,
            bigint
        ] & {
            locked: bigint;
            rewards: bigint;
            claimed: bigint;
            delta: bigint;
        }
    ], "view">;
    posCount: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
    positions: TypedContractMethod<[
        arg0: AddressLike,
        arg1: BigNumberish
    ], [
        [
            bigint,
            bigint,
            bigint,
            bigint,
            bigint,
            bigint
        ] & {
            period: bigint;
            start: bigint;
            maturity: bigint;
            locked: bigint;
            claimed: bigint;
            unclaimed: bigint;
        }
    ], "view">;
    terms: TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;
    token: TypedContractMethod<[], [string], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "HALF"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "QUARTER"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "QUARTERS3"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "YEAR"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "decimals"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "emmet"): TypedContractMethod<[
    ], [
        [
            string,
            bigint,
            bigint
        ] & {
            emmet: string;
            minAmount: bigint;
            fee: bigint;
        }
    ], "view">;
    getFunction(nameOrSignature: "metrics"): TypedContractMethod<[
    ], [
        [
            bigint,
            bigint,
            bigint,
            bigint
        ] & {
            locked: bigint;
            rewards: bigint;
            claimed: bigint;
            delta: bigint;
        }
    ], "view">;
    getFunction(nameOrSignature: "posCount"): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "positions"): TypedContractMethod<[
        arg0: AddressLike,
        arg1: BigNumberish
    ], [
        [
            bigint,
            bigint,
            bigint,
            bigint,
            bigint,
            bigint
        ] & {
            period: bigint;
            start: bigint;
            maturity: bigint;
            locked: bigint;
            claimed: bigint;
            unclaimed: bigint;
        }
    ], "view">;
    getFunction(nameOrSignature: "terms"): TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;
    getFunction(nameOrSignature: "token"): TypedContractMethod<[], [string], "view">;
    filters: {};
}
