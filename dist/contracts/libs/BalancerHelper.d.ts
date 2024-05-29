import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../../common";
export interface BalancerHelperInterface extends Interface {
    getFunction(nameOrSignature: "estimateTokenOut"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "BalancerPoolUpdate"): EventFragment;
    encodeFunctionData(functionFragment: "estimateTokenOut", values: [BytesLike, AddressLike, AddressLike, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "estimateTokenOut", data: BytesLike): Result;
}
export declare namespace BalancerPoolUpdateEvent {
    type InputTuple = [
        tokenIn: AddressLike,
        tokenOut: AddressLike,
        pool: AddressLike,
        operation: string
    ];
    type OutputTuple = [
        tokenIn: string,
        tokenOut: string,
        pool: string,
        operation: string
    ];
    interface OutputObject {
        tokenIn: string;
        tokenOut: string;
        pool: string;
        operation: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface BalancerHelper extends BaseContract {
    connect(runner?: ContractRunner | null): BalancerHelper;
    waitForDeployment(): Promise<this>;
    interface: BalancerHelperInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    estimateTokenOut: TypedContractMethod<[
        poolId: BytesLike,
        tokenIn: AddressLike,
        tokenOut: AddressLike,
        amountIn: BigNumberish
    ], [
        bigint
    ], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "estimateTokenOut"): TypedContractMethod<[
        poolId: BytesLike,
        tokenIn: AddressLike,
        tokenOut: AddressLike,
        amountIn: BigNumberish
    ], [
        bigint
    ], "view">;
    getEvent(key: "BalancerPoolUpdate"): TypedContractEvent<BalancerPoolUpdateEvent.InputTuple, BalancerPoolUpdateEvent.OutputTuple, BalancerPoolUpdateEvent.OutputObject>;
    filters: {
        "BalancerPoolUpdate(address,address,address,string)": TypedContractEvent<BalancerPoolUpdateEvent.InputTuple, BalancerPoolUpdateEvent.OutputTuple, BalancerPoolUpdateEvent.OutputObject>;
        BalancerPoolUpdate: TypedContractEvent<BalancerPoolUpdateEvent.InputTuple, BalancerPoolUpdateEvent.OutputTuple, BalancerPoolUpdateEvent.OutputObject>;
    };
}
