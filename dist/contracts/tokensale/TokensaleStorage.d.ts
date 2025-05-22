import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../../common";
export interface TokensaleStorageInterface extends Interface {
    getFunction(nameOrSignature: "INTERVAL" | "LOCK_PERIOD" | "RELEASE" | "cash" | "computeRefKey" | "decimals" | "discountGroups" | "discounts" | "getRefOwner" | "locked" | "references" | "rewards1" | "rewards2" | "sold" | "users" | "vesting" | "vestingStart"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "CashWithdrawn" | "ReferenceCreated" | "TokensClaimed" | "TokensPurchased" | "TokensWithdrawn"): EventFragment;
    encodeFunctionData(functionFragment: "INTERVAL", values?: undefined): string;
    encodeFunctionData(functionFragment: "LOCK_PERIOD", values?: undefined): string;
    encodeFunctionData(functionFragment: "RELEASE", values?: undefined): string;
    encodeFunctionData(functionFragment: "cash", values?: undefined): string;
    encodeFunctionData(functionFragment: "computeRefKey", values: [string]): string;
    encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "discountGroups", values?: undefined): string;
    encodeFunctionData(functionFragment: "discounts", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getRefOwner", values: [string]): string;
    encodeFunctionData(functionFragment: "locked", values?: undefined): string;
    encodeFunctionData(functionFragment: "references", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "rewards1", values?: undefined): string;
    encodeFunctionData(functionFragment: "rewards2", values?: undefined): string;
    encodeFunctionData(functionFragment: "sold", values?: undefined): string;
    encodeFunctionData(functionFragment: "users", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "vesting", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "vestingStart", values?: undefined): string;
    decodeFunctionResult(functionFragment: "INTERVAL", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "LOCK_PERIOD", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "RELEASE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "computeRefKey", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "discountGroups", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "discounts", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRefOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "locked", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "references", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewards1", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewards2", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sold", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "users", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "vesting", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "vestingStart", data: BytesLike): Result;
}
export declare namespace CashWithdrawnEvent {
    type InputTuple = [amount: BigNumberish];
    type OutputTuple = [amount: bigint];
    interface OutputObject {
        amount: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace ReferenceCreatedEvent {
    type InputTuple = [owner: AddressLike, ref: string];
    type OutputTuple = [owner: string, ref: string];
    interface OutputObject {
        owner: string;
        ref: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace TokensClaimedEvent {
    type InputTuple = [buyer: AddressLike, amount: BigNumberish];
    type OutputTuple = [buyer: string, amount: bigint];
    interface OutputObject {
        buyer: string;
        amount: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace TokensPurchasedEvent {
    type InputTuple = [
        buyer: AddressLike,
        released: BigNumberish,
        locked: BigNumberish
    ];
    type OutputTuple = [buyer: string, released: bigint, locked: bigint];
    interface OutputObject {
        buyer: string;
        released: bigint;
        locked: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace TokensWithdrawnEvent {
    type InputTuple = [amount: BigNumberish];
    type OutputTuple = [amount: bigint];
    interface OutputObject {
        amount: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface TokensaleStorage extends BaseContract {
    connect(runner?: ContractRunner | null): TokensaleStorage;
    waitForDeployment(): Promise<this>;
    interface: TokensaleStorageInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    INTERVAL: TypedContractMethod<[], [bigint], "view">;
    LOCK_PERIOD: TypedContractMethod<[], [bigint], "view">;
    RELEASE: TypedContractMethod<[], [bigint], "view">;
    cash: TypedContractMethod<[], [string], "view">;
    computeRefKey: TypedContractMethod<[ref: string], [string], "view">;
    decimals: TypedContractMethod<[
    ], [
        [
            bigint,
            bigint,
            bigint
        ] & {
            soldDecimals: bigint;
            cashDecimals: bigint;
            delta: bigint;
        }
    ], "view">;
    discountGroups: TypedContractMethod<[], [bigint], "view">;
    discounts: TypedContractMethod<[
        arg0: BigNumberish
    ], [
        [bigint, bigint, bigint] & {
            min: bigint;
            max: bigint;
            price: bigint;
        }
    ], "view">;
    getRefOwner: TypedContractMethod<[ref: string], [string], "view">;
    locked: TypedContractMethod<[], [bigint], "view">;
    references: TypedContractMethod<[ref: BytesLike], [string], "view">;
    rewards1: TypedContractMethod<[], [bigint], "view">;
    rewards2: TypedContractMethod<[], [bigint], "view">;
    sold: TypedContractMethod<[], [string], "view">;
    users: TypedContractMethod<[user: AddressLike], [string], "view">;
    vesting: TypedContractMethod<[
        user: AddressLike
    ], [
        [
            bigint,
            bigint,
            bigint
        ] & {
            start: bigint;
            locked: bigint;
            claimed: bigint;
        }
    ], "view">;
    vestingStart: TypedContractMethod<[], [bigint], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "INTERVAL"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "LOCK_PERIOD"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "RELEASE"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "cash"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "computeRefKey"): TypedContractMethod<[ref: string], [string], "view">;
    getFunction(nameOrSignature: "decimals"): TypedContractMethod<[
    ], [
        [
            bigint,
            bigint,
            bigint
        ] & {
            soldDecimals: bigint;
            cashDecimals: bigint;
            delta: bigint;
        }
    ], "view">;
    getFunction(nameOrSignature: "discountGroups"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "discounts"): TypedContractMethod<[
        arg0: BigNumberish
    ], [
        [bigint, bigint, bigint] & {
            min: bigint;
            max: bigint;
            price: bigint;
        }
    ], "view">;
    getFunction(nameOrSignature: "getRefOwner"): TypedContractMethod<[ref: string], [string], "view">;
    getFunction(nameOrSignature: "locked"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "references"): TypedContractMethod<[ref: BytesLike], [string], "view">;
    getFunction(nameOrSignature: "rewards1"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "rewards2"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "sold"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "users"): TypedContractMethod<[user: AddressLike], [string], "view">;
    getFunction(nameOrSignature: "vesting"): TypedContractMethod<[
        user: AddressLike
    ], [
        [
            bigint,
            bigint,
            bigint
        ] & {
            start: bigint;
            locked: bigint;
            claimed: bigint;
        }
    ], "view">;
    getFunction(nameOrSignature: "vestingStart"): TypedContractMethod<[], [bigint], "view">;
    getEvent(key: "CashWithdrawn"): TypedContractEvent<CashWithdrawnEvent.InputTuple, CashWithdrawnEvent.OutputTuple, CashWithdrawnEvent.OutputObject>;
    getEvent(key: "ReferenceCreated"): TypedContractEvent<ReferenceCreatedEvent.InputTuple, ReferenceCreatedEvent.OutputTuple, ReferenceCreatedEvent.OutputObject>;
    getEvent(key: "TokensClaimed"): TypedContractEvent<TokensClaimedEvent.InputTuple, TokensClaimedEvent.OutputTuple, TokensClaimedEvent.OutputObject>;
    getEvent(key: "TokensPurchased"): TypedContractEvent<TokensPurchasedEvent.InputTuple, TokensPurchasedEvent.OutputTuple, TokensPurchasedEvent.OutputObject>;
    getEvent(key: "TokensWithdrawn"): TypedContractEvent<TokensWithdrawnEvent.InputTuple, TokensWithdrawnEvent.OutputTuple, TokensWithdrawnEvent.OutputObject>;
    filters: {
        "CashWithdrawn(uint256)": TypedContractEvent<CashWithdrawnEvent.InputTuple, CashWithdrawnEvent.OutputTuple, CashWithdrawnEvent.OutputObject>;
        CashWithdrawn: TypedContractEvent<CashWithdrawnEvent.InputTuple, CashWithdrawnEvent.OutputTuple, CashWithdrawnEvent.OutputObject>;
        "ReferenceCreated(address,string)": TypedContractEvent<ReferenceCreatedEvent.InputTuple, ReferenceCreatedEvent.OutputTuple, ReferenceCreatedEvent.OutputObject>;
        ReferenceCreated: TypedContractEvent<ReferenceCreatedEvent.InputTuple, ReferenceCreatedEvent.OutputTuple, ReferenceCreatedEvent.OutputObject>;
        "TokensClaimed(address,uint256)": TypedContractEvent<TokensClaimedEvent.InputTuple, TokensClaimedEvent.OutputTuple, TokensClaimedEvent.OutputObject>;
        TokensClaimed: TypedContractEvent<TokensClaimedEvent.InputTuple, TokensClaimedEvent.OutputTuple, TokensClaimedEvent.OutputObject>;
        "TokensPurchased(address,uint256,uint256)": TypedContractEvent<TokensPurchasedEvent.InputTuple, TokensPurchasedEvent.OutputTuple, TokensPurchasedEvent.OutputObject>;
        TokensPurchased: TypedContractEvent<TokensPurchasedEvent.InputTuple, TokensPurchasedEvent.OutputTuple, TokensPurchasedEvent.OutputObject>;
        "TokensWithdrawn(uint256)": TypedContractEvent<TokensWithdrawnEvent.InputTuple, TokensWithdrawnEvent.OutputTuple, TokensWithdrawnEvent.OutputObject>;
        TokensWithdrawn: TypedContractEvent<TokensWithdrawnEvent.InputTuple, TokensWithdrawnEvent.OutputTuple, TokensWithdrawnEvent.OutputObject>;
    };
}
