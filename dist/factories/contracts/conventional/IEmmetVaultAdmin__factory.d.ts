import { type ContractRunner } from "ethers";
import type { IEmmetVaultAdmin, IEmmetVaultAdminInterface } from "../../../contracts/conventional/IEmmetVaultAdmin";
export declare class IEmmetVaultAdmin__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newAddress_";
            readonly type: "address";
        }];
        readonly name: "updateAdmin";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newAddress_";
            readonly type: "address";
        }];
        readonly name: "updateBridge";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IEmmetVaultAdminInterface;
    static connect(address: string, runner?: ContractRunner | null): IEmmetVaultAdmin;
}
