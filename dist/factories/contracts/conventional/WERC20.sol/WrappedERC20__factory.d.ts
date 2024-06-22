import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, BigNumberish, AddressLike, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type { WrappedERC20, WrappedERC20Interface } from "../../../../contracts/conventional/WERC20.sol/WrappedERC20";
type WrappedERC20ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class WrappedERC20__factory extends ContractFactory {
    constructor(...args: WrappedERC20ConstructorParams);
    getDeployTransaction(name_: string, symbol_: string, _bridge: AddressLike, decimals_: BigNumberish, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(name_: string, symbol_: string, _bridge: AddressLike, decimals_: BigNumberish, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<WrappedERC20 & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): WrappedERC20__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b506040516113dc3803806113dc83398101604081905261002f9161020c565b8383600361003d8382610338565b50600461004a8282610338565b5061005a915060009050336100a3565b506100857f52ba824bfabc2bcfcdf7f0edbb486ebb05e1836c90e78047efeb949990f72e5f836100a3565b506006805460ff191660ff92909216919091179055506103f6915050565b60008281526005602090815260408083206001600160a01b038516845290915281205460ff166101495760008381526005602090815260408083206001600160a01b03861684529091529020805460ff191660011790556101013390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a450600161014d565b5060005b92915050565b634e487b7160e01b600052604160045260246000fd5b600082601f83011261017a57600080fd5b81516001600160401b0381111561019357610193610153565b604051601f8201601f19908116603f011681016001600160401b03811182821017156101c1576101c1610153565b6040528181528382016020018510156101d957600080fd5b60005b828110156101f8576020818601810151838301820152016101dc565b506000918101602001919091529392505050565b6000806000806080858703121561022257600080fd5b84516001600160401b0381111561023857600080fd5b61024487828801610169565b602087015190955090506001600160401b0381111561026257600080fd5b61026e87828801610169565b604087015190945090506001600160a01b038116811461028d57600080fd5b606086015190925060ff811681146102a457600080fd5b939692955090935050565b600181811c908216806102c357607f821691505b6020821081036102e357634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111561033357806000526020600020601f840160051c810160208510156103105750805b601f840160051c820191505b81811015610330576000815560010161031c565b50505b505050565b81516001600160401b0381111561035157610351610153565b6103658161035f84546102af565b846102e9565b6020601f82116001811461039957600083156103815750848201515b600019600385901b1c1916600184901b178455610330565b600084815260208120601f198516915b828110156103c957878501518255602094850194600190920191016103a9565b50848210156103e75786840151600019600387901b60f8161c191681555b50505050600190811b01905550565b610fd7806104056000396000f3fe608060405234801561001057600080fd5b50600436106101515760003560e01c806340c10f19116100cd578063a217fddf11610081578063b5bfddea11610066578063b5bfddea146102d6578063d547741f146102fd578063dd62ed3e1461031057600080fd5b8063a217fddf146102bb578063a9059cbb146102c357600080fd5b806379cc6790116100b257806379cc67901461026757806391d148541461027a57806395d89b41146102b357600080fd5b806340c10f191461022b57806370a082311461023e57600080fd5b806323b872dd116101245780632f2ff15d116101095780632f2ff15d146101ee578063313ce5671461020357806336568abe1461021857600080fd5b806323b872dd146101b8578063248a9ca3146101cb57600080fd5b806301ffc9a71461015657806306fdde031461017e578063095ea7b31461019357806318160ddd146101a6575b600080fd5b610169610164366004610d52565b610349565b60405190151581526020015b60405180910390f35b6101866103e2565b6040516101759190610d9b565b6101696101a1366004610e23565b610474565b6002545b604051908152602001610175565b6101696101c6366004610e4d565b61048c565b6101aa6101d9366004610e8a565b60009081526005602052604090206001015490565b6102016101fc366004610ea3565b6104b0565b005b60065460405160ff9091168152602001610175565b610201610226366004610ea3565b6104db565b610201610239366004610e23565b61052c565b6101aa61024c366004610ecf565b6001600160a01b031660009081526020819052604090205490565b610201610275366004610e23565b61065b565b610169610288366004610ea3565b60009182526005602090815260408084206001600160a01b0393909316845291905290205460ff1690565b61018661072b565b6101aa600081565b6101696102d1366004610e23565b61073a565b6101aa7f52ba824bfabc2bcfcdf7f0edbb486ebb05e1836c90e78047efeb949990f72e5f81565b61020161030b366004610ea3565b610748565b6101aa61031e366004610eea565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f7965db0b0000000000000000000000000000000000000000000000000000000014806103dc57507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b6060600380546103f190610f14565b80601f016020809104026020016040519081016040528092919081815260200182805461041d90610f14565b801561046a5780601f1061043f5761010080835404028352916020019161046a565b820191906000526020600020905b81548152906001019060200180831161044d57829003601f168201915b5050505050905090565b60003361048281858561076d565b5060019392505050565b60003361049a85828561077a565b6104a5858585610829565b506001949350505050565b6000828152600560205260409020600101546104cb816108ba565b6104d583836108c7565b50505050565b6001600160a01b038116331461051d576040517f6697b23200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105278282610975565b505050565b6105567f52ba824bfabc2bcfcdf7f0edbb486ebb05e1836c90e78047efeb949990f72e5f33610288565b6105a75760405162461bcd60e51b815260206004820152601160248201527f556e617574686f72697365642063616c6c00000000000000000000000000000060448201526064015b60405180910390fd5b6001600160a01b0382166105fd5760405162461bcd60e51b815260206004820152601f60248201527f4d696e74696e6720617474656d707420746f2061646472657373207a65726f00604482015260640161059e565b6000811161064d5760405162461bcd60e51b815260206004820152601b60248201527f417474656d707420746f206d696e74207a65726f20746f6b656e730000000000604482015260640161059e565b61065782826109fc565b5050565b6106857f52ba824bfabc2bcfcdf7f0edbb486ebb05e1836c90e78047efeb949990f72e5f33610288565b6106d15760405162461bcd60e51b815260206004820152601160248201527f556e617574686f72697365642063616c6c000000000000000000000000000000604482015260640161059e565b600081116107215760405162461bcd60e51b815260206004820152601b60248201527f417474656d707420746f206275726e207a65726f20746f6b656e730000000000604482015260640161059e565b6106578282610a4b565b6060600480546103f190610f14565b600033610482818585610829565b600082815260056020526040902060010154610763816108ba565b6104d58383610975565b6105278383836001610a9a565b6001600160a01b038381166000908152600160209081526040808320938616835292905220547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146104d5578181101561081a576040517ffb8f41b20000000000000000000000000000000000000000000000000000000081526001600160a01b0384166004820152602481018290526044810183905260640161059e565b6104d584848484036000610a9a565b6001600160a01b03831661086c576040517f96c6fd1e0000000000000000000000000000000000000000000000000000000081526000600482015260240161059e565b6001600160a01b0382166108af576040517fec442f050000000000000000000000000000000000000000000000000000000081526000600482015260240161059e565b610527838383610ba1565b6108c48133610ce4565b50565b60008281526005602090815260408083206001600160a01b038516845290915281205460ff1661096d5760008381526005602090815260408083206001600160a01b03861684529091529020805460ff191660011790556109253390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45060016103dc565b5060006103dc565b60008281526005602090815260408083206001600160a01b038516845290915281205460ff161561096d5760008381526005602090815260408083206001600160a01b0386168085529252808320805460ff1916905551339286917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45060016103dc565b6001600160a01b038216610a3f576040517fec442f050000000000000000000000000000000000000000000000000000000081526000600482015260240161059e565b61065760008383610ba1565b6001600160a01b038216610a8e576040517f96c6fd1e0000000000000000000000000000000000000000000000000000000081526000600482015260240161059e565b61065782600083610ba1565b6001600160a01b038416610add576040517fe602df050000000000000000000000000000000000000000000000000000000081526000600482015260240161059e565b6001600160a01b038316610b20576040517f94280d620000000000000000000000000000000000000000000000000000000081526000600482015260240161059e565b6001600160a01b03808516600090815260016020908152604080832093871683529290522082905580156104d557826001600160a01b0316846001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92584604051610b9391815260200190565b60405180910390a350505050565b6001600160a01b038316610bcc578060026000828254610bc19190610f67565b90915550610c579050565b6001600160a01b03831660009081526020819052604090205481811015610c38576040517fe450d38c0000000000000000000000000000000000000000000000000000000081526001600160a01b0385166004820152602481018290526044810183905260640161059e565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b038216610c7357600280548290039055610c92565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610cd791815260200190565b60405180910390a3505050565b60008281526005602090815260408083206001600160a01b038516845290915290205460ff16610657576040517fe2517d3f0000000000000000000000000000000000000000000000000000000081526001600160a01b03821660048201526024810183905260440161059e565b600060208284031215610d6457600080fd5b81357fffffffff0000000000000000000000000000000000000000000000000000000081168114610d9457600080fd5b9392505050565b602081526000825180602084015260005b81811015610dc95760208186018101516040868401015201610dac565b5060006040828501015260407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011684010191505092915050565b80356001600160a01b0381168114610e1e57600080fd5b919050565b60008060408385031215610e3657600080fd5b610e3f83610e07565b946020939093013593505050565b600080600060608486031215610e6257600080fd5b610e6b84610e07565b9250610e7960208501610e07565b929592945050506040919091013590565b600060208284031215610e9c57600080fd5b5035919050565b60008060408385031215610eb657600080fd5b82359150610ec660208401610e07565b90509250929050565b600060208284031215610ee157600080fd5b610d9482610e07565b60008060408385031215610efd57600080fd5b610f0683610e07565b9150610ec660208401610e07565b600181811c90821680610f2857607f821691505b602082108103610f61577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b808201808211156103dc577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fdfea264697066735822122015603e1c20a4ac9b1e25a743581f7f1ede550bcdc23910123c2c2af16b7cd9d464736f6c634300081a0033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "name_";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "symbol_";
            readonly type: "string";
        }, {
            readonly internalType: "address";
            readonly name: "_bridge";
            readonly type: "address";
        }, {
            readonly internalType: "uint8";
            readonly name: "decimals_";
            readonly type: "uint8";
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
    static createInterface(): WrappedERC20Interface;
    static connect(address: string, runner?: ContractRunner | null): WrappedERC20;
}
export {};
