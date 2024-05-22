import { type ContractRunner } from "ethers";
import type { IUniswapV3Pool, IUniswapV3PoolInterface } from "../../../../contracts/interfaces/IUniswapV3.sol/IUniswapV3Pool";
export declare class IUniswapV3Pool__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "fee";
        readonly outputs: readonly [{
            readonly internalType: "uint24";
            readonly name: "";
            readonly type: "uint24";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "liquidity";
        readonly outputs: readonly [{
            readonly internalType: "uint128";
            readonly name: "";
            readonly type: "uint128";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "slot0";
        readonly outputs: readonly [{
            readonly internalType: "uint160";
            readonly name: "sqrtPriceX96";
            readonly type: "uint160";
        }, {
            readonly internalType: "int24";
            readonly name: "tick";
            readonly type: "int24";
        }, {
            readonly internalType: "uint16";
            readonly name: "observationIndex";
            readonly type: "uint16";
        }, {
            readonly internalType: "uint16";
            readonly name: "observationCardinality";
            readonly type: "uint16";
        }, {
            readonly internalType: "uint16";
            readonly name: "observationCardinalityNext";
            readonly type: "uint16";
        }, {
            readonly internalType: "uint8";
            readonly name: "feeProtocol";
            readonly type: "uint8";
        }, {
            readonly internalType: "bool";
            readonly name: "unlocked";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "int24";
            readonly name: "tick";
            readonly type: "int24";
        }];
        readonly name: "ticks";
        readonly outputs: readonly [{
            readonly internalType: "uint128";
            readonly name: "liquidityGross";
            readonly type: "uint128";
        }, {
            readonly internalType: "int128";
            readonly name: "liquidityNet";
            readonly type: "int128";
        }, {
            readonly internalType: "uint256";
            readonly name: "feeGrowthOutside0X128";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "feeGrowthOutside1X128";
            readonly type: "uint256";
        }, {
            readonly internalType: "int56";
            readonly name: "tickCumulativeOutside";
            readonly type: "int56";
        }, {
            readonly internalType: "uint160";
            readonly name: "secondsPerLiquidityOutsideX128";
            readonly type: "uint160";
        }, {
            readonly internalType: "uint32";
            readonly name: "secondsOutside";
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
    static createInterface(): IUniswapV3PoolInterface;
    static connect(address: string, runner?: ContractRunner | null): IUniswapV3Pool;
}
