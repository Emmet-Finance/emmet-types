import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type { AddressStorageHelper, AddressStorageHelperInterface } from "../../../contracts/addressbook/AddressStorageHelper";
type AddressStorageHelperConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class AddressStorageHelper__factory extends ContractFactory {
    constructor(...args: AddressStorageHelperConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<AddressStorageHelper & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): AddressStorageHelper__factory;
    static readonly bytecode = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212202f233f9b0f4058f8039e4d5ca293fa24066f8726671f326aac83b442d9b74b0064736f6c63430008180033";
    static readonly abi: readonly [{
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "oldAddress";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "newAddress";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }];
        readonly name: "AddressUpdate";
        readonly type: "event";
    }];
    static createInterface(): AddressStorageHelperInterface;
    static connect(address: string, runner?: ContractRunner | null): AddressStorageHelper;
}
export {};
