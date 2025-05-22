import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type { TokensaleUtils, TokensaleUtilsInterface } from "../../../contracts/tokensale/TokensaleUtils";
type TokensaleUtilsConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class TokensaleUtils__factory extends ContractFactory {
    constructor(...args: TokensaleUtilsConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<TokensaleUtils & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): TokensaleUtils__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b506105a3806100206000396000f3fe608060405234801561001057600080fd5b506004361061011b5760003560e01c80635ad6650f116100b2578063961be39111610081578063bae6a69011610066578063bae6a69014610298578063cf309012146102c6578063e388c423146102cf57600080fd5b8063961be39114610258578063a87430ba1461027857600080fd5b80635ad6650f1461023457806375d967181461023d5780637e51ddf41461024557806389facb201461024e57600080fd5b8063313ce567116100ee578063313ce5671461019e57806347f7e762146101e25780634bd8588b146101f557806352490a8f1461022b57600080fd5b806302c7e7af146101205780631216526c1461016a5780631820cabb1461018b578063254800d414610195575b600080fd5b6001546101409073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b61017d6101783660046103fc565b6102fe565b604051908152602001610161565b61017d62ed4e0081565b61017d60075481565b6003546101be9060ff808216916101008104821691620100009091041683565b6040805160ff94851681529284166020840152921691810191909152606001610161565b6101406101f03660046103fc565b61032e565b6101406102033660046104ad565b60096020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b61017d60055481565b61017d60045481565b61017d610387565b61017d60065481565b61017d62278d0081565b6002546101409073ffffffffffffffffffffffffffffffffffffffff1681565b61017d6102863660046104c6565b600a6020526000908152604090205481565b6102ab6102a63660046104ad565b61039a565b60408051938452602084019290925290820152606001610161565b61017d60085481565b6102ab6102dd3660046104c6565b600b6020526000908152604090208054600182015460029092015490919083565b6000816040516020016103119190610503565b604051602081830303815290604052805190602001209050919050565b600060096000836040516020016103459190610503565b60408051601f198184030181529181528151602092830120835290820192909252016000205473ffffffffffffffffffffffffffffffffffffffff1692915050565b61039762278d0062ed4e00610532565b81565b600081815481106103aa57600080fd5b600091825260209091206003909102018054600182015460029092015490925083565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60006020828403121561040e57600080fd5b813567ffffffffffffffff8082111561042657600080fd5b818401915084601f83011261043a57600080fd5b81358181111561044c5761044c6103cd565b604051601f8201601f19908116603f01168101908382118183101715610474576104746103cd565b8160405282815287602084870101111561048d57600080fd5b826020860160208301376000928101602001929092525095945050505050565b6000602082840312156104bf57600080fd5b5035919050565b6000602082840312156104d857600080fd5b813573ffffffffffffffffffffffffffffffffffffffff811681146104fc57600080fd5b9392505050565b6000825160005b81811015610524576020818601810151858301520161050a565b506000920191825250919050565b600082610568577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b50049056fea2646970667358221220fae66d588f5c72f6b2b8ca241cdd7c85f332832c430fd03774cc16060b7a110964736f6c63430008180033";
    static readonly abi: readonly [{
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "CashWithdrawn";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "ref";
            readonly type: "string";
        }];
        readonly name: "ReferenceCreated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "buyer";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "TokensClaimed";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "buyer";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "released";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "locked";
            readonly type: "uint256";
        }];
        readonly name: "TokensPurchased";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "TokensWithdrawn";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "INTERVAL";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "LOCK_PERIOD";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "RELEASE";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "cash";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "ref";
            readonly type: "string";
        }];
        readonly name: "computeRefKey";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "key";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "decimals";
        readonly outputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "soldDecimals";
            readonly type: "uint8";
        }, {
            readonly internalType: "uint8";
            readonly name: "cashDecimals";
            readonly type: "uint8";
        }, {
            readonly internalType: "uint8";
            readonly name: "delta";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "discountGroups";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "discounts";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "min";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "max";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "price";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "ref";
            readonly type: "string";
        }];
        readonly name: "getRefOwner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "locked";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "ref";
            readonly type: "bytes32";
        }];
        readonly name: "references";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "rewards1";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "rewards2";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "sold";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "user";
            readonly type: "address";
        }];
        readonly name: "users";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "ref";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "user";
            readonly type: "address";
        }];
        readonly name: "vesting";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "start";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "locked";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "claimed";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "vestingStart";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): TokensaleUtilsInterface;
    static connect(address: string, runner?: ContractRunner | null): TokensaleUtils;
}
export {};
