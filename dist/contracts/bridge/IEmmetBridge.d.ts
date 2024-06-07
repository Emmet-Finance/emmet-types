import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../../common";
export interface IEmmetBridgeInterface extends Interface {
    getFunction(nameOrSignature: "getTransaction" | "receiveInstallment" | "sendInstallment"): FunctionFragment;
    encodeFunctionData(functionFragment: "getTransaction", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "receiveInstallment", values: [
        BytesLike,
        BigNumberish,
        AddressLike[],
        BytesLike[],
        BytesLike,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "sendInstallment", values: [BigNumberish, BigNumberish, string, string, string]): string;
    decodeFunctionResult(functionFragment: "getTransaction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "receiveInstallment", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendInstallment", data: BytesLike): Result;
}
export interface IEmmetBridge extends BaseContract {
    connect(runner?: ContractRunner | null): IEmmetBridge;
    waitForDeployment(): Promise<this>;
    interface: IEmmetBridgeInterface;
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
        txHash_: BytesLike
    ], [
        [
            bigint,
            bigint,
            string,
            string,
            bigint,
            string,
            string
        ] & {
            id: bigint;
            amount: bigint;
            fromToken: string;
            toToken: string;
            toChainId: bigint;
            originHash: string;
            receiver: string;
        }
    ], "view">;
    receiveInstallment: TypedContractMethod<[
        txHash_: BytesLike,
        id_: BigNumberish,
        signers_: AddressLike[],
        aggregatedSignature_: BytesLike[],
        data_: BytesLike,
        cctpdata_: BytesLike
    ], [
        void
    ], "nonpayable">;
    sendInstallment: TypedContractMethod<[
        toChainId_: BigNumberish,
        amount_: BigNumberish,
        fromToken_: string,
        toToken_: string,
        recipient_: string
    ], [
        void
    ], "payable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "getTransaction"): TypedContractMethod<[
        txHash_: BytesLike
    ], [
        [
            bigint,
            bigint,
            string,
            string,
            bigint,
            string,
            string
        ] & {
            id: bigint;
            amount: bigint;
            fromToken: string;
            toToken: string;
            toChainId: bigint;
            originHash: string;
            receiver: string;
        }
    ], "view">;
    getFunction(nameOrSignature: "receiveInstallment"): TypedContractMethod<[
        txHash_: BytesLike,
        id_: BigNumberish,
        signers_: AddressLike[],
        aggregatedSignature_: BytesLike[],
        data_: BytesLike,
        cctpdata_: BytesLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "sendInstallment"): TypedContractMethod<[
        toChainId_: BigNumberish,
        amount_: BigNumberish,
        fromToken_: string,
        toToken_: string,
        recipient_: string
    ], [
        void
    ], "payable">;
    filters: {};
}
