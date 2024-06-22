import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type { EmmetParameterValidation, EmmetParameterValidationInterface } from "../../../../contracts/libs/ParameterValidation.sol/EmmetParameterValidation";
type EmmetParameterValidationConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class EmmetParameterValidation__factory extends ContractFactory {
    constructor(...args: EmmetParameterValidationConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<EmmetParameterValidation & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): EmmetParameterValidation__factory;
    static readonly bytecode = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220092b30b4fa93d0a10aae575b71d8170dc89c76d10d4708915629a5dce06ea33264736f6c634300081a0033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "message";
            readonly type: "string";
        }];
        readonly name: "InsufficientAmount";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "message";
            readonly type: "string";
        }];
        readonly name: "ParameterValidationError";
        readonly type: "error";
    }];
    static createInterface(): EmmetParameterValidationInterface;
    static connect(address: string, runner?: ContractRunner | null): EmmetParameterValidation;
}
export {};
