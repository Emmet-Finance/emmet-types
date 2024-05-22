import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../../../common";
export declare namespace IVault {
    type BatchSwapStepStruct = {
        poolId: BytesLike;
        assetInIndex: BigNumberish;
        assetOutIndex: BigNumberish;
        amount: BigNumberish;
        userData: BytesLike;
    };
    type BatchSwapStepStructOutput = [
        poolId: string,
        assetInIndex: bigint,
        assetOutIndex: bigint,
        amount: bigint,
        userData: string
    ] & {
        poolId: string;
        assetInIndex: bigint;
        assetOutIndex: bigint;
        amount: bigint;
        userData: string;
    };
    type FundManagementStruct = {
        sender: AddressLike;
        fromInternalBalance: boolean;
        recipient: AddressLike;
        toInternalBalance: boolean;
    };
    type FundManagementStructOutput = [
        sender: string,
        fromInternalBalance: boolean,
        recipient: string,
        toInternalBalance: boolean
    ] & {
        sender: string;
        fromInternalBalance: boolean;
        recipient: string;
        toInternalBalance: boolean;
    };
    type SingleSwapStruct = {
        poolId: BytesLike;
        kind: BigNumberish;
        assetIn: AddressLike;
        assetOut: AddressLike;
        amount: BigNumberish;
        userData: BytesLike;
    };
    type SingleSwapStructOutput = [
        poolId: string,
        kind: bigint,
        assetIn: string,
        assetOut: string,
        amount: bigint,
        userData: string
    ] & {
        poolId: string;
        kind: bigint;
        assetIn: string;
        assetOut: string;
        amount: bigint;
        userData: string;
    };
}
export interface IVaultInterface extends Interface {
    getFunction(nameOrSignature: "batchSwap" | "getPoolTokens" | "swap"): FunctionFragment;
    encodeFunctionData(functionFragment: "batchSwap", values: [
        BigNumberish,
        IVault.BatchSwapStepStruct[],
        AddressLike[],
        IVault.FundManagementStruct,
        BigNumberish[],
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "getPoolTokens", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "swap", values: [
        IVault.SingleSwapStruct,
        IVault.FundManagementStruct,
        BigNumberish,
        BigNumberish
    ]): string;
    decodeFunctionResult(functionFragment: "batchSwap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPoolTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;
}
export interface IVault extends BaseContract {
    connect(runner?: ContractRunner | null): IVault;
    waitForDeployment(): Promise<this>;
    interface: IVaultInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    batchSwap: TypedContractMethod<[
        kind: BigNumberish,
        swaps: IVault.BatchSwapStepStruct[],
        assets: AddressLike[],
        funds: IVault.FundManagementStruct,
        limits: BigNumberish[],
        deadline: BigNumberish
    ], [
        bigint[]
    ], "payable">;
    getPoolTokens: TypedContractMethod<[
        poolId: BytesLike
    ], [
        [
            string[],
            bigint[],
            bigint
        ] & {
            tokens: string[];
            balances: bigint[];
            lastChangeBlock: bigint;
        }
    ], "view">;
    swap: TypedContractMethod<[
        singleSwap: IVault.SingleSwapStruct,
        funds: IVault.FundManagementStruct,
        limit: BigNumberish,
        deadline: BigNumberish
    ], [
        bigint
    ], "payable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "batchSwap"): TypedContractMethod<[
        kind: BigNumberish,
        swaps: IVault.BatchSwapStepStruct[],
        assets: AddressLike[],
        funds: IVault.FundManagementStruct,
        limits: BigNumberish[],
        deadline: BigNumberish
    ], [
        bigint[]
    ], "payable">;
    getFunction(nameOrSignature: "getPoolTokens"): TypedContractMethod<[
        poolId: BytesLike
    ], [
        [
            string[],
            bigint[],
            bigint
        ] & {
            tokens: string[];
            balances: bigint[];
            lastChangeBlock: bigint;
        }
    ], "view">;
    getFunction(nameOrSignature: "swap"): TypedContractMethod<[
        singleSwap: IVault.SingleSwapStruct,
        funds: IVault.FundManagementStruct,
        limit: BigNumberish,
        deadline: BigNumberish
    ], [
        bigint
    ], "payable">;
    filters: {};
}
