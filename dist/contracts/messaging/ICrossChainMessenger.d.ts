import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../../common";
export declare namespace TransactionRegister {
    type OutgoingStruct = {
        sender: AddressLike;
        toChainId: BigNumberish;
        blockNumber: BigNumberish;
    };
    type OutgoingStructOutput = [
        sender: string,
        toChainId: bigint,
        blockNumber: bigint
    ] & {
        sender: string;
        toChainId: bigint;
        blockNumber: bigint;
    };
}
export interface ICrossChainMessengerInterface extends Interface {
    getFunction(nameOrSignature: "estimateFee" | "getMappedContract" | "getReceivedMessage" | "getSentMessage" | "sendMsg"): FunctionFragment;
    encodeFunctionData(functionFragment: "estimateFee", values?: undefined): string;
    encodeFunctionData(functionFragment: "getMappedContract", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getReceivedMessage", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getSentMessage", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "sendMsg", values: [
        BigNumberish,
        BigNumberish,
        AddressLike,
        string,
        BytesLike,
        BytesLike
    ]): string;
    decodeFunctionResult(functionFragment: "estimateFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getMappedContract", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReceivedMessage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSentMessage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendMsg", data: BytesLike): Result;
}
export interface ICrossChainMessenger extends BaseContract {
    connect(runner?: ContractRunner | null): ICrossChainMessenger;
    waitForDeployment(): Promise<this>;
    interface: ICrossChainMessengerInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    estimateFee: TypedContractMethod<[], [bigint], "view">;
    getMappedContract: TypedContractMethod<[
        sender: AddressLike,
        chainId: BigNumberish
    ], [
        string
    ], "view">;
    getReceivedMessage: TypedContractMethod<[
        txHash: BytesLike
    ], [
        bigint
    ], "view">;
    getSentMessage: TypedContractMethod<[
        txHash: BytesLike
    ], [
        TransactionRegister.OutgoingStructOutput
    ], "view">;
    sendMsg: TypedContractMethod<[
        value: BigNumberish,
        toChainId: BigNumberish,
        sender: AddressLike,
        receiver: string,
        data: BytesLike,
        selector: BytesLike
    ], [
        string
    ], "payable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "estimateFee"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "getMappedContract"): TypedContractMethod<[
        sender: AddressLike,
        chainId: BigNumberish
    ], [
        string
    ], "view">;
    getFunction(nameOrSignature: "getReceivedMessage"): TypedContractMethod<[txHash: BytesLike], [bigint], "view">;
    getFunction(nameOrSignature: "getSentMessage"): TypedContractMethod<[
        txHash: BytesLike
    ], [
        TransactionRegister.OutgoingStructOutput
    ], "view">;
    getFunction(nameOrSignature: "sendMsg"): TypedContractMethod<[
        value: BigNumberish,
        toChainId: BigNumberish,
        sender: AddressLike,
        receiver: string,
        data: BytesLike,
        selector: BytesLike
    ], [
        string
    ], "payable">;
    filters: {};
}
