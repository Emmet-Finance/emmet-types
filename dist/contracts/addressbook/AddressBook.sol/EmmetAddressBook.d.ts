import type { BaseContract, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../../../common";
export interface EmmetAddressBookInterface extends Interface {
    getFunction(nameOrSignature: "count" | "get" | "manager" | "names" | "set" | "supportsInterface" | "updateAdmin"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "AddressUpdate"): EventFragment;
    encodeFunctionData(functionFragment: "count", values?: undefined): string;
    encodeFunctionData(functionFragment: "get", values: [string]): string;
    encodeFunctionData(functionFragment: "manager", values?: undefined): string;
    encodeFunctionData(functionFragment: "names", values?: undefined): string;
    encodeFunctionData(functionFragment: "set", values: [string, AddressLike]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "updateAdmin", values: [AddressLike]): string;
    decodeFunctionResult(functionFragment: "count", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "get", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "manager", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "names", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "set", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateAdmin", data: BytesLike): Result;
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
export interface EmmetAddressBook extends BaseContract {
    connect(runner?: ContractRunner | null): EmmetAddressBook;
    waitForDeployment(): Promise<this>;
    interface: EmmetAddressBookInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    count: TypedContractMethod<[], [bigint], "view">;
    get: TypedContractMethod<[name: string], [string], "view">;
    manager: TypedContractMethod<[], [string], "view">;
    names: TypedContractMethod<[], [string[]], "view">;
    set: TypedContractMethod<[
        name: string,
        asset: AddressLike
    ], [
        void
    ], "nonpayable">;
    supportsInterface: TypedContractMethod<[
        interfaceId: BytesLike
    ], [
        boolean
    ], "view">;
    updateAdmin: TypedContractMethod<[
        newAdmin: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "count"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "get"): TypedContractMethod<[name: string], [string], "view">;
    getFunction(nameOrSignature: "manager"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "names"): TypedContractMethod<[], [string[]], "view">;
    getFunction(nameOrSignature: "set"): TypedContractMethod<[
        name: string,
        asset: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "supportsInterface"): TypedContractMethod<[interfaceId: BytesLike], [boolean], "view">;
    getFunction(nameOrSignature: "updateAdmin"): TypedContractMethod<[newAdmin: AddressLike], [void], "nonpayable">;
    getEvent(key: "AddressUpdate"): TypedContractEvent<AddressUpdateEvent.InputTuple, AddressUpdateEvent.OutputTuple, AddressUpdateEvent.OutputObject>;
    filters: {
        "AddressUpdate(address,address,string)": TypedContractEvent<AddressUpdateEvent.InputTuple, AddressUpdateEvent.OutputTuple, AddressUpdateEvent.OutputObject>;
        AddressUpdate: TypedContractEvent<AddressUpdateEvent.InputTuple, AddressUpdateEvent.OutputTuple, AddressUpdateEvent.OutputObject>;
    };
}
