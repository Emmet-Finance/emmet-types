import { type ContractRunner } from "ethers";
import type { IEmmetTokenVault, IEmmetTokenVaultInterface } from "../../../contracts/conventional/IEmmetTokenVault";
export declare class IEmmetTokenVault__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "to_";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount_";
            readonly type: "uint256";
        }];
        readonly name: "sendETH";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "lockedToken_";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "to_";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount_";
            readonly type: "uint256";
        }];
        readonly name: "transfer";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IEmmetTokenVaultInterface;
    static connect(address: string, runner?: ContractRunner | null): IEmmetTokenVault;
}
