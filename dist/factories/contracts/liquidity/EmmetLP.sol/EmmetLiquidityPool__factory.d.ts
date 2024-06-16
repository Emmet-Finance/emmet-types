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
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b5060405162001f9e38038062001f9e8339810160408190526200003491620006a4565b83600083836003620000478382620007c4565b506004620000568282620007c4565b506200006891506000905033620001b3565b50806200007a576200007a8262000266565b5050620000b2836040518060400160405280600c81526020016b7374616b6564546f6b656e5f60a01b8152506200036a60201b60201c565b620000e8836040518060400160405280600c81526020016b7374616b6564546f6b656e5f60a01b815250620003bb60201b60201c565b6200011e836040518060400160405280600c81526020016b7374616b6564546f6b656e5f60a01b8152506200040560201b60201c565b6001600160a01b03831660808190526040805163313ce56760e01b8152905163313ce567916004808201926020929091908290030181865afa15801562000169573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200018f919062000890565b600660146101000a81548160ff021916908360ff1602179055505050505062000948565b60008281526005602090815260408083206001600160a01b038516845290915281205460ff166200025c5760008381526005602090815260408083206001600160a01b03861684529091529020805460ff19166001179055620002133390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a450600162000260565b5060005b92915050565b6200029781604051806040016040528060078152602001666272696467655f60c81b8152506200036a60201b60201c565b620002c881604051806040016040528060078152602001666272696467655f60c81b815250620003bb60201b60201c565b600654620002f09060008051602062001f7e833981519152906001600160a01b031662000455565b506006546001600160a01b03166200031860008051602062001f7e83398151915283620001b3565b50600680546001600160a01b0319166001600160a01b0384811691821790925560405190918316907faae9beddccf584528e87b66c6ff2563825c8a1433305b8a656e9b5f9bf39049990600090a35050565b60408051808201909152601881527f657870656374656420746f206265206e6f6e207a65726f2e00000000000000006020820152620003b7906001600160a01b03841615908390620004de565b5050565b620003b7826001600160a01b03163b600014826040518060400160405280601281526020017134b9903737ba10309031b7b73a3930b1ba1760711b815250620004de60201b60201c565b620003b7826336372b0760e01b836040518060400160405280601e81526020017f6973206e6f7420612070726f70657220455243323020636f6e747261637400008152506200053160201b60201c565b60008281526005602090815260408083206001600160a01b038516845290915281205460ff16156200025c5760008381526005602090815260408083206001600160a01b0386168085529252808320805460ff1916905551339286917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a450600162000260565b82156200052c578181604051602001620004fa929190620008bc565b60408051601f1981840301815290829052631aaca1eb60e11b82526200052391600401620008ef565b60405180910390fd5b505050565b6040516301ffc9a760e01b81526001600160e01b031984166004820152620005b4906001600160a01b038616906301ffc9a790602401602060405180830381865afa15801562000585573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620005ab919062000924565b158383620004de565b50505050565b80516001600160a01b0381168114620005d257600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60005b838110156200060a578181015183820152602001620005f0565b50506000910152565b600082601f8301126200062557600080fd5b81516001600160401b0380821115620006425762000642620005d7565b604051601f8301601f19908116603f011681019082821181831017156200066d576200066d620005d7565b816040528381528660208588010111156200068757600080fd5b6200069a846020830160208901620005ed565b9695505050505050565b60008060008060808587031215620006bb57600080fd5b620006c685620005ba565b9350620006d660208601620005ba565b60408601519093506001600160401b0380821115620006f457600080fd5b620007028883890162000613565b935060608701519150808211156200071957600080fd5b50620007288782880162000613565b91505092959194509250565b600181811c908216806200074957607f821691505b6020821081036200076a57634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200052c576000816000526020600020601f850160051c810160208610156200079b5750805b601f850160051c820191505b81811015620007bc57828155600101620007a7565b505050505050565b81516001600160401b03811115620007e057620007e0620005d7565b620007f881620007f1845462000734565b8462000770565b602080601f831160018114620008305760008415620008175750858301515b600019600386901b1c1916600185901b178555620007bc565b600085815260208120601f198616915b82811015620008615788860151825594840194600190910190840162000840565b5085821015620008805787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b600060208284031215620008a357600080fd5b815160ff81168114620008b557600080fd5b9392505050565b60008351620008d0818460208801620005ed565b835190830190620008e6818360208801620005ed565b01949350505050565b602081526000825180602084015262000910816040850160208701620005ed565b601f01601f19169190910160400192915050565b6000602082840312156200093757600080fd5b81518015158114620008b557600080fd5b6080516115f76200098760003960008181610332015281816105840152818161066b01528181610754015281816108e3015261098201526115f76000f3fe608060405234801561001057600080fd5b50600436106101735760003560e01c806370a08231116100de578063a9059cbb11610097578063d547741f11610071578063d547741f1461036c578063dd62ed3e1461037f578063e78cea92146103b8578063f40d71f1146103cb57600080fd5b8063a9059cbb14610305578063b5bfddea14610318578063cc7a262e1461032d57600080fd5b806370a082311461029d5780637547c7a3146102c6578063817b1cd2146102d957806391d14854146102e257806395d89b41146102f5578063a217fddf146102fd57600080fd5b8063264762041161013057806326476204146102105780632f2ff15d14610230578063313ce56714610245578063315a095d1461026457806336568abe146102775780636eb382121461028a57600080fd5b806301ffc9a71461017857806306fdde03146101a0578063095ea7b3146101b557806318160ddd146101c857806323b872dd146101da578063248a9ca3146101ed575b600080fd5b61018b61018636600461129f565b6103de565b60405190151581526020015b60405180910390f35b6101a8610415565b60405161019791906112ed565b61018b6101c336600461133c565b6104a7565b6002545b604051908152602001610197565b61018b6101e8366004611366565b6104bf565b6101cc6101fb3660046113a2565b60009081526005602052604090206001015490565b6101cc61021e3660046113bb565b60086020526000908152604090205481565b61024361023e3660046113d6565b6104e5565b005b600654600160a01b900460ff1660405160ff9091168152602001610197565b6102436102723660046113a2565b610510565b6102436102853660046113d6565b6106cf565b6102436102983660046113bb565b610707565b6101cc6102ab3660046113bb565b6001600160a01b031660009081526020819052604090205490565b6102436102d43660046113a2565b61071f565b6101cc60075481565b61018b6102f03660046113d6565b6107f9565b6101a8610824565b6101cc600081565b61018b61031336600461133c565b610833565b6101cc6000805160206115a283398151915281565b6103547f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610197565b61024361037a3660046113d6565b610841565b6101cc61038d366004611402565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b600654610354906001600160a01b031681565b6102436103d936600461133c565b610866565b60006001600160e01b03198216637965db0b60e01b148061040f57506301ffc9a760e01b6001600160e01b03198316145b92915050565b6060600380546104249061142c565b80601f01602080910402602001604051908101604052809291908181526020018280546104509061142c565b801561049d5780601f106104725761010080835404028352916020019161049d565b820191906000526020600020905b81548152906001019060200180831161048057829003601f168201915b5050505050905090565b6000336104b58185856109e1565b5060019392505050565b6000336104cd8582856109ee565b6104d8858585610a6b565b60019150505b9392505050565b60008281526005602052604090206001015461050081610aca565b61050a8383610ad7565b50505050565b6105388160405180604001604052806006815260200165185b5bdd5b9d60d21b815250610b6b565b3360009081526020819052604090205461056b908260405180606001604052806027815260200161157b60279139610ba4565b6040516370a0823160e01b8152306004820152610616907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156105d3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105f79190611466565b8260405180606001604052806028815260200161152960289139610ba4565b3360009081526008602052604081208054839290610635908490611495565b92505081905550806007600082825461064e9190611495565b9091555061065e90503382610bc7565b6106926001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000163383610bfd565b60408051338152602081018390527f7084f5476618d8e60b11ef0d7d3f06914655adb8793e28ff7f018d4c76d505d591015b60405180910390a150565b6001600160a01b03811633146106f85760405163334bd91960e11b815260040160405180910390fd5b6107028282610c5c565b505050565b600061071281610aca565b61071b82610cc9565b5050565b6107478160405180604001604052806006815260200165185b5bdd5b9d60d21b815250610b6b565b61077c6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333084610db7565b6107863382610df0565b33600090815260086020526040812080548392906107a59084906114a8565b9250508190555080600760008282546107be91906114a8565b909155505060408051338152602081018390527f9e71bc8eea02a63969f509818f2dafb9254532904319f9dbda79b67bd34a5f3d91016106c4565b60009182526005602090815260408084206001600160a01b0393909316845291905290205460ff1690565b6060600480546104249061142c565b6000336104b5818585610a6b565b60008281526005602052604090206001015461085c81610aca565b61050a8383610c5c565b6000805160206115a283398151915261087e81610aca565b6108a28360405180604001604052806002815260200161746f60f01b815250610e26565b6108ca8260405180604001604052806006815260200165185b5bdd5b9d60d21b815250610b6b565b6040516370a0823160e01b8152306004820152610975907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015610932573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109569190611466565b836040518060600160405280602a8152602001611551602a9139610ba4565b6109a96001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168484610bfd565b6040518281527f3341a9b985bece02d04644789b3748c3a086c6ea28160798bacc57fb168ef0b09060200160405180910390a1505050565b6107028383836001610e7b565b6001600160a01b03838116600090815260016020908152604080832093861683529290522054600019811461050a5781811015610a5c57604051637dc7a0d960e11b81526001600160a01b038416600482015260248101829052604481018390526064015b60405180910390fd5b61050a84848484036000610e7b565b6001600160a01b038316610a9557604051634b637e8f60e11b815260006004820152602401610a53565b6001600160a01b038216610abf5760405163ec442f0560e01b815260006004820152602401610a53565b610702838383610f50565b610ad4813361107a565b50565b6000610ae383836107f9565b610b635760008381526005602090815260408083206001600160a01b03861684529091529020805460ff19166001179055610b1b3390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a450600161040f565b50600061040f565b61071b82600014826040518060400160405280601381526020017239b437bab632103737ba103132903d32b9379760691b8152506110b3565b81831015610702578060405163240bf61760e11b8152600401610a5391906112ed565b6001600160a01b038216610bf157604051634b637e8f60e11b815260006004820152602401610a53565b61071b82600083610f50565b6040516001600160a01b0383811660248301526044820183905261070291859182169063a9059cbb906064015b604051602081830303815290604052915060e01b6020820180516001600160e01b0383818316178352505050506110f3565b6000610c6883836107f9565b15610b635760008381526005602090815260408083206001600160a01b0386168085529252808320805460ff1916905551339286917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a450600161040f565b610cf281604051806040016040528060078152602001666272696467655f60c81b815250610e26565b610d1b81604051806040016040528060078152602001666272696467655f60c81b815250611156565b600654610d40906000805160206115a2833981519152906001600160a01b0316610c5c565b506006546001600160a01b0316610d656000805160206115a283398151915283610ad7565b50600680546001600160a01b0319166001600160a01b0384811691821790925560405190918316907faae9beddccf584528e87b66c6ff2563825c8a1433305b8a656e9b5f9bf39049990600090a35050565b6040516001600160a01b03848116602483015283811660448301526064820183905261050a9186918216906323b872dd90608401610c2a565b6001600160a01b038216610e1a5760405163ec442f0560e01b815260006004820152602401610a53565b61071b60008383610f50565b61071b60006001600160a01b0316836001600160a01b031614826040518060400160405280601881526020017f657870656374656420746f206265206e6f6e207a65726f2e00000000000000008152506110b3565b6001600160a01b038416610ea55760405163e602df0560e01b815260006004820152602401610a53565b6001600160a01b038316610ecf57604051634a1406b160e11b815260006004820152602401610a53565b6001600160a01b038085166000908152600160209081526040808320938716835292905220829055801561050a57826001600160a01b0316846001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92584604051610f4291815260200190565b60405180910390a350505050565b6001600160a01b038316610f7b578060026000828254610f7091906114a8565b90915550610fed9050565b6001600160a01b03831660009081526020819052604090205481811015610fce5760405163391434e360e21b81526001600160a01b03851660048201526024810182905260448101839052606401610a53565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b03821661100957600280548290039055611028565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161106d91815260200190565b60405180910390a3505050565b61108482826107f9565b61071b5760405163e2517d3f60e01b81526001600160a01b038216600482015260248101839052604401610a53565b82156107025781816040516020016110cc9291906114bb565b60408051601f1981840301815290829052631aaca1eb60e11b8252610a53916004016112ed565b60006111086001600160a01b03841683611198565b9050805160001415801561112d57508080602001905181019061112b91906114ea565b155b1561070257604051635274afe760e01b81526001600160a01b0384166004820152602401610a53565b61071b826001600160a01b03163b600014826040518060400160405280601281526020017134b9903737ba10309031b7b73a3930b1ba1760711b8152506110b3565b60606104de8383600084600080856001600160a01b031684866040516111be919061150c565b60006040518083038185875af1925050503d80600081146111fb576040519150601f19603f3d011682016040523d82523d6000602084013e611200565b606091505b509150915061121086838361121a565b9695505050505050565b60608261122f5761122a82611276565b6104de565b815115801561124657506001600160a01b0384163b155b1561126f57604051639996b31560e01b81526001600160a01b0385166004820152602401610a53565b50806104de565b8051156112865780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b6000602082840312156112b157600080fd5b81356001600160e01b0319811681146104de57600080fd5b60005b838110156112e45781810151838201526020016112cc565b50506000910152565b602081526000825180602084015261130c8160408501602087016112c9565b601f01601f19169190910160400192915050565b80356001600160a01b038116811461133757600080fd5b919050565b6000806040838503121561134f57600080fd5b61135883611320565b946020939093013593505050565b60008060006060848603121561137b57600080fd5b61138484611320565b925061139260208501611320565b9150604084013590509250925092565b6000602082840312156113b457600080fd5b5035919050565b6000602082840312156113cd57600080fd5b6104de82611320565b600080604083850312156113e957600080fd5b823591506113f960208401611320565b90509250929050565b6000806040838503121561141557600080fd5b61141e83611320565b91506113f960208401611320565b600181811c9082168061144057607f821691505b60208210810361146057634e487b7160e01b600052602260045260246000fd5b50919050565b60006020828403121561147857600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b8181038181111561040f5761040f61147f565b8082018082111561040f5761040f61147f565b600083516114cd8184602088016112c9565b8351908301906114e18183602088016112c9565b01949350505050565b6000602082840312156114fc57600080fd5b815180151581146104de57600080fd5b6000825161151e8184602087016112c9565b919091019291505056fe456d6d65744c6971756964697479506f6f6c20726571756972657320726562616c616e63696e672e496e73756666696369656e7420456d6d65744c6971756964697479506f6f6c206c69717569646974792e496e73756666696369656e7420456d6d65744c5020746f6b656e7320746f20776974686472617752ba824bfabc2bcfcdf7f0edbb486ebb05e1836c90e78047efeb949990f72e5fa2646970667358221220f0d85a448a87fa2595d46adcd94e6eae9aa0ed4b9253b2b44f23711821c32e2a64736f6c6343000818003352ba824bfabc2bcfcdf7f0edbb486ebb05e1836c90e78047efeb949990f72e5f";
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
        readonly name: "InsufficientAmount";
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
            readonly internalType: "string";
            readonly name: "message";
            readonly type: "string";
        }];
        readonly name: "ParameterValidationError";
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
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "oldBridge";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newBridge";
            readonly type: "address";
        }];
        readonly name: "BridgeUpdated";
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
        readonly name: "bridge";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
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
            readonly internalType: "address";
            readonly name: "bridge_";
            readonly type: "address";
        }];
        readonly name: "updateBridge";
        readonly outputs: readonly [];
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
