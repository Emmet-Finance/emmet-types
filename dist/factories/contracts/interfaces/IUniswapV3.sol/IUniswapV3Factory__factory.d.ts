import { type ContractRunner } from "ethers";
import type { IUniswapV3Factory, IUniswapV3FactoryInterface } from "../../../../contracts/interfaces/IUniswapV3.sol/IUniswapV3Factory";
export declare class IUniswapV3Factory__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "tokenA";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "tokenB";
            readonly type: "address";
        }, {
            readonly internalType: "uint24";
            readonly name: "fee";
            readonly type: "uint24";
        }];
        readonly name: "getPool";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "pool";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): IUniswapV3FactoryInterface;
    static connect(address: string, runner?: ContractRunner | null): IUniswapV3Factory;
}
