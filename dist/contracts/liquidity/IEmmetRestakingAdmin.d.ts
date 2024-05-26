import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../../common";
export interface IEmmetRestakingAdminInterface extends Interface {
    getFunction(nameOrSignature: "setAPY"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "APYChanged"): EventFragment;
    encodeFunctionData(functionFragment: "setAPY", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "setAPY", data: BytesLike): Result;
}
export declare namespace APYChangedEvent {
    type InputTuple = [newAPY: BigNumberish];
    type OutputTuple = [newAPY: bigint];
    interface OutputObject {
        newAPY: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface IEmmetRestakingAdmin extends BaseContract {
    connect(runner?: ContractRunner | null): IEmmetRestakingAdmin;
    waitForDeployment(): Promise<this>;
    interface: IEmmetRestakingAdminInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    setAPY: TypedContractMethod<[apy_: BigNumberish], [void], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "setAPY"): TypedContractMethod<[apy_: BigNumberish], [void], "nonpayable">;
    getEvent(key: "APYChanged"): TypedContractEvent<APYChangedEvent.InputTuple, APYChangedEvent.OutputTuple, APYChangedEvent.OutputObject>;
    filters: {
        "APYChanged(uint256)": TypedContractEvent<APYChangedEvent.InputTuple, APYChangedEvent.OutputTuple, APYChangedEvent.OutputObject>;
        APYChanged: TypedContractEvent<APYChangedEvent.InputTuple, APYChangedEvent.OutputTuple, APYChangedEvent.OutputObject>;
    };
}
