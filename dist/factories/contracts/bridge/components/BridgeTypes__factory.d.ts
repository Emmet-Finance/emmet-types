import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type { BridgeTypes, BridgeTypesInterface } from "../../../../contracts/bridge/components/BridgeTypes";
type BridgeTypesConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class BridgeTypes__factory extends ContractFactory {
    constructor(...args: BridgeTypesConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<BridgeTypes & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): BridgeTypes__factory;
    static readonly bytecode = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212206a2203e27ac5b909473c8d6c49726060c79fa9ae4f4719052c1eba3d8cf15fd364736f6c63430008180033";
    static readonly abi: readonly [{
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "ccmHash";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "uint128";
            readonly name: "fromChainId";
            readonly type: "uint128";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "foreignIndexOut";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "sentAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "receiveAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
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
        }];
        readonly name: "ReceivedInstallment";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "txHash";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "uint128";
            readonly name: "toChainId";
            readonly type: "uint128";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "sentAmount";
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
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "to";
            readonly type: "string";
        }];
        readonly name: "SentInstallment";
        readonly type: "event";
    }];
    static createInterface(): BridgeTypesInterface;
    static connect(address: string, runner?: ContractRunner | null): BridgeTypes;
}
export {};
