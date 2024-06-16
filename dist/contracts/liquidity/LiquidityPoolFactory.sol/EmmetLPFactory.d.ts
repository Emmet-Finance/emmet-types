import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../../../common";
export declare namespace EmmetLPFactory {
    type PoolStruct = {
        underlyingToken: AddressLike;
        lp: AddressLike;
        symbol: string;
    };
    type PoolStructOutput = [
        underlyingToken: string,
        lp: string,
        symbol: string
    ] & {
        underlyingToken: string;
        lp: string;
        symbol: string;
    };
}
export interface EmmetLPFactoryInterface extends Interface {
    getFunction(nameOrSignature: "addressBook" | "createPool" | "getPools" | "index" | "indices" | "pools"): FunctionFragment;
    encodeFunctionData(functionFragment: "addressBook", values?: undefined): string;
    encodeFunctionData(functionFragment: "createPool", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getPools", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "index", values?: undefined): string;
    encodeFunctionData(functionFragment: "indices", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "pools", values: [AddressLike]): string;
    decodeFunctionResult(functionFragment: "addressBook", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createPool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPools", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "index", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "indices", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pools", data: BytesLike): Result;
}
export interface EmmetLPFactory extends BaseContract {
    connect(runner?: ContractRunner | null): EmmetLPFactory;
    waitForDeployment(): Promise<this>;
    interface: EmmetLPFactoryInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    addressBook: TypedContractMethod<[], [string], "view">;
    createPool: TypedContractMethod<[
        underlyingToken_: AddressLike
    ], [
        void
    ], "nonpayable">;
    getPools: TypedContractMethod<[
        batch: BigNumberish,
        skip: BigNumberish
    ], [
        [
            bigint,
            EmmetLPFactory.PoolStructOutput[]
        ] & {
            chainId: bigint;
            poolsData: EmmetLPFactory.PoolStructOutput[];
        }
    ], "view">;
    index: TypedContractMethod<[], [bigint], "view">;
    indices: TypedContractMethod<[i: BigNumberish], [string], "view">;
    pools: TypedContractMethod<[underlyingToken: AddressLike], [string], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "addressBook"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "createPool"): TypedContractMethod<[underlyingToken_: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "getPools"): TypedContractMethod<[
        batch: BigNumberish,
        skip: BigNumberish
    ], [
        [
            bigint,
            EmmetLPFactory.PoolStructOutput[]
        ] & {
            chainId: bigint;
            poolsData: EmmetLPFactory.PoolStructOutput[];
        }
    ], "view">;
    getFunction(nameOrSignature: "index"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "indices"): TypedContractMethod<[i: BigNumberish], [string], "view">;
    getFunction(nameOrSignature: "pools"): TypedContractMethod<[underlyingToken: AddressLike], [string], "view">;
    filters: {};
}
