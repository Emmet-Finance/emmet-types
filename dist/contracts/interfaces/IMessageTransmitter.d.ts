import type { BaseContract, BytesLike, FunctionFragment, Result, Interface, EventFragment, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../../common";
export interface IMessageTransmitterInterface extends Interface {
    getFunction(nameOrSignature: "receiveMessage"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "MessageSent"): EventFragment;
    encodeFunctionData(functionFragment: "receiveMessage", values: [BytesLike, BytesLike]): string;
    decodeFunctionResult(functionFragment: "receiveMessage", data: BytesLike): Result;
}
export declare namespace MessageSentEvent {
    type InputTuple = [message: BytesLike];
    type OutputTuple = [message: string];
    interface OutputObject {
        message: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface IMessageTransmitter extends BaseContract {
    connect(runner?: ContractRunner | null): IMessageTransmitter;
    waitForDeployment(): Promise<this>;
    interface: IMessageTransmitterInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    receiveMessage: TypedContractMethod<[
        message: BytesLike,
        signature: BytesLike
    ], [
        boolean
    ], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "receiveMessage"): TypedContractMethod<[
        message: BytesLike,
        signature: BytesLike
    ], [
        boolean
    ], "nonpayable">;
    getEvent(key: "MessageSent"): TypedContractEvent<MessageSentEvent.InputTuple, MessageSentEvent.OutputTuple, MessageSentEvent.OutputObject>;
    filters: {
        "MessageSent(bytes)": TypedContractEvent<MessageSentEvent.InputTuple, MessageSentEvent.OutputTuple, MessageSentEvent.OutputObject>;
        MessageSent: TypedContractEvent<MessageSentEvent.InputTuple, MessageSentEvent.OutputTuple, MessageSentEvent.OutputObject>;
    };
}
