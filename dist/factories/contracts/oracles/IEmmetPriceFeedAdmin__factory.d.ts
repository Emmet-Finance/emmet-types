import { type ContractRunner } from "ethers";
import type { IEmmetPriceFeedAdmin, IEmmetPriceFeedAdminInterface } from "../../../contracts/oracles/IEmmetPriceFeedAdmin";
export declare class IEmmetPriceFeedAdmin__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "int256";
            readonly name: "newPrice_";
            readonly type: "int256";
        }, {
            readonly internalType: "uint80";
            readonly name: "answeredInRound_";
            readonly type: "uint80";
        }];
        readonly name: "updateTokenPrice";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IEmmetPriceFeedAdminInterface;
    static connect(address: string, runner?: ContractRunner | null): IEmmetPriceFeedAdmin;
}
