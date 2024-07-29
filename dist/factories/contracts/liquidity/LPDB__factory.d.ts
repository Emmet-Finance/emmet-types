import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type { LPDB, LPDBInterface } from "../../../contracts/liquidity/LPDB";
type LPDBConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class LPDB__factory extends ContractFactory {
    constructor(...args: LPDBConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<LPDB & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): LPDB__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5061001c60003361004d565b506100477f241ecf16d79d0f8dbfb92cbc07fe17840425976cf0667f022fe9877caa831b083361004d565b506100f9565b6000828152602081815260408083206001600160a01b038516845290915281205460ff166100ef576000838152602081815260408083206001600160a01b03861684529091529020805460ff191660011790556100a73390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45060016100f3565b5060005b92915050565b6116dd806101086000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c806391d148541161008c578063b4142f6511610066578063b4142f6514610215578063c049f87014610235578063d547741f14610248578063ec87621c1461025b57600080fd5b806391d14854146101c3578063a217fddf146101fa578063a49d32e81461020257600080fd5b80632f2ff15d116100c85780632f2ff15d1461015d57806336568abe14610170578063462f7b251461018357806375f49c00146101a357600080fd5b806301ffc9a7146100ef5780631e6bea2e14610117578063248a9ca31461012c575b600080fd5b6101026100fd366004610e82565b610282565b60405190151581526020015b60405180910390f35b61012a610125366004610f82565b61031b565b005b61014f61013a366004610fef565b60009081526020819052604090206001015490565b60405190815260200161010e565b61012a61016b366004611008565b610472565b61012a61017e366004611008565b61049d565b610196610191366004611044565b6104ee565b60405161010e91906111b8565b6101b66101b1366004610fef565b6105db565b60405161010e919061124c565b6101026101d1366004611008565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b61014f600081565b61012a610210366004610f82565b61083b565b61022861022336600461125f565b610967565b60405161010e91906112a6565b61012a61024336600461125f565b610a1d565b61012a610256366004611008565b610ac6565b61014f7f241ecf16d79d0f8dbfb92cbc07fe17840425976cf0667f022fe9877caa831b0881565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f7965db0b00000000000000000000000000000000000000000000000000000000148061031557507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b7f241ecf16d79d0f8dbfb92cbc07fe17840425976cf0667f022fe9877caa831b0861034581610aeb565b610350848484610af8565b60008481526002602052604090819020905161036d9085906112b9565b90815260200160405180910390208054610386906112d5565b90506000146040518060600160405280602d815260200161160c602d9139906103cb5760405162461bcd60e51b81526004016103c291906112a6565b60405180910390fd5b5060008481526001602081815260408320805492830181558352909120016103f3848261135f565b5081600260008681526020019081526020016000208460405161041691906112b9565b90815260200160405180910390209081610430919061135f565b507fc1d8dff59f02d66b069ca8e7474b741c7f12bc35ff3b344848461364cf5dcc748484846040516104649392919061141f565b60405180910390a150505050565b60008281526020819052604090206001015461048d81610aeb565b6104978383610bad565b50505050565b6001600160a01b03811633146104df576040517f6697b23200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104e98282610c57565b505050565b80516060908067ffffffffffffffff81111561050c5761050c610ecb565b60405190808252806020026020018201604052801561055257816020015b60408051808201909152600081526060602082015281526020019060019003908161052a5790505b50915060005b818110156105d457604051806040016040528085838151811061057d5761057d611454565b602002602001015181526020016105ac86848151811061059f5761059f611454565b60200260200101516105db565b8152508382815181106105c1576105c1611454565b6020908102919091010152600101610558565b5050919050565b60606000821160405180606001604052806021815260200161163960219139906106185760405162461bcd60e51b81526004016103c291906112a6565b506000828152600160205260409020548067ffffffffffffffff81111561064157610641610ecb565b60405190808252806020026020018201604052801561068657816020015b604080518082019091526060808252602082015281526020019060019003908161065f5790505b50915060005b818110156105d45760008481526001602052604081208054839081106106b4576106b4611454565b9060005260206000200180546106c9906112d5565b80601f01602080910402602001604051908101604052809291908181526020018280546106f5906112d5565b80156107425780601f1061071757610100808354040283529160200191610742565b820191906000526020600020905b81548152906001019060200180831161072557829003601f168201915b505050505090506040518060400160405280600260008881526020019081526020016000208360405161077591906112b9565b9081526020016040518091039020805461078e906112d5565b80601f01602080910402602001604051908101604052809291908181526020018280546107ba906112d5565b80156108075780601f106107dc57610100808354040283529160200191610807565b820191906000526020600020905b8154815290600101906020018083116107ea57829003601f168201915b505050505081526020018281525084838151811061082757610827611454565b60209081029190910101525060010161068c565b7f241ecf16d79d0f8dbfb92cbc07fe17840425976cf0667f022fe9877caa831b0861086581610aeb565b610870848484610af8565b60008481526002602052604090819020905161088d9085906112b9565b908152602001604051809103902080546108a6906112d5565b90506000036108f75760405162461bcd60e51b815260206004820152601360248201527f506f6f6c20646f6573206e6f742065786973740000000000000000000000000060448201526064016103c2565b81600260008681526020019081526020016000208460405161091991906112b9565b90815260200160405180910390209081610933919061135f565b507f9a984ffcca41baa226ba1aad1c2378d05e2031121e38fd5f418c3c6196b8c8d08484846040516104649392919061141f565b600260209081526000928352604090922081518083018401805192815290840192909301919091209152805461099c906112d5565b80601f01602080910402602001604051908101604052809291908181526020018280546109c8906112d5565b8015610a155780601f106109ea57610100808354040283529160200191610a15565b820191906000526020600020905b8154815290600101906020018083116109f857829003601f168201915b505050505081565b7f241ecf16d79d0f8dbfb92cbc07fe17840425976cf0667f022fe9877caa831b08610a4781610aeb565b600083815260026020526040908190209051610a649084906112b9565b90815260200160405180910390206000610a7e9190610e34565b610a888383610cda565b7f2fac3bdfc4a80214cc3cc1b15e5955f209c37fe0aece04e8061d9ec7a7dac45c8383604051610ab992919061146a565b60405180910390a1505050565b600082815260208190526040902060010154610ae181610aeb565b6104978383610c57565b610af58133610dc4565b50565b600083116040518060600160405280602181526020016116396021913990610b335760405162461bcd60e51b81526004016103c291906112a6565b5060018251116040518060600160405280602d815260200161165a602d913990610b705760405162461bcd60e51b81526004016103c291906112a6565b50600081511160405180606001604052806021815260200161168760219139906104975760405162461bcd60e51b81526004016103c291906112a6565b6000828152602081815260408083206001600160a01b038516845290915281205460ff16610c4f576000838152602081815260408083206001600160a01b03861684529091529020805460ff19166001179055610c073390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a4506001610315565b506000610315565b6000828152602081815260408083206001600160a01b038516845290915281205460ff1615610c4f576000838152602081815260408083206001600160a01b0386168085529252808320805460ff1916905551339286917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a4506001610315565b6000828152600160205260408120805490915b81811015610dbd578380519060200120838281548110610d0f57610d0f611454565b90600052602060002001604051610d26919061148b565b604051809103902003610db55782610d3f600184611501565b81548110610d4f57610d4f611454565b90600052602060002001838281548110610d6b57610d6b611454565b906000526020600020019081610d819190611522565b5082805480610d9257610d926115f5565b600190038181906000526020600020016000610dae9190610e34565b9055610dbd565b600101610ced565b5050505050565b6000828152602081815260408083206001600160a01b038516845290915290205460ff16610e30576040517fe2517d3f0000000000000000000000000000000000000000000000000000000081526001600160a01b0382166004820152602481018390526044016103c2565b5050565b508054610e40906112d5565b6000825580601f10610e50575050565b601f016020900490600052602060002090810190610af591905b80821115610e7e5760008155600101610e6a565b5090565b600060208284031215610e9457600080fd5b81357fffffffff0000000000000000000000000000000000000000000000000000000081168114610ec457600080fd5b9392505050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715610f0a57610f0a610ecb565b604052919050565b600082601f830112610f2357600080fd5b813567ffffffffffffffff811115610f3d57610f3d610ecb565b610f506020601f19601f84011601610ee1565b818152846020838601011115610f6557600080fd5b816020850160208301376000918101602001919091529392505050565b600080600060608486031215610f9757600080fd5b83359250602084013567ffffffffffffffff80821115610fb657600080fd5b610fc287838801610f12565b93506040860135915080821115610fd857600080fd5b50610fe586828701610f12565b9150509250925092565b60006020828403121561100157600080fd5b5035919050565b6000806040838503121561101b57600080fd5b8235915060208301356001600160a01b038116811461103957600080fd5b809150509250929050565b6000602080838503121561105757600080fd5b823567ffffffffffffffff8082111561106f57600080fd5b818501915085601f83011261108357600080fd5b81358181111561109557611095610ecb565b8060051b91506110a6848301610ee1565b81815291830184019184810190888411156110c057600080fd5b938501935b838510156110de578435825293850193908501906110c5565b98975050505050505050565b60005b838110156111055781810151838201526020016110ed565b50506000910152565b600081518084526111268160208601602086016110ea565b601f01601f19169290920160200192915050565b600082825180855260208086019550808260051b84010181860160005b848110156111ab57601f1986840301895281516040815181865261117d8287018261110e565b91505085820151915084810386860152611197818361110e565b9a86019a9450505090830190600101611157565b5090979650505050505050565b600060208083018184528085518083526040925060408601915060408160051b87010184880160005b8381101561123e578883037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc001855281518051845287015187840187905261122b8785018261113a565b95880195935050908601906001016111e1565b509098975050505050505050565b602081526000610ec4602083018461113a565b6000806040838503121561127257600080fd5b82359150602083013567ffffffffffffffff81111561129057600080fd5b61129c85828601610f12565b9150509250929050565b602081526000610ec4602083018461110e565b600082516112cb8184602087016110ea565b9190910192915050565b600181811c908216806112e957607f821691505b60208210810361130957634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156104e9576000816000526020600020601f850160051c810160208610156113385750805b601f850160051c820191505b8181101561135757828155600101611344565b505050505050565b815167ffffffffffffffff81111561137957611379610ecb565b61138d8161138784546112d5565b8461130f565b602080601f8311600181146113c257600084156113aa5750858301515b600019600386901b1c1916600185901b178555611357565b600085815260208120601f198616915b828110156113f1578886015182559484019460019091019084016113d2565b508582101561140f5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b838152606060208201526000611438606083018561110e565b828103604084015261144a818561110e565b9695505050505050565b634e487b7160e01b600052603260045260246000fd5b828152604060208201526000611483604083018461110e565b949350505050565b6000808354611499816112d5565b600182811680156114b157600181146114c6576114f5565b60ff19841687528215158302870194506114f5565b8760005260208060002060005b858110156114ec5781548a8201529084019082016114d3565b50505082870194505b50929695505050505050565b8181038181111561031557634e487b7160e01b600052601160045260246000fd5b81810361152d575050565b61153782546112d5565b67ffffffffffffffff81111561154f5761154f610ecb565b61155d8161138784546112d5565b6000601f82116001811461159157600083156115795750848201545b600019600385901b1c1916600184901b178455610dbd565b600085815260209020601f19841690600086815260209020845b838110156115cb57828601548255600195860195909101906020016115ab565b508583101561140f5793015460001960f8600387901b161c19169092555050600190811b01905550565b634e487b7160e01b600052603160045260246000fdfe5375636820706f6f6c20616c7265616479206578697374732c207472792063616c6c696e67207570646174652e636861696e4964206d7573742062652067726561746572207468616e207a65726f5468652073796d626f6c206d7573742062652067726561746572207468616e206f6e652063686172616374657254686520706f6f6c277320616464726573732063616e6e6f74206265207a65726fa264697066735822122011041ac49b0a351dd27433066f4b805d7895ca4e9ce2db88b077393e942ecfda64736f6c63430008180033";
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
            readonly internalType: "string";
            readonly name: "symbol";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "pool";
            readonly type: "string";
        }];
        readonly name: "PoolAdded";
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
            readonly internalType: "string";
            readonly name: "symbol";
            readonly type: "string";
        }];
        readonly name: "PoolDeleted";
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
            readonly internalType: "string";
            readonly name: "symbol";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "pool";
            readonly type: "string";
        }];
        readonly name: "PoolUpdated";
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
        }, {
            readonly internalType: "string";
            readonly name: "symbol";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "pool";
            readonly type: "string";
        }];
        readonly name: "addPool";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "chainId";
            readonly type: "uint256";
        }, {
            readonly internalType: "string";
            readonly name: "symbol";
            readonly type: "string";
        }];
        readonly name: "deletePool";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256[]";
            readonly name: "chainIds";
            readonly type: "uint256[]";
        }];
        readonly name: "getChainPools";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "chainId";
                readonly type: "uint256";
            }, {
                readonly components: readonly [{
                    readonly internalType: "string";
                    readonly name: "addr";
                    readonly type: "string";
                }, {
                    readonly internalType: "string";
                    readonly name: "symbol";
                    readonly type: "string";
                }];
                readonly internalType: "struct LPDB.SymbolAddress[]";
                readonly name: "data";
                readonly type: "tuple[]";
            }];
            readonly internalType: "struct LPDB.ChainData[]";
            readonly name: "allPools";
            readonly type: "tuple[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "chainId";
            readonly type: "uint256";
        }];
        readonly name: "getPoolsByChain";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "string";
                readonly name: "addr";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "symbol";
                readonly type: "string";
            }];
            readonly internalType: "struct LPDB.SymbolAddress[]";
            readonly name: "poolsData";
            readonly type: "tuple[]";
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
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly name: "pools";
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
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "chainId";
            readonly type: "uint256";
        }, {
            readonly internalType: "string";
            readonly name: "symbol";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "pool";
            readonly type: "string";
        }];
        readonly name: "updatePool";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): LPDBInterface;
    static connect(address: string, runner?: ContractRunner | null): LPDB;
}
export {};
