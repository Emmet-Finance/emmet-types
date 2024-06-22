import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type { SignatureVerifier, SignatureVerifierInterface } from "../../../contracts/libs/SignatureVerifier";
type SignatureVerifierConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class SignatureVerifier__factory extends ContractFactory {
    constructor(...args: SignatureVerifierConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<SignatureVerifier & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): SignatureVerifier__factory;
    static readonly bytecode = "0x610e1d610039600b82828239805160001a607314602c57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361061007c5760003560e01c8063786568da1161005a578063786568da146100f457806380e16031146101075780638fc78ec71461012757600080fd5b806315706fdf1461008157806338417c1b146100be5780636e718888146100e1575b600080fd5b61009461008f3660046108d4565b610147565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b6100d16100cc3660046108d4565b61026a565b60405190151581526020016100b5565b6100d16100ef366004610911565b6103f1565b6100d1610102366004610911565b610472565b61011a6101153660046108d4565b610518565b6040516100b591906109f7565b61013a610135366004610a99565b610601565b6040516100b59190610b5b565b80516000908290602a036101f7576000808060025b602a8110156101ec5761017161010085610b8b565b935061019585828151811061018857610188610bf2565b016020015160f81c610639565b92506101b6856101a6836001610c08565b8151811061018857610188610bf2565b9150816101c4846010610b8b565b6101ce9190610c21565b6101d89085610c21565b93506101e5600282610c08565b905061015c565b509195945050505050565b60405162461bcd60e51b815260206004820152602860248201527f496e76616c696420737472696e67206c656e67746820666f7220616e2045564d60448201527f206164647265737300000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6000808290506002815110806102da57508060008151811061028e5761028e610bf2565b6020910101517fff00000000000000000000000000000000000000000000000000000000000000167f300000000000000000000000000000000000000000000000000000000000000014155b8061033f5750806001815181106102f3576102f3610bf2565b6020910101517fff00000000000000000000000000000000000000000000000000000000000000167f780000000000000000000000000000000000000000000000000000000000000014155b1561034d5750600092915050565b60025b81518110156103e757600082828151811061036d5761036d610bf2565b016020015160f81c905060006030821080159061038e575060398260ff1611155b806103ac575060418260ff16101580156103ac575060468260ff1611155b806103ca575060618260ff16101580156103ca575060668260ff1611155b9050806103dd5750600095945050505050565b5050600101610350565b5060019392505050565b6000806103fd84610518565b905046816020015167ffffffffffffffff161461045e5760208101516040517f8b0d417700000000000000000000000000000000000000000000000000000000815246600482015267ffffffffffffffff9091166024820152604401610261565b610469858585610472565b95945050505050565b81516020830120600090816104d4826040517f19457468657265756d205369676e6564204d6573736167653a0a3332000000006020820152603c8101829052600090605c01604051602081830303815290604052805190602001209050919050565b90508373ffffffffffffffffffffffffffffffffffffffff166104f78288610704565b73ffffffffffffffffffffffffffffffffffffffff16149695505050505050565b6105656040518060c00160405280600067ffffffffffffffff168152602001600067ffffffffffffffff168152602001600081526020016060815260200160608152602001606081525090565b60b0825110156105a1576040517f3eb4ab7200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600080600080600080878060200190518101906105be9190610c92565b6040805160c08101825267ffffffffffffffff9788168152969095166020870152938501929092526060840152608083015260a082015298975050505050505050565b606086868686868660405160200161061e96959493929190610d49565b60405160208183030381529060405290509695505050505050565b600060618260ff1610158015610653575060668260ff1611155b1561066c57610663605783610db5565b60ff1692915050565b60308260ff1610158015610684575060398260ff1611155b1561069457610663603083610db5565b60418260ff16101580156106ac575060468260ff1611155b156106bc57610663603783610db5565b60405162461bcd60e51b815260206004820152601c60248201527f4e6f6e2d6865782063686172616374657220696e2061646472657373000000006044820152606401610261565b60008060008061071385610783565b6040805160008152602081018083528b905260ff8316918101919091526060810184905260808101839052929550909350915060019060a0016020604051602081039080840390855afa15801561076e573d6000803e3d6000fd5b5050604051601f190151979650505050505050565b600080600083516041146107d95760405162461bcd60e51b815260206004820152601860248201527f496e76616c6964207369676e6174757265206c656e67746800000000000000006044820152606401610261565b50505060208101516040820151606083015160001a601b81101561080557610802601b82610dce565b90505b9193909250565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff8111828210171561084b5761084b61080c565b604052919050565b600067ffffffffffffffff82111561086d5761086d61080c565b50601f01601f191660200190565b600082601f83011261088c57600080fd5b81356020830160006108a56108a084610853565b610822565b90508281528583830111156108b957600080fd5b82826020830137600092810160200192909252509392505050565b6000602082840312156108e657600080fd5b813567ffffffffffffffff8111156108fd57600080fd5b6109098482850161087b565b949350505050565b60008060006060848603121561092657600080fd5b833567ffffffffffffffff81111561093d57600080fd5b6109498682870161087b565b935050602084013567ffffffffffffffff81111561096657600080fd5b6109728682870161087b565b925050604084013573ffffffffffffffffffffffffffffffffffffffff8116811461099c57600080fd5b809150509250925092565b60005b838110156109c25781810151838201526020016109aa565b50506000910152565b600081518084526109e38160208601602086016109a7565b601f01601f19169290920160200192915050565b6020815267ffffffffffffffff825116602082015267ffffffffffffffff6020830151166040820152604082015160608201526000606083015160c06080840152610a4560e08401826109cb565b90506080840151601f198483030160a0850152610a6282826109cb565b91505060a0840151601f198483030160c085015261046982826109cb565b67ffffffffffffffff81168114610a9657600080fd5b50565b60008060008060008060c08789031215610ab257600080fd5b8635610abd81610a80565b95506020870135610acd81610a80565b945060408701359350606087013567ffffffffffffffff811115610af057600080fd5b610afc89828a0161087b565b935050608087013567ffffffffffffffff811115610b1957600080fd5b610b2589828a0161087b565b92505060a087013567ffffffffffffffff811115610b4257600080fd5b610b4e89828a0161087b565b9150509295509295509295565b602081526000610b6e60208301846109cb565b9392505050565b634e487b7160e01b600052601160045260246000fd5b600073ffffffffffffffffffffffffffffffffffffffff821673ffffffffffffffffffffffffffffffffffffffff841673ffffffffffffffffffffffffffffffffffffffff8183021692508183048114821517610bea57610bea610b75565b505092915050565b634e487b7160e01b600052603260045260246000fd5b80820180821115610c1b57610c1b610b75565b92915050565b73ffffffffffffffffffffffffffffffffffffffff8181168382160190811115610c1b57610c1b610b75565b600082601f830112610c5e57600080fd5b8151610c6c6108a082610853565b818152846020838601011115610c8157600080fd5b6109098260208301602087016109a7565b60008060008060008060c08789031215610cab57600080fd5b8651610cb681610a80565b6020880151909650610cc781610a80565b60408801516060890151919650945067ffffffffffffffff811115610ceb57600080fd5b610cf789828a01610c4d565b935050608087015167ffffffffffffffff811115610d1457600080fd5b610d2089828a01610c4d565b92505060a087015167ffffffffffffffff811115610d3d57600080fd5b610b4e89828a01610c4d565b67ffffffffffffffff8716815267ffffffffffffffff8616602082015284604082015260c060608201526000610d8260c08301866109cb565b8281036080840152610d9481866109cb565b905082810360a0840152610da881856109cb565b9998505050505050505050565b60ff8281168282160390811115610c1b57610c1b610b75565b60ff8181168382160190811115610c1b57610c1b610b7556fea26469706673582212202bea9a31c760a01e1506a5913836b6672704eeb3bb1d5f76e8e9d6b7fb8c2fa464736f6c634300081a0033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "DataIsTooShort";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "thisChainId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint64";
            readonly name: "provided";
            readonly type: "uint64";
        }];
        readonly name: "WrongDestinationChain";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly name: "decodeCommonData";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint64";
                readonly name: "fromChainId";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "toChainId";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint256";
                readonly name: "amount";
                readonly type: "uint256";
            }, {
                readonly internalType: "string";
                readonly name: "fromToken";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "toToken";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "recipient";
                readonly type: "string";
            }];
            readonly internalType: "struct SignatureVerifier.DecodedData";
            readonly name: "decoded";
            readonly type: "tuple";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint64";
            readonly name: "fromChainId";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint64";
            readonly name: "toChainId";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "string";
            readonly name: "fromToken";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "toToken";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "recipient";
            readonly type: "string";
        }];
        readonly name: "encodeCommonData";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "encoded";
            readonly type: "bytes";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "str";
            readonly type: "string";
        }];
        readonly name: "isHexString";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "addr_";
            readonly type: "string";
        }];
        readonly name: "stringToAddress";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "addr";
            readonly type: "address";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "signature";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }, {
            readonly internalType: "address";
            readonly name: "signer";
            readonly type: "address";
        }];
        readonly name: "verifyLocalSignature";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "signature";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }, {
            readonly internalType: "address";
            readonly name: "signer";
            readonly type: "address";
        }];
        readonly name: "verifySignature";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "result";
            readonly type: "bool";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }];
    static createInterface(): SignatureVerifierInterface;
    static connect(address: string, runner?: ContractRunner | null): SignatureVerifier;
}
export {};
