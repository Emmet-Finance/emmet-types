import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type { EmmetTokenVault, EmmetTokenVaultInterface } from "../../../contracts/conventional/EmmetTokenVault";
type EmmetTokenVaultConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class EmmetTokenVault__factory extends ContractFactory {
    constructor(...args: EmmetTokenVaultConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<EmmetTokenVault & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): EmmetTokenVault__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50600080546001600160a01b031916331790556107be806100326000396000f3fe6080604052600436106100745760003560e01c8063c4d66de81161004e578063c4d66de81461013a578063e2f273bd1461015a578063e78cea921461017a578063f851a440146101b6576100ad565b806364a197f3146100da5780636eb38212146100fa578063beabacc81461011a576100ad565b366100ad576001546001600160a01b031633146100ab5760405163570870ef60e11b81523360048201526024015b60405180910390fd5b005b6001546001600160a01b031633146100ab5760405163570870ef60e11b81523360048201526024016100a2565b3480156100e657600080fd5b506100ab6100f53660046106c5565b6101d6565b34801561010657600080fd5b506100ab6101153660046106ef565b6102d6565b34801561012657600080fd5b506100ab610135366004610711565b61039b565b34801561014657600080fd5b506100ab6101553660046106ef565b610501565b34801561016657600080fd5b506100ab6101753660046106ef565b610622565b34801561018657600080fd5b5060015461019a906001600160a01b031681565b6040516001600160a01b03909116815260200160405180910390f35b3480156101c257600080fd5b5060005461019a906001600160a01b031681565b6001546001600160a01b031633146102035760405163570870ef60e11b81523360048201526024016100a2565b478181101561022f5760405163bce5067160e01b815260048101839052602481018290526044016100a2565b6000836001600160a01b03168360405161026c907f456d6d657442726964676520636f696e2072656c656173650000000000000000815260180190565b60006040518083038185875af1925050503d80600081146102a9576040519150601f19603f3d011682016040523d82523d6000602084013e6102ae565b606091505b50509050806102d05760405163b12d13eb60e01b815260040160405180910390fd5b50505050565b6000546001600160a01b031633146103035760405163570870ef60e11b81523360048201526024016100a2565b806001600160a01b03163b600003610339576040516322a2d07b60e21b81526001600160a01b03821660048201526024016100a2565b600180546001600160a01b038381166001600160a01b031983168117909355604080519190921680825260208201939093527faef13d210b8a75b8fbff9c55099253b5d1a907b81cfc1eb0401debbbad46628191015b60405180910390a15050565b6001546001600160a01b031633146103c85760405163570870ef60e11b81523360048201526024016100a2565b6040516370a0823160e01b815230600482015283906000906001600160a01b038316906370a0823190602401602060405180830381865afa158015610411573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610435919061074d565b9050828110156104625760405163bce5067160e01b815260048101849052602481018290526044016100a2565b60405163a9059cbb60e01b81526001600160a01b038581166004830152602482018590526000919084169063a9059cbb906044016020604051808303816000875af11580156104b5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104d99190610766565b9050806104f957604051633c9fd93960e21b815260040160405180910390fd5b505050505050565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a008054600160401b810460ff16159067ffffffffffffffff166000811580156105475750825b905060008267ffffffffffffffff1660011480156105645750303b155b905081158015610572575080155b156105905760405163f92ee8a960e01b815260040160405180910390fd5b845467ffffffffffffffff1916600117855583156105ba57845460ff60401b1916600160401b1785555b600180546001600160a01b0319166001600160a01b03881617905583156104f957845460ff60401b19168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a1505050505050565b6000546001600160a01b0316331461064f5760405163570870ef60e11b81523360048201526024016100a2565b600080546001600160a01b038381166001600160a01b031983168117909355604080519190921680825260208201939093527faef13d210b8a75b8fbff9c55099253b5d1a907b81cfc1eb0401debbbad466281910161038f565b80356001600160a01b03811681146106c057600080fd5b919050565b600080604083850312156106d857600080fd5b6106e1836106a9565b946020939093013593505050565b60006020828403121561070157600080fd5b61070a826106a9565b9392505050565b60008060006060848603121561072657600080fd5b61072f846106a9565b925061073d602085016106a9565b9150604084013590509250925092565b60006020828403121561075f57600080fd5b5051919050565b60006020828403121561077857600080fd5b8151801515811461070a57600080fdfea2646970667358221220a99a13bd5bd57cec996a1083a147f9112e1755f5665ffe9072c109accc8d06d564736f6c63430008180033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "ERC20TransferFailed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ETHTransferFailed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "required";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "actual";
            readonly type: "uint256";
        }];
        readonly name: "InsufficientVaultBalance";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidInitialization";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "EOA";
            readonly type: "address";
        }];
        readonly name: "NotAContract";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NotInitializing";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "caller";
            readonly type: "address";
        }];
        readonly name: "Unauthorised";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint64";
            readonly name: "version";
            readonly type: "uint64";
        }];
        readonly name: "Initialized";
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
        readonly name: "Update";
        readonly type: "event";
    }, {
        readonly stateMutability: "payable";
        readonly type: "fallback";
    }, {
        readonly inputs: readonly [];
        readonly name: "admin";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "bridge";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "bridge_";
            readonly type: "address";
        }];
        readonly name: "initialize";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "to_";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount_";
            readonly type: "uint256";
        }];
        readonly name: "sendETH";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "lockedToken_";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "to_";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount_";
            readonly type: "uint256";
        }];
        readonly name: "transfer";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newAddress_";
            readonly type: "address";
        }];
        readonly name: "updateAdmin";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newAddress_";
            readonly type: "address";
        }];
        readonly name: "updateBridge";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly stateMutability: "payable";
        readonly type: "receive";
    }];
    static createInterface(): EmmetTokenVaultInterface;
    static connect(address: string, runner?: ContractRunner | null): EmmetTokenVault;
}
export {};
