import { type ContractRunner } from "ethers";
import type { IEmmetBridge, IEmmetBridgeInterface } from "../../../contracts/bridge/IEmmetBridge";
export declare class IEmmetBridge__factory {
    static readonly abi: readonly [{
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "user";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "token";
            readonly type: "string";
        }];
        readonly name: "Refund";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "txHash";
            readonly type: "bytes32";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "blockNumber";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "foreignIndexOut";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "value";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "start";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "sentAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "receiveAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint128";
                readonly name: "fromChainId";
                readonly type: "uint128";
            }, {
                readonly internalType: "uint128";
                readonly name: "toChainId";
                readonly type: "uint128";
            }, {
                readonly internalType: "string";
                readonly name: "to";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "fromToken";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "toToken";
                readonly type: "string";
            }, {
                readonly internalType: "bytes";
                readonly name: "data";
                readonly type: "bytes";
            }];
            readonly internalType: "struct BridgeTypes.ReceiveParams";
            readonly name: "params";
            readonly type: "tuple";
        }];
        readonly name: "receiveInstallment";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "received";
            readonly type: "string";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IEmmetBridgeInterface;
    static connect(address: string, runner?: ContractRunner | null): IEmmetBridge;
}
