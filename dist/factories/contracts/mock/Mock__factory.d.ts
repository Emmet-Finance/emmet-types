import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type { Mock, MockInterface } from "../../../contracts/mock/Mock";
type MockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Mock__factory extends ContractFactory {
    constructor(...args: MockConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<Mock & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): Mock__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b506103c4806100206000396000f3fe6080604052600436106100655760003560e01c8063b15ce09911610043578063b15ce099146100e2578063e811f50a146100f5578063f851a4401461010b57600080fd5b80632986c0e51461006a57806332fc3bf314610093578063501895ae146100b5575b600080fd5b34801561007657600080fd5b5061008060025481565b6040519081526020015b60405180910390f35b34801561009f57600080fd5b506100b36100ae366004610215565b61015d565b005b3480156100c157600080fd5b506100806100d03660046102f5565b60036020526000908152604090205481565b6100b36100f03660046102f5565b6101cf565b34801561010157600080fd5b5061008060015481565b34801561011757600080fd5b506000546101389073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161008a565b80604001516000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600360006002600081546101b59061033d565b918290555081526020810191909152604001600020555050565b34600160008282546101e19190610375565b9250508190555080600360006002600081546101fc9061033d565b9182905550815260208101919091526040016000205550565b600080828403608081121561022957600080fd5b8335925060607fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08201121561025d57600080fd5b506040516060810181811067ffffffffffffffff821117156102a8577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b80604052506020840135815260408401356020820152606084013573ffffffffffffffffffffffffffffffffffffffff811681146102e557600080fd5b6040820152919491935090915050565b60006020828403121561030757600080fd5b5035919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361036e5761036e61030e565b5060010190565b808201808211156103885761038861030e565b9291505056fea2646970667358221220a92226e7b6ed7a9d082d1a5dcedffee35e0714362ebaa8a48ffd0a4f33e4198e64736f6c63430008180033";
    static readonly abi: readonly [{
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
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "txHash";
            readonly type: "bytes32";
        }];
        readonly name: "collectFee";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "collectedFee";
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
            readonly name: "index";
            readonly type: "uint256";
        }];
        readonly name: "hashes";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "txHash";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "index";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "txHash";
            readonly type: "bytes32";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "offset1";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "offset2";
                readonly type: "uint256";
            }, {
                readonly internalType: "address";
                readonly name: "admin";
                readonly type: "address";
            }];
            readonly internalType: "struct Mock.CallData";
            readonly name: "newAdmin";
            readonly type: "tuple";
        }];
        readonly name: "updateAdmin";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): MockInterface;
    static connect(address: string, runner?: ContractRunner | null): Mock;
}
export {};
