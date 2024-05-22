import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../../common";
export interface ITokenMessengerInterface extends Interface {
    getFunction(nameOrSignature: "depositForBurn"): FunctionFragment;
    encodeFunctionData(functionFragment: "depositForBurn", values: [BigNumberish, BigNumberish, BytesLike, AddressLike]): string;
    decodeFunctionResult(functionFragment: "depositForBurn", data: BytesLike): Result;
}
export interface ITokenMessenger extends BaseContract {
    connect(runner?: ContractRunner | null): ITokenMessenger;
    waitForDeployment(): Promise<this>;
    interface: ITokenMessengerInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    depositForBurn: TypedContractMethod<[
        amount: BigNumberish,
        destinationDomain: BigNumberish,
        mintRecipient: BytesLike,
        burnToken: AddressLike
    ], [
        bigint
    ], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "depositForBurn"): TypedContractMethod<[
        amount: BigNumberish,
        destinationDomain: BigNumberish,
        mintRecipient: BytesLike,
        burnToken: AddressLike
    ], [
        bigint
    ], "nonpayable">;
    filters: {};
}
