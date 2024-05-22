import type { BaseContract, FunctionFragment, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener } from "../../common";
export interface BalancerHelperInterface extends Interface {
    getEvent(nameOrSignatureOrTopic: "BalancerPoolUpdate"): EventFragment;
}
export declare namespace BalancerPoolUpdateEvent {
    type InputTuple = [
        tokenIn: AddressLike,
        tokenOut: AddressLike,
        pool: AddressLike,
        operation: string
    ];
    type OutputTuple = [
        tokenIn: string,
        tokenOut: string,
        pool: string,
        operation: string
    ];
    interface OutputObject {
        tokenIn: string;
        tokenOut: string;
        pool: string;
        operation: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface BalancerHelper extends BaseContract {
    connect(runner?: ContractRunner | null): BalancerHelper;
    waitForDeployment(): Promise<this>;
    interface: BalancerHelperInterface;
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
    getEvent(key: "BalancerPoolUpdate"): TypedContractEvent<BalancerPoolUpdateEvent.InputTuple, BalancerPoolUpdateEvent.OutputTuple, BalancerPoolUpdateEvent.OutputObject>;
    filters: {
        "BalancerPoolUpdate(address,address,address,string)": TypedContractEvent<BalancerPoolUpdateEvent.InputTuple, BalancerPoolUpdateEvent.OutputTuple, BalancerPoolUpdateEvent.OutputObject>;
        BalancerPoolUpdate: TypedContractEvent<BalancerPoolUpdateEvent.InputTuple, BalancerPoolUpdateEvent.OutputTuple, BalancerPoolUpdateEvent.OutputObject>;
    };
}
