import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type { EmmetToken, EmmetTokenInterface } from "../../../contracts/multisig/EmmetToken";
type EmmetTokenConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class EmmetToken__factory extends ContractFactory {
    constructor(...args: EmmetTokenConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<EmmetToken & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): EmmetToken__factory;
    static readonly bytecode = "0x60806040523480156200001157600080fd5b506040518060400160405280601381526020017f456d6d65742046696e616e636520546f6b656e0000000000000000000000000081525060405180604001604052806005815260200164115353515560da1b8152508160039081620000779190620002c9565b506004620000868282620002c9565b505050620000a7336b033b2e3c9fd0803ce8000000620000ad60201b60201c565b620003bd565b6001600160a01b038216620000dd5760405163ec442f0560e01b8152600060048201526024015b60405180910390fd5b620000eb60008383620000ef565b5050565b6001600160a01b0383166200011e57806002600082825462000112919062000395565b90915550620001929050565b6001600160a01b03831660009081526020819052604090205481811015620001735760405163391434e360e21b81526001600160a01b03851660048201526024810182905260448101839052606401620000d4565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b038216620001b057600280548290039055620001cf565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516200021591815260200190565b60405180910390a3505050565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806200024d57607f821691505b6020821081036200026e57634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620002c4576000816000526020600020601f850160051c810160208610156200029f5750805b601f850160051c820191505b81811015620002c057828155600101620002ab565b5050505b505050565b81516001600160401b03811115620002e557620002e562000222565b620002fd81620002f6845462000238565b8462000274565b602080601f8311600181146200033557600084156200031c5750858301515b600019600386901b1c1916600185901b178555620002c0565b600085815260208120601f198616915b82811015620003665788860151825594840194600190910190840162000345565b5085821015620003855787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b80820180821115620003b757634e487b7160e01b600052601160045260246000fd5b92915050565b61073f80620003cd6000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c8063313ce56711610066578063313ce5671461011c57806370a082311461012b57806395d89b4114610154578063a9059cbb1461015c578063dd62ed3e1461016f57600080fd5b8063047fc9aa146100a357806306fdde03146100c9578063095ea7b3146100de57806318160ddd1461010157806323b872dd14610109575b600080fd5b6100b66b033b2e3c9fd0803ce800000081565b6040519081526020015b60405180910390f35b6100d16101a8565b6040516100c09190610588565b6100f16100ec3660046105f3565b61023a565b60405190151581526020016100c0565b6002546100b6565b6100f161011736600461061d565b610254565b604051601281526020016100c0565b6100b6610139366004610659565b6001600160a01b031660009081526020819052604090205490565b6100d1610278565b6100f161016a3660046105f3565b610287565b6100b661017d36600461067b565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6060600380546101b7906106ae565b80601f01602080910402602001604051908101604052809291908181526020018280546101e3906106ae565b80156102305780601f1061020557610100808354040283529160200191610230565b820191906000526020600020905b81548152906001019060200180831161021357829003601f168201915b5050505050905090565b600033610248818585610295565b60019150505b92915050565b6000336102628582856102a7565b61026d85858561032a565b506001949350505050565b6060600480546101b7906106ae565b60003361024881858561032a565b6102a28383836001610389565b505050565b6001600160a01b038381166000908152600160209081526040808320938616835292905220546000198114610324578181101561031557604051637dc7a0d960e11b81526001600160a01b038416600482015260248101829052604481018390526064015b60405180910390fd5b61032484848484036000610389565b50505050565b6001600160a01b03831661035457604051634b637e8f60e11b81526000600482015260240161030c565b6001600160a01b03821661037e5760405163ec442f0560e01b81526000600482015260240161030c565b6102a283838361045e565b6001600160a01b0384166103b35760405163e602df0560e01b81526000600482015260240161030c565b6001600160a01b0383166103dd57604051634a1406b160e11b81526000600482015260240161030c565b6001600160a01b038085166000908152600160209081526040808320938716835292905220829055801561032457826001600160a01b0316846001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258460405161045091815260200190565b60405180910390a350505050565b6001600160a01b03831661048957806002600082825461047e91906106e8565b909155506104fb9050565b6001600160a01b038316600090815260208190526040902054818110156104dc5760405163391434e360e21b81526001600160a01b0385166004820152602481018290526044810183905260640161030c565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b03821661051757600280548290039055610536565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161057b91815260200190565b60405180910390a3505050565b60006020808352835180602085015260005b818110156105b65785810183015185820160400152820161059a565b506000604082860101526040601f19601f8301168501019250505092915050565b80356001600160a01b03811681146105ee57600080fd5b919050565b6000806040838503121561060657600080fd5b61060f836105d7565b946020939093013593505050565b60008060006060848603121561063257600080fd5b61063b846105d7565b9250610649602085016105d7565b9150604084013590509250925092565b60006020828403121561066b57600080fd5b610674826105d7565b9392505050565b6000806040838503121561068e57600080fd5b610697836105d7565b91506106a5602084016105d7565b90509250929050565b600181811c908216806106c257607f821691505b6020821081036106e257634e487b7160e01b600052602260045260246000fd5b50919050565b8082018082111561024e57634e487b7160e01b600052601160045260246000fdfea264697066735822122035ac04c553816a485d9ab74ac7a44a5f16a35f1529f7768c1cb1c36b5875983064736f6c63430008180033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "allowance";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "needed";
            readonly type: "uint256";
        }];
        readonly name: "ERC20InsufficientAllowance";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "balance";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "needed";
            readonly type: "uint256";
        }];
        readonly name: "ERC20InsufficientBalance";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "approver";
            readonly type: "address";
        }];
        readonly name: "ERC20InvalidApprover";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }];
        readonly name: "ERC20InvalidReceiver";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }];
        readonly name: "ERC20InvalidSender";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }];
        readonly name: "ERC20InvalidSpender";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "Approval";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "Transfer";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }];
        readonly name: "allowance";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "approve";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "balanceOf";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "decimals";
        readonly outputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "name";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "supply";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "symbol";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "totalSupply";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "transfer";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "transferFrom";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): EmmetTokenInterface;
    static connect(address: string, runner?: ContractRunner | null): EmmetToken;
}
export {};
