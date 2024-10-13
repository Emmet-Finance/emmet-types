import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../../common";
export interface ITokenMessengerInterface extends Interface {
    getFunction(nameOrSignature: "depositForBurn"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "DepositForBurn"): EventFragment;
    encodeFunctionData(functionFragment: "depositForBurn", values: [BigNumberish, BigNumberish, BytesLike, AddressLike]): string;
    decodeFunctionResult(functionFragment: "depositForBurn", data: BytesLike): Result;
}
export declare namespace DepositForBurnEvent {
    type InputTuple = [
        nonce: BigNumberish,
        burnToken: AddressLike,
        amount: BigNumberish,
        depositor: AddressLike,
        mintRecipient: BytesLike,
        destinationDomain: BigNumberish,
        destinationTokenMessenger: BytesLike,
        destinationCaller: BytesLike
    ];
    type OutputTuple = [
        nonce: bigint,
        burnToken: string,
        amount: bigint,
        depositor: string,
        mintRecipient: string,
        destinationDomain: bigint,
        destinationTokenMessenger: string,
        destinationCaller: string
    ];
    interface OutputObject {
        nonce: bigint;
        burnToken: string;
        amount: bigint;
        depositor: string;
        mintRecipient: string;
        destinationDomain: bigint;
        destinationTokenMessenger: string;
        destinationCaller: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface ITokenMessenger extends BaseContract {
    connect(runner?: ContractRunner | null): ITokenMessenger;
    waitForDeployment(): Promise<this>;
    interface: ITokenMessengerInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    depositForBurn: TypedContractMethod<[
        amount: BigNumberish,
        destinationDomain: BigNumberish,
        mintRecipient: BytesLike,
        burnToken: AddressLike
    ], [
        bigint
    ], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "depositForBurn"): TypedContractMethod<[
        amount: BigNumberish,
        destinationDomain: BigNumberish,
        mintRecipient: BytesLike,
        burnToken: AddressLike
    ], [
        bigint
    ], "nonpayable">;
    getEvent(key: "DepositForBurn"): TypedContractEvent<DepositForBurnEvent.InputTuple, DepositForBurnEvent.OutputTuple, DepositForBurnEvent.OutputObject>;
    filters: {
        "DepositForBurn(uint64,address,uint256,address,bytes32,uint32,bytes32,bytes32)": TypedContractEvent<DepositForBurnEvent.InputTuple, DepositForBurnEvent.OutputTuple, DepositForBurnEvent.OutputObject>;
        DepositForBurn: TypedContractEvent<DepositForBurnEvent.InputTuple, DepositForBurnEvent.OutputTuple, DepositForBurnEvent.OutputObject>;
    };
}
