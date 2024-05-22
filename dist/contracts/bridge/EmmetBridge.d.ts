import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../../common";
export interface EmmetBridgeInterface extends Interface {
    getFunction(nameOrSignature: "CFO_ROLE" | "DEFAULT_ADMIN_ROLE" | "MANAGER_ROLE" | "SIGNER_ROLE" | "emmetData" | "emmetTokenVault" | "gasFeesAdmin" | "getRoleAdmin" | "grantRole" | "hasRole" | "incommingTransactions" | "outgoingTransactions" | "receiveInstallment" | "renounceRole" | "revokeRole" | "sendInstallment" | "supportsInterface" | "updateEmmetData" | "updateGasLimitAddress" | "updateTxHash" | "withdrawProtocolFee" | "withdrawTokenFee"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "ReceiveInstallment" | "RoleAdminChanged" | "RoleGranted" | "RoleRevoked" | "SendInstallment" | "UpdateGasFeeAddress" | "UpdateTxHash" | "UpdatedEmmetData"): EventFragment;
    encodeFunctionData(functionFragment: "CFO_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "DEFAULT_ADMIN_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "MANAGER_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "SIGNER_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "emmetData", values?: undefined): string;
    encodeFunctionData(functionFragment: "emmetTokenVault", values?: undefined): string;
    encodeFunctionData(functionFragment: "gasFeesAdmin", values?: undefined): string;
    encodeFunctionData(functionFragment: "getRoleAdmin", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "grantRole", values: [BytesLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "hasRole", values: [BytesLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "incommingTransactions", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "outgoingTransactions", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "receiveInstallment", values: [BytesLike, BigNumberish, AddressLike[], BytesLike[], BytesLike]): string;
    encodeFunctionData(functionFragment: "renounceRole", values: [BytesLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "revokeRole", values: [BytesLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "sendInstallment", values: [BigNumberish, BigNumberish, string, string, string]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "updateEmmetData", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "updateGasLimitAddress", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "updateTxHash", values: [BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "withdrawProtocolFee", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdrawTokenFee", values: [string]): string;
    decodeFunctionResult(functionFragment: "CFO_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "DEFAULT_ADMIN_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MANAGER_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "SIGNER_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "emmetData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "emmetTokenVault", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "gasFeesAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "incommingTransactions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "outgoingTransactions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "receiveInstallment", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendInstallment", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateEmmetData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateGasLimitAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateTxHash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawProtocolFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawTokenFee", data: BytesLike): Result;
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
export declare namespace RoleAdminChangedEvent {
    type InputTuple = [
        role: BytesLike,
        previousAdminRole: BytesLike,
        newAdminRole: BytesLike
    ];
    type OutputTuple = [
        role: string,
        previousAdminRole: string,
        newAdminRole: string
    ];
    interface OutputObject {
        role: string;
        previousAdminRole: string;
        newAdminRole: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace RoleGrantedEvent {
    type InputTuple = [
        role: BytesLike,
        account: AddressLike,
        sender: AddressLike
    ];
    type OutputTuple = [role: string, account: string, sender: string];
    interface OutputObject {
        role: string;
        account: string;
        sender: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace RoleRevokedEvent {
    type InputTuple = [
        role: BytesLike,
        account: AddressLike,
        sender: AddressLike
    ];
    type OutputTuple = [role: string, account: string, sender: string];
    interface OutputObject {
        role: string;
        account: string;
        sender: string;
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
export interface EmmetBridge extends BaseContract {
    connect(runner?: ContractRunner | null): EmmetBridge;
    waitForDeployment(): Promise<this>;
    interface: EmmetBridgeInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    CFO_ROLE: TypedContractMethod<[], [string], "view">;
    DEFAULT_ADMIN_ROLE: TypedContractMethod<[], [string], "view">;
    MANAGER_ROLE: TypedContractMethod<[], [string], "view">;
    SIGNER_ROLE: TypedContractMethod<[], [string], "view">;
    emmetData: TypedContractMethod<[], [string], "view">;
    emmetTokenVault: TypedContractMethod<[], [string], "view">;
    gasFeesAdmin: TypedContractMethod<[], [string], "view">;
    getRoleAdmin: TypedContractMethod<[role: BytesLike], [string], "view">;
    grantRole: TypedContractMethod<[
        role: BytesLike,
        account: AddressLike
    ], [
        void
    ], "nonpayable">;
    hasRole: TypedContractMethod<[
        role: BytesLike,
        account: AddressLike
    ], [
        boolean
    ], "view">;
    incommingTransactions: TypedContractMethod<[
        txHash: BytesLike
    ], [
        [
            bigint,
            bigint,
            string,
            string,
            bigint,
            string,
            string
        ] & {
            id: bigint;
            amount: bigint;
            fromTokenSymbol: string;
            toTokenSymbol: string;
            chainId: bigint;
            receiver: string;
            originHash: string;
        }
    ], "view">;
    outgoingTransactions: TypedContractMethod<[
        txHash: BytesLike
    ], [
        [
            bigint,
            bigint,
            string,
            string,
            bigint,
            string,
            string
        ] & {
            id: bigint;
            amount: bigint;
            fromTokenSymbol: string;
            toTokenSymbol: string;
            chainId: bigint;
            txHash: string;
            receiver: string;
        }
    ], "view">;
    receiveInstallment: TypedContractMethod<[
        txHash_: BytesLike,
        id_: BigNumberish,
        signers_: AddressLike[],
        aggregatedSignature_: BytesLike[],
        data_: BytesLike
    ], [
        void
    ], "nonpayable">;
    renounceRole: TypedContractMethod<[
        role: BytesLike,
        callerConfirmation: AddressLike
    ], [
        void
    ], "nonpayable">;
    revokeRole: TypedContractMethod<[
        role: BytesLike,
        account: AddressLike
    ], [
        void
    ], "nonpayable">;
    sendInstallment: TypedContractMethod<[
        toChainId_: BigNumberish,
        amount_: BigNumberish,
        fromToken_: string,
        toToken_: string,
        recipient_: string
    ], [
        void
    ], "payable">;
    supportsInterface: TypedContractMethod<[
        interfaceId: BytesLike
    ], [
        boolean
    ], "view">;
    updateEmmetData: TypedContractMethod<[
        emmetData_: AddressLike
    ], [
        void
    ], "nonpayable">;
    updateGasLimitAddress: TypedContractMethod<[
        gasFeesAdmin_: AddressLike
    ], [
        void
    ], "nonpayable">;
    updateTxHash: TypedContractMethod<[
        bridgeHash_: BytesLike,
        txHash_: BytesLike
    ], [
        void
    ], "nonpayable">;
    withdrawProtocolFee: TypedContractMethod<[], [void], "nonpayable">;
    withdrawTokenFee: TypedContractMethod<[
        symbol_: string
    ], [
        void
    ], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "CFO_ROLE"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "DEFAULT_ADMIN_ROLE"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "MANAGER_ROLE"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "SIGNER_ROLE"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "emmetData"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "emmetTokenVault"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "gasFeesAdmin"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "getRoleAdmin"): TypedContractMethod<[role: BytesLike], [string], "view">;
    getFunction(nameOrSignature: "grantRole"): TypedContractMethod<[
        role: BytesLike,
        account: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "hasRole"): TypedContractMethod<[
        role: BytesLike,
        account: AddressLike
    ], [
        boolean
    ], "view">;
    getFunction(nameOrSignature: "incommingTransactions"): TypedContractMethod<[
        txHash: BytesLike
    ], [
        [
            bigint,
            bigint,
            string,
            string,
            bigint,
            string,
            string
        ] & {
            id: bigint;
            amount: bigint;
            fromTokenSymbol: string;
            toTokenSymbol: string;
            chainId: bigint;
            receiver: string;
            originHash: string;
        }
    ], "view">;
    getFunction(nameOrSignature: "outgoingTransactions"): TypedContractMethod<[
        txHash: BytesLike
    ], [
        [
            bigint,
            bigint,
            string,
            string,
            bigint,
            string,
            string
        ] & {
            id: bigint;
            amount: bigint;
            fromTokenSymbol: string;
            toTokenSymbol: string;
            chainId: bigint;
            txHash: string;
            receiver: string;
        }
    ], "view">;
    getFunction(nameOrSignature: "receiveInstallment"): TypedContractMethod<[
        txHash_: BytesLike,
        id_: BigNumberish,
        signers_: AddressLike[],
        aggregatedSignature_: BytesLike[],
        data_: BytesLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "renounceRole"): TypedContractMethod<[
        role: BytesLike,
        callerConfirmation: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "revokeRole"): TypedContractMethod<[
        role: BytesLike,
        account: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "sendInstallment"): TypedContractMethod<[
        toChainId_: BigNumberish,
        amount_: BigNumberish,
        fromToken_: string,
        toToken_: string,
        recipient_: string
    ], [
        void
    ], "payable">;
    getFunction(nameOrSignature: "supportsInterface"): TypedContractMethod<[interfaceId: BytesLike], [boolean], "view">;
    getFunction(nameOrSignature: "updateEmmetData"): TypedContractMethod<[emmetData_: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "updateGasLimitAddress"): TypedContractMethod<[gasFeesAdmin_: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "updateTxHash"): TypedContractMethod<[
        bridgeHash_: BytesLike,
        txHash_: BytesLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "withdrawProtocolFee"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "withdrawTokenFee"): TypedContractMethod<[symbol_: string], [void], "nonpayable">;
    getEvent(key: "ReceiveInstallment"): TypedContractEvent<ReceiveInstallmentEvent.InputTuple, ReceiveInstallmentEvent.OutputTuple, ReceiveInstallmentEvent.OutputObject>;
    getEvent(key: "RoleAdminChanged"): TypedContractEvent<RoleAdminChangedEvent.InputTuple, RoleAdminChangedEvent.OutputTuple, RoleAdminChangedEvent.OutputObject>;
    getEvent(key: "RoleGranted"): TypedContractEvent<RoleGrantedEvent.InputTuple, RoleGrantedEvent.OutputTuple, RoleGrantedEvent.OutputObject>;
    getEvent(key: "RoleRevoked"): TypedContractEvent<RoleRevokedEvent.InputTuple, RoleRevokedEvent.OutputTuple, RoleRevokedEvent.OutputObject>;
    getEvent(key: "SendInstallment"): TypedContractEvent<SendInstallmentEvent.InputTuple, SendInstallmentEvent.OutputTuple, SendInstallmentEvent.OutputObject>;
    getEvent(key: "UpdateGasFeeAddress"): TypedContractEvent<UpdateGasFeeAddressEvent.InputTuple, UpdateGasFeeAddressEvent.OutputTuple, UpdateGasFeeAddressEvent.OutputObject>;
    getEvent(key: "UpdateTxHash"): TypedContractEvent<UpdateTxHashEvent.InputTuple, UpdateTxHashEvent.OutputTuple, UpdateTxHashEvent.OutputObject>;
    getEvent(key: "UpdatedEmmetData"): TypedContractEvent<UpdatedEmmetDataEvent.InputTuple, UpdatedEmmetDataEvent.OutputTuple, UpdatedEmmetDataEvent.OutputObject>;
    filters: {
        "ReceiveInstallment(bytes32)": TypedContractEvent<ReceiveInstallmentEvent.InputTuple, ReceiveInstallmentEvent.OutputTuple, ReceiveInstallmentEvent.OutputObject>;
        ReceiveInstallment: TypedContractEvent<ReceiveInstallmentEvent.InputTuple, ReceiveInstallmentEvent.OutputTuple, ReceiveInstallmentEvent.OutputObject>;
        "RoleAdminChanged(bytes32,bytes32,bytes32)": TypedContractEvent<RoleAdminChangedEvent.InputTuple, RoleAdminChangedEvent.OutputTuple, RoleAdminChangedEvent.OutputObject>;
        RoleAdminChanged: TypedContractEvent<RoleAdminChangedEvent.InputTuple, RoleAdminChangedEvent.OutputTuple, RoleAdminChangedEvent.OutputObject>;
        "RoleGranted(bytes32,address,address)": TypedContractEvent<RoleGrantedEvent.InputTuple, RoleGrantedEvent.OutputTuple, RoleGrantedEvent.OutputObject>;
        RoleGranted: TypedContractEvent<RoleGrantedEvent.InputTuple, RoleGrantedEvent.OutputTuple, RoleGrantedEvent.OutputObject>;
        "RoleRevoked(bytes32,address,address)": TypedContractEvent<RoleRevokedEvent.InputTuple, RoleRevokedEvent.OutputTuple, RoleRevokedEvent.OutputObject>;
        RoleRevoked: TypedContractEvent<RoleRevokedEvent.InputTuple, RoleRevokedEvent.OutputTuple, RoleRevokedEvent.OutputObject>;
        "SendInstallment(bytes32)": TypedContractEvent<SendInstallmentEvent.InputTuple, SendInstallmentEvent.OutputTuple, SendInstallmentEvent.OutputObject>;
        SendInstallment: TypedContractEvent<SendInstallmentEvent.InputTuple, SendInstallmentEvent.OutputTuple, SendInstallmentEvent.OutputObject>;
        "UpdateGasFeeAddress(address,address)": TypedContractEvent<UpdateGasFeeAddressEvent.InputTuple, UpdateGasFeeAddressEvent.OutputTuple, UpdateGasFeeAddressEvent.OutputObject>;
        UpdateGasFeeAddress: TypedContractEvent<UpdateGasFeeAddressEvent.InputTuple, UpdateGasFeeAddressEvent.OutputTuple, UpdateGasFeeAddressEvent.OutputObject>;
        "UpdateTxHash(bytes32,bytes32)": TypedContractEvent<UpdateTxHashEvent.InputTuple, UpdateTxHashEvent.OutputTuple, UpdateTxHashEvent.OutputObject>;
        UpdateTxHash: TypedContractEvent<UpdateTxHashEvent.InputTuple, UpdateTxHashEvent.OutputTuple, UpdateTxHashEvent.OutputObject>;
        "UpdatedEmmetData(address)": TypedContractEvent<UpdatedEmmetDataEvent.InputTuple, UpdatedEmmetDataEvent.OutputTuple, UpdatedEmmetDataEvent.OutputObject>;
        UpdatedEmmetData: TypedContractEvent<UpdatedEmmetDataEvent.InputTuple, UpdatedEmmetDataEvent.OutputTuple, UpdatedEmmetDataEvent.OutputObject>;
    };
}
