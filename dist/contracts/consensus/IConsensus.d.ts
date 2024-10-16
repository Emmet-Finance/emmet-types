import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../../common";
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
export interface IConsensusInterface extends Interface {
    getFunction(nameOrSignature: "getTransaction" | "getTransactions"): FunctionFragment;
    encodeFunctionData(functionFragment: "getTransaction", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getTransactions", values: [BigNumberish, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "getTransaction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTransactions", data: BytesLike): Result;
}
export interface IConsensus extends BaseContract {
    connect(runner?: ContractRunner | null): IConsensus;
    waitForDeployment(): Promise<this>;
    interface: IConsensusInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    getTransaction: TypedContractMethod<[
        txHash: BytesLike
    ], [
        CrossChainTransaction.CCTStructOutput
    ], "view">;
    getTransactions: TypedContractMethod<[
        batch: BigNumberish,
        skip: BigNumberish
    ], [
        CrossChainTransaction.CCTStructOutput[]
    ], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "getTransaction"): TypedContractMethod<[
        txHash: BytesLike
    ], [
        CrossChainTransaction.CCTStructOutput
    ], "view">;
    getFunction(nameOrSignature: "getTransactions"): TypedContractMethod<[
        batch: BigNumberish,
        skip: BigNumberish
    ], [
        CrossChainTransaction.CCTStructOutput[]
    ], "view">;
    filters: {};
}
