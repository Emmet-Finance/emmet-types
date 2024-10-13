import { type ContractRunner } from "ethers";
import type { IEmmetData, IEmmetDataInterface } from "../../../contracts/data/IEmmetData";
export declare class IEmmetData__factory {
    static readonly abi: readonly [{
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
        readonly name: "estimateForeignCost";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "costs";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint128";
            readonly name: "chainId";
            readonly type: "uint128";
        }];
        readonly name: "getChain";
        readonly outputs: readonly [{
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
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
        }];
        readonly name: "getIncomingTransaction";
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
            readonly name: "batch";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "skip";
            readonly type: "uint256";
        }];
        readonly name: "getIncommingTransactions";
        readonly outputs: readonly [{
            readonly internalType: "uint256[]";
            readonly name: "blockNumbers";
            readonly type: "uint256[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "txHash";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bool";
            readonly name: "isOut";
            readonly type: "bool";
        }];
        readonly name: "getIndexByHash";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getNativeCoinName";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
        }];
        readonly name: "getOutgoingTransaction";
        readonly outputs: readonly [{
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
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "batch";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "skip";
            readonly type: "uint256";
        }];
        readonly name: "getOutgoingTransactions";
        readonly outputs: readonly [{
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
            readonly internalType: "struct BridgeTypes.SendParams[]";
            readonly name: "records";
            readonly type: "tuple[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
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
        }];
        readonly name: "getStrategy";
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
            readonly name: "strategy";
            readonly type: "tuple";
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
    static createInterface(): IEmmetDataInterface;
    static connect(address: string, runner?: ContractRunner | null): IEmmetData;
}
