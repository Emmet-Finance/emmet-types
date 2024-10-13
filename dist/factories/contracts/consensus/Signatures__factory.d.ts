import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type { Signatures, SignaturesInterface } from "../../../contracts/consensus/Signatures";
type SignaturesConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Signatures__factory extends ContractFactory {
    constructor(...args: SignaturesConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<Signatures & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): Signatures__factory;
    static readonly bytecode = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212200f6c830eba5220ba533ee79833e1dc1f9b3343827dd3966531149a1fe4302e6d64736f6c63430008180033";
    static readonly abi: readonly [{
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "txHash";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint128";
            readonly name: "returnToChainId";
            readonly type: "uint128";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "isSuccess";
            readonly type: "bool";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "message";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes[]";
            readonly name: "aggregatedSignature";
            readonly type: "bytes[]";
        }, {
            readonly indexed: false;
            readonly internalType: "string[]";
            readonly name: "signers";
            readonly type: "string[]";
        }];
        readonly name: "Feedback";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "txHash";
            readonly type: "bytes32";
        }];
        readonly name: "PartialSignature";
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
            readonly internalType: "uint256";
            readonly name: "nonce";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "uint128";
            readonly name: "toChainId";
            readonly type: "uint128";
        }, {
            readonly indexed: false;
            readonly internalType: "uint128";
            readonly name: "fromChainId";
            readonly type: "uint128";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes[]";
            readonly name: "aggregatedSignature";
            readonly type: "bytes[]";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes[]";
            readonly name: "signers";
            readonly type: "bytes[]";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "callData";
            readonly type: "bytes";
        }];
        readonly name: "Signed";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint128";
            readonly name: "chainId";
            readonly type: "uint128";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "chainName";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "operation";
            readonly type: "string";
        }];
        readonly name: "UpdatedNonEvmId";
        readonly type: "event";
    }];
    static createInterface(): SignaturesInterface;
    static connect(address: string, runner?: ContractRunner | null): Signatures;
}
export {};
