import { type ContractRunner } from "ethers";
import type { IEmmetDataV2, IEmmetDataV2Interface } from "../../../contracts/data/IEmmetDataV2";
export declare class IEmmetDataV2__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "toChainId";
            readonly type: "uint256";
        }, {
            readonly internalType: "string";
            readonly name: "fromToken";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "toToken";
            readonly type: "string";
        }];
        readonly name: "estimateForeignFees";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "fee";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "chainId";
            readonly type: "uint16";
        }];
        readonly name: "getChain";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint64";
                readonly name: "CCTPClaim";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "lprelease";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "mint";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "unlock";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "swap1";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "swap2";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "swap3";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "swap4";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "swap5";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "swap6";
                readonly type: "uint64";
            }, {
                readonly internalType: "bytes16";
                readonly name: "name";
                readonly type: "bytes16";
            }, {
                readonly internalType: "uint8";
                readonly name: "tokenDecimals";
                readonly type: "uint8";
            }, {
                readonly internalType: "bytes11";
                readonly name: "flags";
                readonly type: "bytes11";
            }, {
                readonly internalType: "address";
                readonly name: "priceFeed";
                readonly type: "address";
            }];
            readonly internalType: "struct IDataTypes.Chain";
            readonly name: "chain";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "foreignChainId";
            readonly type: "uint16";
        }, {
            readonly internalType: "uint8";
            readonly name: "op";
            readonly type: "uint8";
        }];
        readonly name: "getForeignFee";
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
            readonly name: "chainId";
            readonly type: "uint256";
        }, {
            readonly internalType: "string";
            readonly name: "fromToken";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "toToken";
            readonly type: "string";
        }];
        readonly name: "getForeignStrategies";
        readonly outputs: readonly [{
            readonly internalType: "uint8[]";
            readonly name: "";
            readonly type: "uint8[]";
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
            readonly name: "fromToken";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "toToken";
            readonly type: "string";
        }];
        readonly name: "getIncomingStrategies";
        readonly outputs: readonly [{
            readonly internalType: "uint8[]";
            readonly name: "";
            readonly type: "uint8[]";
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
            readonly name: "fromToken";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "toToken";
            readonly type: "string";
        }];
        readonly name: "getLocalStrategies";
        readonly outputs: readonly [{
            readonly internalType: "uint8[]";
            readonly name: "";
            readonly type: "uint8[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getNativeCoinName";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
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
            readonly name: "fromToken";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "toToken";
            readonly type: "string";
        }];
        readonly name: "getStrategies";
        readonly outputs: readonly [{
            readonly internalType: "uint8[]";
            readonly name: "foreign";
            readonly type: "uint8[]";
        }, {
            readonly internalType: "uint8[]";
            readonly name: "incoming";
            readonly type: "uint8[]";
        }, {
            readonly internalType: "uint8[]";
            readonly name: "local";
            readonly type: "uint8[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "symbol";
            readonly type: "string";
        }];
        readonly name: "getToken";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "target";
                readonly type: "address";
            }, {
                readonly internalType: "uint8";
                readonly name: "tokenDecimals";
                readonly type: "uint8";
            }, {
                readonly internalType: "uint8";
                readonly name: "priceDecimals";
                readonly type: "uint8";
            }, {
                readonly internalType: "uint8";
                readonly name: "symbolLength";
                readonly type: "uint8";
            }, {
                readonly internalType: "address";
                readonly name: "priceFeed";
                readonly type: "address";
            }, {
                readonly internalType: "bytes12";
                readonly name: "symbol";
                readonly type: "bytes12";
            }];
            readonly internalType: "struct IDataTypes.Token";
            readonly name: "token";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "chainId";
            readonly type: "uint16";
        }];
        readonly name: "isChainSupported";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "symbol";
            readonly type: "string";
        }];
        readonly name: "isTokenSupported";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
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
    }];
    static createInterface(): IEmmetDataV2Interface;
    static connect(address: string, runner?: ContractRunner | null): IEmmetDataV2;
}
