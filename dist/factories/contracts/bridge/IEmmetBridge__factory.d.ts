import { type ContractRunner } from "ethers";
import type { IEmmetBridge, IEmmetBridgeInterface } from "../../../contracts/bridge/IEmmetBridge";
export declare class IEmmetBridge__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "txHash_";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256";
            readonly name: "id_";
            readonly type: "uint256";
        }, {
            readonly internalType: "address[]";
            readonly name: "signers_";
            readonly type: "address[]";
        }, {
            readonly internalType: "bytes[]";
            readonly name: "aggregatedSignature_";
            readonly type: "bytes[]";
        }, {
            readonly internalType: "bytes";
            readonly name: "data_";
            readonly type: "bytes";
        }];
        readonly name: "receiveInstallment";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint64";
            readonly name: "toChainId_";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount_";
            readonly type: "uint256";
        }, {
            readonly internalType: "string";
            readonly name: "fromToken_";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "toToken_";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "recipient_";
            readonly type: "string";
        }];
        readonly name: "sendInstallment";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }];
    static createInterface(): IEmmetBridgeInterface;
    static connect(address: string, runner?: ContractRunner | null): IEmmetBridge;
}
