import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../../common";
export interface MockCCMUserInterface extends Interface {
    getFunction(nameOrSignature: "ccm" | "estimateFee" | "feedback" | "sendMessage"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "Feedback"): EventFragment;
    encodeFunctionData(functionFragment: "ccm", values?: undefined): string;
    encodeFunctionData(functionFragment: "estimateFee", values: [BigNumberish, BigNumberish, boolean]): string;
    encodeFunctionData(functionFragment: "feedback", values: [BytesLike, boolean, string, BytesLike[], string[]]): string;
    encodeFunctionData(functionFragment: "sendMessage", values: [BigNumberish, BigNumberish, string, BytesLike, BytesLike, boolean]): string;
    decodeFunctionResult(functionFragment: "ccm", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "estimateFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "feedback", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendMessage", data: BytesLike): Result;
}
export declare namespace FeedbackEvent {
    type InputTuple = [
        txHash: BytesLike,
        isSuccess: boolean,
        message: string,
        aggregatedSignatureFinal: BytesLike[],
        signersFinal: AddressLike[]
    ];
    type OutputTuple = [
        txHash: string,
        isSuccess: boolean,
        message: string,
        aggregatedSignatureFinal: string[],
        signersFinal: string[]
    ];
    interface OutputObject {
        txHash: string;
        isSuccess: boolean;
        message: string;
        aggregatedSignatureFinal: string[];
        signersFinal: string[];
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface MockCCMUser extends BaseContract {
    connect(runner?: ContractRunner | null): MockCCMUser;
    waitForDeployment(): Promise<this>;
    interface: MockCCMUserInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    ccm: TypedContractMethod<[], [string], "view">;
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
    feedback: TypedContractMethod<[
        txHash: BytesLike,
        isSuccess: boolean,
        message: string,
        aggregatedSignatureFinal: BytesLike[],
        signersFinal: string[]
    ], [
        void
    ], "nonpayable">;
    sendMessage: TypedContractMethod<[
        value: BigNumberish,
        toChainId: BigNumberish,
        receiver: string,
        data: BytesLike,
        selector: BytesLike,
        isFeeERC20: boolean
    ], [
        void
    ], "payable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "ccm"): TypedContractMethod<[], [string], "view">;
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
    getFunction(nameOrSignature: "feedback"): TypedContractMethod<[
        txHash: BytesLike,
        isSuccess: boolean,
        message: string,
        aggregatedSignatureFinal: BytesLike[],
        signersFinal: string[]
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "sendMessage"): TypedContractMethod<[
        value: BigNumberish,
        toChainId: BigNumberish,
        receiver: string,
        data: BytesLike,
        selector: BytesLike,
        isFeeERC20: boolean
    ], [
        void
    ], "payable">;
    getEvent(key: "Feedback"): TypedContractEvent<FeedbackEvent.InputTuple, FeedbackEvent.OutputTuple, FeedbackEvent.OutputObject>;
    filters: {
        "Feedback(bytes32,bool,string,bytes[],address[])": TypedContractEvent<FeedbackEvent.InputTuple, FeedbackEvent.OutputTuple, FeedbackEvent.OutputObject>;
        Feedback: TypedContractEvent<FeedbackEvent.InputTuple, FeedbackEvent.OutputTuple, FeedbackEvent.OutputObject>;
    };
}
