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
    static readonly bytecode = "0x610339610039600b82828239805160001a607314602c57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100355760003560e01c8063cc39c3ec1461003a575b600080fd5b61004d61004836600461017d565b61005f565b60405190815260200160405180910390f35b60008787878787878760405160200161007e9796959493929190610276565b604051602081830303815290604052805190602001209050979650505050505050565b803567ffffffffffffffff811681146100b957600080fd5b919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600082601f8301126100fe57600080fd5b813567ffffffffffffffff811115610118576101186100be565b604051601f19603f601f19601f8501160116810181811067ffffffffffffffff82111715610148576101486100be565b60405281815283820160200185101561016057600080fd5b816020850160208301376000918101602001919091529392505050565b600080600080600080600060e0888a03121561019857600080fd5b6101a1886100a1565b96506101af602089016100a1565b95506040880135945060608801359350608088013567ffffffffffffffff8111156101d957600080fd5b6101e58a828b016100ed565b93505060a088013567ffffffffffffffff81111561020257600080fd5b61020e8a828b016100ed565b92505060c088013567ffffffffffffffff81111561022b57600080fd5b6102378a828b016100ed565b91505092959891949750929550565b6000815160005b81811015610267576020818501810151868301520161024d565b50600093019283525090919050565b7fffffffffffffffff0000000000000000000000000000000000000000000000008860c01b1681527fffffffffffffffff0000000000000000000000000000000000000000000000008760c01b16600882015285601082015284603082015260006102f66102f06102ea6050850188610246565b86610246565b84610246565b999850505050505050505056fea264697066735822122060166568a4ff63869de13c3d7bd44253c73b8009c232bac36d53822744be11c264736f6c634300081a0033";
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
