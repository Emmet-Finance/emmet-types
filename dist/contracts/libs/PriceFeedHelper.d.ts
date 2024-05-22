import type { BaseContract, FunctionFragment, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener } from "../../common";
export interface PriceFeedHelperInterface extends Interface {
    getEvent(nameOrSignatureOrTopic: "PriceFeedUpdate"): EventFragment;
}
export declare namespace PriceFeedUpdateEvent {
    type InputTuple = [
        symbol: string,
        oldAddress: AddressLike,
        newAddress: AddressLike,
        operation: string
    ];
    type OutputTuple = [
        symbol: string,
        oldAddress: string,
        newAddress: string,
        operation: string
    ];
    interface OutputObject {
        symbol: string;
        oldAddress: string;
        newAddress: string;
        operation: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface PriceFeedHelper extends BaseContract {
    connect(runner?: ContractRunner | null): PriceFeedHelper;
    waitForDeployment(): Promise<this>;
    interface: PriceFeedHelperInterface;
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
    getEvent(key: "PriceFeedUpdate"): TypedContractEvent<PriceFeedUpdateEvent.InputTuple, PriceFeedUpdateEvent.OutputTuple, PriceFeedUpdateEvent.OutputObject>;
    filters: {
        "PriceFeedUpdate(string,address,address,string)": TypedContractEvent<PriceFeedUpdateEvent.InputTuple, PriceFeedUpdateEvent.OutputTuple, PriceFeedUpdateEvent.OutputObject>;
        PriceFeedUpdate: TypedContractEvent<PriceFeedUpdateEvent.InputTuple, PriceFeedUpdateEvent.OutputTuple, PriceFeedUpdateEvent.OutputObject>;
    };
}
