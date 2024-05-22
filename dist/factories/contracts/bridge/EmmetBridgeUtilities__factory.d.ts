import { type ContractRunner } from "ethers";
import type { EmmetBridgeUtilities, EmmetBridgeUtilitiesInterface } from "../../../contracts/bridge/EmmetBridgeUtilities";
export declare class EmmetBridgeUtilities__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "message";
            readonly type: "string";
        }];
        readonly name: "EmmetBridgeError";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "txHash";
            readonly type: "bytes32";
        }];
        readonly name: "ReceiveInstallment";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "txHash";
            readonly type: "bytes32";
        }];
        readonly name: "SendInstallment";
        readonly type: "event";
    }, {
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
        }];
        readonly name: "UpdateGasFeeAddress";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "bridgeHash";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "txHash";
            readonly type: "bytes32";
        }];
        readonly name: "UpdateTxHash";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "newContract";
            readonly type: "address";
        }];
        readonly name: "UpdatedEmmetData";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "emmetData";
        readonly outputs: readonly [{
            readonly internalType: "contract IEmmetData";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "emmetTokenVault";
        readonly outputs: readonly [{
            readonly internalType: "contract IEmmetTokenVault";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "gasFeesAdmin";
        readonly outputs: readonly [{
            readonly internalType: "contract ICombinedGasFees";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "txHash";
            readonly type: "bytes32";
        }];
        readonly name: "incommingTransactions";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "id";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes32";
            readonly name: "fromTokenSymbol";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes32";
            readonly name: "toTokenSymbol";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint64";
            readonly name: "chainId";
            readonly type: "uint64";
        }, {
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly internalType: "string";
            readonly name: "originHash";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "txHash";
            readonly type: "bytes32";
        }];
        readonly name: "outgoingTransactions";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "id";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes32";
            readonly name: "fromTokenSymbol";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes32";
            readonly name: "toTokenSymbol";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint64";
            readonly name: "chainId";
            readonly type: "uint64";
        }, {
            readonly internalType: "bytes32";
            readonly name: "txHash";
            readonly type: "bytes32";
        }, {
            readonly internalType: "string";
            readonly name: "receiver";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): EmmetBridgeUtilitiesInterface;
    static connect(address: string, runner?: ContractRunner | null): EmmetBridgeUtilities;
}
