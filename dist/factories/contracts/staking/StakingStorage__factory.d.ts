import { type ContractRunner } from "ethers";
import type { StakingStorage, StakingStorageInterface } from "../../../contracts/staking/StakingStorage";
export declare class StakingStorage__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "HALF";
        readonly outputs: readonly [{
            readonly internalType: "uint128";
            readonly name: "";
            readonly type: "uint128";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "QUARTER";
        readonly outputs: readonly [{
            readonly internalType: "uint128";
            readonly name: "";
            readonly type: "uint128";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "QUARTERS3";
        readonly outputs: readonly [{
            readonly internalType: "uint128";
            readonly name: "";
            readonly type: "uint128";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "YEAR";
        readonly outputs: readonly [{
            readonly internalType: "uint128";
            readonly name: "";
            readonly type: "uint128";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "decimals";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "emmet";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "emmet";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "minAmount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "fee";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "metrics";
        readonly outputs: readonly [{
            readonly internalType: "uint128";
            readonly name: "locked";
            readonly type: "uint128";
        }, {
            readonly internalType: "uint128";
            readonly name: "rewards";
            readonly type: "uint128";
        }, {
            readonly internalType: "uint128";
            readonly name: "claimed";
            readonly type: "uint128";
        }, {
            readonly internalType: "uint128";
            readonly name: "delta";
            readonly type: "uint128";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "posCount";
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
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "positions";
        readonly outputs: readonly [{
            readonly internalType: "enum StakingStorage.Period";
            readonly name: "period";
            readonly type: "uint8";
        }, {
            readonly internalType: "uint128";
            readonly name: "start";
            readonly type: "uint128";
        }, {
            readonly internalType: "uint128";
            readonly name: "maturity";
            readonly type: "uint128";
        }, {
            readonly internalType: "uint128";
            readonly name: "locked";
            readonly type: "uint128";
        }, {
            readonly internalType: "uint128";
            readonly name: "claimed";
            readonly type: "uint128";
        }, {
            readonly internalType: "uint128";
            readonly name: "unclaimed";
            readonly type: "uint128";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "enum StakingStorage.Period";
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly name: "terms";
        readonly outputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "";
            readonly type: "uint16";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "token";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): StakingStorageInterface;
    static connect(address: string, runner?: ContractRunner | null): StakingStorage;
}
