import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../../common";
export declare namespace BridgeTypes {
    type ReceiveParamsStruct = {
        blockNumber: BigNumberish;
        foreignIndexOut: BigNumberish;
        value: BigNumberish;
        start: BigNumberish;
        sentAmount: BigNumberish;
        receiveAmount: BigNumberish;
        fromChainId: BigNumberish;
        toChainId: BigNumberish;
        to: string;
        fromToken: string;
        toToken: string;
        data: BytesLike;
    };
    type ReceiveParamsStructOutput = [
        blockNumber: bigint,
        foreignIndexOut: bigint,
        value: bigint,
        start: bigint,
        sentAmount: bigint,
        receiveAmount: bigint,
        fromChainId: bigint,
        toChainId: bigint,
        to: string,
        fromToken: string,
        toToken: string,
        data: string
    ] & {
        blockNumber: bigint;
        foreignIndexOut: bigint;
        value: bigint;
        start: bigint;
        sentAmount: bigint;
        receiveAmount: bigint;
        fromChainId: bigint;
        toChainId: bigint;
        to: string;
        fromToken: string;
        toToken: string;
        data: string;
    };
    type SendParamsStruct = {
        blockNumber: BigNumberish;
        isFeeERC20: boolean;
        sentAmount: BigNumberish;
        receiveAmount: BigNumberish;
        toChainId: BigNumberish;
        fromToken: string;
        toToken: string;
        to: string;
        isSuccess: boolean;
    };
    type SendParamsStructOutput = [
        blockNumber: bigint,
        isFeeERC20: boolean,
        sentAmount: bigint,
        receiveAmount: bigint,
        toChainId: bigint,
        fromToken: string,
        toToken: string,
        to: string,
        isSuccess: boolean
    ] & {
        blockNumber: bigint;
        isFeeERC20: boolean;
        sentAmount: bigint;
        receiveAmount: bigint;
        toChainId: bigint;
        fromToken: string;
        toToken: string;
        to: string;
        isSuccess: boolean;
    };
}
export interface EmmetBridgeHelperInterface extends Interface {
    getFunction(nameOrSignature: "BridgeError" | "validateReceiveInput" | "validateSendingInput"): FunctionFragment;
    encodeFunctionData(functionFragment: "BridgeError", values?: undefined): string;
    encodeFunctionData(functionFragment: "validateReceiveInput", values: [AddressLike, BridgeTypes.ReceiveParamsStruct]): string;
    encodeFunctionData(functionFragment: "validateSendingInput", values: [AddressLike, BridgeTypes.SendParamsStruct]): string;
    decodeFunctionResult(functionFragment: "BridgeError", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "validateReceiveInput", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "validateSendingInput", data: BytesLike): Result;
}
export interface EmmetBridgeHelper extends BaseContract {
    connect(runner?: ContractRunner | null): EmmetBridgeHelper;
    waitForDeployment(): Promise<this>;
    interface: EmmetBridgeHelperInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    BridgeError: TypedContractMethod<[], [string], "view">;
    validateReceiveInput: TypedContractMethod<[
        BridgeSettings: AddressLike,
        params: BridgeTypes.ReceiveParamsStruct
    ], [
        void
    ], "view">;
    validateSendingInput: TypedContractMethod<[
        BridgeSettings: AddressLike,
        params: BridgeTypes.SendParamsStruct
    ], [
        void
    ], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "BridgeError"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "validateReceiveInput"): TypedContractMethod<[
        BridgeSettings: AddressLike,
        params: BridgeTypes.ReceiveParamsStruct
    ], [
        void
    ], "view">;
    getFunction(nameOrSignature: "validateSendingInput"): TypedContractMethod<[
        BridgeSettings: AddressLike,
        params: BridgeTypes.SendParamsStruct
    ], [
        void
    ], "view">;
    filters: {};
}
