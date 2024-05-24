import type { BaseContract, BytesLike, FunctionFragment, Result, Interface, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../../common";
export interface IEmmetBridgeAdminInterface extends Interface {
    getFunction(nameOrSignature: "updateEmmetData" | "updateGasLimitAddress" | "updateTxHash" | "withdrawProtocolFee" | "withdrawTokenFee"): FunctionFragment;
    encodeFunctionData(functionFragment: "updateEmmetData", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "updateGasLimitAddress", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "updateTxHash", values: [BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "withdrawProtocolFee", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdrawTokenFee", values: [string]): string;
    decodeFunctionResult(functionFragment: "updateEmmetData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateGasLimitAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateTxHash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawProtocolFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawTokenFee", data: BytesLike): Result;
}
export interface IEmmetBridgeAdmin extends BaseContract {
    connect(runner?: ContractRunner | null): IEmmetBridgeAdmin;
    waitForDeployment(): Promise<this>;
    interface: IEmmetBridgeAdminInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    updateEmmetData: TypedContractMethod<[
        emmetData_: AddressLike
    ], [
        void
    ], "nonpayable">;
    updateGasLimitAddress: TypedContractMethod<[
        gasFeesAdmin_: AddressLike
    ], [
        void
    ], "nonpayable">;
    updateTxHash: TypedContractMethod<[
        bridgeHash_: BytesLike,
        txHash_: BytesLike
    ], [
        void
    ], "nonpayable">;
    withdrawProtocolFee: TypedContractMethod<[], [void], "nonpayable">;
    withdrawTokenFee: TypedContractMethod<[
        symbol_: string
    ], [
        void
    ], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "updateEmmetData"): TypedContractMethod<[emmetData_: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "updateGasLimitAddress"): TypedContractMethod<[gasFeesAdmin_: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "updateTxHash"): TypedContractMethod<[
        bridgeHash_: BytesLike,
        txHash_: BytesLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "withdrawProtocolFee"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "withdrawTokenFee"): TypedContractMethod<[symbol_: string], [void], "nonpayable">;
    filters: {};
}
