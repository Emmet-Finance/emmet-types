import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener } from "../../../common";
export interface BridgeTypesInterface extends Interface {
    getEvent(nameOrSignatureOrTopic: "ReceivedInstallment" | "SentInstallment"): EventFragment;
}
export declare namespace ReceivedInstallmentEvent {
    type InputTuple = [
        ccmHash: BytesLike,
        fromChainId: BigNumberish,
        foreignIndexOut: BigNumberish,
        sentAmount: BigNumberish,
        receiveAmount: BigNumberish,
        to: AddressLike,
        fromToken: string,
        toToken: string
    ];
    type OutputTuple = [
        ccmHash: string,
        fromChainId: bigint,
        foreignIndexOut: bigint,
        sentAmount: bigint,
        receiveAmount: bigint,
        to: string,
        fromToken: string,
        toToken: string
    ];
    interface OutputObject {
        ccmHash: string;
        fromChainId: bigint;
        foreignIndexOut: bigint;
        sentAmount: bigint;
        receiveAmount: bigint;
        to: string;
        fromToken: string;
        toToken: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace SentInstallmentEvent {
    type InputTuple = [
        txHash: BytesLike,
        toChainId: BigNumberish,
        sentAmount: BigNumberish,
        fromToken: string,
        toToken: string,
        to: string
    ];
    type OutputTuple = [
        txHash: string,
        toChainId: bigint,
        sentAmount: bigint,
        fromToken: string,
        toToken: string,
        to: string
    ];
    interface OutputObject {
        txHash: string;
        toChainId: bigint;
        sentAmount: bigint;
        fromToken: string;
        toToken: string;
        to: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface BridgeTypes extends BaseContract {
    connect(runner?: ContractRunner | null): BridgeTypes;
    waitForDeployment(): Promise<this>;
    interface: BridgeTypesInterface;
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
    getEvent(key: "ReceivedInstallment"): TypedContractEvent<ReceivedInstallmentEvent.InputTuple, ReceivedInstallmentEvent.OutputTuple, ReceivedInstallmentEvent.OutputObject>;
    getEvent(key: "SentInstallment"): TypedContractEvent<SentInstallmentEvent.InputTuple, SentInstallmentEvent.OutputTuple, SentInstallmentEvent.OutputObject>;
    filters: {
        "ReceivedInstallment(bytes32,uint128,uint256,uint256,uint256,address,string,string)": TypedContractEvent<ReceivedInstallmentEvent.InputTuple, ReceivedInstallmentEvent.OutputTuple, ReceivedInstallmentEvent.OutputObject>;
        ReceivedInstallment: TypedContractEvent<ReceivedInstallmentEvent.InputTuple, ReceivedInstallmentEvent.OutputTuple, ReceivedInstallmentEvent.OutputObject>;
        "SentInstallment(bytes32,uint128,uint256,string,string,string)": TypedContractEvent<SentInstallmentEvent.InputTuple, SentInstallmentEvent.OutputTuple, SentInstallmentEvent.OutputObject>;
        SentInstallment: TypedContractEvent<SentInstallmentEvent.InputTuple, SentInstallmentEvent.OutputTuple, SentInstallmentEvent.OutputObject>;
    };
}
