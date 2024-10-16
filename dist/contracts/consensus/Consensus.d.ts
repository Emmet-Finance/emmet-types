import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../../common";
export declare namespace CrossChainTransaction {
    type CCTStruct = {
        txHash: BytesLike;
        indexOrigin: BigNumberish;
        fromChainId: BigNumberish;
        toChainId: BigNumberish;
        started: BigNumberish;
        finished: BigNumberish;
        compensation: BigNumberish;
        msgValue: BigNumberish;
        protocolFee: BigNumberish;
        sender: string;
        recipient: string;
        originalHash: string;
        destinationHash: string;
        outcome: string;
        data: BytesLike;
    };
    type CCTStructOutput = [
        txHash: string,
        indexOrigin: bigint,
        fromChainId: bigint,
        toChainId: bigint,
        started: bigint,
        finished: bigint,
        compensation: bigint,
        msgValue: bigint,
        protocolFee: bigint,
        sender: string,
        recipient: string,
        originalHash: string,
        destinationHash: string,
        outcome: string,
        data: string
    ] & {
        txHash: string;
        indexOrigin: bigint;
        fromChainId: bigint;
        toChainId: bigint;
        started: bigint;
        finished: bigint;
        compensation: bigint;
        msgValue: bigint;
        protocolFee: bigint;
        sender: string;
        recipient: string;
        originalHash: string;
        destinationHash: string;
        outcome: string;
        data: string;
    };
}
export declare namespace Signatures {
    type MessageStruct = {
        txHash: BytesLike;
        id: BigNumberish;
        fromChainId: BigNumberish;
        toChainId: BigNumberish;
        started: BigNumberish;
        value: BigNumberish;
        threshold: BigNumberish;
        sender: string;
        receiver: string;
        compensation: BigNumberish;
        msgValue: BigNumberish;
        protocolFee: BigNumberish;
        signer: BytesLike;
        signature: BytesLike;
        data: BytesLike;
        originalHash: string;
    };
    type MessageStructOutput = [
        txHash: string,
        id: bigint,
        fromChainId: bigint,
        toChainId: bigint,
        started: bigint,
        value: bigint,
        threshold: bigint,
        sender: string,
        receiver: string,
        compensation: bigint,
        msgValue: bigint,
        protocolFee: bigint,
        signer: string,
        signature: string,
        data: string,
        originalHash: string
    ] & {
        txHash: string;
        id: bigint;
        fromChainId: bigint;
        toChainId: bigint;
        started: bigint;
        value: bigint;
        threshold: bigint;
        sender: string;
        receiver: string;
        compensation: bigint;
        msgValue: bigint;
        protocolFee: bigint;
        signer: string;
        signature: string;
        data: string;
        originalHash: string;
    };
}
export interface ConsensusInterface extends Interface {
    getFunction(nameOrSignature: "CFO_ROLE" | "DEFAULT_ADMIN_ROLE" | "MANAGER_ROLE" | "SIGNER_ROLE" | "UPGRADE_INTERFACE_VERSION" | "claimReward" | "claimRole" | "deleteNonEvmHash" | "encodeFeedbackParams" | "feedback" | "generateTransactionHash" | "getBftThreshold" | "getCoolDownPeriod" | "getMinStake" | "getReward" | "getRoleAdmin" | "getStats" | "getTotalSigners" | "getTransaction" | "getTransactionCount" | "getTransactionHash" | "getTransactions" | "grantRole" | "hasRole" | "initialize" | "proxiableUUID" | "renounceRole" | "revokeRole" | "setKYCPassed" | "sign" | "signatures" | "stake" | "supportsInterface" | "unstake" | "updateCoolDownPeriod" | "updateMinStake" | "updateNonEvmId" | "updateSignerReward" | "upgradeToAndCall"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "CoolDownPeriodUpdated" | "Feedback" | "Initialized" | "KycPassed" | "MinStakeUpdated" | "PartialSignature" | "RewardClaimed" | "RoleAdminChanged" | "RoleGranted" | "RoleRevoked" | "Signed" | "SignerJoined" | "SignerRoleRefused" | "Singed" | "Staked" | "Unstaked" | "UpdatedNonEvmId" | "Upgraded"): EventFragment;
    encodeFunctionData(functionFragment: "CFO_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "DEFAULT_ADMIN_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "MANAGER_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "SIGNER_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "UPGRADE_INTERFACE_VERSION", values?: undefined): string;
    encodeFunctionData(functionFragment: "claimReward", values?: undefined): string;
    encodeFunctionData(functionFragment: "claimRole", values?: undefined): string;
    encodeFunctionData(functionFragment: "deleteNonEvmHash", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "encodeFeedbackParams", values: [BytesLike, boolean, string, string]): string;
    encodeFunctionData(functionFragment: "feedback", values: [BytesLike, boolean, string, string, BytesLike, string]): string;
    encodeFunctionData(functionFragment: "generateTransactionHash", values: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "getBftThreshold", values?: undefined): string;
    encodeFunctionData(functionFragment: "getCoolDownPeriod", values?: undefined): string;
    encodeFunctionData(functionFragment: "getMinStake", values?: undefined): string;
    encodeFunctionData(functionFragment: "getReward", values?: undefined): string;
    encodeFunctionData(functionFragment: "getRoleAdmin", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getStats", values?: undefined): string;
    encodeFunctionData(functionFragment: "getTotalSigners", values?: undefined): string;
    encodeFunctionData(functionFragment: "getTransaction", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getTransactionCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "getTransactionHash", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getTransactions", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "grantRole", values: [BytesLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "hasRole", values: [BytesLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "initialize", values: [BigNumberish, BigNumberish, AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "proxiableUUID", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceRole", values: [BytesLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "revokeRole", values: [BytesLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "setKYCPassed", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "sign", values: [Signatures.MessageStruct]): string;
    encodeFunctionData(functionFragment: "signatures", values?: undefined): string;
    encodeFunctionData(functionFragment: "stake", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "unstake", values?: undefined): string;
    encodeFunctionData(functionFragment: "updateCoolDownPeriod", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "updateMinStake", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "updateNonEvmId", values: [BigNumberish, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "updateSignerReward", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "upgradeToAndCall", values: [AddressLike, BytesLike]): string;
    decodeFunctionResult(functionFragment: "CFO_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "DEFAULT_ADMIN_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MANAGER_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "SIGNER_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "UPGRADE_INTERFACE_VERSION", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimReward", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deleteNonEvmHash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "encodeFeedbackParams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "feedback", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "generateTransactionHash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBftThreshold", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCoolDownPeriod", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getMinStake", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReward", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getStats", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTotalSigners", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTransaction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTransactionCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTransactionHash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTransactions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proxiableUUID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setKYCPassed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sign", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "signatures", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stake", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unstake", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateCoolDownPeriod", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateMinStake", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateNonEvmId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateSignerReward", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeToAndCall", data: BytesLike): Result;
}
export declare namespace CoolDownPeriodUpdatedEvent {
    type InputTuple = [newCoolDown: BigNumberish];
    type OutputTuple = [newCoolDown: bigint];
    interface OutputObject {
        newCoolDown: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace FeedbackEvent {
    type InputTuple = [
        txHash: BytesLike,
        returnToChainId: BigNumberish,
        isSuccess: boolean,
        message: string,
        aggregatedSignature: BytesLike[],
        signers: string[]
    ];
    type OutputTuple = [
        txHash: string,
        returnToChainId: bigint,
        isSuccess: boolean,
        message: string,
        aggregatedSignature: string[],
        signers: string[]
    ];
    interface OutputObject {
        txHash: string;
        returnToChainId: bigint;
        isSuccess: boolean;
        message: string;
        aggregatedSignature: string[];
        signers: string[];
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
export declare namespace KycPassedEvent {
    type InputTuple = [candidate: AddressLike];
    type OutputTuple = [candidate: string];
    interface OutputObject {
        candidate: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace MinStakeUpdatedEvent {
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
export declare namespace RewardClaimedEvent {
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
        nonce: BigNumberish,
        toChainId: BigNumberish,
        fromChainId: BigNumberish,
        aggregatedSignature: BytesLike[],
        signers: BytesLike[],
        callData: BytesLike
    ];
    type OutputTuple = [
        txHash: string,
        nonce: bigint,
        toChainId: bigint,
        fromChainId: bigint,
        aggregatedSignature: string[],
        signers: string[],
        callData: string
    ];
    interface OutputObject {
        txHash: string;
        nonce: bigint;
        toChainId: bigint;
        fromChainId: bigint;
        aggregatedSignature: string[];
        signers: string[];
        callData: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace SignerJoinedEvent {
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
export declare namespace SignerRoleRefusedEvent {
    type InputTuple = [staker: AddressLike];
    type OutputTuple = [staker: string];
    interface OutputObject {
        staker: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace SingedEvent {
    type InputTuple = [
        txHash: BytesLike,
        fromChainId: BigNumberish,
        toChainId: BigNumberish,
        aggregatedSignature: BytesLike[],
        signers: BytesLike[],
        callData: BytesLike
    ];
    type OutputTuple = [
        txHash: string,
        fromChainId: bigint,
        toChainId: bigint,
        aggregatedSignature: string[],
        signers: string[],
        callData: string
    ];
    interface OutputObject {
        txHash: string;
        fromChainId: bigint;
        toChainId: bigint;
        aggregatedSignature: string[];
        signers: string[];
        callData: string;
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
export declare namespace UpdatedNonEvmIdEvent {
    type InputTuple = [
        chainId: BigNumberish,
        chainName: string,
        operation: string
    ];
    type OutputTuple = [
        chainId: bigint,
        chainName: string,
        operation: string
    ];
    interface OutputObject {
        chainId: bigint;
        chainName: string;
        operation: string;
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
export interface Consensus extends BaseContract {
    connect(runner?: ContractRunner | null): Consensus;
    waitForDeployment(): Promise<this>;
    interface: ConsensusInterface;
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
    UPGRADE_INTERFACE_VERSION: TypedContractMethod<[], [string], "view">;
    claimReward: TypedContractMethod<[], [void], "nonpayable">;
    claimRole: TypedContractMethod<[], [void], "nonpayable">;
    deleteNonEvmHash: TypedContractMethod<[
        txHash: BytesLike
    ], [
        void
    ], "nonpayable">;
    encodeFeedbackParams: TypedContractMethod<[
        txHash: BytesLike,
        isSuccess: boolean,
        destinationHash: string,
        message: string
    ], [
        string
    ], "view">;
    feedback: TypedContractMethod<[
        txHash: BytesLike,
        isSuccess: boolean,
        destinationHash: string,
        message: string,
        signature: BytesLike,
        signer: string
    ], [
        void
    ], "nonpayable">;
    generateTransactionHash: TypedContractMethod<[
        fromChainId: BigNumberish,
        toChainid: BigNumberish,
        value: BigNumberish,
        nonce: BigNumberish,
        timestamp: BigNumberish,
        data: BytesLike
    ], [
        string
    ], "view">;
    getBftThreshold: TypedContractMethod<[], [bigint], "view">;
    getCoolDownPeriod: TypedContractMethod<[], [bigint], "view">;
    getMinStake: TypedContractMethod<[], [bigint], "view">;
    getReward: TypedContractMethod<[], [bigint], "view">;
    getRoleAdmin: TypedContractMethod<[role: BytesLike], [string], "view">;
    getStats: TypedContractMethod<[
    ], [
        [
            bigint,
            bigint,
            bigint,
            bigint
        ] & {
            txCount: bigint;
            totalSignatures: bigint;
            totalStaked: bigint;
            totalSigners: bigint;
        }
    ], "view">;
    getTotalSigners: TypedContractMethod<[], [bigint], "view">;
    getTransaction: TypedContractMethod<[
        txHash: BytesLike
    ], [
        CrossChainTransaction.CCTStructOutput
    ], "view">;
    getTransactionCount: TypedContractMethod<[], [bigint], "view">;
    getTransactionHash: TypedContractMethod<[
        index: BigNumberish
    ], [
        string
    ], "view">;
    getTransactions: TypedContractMethod<[
        batch: BigNumberish,
        skip: BigNumberish
    ], [
        CrossChainTransaction.CCTStructOutput[]
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
    initialize: TypedContractMethod<[
        newMinStake: BigNumberish,
        newCoolDown: BigNumberish,
        token: AddressLike,
        manager: AddressLike
    ], [
        void
    ], "nonpayable">;
    proxiableUUID: TypedContractMethod<[], [string], "view">;
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
    setKYCPassed: TypedContractMethod<[
        candidate: AddressLike
    ], [
        void
    ], "nonpayable">;
    sign: TypedContractMethod<[
        params: Signatures.MessageStruct
    ], [
        void
    ], "nonpayable">;
    signatures: TypedContractMethod<[], [bigint], "view">;
    stake: TypedContractMethod<[amount: BigNumberish], [void], "nonpayable">;
    supportsInterface: TypedContractMethod<[
        interfaceId: BytesLike
    ], [
        boolean
    ], "view">;
    unstake: TypedContractMethod<[], [void], "nonpayable">;
    updateCoolDownPeriod: TypedContractMethod<[
        newCoolDown: BigNumberish
    ], [
        void
    ], "nonpayable">;
    updateMinStake: TypedContractMethod<[
        newMinStake: BigNumberish
    ], [
        void
    ], "nonpayable">;
    updateNonEvmId: TypedContractMethod<[
        chainId: BigNumberish,
        chainName: string,
        operation: BigNumberish
    ], [
        void
    ], "nonpayable">;
    updateSignerReward: TypedContractMethod<[
        newReward: BigNumberish
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
    getFunction(nameOrSignature: "CFO_ROLE"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "DEFAULT_ADMIN_ROLE"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "MANAGER_ROLE"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "SIGNER_ROLE"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "UPGRADE_INTERFACE_VERSION"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "claimReward"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "claimRole"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "deleteNonEvmHash"): TypedContractMethod<[txHash: BytesLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "encodeFeedbackParams"): TypedContractMethod<[
        txHash: BytesLike,
        isSuccess: boolean,
        destinationHash: string,
        message: string
    ], [
        string
    ], "view">;
    getFunction(nameOrSignature: "feedback"): TypedContractMethod<[
        txHash: BytesLike,
        isSuccess: boolean,
        destinationHash: string,
        message: string,
        signature: BytesLike,
        signer: string
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "generateTransactionHash"): TypedContractMethod<[
        fromChainId: BigNumberish,
        toChainid: BigNumberish,
        value: BigNumberish,
        nonce: BigNumberish,
        timestamp: BigNumberish,
        data: BytesLike
    ], [
        string
    ], "view">;
    getFunction(nameOrSignature: "getBftThreshold"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "getCoolDownPeriod"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "getMinStake"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "getReward"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "getRoleAdmin"): TypedContractMethod<[role: BytesLike], [string], "view">;
    getFunction(nameOrSignature: "getStats"): TypedContractMethod<[
    ], [
        [
            bigint,
            bigint,
            bigint,
            bigint
        ] & {
            txCount: bigint;
            totalSignatures: bigint;
            totalStaked: bigint;
            totalSigners: bigint;
        }
    ], "view">;
    getFunction(nameOrSignature: "getTotalSigners"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "getTransaction"): TypedContractMethod<[
        txHash: BytesLike
    ], [
        CrossChainTransaction.CCTStructOutput
    ], "view">;
    getFunction(nameOrSignature: "getTransactionCount"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "getTransactionHash"): TypedContractMethod<[index: BigNumberish], [string], "view">;
    getFunction(nameOrSignature: "getTransactions"): TypedContractMethod<[
        batch: BigNumberish,
        skip: BigNumberish
    ], [
        CrossChainTransaction.CCTStructOutput[]
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
    getFunction(nameOrSignature: "initialize"): TypedContractMethod<[
        newMinStake: BigNumberish,
        newCoolDown: BigNumberish,
        token: AddressLike,
        manager: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "proxiableUUID"): TypedContractMethod<[], [string], "view">;
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
    getFunction(nameOrSignature: "setKYCPassed"): TypedContractMethod<[candidate: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "sign"): TypedContractMethod<[
        params: Signatures.MessageStruct
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "signatures"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "stake"): TypedContractMethod<[amount: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "supportsInterface"): TypedContractMethod<[interfaceId: BytesLike], [boolean], "view">;
    getFunction(nameOrSignature: "unstake"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "updateCoolDownPeriod"): TypedContractMethod<[newCoolDown: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "updateMinStake"): TypedContractMethod<[newMinStake: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "updateNonEvmId"): TypedContractMethod<[
        chainId: BigNumberish,
        chainName: string,
        operation: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "updateSignerReward"): TypedContractMethod<[newReward: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "upgradeToAndCall"): TypedContractMethod<[
        newImplementation: AddressLike,
        data: BytesLike
    ], [
        void
    ], "payable">;
    getEvent(key: "CoolDownPeriodUpdated"): TypedContractEvent<CoolDownPeriodUpdatedEvent.InputTuple, CoolDownPeriodUpdatedEvent.OutputTuple, CoolDownPeriodUpdatedEvent.OutputObject>;
    getEvent(key: "Feedback"): TypedContractEvent<FeedbackEvent.InputTuple, FeedbackEvent.OutputTuple, FeedbackEvent.OutputObject>;
    getEvent(key: "Initialized"): TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
    getEvent(key: "KycPassed"): TypedContractEvent<KycPassedEvent.InputTuple, KycPassedEvent.OutputTuple, KycPassedEvent.OutputObject>;
    getEvent(key: "MinStakeUpdated"): TypedContractEvent<MinStakeUpdatedEvent.InputTuple, MinStakeUpdatedEvent.OutputTuple, MinStakeUpdatedEvent.OutputObject>;
    getEvent(key: "PartialSignature"): TypedContractEvent<PartialSignatureEvent.InputTuple, PartialSignatureEvent.OutputTuple, PartialSignatureEvent.OutputObject>;
    getEvent(key: "RewardClaimed"): TypedContractEvent<RewardClaimedEvent.InputTuple, RewardClaimedEvent.OutputTuple, RewardClaimedEvent.OutputObject>;
    getEvent(key: "RoleAdminChanged"): TypedContractEvent<RoleAdminChangedEvent.InputTuple, RoleAdminChangedEvent.OutputTuple, RoleAdminChangedEvent.OutputObject>;
    getEvent(key: "RoleGranted"): TypedContractEvent<RoleGrantedEvent.InputTuple, RoleGrantedEvent.OutputTuple, RoleGrantedEvent.OutputObject>;
    getEvent(key: "RoleRevoked"): TypedContractEvent<RoleRevokedEvent.InputTuple, RoleRevokedEvent.OutputTuple, RoleRevokedEvent.OutputObject>;
    getEvent(key: "Signed"): TypedContractEvent<SignedEvent.InputTuple, SignedEvent.OutputTuple, SignedEvent.OutputObject>;
    getEvent(key: "SignerJoined"): TypedContractEvent<SignerJoinedEvent.InputTuple, SignerJoinedEvent.OutputTuple, SignerJoinedEvent.OutputObject>;
    getEvent(key: "SignerRoleRefused"): TypedContractEvent<SignerRoleRefusedEvent.InputTuple, SignerRoleRefusedEvent.OutputTuple, SignerRoleRefusedEvent.OutputObject>;
    getEvent(key: "Singed"): TypedContractEvent<SingedEvent.InputTuple, SingedEvent.OutputTuple, SingedEvent.OutputObject>;
    getEvent(key: "Staked"): TypedContractEvent<StakedEvent.InputTuple, StakedEvent.OutputTuple, StakedEvent.OutputObject>;
    getEvent(key: "Unstaked"): TypedContractEvent<UnstakedEvent.InputTuple, UnstakedEvent.OutputTuple, UnstakedEvent.OutputObject>;
    getEvent(key: "UpdatedNonEvmId"): TypedContractEvent<UpdatedNonEvmIdEvent.InputTuple, UpdatedNonEvmIdEvent.OutputTuple, UpdatedNonEvmIdEvent.OutputObject>;
    getEvent(key: "Upgraded"): TypedContractEvent<UpgradedEvent.InputTuple, UpgradedEvent.OutputTuple, UpgradedEvent.OutputObject>;
    filters: {
        "CoolDownPeriodUpdated(uint256)": TypedContractEvent<CoolDownPeriodUpdatedEvent.InputTuple, CoolDownPeriodUpdatedEvent.OutputTuple, CoolDownPeriodUpdatedEvent.OutputObject>;
        CoolDownPeriodUpdated: TypedContractEvent<CoolDownPeriodUpdatedEvent.InputTuple, CoolDownPeriodUpdatedEvent.OutputTuple, CoolDownPeriodUpdatedEvent.OutputObject>;
        "Feedback(bytes32,uint128,bool,string,bytes[],string[])": TypedContractEvent<FeedbackEvent.InputTuple, FeedbackEvent.OutputTuple, FeedbackEvent.OutputObject>;
        Feedback: TypedContractEvent<FeedbackEvent.InputTuple, FeedbackEvent.OutputTuple, FeedbackEvent.OutputObject>;
        "Initialized(uint64)": TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
        Initialized: TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
        "KycPassed(address)": TypedContractEvent<KycPassedEvent.InputTuple, KycPassedEvent.OutputTuple, KycPassedEvent.OutputObject>;
        KycPassed: TypedContractEvent<KycPassedEvent.InputTuple, KycPassedEvent.OutputTuple, KycPassedEvent.OutputObject>;
        "MinStakeUpdated(uint256)": TypedContractEvent<MinStakeUpdatedEvent.InputTuple, MinStakeUpdatedEvent.OutputTuple, MinStakeUpdatedEvent.OutputObject>;
        MinStakeUpdated: TypedContractEvent<MinStakeUpdatedEvent.InputTuple, MinStakeUpdatedEvent.OutputTuple, MinStakeUpdatedEvent.OutputObject>;
        "PartialSignature(bytes32)": TypedContractEvent<PartialSignatureEvent.InputTuple, PartialSignatureEvent.OutputTuple, PartialSignatureEvent.OutputObject>;
        PartialSignature: TypedContractEvent<PartialSignatureEvent.InputTuple, PartialSignatureEvent.OutputTuple, PartialSignatureEvent.OutputObject>;
        "RewardClaimed(address,uint256)": TypedContractEvent<RewardClaimedEvent.InputTuple, RewardClaimedEvent.OutputTuple, RewardClaimedEvent.OutputObject>;
        RewardClaimed: TypedContractEvent<RewardClaimedEvent.InputTuple, RewardClaimedEvent.OutputTuple, RewardClaimedEvent.OutputObject>;
        "RoleAdminChanged(bytes32,bytes32,bytes32)": TypedContractEvent<RoleAdminChangedEvent.InputTuple, RoleAdminChangedEvent.OutputTuple, RoleAdminChangedEvent.OutputObject>;
        RoleAdminChanged: TypedContractEvent<RoleAdminChangedEvent.InputTuple, RoleAdminChangedEvent.OutputTuple, RoleAdminChangedEvent.OutputObject>;
        "RoleGranted(bytes32,address,address)": TypedContractEvent<RoleGrantedEvent.InputTuple, RoleGrantedEvent.OutputTuple, RoleGrantedEvent.OutputObject>;
        RoleGranted: TypedContractEvent<RoleGrantedEvent.InputTuple, RoleGrantedEvent.OutputTuple, RoleGrantedEvent.OutputObject>;
        "RoleRevoked(bytes32,address,address)": TypedContractEvent<RoleRevokedEvent.InputTuple, RoleRevokedEvent.OutputTuple, RoleRevokedEvent.OutputObject>;
        RoleRevoked: TypedContractEvent<RoleRevokedEvent.InputTuple, RoleRevokedEvent.OutputTuple, RoleRevokedEvent.OutputObject>;
        "Signed(bytes32,uint256,uint128,uint128,bytes[],bytes[],bytes)": TypedContractEvent<SignedEvent.InputTuple, SignedEvent.OutputTuple, SignedEvent.OutputObject>;
        Signed: TypedContractEvent<SignedEvent.InputTuple, SignedEvent.OutputTuple, SignedEvent.OutputObject>;
        "SignerJoined(address)": TypedContractEvent<SignerJoinedEvent.InputTuple, SignerJoinedEvent.OutputTuple, SignerJoinedEvent.OutputObject>;
        SignerJoined: TypedContractEvent<SignerJoinedEvent.InputTuple, SignerJoinedEvent.OutputTuple, SignerJoinedEvent.OutputObject>;
        "SignerRoleRefused(address)": TypedContractEvent<SignerRoleRefusedEvent.InputTuple, SignerRoleRefusedEvent.OutputTuple, SignerRoleRefusedEvent.OutputObject>;
        SignerRoleRefused: TypedContractEvent<SignerRoleRefusedEvent.InputTuple, SignerRoleRefusedEvent.OutputTuple, SignerRoleRefusedEvent.OutputObject>;
        "Singed(bytes32,uint128,uint128,bytes[],bytes[],bytes)": TypedContractEvent<SingedEvent.InputTuple, SingedEvent.OutputTuple, SingedEvent.OutputObject>;
        Singed: TypedContractEvent<SingedEvent.InputTuple, SingedEvent.OutputTuple, SingedEvent.OutputObject>;
        "Staked(address,uint256)": TypedContractEvent<StakedEvent.InputTuple, StakedEvent.OutputTuple, StakedEvent.OutputObject>;
        Staked: TypedContractEvent<StakedEvent.InputTuple, StakedEvent.OutputTuple, StakedEvent.OutputObject>;
        "Unstaked(address,uint256)": TypedContractEvent<UnstakedEvent.InputTuple, UnstakedEvent.OutputTuple, UnstakedEvent.OutputObject>;
        Unstaked: TypedContractEvent<UnstakedEvent.InputTuple, UnstakedEvent.OutputTuple, UnstakedEvent.OutputObject>;
        "UpdatedNonEvmId(uint128,string,string)": TypedContractEvent<UpdatedNonEvmIdEvent.InputTuple, UpdatedNonEvmIdEvent.OutputTuple, UpdatedNonEvmIdEvent.OutputObject>;
        UpdatedNonEvmId: TypedContractEvent<UpdatedNonEvmIdEvent.InputTuple, UpdatedNonEvmIdEvent.OutputTuple, UpdatedNonEvmIdEvent.OutputObject>;
        "Upgraded(address)": TypedContractEvent<UpgradedEvent.InputTuple, UpgradedEvent.OutputTuple, UpgradedEvent.OutputObject>;
        Upgraded: TypedContractEvent<UpgradedEvent.InputTuple, UpgradedEvent.OutputTuple, UpgradedEvent.OutputObject>;
    };
}
