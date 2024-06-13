import { type ContractRunner } from "ethers";
import type { EmmetMultisigUtilities, EmmetMultisigUtilitiesInterface } from "../../../contracts/multisig/EmmetMultisigUtilities";
export declare class EmmetMultisigUtilities__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "reason";
            readonly type: "string";
        }, {
            readonly internalType: "address";
            readonly name: "caller";
            readonly type: "address";
        }];
        readonly name: "CallFailed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "message";
            readonly type: "string";
        }];
        readonly name: "Insufficient";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "newStake";
            readonly type: "uint256";
        }];
        readonly name: "MinimalStakeUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "signer";
            readonly type: "address";
        }];
        readonly name: "NewSigner";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "txHash";
            readonly type: "bytes32";
        }];
        readonly name: "PartialSignature";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint128";
            readonly name: "finalizeReward";
            readonly type: "uint128";
        }, {
            readonly indexed: false;
            readonly internalType: "uint128";
            readonly name: "signReward";
            readonly type: "uint128";
        }];
        readonly name: "RewardRatesUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "txHash";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "id";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes[]";
            readonly name: "signers";
            readonly type: "bytes[]";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes[]";
            readonly name: "aggregatedSignature";
            readonly type: "bytes[]";
        }];
        readonly name: "Signed";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "staker";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "Staked";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "staker";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "Unstaked";
        readonly type: "event";
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
        readonly name: "SIGNER_ROLE";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "account";
            readonly type: "string";
        }];
        readonly name: "accountStats";
        readonly outputs: readonly [{
            readonly internalType: "uint128";
            readonly name: "received";
            readonly type: "uint128";
        }, {
            readonly internalType: "uint128";
            readonly name: "sent";
            readonly type: "uint128";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "bft";
        readonly outputs: readonly [{
            readonly internalType: "uint128";
            readonly name: "totalSigners";
            readonly type: "uint128";
        }, {
            readonly internalType: "uint128";
            readonly name: "threshold";
            readonly type: "uint128";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "emmetData";
        readonly outputs: readonly [{
            readonly internalType: "contract IEmmetData";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "emmetToken";
        readonly outputs: readonly [{
            readonly internalType: "contract IERC20";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint64";
            readonly name: "fromChainId";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint64";
            readonly name: "toChainId";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
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
            readonly name: "recipient";
            readonly type: "string";
        }];
        readonly name: "encodeParams";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "encoded";
            readonly type: "bytes";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint64";
                readonly name: "fromChainId";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "toChainId";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint256";
                readonly name: "amount";
                readonly type: "uint256";
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
                readonly name: "recipient";
                readonly type: "string";
            }];
            readonly internalType: "struct SignatureVerifier.DecodedData";
            readonly name: "decoded_";
            readonly type: "tuple";
        }, {
            readonly internalType: "uint256";
            readonly name: "nonce_";
            readonly type: "uint256";
        }];
        readonly name: "generateHash";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "txHash";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "txHash_";
            readonly type: "bytes32";
        }];
        readonly name: "getSignatures";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "signatureCount";
            readonly type: "uint256";
        }, {
            readonly internalType: "bool";
            readonly name: "finalized";
            readonly type: "bool";
        }, {
            readonly internalType: "bytes[]";
            readonly name: "aggregatedSignature";
            readonly type: "bytes[]";
        }, {
            readonly internalType: "bytes[]";
            readonly name: "signers";
            readonly type: "bytes[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "txHash_";
            readonly type: "bytes32";
        }];
        readonly name: "getTransaction";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bytes32";
                readonly name: "txHash";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint256";
                readonly name: "nonce";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint128";
                readonly name: "sentAmount";
                readonly type: "uint128";
            }, {
                readonly internalType: "uint64";
                readonly name: "fromChainId";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "toChainId";
                readonly type: "uint64";
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
                readonly name: "sender";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "recipient";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "originalHash";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "destinationHash";
                readonly type: "string";
            }, {
                readonly internalType: "uint128";
                readonly name: "started";
                readonly type: "uint128";
            }, {
                readonly internalType: "uint128";
                readonly name: "finished";
                readonly type: "uint128";
            }, {
                readonly internalType: "uint128";
                readonly name: "receivedAmount";
                readonly type: "uint128";
            }, {
                readonly internalType: "uint128";
                readonly name: "protocolFee";
                readonly type: "uint128";
            }, {
                readonly internalType: "uint128";
                readonly name: "tokenFee";
                readonly type: "uint128";
            }];
            readonly internalType: "struct MultiSigTypes.Transaction";
            readonly name: "transaction";
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
        readonly name: "getTransactions";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bytes32";
                readonly name: "txHash";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint256";
                readonly name: "nonce";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint128";
                readonly name: "sentAmount";
                readonly type: "uint128";
            }, {
                readonly internalType: "uint64";
                readonly name: "fromChainId";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "toChainId";
                readonly type: "uint64";
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
                readonly name: "sender";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "recipient";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "originalHash";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "destinationHash";
                readonly type: "string";
            }, {
                readonly internalType: "uint128";
                readonly name: "started";
                readonly type: "uint128";
            }, {
                readonly internalType: "uint128";
                readonly name: "finished";
                readonly type: "uint128";
            }, {
                readonly internalType: "uint128";
                readonly name: "receivedAmount";
                readonly type: "uint128";
            }, {
                readonly internalType: "uint128";
                readonly name: "protocolFee";
                readonly type: "uint128";
            }, {
                readonly internalType: "uint128";
                readonly name: "tokenFee";
                readonly type: "uint128";
            }];
            readonly internalType: "struct MultiSigTypes.Transaction[]";
            readonly name: "transactionsArray";
            readonly type: "tuple[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "nonce";
            readonly type: "uint256";
        }];
        readonly name: "hashes";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "txHash";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "minStake";
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
        readonly name: "nonEvmHashes";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "nonEvmDataHash";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "nonce";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
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
        readonly name: "priceFeeds";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "priceFeed";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "rewardAmounts";
        readonly outputs: readonly [{
            readonly internalType: "uint128";
            readonly name: "finalizeReward";
            readonly type: "uint128";
        }, {
            readonly internalType: "uint128";
            readonly name: "signReward";
            readonly type: "uint128";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "signer";
            readonly type: "address";
        }];
        readonly name: "rewards";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "reward";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "candidate";
            readonly type: "address";
        }];
        readonly name: "roleRequests";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "eligibleTime";
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
        readonly name: "signatures";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "signatureCount";
            readonly type: "uint256";
        }, {
            readonly internalType: "bool";
            readonly name: "finalized";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "staker";
            readonly type: "address";
        }];
        readonly name: "stakes";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "stake";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "totalAmountUSD";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "totalFeesUSD";
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
        readonly name: "transactions";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "nonce";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint128";
            readonly name: "sentAmount";
            readonly type: "uint128";
        }, {
            readonly internalType: "uint64";
            readonly name: "fromChainId";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint64";
            readonly name: "toChainId";
            readonly type: "uint64";
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
            readonly name: "sender";
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
            readonly name: "recipient";
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
            readonly name: "originalHash";
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
            readonly name: "destinationHash";
            readonly type: "tuple";
        }, {
            readonly internalType: "uint128";
            readonly name: "started";
            readonly type: "uint128";
        }, {
            readonly internalType: "uint128";
            readonly name: "finished";
            readonly type: "uint128";
        }, {
            readonly internalType: "uint128";
            readonly name: "protocolFee";
            readonly type: "uint128";
        }, {
            readonly internalType: "uint128";
            readonly name: "tokenFee";
            readonly type: "uint128";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "uniqueAddresses";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): EmmetMultisigUtilitiesInterface;
    static connect(address: string, runner?: ContractRunner | null): EmmetMultisigUtilities;
}
