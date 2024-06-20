import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../../common";
export interface IGasFeesInterface extends Interface {
    getFunction(nameOrSignature: "getForeignFee" | "getForeignFees" | "getGasInfo" | "getLocalFee" | "getLocalFees"): FunctionFragment;
    encodeFunctionData(functionFragment: "getForeignFee", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getForeignFees", values: [BigNumberish, BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "getGasInfo", values?: undefined): string;
    encodeFunctionData(functionFragment: "getLocalFee", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getLocalFees", values: [BigNumberish[]]): string;
    decodeFunctionResult(functionFragment: "getForeignFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getForeignFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getGasInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLocalFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLocalFees", data: BytesLike): Result;
}
export interface IGasFees extends BaseContract {
    connect(runner?: ContractRunner | null): IGasFees;
    waitForDeployment(): Promise<this>;
    interface: IGasFeesInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    getForeignFee: TypedContractMethod<[
        chainId_: BigNumberish,
        operation_: BigNumberish
    ], [
        bigint
    ], "view">;
    getForeignFees: TypedContractMethod<[
        chainId_: BigNumberish,
        operations_: BigNumberish[]
    ], [
        bigint
    ], "view">;
    getGasInfo: TypedContractMethod<[
    ], [
        [bigint, bigint] & {
            baseFee: bigint;
            gasPrice: bigint;
        }
    ], "view">;
    getLocalFee: TypedContractMethod<[
        operation_: BigNumberish
    ], [
        bigint
    ], "view">;
    getLocalFees: TypedContractMethod<[
        operations_: BigNumberish[]
    ], [
        bigint
    ], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "getForeignFee"): TypedContractMethod<[
        chainId_: BigNumberish,
        operation_: BigNumberish
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "getForeignFees"): TypedContractMethod<[
        chainId_: BigNumberish,
        operations_: BigNumberish[]
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "getGasInfo"): TypedContractMethod<[
    ], [
        [bigint, bigint] & {
            baseFee: bigint;
            gasPrice: bigint;
        }
    ], "view">;
    getFunction(nameOrSignature: "getLocalFee"): TypedContractMethod<[operation_: BigNumberish], [bigint], "view">;
    getFunction(nameOrSignature: "getLocalFees"): TypedContractMethod<[operations_: BigNumberish[]], [bigint], "view">;
    filters: {};
}
