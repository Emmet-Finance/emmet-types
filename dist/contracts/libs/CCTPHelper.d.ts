import type { BaseContract, BytesLike, FunctionFragment, Result, Interface, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../../common";
export interface CCTPHelperInterface extends Interface {
    getFunction(nameOrSignature: "decodeClaimParams" | "encodeClaimParams" | "messageTransmitter" | "tokenMessenger"): FunctionFragment;
    encodeFunctionData(functionFragment: "decodeClaimParams", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "encodeClaimParams", values: [BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "messageTransmitter", values?: undefined): string;
    encodeFunctionData(functionFragment: "tokenMessenger", values?: undefined): string;
    decodeFunctionResult(functionFragment: "decodeClaimParams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "encodeClaimParams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "messageTransmitter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenMessenger", data: BytesLike): Result;
}
export interface CCTPHelper extends BaseContract {
    connect(runner?: ContractRunner | null): CCTPHelper;
    waitForDeployment(): Promise<this>;
    interface: CCTPHelperInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    decodeClaimParams: TypedContractMethod<[
        data: BytesLike
    ], [
        [string, string] & {
            messageBytes: string;
            attestationSignature: string;
        }
    ], "view">;
    encodeClaimParams: TypedContractMethod<[
        messageBytes: BytesLike,
        attestationSignature: BytesLike
    ], [
        string
    ], "view">;
    messageTransmitter: TypedContractMethod<[], [string], "view">;
    tokenMessenger: TypedContractMethod<[], [string], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "decodeClaimParams"): TypedContractMethod<[
        data: BytesLike
    ], [
        [string, string] & {
            messageBytes: string;
            attestationSignature: string;
        }
    ], "view">;
    getFunction(nameOrSignature: "encodeClaimParams"): TypedContractMethod<[
        messageBytes: BytesLike,
        attestationSignature: BytesLike
    ], [
        string
    ], "view">;
    getFunction(nameOrSignature: "messageTransmitter"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "tokenMessenger"): TypedContractMethod<[], [string], "view">;
    filters: {};
}
