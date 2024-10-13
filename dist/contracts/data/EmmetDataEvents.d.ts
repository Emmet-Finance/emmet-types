import type { BaseContract, BigNumberish, FunctionFragment, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener } from "../../common";
export interface EmmetDataEventsInterface extends Interface {
    getEvent(nameOrSignatureOrTopic: "ChainUpdated" | "GasPriceUpdated" | "TokenStrategyUpdated" | "TokenUpdated" | "UsedGasUpdated"): EventFragment;
}
export declare namespace ChainUpdatedEvent {
    type InputTuple = [
        chainId: BigNumberish,
        name: string,
        bridge: string,
        currency: string
    ];
    type OutputTuple = [
        chainId: bigint,
        name: string,
        bridge: string,
        currency: string
    ];
    interface OutputObject {
        chainId: bigint;
        name: string;
        bridge: string;
        currency: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace GasPriceUpdatedEvent {
    type InputTuple = [chainId: BigNumberish, gasPrice: BigNumberish];
    type OutputTuple = [chainId: bigint, gasPrice: bigint];
    interface OutputObject {
        chainId: bigint;
        gasPrice: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace TokenStrategyUpdatedEvent {
    type InputTuple = [
        otherChainId: BigNumberish,
        fromToken: string,
        toToken: string
    ];
    type OutputTuple = [
        otherChainId: bigint,
        fromToken: string,
        toToken: string
    ];
    interface OutputObject {
        otherChainId: bigint;
        fromToken: string;
        toToken: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace TokenUpdatedEvent {
    type InputTuple = [
        token: AddressLike,
        priceFeed: AddressLike,
        symbol: string
    ];
    type OutputTuple = [token: string, priceFeed: string, symbol: string];
    interface OutputObject {
        token: string;
        priceFeed: string;
        symbol: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace UsedGasUpdatedEvent {
    type InputTuple = [
        chainId: BigNumberish,
        step: BigNumberish,
        consumesGas: BigNumberish
    ];
    type OutputTuple = [
        chainId: bigint,
        step: bigint,
        consumesGas: bigint
    ];
    interface OutputObject {
        chainId: bigint;
        step: bigint;
        consumesGas: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface EmmetDataEvents extends BaseContract {
    connect(runner?: ContractRunner | null): EmmetDataEvents;
    waitForDeployment(): Promise<this>;
    interface: EmmetDataEventsInterface;
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
    getEvent(key: "ChainUpdated"): TypedContractEvent<ChainUpdatedEvent.InputTuple, ChainUpdatedEvent.OutputTuple, ChainUpdatedEvent.OutputObject>;
    getEvent(key: "GasPriceUpdated"): TypedContractEvent<GasPriceUpdatedEvent.InputTuple, GasPriceUpdatedEvent.OutputTuple, GasPriceUpdatedEvent.OutputObject>;
    getEvent(key: "TokenStrategyUpdated"): TypedContractEvent<TokenStrategyUpdatedEvent.InputTuple, TokenStrategyUpdatedEvent.OutputTuple, TokenStrategyUpdatedEvent.OutputObject>;
    getEvent(key: "TokenUpdated"): TypedContractEvent<TokenUpdatedEvent.InputTuple, TokenUpdatedEvent.OutputTuple, TokenUpdatedEvent.OutputObject>;
    getEvent(key: "UsedGasUpdated"): TypedContractEvent<UsedGasUpdatedEvent.InputTuple, UsedGasUpdatedEvent.OutputTuple, UsedGasUpdatedEvent.OutputObject>;
    filters: {
        "ChainUpdated(uint128,string,string,string)": TypedContractEvent<ChainUpdatedEvent.InputTuple, ChainUpdatedEvent.OutputTuple, ChainUpdatedEvent.OutputObject>;
        ChainUpdated: TypedContractEvent<ChainUpdatedEvent.InputTuple, ChainUpdatedEvent.OutputTuple, ChainUpdatedEvent.OutputObject>;
        "GasPriceUpdated(uint128,uint256)": TypedContractEvent<GasPriceUpdatedEvent.InputTuple, GasPriceUpdatedEvent.OutputTuple, GasPriceUpdatedEvent.OutputObject>;
        GasPriceUpdated: TypedContractEvent<GasPriceUpdatedEvent.InputTuple, GasPriceUpdatedEvent.OutputTuple, GasPriceUpdatedEvent.OutputObject>;
        "TokenStrategyUpdated(uint128,string,string)": TypedContractEvent<TokenStrategyUpdatedEvent.InputTuple, TokenStrategyUpdatedEvent.OutputTuple, TokenStrategyUpdatedEvent.OutputObject>;
        TokenStrategyUpdated: TypedContractEvent<TokenStrategyUpdatedEvent.InputTuple, TokenStrategyUpdatedEvent.OutputTuple, TokenStrategyUpdatedEvent.OutputObject>;
        "TokenUpdated(address,address,string)": TypedContractEvent<TokenUpdatedEvent.InputTuple, TokenUpdatedEvent.OutputTuple, TokenUpdatedEvent.OutputObject>;
        TokenUpdated: TypedContractEvent<TokenUpdatedEvent.InputTuple, TokenUpdatedEvent.OutputTuple, TokenUpdatedEvent.OutputObject>;
        "UsedGasUpdated(uint128,uint8,uint256)": TypedContractEvent<UsedGasUpdatedEvent.InputTuple, UsedGasUpdatedEvent.OutputTuple, UsedGasUpdatedEvent.OutputObject>;
        UsedGasUpdated: TypedContractEvent<UsedGasUpdatedEvent.InputTuple, UsedGasUpdatedEvent.OutputTuple, UsedGasUpdatedEvent.OutputObject>;
    };
}
