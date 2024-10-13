import { type ContractRunner } from "ethers";
import type { IEmmetDataAdmin, IEmmetDataAdminInterface } from "../../../contracts/data/IEmmetDataAdmin";
export declare class IEmmetDataAdmin__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "uint128";
            readonly name: "chainId";
            readonly type: "uint128";
        }];
        readonly name: "chains";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly components: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "part1";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "part2";
                    readonly type: "bytes32";
                }];
                readonly internalType: "struct BytesHelper.Data";
                readonly name: "bridge";
                readonly type: "tuple";
            }, {
                readonly components: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "part1";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "part2";
                    readonly type: "bytes32";
                }];
                readonly internalType: "struct BytesHelper.Data";
                readonly name: "name";
                readonly type: "tuple";
            }, {
                readonly internalType: "bytes12";
                readonly name: "currency";
                readonly type: "bytes12";
            }];
            readonly internalType: "struct BridgeTypes.Chain";
            readonly name: "chain";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint128";
            readonly name: "chainId";
            readonly type: "uint128";
        }, {
            readonly internalType: "enum BridgeTypes.Step";
            readonly name: "step";
            readonly type: "uint8";
        }];
        readonly name: "getGasConsumed";
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
            readonly name: "txHash";
            readonly type: "bytes32";
        }];
        readonly name: "getInHashToIndex";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getIndexIn";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getIndexOut";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getNativeCoin";
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
            readonly name: "txHash";
            readonly type: "bytes32";
        }];
        readonly name: "getOutHashToIndex";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
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
                readonly name: "token";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "priceFeed";
                readonly type: "address";
            }, {
                readonly internalType: "uint8";
                readonly name: "decimals";
                readonly type: "uint8";
            }];
            readonly internalType: "struct BridgeTypes.Token";
            readonly name: "token";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
        }];
        readonly name: "incommingTransactions";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "blockNumber";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
        }];
        readonly name: "outgoingTransactions";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bytes32";
                readonly name: "txHash";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint256";
                readonly name: "blockNumber";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "sentAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint128";
                readonly name: "toChainId";
                readonly type: "uint128";
            }, {
                readonly internalType: "bytes16";
                readonly name: "fromToken";
                readonly type: "bytes16";
            }, {
                readonly internalType: "bytes16";
                readonly name: "toToken";
                readonly type: "bytes16";
            }, {
                readonly components: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "part1";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "part2";
                    readonly type: "bytes32";
                }];
                readonly internalType: "struct BytesHelper.Data";
                readonly name: "to";
                readonly type: "tuple";
            }, {
                readonly internalType: "bool";
                readonly name: "isSuccess";
                readonly type: "bool";
            }, {
                readonly internalType: "string";
                readonly name: "outcome";
                readonly type: "string";
            }];
            readonly internalType: "struct BridgeTypes.OutStore";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "ccmHash";
            readonly type: "bytes32";
        }];
        readonly name: "saveIncomingTx";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "txHash";
            readonly type: "bytes32";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "blockNumber";
                readonly type: "uint256";
            }, {
                readonly internalType: "bool";
                readonly name: "isFeeERC20";
                readonly type: "bool";
            }, {
                readonly internalType: "uint256";
                readonly name: "sentAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "receiveAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint128";
                readonly name: "toChainId";
                readonly type: "uint128";
            }, {
                readonly internalType: "string";
                readonly name: "fromToken";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "toToken";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "to";
                readonly type: "string";
            }, {
                readonly internalType: "bool";
                readonly name: "isSuccess";
                readonly type: "bool";
            }];
            readonly internalType: "struct BridgeTypes.SendParams";
            readonly name: "params";
            readonly type: "tuple";
        }];
        readonly name: "saveOutgoingTx";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint128";
            readonly name: "chainId";
            readonly type: "uint128";
        }, {
            readonly internalType: "string";
            readonly name: "fromToken";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "toToken";
            readonly type: "string";
        }];
        readonly name: "strategies";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "enum BridgeTypes.Step[]";
                readonly name: "outgoing";
                readonly type: "uint8[]";
            }, {
                readonly internalType: "enum BridgeTypes.Step[]";
                readonly name: "incoming";
                readonly type: "uint8[]";
            }, {
                readonly internalType: "enum BridgeTypes.Step[]";
                readonly name: "foreign";
                readonly type: "uint8[]";
            }];
            readonly internalType: "struct BridgeTypes.TokenStrategy";
            readonly name: "";
            readonly type: "tuple";
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
            readonly internalType: "uint128";
            readonly name: "chainId";
            readonly type: "uint128";
        }, {
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "bridge";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "currency";
            readonly type: "string";
        }];
        readonly name: "updateChain";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint128";
            readonly name: "chainId";
            readonly type: "uint128";
        }, {
            readonly internalType: "uint256";
            readonly name: "gasPrice";
            readonly type: "uint256";
        }];
        readonly name: "updateGasPrice";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint128";
            readonly name: "chainId";
            readonly type: "uint128";
        }, {
            readonly internalType: "enum BridgeTypes.Step";
            readonly name: "step";
            readonly type: "uint8";
        }, {
            readonly internalType: "uint256";
            readonly name: "consumesGas";
            readonly type: "uint256";
        }];
        readonly name: "updateGasUsed";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "priceFeed";
            readonly type: "address";
        }, {
            readonly internalType: "uint8";
            readonly name: "decimals";
            readonly type: "uint8";
        }, {
            readonly internalType: "string";
            readonly name: "symbol";
            readonly type: "string";
        }];
        readonly name: "updateToken";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint128";
            readonly name: "otherChainId";
            readonly type: "uint128";
        }, {
            readonly internalType: "string";
            readonly name: "fromToken";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "toToken";
            readonly type: "string";
        }, {
            readonly internalType: "enum BridgeTypes.Step[]";
            readonly name: "outgoing";
            readonly type: "uint8[]";
        }, {
            readonly internalType: "enum BridgeTypes.Step[]";
            readonly name: "incoming";
            readonly type: "uint8[]";
        }, {
            readonly internalType: "enum BridgeTypes.Step[]";
            readonly name: "foreign";
            readonly type: "uint8[]";
        }];
        readonly name: "updateTokenStrategy";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "txHash";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bool";
            readonly name: "isSucceess";
            readonly type: "bool";
        }, {
            readonly internalType: "string";
            readonly name: "message";
            readonly type: "string";
        }];
        readonly name: "updateTransaction";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IEmmetDataAdminInterface;
    static connect(address: string, runner?: ContractRunner | null): IEmmetDataAdmin;
}
