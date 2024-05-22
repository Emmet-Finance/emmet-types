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
    static readonly bytecode = "0x608060405234801561001057600080fd5b50600080546001600160a01b03191633179055610659806100326000396000f3fe6080604052600436106100595760003560e01c80636eb38212146100bf578063beabacc8146100df578063c4d66de8146100ff578063e2f273bd1461011f578063e78cea921461013f578063f851a4401461017b57610092565b36610092576001546001600160a01b031633146100905760405163570870ef60e11b81523360048201526024015b60405180910390fd5b005b6001546001600160a01b031633146100905760405163570870ef60e11b8152336004820152602401610087565b3480156100cb57600080fd5b506100906100da36600461058a565b61019b565b3480156100eb57600080fd5b506100906100fa3660046105ac565b610260565b34801561010b57600080fd5b5061009061011a36600461058a565b6103c6565b34801561012b57600080fd5b5061009061013a36600461058a565b6104e7565b34801561014b57600080fd5b5060015461015f906001600160a01b031681565b6040516001600160a01b03909116815260200160405180910390f35b34801561018757600080fd5b5060005461015f906001600160a01b031681565b6000546001600160a01b031633146101c85760405163570870ef60e11b8152336004820152602401610087565b806001600160a01b03163b6000036101fe576040516322a2d07b60e21b81526001600160a01b0382166004820152602401610087565b600180546001600160a01b038381166001600160a01b031983168117909355604080519190921680825260208201939093527faef13d210b8a75b8fbff9c55099253b5d1a907b81cfc1eb0401debbbad46628191015b60405180910390a15050565b6001546001600160a01b0316331461028d5760405163570870ef60e11b8152336004820152602401610087565b6040516370a0823160e01b815230600482015283906000906001600160a01b038316906370a0823190602401602060405180830381865afa1580156102d6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102fa91906105e8565b9050828110156103275760405163bce5067160e01b81526004810184905260248101829052604401610087565b60405163a9059cbb60e01b81526001600160a01b038581166004830152602482018590526000919084169063a9059cbb906044016020604051808303816000875af115801561037a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061039e9190610601565b9050806103be57604051633c9fd93960e21b815260040160405180910390fd5b505050505050565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a008054600160401b810460ff16159067ffffffffffffffff1660008115801561040c5750825b905060008267ffffffffffffffff1660011480156104295750303b155b905081158015610437575080155b156104555760405163f92ee8a960e01b815260040160405180910390fd5b845467ffffffffffffffff19166001178555831561047f57845460ff60401b1916600160401b1785555b600180546001600160a01b0319166001600160a01b03881617905583156103be57845460ff60401b19168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a1505050505050565b6000546001600160a01b031633146105145760405163570870ef60e11b8152336004820152602401610087565b600080546001600160a01b038381166001600160a01b031983168117909355604080519190921680825260208201939093527faef13d210b8a75b8fbff9c55099253b5d1a907b81cfc1eb0401debbbad4662819101610254565b80356001600160a01b038116811461058557600080fd5b919050565b60006020828403121561059c57600080fd5b6105a58261056e565b9392505050565b6000806000606084860312156105c157600080fd5b6105ca8461056e565b92506105d86020850161056e565b9150604084013590509250925092565b6000602082840312156105fa57600080fd5b5051919050565b60006020828403121561061357600080fd5b815180151581146105a557600080fdfea264697066735822122024912b3d59656da1d9e250cf0d565bb6dfa28a8d4f6ccf7bb170b3fef32d3bb664736f6c63430008180033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "ERC20TransferFailed";
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
