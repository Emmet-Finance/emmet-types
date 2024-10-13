import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../../common";
export declare namespace BridgeTypes {
    type ReceiveParamsStruct = {
        blockNumber: BigNumberish;
        foreignIndexOut: BigNumberish;
        value: BigNumberish;
        start: BigNumberish;
        sentAmount: BigNumberish;
        receiveAmount: BigNumberish;
        fromChainId: BigNumberish;
        toChainId: BigNumberish;
        to: string;
        fromToken: string;
        toToken: string;
        data: BytesLike;
    };
    type ReceiveParamsStructOutput = [
        blockNumber: bigint,
        foreignIndexOut: bigint,
        value: bigint,
        start: bigint,
        sentAmount: bigint,
        receiveAmount: bigint,
        fromChainId: bigint,
        toChainId: bigint,
        to: string,
        fromToken: string,
        toToken: string,
        data: string
    ] & {
        blockNumber: bigint;
        foreignIndexOut: bigint;
        value: bigint;
        start: bigint;
        sentAmount: bigint;
        receiveAmount: bigint;
        fromChainId: bigint;
        toChainId: bigint;
        to: string;
        fromToken: string;
        toToken: string;
        data: string;
    };
}
export interface IEmmetBridgeInterface extends Interface {
    getFunction(nameOrSignature: "receiveInstallment"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "Refund"): EventFragment;
    encodeFunctionData(functionFragment: "receiveInstallment", values: [BytesLike, BridgeTypes.ReceiveParamsStruct]): string;
    decodeFunctionResult(functionFragment: "receiveInstallment", data: BytesLike): Result;
}
export declare namespace RefundEvent {
    type InputTuple = [
        user: AddressLike,
        amount: BigNumberish,
        token: string
    ];
    type OutputTuple = [user: string, amount: bigint, token: string];
    interface OutputObject {
        user: string;
        amount: bigint;
        token: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface IEmmetBridge extends BaseContract {
    connect(runner?: ContractRunner | null): IEmmetBridge;
    waitForDeployment(): Promise<this>;
    interface: IEmmetBridgeInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    receiveInstallment: TypedContractMethod<[
        txHash: BytesLike,
        params: BridgeTypes.ReceiveParamsStruct
    ], [
        string
    ], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "receiveInstallment"): TypedContractMethod<[
        txHash: BytesLike,
        params: BridgeTypes.ReceiveParamsStruct
    ], [
        string
    ], "nonpayable">;
    getEvent(key: "Refund"): TypedContractEvent<RefundEvent.InputTuple, RefundEvent.OutputTuple, RefundEvent.OutputObject>;
    filters: {
        "Refund(address,uint256,string)": TypedContractEvent<RefundEvent.InputTuple, RefundEvent.OutputTuple, RefundEvent.OutputObject>;
        Refund: TypedContractEvent<RefundEvent.InputTuple, RefundEvent.OutputTuple, RefundEvent.OutputObject>;
    };
}
