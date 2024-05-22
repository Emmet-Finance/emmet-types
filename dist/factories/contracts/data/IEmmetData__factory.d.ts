import { type ContractRunner } from "ethers";
import type { IEmmetData, IEmmetDataInterface } from "../../../contracts/data/IEmmetData";
export declare class IEmmetData__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "uint128";
            readonly name: "chainId_";
            readonly type: "uint128";
        }];
        readonly name: "getCCTPChain";
        readonly outputs: readonly [{
            readonly internalType: "uint128";
            readonly name: "cctpDestId";
            readonly type: "uint128";
        }, {
            readonly internalType: "uint8";
            readonly name: "awaitMinutes";
            readonly type: "uint8";
        }, {
            readonly internalType: "uint8";
            readonly name: "awaitSeconds";
            readonly type: "uint8";
        }, {
            readonly internalType: "uint8";
            readonly name: "numberOfAwaitedBlocks";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint128";
            readonly name: "chainId_";
            readonly type: "uint128";
        }];
        readonly name: "getChain";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "token";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
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
        readonly name: "getCrossChainTokenStrategy";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "enum EmmetTokenStrategy.Step[]";
                readonly name: "localSteps";
                readonly type: "uint8[]";
            }, {
                readonly internalType: "enum EmmetTokenStrategy.Step[]";
                readonly name: "foreignSteps";
                readonly type: "uint8[]";
            }];
            readonly internalType: "struct EmmetTokenStrategy.CrossChainStrategy";
            readonly name: "strategy";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint128";
            readonly name: "toChainId_";
            readonly type: "uint128";
        }, {
            readonly internalType: "string";
            readonly name: "fromToken_";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "toToken_";
            readonly type: "string";
        }];
        readonly name: "getForeignFeeCompensation";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "compensation";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
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
        readonly name: "getIncomingStrategy";
        readonly outputs: readonly [{
            readonly internalType: "enum EmmetTokenStrategy.Step[]";
            readonly name: "localSteps";
            readonly type: "uint8[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "symbol_";
            readonly type: "string";
        }];
        readonly name: "getPriceDecimals";
        readonly outputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "decimals";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getProtocolFee";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "pFee";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "symbol_";
            readonly type: "string";
        }];
        readonly name: "getToken";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bytes32";
                readonly name: "symbol";
                readonly type: "bytes32";
            }, {
                readonly internalType: "address";
                readonly name: "addr";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "swap";
                readonly type: "address";
            }, {
                readonly internalType: "uint8";
                readonly name: "decimals";
                readonly type: "uint8";
            }, {
                readonly internalType: "uint8";
                readonly name: "fee";
                readonly type: "uint8";
            }, {
                readonly internalType: "uint8";
                readonly name: "feeDecimals";
                readonly type: "uint8";
            }];
            readonly internalType: "struct IEmmetDataTypes.SToken";
            readonly name: "token";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "symbol_";
            readonly type: "string";
        }];
        readonly name: "getTokenPrice";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "price";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): IEmmetDataInterface;
    static connect(address: string, runner?: ContractRunner | null): IEmmetData;
}
