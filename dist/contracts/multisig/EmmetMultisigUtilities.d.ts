import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../../common";
export declare namespace SignatureVerifier {
    type DecodedDataStruct = {
        fromChainId: BigNumberish;
        toChainId: BigNumberish;
        amount: BigNumberish;
        fromToken: string;
        toToken: string;
        recipient: string;
    };
    type DecodedDataStructOutput = [
        fromChainId: bigint,
        toChainId: bigint,
        amount: bigint,
        fromToken: string,
        toToken: string,
        recipient: string
    ] & {
        fromChainId: bigint;
        toChainId: bigint;
        amount: bigint;
        fromToken: string;
        toToken: string;
        recipient: string;
    };
}
export declare namespace MultiSigTypes {
    type TransactionStruct = {
        txHash: BytesLike;
        nonce: BigNumberish;
        sentAmount: BigNumberish;
        fromChainId: BigNumberish;
        toChainId: BigNumberish;
        fromToken: string;
        toToken: string;
        sender: string;
        recipient: string;
        originalHash: string;
        destinationHash: string;
        started: BigNumberish;
        finished: BigNumberish;
        receivedAmount: BigNumberish;
        protocolFee: BigNumberish;
        tokenFee: BigNumberish;
    };
    type TransactionStructOutput = [
        txHash: string,
        nonce: bigint,
        sentAmount: bigint,
        fromChainId: bigint,
        toChainId: bigint,
        fromToken: string,
        toToken: string,
        sender: string,
        recipient: string,
        originalHash: string,
        destinationHash: string,
        started: bigint,
        finished: bigint,
        receivedAmount: bigint,
        protocolFee: bigint,
        tokenFee: bigint
    ] & {
        txHash: string;
        nonce: bigint;
        sentAmount: bigint;
        fromChainId: bigint;
        toChainId: bigint;
        fromToken: string;
        toToken: string;
        sender: string;
        recipient: string;
        originalHash: string;
        destinationHash: string;
        started: bigint;
        finished: bigint;
        receivedAmount: bigint;
        protocolFee: bigint;
        tokenFee: bigint;
    };
}
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
export interface EmmetMultisigUtilitiesInterface extends Interface {
    getFunction(nameOrSignature: "MANAGER_ROLE" | "SIGNER_ROLE" | "accountStats" | "bft" | "emmetData" | "emmetToken" | "encodeParams" | "generateHash" | "getSignatures" | "getTransaction" | "getTransactions" | "hashes" | "minStake" | "nonce" | "priceFeeds" | "rewardAmounts" | "rewards" | "roleRequests" | "signatures" | "stakes" | "totalAmountUSD" | "totalFeesUSD" | "transactions" | "uniqueAddresses"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "MinimalStakeUpdated" | "NewSigner" | "PartialSignature" | "RewardRatesUpdated" | "Signed" | "Staked" | "Unstaked"): EventFragment;
    encodeFunctionData(functionFragment: "MANAGER_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "SIGNER_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "accountStats", values: [string]): string;
    encodeFunctionData(functionFragment: "bft", values?: undefined): string;
    encodeFunctionData(functionFragment: "emmetData", values?: undefined): string;
    encodeFunctionData(functionFragment: "emmetToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "encodeParams", values: [BigNumberish, BigNumberish, BigNumberish, string, string, string]): string;
    encodeFunctionData(functionFragment: "generateHash", values: [SignatureVerifier.DecodedDataStruct, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getSignatures", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getTransaction", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getTransactions", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "hashes", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "minStake", values?: undefined): string;
    encodeFunctionData(functionFragment: "nonce", values?: undefined): string;
    encodeFunctionData(functionFragment: "priceFeeds", values: [string]): string;
    encodeFunctionData(functionFragment: "rewardAmounts", values?: undefined): string;
    encodeFunctionData(functionFragment: "rewards", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "roleRequests", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "signatures", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "stakes", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "totalAmountUSD", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalFeesUSD", values?: undefined): string;
    encodeFunctionData(functionFragment: "transactions", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "uniqueAddresses", values?: undefined): string;
    decodeFunctionResult(functionFragment: "MANAGER_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "SIGNER_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "accountStats", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bft", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "emmetData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "emmetToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "encodeParams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "generateHash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSignatures", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTransaction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTransactions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hashes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "minStake", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nonce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "priceFeeds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewardAmounts", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "roleRequests", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "signatures", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stakes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalAmountUSD", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalFeesUSD", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transactions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "uniqueAddresses", data: BytesLike): Result;
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
export interface EmmetMultisigUtilities extends BaseContract {
    connect(runner?: ContractRunner | null): EmmetMultisigUtilities;
    waitForDeployment(): Promise<this>;
    interface: EmmetMultisigUtilitiesInterface;
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
    accountStats: TypedContractMethod<[
        account: string
    ], [
        [bigint, bigint] & {
            received: bigint;
            sent: bigint;
        }
    ], "view">;
    bft: TypedContractMethod<[
    ], [
        [bigint, bigint] & {
            totalSigners: bigint;
            threshold: bigint;
        }
    ], "view">;
    emmetData: TypedContractMethod<[], [string], "view">;
    emmetToken: TypedContractMethod<[], [string], "view">;
    encodeParams: TypedContractMethod<[
        fromChainId: BigNumberish,
        toChainId: BigNumberish,
        amount: BigNumberish,
        fromToken: string,
        toToken: string,
        recipient: string
    ], [
        string
    ], "view">;
    generateHash: TypedContractMethod<[
        decoded_: SignatureVerifier.DecodedDataStruct,
        nonce_: BigNumberish
    ], [
        string
    ], "view">;
    getSignatures: TypedContractMethod<[
        txHash_: BytesLike
    ], [
        [
            bigint,
            boolean,
            string[],
            string[]
        ] & {
            signatureCount: bigint;
            finalized: boolean;
            aggregatedSignature: string[];
            signers: string[];
        }
    ], "view">;
    getTransaction: TypedContractMethod<[
        txHash_: BytesLike
    ], [
        MultiSigTypes.TransactionStructOutput
    ], "view">;
    getTransactions: TypedContractMethod<[
        batch: BigNumberish,
        skip: BigNumberish
    ], [
        MultiSigTypes.TransactionStructOutput[]
    ], "view">;
    hashes: TypedContractMethod<[nonce: BigNumberish], [string], "view">;
    minStake: TypedContractMethod<[], [bigint], "view">;
    nonce: TypedContractMethod<[], [bigint], "view">;
    priceFeeds: TypedContractMethod<[symbol: string], [string], "view">;
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
    totalAmountUSD: TypedContractMethod<[], [bigint], "view">;
    totalFeesUSD: TypedContractMethod<[], [bigint], "view">;
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
            BytesHelper.DataStructOutput,
            bigint,
            bigint,
            bigint,
            bigint
        ] & {
            nonce: bigint;
            sentAmount: bigint;
            fromChainId: bigint;
            toChainId: bigint;
            fromToken: string;
            toToken: string;
            sender: BytesHelper.DataStructOutput;
            recipient: BytesHelper.DataStructOutput;
            originalHash: BytesHelper.DataStructOutput;
            destinationHash: BytesHelper.DataStructOutput;
            started: bigint;
            finished: bigint;
            protocolFee: bigint;
            tokenFee: bigint;
        }
    ], "view">;
    uniqueAddresses: TypedContractMethod<[], [bigint], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "MANAGER_ROLE"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "SIGNER_ROLE"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "accountStats"): TypedContractMethod<[
        account: string
    ], [
        [bigint, bigint] & {
            received: bigint;
            sent: bigint;
        }
    ], "view">;
    getFunction(nameOrSignature: "bft"): TypedContractMethod<[
    ], [
        [bigint, bigint] & {
            totalSigners: bigint;
            threshold: bigint;
        }
    ], "view">;
    getFunction(nameOrSignature: "emmetData"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "emmetToken"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "encodeParams"): TypedContractMethod<[
        fromChainId: BigNumberish,
        toChainId: BigNumberish,
        amount: BigNumberish,
        fromToken: string,
        toToken: string,
        recipient: string
    ], [
        string
    ], "view">;
    getFunction(nameOrSignature: "generateHash"): TypedContractMethod<[
        decoded_: SignatureVerifier.DecodedDataStruct,
        nonce_: BigNumberish
    ], [
        string
    ], "view">;
    getFunction(nameOrSignature: "getSignatures"): TypedContractMethod<[
        txHash_: BytesLike
    ], [
        [
            bigint,
            boolean,
            string[],
            string[]
        ] & {
            signatureCount: bigint;
            finalized: boolean;
            aggregatedSignature: string[];
            signers: string[];
        }
    ], "view">;
    getFunction(nameOrSignature: "getTransaction"): TypedContractMethod<[
        txHash_: BytesLike
    ], [
        MultiSigTypes.TransactionStructOutput
    ], "view">;
    getFunction(nameOrSignature: "getTransactions"): TypedContractMethod<[
        batch: BigNumberish,
        skip: BigNumberish
    ], [
        MultiSigTypes.TransactionStructOutput[]
    ], "view">;
    getFunction(nameOrSignature: "hashes"): TypedContractMethod<[nonce: BigNumberish], [string], "view">;
    getFunction(nameOrSignature: "minStake"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "nonce"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "priceFeeds"): TypedContractMethod<[symbol: string], [string], "view">;
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
    getFunction(nameOrSignature: "totalAmountUSD"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "totalFeesUSD"): TypedContractMethod<[], [bigint], "view">;
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
            BytesHelper.DataStructOutput,
            bigint,
            bigint,
            bigint,
            bigint
        ] & {
            nonce: bigint;
            sentAmount: bigint;
            fromChainId: bigint;
            toChainId: bigint;
            fromToken: string;
            toToken: string;
            sender: BytesHelper.DataStructOutput;
            recipient: BytesHelper.DataStructOutput;
            originalHash: BytesHelper.DataStructOutput;
            destinationHash: BytesHelper.DataStructOutput;
            started: bigint;
            finished: bigint;
            protocolFee: bigint;
            tokenFee: bigint;
        }
    ], "view">;
    getFunction(nameOrSignature: "uniqueAddresses"): TypedContractMethod<[], [bigint], "view">;
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
