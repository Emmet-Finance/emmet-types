import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type { GasFees, GasFeesInterface } from "../../../contracts/oracles/GasFees";
type GasFeesConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class GasFees__factory extends ContractFactory {
    constructor(...args: GasFeesConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<GasFees & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): GasFees__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5061001c60003361004d565b506100477f241ecf16d79d0f8dbfb92cbc07fe17840425976cf0667f022fe9877caa831b083361004d565b506100f9565b6000828152602081815260408083206001600160a01b038516845290915281205460ff166100ef576000838152602081815260408083206001600160a01b03861684529091529020805460ff191660011790556100a73390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45060016100f3565b5060005b92915050565b610c3b806101086000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c8063c6bdd530116100a2578063dbb9307f11610071578063dbb9307f1461021e578063dff1056d14610231578063ebf259e714610244578063ec87621c14610298578063f8d627f3146102ad57600080fd5b8063c6bdd530146101d2578063ca80aad3146101e5578063d121cef4146101f8578063d547741f1461020b57600080fd5b806336568abe116100de57806336568abe1461019157806355574dbe146101a457806391d14854146101b7578063a217fddf146101ca57600080fd5b806301ffc9a7146101105780631281b79314610138578063248a9ca31461014d5780632f2ff15d1461017e575b600080fd5b61012361011e3660046108e1565b6102c0565b60405190151581526020015b60405180910390f35b61014b61014636600461091f565b610321565b005b61017061015b366004610954565b60009081526020819052604090206001015490565b60405190815260200161012f565b61014b61018c36600461096d565b61040b565b61014b61019f36600461096d565b610436565b604080514881523a60208201520161012f565b6101236101c536600461096d565b61046e565b610170600081565b6101706101e03660046109a9565b610497565b61014b6101f33660046109a9565b6104f8565b6101706102063660046109e9565b6105c7565b61014b61021936600461096d565b61064b565b61017061022c366004610aba565b610670565b61017061023f3660046109e9565b6106b9565b610278610252366004610954565b6003602052600090815260409020546001600160801b0380821691600160801b90041682565b604080516001600160801b0393841681529290911660208301520161012f565b610170600080516020610be683398151915281565b61014b6102bb366004610afd565b610704565b60006001600160e01b031982166308d06c6d60e31b14806102f157506001600160e01b0319821663084a3cc560e21b145b8061030c57506001600160e01b03198216630f16e5b960e41b145b8061031b575061031b82610761565b92915050565b600080516020610be683398151915261033981610796565b60008481526002602052604081208185600d81111561035a5761035a610b39565b600d81111561036b5761036b610b39565b81526020019081526020016000205490508260026000878152602001908152602001600020600086600d8111156103a4576103a4610b39565b600d8111156103b5576103b5610b39565b8152602001908152602001600020819055507fa74602ff50c7fb0dee46d88bc01a3144c0a0fe84b4c0f8c744bda8ecebe9cd5a858583866040516103fc9493929190610b4f565b60405180910390a15050505050565b60008281526020819052604090206001015461042681610796565b61043083836107a3565b50505050565b6001600160a01b038116331461045f5760405163334bd91960e11b815260040160405180910390fd5b6104698282610835565b505050565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b60006104a38248610ba5565b6001600085600d8111156104b9576104b9610b39565b600d8111156104ca576104ca610b39565b8152602001908152602001600020546104e39190610bb8565b6104f190633b9aca00610bb8565b9392505050565b600080516020610be683398151915261051081610796565b60006001600085600d81111561052857610528610b39565b600d81111561053957610539610b39565b8152602001908152602001600020549050826001600086600d81111561056157610561610b39565b600d81111561057257610572610b39565b8152602001908152602001600020819055507fa74602ff50c7fb0dee46d88bc01a3144c0a0fe84b4c0f8c744bda8ecebe9cd5a468583866040516105b99493929190610b4f565b60405180910390a150505050565b6000828152600260205260408120815b8351811015610643578160008583815181106105f5576105f5610bcf565b6020026020010151600d81111561060e5761060e610b39565b600d81111561061f5761061f610b39565b815260200190815260200160002054836106399190610ba5565b92506001016105d7565b505092915050565b60008281526020819052604090206001015461066681610796565b6104308383610835565b60008281526002602052604081208183600d81111561069157610691610b39565b600d8111156106a2576106a2610b39565b815260200190815260200160002054905092915050565b6000805b82518110156106fd576106e98382815181106106db576106db610bcf565b602002602001015185610497565b6106f39083610ba5565b91506001016106bd565b5092915050565b600080516020610be683398151915261071c81610796565b506040805180820182526001600160801b03938416815291831660208084019182526000958652600390529320905192518216600160801b0292909116919091179055565b60006001600160e01b03198216637965db0b60e01b148061031b57506301ffc9a760e01b6001600160e01b031983161461031b565b6107a081336108a0565b50565b60006107af838361046e565b61082d576000838152602081815260408083206001600160a01b03861684529091529020805460ff191660011790556107e53390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a450600161031b565b50600061031b565b6000610841838361046e565b1561082d576000838152602081815260408083206001600160a01b0386168085529252808320805460ff1916905551339286917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a450600161031b565b6108aa828261046e565b6108dd5760405163e2517d3f60e01b81526001600160a01b03821660048201526024810183905260440160405180910390fd5b5050565b6000602082840312156108f357600080fd5b81356001600160e01b0319811681146104f157600080fd5b8035600e811061091a57600080fd5b919050565b60008060006060848603121561093457600080fd5b833592506109446020850161090b565b9150604084013590509250925092565b60006020828403121561096657600080fd5b5035919050565b6000806040838503121561098057600080fd5b8235915060208301356001600160a01b038116811461099e57600080fd5b809150509250929050565b600080604083850312156109bc57600080fd5b6109c58361090b565b946020939093013593505050565b634e487b7160e01b600052604160045260246000fd5b600080604083850312156109fc57600080fd5b8235915060208084013567ffffffffffffffff80821115610a1c57600080fd5b818601915086601f830112610a3057600080fd5b813581811115610a4257610a426109d3565b8060051b604051601f19603f83011681018181108582111715610a6757610a676109d3565b604052918252848201925083810185019189831115610a8557600080fd5b938501935b82851015610aaa57610a9b8561090b565b84529385019392850192610a8a565b8096505050505050509250929050565b60008060408385031215610acd57600080fd5b82359150610add6020840161090b565b90509250929050565b80356001600160801b038116811461091a57600080fd5b600080600060608486031215610b1257600080fd5b83359250610b2260208501610ae6565b9150610b3060408501610ae6565b90509250925092565b634e487b7160e01b600052602160045260246000fd5b84815260808101600e8510610b7457634e487b7160e01b600052602160045260246000fd5b84602083015283604083015282606083015295945050505050565b634e487b7160e01b600052601160045260246000fd5b8082018082111561031b5761031b610b8f565b808202811582820484141761031b5761031b610b8f565b634e487b7160e01b600052603260045260246000fdfe241ecf16d79d0f8dbfb92cbc07fe17840425976cf0667f022fe9877caa831b08a26469706673582212204baea0eb8df9604d6428a0c67eb50776ac27e52afe946862bb09772acf3fe2ce64736f6c63430008180033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "AccessControlBadConfirmation";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly internalType: "bytes32";
            readonly name: "neededRole";
            readonly type: "bytes32";
        }];
        readonly name: "AccessControlUnauthorizedAccount";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "chainId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "enum EmmetTokenStrategy.Step";
            readonly name: "operation";
            readonly type: "uint8";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "oldFee";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "newFee";
            readonly type: "uint256";
        }];
        readonly name: "FeeUpdate";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "previousAdminRole";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "newAdminRole";
            readonly type: "bytes32";
        }];
        readonly name: "RoleAdminChanged";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }];
        readonly name: "RoleGranted";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }];
        readonly name: "RoleRevoked";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "DEFAULT_ADMIN_ROLE";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "MANAGER_ROLE";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "chainId";
            readonly type: "uint256";
        }];
        readonly name: "gasInfo";
        readonly outputs: readonly [{
            readonly internalType: "uint128";
            readonly name: "baseFee";
            readonly type: "uint128";
        }, {
            readonly internalType: "uint128";
            readonly name: "priorityFee";
            readonly type: "uint128";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "chainId_";
            readonly type: "uint256";
        }, {
            readonly internalType: "enum EmmetTokenStrategy.Step";
            readonly name: "operation_";
            readonly type: "uint8";
        }];
        readonly name: "getForeignFee";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "fee";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "chainId_";
            readonly type: "uint256";
        }, {
            readonly internalType: "enum EmmetTokenStrategy.Step[]";
            readonly name: "operations_";
            readonly type: "uint8[]";
        }];
        readonly name: "getForeignFees";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "fee";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getGasInfo";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "baseFee";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "gasPrice";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "enum EmmetTokenStrategy.Step";
            readonly name: "operation_";
            readonly type: "uint8";
        }, {
            readonly internalType: "uint256";
            readonly name: "priorityFee_";
            readonly type: "uint256";
        }];
        readonly name: "getLocalFee";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "fee";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "priorityFee_";
            readonly type: "uint256";
        }, {
            readonly internalType: "enum EmmetTokenStrategy.Step[]";
            readonly name: "operations_";
            readonly type: "uint8[]";
        }];
        readonly name: "getLocalFees";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "fee";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }];
        readonly name: "getRoleAdmin";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "grantRole";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "hasRole";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address";
            readonly name: "callerConfirmation";
            readonly type: "address";
        }];
        readonly name: "renounceRole";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "revokeRole";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "interfaceId";
            readonly type: "bytes4";
        }];
        readonly name: "supportsInterface";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "chainId_";
            readonly type: "uint256";
        }, {
            readonly internalType: "enum EmmetTokenStrategy.Step";
            readonly name: "operation_";
            readonly type: "uint8";
        }, {
            readonly internalType: "uint256";
            readonly name: "newFee_";
            readonly type: "uint256";
        }];
        readonly name: "updateForeignFee";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "chainId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint128";
            readonly name: "baseFee";
            readonly type: "uint128";
        }, {
            readonly internalType: "uint128";
            readonly name: "priorityFee";
            readonly type: "uint128";
        }];
        readonly name: "updateGasInfo";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "enum EmmetTokenStrategy.Step";
            readonly name: "operation_";
            readonly type: "uint8";
        }, {
            readonly internalType: "uint256";
            readonly name: "newFee_";
            readonly type: "uint256";
        }];
        readonly name: "updateLocalFee";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): GasFeesInterface;
    static connect(address: string, runner?: ContractRunner | null): GasFees;
}
export {};
