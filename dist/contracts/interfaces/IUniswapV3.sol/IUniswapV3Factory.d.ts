import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../../../common";
export interface IUniswapV3FactoryInterface extends Interface {
    getFunction(nameOrSignature: "getPool"): FunctionFragment;
    encodeFunctionData(functionFragment: "getPool", values: [AddressLike, AddressLike, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "getPool", data: BytesLike): Result;
}
export interface IUniswapV3Factory extends BaseContract {
    connect(runner?: ContractRunner | null): IUniswapV3Factory;
    waitForDeployment(): Promise<this>;
    interface: IUniswapV3FactoryInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    getPool: TypedContractMethod<[
        tokenA: AddressLike,
        tokenB: AddressLike,
        fee: BigNumberish
    ], [
        string
    ], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "getPool"): TypedContractMethod<[
        tokenA: AddressLike,
        tokenB: AddressLike,
        fee: BigNumberish
    ], [
        string
    ], "view">;
    filters: {};
}
