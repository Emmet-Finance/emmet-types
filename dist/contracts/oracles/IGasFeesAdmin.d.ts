import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../../common";
export interface IGasFeesAdminInterface extends Interface {
    getFunction(nameOrSignature: "getForeignFee" | "getForeignFees" | "getLocalFee" | "getLocalFees" | "supportsInterface" | "updateForeignFee" | "updateLocalFee"): FunctionFragment;
    encodeFunctionData(functionFragment: "getForeignFee", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getForeignFees", values: [BigNumberish, BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "getLocalFee", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getLocalFees", values: [BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "updateForeignFee", values: [BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "updateLocalFee", values: [BigNumberish, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "getForeignFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getForeignFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLocalFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLocalFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateForeignFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateLocalFee", data: BytesLike): Result;
}
export interface IGasFeesAdmin extends BaseContract {
    connect(runner?: ContractRunner | null): IGasFeesAdmin;
    waitForDeployment(): Promise<this>;
    interface: IGasFeesAdminInterface;
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
    supportsInterface: TypedContractMethod<[
        interfaceId: BytesLike
    ], [
        boolean
    ], "view">;
    updateForeignFee: TypedContractMethod<[
        chainId_: BigNumberish,
        operation_: BigNumberish,
        newFee_: BigNumberish
    ], [
        void
    ], "nonpayable">;
    updateLocalFee: TypedContractMethod<[
        operation_: BigNumberish,
        newFee_: BigNumberish
    ], [
        void
    ], "nonpayable">;
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
    getFunction(nameOrSignature: "getLocalFee"): TypedContractMethod<[operation_: BigNumberish], [bigint], "view">;
    getFunction(nameOrSignature: "getLocalFees"): TypedContractMethod<[operations_: BigNumberish[]], [bigint], "view">;
    getFunction(nameOrSignature: "supportsInterface"): TypedContractMethod<[interfaceId: BytesLike], [boolean], "view">;
    getFunction(nameOrSignature: "updateForeignFee"): TypedContractMethod<[
        chainId_: BigNumberish,
        operation_: BigNumberish,
        newFee_: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "updateLocalFee"): TypedContractMethod<[
        operation_: BigNumberish,
        newFee_: BigNumberish
    ], [
        void
    ], "nonpayable">;
    filters: {};
}
