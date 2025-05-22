import { type ContractRunner } from "ethers";
import type { IEmmetLPV2, IEmmetLPV2Interface } from "../../../../../../contracts/bridge/components/lp/EmmetLpV2.sol/IEmmetLPV2";
export declare class IEmmetLPV2__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "releaseTokens";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IEmmetLPV2Interface;
    static connect(address: string, runner?: ContractRunner | null): IEmmetLPV2;
}
