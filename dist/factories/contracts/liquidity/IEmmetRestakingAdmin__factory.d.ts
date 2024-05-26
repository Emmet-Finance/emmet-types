import { type ContractRunner } from "ethers";
import type { IEmmetRestakingAdmin, IEmmetRestakingAdminInterface } from "../../../contracts/liquidity/IEmmetRestakingAdmin";
export declare class IEmmetRestakingAdmin__factory {
    static readonly abi: readonly [{
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "newAPY";
            readonly type: "uint256";
        }];
        readonly name: "APYChanged";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "apy_";
            readonly type: "uint256";
        }];
        readonly name: "setAPY";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IEmmetRestakingAdminInterface;
    static connect(address: string, runner?: ContractRunner | null): IEmmetRestakingAdmin;
}
