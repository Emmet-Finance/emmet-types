import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type { CCTPHelper, CCTPHelperInterface } from "../../../contracts/libs/CCTPHelper";
type CCTPHelperConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class CCTPHelper__factory extends ContractFactory {
    constructor(...args: CCTPHelperConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<CCTPHelper & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): CCTPHelper__factory;
    static readonly bytecode = "0x610c4c610039600b82828239805160001a607314602c57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100875760003560e01c80638fbb3be7116100655780638fbb3be714610111578063dfbd577614610133578063edfd36cd14610153578063fc7793da1461016857600080fd5b80633d94bee51461008c57806346117830146100b65780637b04c181146100f6575b600080fd5b61009f61009a36600461092b565b610188565b6040516100ad9291906109b8565b60405180910390f35b6100d1739f3b8679c73c2fef8b59b4f3444d4e156fb70aa581565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100ad565b6100d1737865fafc2db2093669d92c0f33aeef291086befd81565b81801561011d57600080fd5b5061013161012c3660046109e6565b6101a9565b005b81801561013f57600080fd5b5061013161014e366004610a5a565b6104a2565b81801561015f57600080fd5b506101316105b7565b61017b610176366004610a5a565b610652565b6040516100ad9190610ac3565b6060808280602001905181019061019f9190610b22565b9094909350915050565b6101b284610690565b6101bb82610690565b6101c485610707565b6101e1739f3b8679c73c2fef8b59b4f3444d4e156fb70aa5610707565b6040517f23b872dd0000000000000000000000000000000000000000000000000000000081523360048201523060248201526044810185905260009073ffffffffffffffffffffffffffffffffffffffff8716906323b872dd906064016020604051808303816000875af115801561025d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102819190610b81565b9050806102fc5760405163135e2cbf60e21b815260206004820152603360248201527f546f6b656e207472616e736665722066726f6d20746865207573657220746f2060448201527f74686520636f6e7472616374206661696c65640000000000000000000000000060648201526084015b60405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff861663095ea7b3739f3b8679c73c2fef8b59b4f3444d4e156fb70aa56103378589610ba3565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b16815273ffffffffffffffffffffffffffffffffffffffff909216600483015260248201526044016020604051808303816000875af11580156103a7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103cb9190610b81565b50739f3b8679c73c2fef8b59b4f3444d4e156fb70aa5636fd3504e6103f08488610ba3565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e084901b168152600481019190915263ffffffff871660248201526044810186905273ffffffffffffffffffffffffffffffffffffffff891660648201526084016020604051808303816000875af1158015610475573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104999190610bca565b50505050505050565b6104bf737865fafc2db2093669d92c0f33aeef291086befd610707565b6104c88261076b565b6104d1816107e4565b6040517f57ecfd28000000000000000000000000000000000000000000000000000000008152737865fafc2db2093669d92c0f33aeef291086befd906357ecfd289061052390859085906004016109b8565b6020604051808303816000875af1158015610542573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105669190610b81565b6105b35760405163135e2cbf60e21b815260206004820152601260248201527f546f6b656e20436c61696d204661696c6564000000000000000000000000000060448201526064016102f3565b5050565b6040514790600090339083908381818185875af1925050503d80600081146105fb576040519150601f19603f3d011682016040523d82523d6000602084013e610600565b606091505b50509050806105b35760405163135e2cbf60e21b815260206004820152601460248201527f436f696e207769746864726177206661696c656400000000000000000000000060448201526064016102f3565b606061065d8361076b565b610666826107e4565b82826040516020016106799291906109b8565b604051602081830303815290604052905092915050565b806107045760405163135e2cbf60e21b815260206004820152602660248201527f616d6f756e74206f72206d696e74526563697069656e742063616e6e6f74206260448201527f65207a65726f000000000000000000000000000000000000000000000000000060648201526084016102f3565b50565b73ffffffffffffffffffffffffffffffffffffffff81166107045760405163135e2cbf60e21b815260206004820181905260248201527f436f6e747261637420616464726573732063616e6e6f74206265207a65726f2e60448201526064016102f3565b60f6815110156107045760405163135e2cbf60e21b815260206004820152603660248201527f6d65737361676542797465732e6c656e677468203c206d696e4d65737361676560448201527f4c656e67746820283834202b203332202b20313330290000000000000000000060648201526084016102f3565b604181516107f29190610bf4565b156107045760405163135e2cbf60e21b815260206004820152602560248201527f6174746573746174696f6e5369676e61747572652e6c656e677468202520363560448201527f20213d203000000000000000000000000000000000000000000000000000000060648201526084016102f3565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff811182821017156108a5576108a5610866565b604052919050565b600067ffffffffffffffff8211156108c7576108c7610866565b50601f01601f191660200190565b600082601f8301126108e657600080fd5b81356108f96108f4826108ad565b61087c565b81815284602083860101111561090e57600080fd5b816020850160208301376000918101602001919091529392505050565b60006020828403121561093d57600080fd5b813567ffffffffffffffff81111561095457600080fd5b610960848285016108d5565b949350505050565b60005b8381101561098357818101518382015260200161096b565b50506000910152565b600081518084526109a4816020860160208601610968565b601f01601f19169290920160200192915050565b6040815260006109cb604083018561098c565b82810360208401526109dd818561098c565b95945050505050565b600080600080600060a086880312156109fe57600080fd5b853573ffffffffffffffffffffffffffffffffffffffff81168114610a2257600080fd5b945060208601359350604086013563ffffffff81168114610a4257600080fd5b94979396509394606081013594506080013592915050565b60008060408385031215610a6d57600080fd5b823567ffffffffffffffff811115610a8457600080fd5b610a90858286016108d5565b925050602083013567ffffffffffffffff811115610aad57600080fd5b610ab9858286016108d5565b9150509250929050565b602081526000610ad6602083018461098c565b9392505050565b600082601f830112610aee57600080fd5b8151610afc6108f4826108ad565b818152846020838601011115610b1157600080fd5b610960826020830160208701610968565b60008060408385031215610b3557600080fd5b825167ffffffffffffffff811115610b4c57600080fd5b610b5885828601610add565b925050602083015167ffffffffffffffff811115610b7557600080fd5b610ab985828601610add565b600060208284031215610b9357600080fd5b81518015158114610ad657600080fd5b81810381811115610bc457634e487b7160e01b600052601160045260246000fd5b92915050565b600060208284031215610bdc57600080fd5b815167ffffffffffffffff81168114610ad657600080fd5b600082610c1157634e487b7160e01b600052601260045260246000fd5b50069056fea2646970667358221220b729ddd076fbcc0787ee4e5ab1c4f61f957ceeffbd5ab14d12735e247c18a0a464736f6c634300081a0033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "message";
            readonly type: "string";
        }];
        readonly name: "CCTPHelperError";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly name: "decodeClaimParams";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "messageBytes";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "attestationSignature";
            readonly type: "bytes";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "messageBytes";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "attestationSignature";
            readonly type: "bytes";
        }];
        readonly name: "encodeClaimParams";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "combined";
            readonly type: "bytes";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "messageTransmitter";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "tokenMessenger";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): CCTPHelperInterface;
    static connect(address: string, runner?: ContractRunner | null): CCTPHelper;
}
export {};
