import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../../common";
export interface CrossChainMessengerAdminInterface extends Interface {
    getFunction(nameOrSignature: "UPGRADE_INTERFACE_VERSION" | "admin" | "chains" | "fundContract" | "inNonce" | "initiate" | "isRelayerPaymentInERC20" | "outNonce" | "pause" | "paused" | "processed" | "proxiableUUID" | "received" | "relayers" | "relayersCount" | "selfChainId" | "sent" | "threshold" | "unpause" | "updateAdmin" | "updateChain" | "updateFeeToken" | "updateFees" | "updateIsRelayerPaymentInERC20" | "updateRelayer" | "upgradeToAndCall" | "withdrawProtocolFee"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "AdminUpdate" | "ChainUpdate" | "FeeTokenUpdate" | "FeeTokenUpdated" | "Initialized" | "Paused" | "ProtocolFeeUpdated" | "ProtocolRewardsWithdrawn" | "RelayerModified" | "RelayerShareUpdated" | "RewardFundingRequired" | "Unpaused" | "Upgraded"): EventFragment;
    encodeFunctionData(functionFragment: "UPGRADE_INTERFACE_VERSION", values?: undefined): string;
    encodeFunctionData(functionFragment: "admin", values?: undefined): string;
    encodeFunctionData(functionFragment: "chains", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "fundContract", values?: undefined): string;
    encodeFunctionData(functionFragment: "inNonce", values?: undefined): string;
    encodeFunctionData(functionFragment: "initiate", values: [AddressLike, BigNumberish, BigNumberish, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "isRelayerPaymentInERC20", values?: undefined): string;
    encodeFunctionData(functionFragment: "outNonce", values?: undefined): string;
    encodeFunctionData(functionFragment: "pause", values?: undefined): string;
    encodeFunctionData(functionFragment: "paused", values?: undefined): string;
    encodeFunctionData(functionFragment: "processed", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "proxiableUUID", values?: undefined): string;
    encodeFunctionData(functionFragment: "received", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "relayers", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "relayersCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "selfChainId", values?: undefined): string;
    encodeFunctionData(functionFragment: "sent", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "threshold", values?: undefined): string;
    encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
    encodeFunctionData(functionFragment: "updateAdmin", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "updateChain", values: [BigNumberish, BigNumberish, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "updateFeeToken", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "updateFees", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "updateIsRelayerPaymentInERC20", values: [boolean]): string;
    encodeFunctionData(functionFragment: "updateRelayer", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "upgradeToAndCall", values: [AddressLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "withdrawProtocolFee", values: [BigNumberish, boolean]): string;
    decodeFunctionResult(functionFragment: "UPGRADE_INTERFACE_VERSION", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "chains", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fundContract", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "inNonce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initiate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isRelayerPaymentInERC20", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "outNonce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "processed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proxiableUUID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "received", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "relayers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "relayersCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "selfChainId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sent", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "threshold", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateChain", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateFeeToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateIsRelayerPaymentInERC20", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateRelayer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeToAndCall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawProtocolFee", data: BytesLike): Result;
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
    type InputTuple = [
        id: BigNumberish,
        priceFeed: AddressLike,
        fee: BigNumberish
    ];
    type OutputTuple = [id: bigint, priceFeed: string, fee: bigint];
    interface OutputObject {
        id: bigint;
        priceFeed: string;
        fee: bigint;
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
export declare namespace FeeTokenUpdatedEvent {
    type InputTuple = [newFeeToken: AddressLike, priceFeed: AddressLike];
    type OutputTuple = [newFeeToken: string, priceFeed: string];
    interface OutputObject {
        newFeeToken: string;
        priceFeed: string;
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
export declare namespace ProtocolFeeUpdatedEvent {
    type InputTuple = [newProtocolFee: BigNumberish];
    type OutputTuple = [newProtocolFee: bigint];
    interface OutputObject {
        newProtocolFee: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace ProtocolRewardsWithdrawnEvent {
    type InputTuple = [
        to: AddressLike,
        token: AddressLike,
        amount: BigNumberish
    ];
    type OutputTuple = [to: string, token: string, amount: bigint];
    interface OutputObject {
        to: string;
        token: string;
        amount: bigint;
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
export declare namespace RelayerShareUpdatedEvent {
    type InputTuple = [newRelayerShare: BigNumberish];
    type OutputTuple = [newRelayerShare: bigint];
    interface OutputObject {
        newRelayerShare: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace RewardFundingRequiredEvent {
    type InputTuple = [chainId: BigNumberish, target: AddressLike];
    type OutputTuple = [chainId: bigint, target: string];
    interface OutputObject {
        chainId: bigint;
        target: string;
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
    fundContract: TypedContractMethod<[], [void], "payable">;
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
    pause: TypedContractMethod<[], [void], "nonpayable">;
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
    unpause: TypedContractMethod<[], [void], "nonpayable">;
    updateAdmin: TypedContractMethod<[admin_: AddressLike], [void], "nonpayable">;
    updateChain: TypedContractMethod<[
        chainId: BigNumberish,
        fee: BigNumberish,
        priceFeed: AddressLike,
        decimals: BigNumberish
    ], [
        void
    ], "nonpayable">;
    updateFeeToken: TypedContractMethod<[
        newFeeToken: AddressLike,
        priceFeed: AddressLike
    ], [
        void
    ], "nonpayable">;
    updateFees: TypedContractMethod<[
        nativeTokenFee: BigNumberish,
        erc20Fee: BigNumberish
    ], [
        void
    ], "nonpayable">;
    updateIsRelayerPaymentInERC20: TypedContractMethod<[
        inERC20: boolean
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
    withdrawProtocolFee: TypedContractMethod<[
        amount: BigNumberish,
        isERC20: boolean
    ], [
        void
    ], "nonpayable">;
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
    getFunction(nameOrSignature: "fundContract"): TypedContractMethod<[], [void], "payable">;
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
    getFunction(nameOrSignature: "pause"): TypedContractMethod<[], [void], "nonpayable">;
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
    getFunction(nameOrSignature: "unpause"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "updateAdmin"): TypedContractMethod<[admin_: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "updateChain"): TypedContractMethod<[
        chainId: BigNumberish,
        fee: BigNumberish,
        priceFeed: AddressLike,
        decimals: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "updateFeeToken"): TypedContractMethod<[
        newFeeToken: AddressLike,
        priceFeed: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "updateFees"): TypedContractMethod<[
        nativeTokenFee: BigNumberish,
        erc20Fee: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "updateIsRelayerPaymentInERC20"): TypedContractMethod<[inERC20: boolean], [void], "nonpayable">;
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
    getFunction(nameOrSignature: "withdrawProtocolFee"): TypedContractMethod<[
        amount: BigNumberish,
        isERC20: boolean
    ], [
        void
    ], "nonpayable">;
    getEvent(key: "AdminUpdate"): TypedContractEvent<AdminUpdateEvent.InputTuple, AdminUpdateEvent.OutputTuple, AdminUpdateEvent.OutputObject>;
    getEvent(key: "ChainUpdate"): TypedContractEvent<ChainUpdateEvent.InputTuple, ChainUpdateEvent.OutputTuple, ChainUpdateEvent.OutputObject>;
    getEvent(key: "FeeTokenUpdate"): TypedContractEvent<FeeTokenUpdateEvent.InputTuple, FeeTokenUpdateEvent.OutputTuple, FeeTokenUpdateEvent.OutputObject>;
    getEvent(key: "FeeTokenUpdated"): TypedContractEvent<FeeTokenUpdatedEvent.InputTuple, FeeTokenUpdatedEvent.OutputTuple, FeeTokenUpdatedEvent.OutputObject>;
    getEvent(key: "Initialized"): TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
    getEvent(key: "Paused"): TypedContractEvent<PausedEvent.InputTuple, PausedEvent.OutputTuple, PausedEvent.OutputObject>;
    getEvent(key: "ProtocolFeeUpdated"): TypedContractEvent<ProtocolFeeUpdatedEvent.InputTuple, ProtocolFeeUpdatedEvent.OutputTuple, ProtocolFeeUpdatedEvent.OutputObject>;
    getEvent(key: "ProtocolRewardsWithdrawn"): TypedContractEvent<ProtocolRewardsWithdrawnEvent.InputTuple, ProtocolRewardsWithdrawnEvent.OutputTuple, ProtocolRewardsWithdrawnEvent.OutputObject>;
    getEvent(key: "RelayerModified"): TypedContractEvent<RelayerModifiedEvent.InputTuple, RelayerModifiedEvent.OutputTuple, RelayerModifiedEvent.OutputObject>;
    getEvent(key: "RelayerShareUpdated"): TypedContractEvent<RelayerShareUpdatedEvent.InputTuple, RelayerShareUpdatedEvent.OutputTuple, RelayerShareUpdatedEvent.OutputObject>;
    getEvent(key: "RewardFundingRequired"): TypedContractEvent<RewardFundingRequiredEvent.InputTuple, RewardFundingRequiredEvent.OutputTuple, RewardFundingRequiredEvent.OutputObject>;
    getEvent(key: "Unpaused"): TypedContractEvent<UnpausedEvent.InputTuple, UnpausedEvent.OutputTuple, UnpausedEvent.OutputObject>;
    getEvent(key: "Upgraded"): TypedContractEvent<UpgradedEvent.InputTuple, UpgradedEvent.OutputTuple, UpgradedEvent.OutputObject>;
    filters: {
        "AdminUpdate(address)": TypedContractEvent<AdminUpdateEvent.InputTuple, AdminUpdateEvent.OutputTuple, AdminUpdateEvent.OutputObject>;
        AdminUpdate: TypedContractEvent<AdminUpdateEvent.InputTuple, AdminUpdateEvent.OutputTuple, AdminUpdateEvent.OutputObject>;
        "ChainUpdate(uint128,address,uint256)": TypedContractEvent<ChainUpdateEvent.InputTuple, ChainUpdateEvent.OutputTuple, ChainUpdateEvent.OutputObject>;
        ChainUpdate: TypedContractEvent<ChainUpdateEvent.InputTuple, ChainUpdateEvent.OutputTuple, ChainUpdateEvent.OutputObject>;
        "FeeTokenUpdate(address)": TypedContractEvent<FeeTokenUpdateEvent.InputTuple, FeeTokenUpdateEvent.OutputTuple, FeeTokenUpdateEvent.OutputObject>;
        FeeTokenUpdate: TypedContractEvent<FeeTokenUpdateEvent.InputTuple, FeeTokenUpdateEvent.OutputTuple, FeeTokenUpdateEvent.OutputObject>;
        "FeeTokenUpdated(address,address)": TypedContractEvent<FeeTokenUpdatedEvent.InputTuple, FeeTokenUpdatedEvent.OutputTuple, FeeTokenUpdatedEvent.OutputObject>;
        FeeTokenUpdated: TypedContractEvent<FeeTokenUpdatedEvent.InputTuple, FeeTokenUpdatedEvent.OutputTuple, FeeTokenUpdatedEvent.OutputObject>;
        "Initialized(uint64)": TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
        Initialized: TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
        "Paused(address)": TypedContractEvent<PausedEvent.InputTuple, PausedEvent.OutputTuple, PausedEvent.OutputObject>;
        Paused: TypedContractEvent<PausedEvent.InputTuple, PausedEvent.OutputTuple, PausedEvent.OutputObject>;
        "ProtocolFeeUpdated(uint256)": TypedContractEvent<ProtocolFeeUpdatedEvent.InputTuple, ProtocolFeeUpdatedEvent.OutputTuple, ProtocolFeeUpdatedEvent.OutputObject>;
        ProtocolFeeUpdated: TypedContractEvent<ProtocolFeeUpdatedEvent.InputTuple, ProtocolFeeUpdatedEvent.OutputTuple, ProtocolFeeUpdatedEvent.OutputObject>;
        "ProtocolRewardsWithdrawn(address,address,uint256)": TypedContractEvent<ProtocolRewardsWithdrawnEvent.InputTuple, ProtocolRewardsWithdrawnEvent.OutputTuple, ProtocolRewardsWithdrawnEvent.OutputObject>;
        ProtocolRewardsWithdrawn: TypedContractEvent<ProtocolRewardsWithdrawnEvent.InputTuple, ProtocolRewardsWithdrawnEvent.OutputTuple, ProtocolRewardsWithdrawnEvent.OutputObject>;
        "RelayerModified(address,string)": TypedContractEvent<RelayerModifiedEvent.InputTuple, RelayerModifiedEvent.OutputTuple, RelayerModifiedEvent.OutputObject>;
        RelayerModified: TypedContractEvent<RelayerModifiedEvent.InputTuple, RelayerModifiedEvent.OutputTuple, RelayerModifiedEvent.OutputObject>;
        "RelayerShareUpdated(uint16)": TypedContractEvent<RelayerShareUpdatedEvent.InputTuple, RelayerShareUpdatedEvent.OutputTuple, RelayerShareUpdatedEvent.OutputObject>;
        RelayerShareUpdated: TypedContractEvent<RelayerShareUpdatedEvent.InputTuple, RelayerShareUpdatedEvent.OutputTuple, RelayerShareUpdatedEvent.OutputObject>;
        "RewardFundingRequired(uint256,address)": TypedContractEvent<RewardFundingRequiredEvent.InputTuple, RewardFundingRequiredEvent.OutputTuple, RewardFundingRequiredEvent.OutputObject>;
        RewardFundingRequired: TypedContractEvent<RewardFundingRequiredEvent.InputTuple, RewardFundingRequiredEvent.OutputTuple, RewardFundingRequiredEvent.OutputObject>;
        "Unpaused(address)": TypedContractEvent<UnpausedEvent.InputTuple, UnpausedEvent.OutputTuple, UnpausedEvent.OutputObject>;
        Unpaused: TypedContractEvent<UnpausedEvent.InputTuple, UnpausedEvent.OutputTuple, UnpausedEvent.OutputObject>;
        "Upgraded(address)": TypedContractEvent<UpgradedEvent.InputTuple, UpgradedEvent.OutputTuple, UpgradedEvent.OutputObject>;
        Upgraded: TypedContractEvent<UpgradedEvent.InputTuple, UpgradedEvent.OutputTuple, UpgradedEvent.OutputObject>;
    };
}
