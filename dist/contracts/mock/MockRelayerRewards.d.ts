import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../../common";
export interface MockRelayerRewardsInterface extends Interface {
    getFunction(nameOrSignature: "fundContract" | "getErc20Fee" | "getFeeToken" | "getNativeTokenFee" | "getPaidRelayerRewards" | "getRelayerShare" | "getRemainingProtocolRewards" | "mockAwardRelayer" | "mockUpdateFeeToken" | "mockUpdateProtocolFee" | "mockUpdateRelayerShare" | "mockWithdrawProtocolRewards"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "FeeTokenUpdated" | "GasFeeReimbursed" | "ProtocolFeeUpdated" | "ProtocolRewardsWithdrawn" | "RelayerShareUpdated" | "RewardFundingRequired" | "RewardsNotConfigured"): EventFragment;
    encodeFunctionData(functionFragment: "fundContract", values?: undefined): string;
    encodeFunctionData(functionFragment: "getErc20Fee", values?: undefined): string;
    encodeFunctionData(functionFragment: "getFeeToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "getNativeTokenFee", values?: undefined): string;
    encodeFunctionData(functionFragment: "getPaidRelayerRewards", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getRelayerShare", values?: undefined): string;
    encodeFunctionData(functionFragment: "getRemainingProtocolRewards", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "mockAwardRelayer", values: [boolean]): string;
    encodeFunctionData(functionFragment: "mockUpdateFeeToken", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "mockUpdateProtocolFee", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "mockUpdateRelayerShare", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "mockWithdrawProtocolRewards", values: [AddressLike, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "fundContract", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getErc20Fee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getFeeToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNativeTokenFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPaidRelayerRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRelayerShare", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRemainingProtocolRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mockAwardRelayer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mockUpdateFeeToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mockUpdateProtocolFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mockUpdateRelayerShare", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mockWithdrawProtocolRewards", data: BytesLike): Result;
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
export interface MockRelayerRewards extends BaseContract {
    connect(runner?: ContractRunner | null): MockRelayerRewards;
    waitForDeployment(): Promise<this>;
    interface: MockRelayerRewardsInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    fundContract: TypedContractMethod<[], [void], "payable">;
    getErc20Fee: TypedContractMethod<[], [bigint], "view">;
    getFeeToken: TypedContractMethod<[], [string], "view">;
    getNativeTokenFee: TypedContractMethod<[], [bigint], "view">;
    getPaidRelayerRewards: TypedContractMethod<[
        token: AddressLike
    ], [
        bigint
    ], "view">;
    getRelayerShare: TypedContractMethod<[], [bigint], "view">;
    getRemainingProtocolRewards: TypedContractMethod<[
        token: AddressLike
    ], [
        bigint
    ], "view">;
    mockAwardRelayer: TypedContractMethod<[
        isRewardInERC20: boolean
    ], [
        void
    ], "nonpayable">;
    mockUpdateFeeToken: TypedContractMethod<[
        newFeeToken: AddressLike,
        priceFeed: AddressLike
    ], [
        void
    ], "nonpayable">;
    mockUpdateProtocolFee: TypedContractMethod<[
        nativeTokenFee: BigNumberish,
        erc20Fee: BigNumberish
    ], [
        void
    ], "nonpayable">;
    mockUpdateRelayerShare: TypedContractMethod<[
        newRelayerShare: BigNumberish
    ], [
        void
    ], "nonpayable">;
    mockWithdrawProtocolRewards: TypedContractMethod<[
        token: AddressLike,
        amount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "fundContract"): TypedContractMethod<[], [void], "payable">;
    getFunction(nameOrSignature: "getErc20Fee"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "getFeeToken"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "getNativeTokenFee"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "getPaidRelayerRewards"): TypedContractMethod<[token: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "getRelayerShare"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "getRemainingProtocolRewards"): TypedContractMethod<[token: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "mockAwardRelayer"): TypedContractMethod<[isRewardInERC20: boolean], [void], "nonpayable">;
    getFunction(nameOrSignature: "mockUpdateFeeToken"): TypedContractMethod<[
        newFeeToken: AddressLike,
        priceFeed: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "mockUpdateProtocolFee"): TypedContractMethod<[
        nativeTokenFee: BigNumberish,
        erc20Fee: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "mockUpdateRelayerShare"): TypedContractMethod<[newRelayerShare: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "mockWithdrawProtocolRewards"): TypedContractMethod<[
        token: AddressLike,
        amount: BigNumberish
    ], [
        void
    ], "nonpayable">;
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
