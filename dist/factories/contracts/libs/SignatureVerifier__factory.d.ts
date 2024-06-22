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
    static readonly bytecode = "0x610c3e61003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361061006c5760003560e01c806315706fdf1461007157806338417c1b146100a15780636e718888146100c4578063786568da146100d757806380e16031146100ea5780638fc78ec71461010a575b600080fd5b61008461007f36600461076b565b61012a565b6040516001600160a01b0390911681526020015b60405180910390f35b6100b46100af36600461076b565b610238565b6040519015158152602001610098565b6100b46100d23660046107a7565b6102de565b6100b46100e53660046107a7565b610344565b6100fd6100f836600461076b565b6103d0565b604051610098919061087a565b61011d610118366004610915565b61049d565b60405161009891906109ca565b80516000908290602a036101da576000808060025b602a8110156101cf57610154610100856109fa565b935061017885828151811061016b5761016b610a2c565b016020015160f81c6104d5565b925061019985610189836001610a42565b8151811061016b5761016b610a2c565b9150816101a78460106109fa565b6101b19190610a5b565b6101bb9085610a5b565b93506101c8600282610a42565b905061013f565b509195945050505050565b60405162461bcd60e51b815260206004820152602860248201527f496e76616c696420737472696e67206c656e67746820666f7220616e2045564d604482015267206164647265737360c01b60648201526084015b60405180910390fd5b600081815b81518110156102d457600082828151811061025a5761025a610a2c565b016020015160f81c905060006030821080159061027b575060398260ff1611155b80610299575060418260ff1610158015610299575060468260ff1611155b806102b7575060618260ff16101580156102b7575060668260ff1611155b9050806102ca5750600095945050505050565b505060010161023d565b5060019392505050565b6000806102ea846103d0565b90504681602001516001600160401b031614610330576020810151604051638b0d417760e01b81524660048201526001600160401b03909116602482015260440161022f565b61033b858585610344565b95945050505050565b81516020830120600090816103a6826040517f19457468657265756d205369676e6564204d6573736167653a0a3332000000006020820152603c8101829052600090605c01604051602081830303815290604052805190602001209050919050565b9050836001600160a01b03166103bc82886105a0565b6001600160a01b0316149695505050505050565b61041b6040518060c0016040528060006001600160401b0316815260200160006001600160401b03168152602001600081526020016060815260200160608152602001606081525090565b60b08251101561043e57604051631f5a55b960e11b815260040160405180910390fd5b6000806000806000808780602001905181019061045b9190610ac7565b6040805160c0810182526001600160401b039788168152969095166020870152938501929092526060840152608083015260a082015298975050505050505050565b60608686868686866040516020016104ba96959493929190610b71565b60405160208183030381529060405290509695505050505050565b600060618260ff16101580156104ef575060668260ff1611155b15610508576104ff605783610bd6565b60ff1692915050565b60308260ff1610158015610520575060398260ff1611155b15610530576104ff603083610bd6565b60418260ff1610158015610548575060468260ff1611155b15610558576104ff603783610bd6565b60405162461bcd60e51b815260206004820152601c60248201527f4e6f6e2d6865782063686172616374657220696e206164647265737300000000604482015260640161022f565b6000806000806105af8561061f565b6040805160008152602081018083528b905260ff8316918101919091526060810184905260808101839052929550909350915060019060a0016020604051602081039080840390855afa15801561060a573d6000803e3d6000fd5b5050604051601f190151979650505050505050565b600080600083516041146106755760405162461bcd60e51b815260206004820152601860248201527f496e76616c6964207369676e6174757265206c656e6774680000000000000000604482015260640161022f565b50505060208101516040820151606083015160001a601b8110156106a15761069e601b82610bef565b90505b9193909250565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b03811182821017156106e6576106e66106a8565b604052919050565b60006001600160401b03821115610707576107076106a8565b50601f01601f191660200190565b600082601f83011261072657600080fd5b8135610739610734826106ee565b6106be565b81815284602083860101111561074e57600080fd5b816020850160208301376000918101602001919091529392505050565b60006020828403121561077d57600080fd5b81356001600160401b0381111561079357600080fd5b61079f84828501610715565b949350505050565b6000806000606084860312156107bc57600080fd5b83356001600160401b03808211156107d357600080fd5b6107df87838801610715565b945060208601359150808211156107f557600080fd5b5061080286828701610715565b92505060408401356001600160a01b038116811461081f57600080fd5b809150509250925092565b60005b8381101561084557818101518382015260200161082d565b50506000910152565b6000815180845261086681602086016020860161082a565b601f01601f19169290920160200192915050565b6020815260006001600160401b038084511660208401528060208501511660408401525060408301516060830152606083015160c060808401526108c160e084018261084e565b90506080840151601f19808584030160a08601526108df838361084e565b925060a08601519150808584030160c08601525061033b828261084e565b6001600160401b038116811461091257600080fd5b50565b60008060008060008060c0878903121561092e57600080fd5b8635610939816108fd565b95506020870135610949816108fd565b94506040870135935060608701356001600160401b038082111561096c57600080fd5b6109788a838b01610715565b9450608089013591508082111561098e57600080fd5b61099a8a838b01610715565b935060a08901359150808211156109b057600080fd5b506109bd89828a01610715565b9150509295509295509295565b6020815260006109dd602083018461084e565b9392505050565b634e487b7160e01b600052601160045260246000fd5b6001600160a01b03828116828216818102831692918115828504821417610a2357610a236109e4565b50505092915050565b634e487b7160e01b600052603260045260246000fd5b80820180821115610a5557610a556109e4565b92915050565b6001600160a01b03818116838216019080821115610a7b57610a7b6109e4565b5092915050565b600082601f830112610a9357600080fd5b8151610aa1610734826106ee565b818152846020838601011115610ab657600080fd5b61079f82602083016020870161082a565b60008060008060008060c08789031215610ae057600080fd5b8651610aeb816108fd565b6020880151909650610afc816108fd565b6040880151606089015191965094506001600160401b0380821115610b2057600080fd5b610b2c8a838b01610a82565b94506080890151915080821115610b4257600080fd5b610b4e8a838b01610a82565b935060a0890151915080821115610b6457600080fd5b506109bd89828a01610a82565b60006001600160401b03808916835280881660208401525085604083015260c06060830152610ba360c083018661084e565b8281036080840152610bb5818661084e565b905082810360a0840152610bc9818561084e565b9998505050505050505050565b60ff8281168282160390811115610a5557610a556109e4565b60ff8181168382160190811115610a5557610a556109e456fea2646970667358221220d5545478297f3013e9d1903c8b2b4c5aa5b23ae2c2790022017d2ff794e8692664736f6c63430008180033";
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
