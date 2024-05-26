import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, AddressLike, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type { EmmetLiquidityPool, EmmetLiquidityPoolInterface } from "../../../../contracts/liquidity/EmmetLP.sol/EmmetLiquidityPool";
type EmmetLiquidityPoolConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class EmmetLiquidityPool__factory extends ContractFactory {
    constructor(...args: EmmetLiquidityPoolConstructorParams);
    getDeployTransaction(bridge_: AddressLike, stakedToken_: AddressLike, lpName: string, lpSymbol: string, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(bridge_: AddressLike, stakedToken_: AddressLike, lpName: string, lpSymbol: string, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<EmmetLiquidityPool & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): EmmetLiquidityPool__factory;
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b50604051620019833803806200198383398101604081905262000034916200032f565b8181600362000044838262000450565b50600462000053828262000450565b5050506200009d846040518060400160405280601d81526020017f42726964676520616464726573732063616e6e6f74206265207a65726f0000008152506200012a60201b60201c565b620000a88462000163565b620000cd8360405180606001604052806023815260200162001960602391396200012a565b620000d88362000163565b6001600160a01b038316608052620000f260003362000192565b506200011f7f52ba824bfabc2bcfcdf7f0edbb486ebb05e1836c90e78047efeb949990f72e5f8562000192565b505050505062000551565b6001600160a01b0382166200015f578060405163eac0d38960e01b81526004016200015691906200051c565b60405180910390fd5b5050565b806001600160a01b03163b6000036200018f5760405163093f8e6360e21b815260040160405180910390fd5b50565b60008281526005602090815260408083206001600160a01b038516845290915281205460ff166200023b5760008381526005602090815260408083206001600160a01b03861684529091529020805460ff19166001179055620001f23390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45060016200023f565b5060005b92915050565b80516001600160a01b03811681146200025d57600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620002955781810151838201526020016200027b565b50506000910152565b600082601f830112620002b057600080fd5b81516001600160401b0380821115620002cd57620002cd62000262565b604051601f8301601f19908116603f01168101908282118183101715620002f857620002f862000262565b816040528381528660208588010111156200031257600080fd5b6200032584602083016020890162000278565b9695505050505050565b600080600080608085870312156200034657600080fd5b620003518562000245565b9350620003616020860162000245565b60408601519093506001600160401b03808211156200037f57600080fd5b6200038d888389016200029e565b93506060870151915080821115620003a457600080fd5b50620003b3878288016200029e565b91505092959194509250565b600181811c90821680620003d457607f821691505b602082108103620003f557634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200044b576000816000526020600020601f850160051c81016020861015620004265750805b601f850160051c820191505b81811015620004475782815560010162000432565b5050505b505050565b81516001600160401b038111156200046c576200046c62000262565b62000484816200047d8454620003bf565b84620003fb565b602080601f831160018114620004bc5760008415620004a35750858301515b600019600386901b1c1916600185901b17855562000447565b600085815260208120601f198616915b82811015620004ed57888601518255948401946001909101908401620004cc565b50858210156200050c5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60208152600082518060208401526200053d81604085016020870162000278565b601f01601f19169190910160400192915050565b6080516113d062000590600039600081816102fb015281816105630152818161064a015281816106fc01528181610890015261092f01526113d06000f3fe608060405234801561001057600080fd5b506004361061014d5760003560e01c806370a08231116100c3578063a9059cbb1161007c578063a9059cbb146102bc578063b5bfddea146102cf578063cc7a262e146102f6578063d547741f14610335578063dd62ed3e14610348578063f40d71f11461038157600080fd5b806370a08231146102545780637547c7a31461027d578063817b1cd21461029057806391d148541461029957806395d89b41146102ac578063a217fddf146102b457600080fd5b8063248a9ca311610115578063248a9ca3146101c757806326476204146101ea5780632f2ff15d1461020a578063313ce5671461021f578063315a095d1461022e57806336568abe1461024157600080fd5b806301ffc9a71461015257806306fdde031461017a578063095ea7b31461018f57806318160ddd146101a257806323b872dd146101b4575b600080fd5b61016561016036600461109c565b610394565b60405190151581526020015b60405180910390f35b6101826103cb565b60405161017191906110ea565b61016561019d366004611139565b61045d565b6002545b604051908152602001610171565b6101656101c2366004611163565b610475565b6101a66101d536600461119f565b60009081526005602052604090206001015490565b6101a66101f83660046111b8565b60076020526000908152604090205481565b61021d6102183660046111d3565b61049b565b005b60405160128152602001610171565b61021d61023c36600461119f565b6104c6565b61021d61024f3660046111d3565b6106ae565b6101a66102623660046111b8565b6001600160a01b031660009081526020819052604090205490565b61021d61028b36600461119f565b6106e6565b6101a660065481565b6101656102a73660046111d3565b6107a1565b6101826107cc565b6101a6600081565b6101656102ca366004611139565b6107db565b6101a67f52ba824bfabc2bcfcdf7f0edbb486ebb05e1836c90e78047efeb949990f72e5f81565b61031d7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610171565b61021d6103433660046111d3565b6107e9565b6101a66103563660046111ff565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b61021d61038f366004611139565b61080e565b60006001600160e01b03198216637965db0b60e01b14806103c557506301ffc9a760e01b6001600160e01b03198316145b92915050565b6060600380546103da90611229565b80601f016020809104026020016040519081016040528092919081815260200182805461040690611229565b80156104535780601f1061042857610100808354040283529160200191610453565b820191906000526020600020905b81548152906001019060200180831161043657829003601f168201915b5050505050905090565b60003361046b81858561098e565b5060019392505050565b60003361048385828561099b565b61048e858585610a18565b60019150505b9392505050565b6000828152600560205260409020600101546104b681610a77565b6104c08383610a84565b50505050565b6104cf81610b18565b61051760076000336001600160a01b03166001600160a01b0316815260200190815260200160002054826040518060600160405280602b815260200161131f602b9139610b39565b3360009081526020819052604090205461054a908260405180606001604052806027815260200161137460279139610b39565b6040516370a0823160e01b81523060048201526105f5907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156105b2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105d69190611263565b826040518060600160405280602881526020016112f760289139610b39565b3360009081526007602052604081208054839290610614908490611292565b92505081905550806006600082825461062d9190611292565b9091555061063d90503382610b5c565b6106716001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000163383610b96565b60408051338152602081018390527f7084f5476618d8e60b11ef0d7d3f06914655adb8793e28ff7f018d4c76d505d591015b60405180910390a150565b6001600160a01b03811633146106d75760405163334bd91960e11b815260040160405180910390fd5b6106e18282610bf5565b505050565b6106ef81610b18565b6107246001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333084610c62565b61072e3382610c9b565b336000908152600760205260408120805483929061074d9084906112a5565b92505081905550806006600082825461076691906112a5565b909155505060408051338152602081018390527f9e71bc8eea02a63969f509818f2dafb9254532904319f9dbda79b67bd34a5f3d91016106a3565b60009182526005602090815260408084206001600160a01b0393909316845291905290205460ff1690565b6060600480546103da90611229565b60003361046b818585610a18565b60008281526005602052604090206001015461080481610a77565b6104c08383610bf5565b7f52ba824bfabc2bcfcdf7f0edbb486ebb05e1836c90e78047efeb949990f72e5f61083881610a77565b610877836040518060400160405280601e81526020017f43616e6e6f742072656c6561736520746f207a65726f20616464726573730000815250610cd1565b6040516370a0823160e01b8152306004820152610922907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156108df573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109039190611263565b836040518060600160405280602a815260200161134a602a9139610b39565b6109566001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168484610b96565b6040518281527f3341a9b985bece02d04644789b3748c3a086c6ea28160798bacc57fb168ef0b09060200160405180910390a1505050565b6106e18383836001610cfa565b6001600160a01b0383811660009081526001602090815260408083209386168352929052205460001981146104c05781811015610a0957604051637dc7a0d960e11b81526001600160a01b038416600482015260248101829052604481018390526064015b60405180910390fd5b6104c084848484036000610cfa565b6001600160a01b038316610a4257604051634b637e8f60e11b815260006004820152602401610a00565b6001600160a01b038216610a6c5760405163ec442f0560e01b815260006004820152602401610a00565b6106e1838383610dcf565b610a818133610ef9565b50565b6000610a9083836107a1565b610b105760008381526005602090815260408083206001600160a01b03861684529091529020805460ff19166001179055610ac83390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45060016103c5565b5060006103c5565b80600003610a8157604051631f2a200560e01b815260040160405180910390fd5b818310156106e15780604051637979dc8760e01b8152600401610a0091906110ea565b6001600160a01b038216610b8657604051634b637e8f60e11b815260006004820152602401610a00565b610b9282600083610dcf565b5050565b6040516001600160a01b038381166024830152604482018390526106e191859182169063a9059cbb906064015b604051602081830303815290604052915060e01b6020820180516001600160e01b038381831617835250505050610f32565b6000610c0183836107a1565b15610b105760008381526005602090815260408083206001600160a01b0386168085529252808320805460ff1916905551339286917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45060016103c5565b6040516001600160a01b0384811660248301528381166044830152606482018390526104c09186918216906323b872dd90608401610bc3565b6001600160a01b038216610cc55760405163ec442f0560e01b815260006004820152602401610a00565b610b9260008383610dcf565b6001600160a01b038216610b92578060405163eac0d38960e01b8152600401610a0091906110ea565b6001600160a01b038416610d245760405163e602df0560e01b815260006004820152602401610a00565b6001600160a01b038316610d4e57604051634a1406b160e11b815260006004820152602401610a00565b6001600160a01b03808516600090815260016020908152604080832093871683529290522082905580156104c057826001600160a01b0316846001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92584604051610dc191815260200190565b60405180910390a350505050565b6001600160a01b038316610dfa578060026000828254610def91906112a5565b90915550610e6c9050565b6001600160a01b03831660009081526020819052604090205481811015610e4d5760405163391434e360e21b81526001600160a01b03851660048201526024810182905260448101839052606401610a00565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b038216610e8857600280548290039055610ea7565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610eec91815260200190565b60405180910390a3505050565b610f0382826107a1565b610b925760405163e2517d3f60e01b81526001600160a01b038216600482015260248101839052604401610a00565b6000610f476001600160a01b03841683610f95565b90508051600014158015610f6c575080806020019051810190610f6a91906112b8565b155b156106e157604051635274afe760e01b81526001600160a01b0384166004820152602401610a00565b60606104948383600084600080856001600160a01b03168486604051610fbb91906112da565b60006040518083038185875af1925050503d8060008114610ff8576040519150601f19603f3d011682016040523d82523d6000602084013e610ffd565b606091505b509150915061100d868383611017565b9695505050505050565b60608261102c5761102782611073565b610494565b815115801561104357506001600160a01b0384163b155b1561106c57604051639996b31560e01b81526001600160a01b0385166004820152602401610a00565b5080610494565b8051156110835780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b6000602082840312156110ae57600080fd5b81356001600160e01b03198116811461049457600080fd5b60005b838110156110e15781810151838201526020016110c9565b50506000910152565b60208152600082518060208401526111098160408501602087016110c6565b601f01601f19169190910160400192915050565b80356001600160a01b038116811461113457600080fd5b919050565b6000806040838503121561114c57600080fd5b6111558361111d565b946020939093013593505050565b60008060006060848603121561117857600080fd5b6111818461111d565b925061118f6020850161111d565b9150604084013590509250925092565b6000602082840312156111b157600080fd5b5035919050565b6000602082840312156111ca57600080fd5b6104948261111d565b600080604083850312156111e657600080fd5b823591506111f66020840161111d565b90509250929050565b6000806040838503121561121257600080fd5b61121b8361111d565b91506111f66020840161111d565b600181811c9082168061123d57607f821691505b60208210810361125d57634e487b7160e01b600052602260045260246000fd5b50919050565b60006020828403121561127557600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b818103818111156103c5576103c561127c565b808201808211156103c5576103c561127c565b6000602082840312156112ca57600080fd5b8151801515811461049457600080fd5b600082516112ec8184602087016110c6565b919091019291505056fe456d6d65744c6971756964697479506f6f6c20726571756972657320726562616c616e63696e672e43616e6e6f74207769746864726177206d6f7265207468616e20746865207374616b656420616d6f756e74496e73756666696369656e7420456d6d65744c6971756964697479506f6f6c206c69717569646974792e496e73756666696369656e7420456d6d65744c5020746f6b656e7320746f207769746864726177a2646970667358221220a03ade8c96b008185cebab9af4bca12df219387627272b84ffbc931f5a85b5a364736f6c634300081800335374616b656420746f6b656e20616464726573732063616e6e6f74206265207a65726f";
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
    static createInterface(): EmmetLiquidityPoolInterface;
    static connect(address: string, runner?: ContractRunner | null): EmmetLiquidityPool;
}
export {};
