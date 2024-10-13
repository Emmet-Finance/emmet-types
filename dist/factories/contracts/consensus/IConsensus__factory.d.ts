import { type ContractRunner } from "ethers";
import type { IConsensus, IConsensusInterface } from "../../../contracts/consensus/IConsensus";
export declare class IConsensus__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "txHash";
            readonly type: "bytes32";
        }];
        readonly name: "getTransaction";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bytes32";
                readonly name: "txHash";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint256";
                readonly name: "indexOrigin";
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
                readonly internalType: "uint128";
                readonly name: "started";
                readonly type: "uint128";
            }, {
                readonly internalType: "uint128";
                readonly name: "finished";
                readonly type: "uint128";
            }, {
                readonly internalType: "uint128";
                readonly name: "compensation";
                readonly type: "uint128";
            }, {
                readonly internalType: "uint128";
                readonly name: "msgValue";
                readonly type: "uint128";
            }, {
                readonly internalType: "uint128";
                readonly name: "protocolFee";
                readonly type: "uint128";
            }, {
                readonly internalType: "string";
                readonly name: "sender";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "recipient";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "originalHash";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "destinationHash";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "outcome";
                readonly type: "string";
            }, {
                readonly internalType: "bytes";
                readonly name: "data";
                readonly type: "bytes";
            }];
            readonly internalType: "struct CrossChainTransaction.CCT";
            readonly name: "txn";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "batch";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "skip";
            readonly type: "uint256";
        }];
        readonly name: "getTransactions";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bytes32";
                readonly name: "txHash";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint256";
                readonly name: "indexOrigin";
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
                readonly internalType: "uint128";
                readonly name: "started";
                readonly type: "uint128";
            }, {
                readonly internalType: "uint128";
                readonly name: "finished";
                readonly type: "uint128";
            }, {
                readonly internalType: "uint128";
                readonly name: "compensation";
                readonly type: "uint128";
            }, {
                readonly internalType: "uint128";
                readonly name: "msgValue";
                readonly type: "uint128";
            }, {
                readonly internalType: "uint128";
                readonly name: "protocolFee";
                readonly type: "uint128";
            }, {
                readonly internalType: "string";
                readonly name: "sender";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "recipient";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "originalHash";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "destinationHash";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "outcome";
                readonly type: "string";
            }, {
                readonly internalType: "bytes";
                readonly name: "data";
                readonly type: "bytes";
            }];
            readonly internalType: "struct CrossChainTransaction.CCT[]";
            readonly name: "txns";
            readonly type: "tuple[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): IConsensusInterface;
    static connect(address: string, runner?: ContractRunner | null): IConsensus;
}
