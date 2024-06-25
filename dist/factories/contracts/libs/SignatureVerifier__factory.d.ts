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
    static readonly bytecode = "0x610dd261003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361061007c5760003560e01c8063786568da1161005a578063786568da146100f457806380e16031146101075780638fc78ec71461012757600080fd5b806315706fdf1461008157806338417c1b146100be5780636e718888146100e1575b600080fd5b61009461008f3660046108d1565b610147565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b6100d16100cc3660046108d1565b61026a565b60405190151581526020016100b5565b6100d16100ef36600461090e565b6103f1565b6100d161010236600461090e565b610472565b61011a6101153660046108d1565b610518565b6040516100b591906109ef565b61013a610135366004610a8c565b610601565b6040516100b59190610b42565b80516000908290602a036101f7576000808060025b602a8110156101ec5761017161010085610b72565b935061019585828151811061018857610188610bb1565b016020015160f81c610639565b92506101b6856101a6836001610bc7565b8151811061018857610188610bb1565b9150816101c4846010610b72565b6101ce9190610be0565b6101d89085610be0565b93506101e5600282610bc7565b905061015c565b509195945050505050565b60405162461bcd60e51b815260206004820152602860248201527f496e76616c696420737472696e67206c656e67746820666f7220616e2045564d60448201527f206164647265737300000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6000808290506002815110806102da57508060008151811061028e5761028e610bb1565b6020910101517fff00000000000000000000000000000000000000000000000000000000000000167f300000000000000000000000000000000000000000000000000000000000000014155b8061033f5750806001815181106102f3576102f3610bb1565b6020910101517fff00000000000000000000000000000000000000000000000000000000000000167f780000000000000000000000000000000000000000000000000000000000000014155b1561034d5750600092915050565b60025b81518110156103e757600082828151811061036d5761036d610bb1565b016020015160f81c905060006030821080159061038e575060398260ff1611155b806103ac575060418260ff16101580156103ac575060468260ff1611155b806103ca575060618260ff16101580156103ca575060668260ff1611155b9050806103dd5750600095945050505050565b5050600101610350565b5060019392505050565b6000806103fd84610518565b905046816020015167ffffffffffffffff161461045e5760208101516040517f8b0d417700000000000000000000000000000000000000000000000000000000815246600482015267ffffffffffffffff9091166024820152604401610261565b610469858585610472565b95945050505050565b81516020830120600090816104d4826040517f19457468657265756d205369676e6564204d6573736167653a0a3332000000006020820152603c8101829052600090605c01604051602081830303815290604052805190602001209050919050565b90508373ffffffffffffffffffffffffffffffffffffffff166104f78288610704565b73ffffffffffffffffffffffffffffffffffffffff16149695505050505050565b6105656040518060c00160405280600067ffffffffffffffff168152602001600067ffffffffffffffff168152602001600081526020016060815260200160608152602001606081525090565b60b0825110156105a1576040517f3eb4ab7200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600080600080600080878060200190518101906105be9190610c59565b6040805160c08101825267ffffffffffffffff9788168152969095166020870152938501929092526060840152608083015260a082015298975050505050505050565b606086868686868660405160200161061e96959493929190610d04565b60405160208183030381529060405290509695505050505050565b600060618260ff1610158015610653575060668260ff1611155b1561066c57610663605783610d6a565b60ff1692915050565b60308260ff1610158015610684575060398260ff1611155b1561069457610663603083610d6a565b60418260ff16101580156106ac575060468260ff1611155b156106bc57610663603783610d6a565b60405162461bcd60e51b815260206004820152601c60248201527f4e6f6e2d6865782063686172616374657220696e2061646472657373000000006044820152606401610261565b60008060008061071385610783565b6040805160008152602081018083528b905260ff8316918101919091526060810184905260808101839052929550909350915060019060a0016020604051602081039080840390855afa15801561076e573d6000803e3d6000fd5b5050604051601f190151979650505050505050565b600080600083516041146107d95760405162461bcd60e51b815260206004820152601860248201527f496e76616c6964207369676e6174757265206c656e67746800000000000000006044820152606401610261565b50505060208101516040820151606083015160001a601b81101561080557610802601b82610d83565b90505b9193909250565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff8111828210171561084b5761084b61080c565b604052919050565b600067ffffffffffffffff82111561086d5761086d61080c565b50601f01601f191660200190565b600082601f83011261088c57600080fd5b813561089f61089a82610853565b610822565b8181528460208386010111156108b457600080fd5b816020850160208301376000918101602001919091529392505050565b6000602082840312156108e357600080fd5b813567ffffffffffffffff8111156108fa57600080fd5b6109068482850161087b565b949350505050565b60008060006060848603121561092357600080fd5b833567ffffffffffffffff8082111561093b57600080fd5b6109478783880161087b565b9450602086013591508082111561095d57600080fd5b5061096a8682870161087b565b925050604084013573ffffffffffffffffffffffffffffffffffffffff8116811461099457600080fd5b809150509250925092565b60005b838110156109ba5781810151838201526020016109a2565b50506000910152565b600081518084526109db81602086016020860161099f565b601f01601f19169290920160200192915050565b60208152600067ffffffffffffffff8084511660208401528060208501511660408401525060408301516060830152606083015160c06080840152610a3760e08401826109c3565b90506080840151601f19808584030160a0860152610a5583836109c3565b925060a08601519150808584030160c08601525061046982826109c3565b67ffffffffffffffff81168114610a8957600080fd5b50565b60008060008060008060c08789031215610aa557600080fd5b8635610ab081610a73565b95506020870135610ac081610a73565b945060408701359350606087013567ffffffffffffffff80821115610ae457600080fd5b610af08a838b0161087b565b94506080890135915080821115610b0657600080fd5b610b128a838b0161087b565b935060a0890135915080821115610b2857600080fd5b50610b3589828a0161087b565b9150509295509295509295565b602081526000610b5560208301846109c3565b9392505050565b634e487b7160e01b600052601160045260246000fd5b73ffffffffffffffffffffffffffffffffffffffff828116828216818102831692918115828504821417610ba857610ba8610b5c565b50505092915050565b634e487b7160e01b600052603260045260246000fd5b80820180821115610bda57610bda610b5c565b92915050565b73ffffffffffffffffffffffffffffffffffffffff818116838216019080821115610c0d57610c0d610b5c565b5092915050565b600082601f830112610c2557600080fd5b8151610c3361089a82610853565b818152846020838601011115610c4857600080fd5b61090682602083016020870161099f565b60008060008060008060c08789031215610c7257600080fd5b8651610c7d81610a73565b6020880151909650610c8e81610a73565b60408801516060890151919650945067ffffffffffffffff80821115610cb357600080fd5b610cbf8a838b01610c14565b94506080890151915080821115610cd557600080fd5b610ce18a838b01610c14565b935060a0890151915080821115610cf757600080fd5b50610b3589828a01610c14565b600067ffffffffffffffff808916835280881660208401525085604083015260c06060830152610d3760c08301866109c3565b8281036080840152610d4981866109c3565b905082810360a0840152610d5d81856109c3565b9998505050505050505050565b60ff8281168282160390811115610bda57610bda610b5c565b60ff8181168382160190811115610bda57610bda610b5c56fea264697066735822122086ca3f258cffc5c7aa9b0a74308b1f695d7f1293b352ebe3765cf40cb1bd6ac764736f6c63430008180033";
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
