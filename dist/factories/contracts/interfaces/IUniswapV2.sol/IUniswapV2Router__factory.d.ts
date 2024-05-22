import { type ContractRunner } from "ethers";
import type { IUniswapV2Router, IUniswapV2RouterInterface } from "../../../../contracts/interfaces/IUniswapV2.sol/IUniswapV2Router";
export declare class IUniswapV2Router__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "amountIn";
            readonly type: "uint256";
        }, {
            readonly internalType: "address[]";
            readonly name: "path";
            readonly type: "address[]";
        }];
        readonly name: "getAmountsOut";
        readonly outputs: readonly [{
            readonly internalType: "uint256[]";
            readonly name: "amounts";
            readonly type: "uint256[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "amountIn";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "amountOutMin";
            readonly type: "uint256";
        }, {
            readonly internalType: "address[]";
            readonly name: "path";
            readonly type: "address[]";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "deadline";
            readonly type: "uint256";
        }];
        readonly name: "swapExactTokensForTokens";
        readonly outputs: readonly [{
            readonly internalType: "uint256[]";
            readonly name: "amounts";
            readonly type: "uint256[]";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IUniswapV2RouterInterface;
    static connect(address: string, runner?: ContractRunner | null): IUniswapV2Router;
}
