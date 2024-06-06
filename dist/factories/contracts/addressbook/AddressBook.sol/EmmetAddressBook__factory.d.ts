import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type { EmmetAddressBook, EmmetAddressBookInterface } from "../../../../contracts/addressbook/AddressBook.sol/EmmetAddressBook";
type EmmetAddressBookConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class EmmetAddressBook__factory extends ContractFactory {
    constructor(...args: EmmetAddressBookConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<EmmetAddressBook & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): EmmetAddressBook__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5061001c60003361004d565b506100477f241ecf16d79d0f8dbfb92cbc07fe17840425976cf0667f022fe9877caa831b083361004d565b506100f9565b6000828152602081815260408083206001600160a01b038516845290915281205460ff166100ef576000838152602081815260408083206001600160a01b03861684529091529020805460ff191660011790556100a73390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45060016100f3565b5060005b92915050565b6108d6806101086000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c806391d148541161006657806391d148541461014f578063a217fddf14610162578063a815ff151461016a578063d547741f1461017d578063ec87621c1461019057600080fd5b806301ffc9a7146100a3578063248a9ca3146100cb5780632f2ff15d146100fc57806336568abe14610111578063693ec85e14610124575b600080fd5b6100b66100b136600461065c565b6101b7565b60405190151581526020015b60405180910390f35b6100ee6100d936600461068d565b60009081526020819052604090206001015490565b6040519081526020016100c2565b61010f61010a3660046106c2565b6101ee565b005b61010f61011f3660046106c2565b610219565b610137610132366004610791565b610251565b6040516001600160a01b0390911681526020016100c2565b6100b661015d3660046106c2565b61025e565b6100ee600081565b61010f6101783660046107ce565b610287565b61010f61018b3660046106c2565b6102bd565b6100ee7f241ecf16d79d0f8dbfb92cbc07fe17840425976cf0667f022fe9877caa831b0881565b60006001600160e01b03198216637965db0b60e01b14806101e857506301ffc9a760e01b6001600160e01b03198316145b92915050565b600082815260208190526040902060010154610209816102e2565b61021383836102ef565b50505050565b6001600160a01b03811633146102425760405163334bd91960e11b815260040160405180910390fd5b61024c8282610381565b505050565b60006101e86001836103ec565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b7f241ecf16d79d0f8dbfb92cbc07fe17840425976cf0667f022fe9877caa831b086102b1816102e2565b61024c60018484610420565b6000828152602081905260409020600101546102d8816102e2565b6102138383610381565b6102ec8133610535565b50565b60006102fb838361025e565b610379576000838152602081815260408083206001600160a01b03861684529091529020805460ff191660011790556103313390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45060016101e8565b5060006101e8565b600061038d838361025e565b15610379576000838152602081815260408083206001600160a01b0386168085529252808320805460ff1916905551339286917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45060016101e8565b600082600001826040516104009190610837565b908152604051908190036020019020546001600160a01b03169392505050565b6001600160a01b0381166104385761024c8383610572565b6000836000018360405161044c9190610837565b908152604051908190036020019020546001600160a01b039081169150821681146104f2578184600001846040516104849190610837565b90815260405190819003602001812080546001600160a01b03939093166001600160a01b0319909316929092179091557f9b44bb68d692f88dc444d725cdba4f245ea59a47a9eff90a8a2f6e9c8465efb8906104e590839085908790610853565b60405180910390a1610213565b604051633bad507d60e11b8152602060048201526012602482015271139bc818da185b99d9481a5b88185cdcd95d60721b60448201526064015b60405180910390fd5b61053f828261025e565b61056e5760405163e2517d3f60e01b81526001600160a01b03821660048201526024810183905260440161052c565b5050565b600082600001826040516105869190610837565b908152604051908190036020019020546001600160a01b0316905080156106135760405183906105b7908490610837565b90815260405190819003602001812080546001600160a01b03191690557f9b44bb68d692f88dc444d725cdba4f245ea59a47a9eff90a8a2f6e9c8465efb8906106069083906000908690610853565b60405180910390a1505050565b604051633bad507d60e11b815260206004820152601d60248201527f44656c6574696e672061206e6f6e2d6578697374616e74206173736574000000604482015260640161052c565b60006020828403121561066e57600080fd5b81356001600160e01b03198116811461068657600080fd5b9392505050565b60006020828403121561069f57600080fd5b5035919050565b80356001600160a01b03811681146106bd57600080fd5b919050565b600080604083850312156106d557600080fd5b823591506106e5602084016106a6565b90509250929050565b634e487b7160e01b600052604160045260246000fd5b600082601f83011261071557600080fd5b813567ffffffffffffffff80821115610730576107306106ee565b604051601f8301601f19908116603f01168101908282118183101715610758576107586106ee565b8160405283815286602085880101111561077157600080fd5b836020870160208301376000602085830101528094505050505092915050565b6000602082840312156107a357600080fd5b813567ffffffffffffffff8111156107ba57600080fd5b6107c684828501610704565b949350505050565b600080604083850312156107e157600080fd5b823567ffffffffffffffff8111156107f857600080fd5b61080485828601610704565b9250506106e5602084016106a6565b60005b8381101561082e578181015183820152602001610816565b50506000910152565b60008251610849818460208701610813565b9190910192915050565b600060018060a01b03808616835280851660208401525060606040830152825180606084015261088a816080850160208701610813565b601f01601f19169190910160800194935050505056fea26469706673582212207b3833ecc627c2aab51a0be66eb9aee1ad2be5506dc57852463e722f468d6a6b64736f6c63430008180033";
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
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "message";
            readonly type: "string";
        }];
        readonly name: "AddressStorageHelperError";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "oldAddress";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "newAddress";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }];
        readonly name: "AddressUpdate";
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
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }];
        readonly name: "get";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "asset";
            readonly type: "address";
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
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }, {
            readonly internalType: "address";
            readonly name: "asset";
            readonly type: "address";
        }];
        readonly name: "set";
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
    }];
    static createInterface(): EmmetAddressBookInterface;
    static connect(address: string, runner?: ContractRunner | null): EmmetAddressBook;
}
export {};
