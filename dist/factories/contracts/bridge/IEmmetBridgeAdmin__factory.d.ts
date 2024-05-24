import { type ContractRunner } from "ethers";
import type { IEmmetBridgeAdmin, IEmmetBridgeAdminInterface } from "../../../contracts/bridge/IEmmetBridgeAdmin";
export declare class IEmmetBridgeAdmin__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "emmetData_";
            readonly type: "address";
        }];
        readonly name: "updateEmmetData";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "gasFeesAdmin_";
            readonly type: "address";
        }];
        readonly name: "updateGasLimitAddress";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "bridgeHash_";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes32";
            readonly name: "txHash_";
            readonly type: "bytes32";
        }];
        readonly name: "updateTxHash";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "withdrawProtocolFee";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "symbol_";
            readonly type: "string";
        }];
        readonly name: "withdrawTokenFee";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IEmmetBridgeAdminInterface;
    static connect(address: string, runner?: ContractRunner | null): IEmmetBridgeAdmin;
}
