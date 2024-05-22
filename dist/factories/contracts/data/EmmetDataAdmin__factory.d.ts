import { type ContractRunner } from "ethers";
import type { EmmetDataAdmin, EmmetDataAdminInterface } from "../../../contracts/data/EmmetDataAdmin";
export declare class EmmetDataAdmin__factory {
    static readonly abi: readonly [{
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
            readonly name: "message";
            readonly type: "string";
        }];
        readonly name: "GassFeesUpdateError";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "StringOver32Charachters";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint128";
            readonly name: "chainId";
            readonly type: "uint128";
        }];
        readonly name: "UnsupportedChain";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "symbol";
            readonly type: "string";
        }];
        readonly name: "UnsupportedToken";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint128";
            readonly name: "chainId";
            readonly type: "uint128";
        }];
        readonly name: "CCTPChainDeleted";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint128";
            readonly name: "chainId";
            readonly type: "uint128";
        }, {
            readonly indexed: false;
            readonly internalType: "uint128";
            readonly name: "cctpDestId";
            readonly type: "uint128";
        }, {
            readonly indexed: false;
            readonly internalType: "uint8";
            readonly name: "awaitMinutes";
            readonly type: "uint8";
        }, {
            readonly indexed: false;
            readonly internalType: "uint8";
            readonly name: "awaitSeconds";
            readonly type: "uint8";
        }, {
            readonly indexed: false;
            readonly internalType: "uint8";
            readonly name: "numberOfAwaitedBlocks";
            readonly type: "uint8";
        }];
        readonly name: "CctpChainUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint128";
            readonly name: "chainId";
            readonly type: "uint128";
        }];
        readonly name: "ChainDeleted";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint128";
            readonly name: "chainId";
            readonly type: "uint128";
        }, {
            readonly indexed: false;
            readonly internalType: "uint128";
            readonly name: "cctpDestId";
            readonly type: "uint128";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "token";
            readonly type: "string";
        }];
        readonly name: "ChainUpdate";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "toChainId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "fromToken";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "toToken";
            readonly type: "string";
        }, {
            readonly components: readonly [{
                readonly internalType: "enum EmmetTokenStrategy.Step[]";
                readonly name: "localSteps";
                readonly type: "uint8[]";
            }, {
                readonly internalType: "enum EmmetTokenStrategy.Step[]";
                readonly name: "foreignSteps";
                readonly type: "uint8[]";
            }];
            readonly indexed: false;
            readonly internalType: "struct EmmetTokenStrategy.CrossChainStrategy";
            readonly name: "oldStrategies";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "enum EmmetTokenStrategy.Step[]";
                readonly name: "localSteps";
                readonly type: "uint8[]";
            }, {
                readonly internalType: "enum EmmetTokenStrategy.Step[]";
                readonly name: "foreignSteps";
                readonly type: "uint8[]";
            }];
            readonly indexed: false;
            readonly internalType: "struct EmmetTokenStrategy.CrossChainStrategy";
            readonly name: "newStrategies";
            readonly type: "tuple";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "operation";
            readonly type: "string";
        }];
        readonly name: "CrossChainPathUpdate";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "fromToken";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "toToken";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "enum EmmetTokenStrategy.Step[]";
            readonly name: "oldLocalSteps";
            readonly type: "uint8[]";
        }, {
            readonly indexed: false;
            readonly internalType: "enum EmmetTokenStrategy.Step[]";
            readonly name: "newLocalSteps";
            readonly type: "uint8[]";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "operation";
            readonly type: "string";
        }];
        readonly name: "IncommingPathUpdate";
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
            readonly name: "oldAddress";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "newAddress";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "operation";
            readonly type: "string";
        }];
        readonly name: "PriceFeedUpdate";
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
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "symbol";
            readonly type: "string";
        }];
        readonly name: "TokenDeleted";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "addr";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint8";
            readonly name: "decimals";
            readonly type: "uint8";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "symbol";
            readonly type: "string";
        }];
        readonly name: "TokenUpdate";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "oldGasFees";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "newGasFees";
            readonly type: "address";
        }];
        readonly name: "UpdatedGasFeesAddress";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint128";
            readonly name: "oldFee";
            readonly type: "uint128";
        }, {
            readonly indexed: false;
            readonly internalType: "uint128";
            readonly name: "newFee";
            readonly type: "uint128";
        }];
        readonly name: "UpdatedProtocolFee";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "BRIDGE_ROLE";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
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
            readonly internalType: "uint128";
            readonly name: "chainId_";
            readonly type: "uint128";
        }];
        readonly name: "deleteChain";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
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
        readonly name: "deleteCrossChainTokenStrategy";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "fromToken";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "toToken";
            readonly type: "string";
        }];
        readonly name: "deleteIncomingTokenStrategy";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "symbol";
            readonly type: "string";
        }];
        readonly name: "deletePriceFeed";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "symbol_";
            readonly type: "string";
        }];
        readonly name: "deleteToken";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "gasFees";
        readonly outputs: readonly [{
            readonly internalType: "contract IGasFees";
            readonly name: "";
            readonly type: "address";
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
        readonly name: "incrementIndex";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "nativeCoin";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "protocolFee";
        readonly outputs: readonly [{
            readonly internalType: "uint128";
            readonly name: "decimals";
            readonly type: "uint128";
        }, {
            readonly internalType: "uint128";
            readonly name: "usdEquivalent";
            readonly type: "uint128";
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
        readonly inputs: readonly [];
        readonly name: "txIndex";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint128";
            readonly name: "chainId_";
            readonly type: "uint128";
        }, {
            readonly internalType: "uint128";
            readonly name: "cctpDestId_";
            readonly type: "uint128";
        }, {
            readonly internalType: "uint8";
            readonly name: "awaitMinutes_";
            readonly type: "uint8";
        }, {
            readonly internalType: "uint8";
            readonly name: "awaitSeconds_";
            readonly type: "uint8";
        }, {
            readonly internalType: "uint8";
            readonly name: "numberOfAwaitedBlocks_";
            readonly type: "uint8";
        }];
        readonly name: "updateCctpChain";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint128";
            readonly name: "chainId_";
            readonly type: "uint128";
        }, {
            readonly internalType: "uint128";
            readonly name: "cctpDestId_";
            readonly type: "uint128";
        }, {
            readonly internalType: "string";
            readonly name: "name_";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "token_";
            readonly type: "string";
        }];
        readonly name: "updateChain";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
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
        }, {
            readonly internalType: "enum EmmetTokenStrategy.Step[]";
            readonly name: "localSteps";
            readonly type: "uint8[]";
        }, {
            readonly internalType: "enum EmmetTokenStrategy.Step[]";
            readonly name: "foreignSteps";
            readonly type: "uint8[]";
        }];
        readonly name: "updateCrossChainTokenStrategy";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newGasFees_";
            readonly type: "address";
        }];
        readonly name: "updateGasFeesAddress";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "fromToken";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "toToken";
            readonly type: "string";
        }, {
            readonly internalType: "enum EmmetTokenStrategy.Step[]";
            readonly name: "localSteps";
            readonly type: "uint8[]";
        }];
        readonly name: "updateIncomingTokenStrategy";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "symbol";
            readonly type: "string";
        }, {
            readonly internalType: "address";
            readonly name: "priceFeed";
            readonly type: "address";
        }];
        readonly name: "updatePriceFeed";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint128";
            readonly name: "newFee_";
            readonly type: "uint128";
        }];
        readonly name: "updateProtocolFee";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "addr_";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "swap_";
            readonly type: "address";
        }, {
            readonly internalType: "uint8";
            readonly name: "decimals_";
            readonly type: "uint8";
        }, {
            readonly internalType: "uint8";
            readonly name: "fee_";
            readonly type: "uint8";
        }, {
            readonly internalType: "uint8";
            readonly name: "feeDecimals_";
            readonly type: "uint8";
        }, {
            readonly internalType: "string";
            readonly name: "symbol_";
            readonly type: "string";
        }];
        readonly name: "updateToken";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): EmmetDataAdminInterface;
    static connect(address: string, runner?: ContractRunner | null): EmmetDataAdmin;
}
