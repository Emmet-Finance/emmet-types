import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, BigNumberish, AddressLike, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type { EmmetRestaking, EmmetRestakingInterface } from "../../../contracts/liquidity/EmmetRestaking";
type EmmetRestakingConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class EmmetRestaking__factory extends ContractFactory {
    constructor(...args: EmmetRestakingConstructorParams);
    getDeployTransaction(lpToken_: AddressLike, initialOwner_: AddressLike, initialAPY_: BigNumberish, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(lpToken_: AddressLike, initialOwner_: AddressLike, initialAPY_: BigNumberish, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<EmmetRestaking & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): EmmetRestaking__factory;
    static readonly bytecode = "0x60a060405234801561001057600080fd5b50604051610c1e380380610c1e83398101604081905261002f916101b0565b816001600160a01b03811661005f57604051631e4fbdf760e01b8152600060048201526024015b60405180910390fd5b61006881610144565b50600180556001600160a01b0383166100c45760405163eac0d38960e01b815260206004820152601f60248201527f4c5020546f6b656e20616464726573732063616e6e6f74206265207a65726f006044820152606401610056565b6001600160a01b03821661012d5760405163eac0d38960e01b815260206004820152602960248201527f54686520496e697469616c20636f6e7472616374206f776e65722063616e6e6f60448201526874206265207a65726f60b81b6064820152608401610056565b6001600160a01b03909216608052506004556101ec565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80516001600160a01b03811681146101ab57600080fd5b919050565b6000806000606084860312156101c557600080fd5b6101ce84610194565b92506101dc60208501610194565b9150604084015190509250925092565b608051610a09610215600039600081816101210152818161038f015261058d0152610a096000f3fe608060405234801561001057600080fd5b50600436106100c95760003560e01c80638da5cb5b11610081578063cfd476631161005b578063cfd4766314610190578063dfef6679146101c5578063f2fde38b146101e557600080fd5b80638da5cb5b146101635780639a79d32b14610174578063a694fc3a1461017d57600080fd5b80632e1a7d4d116100b25780632e1a7d4d146101095780635fcbd2851461011c578063715018a61461015b57600080fd5b80631852e8d9146100ce57806324f45e67146100f4575b600080fd5b6100e16100dc366004610867565b6101f8565b6040519081526020015b60405180910390f35b610107610102366004610891565b610291565b005b610107610117366004610891565b6102d4565b6101437f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016100eb565b6101076104a4565b6000546001600160a01b0316610143565b6100e160045481565b61010761018b366004610891565b6104b8565b6101a361019e366004610867565b610695565b60408051825181526020808401519082015291810151908201526060016100eb565b6100e16101d33660046108aa565b60026020526000908152604090205481565b6101076101f33660046108aa565b610706565b6001600160a01b0382166000908152600360209081526040808320848452825280832081516060810183528154815260018201549381018490526002909101549181019190915290829061024c90426108fb565b9050618e9462015180828460400151856000015161026a9190610914565b6102749190610914565b61027e919061092b565b610288919061092b565b95945050505050565b61029961075a565b60048190556040518181527ffe0dc6926c703f5cea6a6a7bee3d6bede2f43f0df28a572f2e5cdd1d7ba9e5609060200160405180910390a150565b6102dc6107a0565b336000908152600360209081526040808320848452825280832081516060810183528154808252600183015494820194909452600290910154918101919091529103610354576040517f59be8f0200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061036033846101f8565b3360008181526003602090815260408083208884529091528120818155600181018290556002015583519192507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169163a9059cbb91906103ca908590610966565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b1681526001600160a01b03909216600483015260248201526044016020604051808303816000875af115801561042d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104519190610979565b5081516040805191825260208201839052810184905233907f75e161b3e824b114fc1a33274bd7091918dd4e639cede50b78b15a4eea956a219060600160405180910390a250506104a160018055565b50565b6104ac61075a565b6104b660006107e3565b565b6104c06107a0565b8060000361052f576040517fb132ad4a00000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f43616e6e6f74207374616b65203020746f6b656e73000000000000000000000060448201526064015b60405180910390fd5b3360009081526002602052604081208054908261054b8361099b565b909155506040517f23b872dd000000000000000000000000000000000000000000000000000000008152336004820152306024820152604481018490529091507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af11580156105de573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106029190610979565b50604080516060808201835284825242602080840191825260048054858701908152336000818152600385528881208a82528552889020965187559351600187015551600290950194909455925484518781529384018690528385015292517fb4caaf29adda3eefee3ad552a8e85058589bf834c7466cae4ee58787f70589ed9281900390910190a2506104a160018055565b6106b960405180606001604052806000815260200160008152602001600081525090565b506001600160a01b03909116600090815260036020908152604080832093835292815290829020825160608101845281548152600182015492810192909252600201549181019190915290565b61070e61075a565b6001600160a01b038116610751576040517f1e4fbdf700000000000000000000000000000000000000000000000000000000815260006004820152602401610526565b6104a1816107e3565b6000546001600160a01b031633146104b6576040517f118cdaa7000000000000000000000000000000000000000000000000000000008152336004820152602401610526565b6002600154036107dc576040517f3ee5aeb500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6002600155565b600080546001600160a01b038381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80356001600160a01b038116811461086257600080fd5b919050565b6000806040838503121561087a57600080fd5b6108838361084b565b946020939093013593505050565b6000602082840312156108a357600080fd5b5035919050565b6000602082840312156108bc57600080fd5b6108c58261084b565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b8181038181111561090e5761090e6108cc565b92915050565b808202811582820484141761090e5761090e6108cc565b600082610961577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b8082018082111561090e5761090e6108cc565b60006020828403121561098b57600080fd5b815180151581146108c557600080fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036109cc576109cc6108cc565b506001019056fea2646970667358221220c397cff26fbbea6ae1759c5e3b82a7aea5bb48232321d53fd12b12d09b02c7cf64736f6c63430008180033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "lpToken_";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "initialOwner_";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "initialAPY_";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "message";
            readonly type: "string";
        }];
        readonly name: "InvalidAmount";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NoStakeFound";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }];
        readonly name: "OwnableInvalidOwner";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "OwnableUnauthorizedAccount";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ReentrancyGuardReentrantCall";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "message";
            readonly type: "string";
        }];
        readonly name: "ZeroAddress";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "newAPY";
            readonly type: "uint256";
        }];
        readonly name: "APYChanged";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "previousOwner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "OwnershipTransferred";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
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
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "apy";
            readonly type: "uint256";
        }];
        readonly name: "Staked";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
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
            readonly internalType: "uint256";
            readonly name: "reward";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
        }];
        readonly name: "Withdrawn";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "staker";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
        }];
        readonly name: "calculateReward";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "reward";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "currentAPY";
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
            readonly name: "staker";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
        }];
        readonly name: "getStake";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "amount";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "timestamp";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "apy";
                readonly type: "uint256";
            }];
            readonly internalType: "struct IEmmetRestaking.Stake";
            readonly name: "foundStake";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "lpToken";
        readonly outputs: readonly [{
            readonly internalType: "contract IERC20";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "staker";
            readonly type: "address";
        }];
        readonly name: "numberOfStakes";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "stakes";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "renounceOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "apy_";
            readonly type: "uint256";
        }];
        readonly name: "setAPY";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "stake";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "transferOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
        }];
        readonly name: "withdraw";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): EmmetRestakingInterface;
    static connect(address: string, runner?: ContractRunner | null): EmmetRestaking;
}
export {};
