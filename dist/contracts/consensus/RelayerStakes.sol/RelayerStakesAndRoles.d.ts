import type { BaseContract, BigNumberish, FunctionFragment, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener } from "../../../common";
export interface RelayerStakesAndRolesInterface extends Interface {
    getEvent(nameOrSignatureOrTopic: "CoolDownPeriodUpdated" | "KycPassed" | "MinStakeUpdated" | "RewardClaimed" | "SignerRoleRefused" | "Staked" | "Unstaked"): EventFragment;
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
export interface RelayerStakesAndRoles extends BaseContract {
    connect(runner?: ContractRunner | null): RelayerStakesAndRoles;
    waitForDeployment(): Promise<this>;
    interface: RelayerStakesAndRolesInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getEvent(key: "CoolDownPeriodUpdated"): TypedContractEvent<CoolDownPeriodUpdatedEvent.InputTuple, CoolDownPeriodUpdatedEvent.OutputTuple, CoolDownPeriodUpdatedEvent.OutputObject>;
    getEvent(key: "KycPassed"): TypedContractEvent<KycPassedEvent.InputTuple, KycPassedEvent.OutputTuple, KycPassedEvent.OutputObject>;
    getEvent(key: "MinStakeUpdated"): TypedContractEvent<MinStakeUpdatedEvent.InputTuple, MinStakeUpdatedEvent.OutputTuple, MinStakeUpdatedEvent.OutputObject>;
    getEvent(key: "RewardClaimed"): TypedContractEvent<RewardClaimedEvent.InputTuple, RewardClaimedEvent.OutputTuple, RewardClaimedEvent.OutputObject>;
    getEvent(key: "SignerRoleRefused"): TypedContractEvent<SignerRoleRefusedEvent.InputTuple, SignerRoleRefusedEvent.OutputTuple, SignerRoleRefusedEvent.OutputObject>;
    getEvent(key: "Staked"): TypedContractEvent<StakedEvent.InputTuple, StakedEvent.OutputTuple, StakedEvent.OutputObject>;
    getEvent(key: "Unstaked"): TypedContractEvent<UnstakedEvent.InputTuple, UnstakedEvent.OutputTuple, UnstakedEvent.OutputObject>;
    filters: {
        "CoolDownPeriodUpdated(uint256)": TypedContractEvent<CoolDownPeriodUpdatedEvent.InputTuple, CoolDownPeriodUpdatedEvent.OutputTuple, CoolDownPeriodUpdatedEvent.OutputObject>;
        CoolDownPeriodUpdated: TypedContractEvent<CoolDownPeriodUpdatedEvent.InputTuple, CoolDownPeriodUpdatedEvent.OutputTuple, CoolDownPeriodUpdatedEvent.OutputObject>;
        "KycPassed(address)": TypedContractEvent<KycPassedEvent.InputTuple, KycPassedEvent.OutputTuple, KycPassedEvent.OutputObject>;
        KycPassed: TypedContractEvent<KycPassedEvent.InputTuple, KycPassedEvent.OutputTuple, KycPassedEvent.OutputObject>;
        "MinStakeUpdated(uint256)": TypedContractEvent<MinStakeUpdatedEvent.InputTuple, MinStakeUpdatedEvent.OutputTuple, MinStakeUpdatedEvent.OutputObject>;
        MinStakeUpdated: TypedContractEvent<MinStakeUpdatedEvent.InputTuple, MinStakeUpdatedEvent.OutputTuple, MinStakeUpdatedEvent.OutputObject>;
        "RewardClaimed(address,uint256)": TypedContractEvent<RewardClaimedEvent.InputTuple, RewardClaimedEvent.OutputTuple, RewardClaimedEvent.OutputObject>;
        RewardClaimed: TypedContractEvent<RewardClaimedEvent.InputTuple, RewardClaimedEvent.OutputTuple, RewardClaimedEvent.OutputObject>;
        "SignerRoleRefused(address)": TypedContractEvent<SignerRoleRefusedEvent.InputTuple, SignerRoleRefusedEvent.OutputTuple, SignerRoleRefusedEvent.OutputObject>;
        SignerRoleRefused: TypedContractEvent<SignerRoleRefusedEvent.InputTuple, SignerRoleRefusedEvent.OutputTuple, SignerRoleRefusedEvent.OutputObject>;
        "Staked(address,uint256)": TypedContractEvent<StakedEvent.InputTuple, StakedEvent.OutputTuple, StakedEvent.OutputObject>;
        Staked: TypedContractEvent<StakedEvent.InputTuple, StakedEvent.OutputTuple, StakedEvent.OutputObject>;
        "Unstaked(address,uint256)": TypedContractEvent<UnstakedEvent.InputTuple, UnstakedEvent.OutputTuple, UnstakedEvent.OutputObject>;
        Unstaked: TypedContractEvent<UnstakedEvent.InputTuple, UnstakedEvent.OutputTuple, UnstakedEvent.OutputObject>;
    };
}
