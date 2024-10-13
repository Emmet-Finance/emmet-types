import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../../common";
export interface RelayerRewardsInterface extends Interface {
    getFunction(nameOrSignature: "NATIVE_TOKEN" | "feeDecimals"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "FeeTokenUpdated" | "GasFeeReimbursed" | "ProtocolFeeUpdated" | "ProtocolRewardsWithdrawn" | "RelayerShareUpdated" | "RewardFundingRequired" | "RewardsNotConfigured"): EventFragment;
    encodeFunctionData(functionFragment: "NATIVE_TOKEN", values?: undefined): string;
    encodeFunctionData(functionFragment: "feeDecimals", values?: undefined): string;
    decodeFunctionResult(functionFragment: "NATIVE_TOKEN", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "feeDecimals", data: BytesLike): Result;
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
export declare namespace GasFeeReimbursedEvent {
    type InputTuple = [
        relayer: AddressLike,
        gasUsed: BigNumberish,
        gasPrice: BigNumberish,
        reimbursement: BigNumberish
    ];
    type OutputTuple = [
        relayer: string,
        gasUsed: bigint,
        gasPrice: bigint,
        reimbursement: bigint
    ];
    interface OutputObject {
        relayer: string;
        gasUsed: bigint;
        gasPrice: bigint;
        reimbursement: bigint;
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
export declare namespace RewardsNotConfiguredEvent {
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
export interface RelayerRewards extends BaseContract {
    connect(runner?: ContractRunner | null): RelayerRewards;
    waitForDeployment(): Promise<this>;
    interface: RelayerRewardsInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    NATIVE_TOKEN: TypedContractMethod<[], [string], "view">;
    feeDecimals: TypedContractMethod<[], [bigint], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "NATIVE_TOKEN"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "feeDecimals"): TypedContractMethod<[], [bigint], "view">;
    getEvent(key: "FeeTokenUpdated"): TypedContractEvent<FeeTokenUpdatedEvent.InputTuple, FeeTokenUpdatedEvent.OutputTuple, FeeTokenUpdatedEvent.OutputObject>;
    getEvent(key: "GasFeeReimbursed"): TypedContractEvent<GasFeeReimbursedEvent.InputTuple, GasFeeReimbursedEvent.OutputTuple, GasFeeReimbursedEvent.OutputObject>;
    getEvent(key: "ProtocolFeeUpdated"): TypedContractEvent<ProtocolFeeUpdatedEvent.InputTuple, ProtocolFeeUpdatedEvent.OutputTuple, ProtocolFeeUpdatedEvent.OutputObject>;
    getEvent(key: "ProtocolRewardsWithdrawn"): TypedContractEvent<ProtocolRewardsWithdrawnEvent.InputTuple, ProtocolRewardsWithdrawnEvent.OutputTuple, ProtocolRewardsWithdrawnEvent.OutputObject>;
    getEvent(key: "RelayerShareUpdated"): TypedContractEvent<RelayerShareUpdatedEvent.InputTuple, RelayerShareUpdatedEvent.OutputTuple, RelayerShareUpdatedEvent.OutputObject>;
    getEvent(key: "RewardFundingRequired"): TypedContractEvent<RewardFundingRequiredEvent.InputTuple, RewardFundingRequiredEvent.OutputTuple, RewardFundingRequiredEvent.OutputObject>;
    getEvent(key: "RewardsNotConfigured"): TypedContractEvent<RewardsNotConfiguredEvent.InputTuple, RewardsNotConfiguredEvent.OutputTuple, RewardsNotConfiguredEvent.OutputObject>;
    filters: {
        "FeeTokenUpdated(address,address)": TypedContractEvent<FeeTokenUpdatedEvent.InputTuple, FeeTokenUpdatedEvent.OutputTuple, FeeTokenUpdatedEvent.OutputObject>;
        FeeTokenUpdated: TypedContractEvent<FeeTokenUpdatedEvent.InputTuple, FeeTokenUpdatedEvent.OutputTuple, FeeTokenUpdatedEvent.OutputObject>;
        "GasFeeReimbursed(address,uint256,uint256,uint256)": TypedContractEvent<GasFeeReimbursedEvent.InputTuple, GasFeeReimbursedEvent.OutputTuple, GasFeeReimbursedEvent.OutputObject>;
        GasFeeReimbursed: TypedContractEvent<GasFeeReimbursedEvent.InputTuple, GasFeeReimbursedEvent.OutputTuple, GasFeeReimbursedEvent.OutputObject>;
        "ProtocolFeeUpdated(uint256)": TypedContractEvent<ProtocolFeeUpdatedEvent.InputTuple, ProtocolFeeUpdatedEvent.OutputTuple, ProtocolFeeUpdatedEvent.OutputObject>;
        ProtocolFeeUpdated: TypedContractEvent<ProtocolFeeUpdatedEvent.InputTuple, ProtocolFeeUpdatedEvent.OutputTuple, ProtocolFeeUpdatedEvent.OutputObject>;
        "ProtocolRewardsWithdrawn(address,address,uint256)": TypedContractEvent<ProtocolRewardsWithdrawnEvent.InputTuple, ProtocolRewardsWithdrawnEvent.OutputTuple, ProtocolRewardsWithdrawnEvent.OutputObject>;
        ProtocolRewardsWithdrawn: TypedContractEvent<ProtocolRewardsWithdrawnEvent.InputTuple, ProtocolRewardsWithdrawnEvent.OutputTuple, ProtocolRewardsWithdrawnEvent.OutputObject>;
        "RelayerShareUpdated(uint16)": TypedContractEvent<RelayerShareUpdatedEvent.InputTuple, RelayerShareUpdatedEvent.OutputTuple, RelayerShareUpdatedEvent.OutputObject>;
        RelayerShareUpdated: TypedContractEvent<RelayerShareUpdatedEvent.InputTuple, RelayerShareUpdatedEvent.OutputTuple, RelayerShareUpdatedEvent.OutputObject>;
        "RewardFundingRequired(uint256,address)": TypedContractEvent<RewardFundingRequiredEvent.InputTuple, RewardFundingRequiredEvent.OutputTuple, RewardFundingRequiredEvent.OutputObject>;
        RewardFundingRequired: TypedContractEvent<RewardFundingRequiredEvent.InputTuple, RewardFundingRequiredEvent.OutputTuple, RewardFundingRequiredEvent.OutputObject>;
        "RewardsNotConfigured(uint256,address)": TypedContractEvent<RewardsNotConfiguredEvent.InputTuple, RewardsNotConfiguredEvent.OutputTuple, RewardsNotConfiguredEvent.OutputObject>;
        RewardsNotConfigured: TypedContractEvent<RewardsNotConfiguredEvent.InputTuple, RewardsNotConfiguredEvent.OutputTuple, RewardsNotConfiguredEvent.OutputObject>;
    };
}
