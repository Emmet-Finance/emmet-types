import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type { PriceFeedHelper, PriceFeedHelperInterface } from "../../../contracts/libs/PriceFeedHelper";
type PriceFeedHelperConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class PriceFeedHelper__factory extends ContractFactory {
    constructor(...args: PriceFeedHelperConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<PriceFeedHelper & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): PriceFeedHelper__factory;
    static readonly bytecode = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122093146e37dcba7a78b305a5a06bcb850781a909743f236fb30eb9fbd5fc4af48264736f6c634300081a0033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "int256";
            readonly name: "price";
            readonly type: "int256";
        }];
        readonly name: "NegativeTokenPrice";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "OutdatedPrice";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "symbol";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "oldAddress";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "newAddress";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "operation";
            readonly type: "string";
        }];
        readonly name: "PriceFeedUpdate";
        readonly type: "event";
    }];
    static createInterface(): PriceFeedHelperInterface;
    static connect(address: string, runner?: ContractRunner | null): PriceFeedHelper;
}
export {};
