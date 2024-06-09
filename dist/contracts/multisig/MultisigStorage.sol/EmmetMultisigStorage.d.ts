import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../../../common";
export declare namespace BytesHelper {
    type DataStruct = {
        part1: BytesLike;
        part2: BytesLike;
    };
    type DataStructOutput = [part1: string, part2: string] & {
        part1: string;
        part2: string;
    };
}
export interface EmmetMultisigStorageInterface extends Interface {
    getFunction(nameOrSignature: "MANAGER_ROLE" | "SIGNER_ROLE" | "bft" | "emmetToken" | "hashes" | "minStake" | "nonce" | "rewardAmounts" | "rewards" | "roleRequests" | "signatures" | "stakes" | "transactions"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "MinimalStakeUpdated" | "NewSigner" | "PartialSignature" | "RewardRatesUpdated" | "Signed" | "Staked" | "Unstaked"): EventFragment;
    encodeFunctionData(functionFragment: "MANAGER_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "SIGNER_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "bft", values?: undefined): string;
    encodeFunctionData(functionFragment: "emmetToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "hashes", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "minStake", values?: undefined): string;
    encodeFunctionData(functionFragment: "nonce", values?: undefined): string;
    encodeFunctionData(functionFragment: "rewardAmounts", values?: undefined): string;
    encodeFunctionData(functionFragment: "rewards", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "roleRequests", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "signatures", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "stakes", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "transactions", values: [BytesLike]): string;
    decodeFunctionResult(functionFragment: "MANAGER_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "SIGNER_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bft", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "emmetToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hashes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "minStake", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nonce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewardAmounts", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "roleRequests", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "signatures", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stakes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transactions", data: BytesLike): Result;
}
export declare namespace MinimalStakeUpdatedEvent {
    type InputTuple = [newStake: BigNumberish];
    type OutputTuple = [newStake: bigint];
    interface OutputObject {
        newStake: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace NewSignerEvent {
    type InputTuple = [signer: AddressLike];
    type OutputTuple = [signer: string];
    interface OutputObject {
        signer: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace PartialSignatureEvent {
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
export declare namespace RewardRatesUpdatedEvent {
    type InputTuple = [
        finalizeReward: BigNumberish,
        signReward: BigNumberish
    ];
    type OutputTuple = [finalizeReward: bigint, signReward: bigint];
    interface OutputObject {
        finalizeReward: bigint;
        signReward: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace SignedEvent {
    type InputTuple = [
        txHash: BytesLike,
        id: BigNumberish,
        data: BytesLike,
        signers: BytesLike[],
        aggregatedSignature: BytesLike[]
    ];
    type OutputTuple = [
        txHash: string,
        id: bigint,
        data: string,
        signers: string[],
        aggregatedSignature: string[]
    ];
    interface OutputObject {
        txHash: string;
        id: bigint;
        data: string;
        signers: string[];
        aggregatedSignature: string[];
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace StakedEvent {
    type InputTuple = [staker: AddressLike, amount: BigNumberish];
    type OutputTuple = [staker: string, amount: bigint];
    interface OutputObject {
        staker: string;
        amount: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace UnstakedEvent {
    type InputTuple = [staker: AddressLike, amount: BigNumberish];
    type OutputTuple = [staker: string, amount: bigint];
    interface OutputObject {
        staker: string;
        amount: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface EmmetMultisigStorage extends BaseContract {
    connect(runner?: ContractRunner | null): EmmetMultisigStorage;
    waitForDeployment(): Promise<this>;
    interface: EmmetMultisigStorageInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    MANAGER_ROLE: TypedContractMethod<[], [string], "view">;
    SIGNER_ROLE: TypedContractMethod<[], [string], "view">;
    bft: TypedContractMethod<[
    ], [
        [bigint, bigint] & {
            totalSigners: bigint;
            threshold: bigint;
        }
    ], "view">;
    emmetToken: TypedContractMethod<[], [string], "view">;
    hashes: TypedContractMethod<[nonce: BigNumberish], [string], "view">;
    minStake: TypedContractMethod<[], [bigint], "view">;
    nonce: TypedContractMethod<[], [bigint], "view">;
    rewardAmounts: TypedContractMethod<[
    ], [
        [bigint, bigint] & {
            finalizeReward: bigint;
            signReward: bigint;
        }
    ], "view">;
    rewards: TypedContractMethod<[signer: AddressLike], [bigint], "view">;
    roleRequests: TypedContractMethod<[candidate: AddressLike], [bigint], "view">;
    signatures: TypedContractMethod<[
        txHash: BytesLike
    ], [
        [bigint, boolean] & {
            signatureCount: bigint;
            finalized: boolean;
        }
    ], "view">;
    stakes: TypedContractMethod<[staker: AddressLike], [bigint], "view">;
    transactions: TypedContractMethod<[
        txHash: BytesLike
    ], [
        [
            bigint,
            bigint,
            bigint,
            bigint,
            string,
            string,
            BytesHelper.DataStructOutput,
            BytesHelper.DataStructOutput,
            BytesHelper.DataStructOutput,
            bigint,
            bigint
        ] & {
            nonce: bigint;
            amount: bigint;
            fromChainId: bigint;
            toChainId: bigint;
            fromToken: string;
            toToken: string;
            recipient: BytesHelper.DataStructOutput;
            originalHash: BytesHelper.DataStructOutput;
            destinationHash: BytesHelper.DataStructOutput;
            started: bigint;
            finished: bigint;
        }
    ], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "MANAGER_ROLE"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "SIGNER_ROLE"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "bft"): TypedContractMethod<[
    ], [
        [bigint, bigint] & {
            totalSigners: bigint;
            threshold: bigint;
        }
    ], "view">;
    getFunction(nameOrSignature: "emmetToken"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "hashes"): TypedContractMethod<[nonce: BigNumberish], [string], "view">;
    getFunction(nameOrSignature: "minStake"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "nonce"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "rewardAmounts"): TypedContractMethod<[
    ], [
        [bigint, bigint] & {
            finalizeReward: bigint;
            signReward: bigint;
        }
    ], "view">;
    getFunction(nameOrSignature: "rewards"): TypedContractMethod<[signer: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "roleRequests"): TypedContractMethod<[candidate: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "signatures"): TypedContractMethod<[
        txHash: BytesLike
    ], [
        [bigint, boolean] & {
            signatureCount: bigint;
            finalized: boolean;
        }
    ], "view">;
    getFunction(nameOrSignature: "stakes"): TypedContractMethod<[staker: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "transactions"): TypedContractMethod<[
        txHash: BytesLike
    ], [
        [
            bigint,
            bigint,
            bigint,
            bigint,
            string,
            string,
            BytesHelper.DataStructOutput,
            BytesHelper.DataStructOutput,
            BytesHelper.DataStructOutput,
            bigint,
            bigint
        ] & {
            nonce: bigint;
            amount: bigint;
            fromChainId: bigint;
            toChainId: bigint;
            fromToken: string;
            toToken: string;
            recipient: BytesHelper.DataStructOutput;
            originalHash: BytesHelper.DataStructOutput;
            destinationHash: BytesHelper.DataStructOutput;
            started: bigint;
            finished: bigint;
        }
    ], "view">;
    getEvent(key: "MinimalStakeUpdated"): TypedContractEvent<MinimalStakeUpdatedEvent.InputTuple, MinimalStakeUpdatedEvent.OutputTuple, MinimalStakeUpdatedEvent.OutputObject>;
    getEvent(key: "NewSigner"): TypedContractEvent<NewSignerEvent.InputTuple, NewSignerEvent.OutputTuple, NewSignerEvent.OutputObject>;
    getEvent(key: "PartialSignature"): TypedContractEvent<PartialSignatureEvent.InputTuple, PartialSignatureEvent.OutputTuple, PartialSignatureEvent.OutputObject>;
    getEvent(key: "RewardRatesUpdated"): TypedContractEvent<RewardRatesUpdatedEvent.InputTuple, RewardRatesUpdatedEvent.OutputTuple, RewardRatesUpdatedEvent.OutputObject>;
    getEvent(key: "Signed"): TypedContractEvent<SignedEvent.InputTuple, SignedEvent.OutputTuple, SignedEvent.OutputObject>;
    getEvent(key: "Staked"): TypedContractEvent<StakedEvent.InputTuple, StakedEvent.OutputTuple, StakedEvent.OutputObject>;
    getEvent(key: "Unstaked"): TypedContractEvent<UnstakedEvent.InputTuple, UnstakedEvent.OutputTuple, UnstakedEvent.OutputObject>;
    filters: {
        "MinimalStakeUpdated(uint256)": TypedContractEvent<MinimalStakeUpdatedEvent.InputTuple, MinimalStakeUpdatedEvent.OutputTuple, MinimalStakeUpdatedEvent.OutputObject>;
        MinimalStakeUpdated: TypedContractEvent<MinimalStakeUpdatedEvent.InputTuple, MinimalStakeUpdatedEvent.OutputTuple, MinimalStakeUpdatedEvent.OutputObject>;
        "NewSigner(address)": TypedContractEvent<NewSignerEvent.InputTuple, NewSignerEvent.OutputTuple, NewSignerEvent.OutputObject>;
        NewSigner: TypedContractEvent<NewSignerEvent.InputTuple, NewSignerEvent.OutputTuple, NewSignerEvent.OutputObject>;
        "PartialSignature(bytes32)": TypedContractEvent<PartialSignatureEvent.InputTuple, PartialSignatureEvent.OutputTuple, PartialSignatureEvent.OutputObject>;
        PartialSignature: TypedContractEvent<PartialSignatureEvent.InputTuple, PartialSignatureEvent.OutputTuple, PartialSignatureEvent.OutputObject>;
        "RewardRatesUpdated(uint128,uint128)": TypedContractEvent<RewardRatesUpdatedEvent.InputTuple, RewardRatesUpdatedEvent.OutputTuple, RewardRatesUpdatedEvent.OutputObject>;
        RewardRatesUpdated: TypedContractEvent<RewardRatesUpdatedEvent.InputTuple, RewardRatesUpdatedEvent.OutputTuple, RewardRatesUpdatedEvent.OutputObject>;
        "Signed(bytes32,uint256,bytes,bytes[],bytes[])": TypedContractEvent<SignedEvent.InputTuple, SignedEvent.OutputTuple, SignedEvent.OutputObject>;
        Signed: TypedContractEvent<SignedEvent.InputTuple, SignedEvent.OutputTuple, SignedEvent.OutputObject>;
        "Staked(address,uint256)": TypedContractEvent<StakedEvent.InputTuple, StakedEvent.OutputTuple, StakedEvent.OutputObject>;
        Staked: TypedContractEvent<StakedEvent.InputTuple, StakedEvent.OutputTuple, StakedEvent.OutputObject>;
        "Unstaked(address,uint256)": TypedContractEvent<UnstakedEvent.InputTuple, UnstakedEvent.OutputTuple, UnstakedEvent.OutputObject>;
        Unstaked: TypedContractEvent<UnstakedEvent.InputTuple, UnstakedEvent.OutputTuple, UnstakedEvent.OutputObject>;
    };
}
