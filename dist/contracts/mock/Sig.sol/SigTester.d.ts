import type { BaseContract, BytesLike, FunctionFragment, Result, Interface, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../../../common";
export interface SigTesterInterface extends Interface {
    getFunction(nameOrSignature: "getEthSignedMessageHash" | "recoverSigner" | "verifySignature"): FunctionFragment;
    encodeFunctionData(functionFragment: "getEthSignedMessageHash", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "recoverSigner", values: [BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "verifySignature", values: [BytesLike, BytesLike, AddressLike]): string;
    decodeFunctionResult(functionFragment: "getEthSignedMessageHash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "recoverSigner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "verifySignature", data: BytesLike): Result;
}
export interface SigTester extends BaseContract {
    connect(runner?: ContractRunner | null): SigTester;
    waitForDeployment(): Promise<this>;
    interface: SigTesterInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    getEthSignedMessageHash: TypedContractMethod<[
        dataHash: BytesLike
    ], [
        string
    ], "view">;
    recoverSigner: TypedContractMethod<[
        ethSignedMessageHash: BytesLike,
        signature: BytesLike
    ], [
        string
    ], "view">;
    verifySignature: TypedContractMethod<[
        signature: BytesLike,
        data: BytesLike,
        signer: AddressLike
    ], [
        boolean
    ], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "getEthSignedMessageHash"): TypedContractMethod<[dataHash: BytesLike], [string], "view">;
    getFunction(nameOrSignature: "recoverSigner"): TypedContractMethod<[
        ethSignedMessageHash: BytesLike,
        signature: BytesLike
    ], [
        string
    ], "view">;
    getFunction(nameOrSignature: "verifySignature"): TypedContractMethod<[
        signature: BytesLike,
        data: BytesLike,
        signer: AddressLike
    ], [
        boolean
    ], "view">;
    filters: {};
}
