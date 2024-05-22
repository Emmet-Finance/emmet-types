import { type ContractRunner } from "ethers";
import type { IBridgeUtility, IBridgeUtilityInterface } from "../../../../contracts/interfaces/IUtility.sol/IBridgeUtility";
export declare class IBridgeUtility__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "accept";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint64";
            readonly name: "toChainId";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "string";
            readonly name: "to";
            readonly type: "string";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly name: "send";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "success";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IBridgeUtilityInterface;
    static connect(address: string, runner?: ContractRunner | null): IBridgeUtility;
}
