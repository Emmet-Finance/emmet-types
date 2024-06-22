import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, BigNumberish, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type { EmmetPriceFeed, EmmetPriceFeedInterface } from "../../../contracts/oracles/EmmetPriceFeed";
type EmmetPriceFeedConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class EmmetPriceFeed__factory extends ContractFactory {
    constructor(...args: EmmetPriceFeedConstructorParams);
    getDeployTransaction(decimals_: BigNumberish, description_: string, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(decimals_: BigNumberish, description_: string, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<EmmetPriceFeed & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): EmmetPriceFeed__factory;
    static readonly bytecode = "0x60a060405234801561001057600080fd5b50604051610d92380380610d9283398101604081905261002f9161014f565b61003a60003361008d565b506100657f241ecf16d79d0f8dbfb92cbc07fe17840425976cf0667f022fe9877caa831b083361008d565b50426080526001805460ff191660ff8416179055600561008582826102be565b50505061037c565b6000828152602081815260408083206001600160a01b038516845290915281205460ff1661012f576000838152602081815260408083206001600160a01b03861684529091529020805460ff191660011790556100e73390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a4506001610133565b5060005b92915050565b634e487b7160e01b600052604160045260246000fd5b6000806040838503121561016257600080fd5b825160ff8116811461017357600080fd5b60208401519092506001600160401b0381111561018f57600080fd5b8301601f810185136101a057600080fd5b80516001600160401b038111156101b9576101b9610139565b604051601f8201601f19908116603f011681016001600160401b03811182821017156101e7576101e7610139565b6040528181528282016020018710156101ff57600080fd5b60005b8281101561021e57602081850181015183830182015201610202565b506000602083830101528093505050509250929050565b600181811c9082168061024957607f821691505b60208210810361026957634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156102b957806000526020600020601f840160051c810160208510156102965750805b601f840160051c820191505b818110156102b657600081556001016102a2565b50505b505050565b81516001600160401b038111156102d7576102d7610139565b6102eb816102e58454610235565b8461026f565b6020601f82116001811461031f57600083156103075750848201515b600019600385901b1c1916600184901b1784556102b6565b600084815260208120601f198516915b8281101561034f578785015182556020948501946001909201910161032f565b508482101561036d5786840151600019600387901b60f8161c191681555b50505050600190811b01905550565b6080516109f461039e60003960008181610234015261028601526109f46000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c806385ef83381161008c578063d547741f11610066578063d547741f146101f5578063ec87621c14610208578063f21f537d1461022f578063feaf968c1461025657600080fd5b806385ef8338146101a357806391d14854146101b6578063a217fddf146101ed57600080fd5b8063313ce567116100c8578063313ce5671461015d57806336568abe1461017257806350d25bcd146101855780637284e4161461018e57600080fd5b806301ffc9a7146100ef578063248a9ca3146101175780632f2ff15d14610148575b600080fd5b6101026100fd3660046107d5565b6102bf565b60405190151581526020015b60405180910390f35b61013a61012536600461081e565b60009081526020819052604090206001015490565b60405190815260200161010e565b61015b610156366004610837565b610358565b005b60015460405160ff909116815260200161010e565b61015b610180366004610837565b610383565b61013a60025481565b6101966103d4565b60405161010e9190610873565b61015b6101b13660046108df565b610462565b6101026101c4366004610837565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b61013a600081565b61015b610203366004610837565b610606565b61013a7f241ecf16d79d0f8dbfb92cbc07fe17840425976cf0667f022fe9877caa831b0881565b61013a7f000000000000000000000000000000000000000000000000000000000000000081565b6001546002546003546004546040805161010090950469ffffffffffffffffffff908116865260208601949094527f000000000000000000000000000000000000000000000000000000000000000090850152606084019190915216608082015260a00161010e565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f7965db0b00000000000000000000000000000000000000000000000000000000148061035257507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b6000828152602081905260409020600101546103738161062b565b61037d8383610638565b50505050565b6001600160a01b03811633146103c5576040517f6697b23200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103cf82826106e2565b505050565b600580546103e190610913565b80601f016020809104026020016040519081016040528092919081815260200182805461040d90610913565b801561045a5780601f1061042f5761010080835404028352916020019161045a565b820191906000526020600020905b81548152906001019060200180831161043d57829003601f168201915b505050505081565b7f241ecf16d79d0f8dbfb92cbc07fe17840425976cf0667f022fe9877caa831b0861048c8161062b565b8169ffffffffffffffffffff1660000361052d576040517f54b3e2a700000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f496e73756666696369656e74206e756d626572206f6620616e7377657273206960448201527f6e20726f756e642e00000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b60018054610100900469ffffffffffffffffffff16908061054d83610966565b82546101009290920a69ffffffffffffffffffff81810219909316918316021790915542600355600480547fffffffffffffffffffffffffffffffffffffffffffff00000000000000000000169185169190911790555060025483146103cf576002805490849055604080518281526020810186905269ffffffffffffffffffff85168183015290517fdc28ce8f0f1e7c276751ae27d4fce6b5bec464a41ca6194df415378c1523de4d9181900360600190a150505050565b6000828152602081905260409020600101546106218161062b565b61037d83836106e2565b6106358133610765565b50565b6000828152602081815260408083206001600160a01b038516845290915281205460ff166106da576000838152602081815260408083206001600160a01b03861684529091529020805460ff191660011790556106923390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a4506001610352565b506000610352565b6000828152602081815260408083206001600160a01b038516845290915281205460ff16156106da576000838152602081815260408083206001600160a01b0386168085529252808320805460ff1916905551339286917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a4506001610352565b6000828152602081815260408083206001600160a01b038516845290915290205460ff166107d1576040517fe2517d3f0000000000000000000000000000000000000000000000000000000081526001600160a01b038216600482015260248101839052604401610524565b5050565b6000602082840312156107e757600080fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461081757600080fd5b9392505050565b60006020828403121561083057600080fd5b5035919050565b6000806040838503121561084a57600080fd5b8235915060208301356001600160a01b038116811461086857600080fd5b809150509250929050565b602081526000825180602084015260005b818110156108a15760208186018101516040868401015201610884565b5060006040828501015260407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011684010191505092915050565b600080604083850312156108f257600080fd5b82359150602083013569ffffffffffffffffffff8116811461086857600080fd5b600181811c9082168061092757607f821691505b602082108103610960577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b600069ffffffffffffffffffff821669ffffffffffffffffffff81036109b5577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6001019291505056fea264697066735822122064bb5cf12e63d4255f82888b48271a5718d03040645aab2152a6b9cf4df97a0f64736f6c634300081a0033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "decimals_";
            readonly type: "uint8";
        }, {
            readonly internalType: "string";
            readonly name: "description_";
            readonly type: "string";
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
            readonly internalType: "string";
            readonly name: "reason";
            readonly type: "string";
        }];
        readonly name: "EmmetPriceFeedError";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "int256";
            readonly name: "oldPrice";
            readonly type: "int256";
        }, {
            readonly indexed: false;
            readonly internalType: "int256";
            readonly name: "newPrice";
            readonly type: "int256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint80";
            readonly name: "answeredInRound";
            readonly type: "uint80";
        }];
        readonly name: "PriceUpdated";
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
        readonly inputs: readonly [];
        readonly name: "description";
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
        readonly name: "latestAnswer";
        readonly outputs: readonly [{
            readonly internalType: "int256";
            readonly name: "";
            readonly type: "int256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "latestRoundData";
        readonly outputs: readonly [{
            readonly internalType: "uint80";
            readonly name: "roundId";
            readonly type: "uint80";
        }, {
            readonly internalType: "int256";
            readonly name: "answer";
            readonly type: "int256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_startedAt";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "updatedAt";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint80";
            readonly name: "answeredInRound";
            readonly type: "uint80";
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
        readonly inputs: readonly [];
        readonly name: "startedAt";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
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
            readonly internalType: "int256";
            readonly name: "newPrice_";
            readonly type: "int256";
        }, {
            readonly internalType: "uint80";
            readonly name: "answeredInRound_";
            readonly type: "uint80";
        }];
        readonly name: "updateTokenPrice";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): EmmetPriceFeedInterface;
    static connect(address: string, runner?: ContractRunner | null): EmmetPriceFeed;
}
export {};
