import { type ContractRunner } from "ethers";
import type { BridgeModule, BridgeModuleInterface } from "../../../../contracts/bridge/components/BridgeModule";
export declare class BridgeModule__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "EnforcedPause";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ExpectedPause";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "newAdmin";
            readonly type: "address";
        }];
        readonly name: "AdminUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "newBridge";
            readonly type: "address";
        }];
        readonly name: "BridgeUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "newEmmetData";
            readonly type: "address";
        }];
        readonly name: "DataUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "Paused";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "Unpaused";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "symbol";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "recepient";
            readonly type: "address";
        }];
        readonly name: "Withdraw";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "BridgeSettings";
        readonly outputs: readonly [{
            readonly internalType: "contract IEmmetData";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "admin";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "bridge";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "coinWithdraw";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "pause";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "paused";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "enum BridgeTypes.Step";
            readonly name: "step";
            readonly type: "uint8";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "blockNumber";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "foreignIndexOut";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "value";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "start";
                readonly type: "uint256";
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
                readonly name: "fromChainId";
                readonly type: "uint128";
            }, {
                readonly internalType: "uint128";
                readonly name: "toChainId";
                readonly type: "uint128";
            }, {
                readonly internalType: "string";
                readonly name: "to";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "fromToken";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "toToken";
                readonly type: "string";
            }, {
                readonly internalType: "bytes";
                readonly name: "data";
                readonly type: "bytes";
            }];
            readonly internalType: "struct BridgeTypes.ReceiveParams";
            readonly name: "params";
            readonly type: "tuple";
        }];
        readonly name: "receiveInstallment";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "receiveAmount";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "enum BridgeTypes.Step";
            readonly name: "step";
            readonly type: "uint8";
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
        readonly name: "sendInstallment";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
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
            readonly internalType: "address";
            readonly name: "tokenContract";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "tokenWithdraw";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "unpause";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newAdmin";
            readonly type: "address";
        }];
        readonly name: "updateAdmin";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newBridge";
            readonly type: "address";
        }];
        readonly name: "updateBridge";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newEmmetData";
            readonly type: "address";
        }];
        readonly name: "updateData";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly stateMutability: "payable";
        readonly type: "receive";
    }];
    static createInterface(): BridgeModuleInterface;
    static connect(address: string, runner?: ContractRunner | null): BridgeModule;
}
