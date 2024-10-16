import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../../common";
export interface IEmmetPriceFeedAdminInterface extends Interface {
    getFunction(nameOrSignature: "updateTokenPrice"): FunctionFragment;
    encodeFunctionData(functionFragment: "updateTokenPrice", values: [BigNumberish, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "updateTokenPrice", data: BytesLike): Result;
}
export interface IEmmetPriceFeedAdmin extends BaseContract {
    connect(runner?: ContractRunner | null): IEmmetPriceFeedAdmin;
    waitForDeployment(): Promise<this>;
    interface: IEmmetPriceFeedAdminInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    updateTokenPrice: TypedContractMethod<[
        newPrice_: BigNumberish,
        answeredInRound_: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "updateTokenPrice"): TypedContractMethod<[
        newPrice_: BigNumberish,
        answeredInRound_: BigNumberish
    ], [
        void
    ], "nonpayable">;
    filters: {};
}
