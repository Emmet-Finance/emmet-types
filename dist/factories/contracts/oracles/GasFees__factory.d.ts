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
    static readonly bytecode = "0x608060405234801561001057600080fd5b5061001c60003361004d565b506100477f241ecf16d79d0f8dbfb92cbc07fe17840425976cf0667f022fe9877caa831b083361004d565b506100f9565b6000828152602081815260408083206001600160a01b038516845290915281205460ff166100ef576000838152602081815260408083206001600160a01b03861684529091529020805460ff191660011790556100a73390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45060016100f3565b5060005b92915050565b610f76806101086000396000f3fe608060405234801561001057600080fd5b506004361061011b5760003560e01c80638771b79d116100b2578063d121cef411610081578063dbb9307f11610066578063dbb9307f1461028f578063e4194a40146102a2578063ec87621c146102b557600080fd5b8063d121cef414610269578063d547741f1461027c57600080fd5b80638771b79d146101f757806391d1485414610217578063a217fddf1461024e578063ca80aad31461025657600080fd5b8063248a9ca3116100ee578063248a9ca3146101915780632f2ff15d146101b457806336568abe146101c757806355574dbe146101da57600080fd5b8063016c884e1461012057806301ffc9a7146101465780631281b7931461016957806314512ee21461017e575b600080fd5b61013361012e366004610c8f565b6102dc565b6040519081526020015b60405180910390f35b610159610154366004610ccc565b610325565b604051901515815260200161013d565b61017c610177366004610d0e565b610419565b005b61017c61018c366004610d43565b6105a8565b61013361019f366004610d65565b60009081526020819052604090206001015490565b61017c6101c2366004610d7e565b610648565b61017c6101d5366004610d7e565b610673565b6101e26106bf565b6040805192835260208301919091520161013d565b610133610205366004610d65565b60036020526000908152604090205481565b610159610225366004610d7e565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b610133600081565b61017c610264366004610dba565b6106d3565b610133610277366004610de4565b6107ba565b61017c61028a366004610d7e565b610805565b61013361029d366004610e2b565b61082a565b6101336102b0366004610e57565b610887565b6101337f241ecf16d79d0f8dbfb92cbc07fe17840425976cf0667f022fe9877caa831b0881565b6000805b825181101561031f5761030b8382815181106102fe576102fe610e72565b6020026020010151610887565b6103159083610e9e565b91506001016102e0565b50919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167fbaba713b0000000000000000000000000000000000000000000000000000000014806103b857507fffffffff0000000000000000000000000000000000000000000000000000000082167fcdaffa0500000000000000000000000000000000000000000000000000000000145b8061040457507fffffffff0000000000000000000000000000000000000000000000000000000082167ff16e5b9000000000000000000000000000000000000000000000000000000000145b806104135750610413826108ac565b92915050565b7f241ecf16d79d0f8dbfb92cbc07fe17840425976cf0667f022fe9877caa831b0861044381610943565b60008481526002602052604081208185600d81111561046457610464610eb1565b600d81111561047557610475610eb1565b8152602001908152602001600020549050828114610514576000858152600260205260408120849186600d8111156104af576104af610eb1565b600d8111156104c0576104c0610eb1565b8152602001908152602001600020819055507fa74602ff50c7fb0dee46d88bc01a3144c0a0fe84b4c0f8c744bda8ecebe9cd5a858583866040516105079493929190610ec7565b60405180910390a16105a1565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602b60248201527f4761734665657341646d696e3a205570646174696e672077697468207468652060448201527f73616d652076616c75652e00000000000000000000000000000000000000000060648201526084015b60405180910390fd5b5050505050565b7f241ecf16d79d0f8dbfb92cbc07fe17840425976cf0667f022fe9877caa831b086105d281610943565b60008381526003602052604090205482146105145760008381526003602090815260409182902080549085905582518681529182018190529181018490527f596fe1b7eafeba4a27f70eea49bb9e4356ebe3a3b9f256c9f735c9793077c6a29060600160405180910390a150505050565b505050565b60008281526020819052604090206001015461066381610943565b61066d8383610950565b50505050565b6001600160a01b03811633146106b5576040517f6697b23200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61064382826109fa565b4860006106cd826002610a7d565b90509091565b7f241ecf16d79d0f8dbfb92cbc07fe17840425976cf0667f022fe9877caa831b086106fd81610943565b60006001600085600d81111561071557610715610eb1565b600d81111561072657610726610eb1565b815260200190815260200160002054905082811461051457826001600086600d81111561075557610755610eb1565b600d81111561076657610766610eb1565b8152602001908152602001600020819055507fa74602ff50c7fb0dee46d88bc01a3144c0a0fe84b4c0f8c744bda8ecebe9cd5a468583866040516107ad9493929190610ec7565b60405180910390a161066d565b6000805b82518110156107fe576107ea848483815181106107dd576107dd610e72565b602002602001015161082a565b6107f49083610e9e565b91506001016107be565b5092915050565b60008281526020819052604090206001015461082081610943565b61066d83836109fa565b600082815260036020908152604080832054600290925282208284600d81111561085657610856610eb1565b600d81111561086757610867610eb1565b8152602001908152602001600020546108809190610f07565b9392505050565b6000806108926106bf565b915050806001600085600d81111561085657610856610eb1565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f7965db0b00000000000000000000000000000000000000000000000000000000148061041357507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000831614610413565b61094d8133610b32565b50565b6000828152602081815260408083206001600160a01b038516845290915281205460ff166109f2576000838152602081815260408083206001600160a01b03861684529091529020805460ff191660011790556109aa3390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a4506001610413565b506000610413565b6000828152602081815260408083206001600160a01b038516845290915281205460ff16156109f2576000838152602081815260408083206001600160a01b0386168085529252808320805460ff1916905551339286917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a4506001610413565b6000821580610a8a575081155b15610a9757506000610413565b5081810281610aa68483610f1e565b14610413576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f55696e743235364d6174683a206d756c7469706c69636174696f6e206f76657260448201527f666c6f77000000000000000000000000000000000000000000000000000000006064820152608401610598565b6000828152602081815260408083206001600160a01b038516845290915290205460ff16610b9e576040517fe2517d3f0000000000000000000000000000000000000000000000000000000081526001600160a01b038216600482015260248101839052604401610598565b5050565b634e487b7160e01b600052604160045260246000fd5b8035600e8110610bc757600080fd5b919050565b600082601f830112610bdd57600080fd5b8135602067ffffffffffffffff80831115610bfa57610bfa610ba2565b8260051b6040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0603f83011681018181108482111715610c3d57610c3d610ba2565b6040529384526020818701810194908101925087851115610c5d57600080fd5b6020870191505b84821015610c8457610c7582610bb8565b83529183019190830190610c64565b979650505050505050565b600060208284031215610ca157600080fd5b813567ffffffffffffffff811115610cb857600080fd5b610cc484828501610bcc565b949350505050565b600060208284031215610cde57600080fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461088057600080fd5b600080600060608486031215610d2357600080fd5b83359250610d3360208501610bb8565b9150604084013590509250925092565b60008060408385031215610d5657600080fd5b50508035926020909101359150565b600060208284031215610d7757600080fd5b5035919050565b60008060408385031215610d9157600080fd5b8235915060208301356001600160a01b0381168114610daf57600080fd5b809150509250929050565b60008060408385031215610dcd57600080fd5b610dd683610bb8565b946020939093013593505050565b60008060408385031215610df757600080fd5b82359150602083013567ffffffffffffffff811115610e1557600080fd5b610e2185828601610bcc565b9150509250929050565b60008060408385031215610e3e57600080fd5b82359150610e4e60208401610bb8565b90509250929050565b600060208284031215610e6957600080fd5b61088082610bb8565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b8082018082111561041357610413610e88565b634e487b7160e01b600052602160045260246000fd5b84815260808101600e8510610eec57634e487b7160e01b600052602160045260246000fd5b84602083015283604083015282606083015295945050505050565b808202811582820484141761041357610413610e88565b600082610f3b57634e487b7160e01b600052601260045260246000fd5b50049056fea264697066735822122068a7fda1dffba1f261f5a5a16bc83171b1cbd6572b1ffb16b71996443443bc3964736f6c63430008180033";
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
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "chainId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "oldTxFee_";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "newTxFee_";
            readonly type: "uint256";
        }];
        readonly name: "ForeignGasInfoUpdate";
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
        readonly name: "gasCost";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "txFee";
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
            readonly name: "chainId_";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "txFee_";
            readonly type: "uint256";
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
