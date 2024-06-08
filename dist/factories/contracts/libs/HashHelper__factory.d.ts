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
    static readonly bytecode = "0x6102de61003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100355760003560e01c8063cc39c3ec1461003a575b600080fd5b61004d610048366004610161565b61005f565b60405190815260200160405180910390f35b60008787878787878760405160200161007e979695949392919061024e565b604051602081830303815290604052805190602001209050979650505050505050565b803567ffffffffffffffff811681146100b957600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126100e557600080fd5b813567ffffffffffffffff80821115610100576101006100be565b604051601f8301601f19908116603f01168101908282118183101715610128576101286100be565b8160405283815286602085880101111561014157600080fd5b836020870160208301376000602085830101528094505050505092915050565b600080600080600080600060e0888a03121561017c57600080fd5b610185886100a1565b9650610193602089016100a1565b95506040880135945060608801359350608088013567ffffffffffffffff808211156101be57600080fd5b6101ca8b838c016100d4565b945060a08a01359150808211156101e057600080fd5b6101ec8b838c016100d4565b935060c08a013591508082111561020257600080fd5b5061020f8a828b016100d4565b91505092959891949750929550565b6000815160005b8181101561023f5760208185018101518683015201610225565b50600093019283525090919050565b600067ffffffffffffffff60c01b808a60c01b168352808960c01b1660088401525086601083015285603083015261029b61029561028f605085018861021e565b8661021e565b8461021e565b999850505050505050505056fea2646970667358221220689f99cc1b61010ac5462aedf8cf67f76eda76a7b2bebb380e9feace3249a5ac64736f6c63430008180033";
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
