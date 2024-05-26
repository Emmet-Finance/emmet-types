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
    static readonly bytecode = "0x60a060405234801561001057600080fd5b50604051610adf380380610adf83398101604081905261002f916101b0565b816001600160a01b03811661005f57604051631e4fbdf760e01b8152600060048201526024015b60405180910390fd5b61006881610144565b50600180556001600160a01b0383166100c45760405163eac0d38960e01b815260206004820152601f60248201527f4c5020546f6b656e20616464726573732063616e6e6f74206265207a65726f006044820152606401610056565b6001600160a01b03821661012d5760405163eac0d38960e01b815260206004820152602960248201527f54686520496e697469616c20636f6e7472616374206f776e65722063616e6e6f60448201526874206265207a65726f60b81b6064820152608401610056565b6001600160a01b03909216608052506004556101ec565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80516001600160a01b03811681146101ab57600080fd5b919050565b6000806000606084860312156101c557600080fd5b6101ce84610194565b92506101dc60208501610194565b9150604084015190509250925092565b6080516108ca6102156000396000818161010101528181610356015261050201526108ca6000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c80638da5cb5b116100715780638da5cb5b146101435780639a79d32b14610154578063a694fc3a1461015d578063cfd4766314610170578063dfef6679146101a5578063f2fde38b146101c557600080fd5b80631852e8d9146100ae57806324f45e67146100d45780632e1a7d4d146100e95780635fcbd285146100fc578063715018a61461013b575b600080fd5b6100c16100bc366004610779565b6101d8565b6040519081526020015b60405180910390f35b6100e76100e23660046107a3565b610271565b005b6100e76100f73660046107a3565b6102b4565b6101237f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016100cb565b6100e7610453565b6000546001600160a01b0316610123565b6100c160045481565b6100e761016b3660046107a3565b610467565b61018361017e366004610779565b61060a565b60408051825181526020808401519082015291810151908201526060016100cb565b6100c16101b33660046107bc565b60026020526000908152604090205481565b6100e76101d33660046107bc565b61067b565b6001600160a01b0382166000908152600360209081526040808320848452825280832081516060810183528154815260018201549381018490526002909101549181019190915290829061022c90426107f4565b9050618e9462015180828460400151856000015161024a919061080d565b610254919061080d565b61025e9190610824565b6102689190610824565b95945050505050565b6102796106b6565b60048190556040518181527ffe0dc6926c703f5cea6a6a7bee3d6bede2f43f0df28a572f2e5cdd1d7ba9e5609060200160405180910390a150565b6102bc6106e3565b33600090815260036020908152604080832084845282528083208151606081018352815480825260018301549482019490945260029091015491810191909152910361031b57604051632cdf478160e11b815260040160405180910390fd5b600061032733846101d8565b3360008181526003602090815260408083208884529091528120818155600181018290556002015583519192507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169163a9059cbb9190610391908590610846565b6040516001600160e01b031960e085901b1681526001600160a01b03909216600483015260248201526044016020604051808303816000875af11580156103dc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104009190610859565b5081516040805191825260208201839052810184905233907f75e161b3e824b114fc1a33274bd7091918dd4e639cede50b78b15a4eea956a219060600160405180910390a2505061045060018055565b50565b61045b6106b6565b610465600061070d565b565b61046f6106e3565b806000036104bd5760405163589956a560e11b815260206004820152601560248201527443616e6e6f74207374616b65203020746f6b656e7360581b60448201526064015b60405180910390fd5b336000908152600260205260408120805490826104d98361087b565b909155506040516323b872dd60e01b8152336004820152306024820152604481018490529091507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af1158015610553573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105779190610859565b50604080516060808201835284825242602080840191825260048054858701908152336000818152600385528881208a82528552889020965187559351600187015551600290950194909455925484518781529384018690528385015292517fb4caaf29adda3eefee3ad552a8e85058589bf834c7466cae4ee58787f70589ed9281900390910190a25061045060018055565b61062e60405180606001604052806000815260200160008152602001600081525090565b506001600160a01b03909116600090815260036020908152604080832093835292815290829020825160608101845281548152600182015492810192909252600201549181019190915290565b6106836106b6565b6001600160a01b0381166106ad57604051631e4fbdf760e01b8152600060048201526024016104b4565b6104508161070d565b6000546001600160a01b031633146104655760405163118cdaa760e01b81523360048201526024016104b4565b60026001540361070657604051633ee5aeb560e01b815260040160405180910390fd5b6002600155565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80356001600160a01b038116811461077457600080fd5b919050565b6000806040838503121561078c57600080fd5b6107958361075d565b946020939093013593505050565b6000602082840312156107b557600080fd5b5035919050565b6000602082840312156107ce57600080fd5b6107d78261075d565b9392505050565b634e487b7160e01b600052601160045260246000fd5b81810381811115610807576108076107de565b92915050565b8082028115828204841417610807576108076107de565b60008261084157634e487b7160e01b600052601260045260246000fd5b500490565b80820180821115610807576108076107de565b60006020828403121561086b57600080fd5b815180151581146107d757600080fd5b60006001820161088d5761088d6107de565b506001019056fea264697066735822122075b3cd9ac95bc29d70bf549a93768d99ab5667a15e87cafb07aa9c52bd7b5f1464736f6c63430008180033";
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
