import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../../common";
export interface UniswapV3HelperInterface extends Interface {
    getFunction(nameOrSignature: "getPoolAddress" | "getPoolFee" | "hasEnoughLiquidity"): FunctionFragment;
    encodeFunctionData(functionFragment: "getPoolAddress", values: [AddressLike, AddressLike, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getPoolFee", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "hasEnoughLiquidity", values: [AddressLike, BigNumberish, AddressLike]): string;
    decodeFunctionResult(functionFragment: "getPoolAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPoolFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasEnoughLiquidity", data: BytesLike): Result;
}
export interface UniswapV3Helper extends BaseContract {
    connect(runner?: ContractRunner | null): UniswapV3Helper;
    waitForDeployment(): Promise<this>;
    interface: UniswapV3HelperInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    getPoolAddress: TypedContractMethod<[
        uniswapV3FactoryAddress: AddressLike,
        tokenA: AddressLike,
        tokenB: AddressLike,
        feeTier: BigNumberish
    ], [
        string
    ], "view">;
    getPoolFee: TypedContractMethod<[poolAddress: AddressLike], [bigint], "view">;
    hasEnoughLiquidity: TypedContractMethod<[
        poolAddress: AddressLike,
        amountOutMin: BigNumberish,
        tokenOut: AddressLike
    ], [
        boolean
    ], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "getPoolAddress"): TypedContractMethod<[
        uniswapV3FactoryAddress: AddressLike,
        tokenA: AddressLike,
        tokenB: AddressLike,
        feeTier: BigNumberish
    ], [
        string
    ], "view">;
    getFunction(nameOrSignature: "getPoolFee"): TypedContractMethod<[poolAddress: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "hasEnoughLiquidity"): TypedContractMethod<[
        poolAddress: AddressLike,
        amountOutMin: BigNumberish,
        tokenOut: AddressLike
    ], [
        boolean
    ], "view">;
    filters: {};
}
