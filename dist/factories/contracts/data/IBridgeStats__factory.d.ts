import { type ContractRunner } from "ethers";
import type { IBridgeStats, IBridgeStatsInterface } from "../../../contracts/data/IBridgeStats";
export declare class IBridgeStats__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "getStats";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "totalAmountUSD";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "totalFeesUSD";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "uniqueAddresses";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "user";
            readonly type: "string";
        }];
        readonly name: "getUserStats";
        readonly outputs: readonly [{
            readonly internalType: "uint128";
            readonly name: "received";
            readonly type: "uint128";
        }, {
            readonly internalType: "uint128";
            readonly name: "sent";
            readonly type: "uint128";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): IBridgeStatsInterface;
    static connect(address: string, runner?: ContractRunner | null): IBridgeStats;
}
