import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type { HashHelper, HashHelperInterface } from "../../../contracts/libs/HashHelper";
type HashHelperConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class HashHelper__factory extends ContractFactory {
    constructor(...args: HashHelperConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<HashHelper & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): HashHelper__factory;
    static readonly bytecode = "0x61032a61003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100355760003560e01c8063cc39c3ec1461003a575b600080fd5b61004d610048366004610198565b61005f565b60405190815260200160405180910390f35b60008787878787878760405160200161007e9796959493929190610285565b604051602081830303815290604052805190602001209050979650505050505050565b803567ffffffffffffffff811681146100b957600080fd5b919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600082601f8301126100fe57600080fd5b813567ffffffffffffffff80821115610119576101196100be565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190828211818310171561015f5761015f6100be565b8160405283815286602085880101111561017857600080fd5b836020870160208301376000602085830101528094505050505092915050565b600080600080600080600060e0888a0312156101b357600080fd5b6101bc886100a1565b96506101ca602089016100a1565b95506040880135945060608801359350608088013567ffffffffffffffff808211156101f557600080fd5b6102018b838c016100ed565b945060a08a013591508082111561021757600080fd5b6102238b838c016100ed565b935060c08a013591508082111561023957600080fd5b506102468a828b016100ed565b91505092959891949750929550565b6000815160005b81811015610276576020818501810151868301520161025c565b50600093019283525090919050565b60007fffffffffffffffff000000000000000000000000000000000000000000000000808a60c01b168352808960c01b166008840152508660108301528560308301526102e76102e16102db6050850188610255565b86610255565b84610255565b999850505050505050505056fea26469706673582212206ece39038091d2359238e1f2356f44df0934dd34f578ff600989eb46a55ad2d964736f6c63430008180033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "uint64";
            readonly name: "fromChainId";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint64";
            readonly name: "toChainid";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "nonce";
            readonly type: "uint256";
        }, {
            readonly internalType: "string";
            readonly name: "fromToken";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "toToken";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "recipient";
            readonly type: "string";
        }];
        readonly name: "generateTransactionHash";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "txHash";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }];
    static createInterface(): HashHelperInterface;
    static connect(address: string, runner?: ContractRunner | null): HashHelper;
}
export {};
