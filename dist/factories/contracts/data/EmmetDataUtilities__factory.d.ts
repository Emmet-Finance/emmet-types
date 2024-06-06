import { type ContractRunner } from "ethers";
import type { EmmetDataUtilities, EmmetDataUtilitiesInterface } from "../../../contracts/data/EmmetDataUtilities";
export declare class EmmetDataUtilities__factory {
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
        readonly inputs: readonly [];
        readonly name: "txIndex";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): EmmetDataUtilitiesInterface;
    static connect(address: string, runner?: ContractRunner | null): EmmetDataUtilities;
}
