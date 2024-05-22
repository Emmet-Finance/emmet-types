import { type ContractRunner } from "ethers";
import type { IPool, IPoolInterface } from "../../../../contracts/interfaces/IBalancerVault.sol/IPool";
export declare class IPool__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "getPoolId";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getSwapFeePercentage";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): IPoolInterface;
    static connect(address: string, runner?: ContractRunner | null): IPool;
}
