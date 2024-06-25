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
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b5060405162000dbb38038062000dbb83398101604081905262000034916200015e565b6200004160003362000099565b506200006e7f241ecf16d79d0f8dbfb92cbc07fe17840425976cf0667f022fe9877caa831b083362000099565b50426080526001805460ff191660ff84161790556005620000908282620002df565b505050620003ab565b6000828152602081815260408083206001600160a01b038516845290915281205460ff166200013e576000838152602081815260408083206001600160a01b03861684529091529020805460ff19166001179055620000f53390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a450600162000142565b5060005b92915050565b634e487b7160e01b600052604160045260246000fd5b600080604083850312156200017257600080fd5b825160ff811681146200018457600080fd5b602084810151919350906001600160401b0380821115620001a457600080fd5b818601915086601f830112620001b957600080fd5b815181811115620001ce57620001ce62000148565b604051601f8201601f19908116603f01168101908382118183101715620001f957620001f962000148565b8160405282815289868487010111156200021257600080fd5b600093505b8284101562000236578484018601518185018701529285019262000217565b60008684830101528096505050505050509250929050565b600181811c908216806200026357607f821691505b6020821081036200028457634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620002da576000816000526020600020601f850160051c81016020861015620002b55750805b601f850160051c820191505b81811015620002d657828155600101620002c1565b5050505b505050565b81516001600160401b03811115620002fb57620002fb62000148565b62000313816200030c84546200024e565b846200028a565b602080601f8311600181146200034b5760008415620003325750858301515b600019600386901b1c1916600185901b178555620002d6565b600085815260208120601f198616915b828110156200037c578886015182559484019460019091019084016200035b565b50858210156200039b5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6080516109ed620003ce60003960008181610234015261028601526109ed6000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c806385ef83381161008c578063d547741f11610066578063d547741f146101f5578063ec87621c14610208578063f21f537d1461022f578063feaf968c1461025657600080fd5b806385ef8338146101a357806391d14854146101b6578063a217fddf146101ed57600080fd5b8063313ce567116100c8578063313ce5671461015d57806336568abe1461017257806350d25bcd146101855780637284e4161461018e57600080fd5b806301ffc9a7146100ef578063248a9ca3146101175780632f2ff15d14610148575b600080fd5b6101026100fd3660046107d5565b6102bf565b60405190151581526020015b60405180910390f35b61013a61012536600461081e565b60009081526020819052604090206001015490565b60405190815260200161010e565b61015b610156366004610837565b610358565b005b60015460405160ff909116815260200161010e565b61015b610180366004610837565b610383565b61013a60025481565b6101966103d4565b60405161010e9190610873565b61015b6101b13660046108e0565b610462565b6101026101c4366004610837565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b61013a600081565b61015b610203366004610837565b610606565b61013a7f241ecf16d79d0f8dbfb92cbc07fe17840425976cf0667f022fe9877caa831b0881565b61013a7f000000000000000000000000000000000000000000000000000000000000000081565b6001546002546003546004546040805161010090950469ffffffffffffffffffff908116865260208601949094527f000000000000000000000000000000000000000000000000000000000000000090850152606084019190915216608082015260a00161010e565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f7965db0b00000000000000000000000000000000000000000000000000000000148061035257507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b6000828152602081905260409020600101546103738161062b565b61037d8383610638565b50505050565b6001600160a01b03811633146103c5576040517f6697b23200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103cf82826106e2565b505050565b600580546103e190610914565b80601f016020809104026020016040519081016040528092919081815260200182805461040d90610914565b801561045a5780601f1061042f5761010080835404028352916020019161045a565b820191906000526020600020905b81548152906001019060200180831161043d57829003601f168201915b505050505081565b7f241ecf16d79d0f8dbfb92cbc07fe17840425976cf0667f022fe9877caa831b0861048c8161062b565b8169ffffffffffffffffffff1660000361052d576040517f54b3e2a700000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f496e73756666696369656e74206e756d626572206f6620616e7377657273206960448201527f6e20726f756e642e00000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b60018054610100900469ffffffffffffffffffff16908061054d83610967565b82546101009290920a69ffffffffffffffffffff81810219909316918316021790915542600355600480547fffffffffffffffffffffffffffffffffffffffffffff00000000000000000000169185169190911790555060025483146103cf576002805490849055604080518281526020810186905269ffffffffffffffffffff85168183015290517fdc28ce8f0f1e7c276751ae27d4fce6b5bec464a41ca6194df415378c1523de4d9181900360600190a150505050565b6000828152602081905260409020600101546106218161062b565b61037d83836106e2565b6106358133610765565b50565b6000828152602081815260408083206001600160a01b038516845290915281205460ff166106da576000838152602081815260408083206001600160a01b03861684529091529020805460ff191660011790556106923390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a4506001610352565b506000610352565b6000828152602081815260408083206001600160a01b038516845290915281205460ff16156106da576000838152602081815260408083206001600160a01b0386168085529252808320805460ff1916905551339286917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a4506001610352565b6000828152602081815260408083206001600160a01b038516845290915290205460ff166107d1576040517fe2517d3f0000000000000000000000000000000000000000000000000000000081526001600160a01b038216600482015260248101839052604401610524565b5050565b6000602082840312156107e757600080fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461081757600080fd5b9392505050565b60006020828403121561083057600080fd5b5035919050565b6000806040838503121561084a57600080fd5b8235915060208301356001600160a01b038116811461086857600080fd5b809150509250929050565b60006020808352835180602085015260005b818110156108a157858101830151858201604001528201610885565b5060006040828601015260407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168501019250505092915050565b600080604083850312156108f357600080fd5b82359150602083013569ffffffffffffffffffff8116811461086857600080fd5b600181811c9082168061092857607f821691505b602082108103610961577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b600069ffffffffffffffffffff8083168181036109ad577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600101939250505056fea264697066735822122025e68353d2db686ce04514f6c7be747d8c5cf34c5af7b497aabd77e6f61ed04264736f6c63430008180033";
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
