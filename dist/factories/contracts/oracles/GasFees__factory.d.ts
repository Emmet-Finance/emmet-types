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
    static readonly bytecode = "0x608060405234801561001057600080fd5b5061001c60003361004d565b506100477f241ecf16d79d0f8dbfb92cbc07fe17840425976cf0667f022fe9877caa831b083361004d565b506100f9565b6000828152602081815260408083206001600160a01b038516845290915281205460ff166100ef576000838152602081815260408083206001600160a01b03861684529091529020805460ff191660011790556100a73390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45060016100f3565b5060005b92915050565b610d5f806101086000396000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c806391d14854116100ad578063d547741f11610071578063d547741f14610263578063dbb9307f14610276578063e4194a4014610289578063ebf259e71461029c578063ec87621c1461030857600080fd5b806391d1485414610215578063a217fddf14610228578063adde477414610230578063ca80aad31461023d578063d121cef41461025057600080fd5b80632f2ff15d116100f45780632f2ff15d146101a757806336568abe146101ba57806336894420146101cd57806355574dbe146101e05780635cb01ce4146101f357600080fd5b8063016c884e1461012657806301ffc9a71461014c5780631281b7931461016f578063248a9ca314610184575b600080fd5b610139610134366004610a5d565b61031d565b6040519081526020015b60405180910390f35b61015f61015a366004610a9a565b610394565b6040519015158152602001610143565b61018261017d366004610acb565b6103f5565b005b610139610192366004610b00565b60009081526020819052604090206001015490565b6101826101b5366004610b19565b6104df565b6101826101c8366004610b19565b61050a565b6101826101db366004610b66565b610542565b604080514881523a602082015201610143565b63077442cb60e51b5b6040516001600160e01b03199091168152602001610143565b61015f610223366004610b19565b6105e5565b610139600081565b632ed16e2760e21b6101fc565b61018261024b366004610bc4565b61060e565b61013961025e366004610bee565b6106dd565b610182610271366004610b19565b610761565b610139610284366004610c35565b610786565b610139610297366004610c61565b6107cf565b6102db6102aa366004610b00565b60036020526000908152604090205460ff808216916101008104821691620100008204811691630100000090041684565b6040805160ff95861681529385166020850152918416918301919091529091166060820152608001610143565b610139600080516020610d0a83398151915281565b6000805b825181101561038e576001600084838151811061034057610340610c7c565b6020026020010151601081111561035957610359610c92565b601081111561036a5761036a610c92565b815260200190815260200160002054826103849190610ca8565b9150600101610321565b50919050565b60006001600160e01b03198216632ed16e2760e21b14806103c557506001600160e01b0319821663077442cb60e51b145b806103e057506001600160e01b03198216630f16e5b960e41b145b806103ef57506103ef8261080e565b92915050565b600080516020610d0a83398151915261040d81610843565b60008481526002602052604081208185601081111561042e5761042e610c92565b601081111561043f5761043f610c92565b81526020019081526020016000205490508260026000878152602001908152602001600020600086601081111561047857610478610c92565b601081111561048957610489610c92565b8152602001908152602001600020819055507fa74602ff50c7fb0dee46d88bc01a3144c0a0fe84b4c0f8c744bda8ecebe9cd5a858583866040516104d09493929190610cc9565b60405180910390a15050505050565b6000828152602081905260409020600101546104fa81610843565b6105048383610850565b50505050565b6001600160a01b03811633146105335760405163334bd91960e11b815260040160405180910390fd5b61053d82826108e2565b505050565b600080516020610d0a83398151915261055a81610843565b506040805160808101825260ff95861681529385166020808601918252938616858301908152928616606086019081526000978852600390945295209251835495519151925190851661ffff1990961695909517610100918516919091021763ffff00001916620100009184169190910263ff00000019161763010000009390921692909202179055565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b600080516020610d0a83398151915261062681610843565b60006001600085601081111561063e5761063e610c92565b601081111561064f5761064f610c92565b8152602001908152602001600020549050826001600086601081111561067757610677610c92565b601081111561068857610688610c92565b8152602001908152602001600020819055507fa74602ff50c7fb0dee46d88bc01a3144c0a0fe84b4c0f8c744bda8ecebe9cd5a468583866040516106cf9493929190610cc9565b60405180910390a150505050565b6000828152600260205260408120815b83518110156107595781600085838151811061070b5761070b610c7c565b6020026020010151601081111561072457610724610c92565b601081111561073557610735610c92565b8152602001908152602001600020548361074f9190610ca8565b92506001016106ed565b505092915050565b60008281526020819052604090206001015461077c81610843565b61050483836108e2565b6000828152600260205260408120818360108111156107a7576107a7610c92565b60108111156107b8576107b8610c92565b815260200190815260200160002054905092915050565b6000600160008360108111156107e7576107e7610c92565b60108111156107f8576107f8610c92565b8152602001908152602001600020549050919050565b60006001600160e01b03198216637965db0b60e01b14806103ef57506301ffc9a760e01b6001600160e01b03198316146103ef565b61084d813361094d565b50565b600061085c83836105e5565b6108da576000838152602081815260408083206001600160a01b03861684529091529020805460ff191660011790556108923390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45060016103ef565b5060006103ef565b60006108ee83836105e5565b156108da576000838152602081815260408083206001600160a01b0386168085529252808320805460ff1916905551339286917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45060016103ef565b61095782826105e5565b61098a5760405163e2517d3f60e01b81526001600160a01b03821660048201526024810183905260440160405180910390fd5b5050565b634e487b7160e01b600052604160045260246000fd5b8035601181106109b357600080fd5b919050565b600082601f8301126109c957600080fd5b8135602067ffffffffffffffff808311156109e6576109e661098e565b8260051b604051601f19603f83011681018181108482111715610a0b57610a0b61098e565b6040529384526020818701810194908101925087851115610a2b57600080fd5b6020870191505b84821015610a5257610a43826109a4565b83529183019190830190610a32565b979650505050505050565b600060208284031215610a6f57600080fd5b813567ffffffffffffffff811115610a8657600080fd5b610a92848285016109b8565b949350505050565b600060208284031215610aac57600080fd5b81356001600160e01b031981168114610ac457600080fd5b9392505050565b600080600060608486031215610ae057600080fd5b83359250610af0602085016109a4565b9150604084013590509250925092565b600060208284031215610b1257600080fd5b5035919050565b60008060408385031215610b2c57600080fd5b8235915060208301356001600160a01b0381168114610b4a57600080fd5b809150509250929050565b803560ff811681146109b357600080fd5b600080600080600060a08688031215610b7e57600080fd5b85359450610b8e60208701610b55565b9350610b9c60408701610b55565b9250610baa60608701610b55565b9150610bb860808701610b55565b90509295509295909350565b60008060408385031215610bd757600080fd5b610be0836109a4565b946020939093013593505050565b60008060408385031215610c0157600080fd5b82359150602083013567ffffffffffffffff811115610c1f57600080fd5b610c2b858286016109b8565b9150509250929050565b60008060408385031215610c4857600080fd5b82359150610c58602084016109a4565b90509250929050565b600060208284031215610c7357600080fd5b610ac4826109a4565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052602160045260246000fd5b808201808211156103ef57634e487b7160e01b600052601160045260246000fd5b8481526080810160118510610cee57634e487b7160e01b600052602160045260246000fd5b8460208301528360408301528260608301529594505050505056fe241ecf16d79d0f8dbfb92cbc07fe17840425976cf0667f022fe9877caa831b08a2646970667358221220e0bf71fd4b2c966b58f143dd4c16c81ba3829794df988325f8287bfae564249464736f6c63430008180033";
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
            readonly name: "chainId";
            readonly type: "uint256";
        }];
        readonly name: "gasInfo";
        readonly outputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "baseFee";
            readonly type: "uint8";
        }, {
            readonly internalType: "uint8";
            readonly name: "safePrice";
            readonly type: "uint8";
        }, {
            readonly internalType: "uint8";
            readonly name: "proposePrise";
            readonly type: "uint8";
        }, {
            readonly internalType: "uint8";
            readonly name: "fastPrice";
            readonly type: "uint8";
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
            readonly internalType: "uint256";
            readonly name: "chainId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint8";
            readonly name: "baseFee";
            readonly type: "uint8";
        }, {
            readonly internalType: "uint8";
            readonly name: "safePrice";
            readonly type: "uint8";
        }, {
            readonly internalType: "uint8";
            readonly name: "proposePrise";
            readonly type: "uint8";
        }, {
            readonly internalType: "uint8";
            readonly name: "fastPrice";
            readonly type: "uint8";
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
