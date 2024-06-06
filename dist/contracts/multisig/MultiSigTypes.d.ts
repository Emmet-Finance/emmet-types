import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener } from "../../common";
export interface MultiSigTypesInterface extends Interface {
    getEvent(nameOrSignatureOrTopic: "MinimalStakeUpdated" | "NewSigner" | "PartialSignature" | "RewardRatesUpdated" | "Signed" | "Staked" | "Unstaked"): EventFragment;
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
export interface MultiSigTypes extends BaseContract {
    connect(runner?: ContractRunner | null): MultiSigTypes;
    waitForDeployment(): Promise<this>;
    interface: MultiSigTypesInterface;
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
