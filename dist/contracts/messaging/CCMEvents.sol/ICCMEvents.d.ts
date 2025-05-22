import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener } from "../../../common";
export interface ICCMEventsInterface extends Interface {
    getEvent(nameOrSignatureOrTopic: "FeedbackReceived" | "MessageReceived" | "MessageSent"): EventFragment;
}
export declare namespace FeedbackReceivedEvent {
    type InputTuple = [
        txHash: BytesLike,
        isSuccess: boolean,
        informedCaller: boolean,
        foreignMessage: string,
        callerResponce: string
    ];
    type OutputTuple = [
        txHash: string,
        isSuccess: boolean,
        informedCaller: boolean,
        foreignMessage: string,
        callerResponce: string
    ];
    interface OutputObject {
        txHash: string;
        isSuccess: boolean;
        informedCaller: boolean;
        foreignMessage: string;
        callerResponce: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace MessageReceivedEvent {
    type InputTuple = [
        txHash: BytesLike,
        id: BigNumberish,
        fromChainId: BigNumberish,
        receiver: AddressLike,
        value: BigNumberish,
        signatures: BigNumberish,
        isSuccess: boolean,
        message: string,
        sender: string,
        data: BytesLike
    ];
    type OutputTuple = [
        txHash: string,
        id: bigint,
        fromChainId: bigint,
        receiver: string,
        value: bigint,
        signatures: bigint,
        isSuccess: boolean,
        message: string,
        sender: string,
        data: string
    ];
    interface OutputObject {
        txHash: string;
        id: bigint;
        fromChainId: bigint;
        receiver: string;
        value: bigint;
        signatures: bigint;
        isSuccess: boolean;
        message: string;
        sender: string;
        data: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace MessageSentEvent {
    type InputTuple = [
        txHash: BytesLike,
        blockNumber: BigNumberish,
        compensation: BigNumberish,
        id: BigNumberish,
        toChainId: BigNumberish,
        sender: AddressLike,
        value: BigNumberish,
        timestamp: BigNumberish,
        receiver: string,
        data: BytesLike
    ];
    type OutputTuple = [
        txHash: string,
        blockNumber: bigint,
        compensation: bigint,
        id: bigint,
        toChainId: bigint,
        sender: string,
        value: bigint,
        timestamp: bigint,
        receiver: string,
        data: string
    ];
    interface OutputObject {
        txHash: string;
        blockNumber: bigint;
        compensation: bigint;
        id: bigint;
        toChainId: bigint;
        sender: string;
        value: bigint;
        timestamp: bigint;
        receiver: string;
        data: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface ICCMEvents extends BaseContract {
    connect(runner?: ContractRunner | null): ICCMEvents;
    waitForDeployment(): Promise<this>;
    interface: ICCMEventsInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getEvent(key: "FeedbackReceived"): TypedContractEvent<FeedbackReceivedEvent.InputTuple, FeedbackReceivedEvent.OutputTuple, FeedbackReceivedEvent.OutputObject>;
    getEvent(key: "MessageReceived"): TypedContractEvent<MessageReceivedEvent.InputTuple, MessageReceivedEvent.OutputTuple, MessageReceivedEvent.OutputObject>;
    getEvent(key: "MessageSent"): TypedContractEvent<MessageSentEvent.InputTuple, MessageSentEvent.OutputTuple, MessageSentEvent.OutputObject>;
    filters: {
        "FeedbackReceived(bytes32,bool,bool,string,string)": TypedContractEvent<FeedbackReceivedEvent.InputTuple, FeedbackReceivedEvent.OutputTuple, FeedbackReceivedEvent.OutputObject>;
        FeedbackReceived: TypedContractEvent<FeedbackReceivedEvent.InputTuple, FeedbackReceivedEvent.OutputTuple, FeedbackReceivedEvent.OutputObject>;
        "MessageReceived(bytes32,uint256,uint128,address,uint256,uint256,bool,string,string,bytes)": TypedContractEvent<MessageReceivedEvent.InputTuple, MessageReceivedEvent.OutputTuple, MessageReceivedEvent.OutputObject>;
        MessageReceived: TypedContractEvent<MessageReceivedEvent.InputTuple, MessageReceivedEvent.OutputTuple, MessageReceivedEvent.OutputObject>;
        "MessageSent(bytes32,uint256,uint256,uint256,uint128,address,uint256,uint256,string,bytes)": TypedContractEvent<MessageSentEvent.InputTuple, MessageSentEvent.OutputTuple, MessageSentEvent.OutputObject>;
        MessageSent: TypedContractEvent<MessageSentEvent.InputTuple, MessageSentEvent.OutputTuple, MessageSentEvent.OutputObject>;
    };
}
