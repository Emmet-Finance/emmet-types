import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../../../common";
export interface IUniswapV2RouterInterface extends Interface {
    getFunction(nameOrSignature: "getAmountsOut" | "swapExactTokensForTokens"): FunctionFragment;
    encodeFunctionData(functionFragment: "getAmountsOut", values: [BigNumberish, AddressLike[]]): string;
    encodeFunctionData(functionFragment: "swapExactTokensForTokens", values: [
        BigNumberish,
        BigNumberish,
        AddressLike[],
        AddressLike,
        BigNumberish
    ]): string;
    decodeFunctionResult(functionFragment: "getAmountsOut", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapExactTokensForTokens", data: BytesLike): Result;
}
export interface IUniswapV2Router extends BaseContract {
    connect(runner?: ContractRunner | null): IUniswapV2Router;
    waitForDeployment(): Promise<this>;
    interface: IUniswapV2RouterInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    getAmountsOut: TypedContractMethod<[
        amountIn: BigNumberish,
        path: AddressLike[]
    ], [
        bigint[]
    ], "view">;
    swapExactTokensForTokens: TypedContractMethod<[
        amountIn: BigNumberish,
        amountOutMin: BigNumberish,
        path: AddressLike[],
        to: AddressLike,
        deadline: BigNumberish
    ], [
        bigint[]
    ], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "getAmountsOut"): TypedContractMethod<[
        amountIn: BigNumberish,
        path: AddressLike[]
    ], [
        bigint[]
    ], "view">;
    getFunction(nameOrSignature: "swapExactTokensForTokens"): TypedContractMethod<[
        amountIn: BigNumberish,
        amountOutMin: BigNumberish,
        path: AddressLike[],
        to: AddressLike,
        deadline: BigNumberish
    ], [
        bigint[]
    ], "nonpayable">;
    filters: {};
}
