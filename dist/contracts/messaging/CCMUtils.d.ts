import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../../common";
export interface CCMUtilsInterface extends Interface {
    getFunction(nameOrSignature: "UPGRADE_INTERFACE_VERSION" | "admin" | "chains" | "inNonce" | "initiate" | "isRelayerPaymentInERC20" | "outNonce" | "paused" | "processed" | "proxiableUUID" | "received" | "relayers" | "relayersCount" | "selfChainId" | "sent" | "threshold" | "upgradeToAndCall"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized" | "Paused" | "Unpaused" | "Upgraded"): EventFragment;
    encodeFunctionData(functionFragment: "UPGRADE_INTERFACE_VERSION", values?: undefined): string;
    encodeFunctionData(functionFragment: "admin", values?: undefined): string;
    encodeFunctionData(functionFragment: "chains", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "inNonce", values?: undefined): string;
    encodeFunctionData(functionFragment: "initiate", values: [AddressLike, BigNumberish, BigNumberish, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "isRelayerPaymentInERC20", values?: undefined): string;
    encodeFunctionData(functionFragment: "outNonce", values?: undefined): string;
    encodeFunctionData(functionFragment: "paused", values?: undefined): string;
    encodeFunctionData(functionFragment: "processed", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "proxiableUUID", values?: undefined): string;
    encodeFunctionData(functionFragment: "received", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "relayers", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "relayersCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "selfChainId", values?: undefined): string;
    encodeFunctionData(functionFragment: "sent", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "threshold", values?: undefined): string;
    encodeFunctionData(functionFragment: "upgradeToAndCall", values: [AddressLike, BytesLike]): string;
    decodeFunctionResult(functionFragment: "UPGRADE_INTERFACE_VERSION", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "chains", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "inNonce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initiate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isRelayerPaymentInERC20", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "outNonce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "processed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proxiableUUID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "received", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "relayers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "relayersCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "selfChainId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sent", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "threshold", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeToAndCall", data: BytesLike): Result;
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
export interface CCMUtils extends BaseContract {
    connect(runner?: ContractRunner | null): CCMUtils;
    waitForDeployment(): Promise<this>;
    interface: CCMUtilsInterface;
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
    chains: TypedContractMethod<[
        chainId: BigNumberish
    ], [
        [
            bigint,
            string,
            bigint
        ] & {
            fee: bigint;
            priceFeed: string;
            decimals: bigint;
        }
    ], "view">;
    inNonce: TypedContractMethod<[], [bigint], "view">;
    initiate: TypedContractMethod<[
        feeToken: AddressLike,
        nativeTokenFee: BigNumberish,
        erc20Fee: BigNumberish,
        priceFeed: AddressLike,
        relayerShare: BigNumberish
    ], [
        void
    ], "nonpayable">;
    isRelayerPaymentInERC20: TypedContractMethod<[], [boolean], "view">;
    outNonce: TypedContractMethod<[], [bigint], "view">;
    paused: TypedContractMethod<[], [boolean], "view">;
    processed: TypedContractMethod<[txHash: BytesLike], [bigint], "view">;
    proxiableUUID: TypedContractMethod<[], [string], "view">;
    received: TypedContractMethod<[
        index: BigNumberish
    ], [
        [
            string,
            bigint,
            bigint,
            bigint,
            string,
            bigint,
            string,
            string
        ] & {
            txHash: string;
            value: bigint;
            fromChainId: bigint;
            toChainId: bigint;
            receiver: string;
            signatures: bigint;
            sender: string;
            data: string;
        }
    ], "view">;
    relayers: TypedContractMethod<[arg0: AddressLike], [boolean], "view">;
    relayersCount: TypedContractMethod<[], [bigint], "view">;
    selfChainId: TypedContractMethod<[], [bigint], "view">;
    sent: TypedContractMethod<[
        index: BigNumberish
    ], [
        [
            string,
            bigint,
            bigint,
            bigint,
            string,
            string,
            string,
            string
        ] & {
            txHash: string;
            value: bigint;
            fromChainId: bigint;
            toChainId: bigint;
            sender: string;
            contr: string;
            receiver: string;
            data: string;
        }
    ], "view">;
    threshold: TypedContractMethod<[], [bigint], "view">;
    upgradeToAndCall: TypedContractMethod<[
        newImplementation: AddressLike,
        data: BytesLike
    ], [
        void
    ], "payable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "UPGRADE_INTERFACE_VERSION"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "admin"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "chains"): TypedContractMethod<[
        chainId: BigNumberish
    ], [
        [
            bigint,
            string,
            bigint
        ] & {
            fee: bigint;
            priceFeed: string;
            decimals: bigint;
        }
    ], "view">;
    getFunction(nameOrSignature: "inNonce"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "initiate"): TypedContractMethod<[
        feeToken: AddressLike,
        nativeTokenFee: BigNumberish,
        erc20Fee: BigNumberish,
        priceFeed: AddressLike,
        relayerShare: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "isRelayerPaymentInERC20"): TypedContractMethod<[], [boolean], "view">;
    getFunction(nameOrSignature: "outNonce"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "paused"): TypedContractMethod<[], [boolean], "view">;
    getFunction(nameOrSignature: "processed"): TypedContractMethod<[txHash: BytesLike], [bigint], "view">;
    getFunction(nameOrSignature: "proxiableUUID"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "received"): TypedContractMethod<[
        index: BigNumberish
    ], [
        [
            string,
            bigint,
            bigint,
            bigint,
            string,
            bigint,
            string,
            string
        ] & {
            txHash: string;
            value: bigint;
            fromChainId: bigint;
            toChainId: bigint;
            receiver: string;
            signatures: bigint;
            sender: string;
            data: string;
        }
    ], "view">;
    getFunction(nameOrSignature: "relayers"): TypedContractMethod<[arg0: AddressLike], [boolean], "view">;
    getFunction(nameOrSignature: "relayersCount"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "selfChainId"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "sent"): TypedContractMethod<[
        index: BigNumberish
    ], [
        [
            string,
            bigint,
            bigint,
            bigint,
            string,
            string,
            string,
            string
        ] & {
            txHash: string;
            value: bigint;
            fromChainId: bigint;
            toChainId: bigint;
            sender: string;
            contr: string;
            receiver: string;
            data: string;
        }
    ], "view">;
    getFunction(nameOrSignature: "threshold"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "upgradeToAndCall"): TypedContractMethod<[
        newImplementation: AddressLike,
        data: BytesLike
    ], [
        void
    ], "payable">;
    getEvent(key: "Initialized"): TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
    getEvent(key: "Paused"): TypedContractEvent<PausedEvent.InputTuple, PausedEvent.OutputTuple, PausedEvent.OutputObject>;
    getEvent(key: "Unpaused"): TypedContractEvent<UnpausedEvent.InputTuple, UnpausedEvent.OutputTuple, UnpausedEvent.OutputObject>;
    getEvent(key: "Upgraded"): TypedContractEvent<UpgradedEvent.InputTuple, UpgradedEvent.OutputTuple, UpgradedEvent.OutputObject>;
    filters: {
        "Initialized(uint64)": TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
        Initialized: TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
        "Paused(address)": TypedContractEvent<PausedEvent.InputTuple, PausedEvent.OutputTuple, PausedEvent.OutputObject>;
        Paused: TypedContractEvent<PausedEvent.InputTuple, PausedEvent.OutputTuple, PausedEvent.OutputObject>;
        "Unpaused(address)": TypedContractEvent<UnpausedEvent.InputTuple, UnpausedEvent.OutputTuple, UnpausedEvent.OutputObject>;
        Unpaused: TypedContractEvent<UnpausedEvent.InputTuple, UnpausedEvent.OutputTuple, UnpausedEvent.OutputObject>;
        "Upgraded(address)": TypedContractEvent<UpgradedEvent.InputTuple, UpgradedEvent.OutputTuple, UpgradedEvent.OutputObject>;
        Upgraded: TypedContractEvent<UpgradedEvent.InputTuple, UpgradedEvent.OutputTuple, UpgradedEvent.OutputObject>;
    };
}
