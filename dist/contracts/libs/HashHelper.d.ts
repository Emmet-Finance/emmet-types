import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../../common";
export interface HashHelperInterface extends Interface {
    getFunction(nameOrSignature: "generateTransactionHash"): FunctionFragment;
    encodeFunctionData(functionFragment: "generateTransactionHash", values: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BytesLike
    ]): string;
    decodeFunctionResult(functionFragment: "generateTransactionHash", data: BytesLike): Result;
}
export interface HashHelper extends BaseContract {
    connect(runner?: ContractRunner | null): HashHelper;
    waitForDeployment(): Promise<this>;
    interface: HashHelperInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    generateTransactionHash: TypedContractMethod<[
        fromChainId: BigNumberish,
        toChainid: BigNumberish,
        value: BigNumberish,
        nonce: BigNumberish,
        timestamp: BigNumberish,
        data: BytesLike
    ], [
        string
    ], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "generateTransactionHash"): TypedContractMethod<[
        fromChainId: BigNumberish,
        toChainid: BigNumberish,
        value: BigNumberish,
        nonce: BigNumberish,
        timestamp: BigNumberish,
        data: BytesLike
    ], [
        string
    ], "view">;
    filters: {};
}
