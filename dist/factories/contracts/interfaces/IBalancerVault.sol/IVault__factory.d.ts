import { type ContractRunner } from "ethers";
import type { IVault, IVaultInterface } from "../../../../contracts/interfaces/IBalancerVault.sol/IVault";
export declare class IVault__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "enum IVault.SwapKind";
            readonly name: "kind";
            readonly type: "uint8";
        }, {
            readonly components: readonly [{
                readonly internalType: "bytes32";
                readonly name: "poolId";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint256";
                readonly name: "assetInIndex";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "assetOutIndex";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "amount";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes";
                readonly name: "userData";
                readonly type: "bytes";
            }];
            readonly internalType: "struct IVault.BatchSwapStep[]";
            readonly name: "swaps";
            readonly type: "tuple[]";
        }, {
            readonly internalType: "contract IAsset[]";
            readonly name: "assets";
            readonly type: "address[]";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "sender";
                readonly type: "address";
            }, {
                readonly internalType: "bool";
                readonly name: "fromInternalBalance";
                readonly type: "bool";
            }, {
                readonly internalType: "address payable";
                readonly name: "recipient";
                readonly type: "address";
            }, {
                readonly internalType: "bool";
                readonly name: "toInternalBalance";
                readonly type: "bool";
            }];
            readonly internalType: "struct IVault.FundManagement";
            readonly name: "funds";
            readonly type: "tuple";
        }, {
            readonly internalType: "int256[]";
            readonly name: "limits";
            readonly type: "int256[]";
        }, {
            readonly internalType: "uint256";
            readonly name: "deadline";
            readonly type: "uint256";
        }];
        readonly name: "batchSwap";
        readonly outputs: readonly [{
            readonly internalType: "int256[]";
            readonly name: "";
            readonly type: "int256[]";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "poolId";
            readonly type: "bytes32";
        }];
        readonly name: "getPoolTokens";
        readonly outputs: readonly [{
            readonly internalType: "contract IERC20[]";
            readonly name: "tokens";
            readonly type: "address[]";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "balances";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "uint256";
            readonly name: "lastChangeBlock";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bytes32";
                readonly name: "poolId";
                readonly type: "bytes32";
            }, {
                readonly internalType: "enum IVault.SwapKind";
                readonly name: "kind";
                readonly type: "uint8";
            }, {
                readonly internalType: "contract IAsset";
                readonly name: "assetIn";
                readonly type: "address";
            }, {
                readonly internalType: "contract IAsset";
                readonly name: "assetOut";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "amount";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes";
                readonly name: "userData";
                readonly type: "bytes";
            }];
            readonly internalType: "struct IVault.SingleSwap";
            readonly name: "singleSwap";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "sender";
                readonly type: "address";
            }, {
                readonly internalType: "bool";
                readonly name: "fromInternalBalance";
                readonly type: "bool";
            }, {
                readonly internalType: "address payable";
                readonly name: "recipient";
                readonly type: "address";
            }, {
                readonly internalType: "bool";
                readonly name: "toInternalBalance";
                readonly type: "bool";
            }];
            readonly internalType: "struct IVault.FundManagement";
            readonly name: "funds";
            readonly type: "tuple";
        }, {
            readonly internalType: "uint256";
            readonly name: "limit";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "deadline";
            readonly type: "uint256";
        }];
        readonly name: "swap";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }];
    static createInterface(): IVaultInterface;
    static connect(address: string, runner?: ContractRunner | null): IVault;
}
