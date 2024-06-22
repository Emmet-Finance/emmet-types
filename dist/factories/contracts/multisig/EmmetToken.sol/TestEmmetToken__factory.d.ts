import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type { TestEmmetToken, TestEmmetTokenInterface } from "../../../../contracts/multisig/EmmetToken.sol/TestEmmetToken";
type TestEmmetTokenConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class TestEmmetToken__factory extends ContractFactory {
    constructor(...args: TestEmmetTokenConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<TestEmmetToken & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): TestEmmetToken__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b506040518060400160405280601381526020017f456d6d65742046696e616e636520546f6b656e0000000000000000000000000081525060405180604001604052806005815260200164115353515560da1b815250816003908161007491906102ad565b50600461008182826102ad565b5050506100a0336b033b2e3c9fd0803ce80000006100a560201b60201c565b610392565b6001600160a01b0382166100d45760405163ec442f0560e01b8152600060048201526024015b60405180910390fd5b6100e0600083836100e4565b5050565b6001600160a01b03831661010f578060026000828254610104919061036b565b909155506101819050565b6001600160a01b038316600090815260208190526040902054818110156101625760405163391434e360e21b81526001600160a01b038516600482015260248101829052604481018390526064016100cb565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b03821661019d576002805482900390556101bc565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161020191815260200190565b60405180910390a3505050565b634e487b7160e01b600052604160045260246000fd5b600181811c9082168061023857607f821691505b60208210810361025857634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156102a857806000526020600020601f840160051c810160208510156102855750805b601f840160051c820191505b818110156102a55760008155600101610291565b50505b505050565b81516001600160401b038111156102c6576102c661020e565b6102da816102d48454610224565b8461025e565b6020601f82116001811461030e57600083156102f65750848201515b600019600385901b1c1916600184901b1784556102a5565b600084815260208120601f198516915b8281101561033e578785015182556020948501946001909201910161031e565b508482101561035c5786840151600019600387901b60f8161c191681555b50505050600190811b01905550565b8082018082111561038c57634e487b7160e01b600052601160045260246000fd5b92915050565b610835806103a16000396000f3fe608060405234801561001057600080fd5b50600436106100a35760003560e01c8063313ce5671161007657806395d89b411161005b57806395d89b4114610146578063a9059cbb1461014e578063dd62ed3e1461016157600080fd5b8063313ce5671461010e57806370a082311461011d57600080fd5b806306fdde03146100a8578063095ea7b3146100c657806318160ddd146100e957806323b872dd146100fb575b600080fd5b6100b061019a565b6040516100bd919061062e565b60405180910390f35b6100d96100d43660046106b6565b61022c565b60405190151581526020016100bd565b6002545b6040519081526020016100bd565b6100d96101093660046106e0565b610246565b604051601281526020016100bd565b6100ed61012b36600461071d565b6001600160a01b031660009081526020819052604090205490565b6100b061026a565b6100d961015c3660046106b6565b610279565b6100ed61016f36600461073f565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6060600380546101a990610772565b80601f01602080910402602001604051908101604052809291908181526020018280546101d590610772565b80156102225780601f106101f757610100808354040283529160200191610222565b820191906000526020600020905b81548152906001019060200180831161020557829003601f168201915b5050505050905090565b60003361023a818585610287565b60019150505b92915050565b600033610254858285610299565b61025f858585610353565b506001949350505050565b6060600480546101a990610772565b60003361023a818585610353565b61029483838360016103e4565b505050565b6001600160a01b038381166000908152600160209081526040808320938616835292905220547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff811461034d578181101561033e576040517ffb8f41b20000000000000000000000000000000000000000000000000000000081526001600160a01b038416600482015260248101829052604481018390526064015b60405180910390fd5b61034d848484840360006103e4565b50505050565b6001600160a01b038316610396576040517f96c6fd1e00000000000000000000000000000000000000000000000000000000815260006004820152602401610335565b6001600160a01b0382166103d9576040517fec442f0500000000000000000000000000000000000000000000000000000000815260006004820152602401610335565b6102948383836104eb565b6001600160a01b038416610427576040517fe602df0500000000000000000000000000000000000000000000000000000000815260006004820152602401610335565b6001600160a01b03831661046a576040517f94280d6200000000000000000000000000000000000000000000000000000000815260006004820152602401610335565b6001600160a01b038085166000908152600160209081526040808320938716835292905220829055801561034d57826001600160a01b0316846001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040516104dd91815260200190565b60405180910390a350505050565b6001600160a01b03831661051657806002600082825461050b91906107c5565b909155506105a19050565b6001600160a01b03831660009081526020819052604090205481811015610582576040517fe450d38c0000000000000000000000000000000000000000000000000000000081526001600160a01b03851660048201526024810182905260448101839052606401610335565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b0382166105bd576002805482900390556105dc565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161062191815260200190565b60405180910390a3505050565b602081526000825180602084015260005b8181101561065c576020818601810151604086840101520161063f565b5060006040828501015260407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011684010191505092915050565b80356001600160a01b03811681146106b157600080fd5b919050565b600080604083850312156106c957600080fd5b6106d28361069a565b946020939093013593505050565b6000806000606084860312156106f557600080fd5b6106fe8461069a565b925061070c6020850161069a565b929592945050506040919091013590565b60006020828403121561072f57600080fd5b6107388261069a565b9392505050565b6000806040838503121561075257600080fd5b61075b8361069a565b91506107696020840161069a565b90509250929050565b600181811c9082168061078657607f821691505b6020821081036107bf577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b80820180821115610240577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fdfea26469706673582212202d1222aea2809fafae153144f0d5b25bf7fd637dd6968e6dbf2de2c66ea1ce4a64736f6c634300081a0033";
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
    static createInterface(): TestEmmetTokenInterface;
    static connect(address: string, runner?: ContractRunner | null): TestEmmetToken;
}
export {};
