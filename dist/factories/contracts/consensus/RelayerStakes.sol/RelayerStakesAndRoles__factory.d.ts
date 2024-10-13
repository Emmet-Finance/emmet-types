import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type { RelayerStakesAndRoles, RelayerStakesAndRolesInterface } from "../../../../contracts/consensus/RelayerStakes.sol/RelayerStakesAndRoles";
type RelayerStakesAndRolesConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class RelayerStakesAndRoles__factory extends ContractFactory {
    constructor(...args: RelayerStakesAndRolesConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<RelayerStakesAndRoles & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): RelayerStakesAndRoles__factory;
    static readonly bytecode = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212205917aa52e0ed561422b3f3599dc50987313e39754d431afe9a04329a10a3972e64736f6c63430008180033";
    static readonly abi: readonly [{
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "newCoolDown";
            readonly type: "uint256";
        }];
        readonly name: "CoolDownPeriodUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "candidate";
            readonly type: "address";
        }];
        readonly name: "KycPassed";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "newStake";
            readonly type: "uint256";
        }];
        readonly name: "MinStakeUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "staker";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "RewardClaimed";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "staker";
            readonly type: "address";
        }];
        readonly name: "SignerRoleRefused";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "staker";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "Staked";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "staker";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "Unstaked";
        readonly type: "event";
    }];
    static createInterface(): RelayerStakesAndRolesInterface;
    static connect(address: string, runner?: ContractRunner | null): RelayerStakesAndRoles;
}
export {};
