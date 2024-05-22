import type { BaseContract, BigNumberish, FunctionFragment, Interface, EventFragment, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener } from "../../../common";
export declare namespace EmmetTokenStrategy {
    type CrossChainStrategyStruct = {
        localSteps: BigNumberish[];
        foreignSteps: BigNumberish[];
    };
    type CrossChainStrategyStructOutput = [
        localSteps: bigint[],
        foreignSteps: bigint[]
    ] & {
        localSteps: bigint[];
        foreignSteps: bigint[];
    };
}
export interface EmmetTokenStrategyInterface extends Interface {
    getEvent(nameOrSignatureOrTopic: "CrossChainPathUpdate" | "IncommingPathUpdate"): EventFragment;
}
export declare namespace CrossChainPathUpdateEvent {
    type InputTuple = [
        toChainId: BigNumberish,
        fromToken: string,
        toToken: string,
        oldStrategies: EmmetTokenStrategy.CrossChainStrategyStruct,
        newStrategies: EmmetTokenStrategy.CrossChainStrategyStruct,
        operation: string
    ];
    type OutputTuple = [
        toChainId: bigint,
        fromToken: string,
        toToken: string,
        oldStrategies: EmmetTokenStrategy.CrossChainStrategyStructOutput,
        newStrategies: EmmetTokenStrategy.CrossChainStrategyStructOutput,
        operation: string
    ];
    interface OutputObject {
        toChainId: bigint;
        fromToken: string;
        toToken: string;
        oldStrategies: EmmetTokenStrategy.CrossChainStrategyStructOutput;
        newStrategies: EmmetTokenStrategy.CrossChainStrategyStructOutput;
        operation: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace IncommingPathUpdateEvent {
    type InputTuple = [
        fromToken: string,
        toToken: string,
        oldLocalSteps: BigNumberish[],
        newLocalSteps: BigNumberish[],
        operation: string
    ];
    type OutputTuple = [
        fromToken: string,
        toToken: string,
        oldLocalSteps: bigint[],
        newLocalSteps: bigint[],
        operation: string
    ];
    interface OutputObject {
        fromToken: string;
        toToken: string;
        oldLocalSteps: bigint[];
        newLocalSteps: bigint[];
        operation: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface EmmetTokenStrategy extends BaseContract {
    connect(runner?: ContractRunner | null): EmmetTokenStrategy;
    waitForDeployment(): Promise<this>;
    interface: EmmetTokenStrategyInterface;
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
    getEvent(key: "CrossChainPathUpdate"): TypedContractEvent<CrossChainPathUpdateEvent.InputTuple, CrossChainPathUpdateEvent.OutputTuple, CrossChainPathUpdateEvent.OutputObject>;
    getEvent(key: "IncommingPathUpdate"): TypedContractEvent<IncommingPathUpdateEvent.InputTuple, IncommingPathUpdateEvent.OutputTuple, IncommingPathUpdateEvent.OutputObject>;
    filters: {
        "CrossChainPathUpdate(uint256,string,string,tuple,tuple,string)": TypedContractEvent<CrossChainPathUpdateEvent.InputTuple, CrossChainPathUpdateEvent.OutputTuple, CrossChainPathUpdateEvent.OutputObject>;
        CrossChainPathUpdate: TypedContractEvent<CrossChainPathUpdateEvent.InputTuple, CrossChainPathUpdateEvent.OutputTuple, CrossChainPathUpdateEvent.OutputObject>;
        "IncommingPathUpdate(string,string,uint8[],uint8[],string)": TypedContractEvent<IncommingPathUpdateEvent.InputTuple, IncommingPathUpdateEvent.OutputTuple, IncommingPathUpdateEvent.OutputObject>;
        IncommingPathUpdate: TypedContractEvent<IncommingPathUpdateEvent.InputTuple, IncommingPathUpdateEvent.OutputTuple, IncommingPathUpdateEvent.OutputObject>;
    };
}
