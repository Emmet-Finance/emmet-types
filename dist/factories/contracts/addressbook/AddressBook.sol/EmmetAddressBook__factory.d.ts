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
    static readonly bytecode = "0x608060405234801561001057600080fd5b5061001c60003361004d565b506100477f241ecf16d79d0f8dbfb92cbc07fe17840425976cf0667f022fe9877caa831b083361004d565b506100f9565b6000828152602081815260408083206001600160a01b038516845290915281205460ff166100ef576000838152602081815260408083206001600160a01b03861684529091529020805460ff191660011790556100a73390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45060016100f3565b5060005b92915050565b610900806101086000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c806391d148541161006657806391d148541461014f578063a217fddf14610162578063a815ff151461016a578063d547741f1461017d578063ec87621c1461019057600080fd5b806301ffc9a7146100a3578063248a9ca3146100cb5780632f2ff15d146100fc57806336568abe14610111578063693ec85e14610124575b600080fd5b6100b66100b1366004610686565b6101b7565b60405190151581526020015b60405180910390f35b6100ee6100d93660046106b7565b60009081526020819052604090206001015490565b6040519081526020016100c2565b61010f61010a3660046106ec565b6101e3565b005b61010f61011f3660046106ec565b61020e565b6101376101323660046107bb565b610246565b6040516001600160a01b0390911681526020016100c2565b6100b661015d3660046106ec565b610253565b6100ee600081565b61010f6101783660046107f8565b61027c565b61010f61018b3660046106ec565b6102b2565b6100ee7f241ecf16d79d0f8dbfb92cbc07fe17840425976cf0667f022fe9877caa831b0881565b60006101c2826102d7565b806101dd57506001600160e01b0319821663c12b374b60e01b145b92915050565b6000828152602081905260409020600101546101fe8161030c565b6102088383610319565b50505050565b6001600160a01b03811633146102375760405163334bd91960e11b815260040160405180910390fd5b61024182826103ab565b505050565b60006101dd600183610416565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b7f241ecf16d79d0f8dbfb92cbc07fe17840425976cf0667f022fe9877caa831b086102a68161030c565b6102416001848461044a565b6000828152602081905260409020600101546102cd8161030c565b61020883836103ab565b60006001600160e01b03198216637965db0b60e01b14806101dd57506301ffc9a760e01b6001600160e01b03198316146101dd565b610316813361055f565b50565b60006103258383610253565b6103a3576000838152602081815260408083206001600160a01b03861684529091529020805460ff1916600117905561035b3390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45060016101dd565b5060006101dd565b60006103b78383610253565b156103a3576000838152602081815260408083206001600160a01b0386168085529252808320805460ff1916905551339286917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45060016101dd565b6000826000018260405161042a9190610861565b908152604051908190036020019020546001600160a01b03169392505050565b6001600160a01b03811661046257610241838361059c565b600083600001836040516104769190610861565b908152604051908190036020019020546001600160a01b0390811691508216811461051c578184600001846040516104ae9190610861565b90815260405190819003602001812080546001600160a01b03939093166001600160a01b0319909316929092179091557f9b44bb68d692f88dc444d725cdba4f245ea59a47a9eff90a8a2f6e9c8465efb89061050f9083908590879061087d565b60405180910390a1610208565b604051633bad507d60e11b8152602060048201526012602482015271139bc818da185b99d9481a5b88185cdcd95d60721b60448201526064015b60405180910390fd5b6105698282610253565b6105985760405163e2517d3f60e01b81526001600160a01b038216600482015260248101839052604401610556565b5050565b600082600001826040516105b09190610861565b908152604051908190036020019020546001600160a01b03169050801561063d5760405183906105e1908490610861565b90815260405190819003602001812080546001600160a01b03191690557f9b44bb68d692f88dc444d725cdba4f245ea59a47a9eff90a8a2f6e9c8465efb890610630908390600090869061087d565b60405180910390a1505050565b604051633bad507d60e11b815260206004820152601d60248201527f44656c6574696e672061206e6f6e2d6578697374616e742061737365740000006044820152606401610556565b60006020828403121561069857600080fd5b81356001600160e01b0319811681146106b057600080fd5b9392505050565b6000602082840312156106c957600080fd5b5035919050565b80356001600160a01b03811681146106e757600080fd5b919050565b600080604083850312156106ff57600080fd5b8235915061070f602084016106d0565b90509250929050565b634e487b7160e01b600052604160045260246000fd5b600082601f83011261073f57600080fd5b813567ffffffffffffffff8082111561075a5761075a610718565b604051601f8301601f19908116603f0116810190828211818310171561078257610782610718565b8160405283815286602085880101111561079b57600080fd5b836020870160208301376000602085830101528094505050505092915050565b6000602082840312156107cd57600080fd5b813567ffffffffffffffff8111156107e457600080fd5b6107f08482850161072e565b949350505050565b6000806040838503121561080b57600080fd5b823567ffffffffffffffff81111561082257600080fd5b61082e8582860161072e565b92505061070f602084016106d0565b60005b83811015610858578181015183820152602001610840565b50506000910152565b6000825161087381846020870161083d565b9190910192915050565b600060018060a01b0380861683528085166020840152506060604083015282518060608401526108b481608085016020870161083d565b601f01601f19169190910160800194935050505056fea26469706673582212205e25697048129e83f2f2f5e60571319024533c5d9463475c91c9e6cb22e6da8364736f6c63430008180033";
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
