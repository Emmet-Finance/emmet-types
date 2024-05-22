import { type ContractRunner } from "ethers";
import type { IUniswapV3Router, IUniswapV3RouterInterface } from "../../../../contracts/interfaces/IUniswapV3.sol/IUniswapV3Router";
export declare class IUniswapV3Router__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bytes";
                readonly name: "path";
                readonly type: "bytes";
            }, {
                readonly internalType: "address";
                readonly name: "recipient";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "deadline";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "amountIn";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "amountOutMinimum";
                readonly type: "uint256";
            }];
            readonly internalType: "struct IUniswapV3Router.ExactInputParams";
            readonly name: "params";
            readonly type: "tuple";
        }];
        readonly name: "exactInput";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "amountOut";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "tokenIn";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "tokenOut";
                readonly type: "address";
            }, {
                readonly internalType: "uint24";
                readonly name: "fee";
                readonly type: "uint24";
            }, {
                readonly internalType: "address";
                readonly name: "recipient";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "deadline";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "amountIn";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "amountOutMinimum";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint160";
                readonly name: "sqrtPriceLimitX96";
                readonly type: "uint160";
            }];
            readonly internalType: "struct IUniswapV3Router.ExactInputSingleParams";
            readonly name: "params";
            readonly type: "tuple";
        }];
        readonly name: "exactInputSingle";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "amountOut";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IUniswapV3RouterInterface;
    static connect(address: string, runner?: ContractRunner | null): IUniswapV3Router;
}
