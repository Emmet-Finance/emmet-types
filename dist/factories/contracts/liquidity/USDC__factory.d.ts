import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, BigNumberish, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type { USDC, USDCInterface } from "../../../contracts/liquidity/USDC";
type USDCConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class USDC__factory extends ContractFactory {
    constructor(...args: USDCConstructorParams);
    getDeployTransaction(decimals_: BigNumberish, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(decimals_: BigNumberish, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<USDC & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): USDC__factory;
    static readonly bytecode = "0x60806040523480156200001157600080fd5b5060405162000c6a38038062000c6a833981016040819052620000349162000232565b6040805180820182526004808252635553444360e01b602080840182905284518086019095529184529083015290600362000070838262000305565b5060046200007f828262000305565b505050620000a3336ec097ce7bc90715b34b9f1000000000620000bd60201b60201c565b6005805460ff191660ff92909216919091179055620003f9565b6001600160a01b038216620000ed5760405163ec442f0560e01b8152600060048201526024015b60405180910390fd5b620000fb60008383620000ff565b5050565b6001600160a01b0383166200012e578060026000828254620001229190620003d1565b90915550620001a29050565b6001600160a01b03831660009081526020819052604090205481811015620001835760405163391434e360e21b81526001600160a01b03851660048201526024810182905260448101839052606401620000e4565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b038216620001c057600280548290039055620001df565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516200022591815260200190565b60405180910390a3505050565b6000602082840312156200024557600080fd5b815160ff811681146200025757600080fd5b9392505050565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806200028957607f821691505b602082108103620002aa57634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111562000300576000816000526020600020601f850160051c81016020861015620002db5750805b601f850160051c820191505b81811015620002fc57828155600101620002e7565b5050505b505050565b81516001600160401b038111156200032157620003216200025e565b620003398162000332845462000274565b84620002b0565b602080601f831160018114620003715760008415620003585750858301515b600019600386901b1c1916600185901b178555620002fc565b600085815260208120601f198616915b82811015620003a25788860151825594840194600190910190840162000381565b5085821015620003c15787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b80820180821115620003f357634e487b7160e01b600052601160045260246000fd5b92915050565b61086180620004096000396000f3fe608060405234801561001057600080fd5b50600436106100be5760003560e01c806370a082311161007657806395d89b411161005b57806395d89b4114610172578063a9059cbb1461017a578063dd62ed3e1461018d57600080fd5b806370a082311461013e578063748b95b61461016757600080fd5b806318160ddd116100a757806318160ddd1461010457806323b872dd14610116578063313ce5671461012957600080fd5b806306fdde03146100c3578063095ea7b3146100e1575b600080fd5b6100cb6101c6565b6040516100d8919061065a565b60405180910390f35b6100f46100ef3660046106e3565b610258565b60405190151581526020016100d8565b6002545b6040519081526020016100d8565b6100f461012436600461070d565b610272565b60125b60405160ff90911681526020016100d8565b61010861014c366004610749565b6001600160a01b031660009081526020819052604090205490565b60055460ff1661012c565b6100cb610296565b6100f46101883660046106e3565b6102a5565b61010861019b36600461076b565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6060600380546101d59061079e565b80601f01602080910402602001604051908101604052809291908181526020018280546102019061079e565b801561024e5780601f106102235761010080835404028352916020019161024e565b820191906000526020600020905b81548152906001019060200180831161023157829003601f168201915b5050505050905090565b6000336102668185856102b3565b60019150505b92915050565b6000336102808582856102c5565b61028b85858561037f565b506001949350505050565b6060600480546101d59061079e565b60003361026681858561037f565b6102c08383836001610410565b505050565b6001600160a01b038381166000908152600160209081526040808320938616835292905220547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610379578181101561036a576040517ffb8f41b20000000000000000000000000000000000000000000000000000000081526001600160a01b038416600482015260248101829052604481018390526064015b60405180910390fd5b61037984848484036000610410565b50505050565b6001600160a01b0383166103c2576040517f96c6fd1e00000000000000000000000000000000000000000000000000000000815260006004820152602401610361565b6001600160a01b038216610405576040517fec442f0500000000000000000000000000000000000000000000000000000000815260006004820152602401610361565b6102c0838383610517565b6001600160a01b038416610453576040517fe602df0500000000000000000000000000000000000000000000000000000000815260006004820152602401610361565b6001600160a01b038316610496576040517f94280d6200000000000000000000000000000000000000000000000000000000815260006004820152602401610361565b6001600160a01b038085166000908152600160209081526040808320938716835292905220829055801561037957826001600160a01b0316846001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258460405161050991815260200190565b60405180910390a350505050565b6001600160a01b03831661054257806002600082825461053791906107f1565b909155506105cd9050565b6001600160a01b038316600090815260208190526040902054818110156105ae576040517fe450d38c0000000000000000000000000000000000000000000000000000000081526001600160a01b03851660048201526024810182905260448101839052606401610361565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b0382166105e957600280548290039055610608565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161064d91815260200190565b60405180910390a3505050565b60006020808352835180602085015260005b818110156106885785810183015185820160400152820161066c565b5060006040828601015260407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168501019250505092915050565b80356001600160a01b03811681146106de57600080fd5b919050565b600080604083850312156106f657600080fd5b6106ff836106c7565b946020939093013593505050565b60008060006060848603121561072257600080fd5b61072b846106c7565b9250610739602085016106c7565b9150604084013590509250925092565b60006020828403121561075b57600080fd5b610764826106c7565b9392505050565b6000806040838503121561077e57600080fd5b610787836106c7565b9150610795602084016106c7565b90509250929050565b600181811c908216806107b257607f821691505b6020821081036107eb577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b8082018082111561026c577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fdfea26469706673582212207864060146728369cacdcf2fbb39acf9a349ee2f3546c11c973f13a955eba47a64736f6c63430008180033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "decimals_";
            readonly type: "uint8";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "allowance";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "needed";
            readonly type: "uint256";
        }];
        readonly name: "ERC20InsufficientAllowance";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "balance";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "needed";
            readonly type: "uint256";
        }];
        readonly name: "ERC20InsufficientBalance";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "approver";
            readonly type: "address";
        }];
        readonly name: "ERC20InvalidApprover";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }];
        readonly name: "ERC20InvalidReceiver";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }];
        readonly name: "ERC20InvalidSender";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }];
        readonly name: "ERC20InvalidSpender";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "Approval";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "Transfer";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }];
        readonly name: "allowance";
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
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "approve";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "balanceOf";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "decimals";
        readonly outputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "decimls";
        readonly outputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "name";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "symbol";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "totalSupply";
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
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "transfer";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "transferFrom";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): USDCInterface;
    static connect(address: string, runner?: ContractRunner | null): USDC;
}
export {};
