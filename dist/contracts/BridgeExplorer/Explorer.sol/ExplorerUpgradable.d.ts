import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../../../common";
export declare namespace ExplorerUpgradable {
    type ExplorerTransactionStruct = {
        txHash: BytesLike;
        start: BigNumberish;
        finish: BigNumberish;
        sentAmount: BigNumberish;
        receiveAmount: BigNumberish;
        sentInUSD: BigNumberish;
        receivedInUSD: BigNumberish;
        fromChainId: BigNumberish;
        toChainId: BigNumberish;
        protocolFee: BigNumberish;
        compensation: BigNumberish;
        sender: string;
        recipient: string;
        fromToken: string;
        toToken: string;
    };
    type ExplorerTransactionStructOutput = [
        txHash: string,
        start: bigint,
        finish: bigint,
        sentAmount: bigint,
        receiveAmount: bigint,
        sentInUSD: bigint,
        receivedInUSD: bigint,
        fromChainId: bigint,
        toChainId: bigint,
        protocolFee: bigint,
        compensation: bigint,
        sender: string,
        recipient: string,
        fromToken: string,
        toToken: string
    ] & {
        txHash: string;
        start: bigint;
        finish: bigint;
        sentAmount: bigint;
        receiveAmount: bigint;
        sentInUSD: bigint;
        receivedInUSD: bigint;
        fromChainId: bigint;
        toChainId: bigint;
        protocolFee: bigint;
        compensation: bigint;
        sender: string;
        recipient: string;
        fromToken: string;
        toToken: string;
    };
}
export interface ExplorerUpgradableInterface extends Interface {
    getFunction(nameOrSignature: "ADMIN_ROLE" | "consensus" | "convertToUsd" | "dataAddress" | "getPriceAndDecimals" | "getPriceDecimals" | "getStats" | "getTokenPrice" | "getTransaction" | "getTransactions" | "protocolFee" | "updateAdmin" | "updateConsensus" | "updateData" | "updateProtocolFee" | "updateTransaction"): FunctionFragment;
    encodeFunctionData(functionFragment: "ADMIN_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "consensus", values?: undefined): string;
    encodeFunctionData(functionFragment: "convertToUsd", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "dataAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "getPriceAndDecimals", values: [string]): string;
    encodeFunctionData(functionFragment: "getPriceDecimals", values: [string]): string;
    encodeFunctionData(functionFragment: "getStats", values?: undefined): string;
    encodeFunctionData(functionFragment: "getTokenPrice", values: [string]): string;
    encodeFunctionData(functionFragment: "getTransaction", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getTransactions", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "protocolFee", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "updateAdmin", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "updateConsensus", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "updateData", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "updateProtocolFee", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "updateTransaction", values: [BytesLike]): string;
    decodeFunctionResult(functionFragment: "ADMIN_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "consensus", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "convertToUsd", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "dataAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPriceAndDecimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPriceDecimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getStats", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTokenPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTransaction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTransactions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "protocolFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateConsensus", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateProtocolFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateTransaction", data: BytesLike): Result;
}
export interface ExplorerUpgradable extends BaseContract {
    connect(runner?: ContractRunner | null): ExplorerUpgradable;
    waitForDeployment(): Promise<this>;
    interface: ExplorerUpgradableInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    ADMIN_ROLE: TypedContractMethod<[], [string], "view">;
    consensus: TypedContractMethod<[], [string], "view">;
    convertToUsd: TypedContractMethod<[
        symbol: string,
        amount: BigNumberish
    ], [
        bigint
    ], "view">;
    dataAddress: TypedContractMethod<[], [string], "view">;
    getPriceAndDecimals: TypedContractMethod<[
        symbol: string
    ], [
        [bigint, bigint] & {
            price: bigint;
            decimals: bigint;
        }
    ], "view">;
    getPriceDecimals: TypedContractMethod<[symbol: string], [bigint], "view">;
    getStats: TypedContractMethod<[
    ], [
        [
            bigint,
            bigint,
            bigint,
            bigint
        ] & {
            bridgedInUSD: bigint;
            collectedFees: bigint;
            totalTransactions: bigint;
            uniqueAccounts: bigint;
        }
    ], "view">;
    getTokenPrice: TypedContractMethod<[symbol: string], [bigint], "view">;
    getTransaction: TypedContractMethod<[
        txHash: BytesLike
    ], [
        ExplorerUpgradable.ExplorerTransactionStructOutput
    ], "view">;
    getTransactions: TypedContractMethod<[
        batch: BigNumberish,
        offset: BigNumberish
    ], [
        ExplorerUpgradable.ExplorerTransactionStructOutput[]
    ], "view">;
    protocolFee: TypedContractMethod<[chainId: BigNumberish], [bigint], "view">;
    updateAdmin: TypedContractMethod<[
        newAdmin: AddressLike
    ], [
        void
    ], "nonpayable">;
    updateConsensus: TypedContractMethod<[
        newConsensus: AddressLike
    ], [
        void
    ], "nonpayable">;
    updateData: TypedContractMethod<[newData: AddressLike], [void], "nonpayable">;
    updateProtocolFee: TypedContractMethod<[
        chainId: BigNumberish,
        newProtocolFee: BigNumberish
    ], [
        void
    ], "nonpayable">;
    updateTransaction: TypedContractMethod<[
        txHash: BytesLike
    ], [
        void
    ], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "ADMIN_ROLE"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "consensus"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "convertToUsd"): TypedContractMethod<[
        symbol: string,
        amount: BigNumberish
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "dataAddress"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "getPriceAndDecimals"): TypedContractMethod<[
        symbol: string
    ], [
        [bigint, bigint] & {
            price: bigint;
            decimals: bigint;
        }
    ], "view">;
    getFunction(nameOrSignature: "getPriceDecimals"): TypedContractMethod<[symbol: string], [bigint], "view">;
    getFunction(nameOrSignature: "getStats"): TypedContractMethod<[
    ], [
        [
            bigint,
            bigint,
            bigint,
            bigint
        ] & {
            bridgedInUSD: bigint;
            collectedFees: bigint;
            totalTransactions: bigint;
            uniqueAccounts: bigint;
        }
    ], "view">;
    getFunction(nameOrSignature: "getTokenPrice"): TypedContractMethod<[symbol: string], [bigint], "view">;
    getFunction(nameOrSignature: "getTransaction"): TypedContractMethod<[
        txHash: BytesLike
    ], [
        ExplorerUpgradable.ExplorerTransactionStructOutput
    ], "view">;
    getFunction(nameOrSignature: "getTransactions"): TypedContractMethod<[
        batch: BigNumberish,
        offset: BigNumberish
    ], [
        ExplorerUpgradable.ExplorerTransactionStructOutput[]
    ], "view">;
    getFunction(nameOrSignature: "protocolFee"): TypedContractMethod<[chainId: BigNumberish], [bigint], "view">;
    getFunction(nameOrSignature: "updateAdmin"): TypedContractMethod<[newAdmin: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "updateConsensus"): TypedContractMethod<[newConsensus: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "updateData"): TypedContractMethod<[newData: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "updateProtocolFee"): TypedContractMethod<[
        chainId: BigNumberish,
        newProtocolFee: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "updateTransaction"): TypedContractMethod<[txHash: BytesLike], [void], "nonpayable">;
    filters: {};
}
