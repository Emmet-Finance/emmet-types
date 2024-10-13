import { type ContractRunner } from "ethers";
import type { IBridgeModule, IBridgeModuleInterface } from "../../../../contracts/bridge/components/IBridgeModule";
export declare class IBridgeModule__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "enum BridgeTypes.Step";
            readonly name: "step";
            readonly type: "uint8";
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
            readonly internalType: "uint256";
            readonly name: "receiveAmount";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "enum BridgeTypes.Step";
            readonly name: "step";
            readonly type: "uint8";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "blockNumber";
                readonly type: "uint256";
            }, {
                readonly internalType: "bool";
                readonly name: "isFeeERC20";
                readonly type: "bool";
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
                readonly name: "toChainId";
                readonly type: "uint128";
            }, {
                readonly internalType: "string";
                readonly name: "fromToken";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "toToken";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "to";
                readonly type: "string";
            }, {
                readonly internalType: "bool";
                readonly name: "isSuccess";
                readonly type: "bool";
            }];
            readonly internalType: "struct BridgeTypes.SendParams";
            readonly name: "params";
            readonly type: "tuple";
        }];
        readonly name: "sendInstallment";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "interfaceId";
            readonly type: "bytes4";
        }];
        readonly name: "supportsInterface";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): IBridgeModuleInterface;
    static connect(address: string, runner?: ContractRunner | null): IBridgeModule;
}
