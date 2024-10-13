import { type ContractRunner } from "ethers";
import type { ICrossChainMessenger, ICrossChainMessengerInterface } from "../../../contracts/messaging/ICrossChainMessenger";
export declare class ICrossChainMessenger__factory {
    static readonly abi: readonly [{
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "txHash";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "isSuccess";
            readonly type: "bool";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "informedCaller";
            readonly type: "bool";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "foreignMessage";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "callerResponce";
            readonly type: "string";
        }];
        readonly name: "FeedbackReceived";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "txHash";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "id";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "uint128";
            readonly name: "fromChainId";
            readonly type: "uint128";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "signatures";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "isSuccess";
            readonly type: "bool";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "message";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "sender";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly name: "MessageReceived";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "txHash";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "blockNumber";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "id";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "uint128";
            readonly name: "toChainId";
            readonly type: "uint128";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "timestamp";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "receiver";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly name: "MessageSent";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint128";
            readonly name: "toChainId";
            readonly type: "uint128";
        }, {
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }, {
            readonly internalType: "bool";
            readonly name: "isFeeERC20";
            readonly type: "bool";
        }];
        readonly name: "estimateFee";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "compensation";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "fee";
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
        readonly name: "getReceivedMessage";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bytes32";
                readonly name: "txHash";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint256";
                readonly name: "value";
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
                readonly internalType: "address";
                readonly name: "receiver";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "signatures";
                readonly type: "uint256";
            }, {
                readonly internalType: "string";
                readonly name: "sender";
                readonly type: "string";
            }, {
                readonly internalType: "bytes";
                readonly name: "data";
                readonly type: "bytes";
            }];
            readonly internalType: "struct CCMTypes.MessageIn";
            readonly name: "msgData";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "txHash";
            readonly type: "bytes32";
        }];
        readonly name: "getSentMessage";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bytes32";
                readonly name: "txHash";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint256";
                readonly name: "value";
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
                readonly internalType: "address";
                readonly name: "sender";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "contr";
                readonly type: "address";
            }, {
                readonly internalType: "string";
                readonly name: "receiver";
                readonly type: "string";
            }, {
                readonly internalType: "bytes";
                readonly name: "data";
                readonly type: "bytes";
            }];
            readonly internalType: "struct CCMTypes.MessageOut";
            readonly name: "msgData";
            readonly type: "tuple";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint128";
            readonly name: "toChainId";
            readonly type: "uint128";
        }, {
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly internalType: "string";
            readonly name: "receiver";
            readonly type: "string";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes4";
            readonly name: "selector";
            readonly type: "bytes4";
        }, {
            readonly internalType: "bool";
            readonly name: "isFeeERC20";
            readonly type: "bool";
        }];
        readonly name: "sendMsg";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "txHash";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }];
    static createInterface(): ICrossChainMessengerInterface;
    static connect(address: string, runner?: ContractRunner | null): ICrossChainMessenger;
}
