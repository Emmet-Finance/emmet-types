import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../../common";
export declare namespace SignatureVerifier {
    type DecodedDataStruct = {
        fromChainId: BigNumberish;
        toChainId: BigNumberish;
        amount: BigNumberish;
        fromToken: string;
        toToken: string;
        recipient: string;
        fromChainHash: string;
    };
    type DecodedDataStructOutput = [
        fromChainId: bigint,
        toChainId: bigint,
        amount: bigint,
        fromToken: string,
        toToken: string,
        recipient: string,
        fromChainHash: string
    ] & {
        fromChainId: bigint;
        toChainId: bigint;
        amount: bigint;
        fromToken: string;
        toToken: string;
        recipient: string;
        fromChainHash: string;
    };
}
export interface SignatureVerifierInterface extends Interface {
    getFunction(nameOrSignature: "decodeCommonData" | "encodeCommonData" | "stringToAddress" | "verifyLocalSignature" | "verifySignature"): FunctionFragment;
    encodeFunctionData(functionFragment: "decodeCommonData", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "encodeCommonData", values: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        string,
        string,
        string,
        string
    ]): string;
    encodeFunctionData(functionFragment: "stringToAddress", values: [string]): string;
    encodeFunctionData(functionFragment: "verifyLocalSignature", values: [BytesLike, BytesLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "verifySignature", values: [BytesLike, BytesLike, AddressLike]): string;
    decodeFunctionResult(functionFragment: "decodeCommonData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "encodeCommonData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stringToAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "verifyLocalSignature", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "verifySignature", data: BytesLike): Result;
}
export interface SignatureVerifier extends BaseContract {
    connect(runner?: ContractRunner | null): SignatureVerifier;
    waitForDeployment(): Promise<this>;
    interface: SignatureVerifierInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    decodeCommonData: TypedContractMethod<[
        data: BytesLike
    ], [
        SignatureVerifier.DecodedDataStructOutput
    ], "view">;
    encodeCommonData: TypedContractMethod<[
        fromChainId: BigNumberish,
        toChainId: BigNumberish,
        amount: BigNumberish,
        fromToken: string,
        toToken: string,
        recipient: string,
        fromChainHash: string
    ], [
        string
    ], "view">;
    stringToAddress: TypedContractMethod<[addr_: string], [string], "view">;
    verifyLocalSignature: TypedContractMethod<[
        signature: BytesLike,
        data: BytesLike,
        signer: AddressLike
    ], [
        boolean
    ], "view">;
    verifySignature: TypedContractMethod<[
        signature: BytesLike,
        data: BytesLike,
        signer: AddressLike
    ], [
        boolean
    ], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "decodeCommonData"): TypedContractMethod<[
        data: BytesLike
    ], [
        SignatureVerifier.DecodedDataStructOutput
    ], "view">;
    getFunction(nameOrSignature: "encodeCommonData"): TypedContractMethod<[
        fromChainId: BigNumberish,
        toChainId: BigNumberish,
        amount: BigNumberish,
        fromToken: string,
        toToken: string,
        recipient: string,
        fromChainHash: string
    ], [
        string
    ], "view">;
    getFunction(nameOrSignature: "stringToAddress"): TypedContractMethod<[addr_: string], [string], "view">;
    getFunction(nameOrSignature: "verifyLocalSignature"): TypedContractMethod<[
        signature: BytesLike,
        data: BytesLike,
        signer: AddressLike
    ], [
        boolean
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
