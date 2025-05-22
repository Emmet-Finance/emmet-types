import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../../../../common";
export interface IEmmetLPV2Interface extends Interface {
    getFunction(nameOrSignature: "getTokenFee" | "releaseTokens"): FunctionFragment;
    encodeFunctionData(functionFragment: "getTokenFee", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "releaseTokens", values: [AddressLike, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "getTokenFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "releaseTokens", data: BytesLike): Result;
}
export interface IEmmetLPV2 extends BaseContract {
    connect(runner?: ContractRunner | null): IEmmetLPV2;
    waitForDeployment(): Promise<this>;
    interface: IEmmetLPV2Interface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    getTokenFee: TypedContractMethod<[
        amount: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    releaseTokens: TypedContractMethod<[
        to: AddressLike,
        amount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "getTokenFee"): TypedContractMethod<[amount: BigNumberish], [bigint], "nonpayable">;
    getFunction(nameOrSignature: "releaseTokens"): TypedContractMethod<[
        to: AddressLike,
        amount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    filters: {};
}
