import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../../../common";
export declare namespace IUniswapV3Router {
    type ExactInputParamsStruct = {
        path: BytesLike;
        recipient: AddressLike;
        deadline: BigNumberish;
        amountIn: BigNumberish;
        amountOutMinimum: BigNumberish;
    };
    type ExactInputParamsStructOutput = [
        path: string,
        recipient: string,
        deadline: bigint,
        amountIn: bigint,
        amountOutMinimum: bigint
    ] & {
        path: string;
        recipient: string;
        deadline: bigint;
        amountIn: bigint;
        amountOutMinimum: bigint;
    };
    type ExactInputSingleParamsStruct = {
        tokenIn: AddressLike;
        tokenOut: AddressLike;
        fee: BigNumberish;
        recipient: AddressLike;
        deadline: BigNumberish;
        amountIn: BigNumberish;
        amountOutMinimum: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
    };
    type ExactInputSingleParamsStructOutput = [
        tokenIn: string,
        tokenOut: string,
        fee: bigint,
        recipient: string,
        deadline: bigint,
        amountIn: bigint,
        amountOutMinimum: bigint,
        sqrtPriceLimitX96: bigint
    ] & {
        tokenIn: string;
        tokenOut: string;
        fee: bigint;
        recipient: string;
        deadline: bigint;
        amountIn: bigint;
        amountOutMinimum: bigint;
        sqrtPriceLimitX96: bigint;
    };
}
export interface IUniswapV3RouterInterface extends Interface {
    getFunction(nameOrSignature: "exactInput" | "exactInputSingle"): FunctionFragment;
    encodeFunctionData(functionFragment: "exactInput", values: [IUniswapV3Router.ExactInputParamsStruct]): string;
    encodeFunctionData(functionFragment: "exactInputSingle", values: [IUniswapV3Router.ExactInputSingleParamsStruct]): string;
    decodeFunctionResult(functionFragment: "exactInput", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exactInputSingle", data: BytesLike): Result;
}
export interface IUniswapV3Router extends BaseContract {
    connect(runner?: ContractRunner | null): IUniswapV3Router;
    waitForDeployment(): Promise<this>;
    interface: IUniswapV3RouterInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    exactInput: TypedContractMethod<[
        params: IUniswapV3Router.ExactInputParamsStruct
    ], [
        bigint
    ], "nonpayable">;
    exactInputSingle: TypedContractMethod<[
        params: IUniswapV3Router.ExactInputSingleParamsStruct
    ], [
        bigint
    ], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "exactInput"): TypedContractMethod<[
        params: IUniswapV3Router.ExactInputParamsStruct
    ], [
        bigint
    ], "nonpayable">;
    getFunction(nameOrSignature: "exactInputSingle"): TypedContractMethod<[
        params: IUniswapV3Router.ExactInputSingleParamsStruct
    ], [
        bigint
    ], "nonpayable">;
    filters: {};
}
