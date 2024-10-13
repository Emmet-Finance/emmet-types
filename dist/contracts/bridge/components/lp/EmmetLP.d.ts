import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../../../../common";
export interface EmmetLPInterface extends Interface {
    getFunction(nameOrSignature: "BRIDGE_ROLE" | "CFO_ROLE" | "DEFAULT_ADMIN_ROLE" | "MANAGER_ROLE" | "SECONDS_IN_A_YEAR" | "SIGNER_ROLE" | "UPGRADE_INTERFACE_VERSION" | "allowance" | "approve" | "balanceOf" | "boost" | "bridge" | "ccm" | "currentAPY" | "decimals" | "deposit" | "deposits" | "feeDecimals" | "feeGrowthGlobal" | "getProviderRewards" | "getRoleAdmin" | "getTokenFee" | "grantRole" | "hasRole" | "initialize" | "initializeAdmin" | "initializeLP" | "manageBridge" | "name" | "pause" | "paused" | "protocolFee" | "protocolFeeAmount" | "proxiableUUID" | "releaseTokens" | "renounceRole" | "revokeRole" | "supportsInterface" | "symbol" | "token" | "tokenFee" | "totalSupply" | "transfer" | "transferFrom" | "unpause" | "updateCCM" | "updateProtocolFee" | "updateTokenFee" | "upgradeToAndCall" | "withdrawFees" | "withdrawProtocolFees" | "withdrawTokens" | "withdrawnRewards"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "Approval" | "BridgeUpdated" | "CCMUpdated" | "Deposited" | "Initialized" | "LpTransfer" | "Paused" | "ProtocolFeeUpdated" | "ProtocolFeesWithdrawn" | "ReleasedToken" | "RewardPaid" | "RoleAdminChanged" | "RoleGranted" | "RoleRevoked" | "TokenFeeUpdated" | "Transfer" | "Unpaused" | "Upgraded" | "Withdrawn"): EventFragment;
    encodeFunctionData(functionFragment: "BRIDGE_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "CFO_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "DEFAULT_ADMIN_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "MANAGER_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "SECONDS_IN_A_YEAR", values?: undefined): string;
    encodeFunctionData(functionFragment: "SIGNER_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "UPGRADE_INTERFACE_VERSION", values?: undefined): string;
    encodeFunctionData(functionFragment: "allowance", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "approve", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "boost", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "bridge", values?: undefined): string;
    encodeFunctionData(functionFragment: "ccm", values?: undefined): string;
    encodeFunctionData(functionFragment: "currentAPY", values?: undefined): string;
    encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "deposit", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "deposits", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "feeDecimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "feeGrowthGlobal", values?: undefined): string;
    encodeFunctionData(functionFragment: "getProviderRewards", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getRoleAdmin", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getTokenFee", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "grantRole", values: [BytesLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "hasRole", values: [BytesLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "initialize", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "initializeAdmin", values: [BigNumberish, AddressLike, AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "initializeLP", values: [
        BigNumberish,
        AddressLike,
        BigNumberish,
        string,
        string,
        AddressLike,
        AddressLike
    ]): string;
    encodeFunctionData(functionFragment: "manageBridge", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "pause", values?: undefined): string;
    encodeFunctionData(functionFragment: "paused", values?: undefined): string;
    encodeFunctionData(functionFragment: "protocolFee", values?: undefined): string;
    encodeFunctionData(functionFragment: "protocolFeeAmount", values?: undefined): string;
    encodeFunctionData(functionFragment: "proxiableUUID", values?: undefined): string;
    encodeFunctionData(functionFragment: "releaseTokens", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "renounceRole", values: [BytesLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "revokeRole", values: [BytesLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "token", values?: undefined): string;
    encodeFunctionData(functionFragment: "tokenFee", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "transfer", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [AddressLike, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
    encodeFunctionData(functionFragment: "updateCCM", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "updateProtocolFee", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "updateTokenFee", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "upgradeToAndCall", values: [AddressLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "withdrawFees", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdrawProtocolFees", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdrawTokens", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "withdrawnRewards", values?: undefined): string;
    decodeFunctionResult(functionFragment: "BRIDGE_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "CFO_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "DEFAULT_ADMIN_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MANAGER_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "SECONDS_IN_A_YEAR", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "SIGNER_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "UPGRADE_INTERFACE_VERSION", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "boost", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bridge", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ccm", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "currentAPY", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deposits", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "feeDecimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "feeGrowthGlobal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getProviderRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTokenFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initializeAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initializeLP", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "manageBridge", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "protocolFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "protocolFeeAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proxiableUUID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "releaseTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateCCM", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateProtocolFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateTokenFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeToAndCall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawProtocolFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawnRewards", data: BytesLike): Result;
}
export declare namespace ApprovalEvent {
    type InputTuple = [
        owner: AddressLike,
        spender: AddressLike,
        value: BigNumberish
    ];
    type OutputTuple = [owner: string, spender: string, value: bigint];
    interface OutputObject {
        owner: string;
        spender: string;
        value: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace BridgeUpdatedEvent {
    type InputTuple = [
        oldBridge: AddressLike,
        newBridge: AddressLike,
        operation: string
    ];
    type OutputTuple = [
        oldBridge: string,
        newBridge: string,
        operation: string
    ];
    interface OutputObject {
        oldBridge: string;
        newBridge: string;
        operation: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace CCMUpdatedEvent {
    type InputTuple = [newCCM: AddressLike];
    type OutputTuple = [newCCM: string];
    interface OutputObject {
        newCCM: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace DepositedEvent {
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
export declare namespace LpTransferEvent {
    type InputTuple = [to: AddressLike, amount: BigNumberish];
    type OutputTuple = [to: string, amount: bigint];
    interface OutputObject {
        to: string;
        amount: bigint;
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
    type InputTuple = [oldFee: BigNumberish, newFee: BigNumberish];
    type OutputTuple = [oldFee: bigint, newFee: bigint];
    interface OutputObject {
        oldFee: bigint;
        newFee: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace ProtocolFeesWithdrawnEvent {
    type InputTuple = [fees: BigNumberish];
    type OutputTuple = [fees: bigint];
    interface OutputObject {
        fees: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace ReleasedTokenEvent {
    type InputTuple = [amount: BigNumberish];
    type OutputTuple = [amount: bigint];
    interface OutputObject {
        amount: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace RewardPaidEvent {
    type InputTuple = [user: AddressLike, reward: BigNumberish];
    type OutputTuple = [user: string, reward: bigint];
    interface OutputObject {
        user: string;
        reward: bigint;
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
export declare namespace TokenFeeUpdatedEvent {
    type InputTuple = [oldFee: BigNumberish, newFee: BigNumberish];
    type OutputTuple = [oldFee: bigint, newFee: bigint];
    interface OutputObject {
        oldFee: bigint;
        newFee: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace TransferEvent {
    type InputTuple = [
        from: AddressLike,
        to: AddressLike,
        value: BigNumberish
    ];
    type OutputTuple = [from: string, to: string, value: bigint];
    interface OutputObject {
        from: string;
        to: string;
        value: bigint;
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
export declare namespace WithdrawnEvent {
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
export interface EmmetLP extends BaseContract {
    connect(runner?: ContractRunner | null): EmmetLP;
    waitForDeployment(): Promise<this>;
    interface: EmmetLPInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    BRIDGE_ROLE: TypedContractMethod<[], [string], "view">;
    CFO_ROLE: TypedContractMethod<[], [string], "view">;
    DEFAULT_ADMIN_ROLE: TypedContractMethod<[], [string], "view">;
    MANAGER_ROLE: TypedContractMethod<[], [string], "view">;
    SECONDS_IN_A_YEAR: TypedContractMethod<[], [bigint], "view">;
    SIGNER_ROLE: TypedContractMethod<[], [string], "view">;
    UPGRADE_INTERFACE_VERSION: TypedContractMethod<[], [string], "view">;
    allowance: TypedContractMethod<[
        owner: AddressLike,
        spender: AddressLike
    ], [
        bigint
    ], "view">;
    approve: TypedContractMethod<[
        spender: AddressLike,
        value: BigNumberish
    ], [
        boolean
    ], "nonpayable">;
    balanceOf: TypedContractMethod<[account: AddressLike], [bigint], "view">;
    boost: TypedContractMethod<[amount: BigNumberish], [void], "nonpayable">;
    bridge: TypedContractMethod<[], [string], "view">;
    ccm: TypedContractMethod<[], [string], "view">;
    currentAPY: TypedContractMethod<[], [bigint], "view">;
    decimals: TypedContractMethod<[], [bigint], "view">;
    deposit: TypedContractMethod<[amount: BigNumberish], [void], "nonpayable">;
    deposits: TypedContractMethod<[
        arg0: AddressLike
    ], [
        [bigint, bigint] & {
            lastInternalFeeGrowth: bigint;
            rewards: bigint;
        }
    ], "view">;
    feeDecimals: TypedContractMethod<[], [bigint], "view">;
    feeGrowthGlobal: TypedContractMethod<[], [bigint], "view">;
    getProviderRewards: TypedContractMethod<[
        provider: AddressLike
    ], [
        bigint
    ], "view">;
    getRoleAdmin: TypedContractMethod<[role: BytesLike], [string], "view">;
    getTokenFee: TypedContractMethod<[amount: BigNumberish], [bigint], "view">;
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
        cfo_: AddressLike,
        manager_: AddressLike
    ], [
        void
    ], "nonpayable">;
    initializeAdmin: TypedContractMethod<[
        protocolFee_: BigNumberish,
        token_: AddressLike,
        cfo_: AddressLike,
        manager_: AddressLike
    ], [
        void
    ], "nonpayable">;
    initializeLP: TypedContractMethod<[
        protocolFee_: BigNumberish,
        token_: AddressLike,
        decimals_: BigNumberish,
        name_: string,
        symbol_: string,
        cfo_: AddressLike,
        manager_: AddressLike
    ], [
        void
    ], "nonpayable">;
    manageBridge: TypedContractMethod<[
        account: AddressLike
    ], [
        void
    ], "nonpayable">;
    name: TypedContractMethod<[], [string], "view">;
    pause: TypedContractMethod<[], [void], "nonpayable">;
    paused: TypedContractMethod<[], [boolean], "view">;
    protocolFee: TypedContractMethod<[], [bigint], "view">;
    protocolFeeAmount: TypedContractMethod<[], [bigint], "view">;
    proxiableUUID: TypedContractMethod<[], [string], "view">;
    releaseTokens: TypedContractMethod<[
        to: AddressLike,
        amount: BigNumberish
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
    supportsInterface: TypedContractMethod<[
        interfaceId: BytesLike
    ], [
        boolean
    ], "view">;
    symbol: TypedContractMethod<[], [string], "view">;
    token: TypedContractMethod<[], [string], "view">;
    tokenFee: TypedContractMethod<[], [bigint], "view">;
    totalSupply: TypedContractMethod<[], [bigint], "view">;
    transfer: TypedContractMethod<[
        to: AddressLike,
        value: BigNumberish
    ], [
        boolean
    ], "nonpayable">;
    transferFrom: TypedContractMethod<[
        from: AddressLike,
        to: AddressLike,
        value: BigNumberish
    ], [
        boolean
    ], "nonpayable">;
    unpause: TypedContractMethod<[], [void], "nonpayable">;
    updateCCM: TypedContractMethod<[ccm_: AddressLike], [void], "nonpayable">;
    updateProtocolFee: TypedContractMethod<[
        protocolFee_: BigNumberish
    ], [
        void
    ], "nonpayable">;
    updateTokenFee: TypedContractMethod<[
        tokenFee_: BigNumberish
    ], [
        void
    ], "nonpayable">;
    upgradeToAndCall: TypedContractMethod<[
        newImplementation: AddressLike,
        data: BytesLike
    ], [
        void
    ], "payable">;
    withdrawFees: TypedContractMethod<[], [void], "nonpayable">;
    withdrawProtocolFees: TypedContractMethod<[], [void], "nonpayable">;
    withdrawTokens: TypedContractMethod<[
        amount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    withdrawnRewards: TypedContractMethod<[], [bigint], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "BRIDGE_ROLE"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "CFO_ROLE"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "DEFAULT_ADMIN_ROLE"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "MANAGER_ROLE"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "SECONDS_IN_A_YEAR"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "SIGNER_ROLE"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "UPGRADE_INTERFACE_VERSION"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "allowance"): TypedContractMethod<[
        owner: AddressLike,
        spender: AddressLike
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "approve"): TypedContractMethod<[
        spender: AddressLike,
        value: BigNumberish
    ], [
        boolean
    ], "nonpayable">;
    getFunction(nameOrSignature: "balanceOf"): TypedContractMethod<[account: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "boost"): TypedContractMethod<[amount: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "bridge"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "ccm"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "currentAPY"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "decimals"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "deposit"): TypedContractMethod<[amount: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "deposits"): TypedContractMethod<[
        arg0: AddressLike
    ], [
        [bigint, bigint] & {
            lastInternalFeeGrowth: bigint;
            rewards: bigint;
        }
    ], "view">;
    getFunction(nameOrSignature: "feeDecimals"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "feeGrowthGlobal"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "getProviderRewards"): TypedContractMethod<[provider: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "getRoleAdmin"): TypedContractMethod<[role: BytesLike], [string], "view">;
    getFunction(nameOrSignature: "getTokenFee"): TypedContractMethod<[amount: BigNumberish], [bigint], "view">;
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
        cfo_: AddressLike,
        manager_: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "initializeAdmin"): TypedContractMethod<[
        protocolFee_: BigNumberish,
        token_: AddressLike,
        cfo_: AddressLike,
        manager_: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "initializeLP"): TypedContractMethod<[
        protocolFee_: BigNumberish,
        token_: AddressLike,
        decimals_: BigNumberish,
        name_: string,
        symbol_: string,
        cfo_: AddressLike,
        manager_: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "manageBridge"): TypedContractMethod<[account: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "name"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "pause"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "paused"): TypedContractMethod<[], [boolean], "view">;
    getFunction(nameOrSignature: "protocolFee"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "protocolFeeAmount"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "proxiableUUID"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "releaseTokens"): TypedContractMethod<[
        to: AddressLike,
        amount: BigNumberish
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
    getFunction(nameOrSignature: "supportsInterface"): TypedContractMethod<[interfaceId: BytesLike], [boolean], "view">;
    getFunction(nameOrSignature: "symbol"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "token"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "tokenFee"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "totalSupply"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "transfer"): TypedContractMethod<[
        to: AddressLike,
        value: BigNumberish
    ], [
        boolean
    ], "nonpayable">;
    getFunction(nameOrSignature: "transferFrom"): TypedContractMethod<[
        from: AddressLike,
        to: AddressLike,
        value: BigNumberish
    ], [
        boolean
    ], "nonpayable">;
    getFunction(nameOrSignature: "unpause"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "updateCCM"): TypedContractMethod<[ccm_: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "updateProtocolFee"): TypedContractMethod<[protocolFee_: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "updateTokenFee"): TypedContractMethod<[tokenFee_: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "upgradeToAndCall"): TypedContractMethod<[
        newImplementation: AddressLike,
        data: BytesLike
    ], [
        void
    ], "payable">;
    getFunction(nameOrSignature: "withdrawFees"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "withdrawProtocolFees"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "withdrawTokens"): TypedContractMethod<[amount: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "withdrawnRewards"): TypedContractMethod<[], [bigint], "view">;
    getEvent(key: "Approval"): TypedContractEvent<ApprovalEvent.InputTuple, ApprovalEvent.OutputTuple, ApprovalEvent.OutputObject>;
    getEvent(key: "BridgeUpdated"): TypedContractEvent<BridgeUpdatedEvent.InputTuple, BridgeUpdatedEvent.OutputTuple, BridgeUpdatedEvent.OutputObject>;
    getEvent(key: "CCMUpdated"): TypedContractEvent<CCMUpdatedEvent.InputTuple, CCMUpdatedEvent.OutputTuple, CCMUpdatedEvent.OutputObject>;
    getEvent(key: "Deposited"): TypedContractEvent<DepositedEvent.InputTuple, DepositedEvent.OutputTuple, DepositedEvent.OutputObject>;
    getEvent(key: "Initialized"): TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
    getEvent(key: "LpTransfer"): TypedContractEvent<LpTransferEvent.InputTuple, LpTransferEvent.OutputTuple, LpTransferEvent.OutputObject>;
    getEvent(key: "Paused"): TypedContractEvent<PausedEvent.InputTuple, PausedEvent.OutputTuple, PausedEvent.OutputObject>;
    getEvent(key: "ProtocolFeeUpdated"): TypedContractEvent<ProtocolFeeUpdatedEvent.InputTuple, ProtocolFeeUpdatedEvent.OutputTuple, ProtocolFeeUpdatedEvent.OutputObject>;
    getEvent(key: "ProtocolFeesWithdrawn"): TypedContractEvent<ProtocolFeesWithdrawnEvent.InputTuple, ProtocolFeesWithdrawnEvent.OutputTuple, ProtocolFeesWithdrawnEvent.OutputObject>;
    getEvent(key: "ReleasedToken"): TypedContractEvent<ReleasedTokenEvent.InputTuple, ReleasedTokenEvent.OutputTuple, ReleasedTokenEvent.OutputObject>;
    getEvent(key: "RewardPaid"): TypedContractEvent<RewardPaidEvent.InputTuple, RewardPaidEvent.OutputTuple, RewardPaidEvent.OutputObject>;
    getEvent(key: "RoleAdminChanged"): TypedContractEvent<RoleAdminChangedEvent.InputTuple, RoleAdminChangedEvent.OutputTuple, RoleAdminChangedEvent.OutputObject>;
    getEvent(key: "RoleGranted"): TypedContractEvent<RoleGrantedEvent.InputTuple, RoleGrantedEvent.OutputTuple, RoleGrantedEvent.OutputObject>;
    getEvent(key: "RoleRevoked"): TypedContractEvent<RoleRevokedEvent.InputTuple, RoleRevokedEvent.OutputTuple, RoleRevokedEvent.OutputObject>;
    getEvent(key: "TokenFeeUpdated"): TypedContractEvent<TokenFeeUpdatedEvent.InputTuple, TokenFeeUpdatedEvent.OutputTuple, TokenFeeUpdatedEvent.OutputObject>;
    getEvent(key: "Transfer"): TypedContractEvent<TransferEvent.InputTuple, TransferEvent.OutputTuple, TransferEvent.OutputObject>;
    getEvent(key: "Unpaused"): TypedContractEvent<UnpausedEvent.InputTuple, UnpausedEvent.OutputTuple, UnpausedEvent.OutputObject>;
    getEvent(key: "Upgraded"): TypedContractEvent<UpgradedEvent.InputTuple, UpgradedEvent.OutputTuple, UpgradedEvent.OutputObject>;
    getEvent(key: "Withdrawn"): TypedContractEvent<WithdrawnEvent.InputTuple, WithdrawnEvent.OutputTuple, WithdrawnEvent.OutputObject>;
    filters: {
        "Approval(address,address,uint256)": TypedContractEvent<ApprovalEvent.InputTuple, ApprovalEvent.OutputTuple, ApprovalEvent.OutputObject>;
        Approval: TypedContractEvent<ApprovalEvent.InputTuple, ApprovalEvent.OutputTuple, ApprovalEvent.OutputObject>;
        "BridgeUpdated(address,address,string)": TypedContractEvent<BridgeUpdatedEvent.InputTuple, BridgeUpdatedEvent.OutputTuple, BridgeUpdatedEvent.OutputObject>;
        BridgeUpdated: TypedContractEvent<BridgeUpdatedEvent.InputTuple, BridgeUpdatedEvent.OutputTuple, BridgeUpdatedEvent.OutputObject>;
        "CCMUpdated(address)": TypedContractEvent<CCMUpdatedEvent.InputTuple, CCMUpdatedEvent.OutputTuple, CCMUpdatedEvent.OutputObject>;
        CCMUpdated: TypedContractEvent<CCMUpdatedEvent.InputTuple, CCMUpdatedEvent.OutputTuple, CCMUpdatedEvent.OutputObject>;
        "Deposited(address,uint256)": TypedContractEvent<DepositedEvent.InputTuple, DepositedEvent.OutputTuple, DepositedEvent.OutputObject>;
        Deposited: TypedContractEvent<DepositedEvent.InputTuple, DepositedEvent.OutputTuple, DepositedEvent.OutputObject>;
        "Initialized(uint64)": TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
        Initialized: TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
        "LpTransfer(address,uint256)": TypedContractEvent<LpTransferEvent.InputTuple, LpTransferEvent.OutputTuple, LpTransferEvent.OutputObject>;
        LpTransfer: TypedContractEvent<LpTransferEvent.InputTuple, LpTransferEvent.OutputTuple, LpTransferEvent.OutputObject>;
        "Paused(address)": TypedContractEvent<PausedEvent.InputTuple, PausedEvent.OutputTuple, PausedEvent.OutputObject>;
        Paused: TypedContractEvent<PausedEvent.InputTuple, PausedEvent.OutputTuple, PausedEvent.OutputObject>;
        "ProtocolFeeUpdated(uint256,uint256)": TypedContractEvent<ProtocolFeeUpdatedEvent.InputTuple, ProtocolFeeUpdatedEvent.OutputTuple, ProtocolFeeUpdatedEvent.OutputObject>;
        ProtocolFeeUpdated: TypedContractEvent<ProtocolFeeUpdatedEvent.InputTuple, ProtocolFeeUpdatedEvent.OutputTuple, ProtocolFeeUpdatedEvent.OutputObject>;
        "ProtocolFeesWithdrawn(uint256)": TypedContractEvent<ProtocolFeesWithdrawnEvent.InputTuple, ProtocolFeesWithdrawnEvent.OutputTuple, ProtocolFeesWithdrawnEvent.OutputObject>;
        ProtocolFeesWithdrawn: TypedContractEvent<ProtocolFeesWithdrawnEvent.InputTuple, ProtocolFeesWithdrawnEvent.OutputTuple, ProtocolFeesWithdrawnEvent.OutputObject>;
        "ReleasedToken(uint256)": TypedContractEvent<ReleasedTokenEvent.InputTuple, ReleasedTokenEvent.OutputTuple, ReleasedTokenEvent.OutputObject>;
        ReleasedToken: TypedContractEvent<ReleasedTokenEvent.InputTuple, ReleasedTokenEvent.OutputTuple, ReleasedTokenEvent.OutputObject>;
        "RewardPaid(address,uint256)": TypedContractEvent<RewardPaidEvent.InputTuple, RewardPaidEvent.OutputTuple, RewardPaidEvent.OutputObject>;
        RewardPaid: TypedContractEvent<RewardPaidEvent.InputTuple, RewardPaidEvent.OutputTuple, RewardPaidEvent.OutputObject>;
        "RoleAdminChanged(bytes32,bytes32,bytes32)": TypedContractEvent<RoleAdminChangedEvent.InputTuple, RoleAdminChangedEvent.OutputTuple, RoleAdminChangedEvent.OutputObject>;
        RoleAdminChanged: TypedContractEvent<RoleAdminChangedEvent.InputTuple, RoleAdminChangedEvent.OutputTuple, RoleAdminChangedEvent.OutputObject>;
        "RoleGranted(bytes32,address,address)": TypedContractEvent<RoleGrantedEvent.InputTuple, RoleGrantedEvent.OutputTuple, RoleGrantedEvent.OutputObject>;
        RoleGranted: TypedContractEvent<RoleGrantedEvent.InputTuple, RoleGrantedEvent.OutputTuple, RoleGrantedEvent.OutputObject>;
        "RoleRevoked(bytes32,address,address)": TypedContractEvent<RoleRevokedEvent.InputTuple, RoleRevokedEvent.OutputTuple, RoleRevokedEvent.OutputObject>;
        RoleRevoked: TypedContractEvent<RoleRevokedEvent.InputTuple, RoleRevokedEvent.OutputTuple, RoleRevokedEvent.OutputObject>;
        "TokenFeeUpdated(uint256,uint256)": TypedContractEvent<TokenFeeUpdatedEvent.InputTuple, TokenFeeUpdatedEvent.OutputTuple, TokenFeeUpdatedEvent.OutputObject>;
        TokenFeeUpdated: TypedContractEvent<TokenFeeUpdatedEvent.InputTuple, TokenFeeUpdatedEvent.OutputTuple, TokenFeeUpdatedEvent.OutputObject>;
        "Transfer(address,address,uint256)": TypedContractEvent<TransferEvent.InputTuple, TransferEvent.OutputTuple, TransferEvent.OutputObject>;
        Transfer: TypedContractEvent<TransferEvent.InputTuple, TransferEvent.OutputTuple, TransferEvent.OutputObject>;
        "Unpaused(address)": TypedContractEvent<UnpausedEvent.InputTuple, UnpausedEvent.OutputTuple, UnpausedEvent.OutputObject>;
        Unpaused: TypedContractEvent<UnpausedEvent.InputTuple, UnpausedEvent.OutputTuple, UnpausedEvent.OutputObject>;
        "Upgraded(address)": TypedContractEvent<UpgradedEvent.InputTuple, UpgradedEvent.OutputTuple, UpgradedEvent.OutputObject>;
        Upgraded: TypedContractEvent<UpgradedEvent.InputTuple, UpgradedEvent.OutputTuple, UpgradedEvent.OutputObject>;
        "Withdrawn(address,uint256)": TypedContractEvent<WithdrawnEvent.InputTuple, WithdrawnEvent.OutputTuple, WithdrawnEvent.OutputObject>;
        Withdrawn: TypedContractEvent<WithdrawnEvent.InputTuple, WithdrawnEvent.OutputTuple, WithdrawnEvent.OutputObject>;
    };
}
