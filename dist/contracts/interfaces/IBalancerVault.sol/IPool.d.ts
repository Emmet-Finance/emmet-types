import type { BaseContract, BytesLike, FunctionFragment, Result, Interface, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../../../common";
export interface IPoolInterface extends Interface {
    getFunction(nameOrSignature: "getPoolId" | "getSwapFeePercentage"): FunctionFragment;
    encodeFunctionData(functionFragment: "getPoolId", values?: undefined): string;
    encodeFunctionData(functionFragment: "getSwapFeePercentage", values?: undefined): string;
    decodeFunctionResult(functionFragment: "getPoolId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSwapFeePercentage", data: BytesLike): Result;
}
export interface IPool extends BaseContract {
    connect(runner?: ContractRunner | null): IPool;
    waitForDeployment(): Promise<this>;
    interface: IPoolInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    getPoolId: TypedContractMethod<[], [string], "view">;
    getSwapFeePercentage: TypedContractMethod<[], [bigint], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "getPoolId"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "getSwapFeePercentage"): TypedContractMethod<[], [bigint], "view">;
    filters: {};
}
