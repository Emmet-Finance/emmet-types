import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Interface, EventFragment, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener } from "../../common";
export interface SignaturesInterface extends Interface {
    getEvent(nameOrSignatureOrTopic: "Feedback" | "PartialSignature" | "Signed" | "UpdatedNonEvmId"): EventFragment;
}
export declare namespace FeedbackEvent {
    type InputTuple = [
        txHash: BytesLike,
        returnToChainId: BigNumberish,
        isSuccess: boolean,
        message: string,
        aggregatedSignature: BytesLike[],
        signers: string[]
    ];
    type OutputTuple = [
        txHash: string,
        returnToChainId: bigint,
        isSuccess: boolean,
        message: string,
        aggregatedSignature: string[],
        signers: string[]
    ];
    interface OutputObject {
        txHash: string;
        returnToChainId: bigint;
        isSuccess: boolean;
        message: string;
        aggregatedSignature: string[];
        signers: string[];
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace PartialSignatureEvent {
    type InputTuple = [txHash: BytesLike];
    type OutputTuple = [txHash: string];
    interface OutputObject {
        txHash: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace SignedEvent {
    type InputTuple = [
        txHash: BytesLike,
        nonce: BigNumberish,
        toChainId: BigNumberish,
        fromChainId: BigNumberish,
        aggregatedSignature: BytesLike[],
        signers: BytesLike[],
        callData: BytesLike
    ];
    type OutputTuple = [
        txHash: string,
        nonce: bigint,
        toChainId: bigint,
        fromChainId: bigint,
        aggregatedSignature: string[],
        signers: string[],
        callData: string
    ];
    interface OutputObject {
        txHash: string;
        nonce: bigint;
        toChainId: bigint;
        fromChainId: bigint;
        aggregatedSignature: string[];
        signers: string[];
        callData: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace UpdatedNonEvmIdEvent {
    type InputTuple = [
        chainId: BigNumberish,
        chainName: string,
        operation: string
    ];
    type OutputTuple = [
        chainId: bigint,
        chainName: string,
        operation: string
    ];
    interface OutputObject {
        chainId: bigint;
        chainName: string;
        operation: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface Signatures extends BaseContract {
    connect(runner?: ContractRunner | null): Signatures;
    waitForDeployment(): Promise<this>;
    interface: SignaturesInterface;
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
    getEvent(key: "Feedback"): TypedContractEvent<FeedbackEvent.InputTuple, FeedbackEvent.OutputTuple, FeedbackEvent.OutputObject>;
    getEvent(key: "PartialSignature"): TypedContractEvent<PartialSignatureEvent.InputTuple, PartialSignatureEvent.OutputTuple, PartialSignatureEvent.OutputObject>;
    getEvent(key: "Signed"): TypedContractEvent<SignedEvent.InputTuple, SignedEvent.OutputTuple, SignedEvent.OutputObject>;
    getEvent(key: "UpdatedNonEvmId"): TypedContractEvent<UpdatedNonEvmIdEvent.InputTuple, UpdatedNonEvmIdEvent.OutputTuple, UpdatedNonEvmIdEvent.OutputObject>;
    filters: {
        "Feedback(bytes32,uint128,bool,string,bytes[],string[])": TypedContractEvent<FeedbackEvent.InputTuple, FeedbackEvent.OutputTuple, FeedbackEvent.OutputObject>;
        Feedback: TypedContractEvent<FeedbackEvent.InputTuple, FeedbackEvent.OutputTuple, FeedbackEvent.OutputObject>;
        "PartialSignature(bytes32)": TypedContractEvent<PartialSignatureEvent.InputTuple, PartialSignatureEvent.OutputTuple, PartialSignatureEvent.OutputObject>;
        PartialSignature: TypedContractEvent<PartialSignatureEvent.InputTuple, PartialSignatureEvent.OutputTuple, PartialSignatureEvent.OutputObject>;
        "Signed(bytes32,uint256,uint128,uint128,bytes[],bytes[],bytes)": TypedContractEvent<SignedEvent.InputTuple, SignedEvent.OutputTuple, SignedEvent.OutputObject>;
        Signed: TypedContractEvent<SignedEvent.InputTuple, SignedEvent.OutputTuple, SignedEvent.OutputObject>;
        "UpdatedNonEvmId(uint128,string,string)": TypedContractEvent<UpdatedNonEvmIdEvent.InputTuple, UpdatedNonEvmIdEvent.OutputTuple, UpdatedNonEvmIdEvent.OutputObject>;
        UpdatedNonEvmId: TypedContractEvent<UpdatedNonEvmIdEvent.InputTuple, UpdatedNonEvmIdEvent.OutputTuple, UpdatedNonEvmIdEvent.OutputObject>;
    };
}
