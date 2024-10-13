import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type { SigTester, SigTesterInterface } from "../../../../contracts/mock/Sig.sol/SigTester";
type SigTesterConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class SigTester__factory extends ContractFactory {
    constructor(...args: SigTesterConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<SigTester & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): SigTester__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b506105a6806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063786568da1461004657806397aba7f91461006e578063fa540801146100a6575b600080fd5b61005961005436600461043f565b6100c7565b60405190151581526020015b60405180910390f35b61008161007c3660046104d0565b6100dc565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610065565b6100b96100b4366004610517565b6100ef565b604051908152602001610065565b60006100d484848461014e565b949350505050565b60006100e88383610261565b9392505050565b6000610148826040517f19457468657265756d205369676e6564204d6573736167653a0a3332000000006020820152603c8101829052600090605c01604051602081830303815290604052805190602001209050919050565b92915050565b81516020830120600090816101b0826040517f19457468657265756d205369676e6564204d6573736167653a0a3332000000006020820152603c8101829052600090605c01604051602081830303815290604052805190602001209050919050565b90508373ffffffffffffffffffffffffffffffffffffffff166101d38288610261565b73ffffffffffffffffffffffffffffffffffffffff1614925082610258576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f5369676e617475726520766572696669636174696f6e206661696c656400000060448201526064015b60405180910390fd5b50509392505050565b600080600080610270856102e0565b6040805160008152602081018083528b905260ff8316918101919091526060810184905260808101839052929550909350915060019060a0016020604051602081039080840390855afa1580156102cb573d6000803e3d6000fd5b5050604051601f190151979650505050505050565b60008060008351604114610350576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f496e76616c6964207369676e6174757265206c656e6774680000000000000000604482015260640161024f565b50505060208101516040820151606083015160001a601b81101561037c57610379601b82610530565b90505b9193909250565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600082601f8301126103c357600080fd5b813567ffffffffffffffff808211156103de576103de610383565b604051601f8301601f19908116603f0116810190828211818310171561040657610406610383565b8160405283815286602085880101111561041f57600080fd5b836020870160208301376000602085830101528094505050505092915050565b60008060006060848603121561045457600080fd5b833567ffffffffffffffff8082111561046c57600080fd5b610478878388016103b2565b9450602086013591508082111561048e57600080fd5b5061049b868287016103b2565b925050604084013573ffffffffffffffffffffffffffffffffffffffff811681146104c557600080fd5b809150509250925092565b600080604083850312156104e357600080fd5b82359150602083013567ffffffffffffffff81111561050157600080fd5b61050d858286016103b2565b9150509250929050565b60006020828403121561052957600080fd5b5035919050565b60ff8181168382160190811115610148577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fdfea2646970667358221220dcef22b209e7e199edd3141bc0756437052b414205f6bcbc5cf41a810a3ea92764736f6c63430008180033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "dataHash";
            readonly type: "bytes32";
        }];
        readonly name: "getEthSignedMessageHash";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "ethSignedMessageHash";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes";
            readonly name: "signature";
            readonly type: "bytes";
        }];
        readonly name: "recoverSigner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "signer";
            readonly type: "address";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "signature";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }, {
            readonly internalType: "address";
            readonly name: "signer";
            readonly type: "address";
        }];
        readonly name: "verifySignature";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "success";
            readonly type: "bool";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }];
    static createInterface(): SigTesterInterface;
    static connect(address: string, runner?: ContractRunner | null): SigTester;
}
export {};
