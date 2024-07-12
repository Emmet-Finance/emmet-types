import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type { Rewards, RewardsInterface } from "../../../contracts/libs/Rewards";
type RewardsConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Rewards__factory extends ContractFactory {
    constructor(...args: RewardsConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<Rewards & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): Rewards__factory;
    static readonly bytecode = "0x61068c61003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100ad5760003560e01c8063a9c622f811610080578063e29294d611610065578063e29294d61461012b578063e75882be1461013e578063f824d54f1461016657600080fd5b8063a9c622f814610110578063ce9212a71461011857600080fd5b80630b4501fd146100b257806354c365c6146100d75780637a73877f146100ea578063a60248fc146100fd575b600080fd5b6100c46a084595161401484a00000081565b6040519081526020015b60405180910390f35b6100c46b02e87669c308736a0400000081565b6100c46100f8366004610564565b610179565b6100c46b033b2e3c9fd0803ce800000081565b6100c4610273565b6100c4610126366004610596565b610298565b6100c46101393660046105c2565b6102be565b61015161014c3660046105e4565b6102ea565b604080519283526020830191909152016100ce565b6100c4610174366004610596565b610325565b60006b02e87669c308736a040000008210156101c0576101b96101b26b02e87669c308736a040000006101ac8786610370565b90610416565b8690610498565b905061026b565b6b02e87669c308736a0400000082111561025e5760006102276101fb6b02e87669c308736a040000006b033b2e3c9fd0803ce80000006105fd565b6101ac6b033b2e3c9fd0803ce8000000610221876b02e87669c308736a040000006104eb565b90610370565b90506102566102466b033b2e3c9fd0803ce80000006101ac8785610370565b6102508888610498565b90610498565b91505061026b565b6102688585610498565b90505b949350505050565b6102956b02e87669c308736a040000006b033b2e3c9fd0803ce80000006105fd565b81565b6000806102a4856102ea565b5090506102b5836101ac8387610370565b95945050505050565b60006102e36102cd8385610498565b6101ac856b033b2e3c9fd0803ce8000000610370565b9392505050565b6000806103126b033b2e3c9fd0803ce80000006101ac856a084595161401484a000000610370565b905061031e83826104eb565b9150915091565b60006b02e87669c308736a040000008210156103665761035f6103586b02e87669c308736a040000006101ac8686610370565b8590610498565b90506102e3565b61026b8484610498565b600082158061037d575081155b1561038a57506000610410565b50818102816103998483610634565b146104105760405162461bcd60e51b8152602060048201526024808201527f55696e743235364d6174683a206d756c7469706c69636174696f6e206f76657260448201527f666c6f770000000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b92915050565b6000816000036104685760405162461bcd60e51b815260206004820152601d60248201527f55696e743235364d6174683a206469766973696f6e206279207a65726f0000006044820152606401610407565b82158061047457508183105b1561048157506000610410565b8183816104905761049061061e565b049392505050565b818101828110156104105760405162461bcd60e51b815260206004820152601e60248201527f55696e743235364d6174683a206164646974696f6e206f766572666c6f7700006044820152606401610407565b808203828111156104105760405162461bcd60e51b815260206004820152602260248201527f55696e743235364d6174683a207375627472616374696f6e20756e646572666c60448201527f6f770000000000000000000000000000000000000000000000000000000000006064820152608401610407565b6000806000806080858703121561057a57600080fd5b5050823594602084013594506040840135936060013592509050565b6000806000606084860312156105ab57600080fd5b505081359360208301359350604090920135919050565b600080604083850312156105d557600080fd5b50508035926020909101359150565b6000602082840312156105f657600080fd5b5035919050565b8181038181111561041057634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b60008261065157634e487b7160e01b600052601260045260246000fd5b50049056fea264697066735822122047515a69027c7c0ab29d416716fbb455048811f1179ec1d500bfdff51dbb56eb64736f6c63430008180033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "MAX_EXCESS_USAGE_RATIO";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "OPTIMAL_USAGE_RATIO";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "PROTOCOL_FEE";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "Ronna";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "totalRewards_";
            readonly type: "uint256";
        }];
        readonly name: "splitRewards";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "stakerRewards";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "protocolFee";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "baseStableRate_";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "stableRateSlope_";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "usage_";
            readonly type: "uint256";
        }];
        readonly name: "stableBorrowRate";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "rate";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "totalRewards_";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "stakerShare_";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "totalLiquidity_";
            readonly type: "uint256";
        }];
        readonly name: "stakerReward";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "reward";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "debt";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "availableLiquidity";
            readonly type: "uint256";
        }];
        readonly name: "usage";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "rate";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "baseVarRate_";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "varRateBelowOptimalSlope_";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "varRateAboveOptimalSlope_";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "usage_";
            readonly type: "uint256";
        }];
        readonly name: "variableBorrowRate";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "rate";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }];
    static createInterface(): RewardsInterface;
    static connect(address: string, runner?: ContractRunner | null): Rewards;
}
export {};
