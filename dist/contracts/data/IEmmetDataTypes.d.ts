import type { BaseContract, BigNumberish, FunctionFragment, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener } from "../../common";
export interface IEmmetDataTypesInterface extends Interface {
    getEvent(nameOrSignatureOrTopic: "CCTPChainDeleted" | "CctpChainUpdated" | "ChainDeleted" | "ChainUpdate" | "TokenDeleted" | "TokenUpdate" | "UpdatedGasFeesAddress" | "UpdatedProtocolFee"): EventFragment;
}
export declare namespace CCTPChainDeletedEvent {
    type InputTuple = [chainId: BigNumberish];
    type OutputTuple = [chainId: bigint];
    interface OutputObject {
        chainId: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace CctpChainUpdatedEvent {
    type InputTuple = [
        chainId: BigNumberish,
        cctpDestId: BigNumberish,
        awaitMinutes: BigNumberish,
        awaitSeconds: BigNumberish,
        numberOfAwaitedBlocks: BigNumberish
    ];
    type OutputTuple = [
        chainId: bigint,
        cctpDestId: bigint,
        awaitMinutes: bigint,
        awaitSeconds: bigint,
        numberOfAwaitedBlocks: bigint
    ];
    interface OutputObject {
        chainId: bigint;
        cctpDestId: bigint;
        awaitMinutes: bigint;
        awaitSeconds: bigint;
        numberOfAwaitedBlocks: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace ChainDeletedEvent {
    type InputTuple = [chainId: BigNumberish];
    type OutputTuple = [chainId: bigint];
    interface OutputObject {
        chainId: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace ChainUpdateEvent {
    type InputTuple = [
        chainId: BigNumberish,
        cctpDestId: BigNumberish,
        name: string,
        token: string
    ];
    type OutputTuple = [
        chainId: bigint,
        cctpDestId: bigint,
        name: string,
        token: string
    ];
    interface OutputObject {
        chainId: bigint;
        cctpDestId: bigint;
        name: string;
        token: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace TokenDeletedEvent {
    type InputTuple = [symbol: string];
    type OutputTuple = [symbol: string];
    interface OutputObject {
        symbol: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace TokenUpdateEvent {
    type InputTuple = [
        addr: AddressLike,
        decimals: BigNumberish,
        symbol: string
    ];
    type OutputTuple = [addr: string, decimals: bigint, symbol: string];
    interface OutputObject {
        addr: string;
        decimals: bigint;
        symbol: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace UpdatedGasFeesAddressEvent {
    type InputTuple = [oldGasFees: AddressLike, newGasFees: AddressLike];
    type OutputTuple = [oldGasFees: string, newGasFees: string];
    interface OutputObject {
        oldGasFees: string;
        newGasFees: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace UpdatedProtocolFeeEvent {
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
export interface IEmmetDataTypes extends BaseContract {
    connect(runner?: ContractRunner | null): IEmmetDataTypes;
    waitForDeployment(): Promise<this>;
    interface: IEmmetDataTypesInterface;
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
    getEvent(key: "CCTPChainDeleted"): TypedContractEvent<CCTPChainDeletedEvent.InputTuple, CCTPChainDeletedEvent.OutputTuple, CCTPChainDeletedEvent.OutputObject>;
    getEvent(key: "CctpChainUpdated"): TypedContractEvent<CctpChainUpdatedEvent.InputTuple, CctpChainUpdatedEvent.OutputTuple, CctpChainUpdatedEvent.OutputObject>;
    getEvent(key: "ChainDeleted"): TypedContractEvent<ChainDeletedEvent.InputTuple, ChainDeletedEvent.OutputTuple, ChainDeletedEvent.OutputObject>;
    getEvent(key: "ChainUpdate"): TypedContractEvent<ChainUpdateEvent.InputTuple, ChainUpdateEvent.OutputTuple, ChainUpdateEvent.OutputObject>;
    getEvent(key: "TokenDeleted"): TypedContractEvent<TokenDeletedEvent.InputTuple, TokenDeletedEvent.OutputTuple, TokenDeletedEvent.OutputObject>;
    getEvent(key: "TokenUpdate"): TypedContractEvent<TokenUpdateEvent.InputTuple, TokenUpdateEvent.OutputTuple, TokenUpdateEvent.OutputObject>;
    getEvent(key: "UpdatedGasFeesAddress"): TypedContractEvent<UpdatedGasFeesAddressEvent.InputTuple, UpdatedGasFeesAddressEvent.OutputTuple, UpdatedGasFeesAddressEvent.OutputObject>;
    getEvent(key: "UpdatedProtocolFee"): TypedContractEvent<UpdatedProtocolFeeEvent.InputTuple, UpdatedProtocolFeeEvent.OutputTuple, UpdatedProtocolFeeEvent.OutputObject>;
    filters: {
        "CCTPChainDeleted(uint128)": TypedContractEvent<CCTPChainDeletedEvent.InputTuple, CCTPChainDeletedEvent.OutputTuple, CCTPChainDeletedEvent.OutputObject>;
        CCTPChainDeleted: TypedContractEvent<CCTPChainDeletedEvent.InputTuple, CCTPChainDeletedEvent.OutputTuple, CCTPChainDeletedEvent.OutputObject>;
        "CctpChainUpdated(uint128,uint128,uint8,uint8,uint8)": TypedContractEvent<CctpChainUpdatedEvent.InputTuple, CctpChainUpdatedEvent.OutputTuple, CctpChainUpdatedEvent.OutputObject>;
        CctpChainUpdated: TypedContractEvent<CctpChainUpdatedEvent.InputTuple, CctpChainUpdatedEvent.OutputTuple, CctpChainUpdatedEvent.OutputObject>;
        "ChainDeleted(uint128)": TypedContractEvent<ChainDeletedEvent.InputTuple, ChainDeletedEvent.OutputTuple, ChainDeletedEvent.OutputObject>;
        ChainDeleted: TypedContractEvent<ChainDeletedEvent.InputTuple, ChainDeletedEvent.OutputTuple, ChainDeletedEvent.OutputObject>;
        "ChainUpdate(uint128,uint128,string,string)": TypedContractEvent<ChainUpdateEvent.InputTuple, ChainUpdateEvent.OutputTuple, ChainUpdateEvent.OutputObject>;
        ChainUpdate: TypedContractEvent<ChainUpdateEvent.InputTuple, ChainUpdateEvent.OutputTuple, ChainUpdateEvent.OutputObject>;
        "TokenDeleted(string)": TypedContractEvent<TokenDeletedEvent.InputTuple, TokenDeletedEvent.OutputTuple, TokenDeletedEvent.OutputObject>;
        TokenDeleted: TypedContractEvent<TokenDeletedEvent.InputTuple, TokenDeletedEvent.OutputTuple, TokenDeletedEvent.OutputObject>;
        "TokenUpdate(address,uint8,string)": TypedContractEvent<TokenUpdateEvent.InputTuple, TokenUpdateEvent.OutputTuple, TokenUpdateEvent.OutputObject>;
        TokenUpdate: TypedContractEvent<TokenUpdateEvent.InputTuple, TokenUpdateEvent.OutputTuple, TokenUpdateEvent.OutputObject>;
        "UpdatedGasFeesAddress(address,address)": TypedContractEvent<UpdatedGasFeesAddressEvent.InputTuple, UpdatedGasFeesAddressEvent.OutputTuple, UpdatedGasFeesAddressEvent.OutputObject>;
        UpdatedGasFeesAddress: TypedContractEvent<UpdatedGasFeesAddressEvent.InputTuple, UpdatedGasFeesAddressEvent.OutputTuple, UpdatedGasFeesAddressEvent.OutputObject>;
        "UpdatedProtocolFee(uint128,uint128)": TypedContractEvent<UpdatedProtocolFeeEvent.InputTuple, UpdatedProtocolFeeEvent.OutputTuple, UpdatedProtocolFeeEvent.OutputObject>;
        UpdatedProtocolFee: TypedContractEvent<UpdatedProtocolFeeEvent.InputTuple, UpdatedProtocolFeeEvent.OutputTuple, UpdatedProtocolFeeEvent.OutputObject>;
    };
}
