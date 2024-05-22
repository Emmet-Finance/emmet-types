import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, AddressLike, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type { WTON, WTONInterface } from "../../../../contracts/conventional/em.TON.sol/WTON";
type WTONConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class WTON__factory extends ContractFactory {
    constructor(...args: WTONConstructorParams);
    getDeployTransaction(_bridge: AddressLike, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(_bridge: AddressLike, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<WTON & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): WTON__factory;
    static readonly bytecode = "0x60806040523480156200001157600080fd5b506040516200114e3803806200114e8339810160408190526200003491620001c6565b604051806040016040528060038152602001622a27a760e91b815250816009826040516020016200006691906200022a565b604051602081830303815290604052836040516020016200008891906200024f565b60408051601f198184030181529190526003620000a6838262000310565b506004620000b5828262000310565b50620000c79150600090503362000113565b50620000f47f52ba824bfabc2bcfcdf7f0edbb486ebb05e1836c90e78047efeb949990f72e5f8362000113565b506006805460ff191660ff9290921691909117905550620003dc915050565b60008281526005602090815260408083206001600160a01b038516845290915281205460ff16620001bc5760008381526005602090815260408083206001600160a01b03861684529091529020805460ff19166001179055620001733390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a4506001620001c0565b5060005b92915050565b600060208284031215620001d957600080fd5b81516001600160a01b0381168114620001f157600080fd5b9392505050565b6000815160005b818110156200021b5760208185018101518683015201620001ff565b50600093019283525090919050565b6d022b6b6b2ba102bb930b83832b2160951b81526000620001f1600e830184620001f8565b6232b69760e91b81526000620001f16003830184620001f8565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806200029457607f821691505b602082108103620002b557634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200030b576000816000526020600020601f850160051c81016020861015620002e65750805b601f850160051c820191505b818110156200030757828155600101620002f2565b5050505b505050565b81516001600160401b038111156200032c576200032c62000269565b62000344816200033d84546200027f565b84620002bb565b602080601f8311600181146200037c5760008415620003635750858301515b600019600386901b1c1916600185901b17855562000307565b600085815260208120601f198616915b82811015620003ad578886015182559484019460019091019084016200038c565b5085821015620003cc5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b610d6280620003ec6000396000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c806340c10f19116100ad578063a217fddf11610071578063a217fddf14610265578063a9059cbb1461026d578063b5bfddea14610280578063d547741f146102a7578063dd62ed3e146102ba57600080fd5b806340c10f19146101fb57806370a082311461020e57806379cc67901461023757806391d148541461024a57806395d89b411461025d57600080fd5b806323b872dd116100f457806323b872dd14610188578063248a9ca31461019b5780632f2ff15d146101be578063313ce567146101d357806336568abe146101e857600080fd5b806301ffc9a71461012657806306fdde031461014e578063095ea7b31461016357806318160ddd14610176575b600080fd5b610139610134366004610b45565b6102f3565b60405190151581526020015b60405180910390f35b61015661032a565b6040516101459190610b76565b610139610171366004610be1565b6103bc565b6002545b604051908152602001610145565b610139610196366004610c0b565b6103d4565b61017a6101a9366004610c47565b60009081526005602052604090206001015490565b6101d16101cc366004610c60565b6103f8565b005b60065460405160ff9091168152602001610145565b6101d16101f6366004610c60565b610423565b6101d1610209366004610be1565b61045b565b61017a61021c366004610c8c565b6001600160a01b031660009081526020819052604090205490565b6101d1610245366004610be1565b61057e565b610139610258366004610c60565b610642565b61015661066d565b61017a600081565b61013961027b366004610be1565b61067c565b61017a7f52ba824bfabc2bcfcdf7f0edbb486ebb05e1836c90e78047efeb949990f72e5f81565b6101d16102b5366004610c60565b61068a565b61017a6102c8366004610ca7565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60006001600160e01b03198216637965db0b60e01b148061032457506301ffc9a760e01b6001600160e01b03198316145b92915050565b60606003805461033990610cd1565b80601f016020809104026020016040519081016040528092919081815260200182805461036590610cd1565b80156103b25780601f10610387576101008083540402835291602001916103b2565b820191906000526020600020905b81548152906001019060200180831161039557829003601f168201915b5050505050905090565b6000336103ca8185856106af565b5060019392505050565b6000336103e28582856106bc565b6103ed858585610734565b506001949350505050565b60008281526005602052604090206001015461041381610793565b61041d83836107a0565b50505050565b6001600160a01b038116331461044c5760405163334bd91960e11b815260040160405180910390fd5b6104568282610834565b505050565b6104857f52ba824bfabc2bcfcdf7f0edbb486ebb05e1836c90e78047efeb949990f72e5f33610642565b6104ca5760405162461bcd60e51b8152602060048201526011602482015270155b985d5d1a1bdc9a5cd9590818d85b1b607a1b60448201526064015b60405180910390fd5b6001600160a01b0382166105205760405162461bcd60e51b815260206004820152601f60248201527f4d696e74696e6720617474656d707420746f2061646472657373207a65726f0060448201526064016104c1565b600081116105705760405162461bcd60e51b815260206004820152601b60248201527f417474656d707420746f206d696e74207a65726f20746f6b656e73000000000060448201526064016104c1565b61057a82826108a1565b5050565b6105a87f52ba824bfabc2bcfcdf7f0edbb486ebb05e1836c90e78047efeb949990f72e5f33610642565b6105e85760405162461bcd60e51b8152602060048201526011602482015270155b985d5d1a1bdc9a5cd9590818d85b1b607a1b60448201526064016104c1565b600081116106385760405162461bcd60e51b815260206004820152601b60248201527f417474656d707420746f206275726e207a65726f20746f6b656e73000000000060448201526064016104c1565b61057a82826108d7565b60009182526005602090815260408084206001600160a01b0393909316845291905290205460ff1690565b60606004805461033990610cd1565b6000336103ca818585610734565b6000828152600560205260409020600101546106a581610793565b61041d8383610834565b610456838383600161090d565b6001600160a01b03838116600090815260016020908152604080832093861683529290522054600019811461041d578181101561072557604051637dc7a0d960e11b81526001600160a01b038416600482015260248101829052604481018390526064016104c1565b61041d8484848403600061090d565b6001600160a01b03831661075e57604051634b637e8f60e11b8152600060048201526024016104c1565b6001600160a01b0382166107885760405163ec442f0560e01b8152600060048201526024016104c1565b6104568383836109e2565b61079d8133610b0c565b50565b60006107ac8383610642565b61082c5760008381526005602090815260408083206001600160a01b03861684529091529020805460ff191660011790556107e43390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a4506001610324565b506000610324565b60006108408383610642565b1561082c5760008381526005602090815260408083206001600160a01b0386168085529252808320805460ff1916905551339286917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a4506001610324565b6001600160a01b0382166108cb5760405163ec442f0560e01b8152600060048201526024016104c1565b61057a600083836109e2565b6001600160a01b03821661090157604051634b637e8f60e11b8152600060048201526024016104c1565b61057a826000836109e2565b6001600160a01b0384166109375760405163e602df0560e01b8152600060048201526024016104c1565b6001600160a01b03831661096157604051634a1406b160e11b8152600060048201526024016104c1565b6001600160a01b038085166000908152600160209081526040808320938716835292905220829055801561041d57826001600160a01b0316846001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040516109d491815260200190565b60405180910390a350505050565b6001600160a01b038316610a0d578060026000828254610a029190610d0b565b90915550610a7f9050565b6001600160a01b03831660009081526020819052604090205481811015610a605760405163391434e360e21b81526001600160a01b038516600482015260248101829052604481018390526064016104c1565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b038216610a9b57600280548290039055610aba565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610aff91815260200190565b60405180910390a3505050565b610b168282610642565b61057a5760405163e2517d3f60e01b81526001600160a01b0382166004820152602481018390526044016104c1565b600060208284031215610b5757600080fd5b81356001600160e01b031981168114610b6f57600080fd5b9392505050565b60006020808352835180602085015260005b81811015610ba457858101830151858201604001528201610b88565b506000604082860101526040601f19601f8301168501019250505092915050565b80356001600160a01b0381168114610bdc57600080fd5b919050565b60008060408385031215610bf457600080fd5b610bfd83610bc5565b946020939093013593505050565b600080600060608486031215610c2057600080fd5b610c2984610bc5565b9250610c3760208501610bc5565b9150604084013590509250925092565b600060208284031215610c5957600080fd5b5035919050565b60008060408385031215610c7357600080fd5b82359150610c8360208401610bc5565b90509250929050565b600060208284031215610c9e57600080fd5b610b6f82610bc5565b60008060408385031215610cba57600080fd5b610cc383610bc5565b9150610c8360208401610bc5565b600181811c90821680610ce557607f821691505b602082108103610d0557634e487b7160e01b600052602260045260246000fd5b50919050565b8082018082111561032457634e487b7160e01b600052601160045260246000fdfea264697066735822122047d4ef35f5910f20767a362b7628bf23b2b7044e0ce7cd127ae50ce8584fcbff64736f6c63430008180033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_bridge";
            readonly type: "address";
        }];
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
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "allowance";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "needed";
            readonly type: "uint256";
        }];
        readonly name: "ERC20InsufficientAllowance";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "balance";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "needed";
            readonly type: "uint256";
        }];
        readonly name: "ERC20InsufficientBalance";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "approver";
            readonly type: "address";
        }];
        readonly name: "ERC20InvalidApprover";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }];
        readonly name: "ERC20InvalidReceiver";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }];
        readonly name: "ERC20InvalidSender";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }];
        readonly name: "ERC20InvalidSpender";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "Approval";
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
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "Transfer";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "BRIDGE_ROLE";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
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
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }];
        readonly name: "allowance";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "approve";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "balanceOf";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "burnFrom";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "decimals";
        readonly outputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "";
            readonly type: "uint8";
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
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "mint";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "name";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
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
        readonly inputs: readonly [];
        readonly name: "symbol";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "totalSupply";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "transfer";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "transferFrom";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): WTONInterface;
    static connect(address: string, runner?: ContractRunner | null): WTON;
}
export {};
