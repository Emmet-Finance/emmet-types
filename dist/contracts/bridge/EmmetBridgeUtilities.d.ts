import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../../common";
export interface EmmetBridgeUtilitiesInterface extends Interface {
    getFunction(nameOrSignature: "CFO_ROLE" | "DEFAULT_ADMIN_ROLE" | "MANAGER_ROLE" | "SIGNER_ROLE" | "emmetData" | "emmetTokenVault" | "gasFeesAdmin" | "getLiquidityPool" | "getRoleAdmin" | "grantRole" | "hasRole" | "incommingTransactions" | "outgoingTransactions" | "renounceRole" | "revokeRole" | "stake" | "supportsInterface" | "withdraw"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "CCTPChainDeleted" | "CctpChainUpdated" | "ChainDeleted" | "ChainUpdate" | "ReceiveInstallment" | "RoleAdminChanged" | "RoleGranted" | "RoleRevoked" | "SendInstallment" | "SignerManaged" | "TokenDeleted" | "TokenUpdate" | "UpdateGasFeeAddress" | "UpdateTxHash" | "UpdatedEmmetData" | "UpdatedGasFeesAddress" | "UpdatedProtocolFee"): EventFragment;
    encodeFunctionData(functionFragment: "CFO_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "DEFAULT_ADMIN_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "MANAGER_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "SIGNER_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "emmetData", values?: undefined): string;
    encodeFunctionData(functionFragment: "emmetTokenVault", values?: undefined): string;
    encodeFunctionData(functionFragment: "gasFeesAdmin", values?: undefined): string;
    encodeFunctionData(functionFragment: "getLiquidityPool", values: [string]): string;
    encodeFunctionData(functionFragment: "getRoleAdmin", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "grantRole", values: [BytesLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "hasRole", values: [BytesLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "incommingTransactions", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "outgoingTransactions", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "renounceRole", values: [BytesLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "revokeRole", values: [BytesLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "stake", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "withdraw", values: [BigNumberish, string]): string;
    decodeFunctionResult(functionFragment: "CFO_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "DEFAULT_ADMIN_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MANAGER_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "SIGNER_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "emmetData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "emmetTokenVault", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "gasFeesAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLiquidityPool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "incommingTransactions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "outgoingTransactions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stake", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
}
export declare namespace CCTPChainDeletedEvent {
    type InputTuple = [chainId: BigNumberish];
    type OutputTuple = [chainId: bigint];
    interface OutputObject {
        chainId: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace CctpChainUpdatedEvent {
    type InputTuple = [
        chainId: BigNumberish,
        cctpDestId: BigNumberish,
        awaitMinutes: BigNumberish,
        awaitSeconds: BigNumberish,
        numberOfAwaitedBlocks: BigNumberish
    ];
    type OutputTuple = [
        chainId: bigint,
        cctpDestId: bigint,
        awaitMinutes: bigint,
        awaitSeconds: bigint,
        numberOfAwaitedBlocks: bigint
    ];
    interface OutputObject {
        chainId: bigint;
        cctpDestId: bigint;
        awaitMinutes: bigint;
        awaitSeconds: bigint;
        numberOfAwaitedBlocks: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace ChainDeletedEvent {
    type InputTuple = [chainId: BigNumberish];
    type OutputTuple = [chainId: bigint];
    interface OutputObject {
        chainId: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace ChainUpdateEvent {
    type InputTuple = [chainId: BigNumberish, name: string, token: string];
    type OutputTuple = [chainId: bigint, name: string, token: string];
    interface OutputObject {
        chainId: bigint;
        name: string;
        token: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
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
export declare namespace TokenDeletedEvent {
    type InputTuple = [symbol: string];
    type OutputTuple = [symbol: string];
    interface OutputObject {
        symbol: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace TokenUpdateEvent {
    type InputTuple = [
        addr: AddressLike,
        decimals: BigNumberish,
        symbol: string
    ];
    type OutputTuple = [addr: string, decimals: bigint, symbol: string];
    interface OutputObject {
        addr: string;
        decimals: bigint;
        symbol: string;
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
export declare namespace UpdatedGasFeesAddressEvent {
    type InputTuple = [oldGasFees: AddressLike, newGasFees: AddressLike];
    type OutputTuple = [oldGasFees: string, newGasFees: string];
    interface OutputObject {
        oldGasFees: string;
        newGasFees: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace UpdatedProtocolFeeEvent {
    type InputTuple = [oldFee: BigNumberish, newFee: BigNumberish];
    type OutputTuple = [oldFee: bigint, newFee: bigint];
    interface OutputObject {
        oldFee: bigint;
        newFee: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface EmmetBridgeUtilities extends BaseContract {
    connect(runner?: ContractRunner | null): EmmetBridgeUtilities;
    waitForDeployment(): Promise<this>;
    interface: EmmetBridgeUtilitiesInterface;
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
    getLiquidityPool: TypedContractMethod<[symbol_: string], [string], "view">;
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
    stake: TypedContractMethod<[
        amount_: BigNumberish,
        symbol_: string
    ], [
        void
    ], "nonpayable">;
    supportsInterface: TypedContractMethod<[
        interfaceId: BytesLike
    ], [
        boolean
    ], "view">;
    withdraw: TypedContractMethod<[
        amount_: BigNumberish,
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
    getFunction(nameOrSignature: "getLiquidityPool"): TypedContractMethod<[symbol_: string], [string], "view">;
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
    getFunction(nameOrSignature: "stake"): TypedContractMethod<[
        amount_: BigNumberish,
        symbol_: string
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "supportsInterface"): TypedContractMethod<[interfaceId: BytesLike], [boolean], "view">;
    getFunction(nameOrSignature: "withdraw"): TypedContractMethod<[
        amount_: BigNumberish,
        symbol_: string
    ], [
        void
    ], "nonpayable">;
    getEvent(key: "CCTPChainDeleted"): TypedContractEvent<CCTPChainDeletedEvent.InputTuple, CCTPChainDeletedEvent.OutputTuple, CCTPChainDeletedEvent.OutputObject>;
    getEvent(key: "CctpChainUpdated"): TypedContractEvent<CctpChainUpdatedEvent.InputTuple, CctpChainUpdatedEvent.OutputTuple, CctpChainUpdatedEvent.OutputObject>;
    getEvent(key: "ChainDeleted"): TypedContractEvent<ChainDeletedEvent.InputTuple, ChainDeletedEvent.OutputTuple, ChainDeletedEvent.OutputObject>;
    getEvent(key: "ChainUpdate"): TypedContractEvent<ChainUpdateEvent.InputTuple, ChainUpdateEvent.OutputTuple, ChainUpdateEvent.OutputObject>;
    getEvent(key: "ReceiveInstallment"): TypedContractEvent<ReceiveInstallmentEvent.InputTuple, ReceiveInstallmentEvent.OutputTuple, ReceiveInstallmentEvent.OutputObject>;
    getEvent(key: "RoleAdminChanged"): TypedContractEvent<RoleAdminChangedEvent.InputTuple, RoleAdminChangedEvent.OutputTuple, RoleAdminChangedEvent.OutputObject>;
    getEvent(key: "RoleGranted"): TypedContractEvent<RoleGrantedEvent.InputTuple, RoleGrantedEvent.OutputTuple, RoleGrantedEvent.OutputObject>;
    getEvent(key: "RoleRevoked"): TypedContractEvent<RoleRevokedEvent.InputTuple, RoleRevokedEvent.OutputTuple, RoleRevokedEvent.OutputObject>;
    getEvent(key: "SendInstallment"): TypedContractEvent<SendInstallmentEvent.InputTuple, SendInstallmentEvent.OutputTuple, SendInstallmentEvent.OutputObject>;
    getEvent(key: "SignerManaged"): TypedContractEvent<SignerManagedEvent.InputTuple, SignerManagedEvent.OutputTuple, SignerManagedEvent.OutputObject>;
    getEvent(key: "TokenDeleted"): TypedContractEvent<TokenDeletedEvent.InputTuple, TokenDeletedEvent.OutputTuple, TokenDeletedEvent.OutputObject>;
    getEvent(key: "TokenUpdate"): TypedContractEvent<TokenUpdateEvent.InputTuple, TokenUpdateEvent.OutputTuple, TokenUpdateEvent.OutputObject>;
    getEvent(key: "UpdateGasFeeAddress"): TypedContractEvent<UpdateGasFeeAddressEvent.InputTuple, UpdateGasFeeAddressEvent.OutputTuple, UpdateGasFeeAddressEvent.OutputObject>;
    getEvent(key: "UpdateTxHash"): TypedContractEvent<UpdateTxHashEvent.InputTuple, UpdateTxHashEvent.OutputTuple, UpdateTxHashEvent.OutputObject>;
    getEvent(key: "UpdatedEmmetData"): TypedContractEvent<UpdatedEmmetDataEvent.InputTuple, UpdatedEmmetDataEvent.OutputTuple, UpdatedEmmetDataEvent.OutputObject>;
    getEvent(key: "UpdatedGasFeesAddress"): TypedContractEvent<UpdatedGasFeesAddressEvent.InputTuple, UpdatedGasFeesAddressEvent.OutputTuple, UpdatedGasFeesAddressEvent.OutputObject>;
    getEvent(key: "UpdatedProtocolFee"): TypedContractEvent<UpdatedProtocolFeeEvent.InputTuple, UpdatedProtocolFeeEvent.OutputTuple, UpdatedProtocolFeeEvent.OutputObject>;
    filters: {
        "CCTPChainDeleted(uint128)": TypedContractEvent<CCTPChainDeletedEvent.InputTuple, CCTPChainDeletedEvent.OutputTuple, CCTPChainDeletedEvent.OutputObject>;
        CCTPChainDeleted: TypedContractEvent<CCTPChainDeletedEvent.InputTuple, CCTPChainDeletedEvent.OutputTuple, CCTPChainDeletedEvent.OutputObject>;
        "CctpChainUpdated(uint128,uint128,uint8,uint8,uint8)": TypedContractEvent<CctpChainUpdatedEvent.InputTuple, CctpChainUpdatedEvent.OutputTuple, CctpChainUpdatedEvent.OutputObject>;
        CctpChainUpdated: TypedContractEvent<CctpChainUpdatedEvent.InputTuple, CctpChainUpdatedEvent.OutputTuple, CctpChainUpdatedEvent.OutputObject>;
        "ChainDeleted(uint128)": TypedContractEvent<ChainDeletedEvent.InputTuple, ChainDeletedEvent.OutputTuple, ChainDeletedEvent.OutputObject>;
        ChainDeleted: TypedContractEvent<ChainDeletedEvent.InputTuple, ChainDeletedEvent.OutputTuple, ChainDeletedEvent.OutputObject>;
        "ChainUpdate(uint128,string,string)": TypedContractEvent<ChainUpdateEvent.InputTuple, ChainUpdateEvent.OutputTuple, ChainUpdateEvent.OutputObject>;
        ChainUpdate: TypedContractEvent<ChainUpdateEvent.InputTuple, ChainUpdateEvent.OutputTuple, ChainUpdateEvent.OutputObject>;
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
        "SignerManaged(address,string)": TypedContractEvent<SignerManagedEvent.InputTuple, SignerManagedEvent.OutputTuple, SignerManagedEvent.OutputObject>;
        SignerManaged: TypedContractEvent<SignerManagedEvent.InputTuple, SignerManagedEvent.OutputTuple, SignerManagedEvent.OutputObject>;
        "TokenDeleted(string)": TypedContractEvent<TokenDeletedEvent.InputTuple, TokenDeletedEvent.OutputTuple, TokenDeletedEvent.OutputObject>;
        TokenDeleted: TypedContractEvent<TokenDeletedEvent.InputTuple, TokenDeletedEvent.OutputTuple, TokenDeletedEvent.OutputObject>;
        "TokenUpdate(address,uint8,string)": TypedContractEvent<TokenUpdateEvent.InputTuple, TokenUpdateEvent.OutputTuple, TokenUpdateEvent.OutputObject>;
        TokenUpdate: TypedContractEvent<TokenUpdateEvent.InputTuple, TokenUpdateEvent.OutputTuple, TokenUpdateEvent.OutputObject>;
        "UpdateGasFeeAddress(address,address)": TypedContractEvent<UpdateGasFeeAddressEvent.InputTuple, UpdateGasFeeAddressEvent.OutputTuple, UpdateGasFeeAddressEvent.OutputObject>;
        UpdateGasFeeAddress: TypedContractEvent<UpdateGasFeeAddressEvent.InputTuple, UpdateGasFeeAddressEvent.OutputTuple, UpdateGasFeeAddressEvent.OutputObject>;
        "UpdateTxHash(bytes32,bytes32)": TypedContractEvent<UpdateTxHashEvent.InputTuple, UpdateTxHashEvent.OutputTuple, UpdateTxHashEvent.OutputObject>;
        UpdateTxHash: TypedContractEvent<UpdateTxHashEvent.InputTuple, UpdateTxHashEvent.OutputTuple, UpdateTxHashEvent.OutputObject>;
        "UpdatedEmmetData(address)": TypedContractEvent<UpdatedEmmetDataEvent.InputTuple, UpdatedEmmetDataEvent.OutputTuple, UpdatedEmmetDataEvent.OutputObject>;
        UpdatedEmmetData: TypedContractEvent<UpdatedEmmetDataEvent.InputTuple, UpdatedEmmetDataEvent.OutputTuple, UpdatedEmmetDataEvent.OutputObject>;
        "UpdatedGasFeesAddress(address,address)": TypedContractEvent<UpdatedGasFeesAddressEvent.InputTuple, UpdatedGasFeesAddressEvent.OutputTuple, UpdatedGasFeesAddressEvent.OutputObject>;
        UpdatedGasFeesAddress: TypedContractEvent<UpdatedGasFeesAddressEvent.InputTuple, UpdatedGasFeesAddressEvent.OutputTuple, UpdatedGasFeesAddressEvent.OutputObject>;
        "UpdatedProtocolFee(uint128,uint128)": TypedContractEvent<UpdatedProtocolFeeEvent.InputTuple, UpdatedProtocolFeeEvent.OutputTuple, UpdatedProtocolFeeEvent.OutputObject>;
        UpdatedProtocolFee: TypedContractEvent<UpdatedProtocolFeeEvent.InputTuple, UpdatedProtocolFeeEvent.OutputTuple, UpdatedProtocolFeeEvent.OutputObject>;
    };
}
