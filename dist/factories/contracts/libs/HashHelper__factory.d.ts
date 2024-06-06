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
    static readonly bytecode = "0x61031061003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100355760003560e01c806366492e571461003a575b600080fd5b61004d610048366004610164565b61005f565b60405190815260200160405180910390f35b60008888888888888888604051602001610080989796959493929190610276565b60405160208183030381529060405280519060200120905098975050505050505050565b803567ffffffffffffffff811681146100bc57600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126100e857600080fd5b813567ffffffffffffffff80821115610103576101036100c1565b604051601f8301601f19908116603f0116810190828211818310171561012b5761012b6100c1565b8160405283815286602085880101111561014457600080fd5b836020870160208301376000602085830101528094505050505092915050565b600080600080600080600080610100898b03121561018157600080fd5b61018a896100a4565b975061019860208a016100a4565b96506040890135955060608901359450608089013567ffffffffffffffff808211156101c357600080fd5b6101cf8c838d016100d7565b955060a08b01359150808211156101e557600080fd5b6101f18c838d016100d7565b945060c08b013591508082111561020757600080fd5b6102138c838d016100d7565b935060e08b013591508082111561022957600080fd5b506102368b828c016100d7565b9150509295985092959890939650565b6000815160005b81811015610267576020818501810151868301520161024d565b50600093019283525090919050565b600067ffffffffffffffff60c01b808b60c01b168352808a60c01b166008840152508760108301528660308301526102cc6102c66102c06102ba605086018a610246565b88610246565b86610246565b84610246565b9a995050505050505050505056fea26469706673582212206fb81fb8b87eb0fb19bca83bc28ed35ec36edd0857893f30b2546ea85b212a6964736f6c63430008180033";
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
        }, {
            readonly internalType: "string";
            readonly name: "fromChainHash";
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
