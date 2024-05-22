import { type ContractRunner } from "ethers";
import type { IMessageTransmitter, IMessageTransmitterInterface } from "../../../contracts/interfaces/IMessageTransmitter";
export declare class IMessageTransmitter__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "message";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "signature";
            readonly type: "bytes";
        }];
        readonly name: "receiveMessage";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "success";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IMessageTransmitterInterface;
    static connect(address: string, runner?: ContractRunner | null): IMessageTransmitter;
}
