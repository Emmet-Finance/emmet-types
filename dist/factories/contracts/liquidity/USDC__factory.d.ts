import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type { USDC, USDCInterface } from "../../../contracts/liquidity/USDC";
type USDCConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class USDC__factory extends ContractFactory {
    constructor(...args: USDCConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<USDC & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): USDC__factory;
    static readonly bytecode = "0x60806040523480156200001157600080fd5b50604051806040016040528060068152602001655553442f2f4360d01b815250604051806040016040528060048152602001635553444360e01b81525081600390816200005f9190620002b4565b5060046200006e8282620002b4565b50505062000092336ec097ce7bc90715b34b9f10000000006200009860201b60201c565b620003a8565b6001600160a01b038216620000c85760405163ec442f0560e01b8152600060048201526024015b60405180910390fd5b620000d660008383620000da565b5050565b6001600160a01b03831662000109578060026000828254620000fd919062000380565b909155506200017d9050565b6001600160a01b038316600090815260208190526040902054818110156200015e5760405163391434e360e21b81526001600160a01b03851660048201526024810182905260448101839052606401620000bf565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b0382166200019b57600280548290039055620001ba565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516200020091815260200190565b60405180910390a3505050565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806200023857607f821691505b6020821081036200025957634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620002af576000816000526020600020601f850160051c810160208610156200028a5750805b601f850160051c820191505b81811015620002ab5782815560010162000296565b5050505b505050565b81516001600160401b03811115620002d057620002d06200020d565b620002e881620002e1845462000223565b846200025f565b602080601f831160018114620003205760008415620003075750858301515b600019600386901b1c1916600185901b178555620002ab565b600085815260208120601f198616915b82811015620003515788860151825594840194600190910190840162000330565b5085821015620003705787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b80820180821115620003a257634e487b7160e01b600052601160045260246000fd5b92915050565b61083580620003b86000396000f3fe608060405234801561001057600080fd5b50600436106100a35760003560e01c8063313ce5671161007657806395d89b411161005b57806395d89b4114610146578063a9059cbb1461014e578063dd62ed3e1461016157600080fd5b8063313ce5671461010e57806370a082311461011d57600080fd5b806306fdde03146100a8578063095ea7b3146100c657806318160ddd146100e957806323b872dd146100fb575b600080fd5b6100b061019a565b6040516100bd919061062e565b60405180910390f35b6100d96100d43660046106b7565b61022c565b60405190151581526020016100bd565b6002545b6040519081526020016100bd565b6100d96101093660046106e1565b610246565b604051601281526020016100bd565b6100ed61012b36600461071d565b6001600160a01b031660009081526020819052604090205490565b6100b061026a565b6100d961015c3660046106b7565b610279565b6100ed61016f36600461073f565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6060600380546101a990610772565b80601f01602080910402602001604051908101604052809291908181526020018280546101d590610772565b80156102225780601f106101f757610100808354040283529160200191610222565b820191906000526020600020905b81548152906001019060200180831161020557829003601f168201915b5050505050905090565b60003361023a818585610287565b60019150505b92915050565b600033610254858285610299565b61025f858585610353565b506001949350505050565b6060600480546101a990610772565b60003361023a818585610353565b61029483838360016103e4565b505050565b6001600160a01b038381166000908152600160209081526040808320938616835292905220547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff811461034d578181101561033e576040517ffb8f41b20000000000000000000000000000000000000000000000000000000081526001600160a01b038416600482015260248101829052604481018390526064015b60405180910390fd5b61034d848484840360006103e4565b50505050565b6001600160a01b038316610396576040517f96c6fd1e00000000000000000000000000000000000000000000000000000000815260006004820152602401610335565b6001600160a01b0382166103d9576040517fec442f0500000000000000000000000000000000000000000000000000000000815260006004820152602401610335565b6102948383836104eb565b6001600160a01b038416610427576040517fe602df0500000000000000000000000000000000000000000000000000000000815260006004820152602401610335565b6001600160a01b03831661046a576040517f94280d6200000000000000000000000000000000000000000000000000000000815260006004820152602401610335565b6001600160a01b038085166000908152600160209081526040808320938716835292905220829055801561034d57826001600160a01b0316846001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040516104dd91815260200190565b60405180910390a350505050565b6001600160a01b03831661051657806002600082825461050b91906107c5565b909155506105a19050565b6001600160a01b03831660009081526020819052604090205481811015610582576040517fe450d38c0000000000000000000000000000000000000000000000000000000081526001600160a01b03851660048201526024810182905260448101839052606401610335565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b0382166105bd576002805482900390556105dc565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161062191815260200190565b60405180910390a3505050565b60006020808352835180602085015260005b8181101561065c57858101830151858201604001528201610640565b5060006040828601015260407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168501019250505092915050565b80356001600160a01b03811681146106b257600080fd5b919050565b600080604083850312156106ca57600080fd5b6106d38361069b565b946020939093013593505050565b6000806000606084860312156106f657600080fd5b6106ff8461069b565b925061070d6020850161069b565b9150604084013590509250925092565b60006020828403121561072f57600080fd5b6107388261069b565b9392505050565b6000806040838503121561075257600080fd5b61075b8361069b565b91506107696020840161069b565b90509250929050565b600181811c9082168061078657607f821691505b6020821081036107bf577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b80820180821115610240577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fdfea264697066735822122005b310534393c2763e1c3934c2a8106b7387a16040abd89420f9016ebbf3d3f264736f6c63430008180033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
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
