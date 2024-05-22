import { type ContractRunner } from "ethers";
import type { IPriceFeedInterface, IPriceFeedInterfaceInterface } from "../../../contracts/interfaces/IPriceFeedInterface";
export declare class IPriceFeedInterface__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "decimals";
        readonly outputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "latestRoundData";
        readonly outputs: readonly [{
            readonly internalType: "uint80";
            readonly name: "roundId";
            readonly type: "uint80";
        }, {
            readonly internalType: "int256";
            readonly name: "answer";
            readonly type: "int256";
        }, {
            readonly internalType: "uint256";
            readonly name: "startedAt";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "updatedAt";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint80";
            readonly name: "answeredInRound";
            readonly type: "uint80";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): IPriceFeedInterfaceInterface;
    static connect(address: string, runner?: ContractRunner | null): IPriceFeedInterface;
}
