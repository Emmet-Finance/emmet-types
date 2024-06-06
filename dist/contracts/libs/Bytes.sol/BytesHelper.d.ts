import type { BaseContract, BytesLike, FunctionFragment, Result, Interface, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../../../common";
export declare namespace BytesHelper {
    type DataStruct = {
        part1: BytesLike;
        part2: BytesLike;
    };
    type DataStructOutput = [part1: string, part2: string] & {
        part1: string;
        part2: string;
    };
}
export interface BytesHelperInterface extends Interface {
    getFunction(nameOrSignature: "bytes16ToString" | "decode2xBytes32" | "decode64Bytes" | "encode64String"): FunctionFragment;
    encodeFunctionData(functionFragment: "bytes16ToString", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "decode2xBytes32", values: [BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "decode64Bytes", values: [BytesHelper.DataStruct]): string;
    encodeFunctionData(functionFragment: "encode64String", values: [string]): string;
    decodeFunctionResult(functionFragment: "bytes16ToString", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decode2xBytes32", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decode64Bytes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "encode64String", data: BytesLike): Result;
}
export interface BytesHelper extends BaseContract {
    connect(runner?: ContractRunner | null): BytesHelper;
    waitForDeployment(): Promise<this>;
    interface: BytesHelperInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    bytes16ToString: TypedContractMethod<[encoded: BytesLike], [string], "view">;
    decode2xBytes32: TypedContractMethod<[
        one: BytesLike,
        two: BytesLike
    ], [
        string
    ], "view">;
    decode64Bytes: TypedContractMethod<[
        data: BytesHelper.DataStruct
    ], [
        string
    ], "view">;
    encode64String: TypedContractMethod<[
        str: string
    ], [
        BytesHelper.DataStructOutput
    ], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "bytes16ToString"): TypedContractMethod<[encoded: BytesLike], [string], "view">;
    getFunction(nameOrSignature: "decode2xBytes32"): TypedContractMethod<[one: BytesLike, two: BytesLike], [string], "view">;
    getFunction(nameOrSignature: "decode64Bytes"): TypedContractMethod<[data: BytesHelper.DataStruct], [string], "view">;
    getFunction(nameOrSignature: "encode64String"): TypedContractMethod<[str: string], [BytesHelper.DataStructOutput], "view">;
    filters: {};
}
