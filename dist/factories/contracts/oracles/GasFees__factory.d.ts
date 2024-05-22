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
    static readonly bytecode = "0x608060405234801561001057600080fd5b5061001c60003361004d565b506100477f241ecf16d79d0f8dbfb92cbc07fe17840425976cf0667f022fe9877caa831b083361004d565b506100f9565b6000828152602081815260408083206001600160a01b038516845290915281205460ff166100ef576000838152602081815260408083206001600160a01b03861684529091529020805460ff191660011790556100a73390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45060016100f3565b5060005b92915050565b610b63806101086000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c8063a217fddf1161008c578063d547741f11610066578063d547741f146101d7578063dbb9307f146101ea578063e4194a40146101fd578063ec87621c1461021057600080fd5b8063a217fddf146101a9578063ca80aad3146101b1578063d121cef4146101c457600080fd5b8063248a9ca3116100c8578063248a9ca31461014d5780632f2ff15d1461017057806336568abe1461018357806391d148541461019657600080fd5b8063016c884e146100ef57806301ffc9a7146101155780631281b79314610138575b600080fd5b6101026100fd3660046108f0565b610237565b6040519081526020015b60405180910390f35b61012861012336600461092d565b6102ae565b604051901515815260200161010c565b61014b61014636600461095e565b610307565b005b61010261015b366004610993565b60009081526020819052604090206001015490565b61014b61017e3660046109ac565b610403565b61014b6101913660046109ac565b61042e565b6101286101a43660046109ac565b610466565b610102600081565b61014b6101bf3660046109e8565b61048f565b6101026101d2366004610a12565b610570565b61014b6101e53660046109ac565b6105f4565b6101026101f8366004610a59565b610619565b61010261020b366004610a85565b610662565b6101027f241ecf16d79d0f8dbfb92cbc07fe17840425976cf0667f022fe9877caa831b0881565b6000805b82518110156102a8576001600084838151811061025a5761025a610aa0565b6020026020010151600e81111561027357610273610ab6565b600e81111561028457610284610ab6565b8152602001908152602001600020548261029e9190610acc565b915060010161023b565b50919050565b60006001600160e01b031982166377097a9160e11b14806102df57506001600160e01b03198216630360047560e61b145b806102f257506001600160e01b03198216155b806103015750610301826106a1565b92915050565b7f241ecf16d79d0f8dbfb92cbc07fe17840425976cf0667f022fe9877caa831b08610331816106d6565b60008481526002602052604081208185600e81111561035257610352610ab6565b600e81111561036357610363610ab6565b81526020019081526020016000205490508260026000878152602001908152602001600020600086600e81111561039c5761039c610ab6565b600e8111156103ad576103ad610ab6565b8152602001908152602001600020819055507fa74602ff50c7fb0dee46d88bc01a3144c0a0fe84b4c0f8c744bda8ecebe9cd5a858583866040516103f49493929190610aed565b60405180910390a15050505050565b60008281526020819052604090206001015461041e816106d6565b61042883836106e3565b50505050565b6001600160a01b03811633146104575760405163334bd91960e11b815260040160405180910390fd5b6104618282610775565b505050565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b7f241ecf16d79d0f8dbfb92cbc07fe17840425976cf0667f022fe9877caa831b086104b9816106d6565b60006001600085600e8111156104d1576104d1610ab6565b600e8111156104e2576104e2610ab6565b8152602001908152602001600020549050826001600086600e81111561050a5761050a610ab6565b600e81111561051b5761051b610ab6565b8152602001908152602001600020819055507fa74602ff50c7fb0dee46d88bc01a3144c0a0fe84b4c0f8c744bda8ecebe9cd5a468583866040516105629493929190610aed565b60405180910390a150505050565b6000828152600260205260408120815b83518110156105ec5781600085838151811061059e5761059e610aa0565b6020026020010151600e8111156105b7576105b7610ab6565b600e8111156105c8576105c8610ab6565b815260200190815260200160002054836105e29190610acc565b9250600101610580565b505092915050565b60008281526020819052604090206001015461060f816106d6565b6104288383610775565b60008281526002602052604081208183600e81111561063a5761063a610ab6565b600e81111561064b5761064b610ab6565b815260200190815260200160002054905092915050565b60006001600083600e81111561067a5761067a610ab6565b600e81111561068b5761068b610ab6565b8152602001908152602001600020549050919050565b60006001600160e01b03198216637965db0b60e01b148061030157506301ffc9a760e01b6001600160e01b0319831614610301565b6106e081336107e0565b50565b60006106ef8383610466565b61076d576000838152602081815260408083206001600160a01b03861684529091529020805460ff191660011790556107253390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a4506001610301565b506000610301565b60006107818383610466565b1561076d576000838152602081815260408083206001600160a01b0386168085529252808320805460ff1916905551339286917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a4506001610301565b6107ea8282610466565b61081d5760405163e2517d3f60e01b81526001600160a01b03821660048201526024810183905260440160405180910390fd5b5050565b634e487b7160e01b600052604160045260246000fd5b8035600f811061084657600080fd5b919050565b600082601f83011261085c57600080fd5b8135602067ffffffffffffffff8083111561087957610879610821565b8260051b604051601f19603f8301168101818110848211171561089e5761089e610821565b60405293845260208187018101949081019250878511156108be57600080fd5b6020870191505b848210156108e5576108d682610837565b835291830191908301906108c5565b979650505050505050565b60006020828403121561090257600080fd5b813567ffffffffffffffff81111561091957600080fd5b6109258482850161084b565b949350505050565b60006020828403121561093f57600080fd5b81356001600160e01b03198116811461095757600080fd5b9392505050565b60008060006060848603121561097357600080fd5b8335925061098360208501610837565b9150604084013590509250925092565b6000602082840312156109a557600080fd5b5035919050565b600080604083850312156109bf57600080fd5b8235915060208301356001600160a01b03811681146109dd57600080fd5b809150509250929050565b600080604083850312156109fb57600080fd5b610a0483610837565b946020939093013593505050565b60008060408385031215610a2557600080fd5b82359150602083013567ffffffffffffffff811115610a4357600080fd5b610a4f8582860161084b565b9150509250929050565b60008060408385031215610a6c57600080fd5b82359150610a7c60208401610837565b90509250929050565b600060208284031215610a9757600080fd5b61095782610837565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052602160045260246000fd5b8082018082111561030157634e487b7160e01b600052601160045260246000fd5b84815260808101600f8510610b1257634e487b7160e01b600052602160045260246000fd5b8460208301528360408301528260608301529594505050505056fea26469706673582212208566770b4fe86bb5213e3f86edd3f7262defe6ba9ceb3558046be0406a27b6d464736f6c63430008180033";
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
