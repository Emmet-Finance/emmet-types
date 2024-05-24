import type { BaseContract, BytesLike, FunctionFragment, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener } from "../../common";
export interface IEmmetBridgeTypesInterface extends Interface {
    getEvent(nameOrSignatureOrTopic: "ReceiveInstallment" | "SendInstallment" | "SignerManaged" | "UpdateGasFeeAddress" | "UpdateTxHash" | "UpdatedEmmetData"): EventFragment;
}
export declare namespace ReceiveInstallmentEvent {
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
export declare namespace SendInstallmentEvent {
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
export declare namespace SignerManagedEvent {
    type InputTuple = [signer: AddressLike, operation: string];
    type OutputTuple = [signer: string, operation: string];
    interface OutputObject {
        signer: string;
        operation: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace UpdateGasFeeAddressEvent {
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
export declare namespace UpdateTxHashEvent {
    type InputTuple = [bridgeHash: BytesLike, txHash: BytesLike];
    type OutputTuple = [bridgeHash: string, txHash: string];
    interface OutputObject {
        bridgeHash: string;
        txHash: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace UpdatedEmmetDataEvent {
    type InputTuple = [newContract: AddressLike];
    type OutputTuple = [newContract: string];
    interface OutputObject {
        newContract: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface IEmmetBridgeTypes extends BaseContract {
    connect(runner?: ContractRunner | null): IEmmetBridgeTypes;
    waitForDeployment(): Promise<this>;
    interface: IEmmetBridgeTypesInterface;
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
    getEvent(key: "ReceiveInstallment"): TypedContractEvent<ReceiveInstallmentEvent.InputTuple, ReceiveInstallmentEvent.OutputTuple, ReceiveInstallmentEvent.OutputObject>;
    getEvent(key: "SendInstallment"): TypedContractEvent<SendInstallmentEvent.InputTuple, SendInstallmentEvent.OutputTuple, SendInstallmentEvent.OutputObject>;
    getEvent(key: "SignerManaged"): TypedContractEvent<SignerManagedEvent.InputTuple, SignerManagedEvent.OutputTuple, SignerManagedEvent.OutputObject>;
    getEvent(key: "UpdateGasFeeAddress"): TypedContractEvent<UpdateGasFeeAddressEvent.InputTuple, UpdateGasFeeAddressEvent.OutputTuple, UpdateGasFeeAddressEvent.OutputObject>;
    getEvent(key: "UpdateTxHash"): TypedContractEvent<UpdateTxHashEvent.InputTuple, UpdateTxHashEvent.OutputTuple, UpdateTxHashEvent.OutputObject>;
    getEvent(key: "UpdatedEmmetData"): TypedContractEvent<UpdatedEmmetDataEvent.InputTuple, UpdatedEmmetDataEvent.OutputTuple, UpdatedEmmetDataEvent.OutputObject>;
    filters: {
        "ReceiveInstallment(bytes32)": TypedContractEvent<ReceiveInstallmentEvent.InputTuple, ReceiveInstallmentEvent.OutputTuple, ReceiveInstallmentEvent.OutputObject>;
        ReceiveInstallment: TypedContractEvent<ReceiveInstallmentEvent.InputTuple, ReceiveInstallmentEvent.OutputTuple, ReceiveInstallmentEvent.OutputObject>;
        "SendInstallment(bytes32)": TypedContractEvent<SendInstallmentEvent.InputTuple, SendInstallmentEvent.OutputTuple, SendInstallmentEvent.OutputObject>;
        SendInstallment: TypedContractEvent<SendInstallmentEvent.InputTuple, SendInstallmentEvent.OutputTuple, SendInstallmentEvent.OutputObject>;
        "SignerManaged(address,string)": TypedContractEvent<SignerManagedEvent.InputTuple, SignerManagedEvent.OutputTuple, SignerManagedEvent.OutputObject>;
        SignerManaged: TypedContractEvent<SignerManagedEvent.InputTuple, SignerManagedEvent.OutputTuple, SignerManagedEvent.OutputObject>;
        "UpdateGasFeeAddress(address,address)": TypedContractEvent<UpdateGasFeeAddressEvent.InputTuple, UpdateGasFeeAddressEvent.OutputTuple, UpdateGasFeeAddressEvent.OutputObject>;
        UpdateGasFeeAddress: TypedContractEvent<UpdateGasFeeAddressEvent.InputTuple, UpdateGasFeeAddressEvent.OutputTuple, UpdateGasFeeAddressEvent.OutputObject>;
        "UpdateTxHash(bytes32,bytes32)": TypedContractEvent<UpdateTxHashEvent.InputTuple, UpdateTxHashEvent.OutputTuple, UpdateTxHashEvent.OutputObject>;
        UpdateTxHash: TypedContractEvent<UpdateTxHashEvent.InputTuple, UpdateTxHashEvent.OutputTuple, UpdateTxHashEvent.OutputObject>;
        "UpdatedEmmetData(address)": TypedContractEvent<UpdatedEmmetDataEvent.InputTuple, UpdatedEmmetDataEvent.OutputTuple, UpdatedEmmetDataEvent.OutputObject>;
        UpdatedEmmetData: TypedContractEvent<UpdatedEmmetDataEvent.InputTuple, UpdatedEmmetDataEvent.OutputTuple, UpdatedEmmetDataEvent.OutputObject>;
    };
}
