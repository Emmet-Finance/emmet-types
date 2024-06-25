import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, BigNumberish, AddressLike, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type { EmmetLiquidityPoolV1, EmmetLiquidityPoolV1Interface } from "../../../contracts/liquidity/EmmetLiquidityPoolV1";
type EmmetLiquidityPoolV1ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class EmmetLiquidityPoolV1__factory extends ContractFactory {
    constructor(...args: EmmetLiquidityPoolV1ConstructorParams);
    getDeployTransaction(bridge_: AddressLike, stakedToken_: AddressLike, decmals_: BigNumberish, lpName: string, lpSymbol: string, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(bridge_: AddressLike, stakedToken_: AddressLike, decmals_: BigNumberish, lpName: string, lpSymbol: string, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<EmmetLiquidityPoolV1 & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): EmmetLiquidityPoolV1__factory;
    static readonly bytecode = "0x60c06040523480156200001157600080fd5b5060405162001d1a38038062001d1a833981016040819052620000349162000336565b8181600362000044838262000471565b50600462000053828262000471565b5050506200009d856040518060400160405280601d81526020017f42726964676520616464726573732063616e6e6f74206265207a65726f0000008152506200013160201b60201c565b620000a8856200016a565b620000cd8460405180606001604052806023815260200162001cf76023913962000131565b620000d8846200016a565b6001600160a01b03841660a052620000f260003362000199565b506200011f7f52ba824bfabc2bcfcdf7f0edbb486ebb05e1836c90e78047efeb949990f72e5f8662000199565b50505060ff1660805250620005729050565b6001600160a01b03821662000166578060405163eac0d38960e01b81526004016200015d91906200053d565b60405180910390fd5b5050565b806001600160a01b03163b600003620001965760405163093f8e6360e21b815260040160405180910390fd5b50565b60008281526005602090815260408083206001600160a01b038516845290915281205460ff16620002425760008381526005602090815260408083206001600160a01b03861684529091529020805460ff19166001179055620001f93390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a450600162000246565b5060005b92915050565b80516001600160a01b03811681146200026457600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60005b838110156200029c57818101518382015260200162000282565b50506000910152565b600082601f830112620002b757600080fd5b81516001600160401b0380821115620002d457620002d462000269565b604051601f8301601f19908116603f01168101908282118183101715620002ff57620002ff62000269565b816040528381528660208588010111156200031957600080fd5b6200032c8460208301602089016200027f565b9695505050505050565b600080600080600060a086880312156200034f57600080fd5b6200035a866200024c565b94506200036a602087016200024c565b9350604086015160ff811681146200038157600080fd5b60608701519093506001600160401b03808211156200039f57600080fd5b620003ad89838a01620002a5565b93506080880151915080821115620003c457600080fd5b50620003d388828901620002a5565b9150509295509295909350565b600181811c90821680620003f557607f821691505b6020821081036200041657634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200046c576000816000526020600020601f850160051c81016020861015620004475750805b601f850160051c820191505b81811015620004685782815560010162000453565b5050505b505050565b81516001600160401b038111156200048d576200048d62000269565b620004a5816200049e8454620003e0565b846200041c565b602080601f831160018114620004dd5760008415620004c45750858301515b600019600386901b1c1916600185901b17855562000468565b600085815260208120601f198616915b828110156200050e57888601518255948401946001909101908401620004ed565b50858210156200052d5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60208152600082518060208401526200055e8160408501602087016200027f565b601f01601f19169190910160400192915050565b60805160a05161173c620005bb60003960008181610383015281816106660152818161074d015281816108180152818161099a0152610a3901526000610266015261173c6000f3fe608060405234801561001057600080fd5b506004361061018d5760003560e01c806370a08231116100e3578063a9059cbb1161008c578063d547741f11610066578063d547741f146103bd578063dd62ed3e146103d0578063f40d71f11461040957600080fd5b8063a9059cbb14610344578063b5bfddea14610357578063cc7a262e1461037e57600080fd5b806391d14854116100bd57806391d14854146102fb57806395d89b4114610334578063a217fddf1461033c57600080fd5b806370a08231146102b65780637547c7a3146102df578063817b1cd2146102f257600080fd5b8063248a9ca311610145578063313ce5671161011f578063313ce5671461025f578063315a095d1461029057806336568abe146102a357600080fd5b8063248a9ca314610207578063264762041461022a5780632f2ff15d1461024a57600080fd5b8063095ea7b311610176578063095ea7b3146101cf57806318160ddd146101e257806323b872dd146101f457600080fd5b806301ffc9a71461019257806306fdde03146101ba575b600080fd5b6101a56101a03660046113a0565b61041c565b60405190151581526020015b60405180910390f35b6101c26104b5565b6040516101b19190611406565b6101a56101dd366004611473565b610547565b6002545b6040519081526020016101b1565b6101a561020236600461149d565b61055f565b6101e66102153660046114d9565b60009081526005602052604090206001015490565b6101e66102383660046114f2565b60076020526000908152604090205481565b61025d61025836600461150d565b610585565b005b60405160ff7f00000000000000000000000000000000000000000000000000000000000000001681526020016101b1565b61025d61029e3660046114d9565b6105b0565b61025d6102b136600461150d565b6107b1565b6101e66102c43660046114f2565b6001600160a01b031660009081526020819052604090205490565b61025d6102ed3660046114d9565b610802565b6101e660065481565b6101a561030936600461150d565b60009182526005602090815260408084206001600160a01b0393909316845291905290205460ff1690565b6101c26108bd565b6101e6600081565b6101a5610352366004611473565b6108cc565b6101e67f52ba824bfabc2bcfcdf7f0edbb486ebb05e1836c90e78047efeb949990f72e5f81565b6103a57f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016101b1565b61025d6103cb36600461150d565b6108da565b6101e66103de366004611539565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b61025d610417366004611473565b6108ff565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f7965db0b0000000000000000000000000000000000000000000000000000000014806104af57507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b6060600380546104c490611563565b80601f01602080910402602001604051908101604052809291908181526020018280546104f090611563565b801561053d5780601f106105125761010080835404028352916020019161053d565b820191906000526020600020905b81548152906001019060200180831161052057829003601f168201915b5050505050905090565b600033610555818585610a98565b5060019392505050565b60003361056d858285610aa5565b610578858585610b59565b60019150505b9392505050565b6000828152600560205260409020600101546105a081610bea565b6105aa8383610bf7565b50505050565b6105b981610ca5565b61060160076000336001600160a01b03166001600160a01b0316815260200190815260200160002054826040518060600160405280602b815260200161168b602b9139610cdf565b3360009081526020819052604090205461063490826040518060600160405280602781526020016116e060279139610cdf565b6040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201526106f8907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156106b5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106d991906115b6565b8260405180606001604052806028815260200161166360289139610cdf565b33600090815260076020526040812080548392906107179084906115fe565b92505081905550806006600082825461073091906115fe565b9091555061074090503382610d1b565b6107746001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000163383610d6e565b60408051338152602081018390527f7084f5476618d8e60b11ef0d7d3f06914655adb8793e28ff7f018d4c76d505d591015b60405180910390a150565b6001600160a01b03811633146107f3576040517f6697b23200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6107fd8282610de2565b505050565b61080b81610ca5565b6108406001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333084610e69565b61084a3382610ea2565b3360009081526007602052604081208054839290610869908490611611565b9250508190555080600660008282546108829190611611565b909155505060408051338152602081018390527f9e71bc8eea02a63969f509818f2dafb9254532904319f9dbda79b67bd34a5f3d91016107a6565b6060600480546104c490611563565b600033610555818585610b59565b6000828152600560205260409020600101546108f581610bea565b6105aa8383610de2565b7f52ba824bfabc2bcfcdf7f0edbb486ebb05e1836c90e78047efeb949990f72e5f61092981610bea565b610968836040518060400160405280601e81526020017f43616e6e6f742072656c6561736520746f207a65726f20616464726573730000815250610ef1565b6040517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152610a2c907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156109e9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a0d91906115b6565b836040518060600160405280602a81526020016116b6602a9139610cdf565b610a606001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168484610d6e565b6040518281527f3341a9b985bece02d04644789b3748c3a086c6ea28160798bacc57fb168ef0b09060200160405180910390a1505050565b6107fd8383836001610f33565b6001600160a01b038381166000908152600160209081526040808320938616835292905220547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146105aa5781811015610b4a576040517ffb8f41b20000000000000000000000000000000000000000000000000000000081526001600160a01b038416600482015260248101829052604481018390526064015b60405180910390fd5b6105aa84848484036000610f33565b6001600160a01b038316610b9c576040517f96c6fd1e00000000000000000000000000000000000000000000000000000000815260006004820152602401610b41565b6001600160a01b038216610bdf576040517fec442f0500000000000000000000000000000000000000000000000000000000815260006004820152602401610b41565b6107fd83838361103a565b610bf4813361117d565b50565b60008281526005602090815260408083206001600160a01b038516845290915281205460ff16610c9d5760008381526005602090815260408083206001600160a01b03861684529091529020805460ff19166001179055610c553390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45060016104af565b5060006104af565b80600003610bf4576040517f1f2a200500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b818310156107fd57806040517f7979dc87000000000000000000000000000000000000000000000000000000008152600401610b419190611406565b6001600160a01b038216610d5e576040517f96c6fd1e00000000000000000000000000000000000000000000000000000000815260006004820152602401610b41565b610d6a8260008361103a565b5050565b6040516001600160a01b038381166024830152604482018390526107fd91859182169063a9059cbb906064015b604051602081830303815290604052915060e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506111eb565b60008281526005602090815260408083206001600160a01b038516845290915281205460ff1615610c9d5760008381526005602090815260408083206001600160a01b0386168085529252808320805460ff1916905551339286917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45060016104af565b6040516001600160a01b0384811660248301528381166044830152606482018390526105aa9186918216906323b872dd90608401610d9b565b6001600160a01b038216610ee5576040517fec442f0500000000000000000000000000000000000000000000000000000000815260006004820152602401610b41565b610d6a6000838361103a565b6001600160a01b038216610d6a57806040517feac0d389000000000000000000000000000000000000000000000000000000008152600401610b419190611406565b6001600160a01b038416610f76576040517fe602df0500000000000000000000000000000000000000000000000000000000815260006004820152602401610b41565b6001600160a01b038316610fb9576040517f94280d6200000000000000000000000000000000000000000000000000000000815260006004820152602401610b41565b6001600160a01b03808516600090815260016020908152604080832093871683529290522082905580156105aa57826001600160a01b0316846001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258460405161102c91815260200190565b60405180910390a350505050565b6001600160a01b03831661106557806002600082825461105a9190611611565b909155506110f09050565b6001600160a01b038316600090815260208190526040902054818110156110d1576040517fe450d38c0000000000000000000000000000000000000000000000000000000081526001600160a01b03851660048201526024810182905260448101839052606401610b41565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b03821661110c5760028054829003905561112b565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161117091815260200190565b60405180910390a3505050565b60008281526005602090815260408083206001600160a01b038516845290915290205460ff16610d6a576040517fe2517d3f0000000000000000000000000000000000000000000000000000000081526001600160a01b038216600482015260248101839052604401610b41565b60006112006001600160a01b03841683611267565b905080516000141580156112255750808060200190518101906112239190611624565b155b156107fd576040517f5274afe70000000000000000000000000000000000000000000000000000000081526001600160a01b0384166004820152602401610b41565b606061057e8383600084600080856001600160a01b0316848660405161128d9190611646565b60006040518083038185875af1925050503d80600081146112ca576040519150601f19603f3d011682016040523d82523d6000602084013e6112cf565b606091505b50915091506112df8683836112e9565b9695505050505050565b6060826112fe576112f98261135e565b61057e565b815115801561131557506001600160a01b0384163b155b15611357576040517f9996b3150000000000000000000000000000000000000000000000000000000081526001600160a01b0385166004820152602401610b41565b508061057e565b80511561136e5780518082602001fd5b6040517f1425ea4200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000602082840312156113b257600080fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461057e57600080fd5b60005b838110156113fd5781810151838201526020016113e5565b50506000910152565b60208152600082518060208401526114258160408501602087016113e2565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b80356001600160a01b038116811461146e57600080fd5b919050565b6000806040838503121561148657600080fd5b61148f83611457565b946020939093013593505050565b6000806000606084860312156114b257600080fd5b6114bb84611457565b92506114c960208501611457565b9150604084013590509250925092565b6000602082840312156114eb57600080fd5b5035919050565b60006020828403121561150457600080fd5b61057e82611457565b6000806040838503121561152057600080fd5b8235915061153060208401611457565b90509250929050565b6000806040838503121561154c57600080fd5b61155583611457565b915061153060208401611457565b600181811c9082168061157757607f821691505b6020821081036115b0577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b6000602082840312156115c857600080fd5b5051919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b818103818111156104af576104af6115cf565b808201808211156104af576104af6115cf565b60006020828403121561163657600080fd5b8151801515811461057e57600080fd5b600082516116588184602087016113e2565b919091019291505056fe456d6d65744c6971756964697479506f6f6c20726571756972657320726562616c616e63696e672e43616e6e6f74207769746864726177206d6f7265207468616e20746865207374616b656420616d6f756e74496e73756666696369656e7420456d6d65744c6971756964697479506f6f6c206c69717569646974792e496e73756666696369656e7420456d6d65744c5020746f6b656e7320746f207769746864726177a2646970667358221220df92c914c9202a600fe283ed6dfcd33e2c9dfaabe29c7996ec40363432ff986e64736f6c634300081800335374616b656420746f6b656e20616464726573732063616e6e6f74206265207a65726f";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "bridge_";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "stakedToken_";
            readonly type: "address";
        }, {
            readonly internalType: "uint8";
            readonly name: "decmals_";
            readonly type: "uint8";
        }, {
            readonly internalType: "string";
            readonly name: "lpName";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "lpSymbol";
            readonly type: "string";
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
            readonly name: "target";
            readonly type: "address";
        }];
        readonly name: "AddressEmptyCode";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "AddressInsufficientBalance";
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
        readonly name: "FailedInnerCall";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "message";
            readonly type: "string";
        }];
        readonly name: "InsufficientBalance";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NoCodeAccount";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }];
        readonly name: "SafeERC20FailedOperation";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "message";
            readonly type: "string";
        }];
        readonly name: "ZeroAddress";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ZeroAmount";
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
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "ReleasedToken";
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
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "staker";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "Staked";
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
            readonly name: "staker";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "Withdrawn";
        readonly type: "event";
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
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "releaseTokens";
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
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "stake";
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
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "stakeTokens";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "stakedToken";
        readonly outputs: readonly [{
            readonly internalType: "contract IERC20";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
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
        readonly name: "totalStaked";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
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
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "withdrawTokens";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): EmmetLiquidityPoolV1Interface;
    static connect(address: string, runner?: ContractRunner | null): EmmetLiquidityPoolV1;
}
export {};
