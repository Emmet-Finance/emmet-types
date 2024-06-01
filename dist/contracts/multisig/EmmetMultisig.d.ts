import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../../common";
export interface EmmetMultisigInterface extends Interface {
    getFunction(nameOrSignature: "DEFAULT_ADMIN_ROLE" | "SIGNER_ROLE" | "claimReward" | "claimRole" | "emmetToken" | "getRoleAdmin" | "grantRole" | "hasRole" | "hashes" | "minStake" | "nonce" | "previouslyProcessedTransactions" | "propose" | "renounceRole" | "revokeRole" | "rewardAmounts" | "rewards" | "roleRequests" | "sign" | "stake" | "stakes" | "supportsInterface" | "threshold" | "totalSigners" | "transactions" | "unstake"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "DoubleSigning" | "NewSigner" | "PartialSignature" | "Proposal" | "RoleAdminChanged" | "RoleGranted" | "RoleRevoked" | "Signed" | "Staked" | "Unstaked"): EventFragment;
    encodeFunctionData(functionFragment: "DEFAULT_ADMIN_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "SIGNER_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "claimReward", values?: undefined): string;
    encodeFunctionData(functionFragment: "claimRole", values?: undefined): string;
    encodeFunctionData(functionFragment: "emmetToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "getRoleAdmin", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "grantRole", values: [BytesLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "hasRole", values: [BytesLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "hashes", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "minStake", values?: undefined): string;
    encodeFunctionData(functionFragment: "nonce", values?: undefined): string;
    encodeFunctionData(functionFragment: "previouslyProcessedTransactions", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "propose", values: [BytesLike, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "renounceRole", values: [BytesLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "revokeRole", values: [BytesLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "rewardAmounts", values?: undefined): string;
    encodeFunctionData(functionFragment: "rewards", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "roleRequests", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "sign", values: [BytesLike, BigNumberish, BytesLike, BytesLike, BytesLike, string]): string;
    encodeFunctionData(functionFragment: "stake", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "stakes", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "threshold", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSigners", values?: undefined): string;
    encodeFunctionData(functionFragment: "transactions", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "unstake", values?: undefined): string;
    decodeFunctionResult(functionFragment: "DEFAULT_ADMIN_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "SIGNER_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimReward", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "emmetToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hashes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "minStake", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nonce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "previouslyProcessedTransactions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "propose", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewardAmounts", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "roleRequests", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sign", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stake", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stakes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "threshold", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSigners", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transactions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unstake", data: BytesLike): Result;
}
export declare namespace DoubleSigningEvent {
    type InputTuple = [txHash: BytesLike, signer: AddressLike];
    type OutputTuple = [txHash: string, signer: string];
    interface OutputObject {
        txHash: string;
        signer: string;
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
export declare namespace ProposalEvent {
    type InputTuple = [
        txHash: BytesLike,
        txIndex: BigNumberish,
        txData: BytesLike,
        originalChainHash: string
    ];
    type OutputTuple = [
        txHash: string,
        txIndex: bigint,
        txData: string,
        originalChainHash: string
    ];
    interface OutputObject {
        txHash: string;
        txIndex: bigint;
        txData: string;
        originalChainHash: string;
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
        target: string,
        data: BytesLike,
        id: BigNumberish,
        signers: BytesLike[],
        aggregatedSignature: BytesLike[]
    ];
    type OutputTuple = [
        txHash: string,
        target: string,
        data: string,
        id: bigint,
        signers: string[],
        aggregatedSignature: string[]
    ];
    interface OutputObject {
        txHash: string;
        target: string;
        data: string;
        id: bigint;
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
    SIGNER_ROLE: TypedContractMethod<[], [string], "view">;
    claimReward: TypedContractMethod<[], [void], "nonpayable">;
    claimRole: TypedContractMethod<[], [void], "nonpayable">;
    emmetToken: TypedContractMethod<[], [string], "view">;
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
    hashes: TypedContractMethod<[id: BigNumberish], [string], "view">;
    minStake: TypedContractMethod<[], [bigint], "view">;
    nonce: TypedContractMethod<[], [bigint], "view">;
    previouslyProcessedTransactions: TypedContractMethod<[
        chainId: BigNumberish,
        txHash: string
    ], [
        boolean
    ], "view">;
    propose: TypedContractMethod<[
        data_: BytesLike,
        signature_: BytesLike,
        signer_: BytesLike
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
    rewardAmounts: TypedContractMethod<[
    ], [
        [bigint, bigint] & {
            proposeReward: bigint;
            signReward: bigint;
        }
    ], "view">;
    rewards: TypedContractMethod<[signer: AddressLike], [bigint], "view">;
    roleRequests: TypedContractMethod<[
        arg0: AddressLike
    ], [
        [bigint, boolean] & {
            eligibleTime: bigint;
            pending: boolean;
        }
    ], "view">;
    sign: TypedContractMethod<[
        txHash_: BytesLike,
        id_: BigNumberish,
        signer_: BytesLike,
        signature_: BytesLike,
        data_: BytesLike,
        contract_: string
    ], [
        void
    ], "nonpayable">;
    stake: TypedContractMethod<[amount: BigNumberish], [void], "nonpayable">;
    stakes: TypedContractMethod<[staker: AddressLike], [bigint], "view">;
    supportsInterface: TypedContractMethod<[
        interfaceId: BytesLike
    ], [
        boolean
    ], "view">;
    threshold: TypedContractMethod<[], [bigint], "view">;
    totalSigners: TypedContractMethod<[], [bigint], "view">;
    transactions: TypedContractMethod<[
        txHash: BytesLike
    ], [
        [
            bigint,
            string,
            boolean
        ] & {
            signatureCount: bigint;
            originalHash: string;
            finalized: boolean;
        }
    ], "view">;
    unstake: TypedContractMethod<[], [void], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "DEFAULT_ADMIN_ROLE"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "SIGNER_ROLE"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "claimReward"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "claimRole"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "emmetToken"): TypedContractMethod<[], [string], "view">;
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
    getFunction(nameOrSignature: "hashes"): TypedContractMethod<[id: BigNumberish], [string], "view">;
    getFunction(nameOrSignature: "minStake"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "nonce"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "previouslyProcessedTransactions"): TypedContractMethod<[
        chainId: BigNumberish,
        txHash: string
    ], [
        boolean
    ], "view">;
    getFunction(nameOrSignature: "propose"): TypedContractMethod<[
        data_: BytesLike,
        signature_: BytesLike,
        signer_: BytesLike
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
    getFunction(nameOrSignature: "rewardAmounts"): TypedContractMethod<[
    ], [
        [bigint, bigint] & {
            proposeReward: bigint;
            signReward: bigint;
        }
    ], "view">;
    getFunction(nameOrSignature: "rewards"): TypedContractMethod<[signer: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "roleRequests"): TypedContractMethod<[
        arg0: AddressLike
    ], [
        [bigint, boolean] & {
            eligibleTime: bigint;
            pending: boolean;
        }
    ], "view">;
    getFunction(nameOrSignature: "sign"): TypedContractMethod<[
        txHash_: BytesLike,
        id_: BigNumberish,
        signer_: BytesLike,
        signature_: BytesLike,
        data_: BytesLike,
        contract_: string
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "stake"): TypedContractMethod<[amount: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "stakes"): TypedContractMethod<[staker: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "supportsInterface"): TypedContractMethod<[interfaceId: BytesLike], [boolean], "view">;
    getFunction(nameOrSignature: "threshold"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "totalSigners"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "transactions"): TypedContractMethod<[
        txHash: BytesLike
    ], [
        [
            bigint,
            string,
            boolean
        ] & {
            signatureCount: bigint;
            originalHash: string;
            finalized: boolean;
        }
    ], "view">;
    getFunction(nameOrSignature: "unstake"): TypedContractMethod<[], [void], "nonpayable">;
    getEvent(key: "DoubleSigning"): TypedContractEvent<DoubleSigningEvent.InputTuple, DoubleSigningEvent.OutputTuple, DoubleSigningEvent.OutputObject>;
    getEvent(key: "NewSigner"): TypedContractEvent<NewSignerEvent.InputTuple, NewSignerEvent.OutputTuple, NewSignerEvent.OutputObject>;
    getEvent(key: "PartialSignature"): TypedContractEvent<PartialSignatureEvent.InputTuple, PartialSignatureEvent.OutputTuple, PartialSignatureEvent.OutputObject>;
    getEvent(key: "Proposal"): TypedContractEvent<ProposalEvent.InputTuple, ProposalEvent.OutputTuple, ProposalEvent.OutputObject>;
    getEvent(key: "RoleAdminChanged"): TypedContractEvent<RoleAdminChangedEvent.InputTuple, RoleAdminChangedEvent.OutputTuple, RoleAdminChangedEvent.OutputObject>;
    getEvent(key: "RoleGranted"): TypedContractEvent<RoleGrantedEvent.InputTuple, RoleGrantedEvent.OutputTuple, RoleGrantedEvent.OutputObject>;
    getEvent(key: "RoleRevoked"): TypedContractEvent<RoleRevokedEvent.InputTuple, RoleRevokedEvent.OutputTuple, RoleRevokedEvent.OutputObject>;
    getEvent(key: "Signed"): TypedContractEvent<SignedEvent.InputTuple, SignedEvent.OutputTuple, SignedEvent.OutputObject>;
    getEvent(key: "Staked"): TypedContractEvent<StakedEvent.InputTuple, StakedEvent.OutputTuple, StakedEvent.OutputObject>;
    getEvent(key: "Unstaked"): TypedContractEvent<UnstakedEvent.InputTuple, UnstakedEvent.OutputTuple, UnstakedEvent.OutputObject>;
    filters: {
        "DoubleSigning(bytes32,address)": TypedContractEvent<DoubleSigningEvent.InputTuple, DoubleSigningEvent.OutputTuple, DoubleSigningEvent.OutputObject>;
        DoubleSigning: TypedContractEvent<DoubleSigningEvent.InputTuple, DoubleSigningEvent.OutputTuple, DoubleSigningEvent.OutputObject>;
        "NewSigner(address)": TypedContractEvent<NewSignerEvent.InputTuple, NewSignerEvent.OutputTuple, NewSignerEvent.OutputObject>;
        NewSigner: TypedContractEvent<NewSignerEvent.InputTuple, NewSignerEvent.OutputTuple, NewSignerEvent.OutputObject>;
        "PartialSignature(bytes32)": TypedContractEvent<PartialSignatureEvent.InputTuple, PartialSignatureEvent.OutputTuple, PartialSignatureEvent.OutputObject>;
        PartialSignature: TypedContractEvent<PartialSignatureEvent.InputTuple, PartialSignatureEvent.OutputTuple, PartialSignatureEvent.OutputObject>;
        "Proposal(bytes32,uint256,bytes,string)": TypedContractEvent<ProposalEvent.InputTuple, ProposalEvent.OutputTuple, ProposalEvent.OutputObject>;
        Proposal: TypedContractEvent<ProposalEvent.InputTuple, ProposalEvent.OutputTuple, ProposalEvent.OutputObject>;
        "RoleAdminChanged(bytes32,bytes32,bytes32)": TypedContractEvent<RoleAdminChangedEvent.InputTuple, RoleAdminChangedEvent.OutputTuple, RoleAdminChangedEvent.OutputObject>;
        RoleAdminChanged: TypedContractEvent<RoleAdminChangedEvent.InputTuple, RoleAdminChangedEvent.OutputTuple, RoleAdminChangedEvent.OutputObject>;
        "RoleGranted(bytes32,address,address)": TypedContractEvent<RoleGrantedEvent.InputTuple, RoleGrantedEvent.OutputTuple, RoleGrantedEvent.OutputObject>;
        RoleGranted: TypedContractEvent<RoleGrantedEvent.InputTuple, RoleGrantedEvent.OutputTuple, RoleGrantedEvent.OutputObject>;
        "RoleRevoked(bytes32,address,address)": TypedContractEvent<RoleRevokedEvent.InputTuple, RoleRevokedEvent.OutputTuple, RoleRevokedEvent.OutputObject>;
        RoleRevoked: TypedContractEvent<RoleRevokedEvent.InputTuple, RoleRevokedEvent.OutputTuple, RoleRevokedEvent.OutputObject>;
        "Signed(bytes32,string,bytes,uint256,bytes[],bytes[])": TypedContractEvent<SignedEvent.InputTuple, SignedEvent.OutputTuple, SignedEvent.OutputObject>;
        Signed: TypedContractEvent<SignedEvent.InputTuple, SignedEvent.OutputTuple, SignedEvent.OutputObject>;
        "Staked(address,uint256)": TypedContractEvent<StakedEvent.InputTuple, StakedEvent.OutputTuple, StakedEvent.OutputObject>;
        Staked: TypedContractEvent<StakedEvent.InputTuple, StakedEvent.OutputTuple, StakedEvent.OutputObject>;
        "Unstaked(address,uint256)": TypedContractEvent<UnstakedEvent.InputTuple, UnstakedEvent.OutputTuple, UnstakedEvent.OutputObject>;
        Unstaked: TypedContractEvent<UnstakedEvent.InputTuple, UnstakedEvent.OutputTuple, UnstakedEvent.OutputObject>;
    };
}
