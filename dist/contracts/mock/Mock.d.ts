import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../../common";
export declare namespace Mock {
    type CallDataStruct = {
        offset1: BigNumberish;
        offset2: BigNumberish;
        admin: AddressLike;
    };
    type CallDataStructOutput = [
        offset1: bigint,
        offset2: bigint,
        admin: string
    ] & {
        offset1: bigint;
        offset2: bigint;
        admin: string;
    };
}
export interface MockInterface extends Interface {
    getFunction(nameOrSignature: "admin" | "collectFee" | "collectedFee" | "hashes" | "index" | "updateAdmin"): FunctionFragment;
    encodeFunctionData(functionFragment: "admin", values?: undefined): string;
    encodeFunctionData(functionFragment: "collectFee", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "collectedFee", values?: undefined): string;
    encodeFunctionData(functionFragment: "hashes", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "index", values?: undefined): string;
    encodeFunctionData(functionFragment: "updateAdmin", values: [BytesLike, Mock.CallDataStruct]): string;
    decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "collectFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "collectedFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hashes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "index", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateAdmin", data: BytesLike): Result;
}
export interface Mock extends BaseContract {
    connect(runner?: ContractRunner | null): Mock;
    waitForDeployment(): Promise<this>;
    interface: MockInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    admin: TypedContractMethod<[], [string], "view">;
    collectFee: TypedContractMethod<[txHash: BytesLike], [void], "payable">;
    collectedFee: TypedContractMethod<[], [bigint], "view">;
    hashes: TypedContractMethod<[index: BigNumberish], [string], "view">;
    index: TypedContractMethod<[], [bigint], "view">;
    updateAdmin: TypedContractMethod<[
        txHash: BytesLike,
        newAdmin: Mock.CallDataStruct
    ], [
        void
    ], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "admin"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "collectFee"): TypedContractMethod<[txHash: BytesLike], [void], "payable">;
    getFunction(nameOrSignature: "collectedFee"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "hashes"): TypedContractMethod<[index: BigNumberish], [string], "view">;
    getFunction(nameOrSignature: "index"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "updateAdmin"): TypedContractMethod<[
        txHash: BytesLike,
        newAdmin: Mock.CallDataStruct
    ], [
        void
    ], "nonpayable">;
    filters: {};
}
