import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../../common";
export interface IEmmetTokenVaultInterface extends Interface {
    getFunction(nameOrSignature: "sendETH" | "transfer"): FunctionFragment;
    encodeFunctionData(functionFragment: "sendETH", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "transfer", values: [AddressLike, AddressLike, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "sendETH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
}
export interface IEmmetTokenVault extends BaseContract {
    connect(runner?: ContractRunner | null): IEmmetTokenVault;
    waitForDeployment(): Promise<this>;
    interface: IEmmetTokenVaultInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    sendETH: TypedContractMethod<[
        to_: AddressLike,
        amount_: BigNumberish
    ], [
        void
    ], "nonpayable">;
    transfer: TypedContractMethod<[
        lockedToken_: AddressLike,
        to_: AddressLike,
        amount_: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "sendETH"): TypedContractMethod<[
        to_: AddressLike,
        amount_: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "transfer"): TypedContractMethod<[
        lockedToken_: AddressLike,
        to_: AddressLike,
        amount_: BigNumberish
    ], [
        void
    ], "nonpayable">;
    filters: {};
}
