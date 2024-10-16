import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../../common";
export declare namespace CCMTypes {
    type MessageInStruct = {
        txHash: BytesLike;
        value: BigNumberish;
        fromChainId: BigNumberish;
        toChainId: BigNumberish;
        receiver: AddressLike;
        signatures: BigNumberish;
        sender: string;
        data: BytesLike;
    };
    type MessageInStructOutput = [
        txHash: string,
        value: bigint,
        fromChainId: bigint,
        toChainId: bigint,
        receiver: string,
        signatures: bigint,
        sender: string,
        data: string
    ] & {
        txHash: string;
        value: bigint;
        fromChainId: bigint;
        toChainId: bigint;
        receiver: string;
        signatures: bigint;
        sender: string;
        data: string;
    };
    type MessageOutStruct = {
        txHash: BytesLike;
        value: BigNumberish;
        fromChainId: BigNumberish;
        toChainId: BigNumberish;
        sender: AddressLike;
        contr: AddressLike;
        receiver: string;
        data: BytesLike;
    };
    type MessageOutStructOutput = [
        txHash: string,
        value: bigint,
        fromChainId: bigint,
        toChainId: bigint,
        sender: string,
        contr: string,
        receiver: string,
        data: string
    ] & {
        txHash: string;
        value: bigint;
        fromChainId: bigint;
        toChainId: bigint;
        sender: string;
        contr: string;
        receiver: string;
        data: string;
    };
}
export interface ICrossChainMessengerInterface extends Interface {
    getFunction(nameOrSignature: "estimateFee" | "getReceivedMessage" | "getSentMessage" | "sendMsg"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "FeedbackReceived" | "MessageReceived" | "MessageSent"): EventFragment;
    encodeFunctionData(functionFragment: "estimateFee", values: [BigNumberish, BigNumberish, boolean]): string;
    encodeFunctionData(functionFragment: "getReceivedMessage", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getSentMessage", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "sendMsg", values: [
        BigNumberish,
        BigNumberish,
        AddressLike,
        string,
        BytesLike,
        BytesLike,
        boolean
    ]): string;
    decodeFunctionResult(functionFragment: "estimateFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReceivedMessage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSentMessage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendMsg", data: BytesLike): Result;
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
    estimateFee: TypedContractMethod<[
        toChainId: BigNumberish,
        value: BigNumberish,
        isFeeERC20: boolean
    ], [
        [bigint, bigint] & {
            compensation: bigint;
            fee: bigint;
        }
    ], "view">;
    getReceivedMessage: TypedContractMethod<[
        txHash: BytesLike
    ], [
        CCMTypes.MessageInStructOutput
    ], "view">;
    getSentMessage: TypedContractMethod<[
        txHash: BytesLike
    ], [
        CCMTypes.MessageOutStructOutput
    ], "nonpayable">;
    sendMsg: TypedContractMethod<[
        value: BigNumberish,
        toChainId: BigNumberish,
        sender: AddressLike,
        receiver: string,
        data: BytesLike,
        selector: BytesLike,
        isFeeERC20: boolean
    ], [
        string
    ], "payable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "estimateFee"): TypedContractMethod<[
        toChainId: BigNumberish,
        value: BigNumberish,
        isFeeERC20: boolean
    ], [
        [bigint, bigint] & {
            compensation: bigint;
            fee: bigint;
        }
    ], "view">;
    getFunction(nameOrSignature: "getReceivedMessage"): TypedContractMethod<[
        txHash: BytesLike
    ], [
        CCMTypes.MessageInStructOutput
    ], "view">;
    getFunction(nameOrSignature: "getSentMessage"): TypedContractMethod<[
        txHash: BytesLike
    ], [
        CCMTypes.MessageOutStructOutput
    ], "nonpayable">;
    getFunction(nameOrSignature: "sendMsg"): TypedContractMethod<[
        value: BigNumberish,
        toChainId: BigNumberish,
        sender: AddressLike,
        receiver: string,
        data: BytesLike,
        selector: BytesLike,
        isFeeERC20: boolean
    ], [
        string
    ], "payable">;
    getEvent(key: "FeedbackReceived"): TypedContractEvent<FeedbackReceivedEvent.InputTuple, FeedbackReceivedEvent.OutputTuple, FeedbackReceivedEvent.OutputObject>;
    getEvent(key: "MessageReceived"): TypedContractEvent<MessageReceivedEvent.InputTuple, MessageReceivedEvent.OutputTuple, MessageReceivedEvent.OutputObject>;
    getEvent(key: "MessageSent"): TypedContractEvent<MessageSentEvent.InputTuple, MessageSentEvent.OutputTuple, MessageSentEvent.OutputObject>;
    filters: {
        "FeedbackReceived(bytes32,bool,bool,string,string)": TypedContractEvent<FeedbackReceivedEvent.InputTuple, FeedbackReceivedEvent.OutputTuple, FeedbackReceivedEvent.OutputObject>;
        FeedbackReceived: TypedContractEvent<FeedbackReceivedEvent.InputTuple, FeedbackReceivedEvent.OutputTuple, FeedbackReceivedEvent.OutputObject>;
        "MessageReceived(bytes32,uint256,uint128,address,uint256,uint256,bool,string,string,bytes)": TypedContractEvent<MessageReceivedEvent.InputTuple, MessageReceivedEvent.OutputTuple, MessageReceivedEvent.OutputObject>;
        MessageReceived: TypedContractEvent<MessageReceivedEvent.InputTuple, MessageReceivedEvent.OutputTuple, MessageReceivedEvent.OutputObject>;
        "MessageSent(bytes32,uint256,uint256,uint128,address,uint256,uint256,string,bytes)": TypedContractEvent<MessageSentEvent.InputTuple, MessageSentEvent.OutputTuple, MessageSentEvent.OutputObject>;
        MessageSent: TypedContractEvent<MessageSentEvent.InputTuple, MessageSentEvent.OutputTuple, MessageSentEvent.OutputObject>;
    };
}
