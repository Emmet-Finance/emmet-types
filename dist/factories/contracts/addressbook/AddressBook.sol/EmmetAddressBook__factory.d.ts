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
    static readonly bytecode = "0x608060405234801561001057600080fd5b5061001c60003361004d565b506100477f241ecf16d79d0f8dbfb92cbc07fe17840425976cf0667f022fe9877caa831b083361004d565b506100f9565b6000828152602081815260408083206001600160a01b038516845290915281205460ff166100ef576000838152602081815260408083206001600160a01b03861684529091529020805460ff191660011790556100a73390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45060016100f3565b5060005b92915050565b610ac9806101086000396000f3fe608060405234801561001057600080fd5b50600436106100be5760003560e01c806391d1485411610076578063a815ff151161005b578063a815ff15146101ae578063d547741f146101c1578063ec87621c146101d457600080fd5b806391d148541461016f578063a217fddf146101a657600080fd5b80632f2ff15d116100a75780632f2ff15d1461011c57806336568abe14610131578063693ec85e1461014457600080fd5b806301ffc9a7146100c3578063248a9ca3146100eb575b600080fd5b6100d66100d136600461081d565b6101fb565b60405190151581526020015b60405180910390f35b61010e6100f9366004610866565b60009081526020819052604090206001015490565b6040519081526020016100e2565b61012f61012a36600461089b565b610258565b005b61012f61013f36600461089b565b610283565b610157610152366004610983565b6102d4565b6040516001600160a01b0390911681526020016100e2565b6100d661017d36600461089b565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b61010e600081565b61012f6101bc3660046109c0565b6102e1565b61012f6101cf36600461089b565b610317565b61010e7f241ecf16d79d0f8dbfb92cbc07fe17840425976cf0667f022fe9877caa831b0881565b60006102068261033c565b8061025257507fffffffff0000000000000000000000000000000000000000000000000000000082167fc12b374b00000000000000000000000000000000000000000000000000000000145b92915050565b600082815260208190526040902060010154610273816103d3565b61027d83836103e0565b50505050565b6001600160a01b03811633146102c5576040517f6697b23200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102cf828261048a565b505050565b600061025260018361050d565b7f241ecf16d79d0f8dbfb92cbc07fe17840425976cf0667f022fe9877caa831b0861030b816103d3565b6102cf60018484610541565b600082815260208190526040902060010154610332816103d3565b61027d838361048a565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f7965db0b00000000000000000000000000000000000000000000000000000000148061025257507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000831614610252565b6103dd8133610692565b50565b6000828152602081815260408083206001600160a01b038516845290915281205460ff16610482576000838152602081815260408083206001600160a01b03861684529091529020805460ff1916600117905561043a3390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a4506001610252565b506000610252565b6000828152602081815260408083206001600160a01b038516845290915281205460ff1615610482576000838152602081815260408083206001600160a01b0386168085529252808320805460ff1916905551339286917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a4506001610252565b600082600001826040516105219190610a29565b908152604051908190036020019020546001600160a01b03169392505050565b6001600160a01b038116610559576102cf8383610702565b6000836000018360405161056d9190610a29565b908152604051908190036020019020546001600160a01b0390811691508216811461062b578184600001846040516105a59190610a29565b90815260405190819003602001812080546001600160a01b03939093167fffffffffffffffffffffffff0000000000000000000000000000000000000000909316929092179091557f9b44bb68d692f88dc444d725cdba4f245ea59a47a9eff90a8a2f6e9c8465efb89061061e90839085908790610a45565b60405180910390a161027d565b6040517f775aa0fa00000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f4e6f206368616e676520696e206173736574000000000000000000000000000060448201526064015b60405180910390fd5b6000828152602081815260408083206001600160a01b038516845290915290205460ff166106fe576040517fe2517d3f0000000000000000000000000000000000000000000000000000000081526001600160a01b038216600482015260248101839052604401610689565b5050565b600082600001826040516107169190610a29565b908152604051908190036020019020546001600160a01b0316905080156107bb576040518390610747908490610a29565b90815260405190819003602001812080547fffffffffffffffffffffffff00000000000000000000000000000000000000001690557f9b44bb68d692f88dc444d725cdba4f245ea59a47a9eff90a8a2f6e9c8465efb8906107ae9083906000908690610a45565b60405180910390a1505050565b6040517f775aa0fa00000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f44656c6574696e672061206e6f6e2d6578697374616e742061737365740000006044820152606401610689565b60006020828403121561082f57600080fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461085f57600080fd5b9392505050565b60006020828403121561087857600080fd5b5035919050565b80356001600160a01b038116811461089657600080fd5b919050565b600080604083850312156108ae57600080fd5b823591506108be6020840161087f565b90509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600082601f83011261090757600080fd5b813567ffffffffffffffff80821115610922576109226108c7565b604051601f8301601f19908116603f0116810190828211818310171561094a5761094a6108c7565b8160405283815286602085880101111561096357600080fd5b836020870160208301376000602085830101528094505050505092915050565b60006020828403121561099557600080fd5b813567ffffffffffffffff8111156109ac57600080fd5b6109b8848285016108f6565b949350505050565b600080604083850312156109d357600080fd5b823567ffffffffffffffff8111156109ea57600080fd5b6109f6858286016108f6565b9250506108be6020840161087f565b60005b83811015610a20578181015183820152602001610a08565b50506000910152565b60008251610a3b818460208701610a05565b9190910192915050565b60006001600160a01b038086168352808516602084015250606060408301528251806060840152610a7d816080850160208701610a05565b601f01601f19169190910160800194935050505056fea26469706673582212205c26acf3cab77c848e2c9e9445b9ec2549aaaf91404c12c5fc1944fe3d6877eb64736f6c63430008180033";
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
