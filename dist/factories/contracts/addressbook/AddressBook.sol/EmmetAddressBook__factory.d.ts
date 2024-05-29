import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type { EmmetAddressBook, EmmetAddressBookInterface } from "../../../../contracts/addressbook/AddressBook.sol/EmmetAddressBook";
type EmmetAddressBookConstructorParams = [linkLibraryAddresses: EmmetAddressBookLibraryAddresses, signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class EmmetAddressBook__factory extends ContractFactory {
    constructor(...args: EmmetAddressBookConstructorParams);
    static linkBytecode(linkLibraryAddresses: EmmetAddressBookLibraryAddresses): string;
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<EmmetAddressBook & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): EmmetAddressBook__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5061001c60003361004d565b506100477f241ecf16d79d0f8dbfb92cbc07fe17840425976cf0667f022fe9877caa831b083361004d565b506100f9565b6000828152602081815260408083206001600160a01b038516845290915281205460ff166100ef576000838152602081815260408083206001600160a01b03861684529091529020805460ff191660011790556100a73390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45060016100f3565b5060005b92915050565b61079c806101086000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c806391d148541161006657806391d148541461014f578063a217fddf14610162578063a815ff151461016a578063d547741f1461017d578063ec87621c1461019057600080fd5b806301ffc9a7146100a3578063248a9ca3146100cb5780632f2ff15d146100fc57806336568abe14610111578063693ec85e14610124575b600080fd5b6100b66100b1366004610503565b6101b7565b60405190151581526020015b60405180910390f35b6100ee6100d9366004610534565b60009081526020819052604090206001015490565b6040519081526020016100c2565b61010f61010a366004610562565b6101ee565b005b61010f61011f366004610562565b610219565b610137610132366004610635565b610251565b6040516001600160a01b0390911681526020016100c2565b6100b661015d366004610562565b6102cf565b6100ee600081565b61010f610178366004610672565b6102f8565b61010f61018b366004610562565b610393565b6100ee7f241ecf16d79d0f8dbfb92cbc07fe17840425976cf0667f022fe9877caa831b0881565b60006001600160e01b03198216637965db0b60e01b14806101e857506301ffc9a760e01b6001600160e01b03198316145b92915050565b600082815260208190526040902060010154610209816103b8565b61021383836103c5565b50505050565b6001600160a01b03811633146102425760405163334bd91960e11b815260040160405180910390fd5b61024c8282610457565b505050565b6040516335d8d5e160e01b815260009073__$e7b015979c18c25f4eab077fd0ce31b5b2$__906335d8d5e19061028e9060019086906004016106ff565b602060405180830381865af41580156102ab573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101e89190610718565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b7f241ecf16d79d0f8dbfb92cbc07fe17840425976cf0667f022fe9877caa831b08610322816103b8565b604051636f3544bb60e11b815273__$e7b015979c18c25f4eab077fd0ce31b5b2$__9063de6a89769061035e9060019087908790600401610735565b60006040518083038186803b15801561037657600080fd5b505af415801561038a573d6000803e3d6000fd5b50505050505050565b6000828152602081905260409020600101546103ae816103b8565b6102138383610457565b6103c281336104c2565b50565b60006103d183836102cf565b61044f576000838152602081815260408083206001600160a01b03861684529091529020805460ff191660011790556104073390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45060016101e8565b5060006101e8565b600061046383836102cf565b1561044f576000838152602081815260408083206001600160a01b0386168085529252808320805460ff1916905551339286917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45060016101e8565b6104cc82826102cf565b6104ff5760405163e2517d3f60e01b81526001600160a01b03821660048201526024810183905260440160405180910390fd5b5050565b60006020828403121561051557600080fd5b81356001600160e01b03198116811461052d57600080fd5b9392505050565b60006020828403121561054657600080fd5b5035919050565b6001600160a01b03811681146103c257600080fd5b6000806040838503121561057557600080fd5b8235915060208301356105878161054d565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126105b957600080fd5b813567ffffffffffffffff808211156105d4576105d4610592565b604051601f8301601f19908116603f011681019082821181831017156105fc576105fc610592565b8160405283815286602085880101111561061557600080fd5b836020870160208301376000602085830101528094505050505092915050565b60006020828403121561064757600080fd5b813567ffffffffffffffff81111561065e57600080fd5b61066a848285016105a8565b949350505050565b6000806040838503121561068557600080fd5b823567ffffffffffffffff81111561069c57600080fd5b6106a8858286016105a8565b92505060208301356105878161054d565b6000815180845260005b818110156106df576020818501810151868301820152016106c3565b506000602082860101526020601f19601f83011685010191505092915050565b82815260406020820152600061066a60408301846106b9565b60006020828403121561072a57600080fd5b815161052d8161054d565b83815260606020820152600061074e60608301856106b9565b905060018060a01b038316604083015294935050505056fea2646970667358221220edda8cc2171c797a57fd8c02415f88b617878e8e32eb0807aebe7097acd5023864736f6c63430008180033";
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
export interface EmmetAddressBookLibraryAddresses {
    ["contracts/libs/AddressStorageHelper.sol:AddressStorageHelper"]: string;
}
export {};
