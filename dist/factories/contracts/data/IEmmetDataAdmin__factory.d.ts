import { type ContractRunner } from "ethers";
import type { IEmmetDataAdmin, IEmmetDataAdminInterface } from "../../../contracts/data/IEmmetDataAdmin";
export declare class IEmmetDataAdmin__factory {
    static readonly abi: readonly [{
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
            readonly internalType: "uint256";
            readonly name: "fromChainId";
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
        readonly name: "incrementIndex";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
        }];
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
            readonly internalType: "uint256";
            readonly name: "fromChainId";
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
    static createInterface(): IEmmetDataAdminInterface;
    static connect(address: string, runner?: ContractRunner | null): IEmmetDataAdmin;
}
