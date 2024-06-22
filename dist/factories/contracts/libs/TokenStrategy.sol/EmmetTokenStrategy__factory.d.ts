import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type { EmmetTokenStrategy, EmmetTokenStrategyInterface } from "../../../../contracts/libs/TokenStrategy.sol/EmmetTokenStrategy";
type EmmetTokenStrategyConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class EmmetTokenStrategy__factory extends ContractFactory {
    constructor(...args: EmmetTokenStrategyConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<EmmetTokenStrategy & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): EmmetTokenStrategy__factory;
    static readonly bytecode = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220745be368b87d45c600902775685b07b57bb226749b3b8d74251b5a57e0af05ce64736f6c634300081a0033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "message";
            readonly type: "string";
        }];
        readonly name: "EmmetTokenStrategyError";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "toChainId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "fromToken";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "toToken";
            readonly type: "string";
        }, {
            readonly components: readonly [{
                readonly internalType: "enum EmmetTokenStrategy.Step[]";
                readonly name: "localSteps";
                readonly type: "uint8[]";
            }, {
                readonly internalType: "enum EmmetTokenStrategy.Step[]";
                readonly name: "foreignSteps";
                readonly type: "uint8[]";
            }];
            readonly indexed: false;
            readonly internalType: "struct EmmetTokenStrategy.CrossChainStrategy";
            readonly name: "oldStrategies";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "enum EmmetTokenStrategy.Step[]";
                readonly name: "localSteps";
                readonly type: "uint8[]";
            }, {
                readonly internalType: "enum EmmetTokenStrategy.Step[]";
                readonly name: "foreignSteps";
                readonly type: "uint8[]";
            }];
            readonly indexed: false;
            readonly internalType: "struct EmmetTokenStrategy.CrossChainStrategy";
            readonly name: "newStrategies";
            readonly type: "tuple";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "operation";
            readonly type: "string";
        }];
        readonly name: "CrossChainPathUpdate";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "fromToken";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "toToken";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "enum EmmetTokenStrategy.Step[]";
            readonly name: "oldLocalSteps";
            readonly type: "uint8[]";
        }, {
            readonly indexed: false;
            readonly internalType: "enum EmmetTokenStrategy.Step[]";
            readonly name: "newLocalSteps";
            readonly type: "uint8[]";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "operation";
            readonly type: "string";
        }];
        readonly name: "IncommingPathUpdate";
        readonly type: "event";
    }];
    static createInterface(): EmmetTokenStrategyInterface;
    static connect(address: string, runner?: ContractRunner | null): EmmetTokenStrategy;
}
export {};
