import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../../../../../common";
export interface EmmetLiquidityPoolV2Interface extends Interface {
    getFunction(nameOrSignature: "SECONDS_IN_A_YEAR" | "allowance" | "approve" | "apy" | "balanceOf" | "boost" | "bridge" | "decimals" | "deposit" | "fee" | "getData" | "getTokenFee" | "name" | "percentDecimals" | "protocolFeeShare" | "releaseTokens" | "symbol" | "totalSupply" | "transfer" | "transferFrom" | "treasury" | "underlying" | "updateBridge" | "updateFees" | "updateTreasury" | "withdraw" | "withdrawRebalance"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "Approval" | "Rebalanced" | "Released" | "Transfer"): EventFragment;
    encodeFunctionData(functionFragment: "SECONDS_IN_A_YEAR", values?: undefined): string;
    encodeFunctionData(functionFragment: "allowance", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "approve", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "apy", values?: undefined): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "boost", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "bridge", values?: undefined): string;
    encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "deposit", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "fee", values?: undefined): string;
    encodeFunctionData(functionFragment: "getData", values?: undefined): string;
    encodeFunctionData(functionFragment: "getTokenFee", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "percentDecimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "protocolFeeShare", values?: undefined): string;
    encodeFunctionData(functionFragment: "releaseTokens", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "transfer", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [AddressLike, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "treasury", values?: undefined): string;
    encodeFunctionData(functionFragment: "underlying", values?: undefined): string;
    encodeFunctionData(functionFragment: "updateBridge", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "updateFees", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "updateTreasury", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "withdraw", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdrawRebalance", values?: undefined): string;
    decodeFunctionResult(functionFragment: "SECONDS_IN_A_YEAR", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "apy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "boost", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bridge", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTokenFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "percentDecimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "protocolFeeShare", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "releaseTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "treasury", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "underlying", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateBridge", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateTreasury", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawRebalance", data: BytesLike): Result;
}
export declare namespace ApprovalEvent {
    type InputTuple = [
        owner: AddressLike,
        spender: AddressLike,
        value: BigNumberish
    ];
    type OutputTuple = [owner: string, spender: string, value: bigint];
    interface OutputObject {
        owner: string;
        spender: string;
        value: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace RebalancedEvent {
    type InputTuple = [excess: BigNumberish];
    type OutputTuple = [excess: bigint];
    interface OutputObject {
        excess: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace ReleasedEvent {
    type InputTuple = [
        to: AddressLike,
        amount: BigNumberish,
        fee: BigNumberish,
        protocolFee: BigNumberish
    ];
    type OutputTuple = [
        to: string,
        amount: bigint,
        fee: bigint,
        protocolFee: bigint
    ];
    interface OutputObject {
        to: string;
        amount: bigint;
        fee: bigint;
        protocolFee: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace TransferEvent {
    type InputTuple = [
        from: AddressLike,
        to: AddressLike,
        value: BigNumberish
    ];
    type OutputTuple = [from: string, to: string, value: bigint];
    interface OutputObject {
        from: string;
        to: string;
        value: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface EmmetLiquidityPoolV2 extends BaseContract {
    connect(runner?: ContractRunner | null): EmmetLiquidityPoolV2;
    waitForDeployment(): Promise<this>;
    interface: EmmetLiquidityPoolV2Interface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    SECONDS_IN_A_YEAR: TypedContractMethod<[], [bigint], "view">;
    allowance: TypedContractMethod<[
        owner: AddressLike,
        spender: AddressLike
    ], [
        bigint
    ], "view">;
    approve: TypedContractMethod<[
        spender: AddressLike,
        value: BigNumberish
    ], [
        boolean
    ], "nonpayable">;
    apy: TypedContractMethod<[], [bigint], "view">;
    balanceOf: TypedContractMethod<[account: AddressLike], [bigint], "view">;
    boost: TypedContractMethod<[amount: BigNumberish], [void], "nonpayable">;
    bridge: TypedContractMethod<[], [string], "view">;
    decimals: TypedContractMethod<[], [bigint], "view">;
    deposit: TypedContractMethod<[amount: BigNumberish], [void], "nonpayable">;
    fee: TypedContractMethod<[], [bigint], "view">;
    getData: TypedContractMethod<[
    ], [
        [
            bigint,
            bigint,
            bigint,
            bigint
        ] & {
            apy_: bigint;
            balance: bigint;
            tokenDecimals: bigint;
            supply: bigint;
        }
    ], "view">;
    getTokenFee: TypedContractMethod<[amount: BigNumberish], [bigint], "view">;
    name: TypedContractMethod<[], [string], "view">;
    percentDecimals: TypedContractMethod<[], [bigint], "view">;
    protocolFeeShare: TypedContractMethod<[], [bigint], "view">;
    releaseTokens: TypedContractMethod<[
        to: AddressLike,
        amount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    symbol: TypedContractMethod<[], [string], "view">;
    totalSupply: TypedContractMethod<[], [bigint], "view">;
    transfer: TypedContractMethod<[
        to: AddressLike,
        value: BigNumberish
    ], [
        boolean
    ], "nonpayable">;
    transferFrom: TypedContractMethod<[
        from: AddressLike,
        to: AddressLike,
        value: BigNumberish
    ], [
        boolean
    ], "nonpayable">;
    treasury: TypedContractMethod<[], [string], "view">;
    underlying: TypedContractMethod<[], [string], "view">;
    updateBridge: TypedContractMethod<[
        bridge_: AddressLike
    ], [
        void
    ], "nonpayable">;
    updateFees: TypedContractMethod<[
        fee_: BigNumberish,
        protocolFeeShare_: BigNumberish
    ], [
        void
    ], "nonpayable">;
    updateTreasury: TypedContractMethod<[
        treasury_: AddressLike
    ], [
        void
    ], "nonpayable">;
    withdraw: TypedContractMethod<[], [void], "nonpayable">;
    withdrawRebalance: TypedContractMethod<[], [void], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "SECONDS_IN_A_YEAR"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "allowance"): TypedContractMethod<[
        owner: AddressLike,
        spender: AddressLike
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "approve"): TypedContractMethod<[
        spender: AddressLike,
        value: BigNumberish
    ], [
        boolean
    ], "nonpayable">;
    getFunction(nameOrSignature: "apy"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "balanceOf"): TypedContractMethod<[account: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "boost"): TypedContractMethod<[amount: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "bridge"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "decimals"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "deposit"): TypedContractMethod<[amount: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "fee"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "getData"): TypedContractMethod<[
    ], [
        [
            bigint,
            bigint,
            bigint,
            bigint
        ] & {
            apy_: bigint;
            balance: bigint;
            tokenDecimals: bigint;
            supply: bigint;
        }
    ], "view">;
    getFunction(nameOrSignature: "getTokenFee"): TypedContractMethod<[amount: BigNumberish], [bigint], "view">;
    getFunction(nameOrSignature: "name"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "percentDecimals"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "protocolFeeShare"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "releaseTokens"): TypedContractMethod<[
        to: AddressLike,
        amount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "symbol"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "totalSupply"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "transfer"): TypedContractMethod<[
        to: AddressLike,
        value: BigNumberish
    ], [
        boolean
    ], "nonpayable">;
    getFunction(nameOrSignature: "transferFrom"): TypedContractMethod<[
        from: AddressLike,
        to: AddressLike,
        value: BigNumberish
    ], [
        boolean
    ], "nonpayable">;
    getFunction(nameOrSignature: "treasury"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "underlying"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "updateBridge"): TypedContractMethod<[bridge_: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "updateFees"): TypedContractMethod<[
        fee_: BigNumberish,
        protocolFeeShare_: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "updateTreasury"): TypedContractMethod<[treasury_: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "withdraw"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "withdrawRebalance"): TypedContractMethod<[], [void], "nonpayable">;
    getEvent(key: "Approval"): TypedContractEvent<ApprovalEvent.InputTuple, ApprovalEvent.OutputTuple, ApprovalEvent.OutputObject>;
    getEvent(key: "Rebalanced"): TypedContractEvent<RebalancedEvent.InputTuple, RebalancedEvent.OutputTuple, RebalancedEvent.OutputObject>;
    getEvent(key: "Released"): TypedContractEvent<ReleasedEvent.InputTuple, ReleasedEvent.OutputTuple, ReleasedEvent.OutputObject>;
    getEvent(key: "Transfer"): TypedContractEvent<TransferEvent.InputTuple, TransferEvent.OutputTuple, TransferEvent.OutputObject>;
    filters: {
        "Approval(address,address,uint256)": TypedContractEvent<ApprovalEvent.InputTuple, ApprovalEvent.OutputTuple, ApprovalEvent.OutputObject>;
        Approval: TypedContractEvent<ApprovalEvent.InputTuple, ApprovalEvent.OutputTuple, ApprovalEvent.OutputObject>;
        "Rebalanced(uint256)": TypedContractEvent<RebalancedEvent.InputTuple, RebalancedEvent.OutputTuple, RebalancedEvent.OutputObject>;
        Rebalanced: TypedContractEvent<RebalancedEvent.InputTuple, RebalancedEvent.OutputTuple, RebalancedEvent.OutputObject>;
        "Released(address,uint256,uint256,uint256)": TypedContractEvent<ReleasedEvent.InputTuple, ReleasedEvent.OutputTuple, ReleasedEvent.OutputObject>;
        Released: TypedContractEvent<ReleasedEvent.InputTuple, ReleasedEvent.OutputTuple, ReleasedEvent.OutputObject>;
        "Transfer(address,address,uint256)": TypedContractEvent<TransferEvent.InputTuple, TransferEvent.OutputTuple, TransferEvent.OutputObject>;
        Transfer: TypedContractEvent<TransferEvent.InputTuple, TransferEvent.OutputTuple, TransferEvent.OutputObject>;
    };
}
