import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type { BalancerHelper, BalancerHelperInterface } from "../../../contracts/libs/BalancerHelper";
type BalancerHelperConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class BalancerHelper__factory extends ContractFactory {
    constructor(...args: BalancerHelperConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<BalancerHelper & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): BalancerHelper__factory;
    static readonly bytecode = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220250660030118787c0d58c65af332e660689086b86335a906b725f2a8604b785264736f6c63430008180033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "message";
            readonly type: "string";
        }];
        readonly name: "BalancerHelperError";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "tokenIn";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "tokenOut";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "pool";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "operation";
            readonly type: "string";
        }];
        readonly name: "BalancerPoolUpdate";
        readonly type: "event";
    }];
    static createInterface(): BalancerHelperInterface;
    static connect(address: string, runner?: ContractRunner | null): BalancerHelper;
}
export {};
