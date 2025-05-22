import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../../common";
export interface CrossChainMessengerAdminInterface extends Interface {
    getFunction(nameOrSignature: "UPGRADE_INTERFACE_VERSION" | "admin" | "chains" | "fundContract" | "isContractMapped" | "mapContracts" | "pause" | "paused" | "proxiableUUID" | "selfChainId" | "setBl" | "unpause" | "updateAdmin" | "updateChain" | "updateFees" | "updateRelayer" | "upgradeToAndCall"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "AdminUpdate" | "ChainUpdate" | "FeeTokenUpdate" | "Initialized" | "Paused" | "RelayerModified" | "Unpaused" | "Upgraded"): EventFragment;
    encodeFunctionData(functionFragment: "UPGRADE_INTERFACE_VERSION", values?: undefined): string;
    encodeFunctionData(functionFragment: "admin", values?: undefined): string;
    encodeFunctionData(functionFragment: "chains", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "fundContract", values?: undefined): string;
    encodeFunctionData(functionFragment: "isContractMapped", values: [AddressLike, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "mapContracts", values: [AddressLike, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "pause", values?: undefined): string;
    encodeFunctionData(functionFragment: "paused", values?: undefined): string;
    encodeFunctionData(functionFragment: "proxiableUUID", values?: undefined): string;
    encodeFunctionData(functionFragment: "selfChainId", values?: undefined): string;
    encodeFunctionData(functionFragment: "setBl", values: [AddressLike, boolean]): string;
    encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
    encodeFunctionData(functionFragment: "updateAdmin", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "updateChain", values: [BigNumberish, boolean]): string;
    encodeFunctionData(functionFragment: "updateFees", values: [BigNumberish, BigNumberish, BigNumberish, AddressLike]): string;
    encodeFunctionData(functionFragment: "updateRelayer", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "upgradeToAndCall", values: [AddressLike, BytesLike]): string;
    decodeFunctionResult(functionFragment: "UPGRADE_INTERFACE_VERSION", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "chains", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fundContract", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isContractMapped", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mapContracts", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proxiableUUID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "selfChainId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setBl", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateChain", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateRelayer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeToAndCall", data: BytesLike): Result;
}
export declare namespace AdminUpdateEvent {
    type InputTuple = [admin: AddressLike];
    type OutputTuple = [admin: string];
    interface OutputObject {
        admin: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace ChainUpdateEvent {
    type InputTuple = [id: BigNumberish, supported: boolean];
    type OutputTuple = [id: bigint, supported: boolean];
    interface OutputObject {
        id: bigint;
        supported: boolean;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace FeeTokenUpdateEvent {
    type InputTuple = [newToken: AddressLike];
    type OutputTuple = [newToken: string];
    interface OutputObject {
        newToken: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
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
export declare namespace PausedEvent {
    type InputTuple = [account: AddressLike];
    type OutputTuple = [account: string];
    interface OutputObject {
        account: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace RelayerModifiedEvent {
    type InputTuple = [relayer: AddressLike, operation: string];
    type OutputTuple = [relayer: string, operation: string];
    interface OutputObject {
        relayer: string;
        operation: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace UnpausedEvent {
    type InputTuple = [account: AddressLike];
    type OutputTuple = [account: string];
    interface OutputObject {
        account: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace UpgradedEvent {
    type InputTuple = [implementation: AddressLike];
    type OutputTuple = [implementation: string];
    interface OutputObject {
        implementation: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface CrossChainMessengerAdmin extends BaseContract {
    connect(runner?: ContractRunner | null): CrossChainMessengerAdmin;
    waitForDeployment(): Promise<this>;
    interface: CrossChainMessengerAdminInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    UPGRADE_INTERFACE_VERSION: TypedContractMethod<[], [string], "view">;
    admin: TypedContractMethod<[], [string], "view">;
    chains: TypedContractMethod<[chainId: BigNumberish], [boolean], "view">;
    fundContract: TypedContractMethod<[], [void], "payable">;
    isContractMapped: TypedContractMethod<[
        sender: AddressLike,
        chainId: BigNumberish,
        target: string
    ], [
        boolean
    ], "view">;
    mapContracts: TypedContractMethod<[
        sender: AddressLike,
        chainId: BigNumberish,
        target: string
    ], [
        void
    ], "nonpayable">;
    pause: TypedContractMethod<[], [void], "nonpayable">;
    paused: TypedContractMethod<[], [boolean], "view">;
    proxiableUUID: TypedContractMethod<[], [string], "view">;
    selfChainId: TypedContractMethod<[], [bigint], "view">;
    setBl: TypedContractMethod<[
        a: AddressLike,
        flag: boolean
    ], [
        void
    ], "nonpayable">;
    unpause: TypedContractMethod<[], [void], "nonpayable">;
    updateAdmin: TypedContractMethod<[admin_: AddressLike], [void], "nonpayable">;
    updateChain: TypedContractMethod<[
        chainId: BigNumberish,
        supported: boolean
    ], [
        void
    ], "nonpayable">;
    updateFees: TypedContractMethod<[
        protocol: BigNumberish,
        consensus: BigNumberish,
        tokenDecimals: BigNumberish,
        priceFeed: AddressLike
    ], [
        void
    ], "nonpayable">;
    updateRelayer: TypedContractMethod<[
        relayer: AddressLike,
        operation: BigNumberish
    ], [
        void
    ], "nonpayable">;
    upgradeToAndCall: TypedContractMethod<[
        newImplementation: AddressLike,
        data: BytesLike
    ], [
        void
    ], "payable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "UPGRADE_INTERFACE_VERSION"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "admin"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "chains"): TypedContractMethod<[chainId: BigNumberish], [boolean], "view">;
    getFunction(nameOrSignature: "fundContract"): TypedContractMethod<[], [void], "payable">;
    getFunction(nameOrSignature: "isContractMapped"): TypedContractMethod<[
        sender: AddressLike,
        chainId: BigNumberish,
        target: string
    ], [
        boolean
    ], "view">;
    getFunction(nameOrSignature: "mapContracts"): TypedContractMethod<[
        sender: AddressLike,
        chainId: BigNumberish,
        target: string
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "pause"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "paused"): TypedContractMethod<[], [boolean], "view">;
    getFunction(nameOrSignature: "proxiableUUID"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "selfChainId"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "setBl"): TypedContractMethod<[a: AddressLike, flag: boolean], [void], "nonpayable">;
    getFunction(nameOrSignature: "unpause"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "updateAdmin"): TypedContractMethod<[admin_: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "updateChain"): TypedContractMethod<[
        chainId: BigNumberish,
        supported: boolean
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "updateFees"): TypedContractMethod<[
        protocol: BigNumberish,
        consensus: BigNumberish,
        tokenDecimals: BigNumberish,
        priceFeed: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "updateRelayer"): TypedContractMethod<[
        relayer: AddressLike,
        operation: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "upgradeToAndCall"): TypedContractMethod<[
        newImplementation: AddressLike,
        data: BytesLike
    ], [
        void
    ], "payable">;
    getEvent(key: "AdminUpdate"): TypedContractEvent<AdminUpdateEvent.InputTuple, AdminUpdateEvent.OutputTuple, AdminUpdateEvent.OutputObject>;
    getEvent(key: "ChainUpdate"): TypedContractEvent<ChainUpdateEvent.InputTuple, ChainUpdateEvent.OutputTuple, ChainUpdateEvent.OutputObject>;
    getEvent(key: "FeeTokenUpdate"): TypedContractEvent<FeeTokenUpdateEvent.InputTuple, FeeTokenUpdateEvent.OutputTuple, FeeTokenUpdateEvent.OutputObject>;
    getEvent(key: "Initialized"): TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
    getEvent(key: "Paused"): TypedContractEvent<PausedEvent.InputTuple, PausedEvent.OutputTuple, PausedEvent.OutputObject>;
    getEvent(key: "RelayerModified"): TypedContractEvent<RelayerModifiedEvent.InputTuple, RelayerModifiedEvent.OutputTuple, RelayerModifiedEvent.OutputObject>;
    getEvent(key: "Unpaused"): TypedContractEvent<UnpausedEvent.InputTuple, UnpausedEvent.OutputTuple, UnpausedEvent.OutputObject>;
    getEvent(key: "Upgraded"): TypedContractEvent<UpgradedEvent.InputTuple, UpgradedEvent.OutputTuple, UpgradedEvent.OutputObject>;
    filters: {
        "AdminUpdate(address)": TypedContractEvent<AdminUpdateEvent.InputTuple, AdminUpdateEvent.OutputTuple, AdminUpdateEvent.OutputObject>;
        AdminUpdate: TypedContractEvent<AdminUpdateEvent.InputTuple, AdminUpdateEvent.OutputTuple, AdminUpdateEvent.OutputObject>;
        "ChainUpdate(uint256,bool)": TypedContractEvent<ChainUpdateEvent.InputTuple, ChainUpdateEvent.OutputTuple, ChainUpdateEvent.OutputObject>;
        ChainUpdate: TypedContractEvent<ChainUpdateEvent.InputTuple, ChainUpdateEvent.OutputTuple, ChainUpdateEvent.OutputObject>;
        "FeeTokenUpdate(address)": TypedContractEvent<FeeTokenUpdateEvent.InputTuple, FeeTokenUpdateEvent.OutputTuple, FeeTokenUpdateEvent.OutputObject>;
        FeeTokenUpdate: TypedContractEvent<FeeTokenUpdateEvent.InputTuple, FeeTokenUpdateEvent.OutputTuple, FeeTokenUpdateEvent.OutputObject>;
        "Initialized(uint64)": TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
        Initialized: TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
        "Paused(address)": TypedContractEvent<PausedEvent.InputTuple, PausedEvent.OutputTuple, PausedEvent.OutputObject>;
        Paused: TypedContractEvent<PausedEvent.InputTuple, PausedEvent.OutputTuple, PausedEvent.OutputObject>;
        "RelayerModified(address,string)": TypedContractEvent<RelayerModifiedEvent.InputTuple, RelayerModifiedEvent.OutputTuple, RelayerModifiedEvent.OutputObject>;
        RelayerModified: TypedContractEvent<RelayerModifiedEvent.InputTuple, RelayerModifiedEvent.OutputTuple, RelayerModifiedEvent.OutputObject>;
        "Unpaused(address)": TypedContractEvent<UnpausedEvent.InputTuple, UnpausedEvent.OutputTuple, UnpausedEvent.OutputObject>;
        Unpaused: TypedContractEvent<UnpausedEvent.InputTuple, UnpausedEvent.OutputTuple, UnpausedEvent.OutputObject>;
        "Upgraded(address)": TypedContractEvent<UpgradedEvent.InputTuple, UpgradedEvent.OutputTuple, UpgradedEvent.OutputObject>;
        Upgraded: TypedContractEvent<UpgradedEvent.InputTuple, UpgradedEvent.OutputTuple, UpgradedEvent.OutputObject>;
    };
}
