import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../../../common";
export interface IBridgeUtilityInterface extends Interface {
    getFunction(nameOrSignature: "accept" | "send"): FunctionFragment;
    encodeFunctionData(functionFragment: "accept", values?: undefined): string;
    encodeFunctionData(functionFragment: "send", values: [BigNumberish, BigNumberish, AddressLike, string, BytesLike]): string;
    decodeFunctionResult(functionFragment: "accept", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "send", data: BytesLike): Result;
}
export interface IBridgeUtility extends BaseContract {
    connect(runner?: ContractRunner | null): IBridgeUtility;
    waitForDeployment(): Promise<this>;
    interface: IBridgeUtilityInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    accept: TypedContractMethod<[], [void], "nonpayable">;
    send: TypedContractMethod<[
        toChainId: BigNumberish,
        amount: BigNumberish,
        token: AddressLike,
        to: string,
        data: BytesLike
    ], [
        boolean
    ], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "accept"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "send"): TypedContractMethod<[
        toChainId: BigNumberish,
        amount: BigNumberish,
        token: AddressLike,
        to: string,
        data: BytesLike
    ], [
        boolean
    ], "nonpayable">;
    filters: {};
}
