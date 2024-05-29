import type { BaseContract, FunctionFragment, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener } from "../../common";
export interface AddressStorageHelperInterface extends Interface {
    getEvent(nameOrSignatureOrTopic: "AddressUpdate"): EventFragment;
}
export declare namespace AddressUpdateEvent {
    type InputTuple = [
        oldAddress: AddressLike,
        newAddress: AddressLike,
        name: string
    ];
    type OutputTuple = [
        oldAddress: string,
        newAddress: string,
        name: string
    ];
    interface OutputObject {
        oldAddress: string;
        newAddress: string;
        name: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface AddressStorageHelper extends BaseContract {
    connect(runner?: ContractRunner | null): AddressStorageHelper;
    waitForDeployment(): Promise<this>;
    interface: AddressStorageHelperInterface;
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
    getEvent(key: "AddressUpdate"): TypedContractEvent<AddressUpdateEvent.InputTuple, AddressUpdateEvent.OutputTuple, AddressUpdateEvent.OutputObject>;
    filters: {
        "AddressUpdate(address,address,string)": TypedContractEvent<AddressUpdateEvent.InputTuple, AddressUpdateEvent.OutputTuple, AddressUpdateEvent.OutputObject>;
        AddressUpdate: TypedContractEvent<AddressUpdateEvent.InputTuple, AddressUpdateEvent.OutputTuple, AddressUpdateEvent.OutputObject>;
    };
}
