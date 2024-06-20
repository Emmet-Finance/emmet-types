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
    static readonly bytecode = "0x608060405234801561001057600080fd5b5061001c60003361004d565b506100477f241ecf16d79d0f8dbfb92cbc07fe17840425976cf0667f022fe9877caa831b083361004d565b506100f9565b6000828152602081815260408083206001600160a01b038516845290915281205460ff166100ef576000838152602081815260408083206001600160a01b03861684529091529020805460ff191660011790556100a73390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45060016100f3565b5060005b92915050565b610d3d806101086000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c80638771b79d116100a2578063d121cef411610071578063d121cef414610235578063d547741f14610248578063dbb9307f1461025b578063e4194a401461026e578063ec87621c1461028157600080fd5b80638771b79d146101e757806391d1485414610207578063a217fddf1461021a578063ca80aad31461022257600080fd5b8063248a9ca3116100de578063248a9ca3146101815780632f2ff15d146101a457806336568abe146101b757806355574dbe146101ca57600080fd5b8063016c884e1461011057806301ffc9a7146101365780631281b7931461015957806314512ee21461016e575b600080fd5b61012361011e366004610a4e565b610296565b6040519081526020015b60405180910390f35b610149610144366004610a8b565b6102df565b604051901515815260200161012d565b61016c610167366004610ab5565b610340565b005b61016c61017c366004610aea565b610491565b61012361018f366004610b0c565b60009081526020819052604090206001015490565b61016c6101b2366004610b25565b61051f565b61016c6101c5366004610b25565b61054a565b6101d261057d565b6040805192835260208301919091520161012d565b6101236101f5366004610b0c565b60036020526000908152604090205481565b610149610215366004610b25565b610591565b610123600081565b61016c610230366004610b61565b6105ba565b610123610243366004610b8b565b61068f565b61016c610256366004610b25565b6106da565b610123610269366004610bd2565b6106ff565b61012361027c366004610bfe565b61075c565b610123600080516020610ce883398151915281565b6000805b82518110156102d9576102c58382815181106102b8576102b8610c19565b602002602001015161075c565b6102cf9083610c45565b915060010161029a565b50919050565b60006001600160e01b0319821663baba713b60e01b148061031057506001600160e01b0319821663cdaffa0560e01b145b8061032b57506001600160e01b03198216630f16e5b960e41b145b8061033a575061033a82610781565b92915050565b600080516020610ce8833981519152610358816107b6565b60008481526002602052604081208185600d81111561037957610379610c58565b600d81111561038a5761038a610c58565b8152602001908152602001600020549050828114610429576000858152600260205260408120849186600d8111156103c4576103c4610c58565b600d8111156103d5576103d5610c58565b8152602001908152602001600020819055507fa74602ff50c7fb0dee46d88bc01a3144c0a0fe84b4c0f8c744bda8ecebe9cd5a8585838660405161041c9493929190610c6e565b60405180910390a161048a565b60405162461bcd60e51b815260206004820152602b60248201527f4761734665657341646d696e3a205570646174696e672077697468207468652060448201526a39b0b6b2903b30b63ab29760a91b60648201526084015b60405180910390fd5b5050505050565b600080516020610ce88339815191526104a9816107b6565b60008381526003602052604090205482146104295760008381526003602090815260409182902080549085905582518681529182018190529181018490527f596fe1b7eafeba4a27f70eea49bb9e4356ebe3a3b9f256c9f735c9793077c6a29060600160405180910390a150505050565b505050565b60008281526020819052604090206001015461053a816107b6565b61054483836107c3565b50505050565b6001600160a01b03811633146105735760405163334bd91960e11b815260040160405180910390fd5b61051a8282610855565b48600061058b8260026108c0565b90509091565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b600080516020610ce88339815191526105d2816107b6565b60006001600085600d8111156105ea576105ea610c58565b600d8111156105fb576105fb610c58565b815260200190815260200160002054905082811461042957826001600086600d81111561062a5761062a610c58565b600d81111561063b5761063b610c58565b8152602001908152602001600020819055507fa74602ff50c7fb0dee46d88bc01a3144c0a0fe84b4c0f8c744bda8ecebe9cd5a468583866040516106829493929190610c6e565b60405180910390a1610544565b6000805b82518110156106d3576106bf848483815181106106b2576106b2610c19565b60200260200101516106ff565b6106c99083610c45565b9150600101610693565b5092915050565b6000828152602081905260409020600101546106f5816107b6565b6105448383610855565b600082815260036020908152604080832054600290925282208284600d81111561072b5761072b610c58565b600d81111561073c5761073c610c58565b8152602001908152602001600020546107559190610cae565b9392505050565b60008061076761057d565b915050806001600085600d81111561072b5761072b610c58565b60006001600160e01b03198216637965db0b60e01b148061033a57506301ffc9a760e01b6001600160e01b031983161461033a565b6107c08133610942565b50565b60006107cf8383610591565b61084d576000838152602081815260408083206001600160a01b03861684529091529020805460ff191660011790556108053390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a450600161033a565b50600061033a565b60006108618383610591565b1561084d576000838152602081815260408083206001600160a01b0386168085529252808320805460ff1916905551339286917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a450600161033a565b60008215806108cd575081155b156108da5750600061033a565b50818102816108e98483610cc5565b1461033a5760405162461bcd60e51b8152602060048201526024808201527f55696e743235364d6174683a206d756c7469706c69636174696f6e206f766572604482015263666c6f7760e01b6064820152608401610481565b61094c8282610591565b61097b5760405163e2517d3f60e01b81526001600160a01b038216600482015260248101839052604401610481565b5050565b634e487b7160e01b600052604160045260246000fd5b8035600e81106109a457600080fd5b919050565b600082601f8301126109ba57600080fd5b8135602067ffffffffffffffff808311156109d7576109d761097f565b8260051b604051601f19603f830116810181811084821117156109fc576109fc61097f565b6040529384526020818701810194908101925087851115610a1c57600080fd5b6020870191505b84821015610a4357610a3482610995565b83529183019190830190610a23565b979650505050505050565b600060208284031215610a6057600080fd5b813567ffffffffffffffff811115610a7757600080fd5b610a83848285016109a9565b949350505050565b600060208284031215610a9d57600080fd5b81356001600160e01b03198116811461075557600080fd5b600080600060608486031215610aca57600080fd5b83359250610ada60208501610995565b9150604084013590509250925092565b60008060408385031215610afd57600080fd5b50508035926020909101359150565b600060208284031215610b1e57600080fd5b5035919050565b60008060408385031215610b3857600080fd5b8235915060208301356001600160a01b0381168114610b5657600080fd5b809150509250929050565b60008060408385031215610b7457600080fd5b610b7d83610995565b946020939093013593505050565b60008060408385031215610b9e57600080fd5b82359150602083013567ffffffffffffffff811115610bbc57600080fd5b610bc8858286016109a9565b9150509250929050565b60008060408385031215610be557600080fd5b82359150610bf560208401610995565b90509250929050565b600060208284031215610c1057600080fd5b61075582610995565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b8082018082111561033a5761033a610c2f565b634e487b7160e01b600052602160045260246000fd5b84815260808101600e8510610c9357634e487b7160e01b600052602160045260246000fd5b84602083015283604083015282606083015295945050505050565b808202811582820484141761033a5761033a610c2f565b600082610ce257634e487b7160e01b600052601260045260246000fd5b50049056fe241ecf16d79d0f8dbfb92cbc07fe17840425976cf0667f022fe9877caa831b08a2646970667358221220023e4240582893f465b3d892980ecf45585bd50b525c9f66fdf220a16ccda8e764736f6c63430008180033";
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
