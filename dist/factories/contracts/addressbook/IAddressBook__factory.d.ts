import { type ContractRunner } from "ethers";
import type { IAddressBook, IAddressBookInterface } from "../../../contracts/addressbook/IAddressBook";
export declare class IAddressBook__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }];
        readonly name: "get";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "asset";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }, {
            readonly internalType: "address";
            readonly name: "asset";
            readonly type: "address";
        }];
        readonly name: "set";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IAddressBookInterface;
    static connect(address: string, runner?: ContractRunner | null): IAddressBook;
}
