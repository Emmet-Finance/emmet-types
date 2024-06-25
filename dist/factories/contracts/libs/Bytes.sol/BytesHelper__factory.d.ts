import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type { BytesHelper, BytesHelperInterface } from "../../../../contracts/libs/Bytes.sol/BytesHelper";
type BytesHelperConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class BytesHelper__factory extends ContractFactory {
    constructor(...args: BytesHelperConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<BytesHelper & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): BytesHelper__factory;
    static readonly bytecode = "0x610a4961003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100565760003560e01c80630b2fde251461005b57806345fb6634146100845780638f9e2e4e14610097578063d46a57d5146100aa575b600080fd5b61006e610069366004610786565b6100d8565b60405161007b91906107cc565b60405180910390f35b61006e610092366004610815565b61013a565b61006e6100a5366004610864565b610189565b6100bd6100b83660046108ad565b6102a3565b6040805182518152602092830151928101929092520161007b565b604080518082019091528281526020810182905260609060006100fa85610581565b9050600061010b8360200151610581565b9050818160405160200161012092919061095e565b604051602081830303815290604052935050505092915050565b6060600061014b8360000151610581565b9050600061015c8460200151610581565b9050818160405160200161017192919061095e565b60405160208183030381529060405292505050919050565b606060005b6010811080156101d457508281601081106101ab576101ab61098d565b1a60f81b7fff000000000000000000000000000000000000000000000000000000000000001615155b156101e9576101e2816109b9565b905061018e565b60008167ffffffffffffffff811115610204576102046107ff565b6040519080825280601f01601f19166020018201604052801561022e576020820181803683370190505b50905060005b8281101561029b5784816010811061024e5761024e61098d565b1a60f81b8282815181106102645761026461098d565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600101610234565b509392505050565b6040805180820190915260008082526020820152815182906002811180156103245750816000815181106102d9576102d961098d565b6020910101517fff00000000000000000000000000000000000000000000000000000000000000167f3000000000000000000000000000000000000000000000000000000000000000145b801561038957508160018151811061033e5761033e61098d565b6020910101517fff00000000000000000000000000000000000000000000000000000000000000167f7800000000000000000000000000000000000000000000000000000000000000145b156103aa5761039a84600283610693565b91506103a76002826109d3565b90505b60408111156103ec576040517f072275ef0000000000000000000000000000000000000000000000000000000081526004810182905260240160405180910390fd5b6020811161041c5760006103ff856109ec565b6040805180820190915290815260006020820152935061057a9050565b60408051602080825281830190925260009160208201818036833750506040805160208082528183019092529293506000929150808201818036833701905050905060005b60208110156104d05784818151811061047c5761047c61098d565b602001015160f81c60f81b8382815181106104995761049961098d565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600101610461565b5060205b845181101561054f578481815181106104ef576104ef61098d565b602001015160f81c60f81b8260208361050891906109d3565b815181106105185761051861098d565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053506001016104d4565b50604051806040016040528083610565906109ec565b8152602001610573836109ec565b9052945050505b5050919050565b606060005b6020811080156105cc57508281602081106105a3576105a361098d565b1a60f81b7fff000000000000000000000000000000000000000000000000000000000000001615155b156105e1576105da816109b9565b9050610586565b60008167ffffffffffffffff8111156105fc576105fc6107ff565b6040519080825280601f01601f191660200182016040528015610626576020820181803683370190505b50905060005b8281101561029b578481602081106106465761064661098d565b1a60f81b82828151811061065c5761065c61098d565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535060010161062c565b60608360006106a285856109d3565b67ffffffffffffffff8111156106ba576106ba6107ff565b6040519080825280601f01601f1916602001820160405280156106e4576020820181803683370190505b509050845b8481101561077c578281815181106107035761070361098d565b01602001517fff00000000000000000000000000000000000000000000000000000000000000168261073588846109d3565b815181106107455761074561098d565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053506001016106e9565b5095945050505050565b6000806040838503121561079957600080fd5b50508035926020909101359150565b60005b838110156107c35781810151838201526020016107ab565b50506000910152565b60208152600082518060208401526107eb8160408501602087016107a8565b601f01601f19169190910160400192915050565b634e487b7160e01b600052604160045260246000fd5b60006040828403121561082757600080fd5b6040516040810181811067ffffffffffffffff8211171561084a5761084a6107ff565b604052823581526020928301359281019290925250919050565b60006020828403121561087657600080fd5b81357fffffffffffffffffffffffffffffffff00000000000000000000000000000000811681146108a657600080fd5b9392505050565b6000602082840312156108bf57600080fd5b813567ffffffffffffffff808211156108d757600080fd5b818401915084601f8301126108eb57600080fd5b8135818111156108fd576108fd6107ff565b604051601f8201601f19908116603f01168101908382118183101715610925576109256107ff565b8160405282815287602084870101111561093e57600080fd5b826020860160208301376000928101602001929092525095945050505050565b600083516109708184602088016107a8565b8351908301906109848183602088016107a8565b01949350505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600060001982036109cc576109cc6109a3565b5060010190565b818103818111156109e6576109e66109a3565b92915050565b80516020808301519190811015610a0d576000198160200360031b1b821691505b5091905056fea26469706673582212203aa6fa2814e8f63a062bfa673fa32f499dadd1b49f4566cf06017bcc4f6c93d364736f6c63430008180033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "length";
            readonly type: "uint256";
        }];
        readonly name: "StringIsTooLong";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes16";
            readonly name: "encoded";
            readonly type: "bytes16";
        }];
        readonly name: "bytes16ToString";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "decoded";
            readonly type: "string";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "one";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes32";
            readonly name: "two";
            readonly type: "bytes32";
        }];
        readonly name: "decode2xBytes32";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "decoded";
            readonly type: "string";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bytes32";
                readonly name: "part1";
                readonly type: "bytes32";
            }, {
                readonly internalType: "bytes32";
                readonly name: "part2";
                readonly type: "bytes32";
            }];
            readonly internalType: "struct BytesHelper.Data";
            readonly name: "data";
            readonly type: "tuple";
        }];
        readonly name: "decode64Bytes";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "decoded";
            readonly type: "string";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "str";
            readonly type: "string";
        }];
        readonly name: "encode64String";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bytes32";
                readonly name: "part1";
                readonly type: "bytes32";
            }, {
                readonly internalType: "bytes32";
                readonly name: "part2";
                readonly type: "bytes32";
            }];
            readonly internalType: "struct BytesHelper.Data";
            readonly name: "encoded";
            readonly type: "tuple";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }];
    static createInterface(): BytesHelperInterface;
    static connect(address: string, runner?: ContractRunner | null): BytesHelper;
}
export {};
