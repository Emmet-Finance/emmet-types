import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../../../common";
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
        nonce: BigNumberish;
        amount: BigNumberish;
        fromChainId: BigNumberish;
        toChainId: BigNumberish;
        fromToken: string;
        toToken: string;
        recipient: string;
        originalHash: string;
        destinationHash: string;
    };
    type TransactionStructOutput = [
        nonce: bigint,
        amount: bigint,
        fromChainId: bigint,
        toChainId: bigint,
        fromToken: string,
        toToken: string,
        recipient: string,
        originalHash: string,
        destinationHash: string
    ] & {
        nonce: bigint;
        amount: bigint;
        fromChainId: bigint;
        toChainId: bigint;
        fromToken: string;
        toToken: string;
        recipient: string;
        originalHash: string;
        destinationHash: string;
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
export interface EmmetMultisigInterface extends Interface {
    getFunction(nameOrSignature: "DEFAULT_ADMIN_ROLE" | "MANAGER_ROLE" | "SIGNER_ROLE" | "bft" | "claimReward" | "claimRole" | "emmetToken" | "encodeDataForHashCheck" | "encodeParams" | "generateHash" | "getRoleAdmin" | "getTransaction" | "getTransactions" | "grantRole" | "hasRole" | "hashes" | "minStake" | "nonce" | "renounceRole" | "revokeRole" | "rewardAmounts" | "rewards" | "roleRequests" | "sign" | "signatures" | "stake" | "stakes" | "supportsInterface" | "transactions" | "unstake" | "updateDestinationTransaction" | "updateMinimalStake" | "updateRewardRates"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "MinimalStakeUpdated" | "NewSigner" | "PartialSignature" | "RewardRatesUpdated" | "RoleAdminChanged" | "RoleGranted" | "RoleRevoked" | "Signed" | "Staked" | "Unstaked"): EventFragment;
    encodeFunctionData(functionFragment: "DEFAULT_ADMIN_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "MANAGER_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "SIGNER_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "bft", values?: undefined): string;
    encodeFunctionData(functionFragment: "claimReward", values?: undefined): string;
    encodeFunctionData(functionFragment: "claimRole", values?: undefined): string;
    encodeFunctionData(functionFragment: "emmetToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "encodeDataForHashCheck", values: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        string,
        string,
        string
    ]): string;
    encodeFunctionData(functionFragment: "encodeParams", values: [BigNumberish, BigNumberish, BigNumberish, string, string, string]): string;
    encodeFunctionData(functionFragment: "generateHash", values: [SignatureVerifier.DecodedDataStruct, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getRoleAdmin", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getTransaction", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getTransactions", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "grantRole", values: [BytesLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "hasRole", values: [BytesLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "hashes", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "minStake", values?: undefined): string;
    encodeFunctionData(functionFragment: "nonce", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceRole", values: [BytesLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "revokeRole", values: [BytesLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "rewardAmounts", values?: undefined): string;
    encodeFunctionData(functionFragment: "rewards", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "roleRequests", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "sign", values: [BytesLike, BigNumberish, BytesLike, BytesLike, BytesLike, string]): string;
    encodeFunctionData(functionFragment: "signatures", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "stake", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "stakes", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "transactions", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "unstake", values?: undefined): string;
    encodeFunctionData(functionFragment: "updateDestinationTransaction", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "updateMinimalStake", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "updateRewardRates", values: [BigNumberish, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "DEFAULT_ADMIN_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MANAGER_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "SIGNER_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bft", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimReward", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "emmetToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "encodeDataForHashCheck", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "encodeParams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "generateHash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTransaction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTransactions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hashes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "minStake", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nonce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewardAmounts", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "roleRequests", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sign", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "signatures", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stake", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stakes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transactions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unstake", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateDestinationTransaction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateMinimalStake", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateRewardRates", data: BytesLike): Result;
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
export interface EmmetMultisig extends BaseContract {
    connect(runner?: ContractRunner | null): EmmetMultisig;
    waitForDeployment(): Promise<this>;
    interface: EmmetMultisigInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    DEFAULT_ADMIN_ROLE: TypedContractMethod<[], [string], "view">;
    MANAGER_ROLE: TypedContractMethod<[], [string], "view">;
    SIGNER_ROLE: TypedContractMethod<[], [string], "view">;
    bft: TypedContractMethod<[
    ], [
        [bigint, bigint] & {
            totalSigners: bigint;
            threshold: bigint;
        }
    ], "view">;
    claimReward: TypedContractMethod<[], [void], "nonpayable">;
    claimRole: TypedContractMethod<[], [void], "nonpayable">;
    emmetToken: TypedContractMethod<[], [string], "view">;
    encodeDataForHashCheck: TypedContractMethod<[
        fromChainId: BigNumberish,
        toChainid: BigNumberish,
        amount: BigNumberish,
        nonce: BigNumberish,
        fromToken: string,
        toToken: string,
        recipient: string
    ], [
        string
    ], "view">;
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
    getRoleAdmin: TypedContractMethod<[role: BytesLike], [string], "view">;
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
    hashes: TypedContractMethod<[nonce: BigNumberish], [string], "view">;
    minStake: TypedContractMethod<[], [bigint], "view">;
    nonce: TypedContractMethod<[], [bigint], "view">;
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
    rewardAmounts: TypedContractMethod<[
    ], [
        [bigint, bigint] & {
            finalizeReward: bigint;
            signReward: bigint;
        }
    ], "view">;
    rewards: TypedContractMethod<[signer: AddressLike], [bigint], "view">;
    roleRequests: TypedContractMethod<[candidate: AddressLike], [bigint], "view">;
    sign: TypedContractMethod<[
        txHash_: BytesLike,
        id_: BigNumberish,
        signer_: BytesLike,
        signature_: BytesLike,
        data_: BytesLike,
        originalTX_: string
    ], [
        void
    ], "nonpayable">;
    signatures: TypedContractMethod<[
        txHash: BytesLike
    ], [
        [bigint, boolean] & {
            signatureCount: bigint;
            finalized: boolean;
        }
    ], "view">;
    stake: TypedContractMethod<[amount: BigNumberish], [void], "nonpayable">;
    stakes: TypedContractMethod<[staker: AddressLike], [bigint], "view">;
    supportsInterface: TypedContractMethod<[
        interfaceId: BytesLike
    ], [
        boolean
    ], "view">;
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
            BytesHelper.DataStructOutput
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
        }
    ], "view">;
    unstake: TypedContractMethod<[], [void], "nonpayable">;
    updateDestinationTransaction: TypedContractMethod<[
        txHash_: BytesLike,
        destinationTx_: string
    ], [
        void
    ], "nonpayable">;
    updateMinimalStake: TypedContractMethod<[
        newMinStake_: BigNumberish
    ], [
        void
    ], "nonpayable">;
    updateRewardRates: TypedContractMethod<[
        finalizeReward_: BigNumberish,
        signReward_: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "DEFAULT_ADMIN_ROLE"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "MANAGER_ROLE"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "SIGNER_ROLE"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "bft"): TypedContractMethod<[
    ], [
        [bigint, bigint] & {
            totalSigners: bigint;
            threshold: bigint;
        }
    ], "view">;
    getFunction(nameOrSignature: "claimReward"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "claimRole"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "emmetToken"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "encodeDataForHashCheck"): TypedContractMethod<[
        fromChainId: BigNumberish,
        toChainid: BigNumberish,
        amount: BigNumberish,
        nonce: BigNumberish,
        fromToken: string,
        toToken: string,
        recipient: string
    ], [
        string
    ], "view">;
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
    getFunction(nameOrSignature: "getRoleAdmin"): TypedContractMethod<[role: BytesLike], [string], "view">;
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
    getFunction(nameOrSignature: "hashes"): TypedContractMethod<[nonce: BigNumberish], [string], "view">;
    getFunction(nameOrSignature: "minStake"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "nonce"): TypedContractMethod<[], [bigint], "view">;
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
    getFunction(nameOrSignature: "rewardAmounts"): TypedContractMethod<[
    ], [
        [bigint, bigint] & {
            finalizeReward: bigint;
            signReward: bigint;
        }
    ], "view">;
    getFunction(nameOrSignature: "rewards"): TypedContractMethod<[signer: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "roleRequests"): TypedContractMethod<[candidate: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "sign"): TypedContractMethod<[
        txHash_: BytesLike,
        id_: BigNumberish,
        signer_: BytesLike,
        signature_: BytesLike,
        data_: BytesLike,
        originalTX_: string
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "signatures"): TypedContractMethod<[
        txHash: BytesLike
    ], [
        [bigint, boolean] & {
            signatureCount: bigint;
            finalized: boolean;
        }
    ], "view">;
    getFunction(nameOrSignature: "stake"): TypedContractMethod<[amount: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "stakes"): TypedContractMethod<[staker: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "supportsInterface"): TypedContractMethod<[interfaceId: BytesLike], [boolean], "view">;
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
            BytesHelper.DataStructOutput
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
        }
    ], "view">;
    getFunction(nameOrSignature: "unstake"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "updateDestinationTransaction"): TypedContractMethod<[
        txHash_: BytesLike,
        destinationTx_: string
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "updateMinimalStake"): TypedContractMethod<[newMinStake_: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "updateRewardRates"): TypedContractMethod<[
        finalizeReward_: BigNumberish,
        signReward_: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getEvent(key: "MinimalStakeUpdated"): TypedContractEvent<MinimalStakeUpdatedEvent.InputTuple, MinimalStakeUpdatedEvent.OutputTuple, MinimalStakeUpdatedEvent.OutputObject>;
    getEvent(key: "NewSigner"): TypedContractEvent<NewSignerEvent.InputTuple, NewSignerEvent.OutputTuple, NewSignerEvent.OutputObject>;
    getEvent(key: "PartialSignature"): TypedContractEvent<PartialSignatureEvent.InputTuple, PartialSignatureEvent.OutputTuple, PartialSignatureEvent.OutputObject>;
    getEvent(key: "RewardRatesUpdated"): TypedContractEvent<RewardRatesUpdatedEvent.InputTuple, RewardRatesUpdatedEvent.OutputTuple, RewardRatesUpdatedEvent.OutputObject>;
    getEvent(key: "RoleAdminChanged"): TypedContractEvent<RoleAdminChangedEvent.InputTuple, RoleAdminChangedEvent.OutputTuple, RoleAdminChangedEvent.OutputObject>;
    getEvent(key: "RoleGranted"): TypedContractEvent<RoleGrantedEvent.InputTuple, RoleGrantedEvent.OutputTuple, RoleGrantedEvent.OutputObject>;
    getEvent(key: "RoleRevoked"): TypedContractEvent<RoleRevokedEvent.InputTuple, RoleRevokedEvent.OutputTuple, RoleRevokedEvent.OutputObject>;
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
        "RoleAdminChanged(bytes32,bytes32,bytes32)": TypedContractEvent<RoleAdminChangedEvent.InputTuple, RoleAdminChangedEvent.OutputTuple, RoleAdminChangedEvent.OutputObject>;
        RoleAdminChanged: TypedContractEvent<RoleAdminChangedEvent.InputTuple, RoleAdminChangedEvent.OutputTuple, RoleAdminChangedEvent.OutputObject>;
        "RoleGranted(bytes32,address,address)": TypedContractEvent<RoleGrantedEvent.InputTuple, RoleGrantedEvent.OutputTuple, RoleGrantedEvent.OutputObject>;
        RoleGranted: TypedContractEvent<RoleGrantedEvent.InputTuple, RoleGrantedEvent.OutputTuple, RoleGrantedEvent.OutputObject>;
        "RoleRevoked(bytes32,address,address)": TypedContractEvent<RoleRevokedEvent.InputTuple, RoleRevokedEvent.OutputTuple, RoleRevokedEvent.OutputObject>;
        RoleRevoked: TypedContractEvent<RoleRevokedEvent.InputTuple, RoleRevokedEvent.OutputTuple, RoleRevokedEvent.OutputObject>;
        "Signed(bytes32,uint256,bytes,bytes[],bytes[])": TypedContractEvent<SignedEvent.InputTuple, SignedEvent.OutputTuple, SignedEvent.OutputObject>;
        Signed: TypedContractEvent<SignedEvent.InputTuple, SignedEvent.OutputTuple, SignedEvent.OutputObject>;
        "Staked(address,uint256)": TypedContractEvent<StakedEvent.InputTuple, StakedEvent.OutputTuple, StakedEvent.OutputObject>;
        Staked: TypedContractEvent<StakedEvent.InputTuple, StakedEvent.OutputTuple, StakedEvent.OutputObject>;
        "Unstaked(address,uint256)": TypedContractEvent<UnstakedEvent.InputTuple, UnstakedEvent.OutputTuple, UnstakedEvent.OutputObject>;
        Unstaked: TypedContractEvent<UnstakedEvent.InputTuple, UnstakedEvent.OutputTuple, UnstakedEvent.OutputObject>;
    };
}
