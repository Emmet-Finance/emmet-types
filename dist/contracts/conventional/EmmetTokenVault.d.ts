import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../../common";
export interface EmmetTokenVaultInterface extends Interface {
    getFunction(nameOrSignature: "admin" | "bridge" | "initialize" | "sendETH" | "transfer" | "updateAdmin" | "updateBridge"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized" | "Update"): EventFragment;
    encodeFunctionData(functionFragment: "admin", values?: undefined): string;
    encodeFunctionData(functionFragment: "bridge", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "sendETH", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "transfer", values: [AddressLike, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "updateAdmin", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "updateBridge", values: [AddressLike]): string;
    decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bridge", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendETH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateBridge", data: BytesLike): Result;
}
export declare namespace InitializedEvent {
    type InputTuple = [version: BigNumberish];
    type OutputTuple = [version: bigint];
    interface OutputObject {
        version: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace UpdateEvent {
    type InputTuple = [oldAddress: AddressLike, newAddress: AddressLike];
    type OutputTuple = [oldAddress: string, newAddress: string];
    interface OutputObject {
        oldAddress: string;
        newAddress: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface EmmetTokenVault extends BaseContract {
    connect(runner?: ContractRunner | null): EmmetTokenVault;
    waitForDeployment(): Promise<this>;
    interface: EmmetTokenVaultInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    admin: TypedContractMethod<[], [string], "view">;
    bridge: TypedContractMethod<[], [string], "view">;
    initialize: TypedContractMethod<[bridge_: AddressLike], [void], "nonpayable">;
    sendETH: TypedContractMethod<[
        to_: AddressLike,
        amount_: BigNumberish
    ], [
        void
    ], "nonpayable">;
    transfer: TypedContractMethod<[
        lockedToken_: AddressLike,
        to_: AddressLike,
        amount_: BigNumberish
    ], [
        void
    ], "nonpayable">;
    updateAdmin: TypedContractMethod<[
        newAddress_: AddressLike
    ], [
        void
    ], "nonpayable">;
    updateBridge: TypedContractMethod<[
        newAddress_: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "admin"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "bridge"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "initialize"): TypedContractMethod<[bridge_: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "sendETH"): TypedContractMethod<[
        to_: AddressLike,
        amount_: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "transfer"): TypedContractMethod<[
        lockedToken_: AddressLike,
        to_: AddressLike,
        amount_: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "updateAdmin"): TypedContractMethod<[newAddress_: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "updateBridge"): TypedContractMethod<[newAddress_: AddressLike], [void], "nonpayable">;
    getEvent(key: "Initialized"): TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
    getEvent(key: "Update"): TypedContractEvent<UpdateEvent.InputTuple, UpdateEvent.OutputTuple, UpdateEvent.OutputObject>;
    filters: {
        "Initialized(uint64)": TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
        Initialized: TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
        "Update(address,address)": TypedContractEvent<UpdateEvent.InputTuple, UpdateEvent.OutputTuple, UpdateEvent.OutputObject>;
        Update: TypedContractEvent<UpdateEvent.InputTuple, UpdateEvent.OutputTuple, UpdateEvent.OutputObject>;
    };
}
