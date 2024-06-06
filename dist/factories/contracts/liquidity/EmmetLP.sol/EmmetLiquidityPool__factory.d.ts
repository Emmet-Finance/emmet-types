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
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b5060405162001a3138038062001a318339810160408190526200003491620003ab565b81816003620000448382620004cc565b506004620000538282620004cc565b5050506200009d846040518060400160405280601d81526020017f42726964676520616464726573732063616e6e6f74206265207a65726f000000815250620001a660201b60201c565b620000a884620001df565b620000cd8360405180606001604052806023815260200162001a0e60239139620001a6565b620000d883620001df565b6001600160a01b038316608052620000f26000336200020e565b506200011f7f52ba824bfabc2bcfcdf7f0edbb486ebb05e1836c90e78047efeb949990f72e5f856200020e565b506080516001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000161573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000187919062000598565b6006805460ff191660ff9290921691909117905550620005f992505050565b6001600160a01b038216620001db578060405163eac0d38960e01b8152600401620001d29190620005c4565b60405180910390fd5b5050565b806001600160a01b03163b6000036200020b5760405163093f8e6360e21b815260040160405180910390fd5b50565b60008281526005602090815260408083206001600160a01b038516845290915281205460ff16620002b75760008381526005602090815260408083206001600160a01b03861684529091529020805460ff191660011790556200026e3390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a4506001620002bb565b5060005b92915050565b80516001600160a01b0381168114620002d957600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60005b8381101562000311578181015183820152602001620002f7565b50506000910152565b600082601f8301126200032c57600080fd5b81516001600160401b0380821115620003495762000349620002de565b604051601f8301601f19908116603f01168101908282118183101715620003745762000374620002de565b816040528381528660208588010111156200038e57600080fd5b620003a1846020830160208901620002f4565b9695505050505050565b60008060008060808587031215620003c257600080fd5b620003cd85620002c1565b9350620003dd60208601620002c1565b60408601519093506001600160401b0380821115620003fb57600080fd5b62000409888389016200031a565b935060608701519150808211156200042057600080fd5b506200042f878288016200031a565b91505092959194509250565b600181811c908216806200045057607f821691505b6020821081036200047157634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620004c7576000816000526020600020601f850160051c81016020861015620004a25750805b601f850160051c820191505b81811015620004c357828155600101620004ae565b5050505b505050565b81516001600160401b03811115620004e857620004e8620002de565b6200050081620004f984546200043b565b8462000477565b602080601f8311600181146200053857600084156200051f5750858301515b600019600386901b1c1916600185901b178555620004c3565b600085815260208120601f198616915b82811015620005695788860151825594840194600190910190840162000548565b5085821015620005885787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b600060208284031215620005ab57600080fd5b815160ff81168114620005bd57600080fd5b9392505050565b6020815260008251806020840152620005e5816040850160208701620002f4565b601f01601f19169190910160400192915050565b6080516113d6620006386000396000818161030101528181610569015281816106500152818161070201528181610896015261093501526113d66000f3fe608060405234801561001057600080fd5b506004361061014d5760003560e01c806370a08231116100c3578063a9059cbb1161007c578063a9059cbb146102c2578063b5bfddea146102d5578063cc7a262e146102fc578063d547741f1461033b578063dd62ed3e1461034e578063f40d71f11461038757600080fd5b806370a082311461025a5780637547c7a314610283578063817b1cd21461029657806391d148541461029f57806395d89b41146102b2578063a217fddf146102ba57600080fd5b8063248a9ca311610115578063248a9ca3146101c757806326476204146101ea5780632f2ff15d1461020a578063313ce5671461021f578063315a095d1461023457806336568abe1461024757600080fd5b806301ffc9a71461015257806306fdde031461017a578063095ea7b31461018f57806318160ddd146101a257806323b872dd146101b4575b600080fd5b6101656101603660046110a2565b61039a565b60405190151581526020015b60405180910390f35b6101826103d1565b60405161017191906110f0565b61016561019d36600461113f565b610463565b6002545b604051908152602001610171565b6101656101c2366004611169565b61047b565b6101a66101d53660046111a5565b60009081526005602052604090206001015490565b6101a66101f83660046111be565b60086020526000908152604090205481565b61021d6102183660046111d9565b6104a1565b005b60065460405160ff9091168152602001610171565b61021d6102423660046111a5565b6104cc565b61021d6102553660046111d9565b6106b4565b6101a66102683660046111be565b6001600160a01b031660009081526020819052604090205490565b61021d6102913660046111a5565b6106ec565b6101a660075481565b6101656102ad3660046111d9565b6107a7565b6101826107d2565b6101a6600081565b6101656102d036600461113f565b6107e1565b6101a67f52ba824bfabc2bcfcdf7f0edbb486ebb05e1836c90e78047efeb949990f72e5f81565b6103237f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610171565b61021d6103493660046111d9565b6107ef565b6101a661035c366004611205565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b61021d61039536600461113f565b610814565b60006001600160e01b03198216637965db0b60e01b14806103cb57506301ffc9a760e01b6001600160e01b03198316145b92915050565b6060600380546103e09061122f565b80601f016020809104026020016040519081016040528092919081815260200182805461040c9061122f565b80156104595780601f1061042e57610100808354040283529160200191610459565b820191906000526020600020905b81548152906001019060200180831161043c57829003601f168201915b5050505050905090565b600033610471818585610994565b5060019392505050565b6000336104898582856109a1565b610494858585610a1e565b60019150505b9392505050565b6000828152600560205260409020600101546104bc81610a7d565b6104c68383610a8a565b50505050565b6104d581610b1e565b61051d60086000336001600160a01b03166001600160a01b0316815260200190815260200160002054826040518060600160405280602b8152602001611325602b9139610b3f565b33600090815260208190526040902054610550908260405180606001604052806027815260200161137a60279139610b3f565b6040516370a0823160e01b81523060048201526105fb907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156105b8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105dc9190611269565b826040518060600160405280602881526020016112fd60289139610b3f565b336000908152600860205260408120805483929061061a908490611298565b9250508190555080600760008282546106339190611298565b9091555061064390503382610b62565b6106776001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000163383610b9c565b60408051338152602081018390527f7084f5476618d8e60b11ef0d7d3f06914655adb8793e28ff7f018d4c76d505d591015b60405180910390a150565b6001600160a01b03811633146106dd5760405163334bd91960e11b815260040160405180910390fd5b6106e78282610bfb565b505050565b6106f581610b1e565b61072a6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333084610c68565b6107343382610ca1565b33600090815260086020526040812080548392906107539084906112ab565b92505081905550806007600082825461076c91906112ab565b909155505060408051338152602081018390527f9e71bc8eea02a63969f509818f2dafb9254532904319f9dbda79b67bd34a5f3d91016106a9565b60009182526005602090815260408084206001600160a01b0393909316845291905290205460ff1690565b6060600480546103e09061122f565b600033610471818585610a1e565b60008281526005602052604090206001015461080a81610a7d565b6104c68383610bfb565b7f52ba824bfabc2bcfcdf7f0edbb486ebb05e1836c90e78047efeb949990f72e5f61083e81610a7d565b61087d836040518060400160405280601e81526020017f43616e6e6f742072656c6561736520746f207a65726f20616464726573730000815250610cd7565b6040516370a0823160e01b8152306004820152610928907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156108e5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109099190611269565b836040518060600160405280602a8152602001611350602a9139610b3f565b61095c6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168484610b9c565b6040518281527f3341a9b985bece02d04644789b3748c3a086c6ea28160798bacc57fb168ef0b09060200160405180910390a1505050565b6106e78383836001610d00565b6001600160a01b0383811660009081526001602090815260408083209386168352929052205460001981146104c65781811015610a0f57604051637dc7a0d960e11b81526001600160a01b038416600482015260248101829052604481018390526064015b60405180910390fd5b6104c684848484036000610d00565b6001600160a01b038316610a4857604051634b637e8f60e11b815260006004820152602401610a06565b6001600160a01b038216610a725760405163ec442f0560e01b815260006004820152602401610a06565b6106e7838383610dd5565b610a878133610eff565b50565b6000610a9683836107a7565b610b165760008381526005602090815260408083206001600160a01b03861684529091529020805460ff19166001179055610ace3390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45060016103cb565b5060006103cb565b80600003610a8757604051631f2a200560e01b815260040160405180910390fd5b818310156106e75780604051637979dc8760e01b8152600401610a0691906110f0565b6001600160a01b038216610b8c57604051634b637e8f60e11b815260006004820152602401610a06565b610b9882600083610dd5565b5050565b6040516001600160a01b038381166024830152604482018390526106e791859182169063a9059cbb906064015b604051602081830303815290604052915060e01b6020820180516001600160e01b038381831617835250505050610f38565b6000610c0783836107a7565b15610b165760008381526005602090815260408083206001600160a01b0386168085529252808320805460ff1916905551339286917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45060016103cb565b6040516001600160a01b0384811660248301528381166044830152606482018390526104c69186918216906323b872dd90608401610bc9565b6001600160a01b038216610ccb5760405163ec442f0560e01b815260006004820152602401610a06565b610b9860008383610dd5565b6001600160a01b038216610b98578060405163eac0d38960e01b8152600401610a0691906110f0565b6001600160a01b038416610d2a5760405163e602df0560e01b815260006004820152602401610a06565b6001600160a01b038316610d5457604051634a1406b160e11b815260006004820152602401610a06565b6001600160a01b03808516600090815260016020908152604080832093871683529290522082905580156104c657826001600160a01b0316846001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92584604051610dc791815260200190565b60405180910390a350505050565b6001600160a01b038316610e00578060026000828254610df591906112ab565b90915550610e729050565b6001600160a01b03831660009081526020819052604090205481811015610e535760405163391434e360e21b81526001600160a01b03851660048201526024810182905260448101839052606401610a06565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b038216610e8e57600280548290039055610ead565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610ef291815260200190565b60405180910390a3505050565b610f0982826107a7565b610b985760405163e2517d3f60e01b81526001600160a01b038216600482015260248101839052604401610a06565b6000610f4d6001600160a01b03841683610f9b565b90508051600014158015610f72575080806020019051810190610f7091906112be565b155b156106e757604051635274afe760e01b81526001600160a01b0384166004820152602401610a06565b606061049a8383600084600080856001600160a01b03168486604051610fc191906112e0565b60006040518083038185875af1925050503d8060008114610ffe576040519150601f19603f3d011682016040523d82523d6000602084013e611003565b606091505b509150915061101386838361101d565b9695505050505050565b6060826110325761102d82611079565b61049a565b815115801561104957506001600160a01b0384163b155b1561107257604051639996b31560e01b81526001600160a01b0385166004820152602401610a06565b508061049a565b8051156110895780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b6000602082840312156110b457600080fd5b81356001600160e01b03198116811461049a57600080fd5b60005b838110156110e75781810151838201526020016110cf565b50506000910152565b602081526000825180602084015261110f8160408501602087016110cc565b601f01601f19169190910160400192915050565b80356001600160a01b038116811461113a57600080fd5b919050565b6000806040838503121561115257600080fd5b61115b83611123565b946020939093013593505050565b60008060006060848603121561117e57600080fd5b61118784611123565b925061119560208501611123565b9150604084013590509250925092565b6000602082840312156111b757600080fd5b5035919050565b6000602082840312156111d057600080fd5b61049a82611123565b600080604083850312156111ec57600080fd5b823591506111fc60208401611123565b90509250929050565b6000806040838503121561121857600080fd5b61122183611123565b91506111fc60208401611123565b600181811c9082168061124357607f821691505b60208210810361126357634e487b7160e01b600052602260045260246000fd5b50919050565b60006020828403121561127b57600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b818103818111156103cb576103cb611282565b808201808211156103cb576103cb611282565b6000602082840312156112d057600080fd5b8151801515811461049a57600080fd5b600082516112f28184602087016110cc565b919091019291505056fe456d6d65744c6971756964697479506f6f6c20726571756972657320726562616c616e63696e672e43616e6e6f74207769746864726177206d6f7265207468616e20746865207374616b656420616d6f756e74496e73756666696369656e7420456d6d65744c6971756964697479506f6f6c206c69717569646974792e496e73756666696369656e7420456d6d65744c5020746f6b656e7320746f207769746864726177a26469706673582212202ad24e4b71c3f6b0e9125d5c87b0cf4e9753569d4f3d9986c014e9e10b46d74664736f6c634300081800335374616b656420746f6b656e20616464726573732063616e6e6f74206265207a65726f";
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
            readonly internalType: "contract IERC20Metadata";
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
