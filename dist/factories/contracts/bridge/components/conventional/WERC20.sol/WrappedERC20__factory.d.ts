import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, BigNumberish, AddressLike, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../../../common";
import type { WrappedERC20, WrappedERC20Interface } from "../../../../../../contracts/bridge/components/conventional/WERC20.sol/WrappedERC20";
type WrappedERC20ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class WrappedERC20__factory extends ContractFactory {
    constructor(...args: WrappedERC20ConstructorParams);
    getDeployTransaction(name: string, symbol: string, bridge: AddressLike, decimals_: BigNumberish, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(name: string, symbol: string, bridge: AddressLike, decimals_: BigNumberish, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<WrappedERC20 & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): WrappedERC20__factory;
    static readonly bytecode = "0x60806040526008805463ffffffff191663390d68891790553480156200002457600080fd5b50604051620015e8380380620015e8833981016040819052620000479162000284565b83836003620000578382620003bb565b506004620000668282620003bb565b50506006805460ff191690555060016007556200008560003362000109565b50620000b27fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c217753362000109565b50620000df7f52ba824bfabc2bcfcdf7f0edbb486ebb05e1836c90e78047efeb949990f72e5f8362000109565b506008805460ff9092166401000000000260ff60201b199092169190911790555062000487915050565b60008281526005602090815260408083206001600160a01b038516845290915281205460ff16620001b25760008381526005602090815260408083206001600160a01b03861684529091529020805460ff19166001179055620001693390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a4506001620001b6565b5060005b92915050565b634e487b7160e01b600052604160045260246000fd5b600082601f830112620001e457600080fd5b81516001600160401b0380821115620002015762000201620001bc565b604051601f8301601f19908116603f011681019082821181831017156200022c576200022c620001bc565b81604052838152602092508660208588010111156200024a57600080fd5b600091505b838210156200026e57858201830151818301840152908201906200024f565b6000602085830101528094505050505092915050565b600080600080608085870312156200029b57600080fd5b84516001600160401b0380821115620002b357600080fd5b620002c188838901620001d2565b95506020870151915080821115620002d857600080fd5b50620002e787828801620001d2565b604087015190945090506001600160a01b03811681146200030757600080fd5b606086015190925060ff811681146200031f57600080fd5b939692955090935050565b600181811c908216806200033f57607f821691505b6020821081036200036057634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620003b6576000816000526020600020601f850160051c81016020861015620003915750805b601f850160051c820191505b81811015620003b2578281556001016200039d565b5050505b505050565b81516001600160401b03811115620003d757620003d7620001bc565b620003ef81620003e884546200032a565b8462000366565b602080601f8311600181146200042757600084156200040e5750858301515b600019600386901b1c1916600185901b178555620003b2565b600085815260208120601f198616915b82811015620004585788860151825594840194600190910190840162000437565b5085821015620004775787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b61115180620004976000396000f3fe608060405234801561001057600080fd5b50600436106101985760003560e01c806370a08231116100e3578063a217fddf1161008c578063d364e10011610066578063d364e10014610391578063d547741f146103b7578063dd62ed3e146103ca57600080fd5b8063a217fddf1461034f578063a9059cbb14610357578063b5bfddea1461036a57600080fd5b80638456cb59116100bd5780638456cb591461030657806391d148541461030e57806395d89b411461034757600080fd5b806370a08231146102a357806375b238fc146102cc57806379cc6790146102f357600080fd5b80632f2ff15d116101455780633f4ba83a1161011f5780633f4ba83a1461027d57806340c10f19146102855780635c975abb1461029857600080fd5b80632f2ff15d14610235578063313ce5671461024a57806336568abe1461026a57600080fd5b806318160ddd1161017657806318160ddd146101ed57806323b872dd146101ff578063248a9ca31461021257600080fd5b806301ffc9a71461019d57806306fdde03146101c5578063095ea7b3146101da575b600080fd5b6101b06101ab366004610ee4565b610403565b60405190151581526020015b60405180910390f35b6101cd6104af565b6040516101bc9190610f15565b6101b06101e8366004610f9e565b610541565b6002545b6040519081526020016101bc565b6101b061020d366004610fc8565b610559565b6101f1610220366004611004565b60009081526005602052604090206001015490565b61024861024336600461101d565b61057d565b005b600854640100000000900460ff1660405160ff90911681526020016101bc565b61024861027836600461101d565b6105a8565b6102486105f9565b610248610293366004610f9e565b610636565b60065460ff166101b0565b6101f16102b1366004611049565b6001600160a01b031660009081526020819052604090205490565b6101f17fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c2177581565b610248610301366004610f9e565b610689565b6102486106cd565b6101b061031c36600461101d565b60009182526005602090815260408084206001600160a01b0393909316845291905290205460ff1690565b6101cd610707565b6101f1600081565b6101b0610365366004610f9e565b610716565b6101f17f52ba824bfabc2bcfcdf7f0edbb486ebb05e1836c90e78047efeb949990f72e5f81565b60085461039e9060e01b81565b6040516001600160e01b031990911681526020016101bc565b6102486103c536600461101d565b610724565b6101f16103d8366004611064565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60006001600160e01b031982167f390d688900000000000000000000000000000000000000000000000000000000148061046657506001600160e01b031982167f36372b0700000000000000000000000000000000000000000000000000000000145b8061049a57506001600160e01b031982167fa219a02500000000000000000000000000000000000000000000000000000000145b806104a957506104a982610749565b92915050565b6060600380546104be9061108e565b80601f01602080910402602001604051908101604052809291908181526020018280546104ea9061108e565b80156105375780601f1061050c57610100808354040283529160200191610537565b820191906000526020600020905b81548152906001019060200180831161051a57829003601f168201915b5050505050905090565b60003361054f8185856107b0565b5060019392505050565b6000336105678582856107bd565b610572858585610871565b506001949350505050565b60008281526005602052604090206001015461059881610902565b6105a2838361090c565b50505050565b6001600160a01b03811633146105ea576040517f6697b23200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105f482826109ba565b505050565b610601610a41565b7fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c2177561062b81610902565b610633610a7f565b50565b61063e610ad1565b610646610b0e565b7f52ba824bfabc2bcfcdf7f0edbb486ebb05e1836c90e78047efeb949990f72e5f61067081610902565b61067a8383610b51565b506106856001600755565b5050565b610691610ad1565b610699610b0e565b7f52ba824bfabc2bcfcdf7f0edbb486ebb05e1836c90e78047efeb949990f72e5f6106c381610902565b61067a8383610ba0565b6106d5610ad1565b7fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c217756106ff81610902565b610633610bef565b6060600480546104be9061108e565b60003361054f818585610871565b60008281526005602052604090206001015461073f81610902565b6105a283836109ba565b60006001600160e01b031982167f7965db0b0000000000000000000000000000000000000000000000000000000014806104a957507f01ffc9a7000000000000000000000000000000000000000000000000000000006001600160e01b03198316146104a9565b6105f48383836001610c2c565b6001600160a01b038381166000908152600160209081526040808320938616835292905220547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146105a25781811015610862576040517ffb8f41b20000000000000000000000000000000000000000000000000000000081526001600160a01b038416600482015260248101829052604481018390526064015b60405180910390fd5b6105a284848484036000610c2c565b6001600160a01b0383166108b4576040517f96c6fd1e00000000000000000000000000000000000000000000000000000000815260006004820152602401610859565b6001600160a01b0382166108f7576040517fec442f0500000000000000000000000000000000000000000000000000000000815260006004820152602401610859565b6105f4838383610d33565b6106338133610e76565b60008281526005602090815260408083206001600160a01b038516845290915281205460ff166109b25760008381526005602090815260408083206001600160a01b03861684529091529020805460ff1916600117905561096a3390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45060016104a9565b5060006104a9565b60008281526005602090815260408083206001600160a01b038516845290915281205460ff16156109b25760008381526005602090815260408083206001600160a01b0386168085529252808320805460ff1916905551339286917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45060016104a9565b60065460ff16610a7d576040517f8dfc202b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b610a87610a41565b6006805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b60065460ff1615610a7d576040517fd93c066500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600260075403610b4a576040517f3ee5aeb500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6002600755565b6001600160a01b038216610b94576040517fec442f0500000000000000000000000000000000000000000000000000000000815260006004820152602401610859565b61068560008383610d33565b6001600160a01b038216610be3576040517f96c6fd1e00000000000000000000000000000000000000000000000000000000815260006004820152602401610859565b61068582600083610d33565b610bf7610ad1565b6006805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258610ab43390565b6001600160a01b038416610c6f576040517fe602df0500000000000000000000000000000000000000000000000000000000815260006004820152602401610859565b6001600160a01b038316610cb2576040517f94280d6200000000000000000000000000000000000000000000000000000000815260006004820152602401610859565b6001600160a01b03808516600090815260016020908152604080832093871683529290522082905580156105a257826001600160a01b0316846001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92584604051610d2591815260200190565b60405180910390a350505050565b6001600160a01b038316610d5e578060026000828254610d5391906110e1565b90915550610de99050565b6001600160a01b03831660009081526020819052604090205481811015610dca576040517fe450d38c0000000000000000000000000000000000000000000000000000000081526001600160a01b03851660048201526024810182905260448101839052606401610859565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b038216610e0557600280548290039055610e24565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610e6991815260200190565b60405180910390a3505050565b60008281526005602090815260408083206001600160a01b038516845290915290205460ff16610685576040517fe2517d3f0000000000000000000000000000000000000000000000000000000081526001600160a01b038216600482015260248101839052604401610859565b600060208284031215610ef657600080fd5b81356001600160e01b031981168114610f0e57600080fd5b9392505050565b60006020808352835180602085015260005b81811015610f4357858101830151858201604001528201610f27565b5060006040828601015260407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168501019250505092915050565b80356001600160a01b0381168114610f9957600080fd5b919050565b60008060408385031215610fb157600080fd5b610fba83610f82565b946020939093013593505050565b600080600060608486031215610fdd57600080fd5b610fe684610f82565b9250610ff460208501610f82565b9150604084013590509250925092565b60006020828403121561101657600080fd5b5035919050565b6000806040838503121561103057600080fd5b8235915061104060208401610f82565b90509250929050565b60006020828403121561105b57600080fd5b610f0e82610f82565b6000806040838503121561107757600080fd5b61108083610f82565b915061104060208401610f82565b600181811c908216806110a257607f821691505b6020821081036110db577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b808201808211156104a9577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fdfea264697066735822122096d43aee7c8e39beaf73b2d64f45297d28f4abedf62db214d7ce9c06a5ef74db64736f6c63430008180033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "symbol";
            readonly type: "string";
        }, {
            readonly internalType: "address";
            readonly name: "bridge";
            readonly type: "address";
        }, {
            readonly internalType: "uint8";
            readonly name: "decimals_";
            readonly type: "uint8";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "AccessControlBadConfirmation";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly internalType: "bytes32";
            readonly name: "neededRole";
            readonly type: "bytes32";
        }];
        readonly name: "AccessControlUnauthorizedAccount";
        readonly type: "error";
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
        readonly inputs: readonly [];
        readonly name: "EnforcedPause";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ExpectedPause";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ReentrancyGuardReentrantCall";
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
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "Paused";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "previousAdminRole";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "newAdminRole";
            readonly type: "bytes32";
        }];
        readonly name: "RoleAdminChanged";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }];
        readonly name: "RoleGranted";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }];
        readonly name: "RoleRevoked";
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
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "Unpaused";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "ADMIN_ROLE";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "BRIDGE_ROLE";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "DEFAULT_ADMIN_ROLE";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "IWERC20InterfaceId";
        readonly outputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "";
            readonly type: "bytes4";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
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
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "burnFrom";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
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
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }];
        readonly name: "getRoleAdmin";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "grantRole";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "hasRole";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
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
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "mint";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
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
        readonly name: "pause";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "paused";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address";
            readonly name: "callerConfirmation";
            readonly type: "address";
        }];
        readonly name: "renounceRole";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "revokeRole";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "interfaceId";
            readonly type: "bytes4";
        }];
        readonly name: "supportsInterface";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
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
    }, {
        readonly inputs: readonly [];
        readonly name: "unpause";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): WrappedERC20Interface;
    static connect(address: string, runner?: ContractRunner | null): WrappedERC20;
}
export {};
