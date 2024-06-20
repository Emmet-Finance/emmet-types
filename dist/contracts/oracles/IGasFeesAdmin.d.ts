import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../../common";
export interface IGasFeesAdminInterface extends Interface {
    getFunction(nameOrSignature: "getForeignFee" | "getForeignFees" | "getGasInfo" | "getLocalFee" | "getLocalFees" | "supportsInterface" | "updateForeignFee" | "updateGasInfo" | "updateLocalFee"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "FeeUpdate" | "ForeignGasInfoUpdate"): EventFragment;
    encodeFunctionData(functionFragment: "getForeignFee", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getForeignFees", values: [BigNumberish, BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "getGasInfo", values?: undefined): string;
    encodeFunctionData(functionFragment: "getLocalFee", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getLocalFees", values: [BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "updateForeignFee", values: [BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "updateGasInfo", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "updateLocalFee", values: [BigNumberish, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "getForeignFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getForeignFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getGasInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLocalFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLocalFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateForeignFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateGasInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateLocalFee", data: BytesLike): Result;
}
export declare namespace FeeUpdateEvent {
    type InputTuple = [
        chainId: BigNumberish,
        operation: BigNumberish,
        oldFee: BigNumberish,
        newFee: BigNumberish
    ];
    type OutputTuple = [
        chainId: bigint,
        operation: bigint,
        oldFee: bigint,
        newFee: bigint
    ];
    interface OutputObject {
        chainId: bigint;
        operation: bigint;
        oldFee: bigint;
        newFee: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace ForeignGasInfoUpdateEvent {
    type InputTuple = [
        chainId: BigNumberish,
        oldTxFee_: BigNumberish,
        newTxFee_: BigNumberish
    ];
    type OutputTuple = [
        chainId: bigint,
        oldTxFee_: bigint,
        newTxFee_: bigint
    ];
    interface OutputObject {
        chainId: bigint;
        oldTxFee_: bigint;
        newTxFee_: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
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
    updateGasInfo: TypedContractMethod<[
        chainId_: BigNumberish,
        txFee_: BigNumberish
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
    getFunction(nameOrSignature: "getGasInfo"): TypedContractMethod<[
    ], [
        [bigint, bigint] & {
            baseFee: bigint;
            gasPrice: bigint;
        }
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
    getFunction(nameOrSignature: "updateGasInfo"): TypedContractMethod<[
        chainId_: BigNumberish,
        txFee_: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "updateLocalFee"): TypedContractMethod<[
        operation_: BigNumberish,
        newFee_: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getEvent(key: "FeeUpdate"): TypedContractEvent<FeeUpdateEvent.InputTuple, FeeUpdateEvent.OutputTuple, FeeUpdateEvent.OutputObject>;
    getEvent(key: "ForeignGasInfoUpdate"): TypedContractEvent<ForeignGasInfoUpdateEvent.InputTuple, ForeignGasInfoUpdateEvent.OutputTuple, ForeignGasInfoUpdateEvent.OutputObject>;
    filters: {
        "FeeUpdate(uint256,uint8,uint256,uint256)": TypedContractEvent<FeeUpdateEvent.InputTuple, FeeUpdateEvent.OutputTuple, FeeUpdateEvent.OutputObject>;
        FeeUpdate: TypedContractEvent<FeeUpdateEvent.InputTuple, FeeUpdateEvent.OutputTuple, FeeUpdateEvent.OutputObject>;
        "ForeignGasInfoUpdate(uint256,uint256,uint256)": TypedContractEvent<ForeignGasInfoUpdateEvent.InputTuple, ForeignGasInfoUpdateEvent.OutputTuple, ForeignGasInfoUpdateEvent.OutputObject>;
        ForeignGasInfoUpdate: TypedContractEvent<ForeignGasInfoUpdateEvent.InputTuple, ForeignGasInfoUpdateEvent.OutputTuple, ForeignGasInfoUpdateEvent.OutputObject>;
    };
}
