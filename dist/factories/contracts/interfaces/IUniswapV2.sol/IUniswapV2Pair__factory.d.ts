import { type ContractRunner } from "ethers";
import type { IUniswapV2Pair, IUniswapV2PairInterface } from "../../../../contracts/interfaces/IUniswapV2.sol/IUniswapV2Pair";
export declare class IUniswapV2Pair__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "getReserves";
        readonly outputs: readonly [{
            readonly internalType: "uint112";
            readonly name: "reserve0";
            readonly type: "uint112";
        }, {
            readonly internalType: "uint112";
            readonly name: "reserve1";
            readonly type: "uint112";
        }, {
            readonly internalType: "uint32";
            readonly name: "blockTimestampLast";
            readonly type: "uint32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "token0";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "token1";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): IUniswapV2PairInterface;
    static connect(address: string, runner?: ContractRunner | null): IUniswapV2Pair;
}
