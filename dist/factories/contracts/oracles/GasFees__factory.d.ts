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
    static readonly bytecode = "0x608060405234801561001057600080fd5b5061001c60003361004d565b506100477f241ecf16d79d0f8dbfb92cbc07fe17840425976cf0667f022fe9877caa831b083361004d565b506100f9565b6000828152602081815260408083206001600160a01b038516845290915281205460ff166100ef576000838152602081815260408083206001600160a01b03861684529091529020805460ff191660011790556100a73390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45060016100f3565b5060005b92915050565b610bb0806101086000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c8063a217fddf11610097578063d547741f11610066578063d547741f1461021c578063dbb9307f1461022f578063e4194a4014610242578063ec87621c1461025557600080fd5b8063a217fddf146101e1578063adde4774146101e9578063ca80aad3146101f6578063d121cef41461020957600080fd5b80632f2ff15d116100d35780632f2ff15d1461018657806336568abe146101995780635cb01ce4146101ac57806391d14854146101ce57600080fd5b8063016c884e1461010557806301ffc9a71461012b5780631281b7931461014e578063248a9ca314610163575b600080fd5b61011861011336600461093d565b61027c565b6040519081526020015b60405180910390f35b61013e61013936600461097a565b6102f3565b6040519015158152602001610122565b61016161015c3660046109ab565b610354565b005b6101186101713660046109e0565b60009081526020819052604090206001015490565b6101616101943660046109f9565b610450565b6101616101a73660046109f9565b61047b565b630360047560e61b5b6040516001600160e01b03199091168152602001610122565b61013e6101dc3660046109f9565b6104b3565b610118600081565b6377097a9160e11b6101b5565b610161610204366004610a35565b6104dc565b610118610217366004610a5f565b6105bd565b61016161022a3660046109f9565b610641565b61011861023d366004610aa6565b610666565b610118610250366004610ad2565b6106af565b6101187f241ecf16d79d0f8dbfb92cbc07fe17840425976cf0667f022fe9877caa831b0881565b6000805b82518110156102ed576001600084838151811061029f5761029f610aed565b6020026020010151600f8111156102b8576102b8610b03565b600f8111156102c9576102c9610b03565b815260200190815260200160002054826102e39190610b19565b9150600101610280565b50919050565b60006001600160e01b031982166377097a9160e11b148061032457506001600160e01b03198216630360047560e61b145b8061033f57506001600160e01b03198216630f16e5b960e41b145b8061034e575061034e826106ee565b92915050565b7f241ecf16d79d0f8dbfb92cbc07fe17840425976cf0667f022fe9877caa831b0861037e81610723565b60008481526002602052604081208185600f81111561039f5761039f610b03565b600f8111156103b0576103b0610b03565b81526020019081526020016000205490508260026000878152602001908152602001600020600086600f8111156103e9576103e9610b03565b600f8111156103fa576103fa610b03565b8152602001908152602001600020819055507fa74602ff50c7fb0dee46d88bc01a3144c0a0fe84b4c0f8c744bda8ecebe9cd5a858583866040516104419493929190610b3a565b60405180910390a15050505050565b60008281526020819052604090206001015461046b81610723565b6104758383610730565b50505050565b6001600160a01b03811633146104a45760405163334bd91960e11b815260040160405180910390fd5b6104ae82826107c2565b505050565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b7f241ecf16d79d0f8dbfb92cbc07fe17840425976cf0667f022fe9877caa831b0861050681610723565b60006001600085600f81111561051e5761051e610b03565b600f81111561052f5761052f610b03565b8152602001908152602001600020549050826001600086600f81111561055757610557610b03565b600f81111561056857610568610b03565b8152602001908152602001600020819055507fa74602ff50c7fb0dee46d88bc01a3144c0a0fe84b4c0f8c744bda8ecebe9cd5a468583866040516105af9493929190610b3a565b60405180910390a150505050565b6000828152600260205260408120815b8351811015610639578160008583815181106105eb576105eb610aed565b6020026020010151600f81111561060457610604610b03565b600f81111561061557610615610b03565b8152602001908152602001600020548361062f9190610b19565b92506001016105cd565b505092915050565b60008281526020819052604090206001015461065c81610723565b61047583836107c2565b60008281526002602052604081208183600f81111561068757610687610b03565b600f81111561069857610698610b03565b815260200190815260200160002054905092915050565b60006001600083600f8111156106c7576106c7610b03565b600f8111156106d8576106d8610b03565b8152602001908152602001600020549050919050565b60006001600160e01b03198216637965db0b60e01b148061034e57506301ffc9a760e01b6001600160e01b031983161461034e565b61072d813361082d565b50565b600061073c83836104b3565b6107ba576000838152602081815260408083206001600160a01b03861684529091529020805460ff191660011790556107723390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a450600161034e565b50600061034e565b60006107ce83836104b3565b156107ba576000838152602081815260408083206001600160a01b0386168085529252808320805460ff1916905551339286917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a450600161034e565b61083782826104b3565b61086a5760405163e2517d3f60e01b81526001600160a01b03821660048201526024810183905260440160405180910390fd5b5050565b634e487b7160e01b600052604160045260246000fd5b80356010811061089357600080fd5b919050565b600082601f8301126108a957600080fd5b8135602067ffffffffffffffff808311156108c6576108c661086e565b8260051b604051601f19603f830116810181811084821117156108eb576108eb61086e565b604052938452602081870181019490810192508785111561090b57600080fd5b6020870191505b848210156109325761092382610884565b83529183019190830190610912565b979650505050505050565b60006020828403121561094f57600080fd5b813567ffffffffffffffff81111561096657600080fd5b61097284828501610898565b949350505050565b60006020828403121561098c57600080fd5b81356001600160e01b0319811681146109a457600080fd5b9392505050565b6000806000606084860312156109c057600080fd5b833592506109d060208501610884565b9150604084013590509250925092565b6000602082840312156109f257600080fd5b5035919050565b60008060408385031215610a0c57600080fd5b8235915060208301356001600160a01b0381168114610a2a57600080fd5b809150509250929050565b60008060408385031215610a4857600080fd5b610a5183610884565b946020939093013593505050565b60008060408385031215610a7257600080fd5b82359150602083013567ffffffffffffffff811115610a9057600080fd5b610a9c85828601610898565b9150509250929050565b60008060408385031215610ab957600080fd5b82359150610ac960208401610884565b90509250929050565b600060208284031215610ae457600080fd5b6109a482610884565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052602160045260246000fd5b8082018082111561034e57634e487b7160e01b600052601160045260246000fd5b8481526080810160108510610b5f57634e487b7160e01b600052602160045260246000fd5b8460208301528360408301528260608301529594505050505056fea2646970667358221220e0931c235b324ccd1556247f4ec8e1932b95eaec7cadefc94b56a0ba33666b0f64736f6c63430008180033";
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
        readonly inputs: readonly [];
        readonly name: "iGasFeesAdminSelector";
        readonly outputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "selector";
            readonly type: "bytes4";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "iGasFeesSelector";
        readonly outputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "selector";
            readonly type: "bytes4";
        }];
        readonly stateMutability: "pure";
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
