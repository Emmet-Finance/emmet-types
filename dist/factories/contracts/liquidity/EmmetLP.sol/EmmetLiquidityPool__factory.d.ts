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
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b5060405162002372380380620023728339810160408190526200003491620006b6565b83600083836003620000478382620007d6565b506004620000568282620007d6565b506200006891506000905033620001b3565b50806200007a576200007a8262000266565b5050620000b2836040518060400160405280600c81526020016b7374616b6564546f6b656e5f60a01b8152506200037d60201b60201c565b620000e8836040518060400160405280600c81526020016b7374616b6564546f6b656e5f60a01b815250620003ce60201b60201c565b6200011e836040518060400160405280600c81526020016b7374616b6564546f6b656e5f60a01b8152506200041860201b60201c565b6001600160a01b03831660808190526040805163313ce56760e01b8152905163313ce567916004808201926020929091908290030181865afa15801562000169573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200018f9190620008a2565b600660146101000a81548160ff021916908360ff160217905550505050506200095a565b60008281526005602090815260408083206001600160a01b038516845290915281205460ff166200025c5760008381526005602090815260408083206001600160a01b03861684529091529020805460ff19166001179055620002133390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a450600162000260565b5060005b92915050565b6200029781604051806040016040528060078152602001666272696467655f60c81b8152506200037d60201b60201c565b620002c881604051806040016040528060078152602001666272696467655f60c81b815250620003ce60201b60201c565b6006546001600160a01b0316156200030457600654620003029060008051602062002352833981519152906001600160a01b031662000468565b505b6006546001600160a01b03166200032b6000805160206200235283398151915283620001b3565b50600680546001600160a01b0319166001600160a01b0384811691821790925560405190918316907faae9beddccf584528e87b66c6ff2563825c8a1433305b8a656e9b5f9bf39049990600090a35050565b60408051808201909152601881527f657870656374656420746f206265206e6f6e207a65726f2e00000000000000006020820152620003ca906001600160a01b03841615908390620004f1565b5050565b620003ca826001600160a01b03163b600014826040518060400160405280601281526020017134b9903737ba10309031b7b73a3930b1ba1760711b815250620004f160201b60201c565b620003ca826336372b0760e01b836040518060400160405280601e81526020017f6973206e6f7420612070726f70657220455243323020636f6e747261637400008152506200054360201b60201c565b60008281526005602090815260408083206001600160a01b038516845290915281205460ff16156200025c5760008381526005602090815260408083206001600160a01b0386168085529252808320805460ff1916905551339286917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a450600162000260565b82156200053e5781816040516020016200050d929190620008ce565b60408051601f198184030181529082905262461bcd60e51b8252620005359160040162000901565b60405180910390fd5b505050565b6040516301ffc9a760e01b81526001600160e01b031984166004820152620005c6906001600160a01b038616906301ffc9a790602401602060405180830381865afa15801562000597573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620005bd919062000936565b158383620004f1565b50505050565b80516001600160a01b0381168114620005e457600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60005b838110156200061c57818101518382015260200162000602565b50506000910152565b600082601f8301126200063757600080fd5b81516001600160401b0380821115620006545762000654620005e9565b604051601f8301601f19908116603f011681019082821181831017156200067f576200067f620005e9565b816040528381528660208588010111156200069957600080fd5b620006ac846020830160208901620005ff565b9695505050505050565b60008060008060808587031215620006cd57600080fd5b620006d885620005cc565b9350620006e860208601620005cc565b60408601519093506001600160401b03808211156200070657600080fd5b620007148883890162000625565b935060608701519150808211156200072b57600080fd5b506200073a8782880162000625565b91505092959194509250565b600181811c908216806200075b57607f821691505b6020821081036200077c57634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200053e576000816000526020600020601f850160051c81016020861015620007ad5750805b601f850160051c820191505b81811015620007ce57828155600101620007b9565b505050505050565b81516001600160401b03811115620007f257620007f2620005e9565b6200080a8162000803845462000746565b8462000782565b602080601f831160018114620008425760008415620008295750858301515b600019600386901b1c1916600185901b178555620007ce565b600085815260208120601f198616915b82811015620008735788860151825594840194600190910190840162000852565b5085821015620008925787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b600060208284031215620008b557600080fd5b815160ff81168114620008c757600080fd5b9392505050565b60008351620008e2818460208801620005ff565b835190830190620008f8818360208801620005ff565b01949350505050565b602081526000825180602084015262000922816040850160208701620005ff565b601f01601f19169190910160400192915050565b6000602082840312156200094957600080fd5b81518015158114620008c757600080fd5b6080516119b962000999600039600081816103ab015281816106780152818161075f0152818161086101528181610a0b0152610aaa01526119b96000f3fe608060405234801561001057600080fd5b50600436106101a35760003560e01c806370a08231116100ee578063a9059cbb11610097578063d547741f11610071578063d547741f146103e5578063dd62ed3e146103f8578063e78cea9214610431578063f40d71f11461044457600080fd5b8063a9059cbb1461036c578063b5bfddea1461037f578063cc7a262e146103a657600080fd5b806391d14854116100c857806391d148541461032357806395d89b411461035c578063a217fddf1461036457600080fd5b806370a08231146102de5780637547c7a314610307578063817b1cd21461031a57600080fd5b80632647620411610150578063315a095d1161012a578063315a095d146102a557806336568abe146102b85780636eb38212146102cb57600080fd5b806326476204146102405780632f2ff15d14610260578063313ce5671461027557600080fd5b806318160ddd1161018157806318160ddd146101f857806323b872dd1461020a578063248a9ca31461021d57600080fd5b806301ffc9a7146101a857806306fdde03146101d0578063095ea7b3146101e5575b600080fd5b6101bb6101b6366004611637565b610457565b60405190151581526020015b60405180910390f35b6101d86104f0565b6040516101c7919061169d565b6101bb6101f33660046116ec565b610582565b6002545b6040519081526020016101c7565b6101bb610218366004611716565b61059a565b6101fc61022b366004611752565b60009081526005602052604090206001015490565b6101fc61024e36600461176b565b60086020526000908152604090205481565b61027361026e366004611786565b6105c0565b005b60065474010000000000000000000000000000000000000000900460ff1660405160ff90911681526020016101c7565b6102736102b3366004611752565b6105eb565b6102736102c6366004611786565b6107c3565b6102736102d936600461176b565b610814565b6101fc6102ec36600461176b565b6001600160a01b031660009081526020819052604090205490565b610273610315366004611752565b61082c565b6101fc60075481565b6101bb610331366004611786565b60009182526005602090815260408084206001600160a01b0393909316845291905290205460ff1690565b6101d8610906565b6101fc600081565b6101bb61037a3660046116ec565b610915565b6101fc7f52ba824bfabc2bcfcdf7f0edbb486ebb05e1836c90e78047efeb949990f72e5f81565b6103cd7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016101c7565b6102736103f3366004611786565b610923565b6101fc6104063660046117b2565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6006546103cd906001600160a01b031681565b6102736104523660046116ec565b610948565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f7965db0b0000000000000000000000000000000000000000000000000000000014806104ea57507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b6060600380546104ff906117dc565b80601f016020809104026020016040519081016040528092919081815260200182805461052b906117dc565b80156105785780601f1061054d57610100808354040283529160200191610578565b820191906000526020600020905b81548152906001019060200180831161055b57829003601f168201915b5050505050905090565b600033610590818585610b09565b5060019392505050565b6000336105a8858285610b16565b6105b3858585610bca565b60019150505b9392505050565b6000828152600560205260409020600101546105db81610c5b565b6105e58383610c68565b50505050565b6106138160405180604001604052806006815260200165185b5bdd5b9d60d21b815250610d16565b33600090815260208190526040902054610646908260405180606001604052806027815260200161195d60279139610d59565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015261070a907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156106c7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106eb919061182f565b8260405180606001604052806028815260200161190b60289139610d59565b3360009081526008602052604081208054839290610729908490611877565b9250508190555080600760008282546107429190611877565b9091555061075290503382610d95565b6107866001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000163383610de4565b60408051338152602081018390527f7084f5476618d8e60b11ef0d7d3f06914655adb8793e28ff7f018d4c76d505d591015b60405180910390a150565b6001600160a01b0381163314610805576040517f6697b23200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61080f8282610e58565b505050565b600061081f81610c5b565b61082882610edf565b5050565b6108548160405180604001604052806006815260200165185b5bdd5b9d60d21b815250610d16565b6108896001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333084611047565b6108933382611080565b33600090815260086020526040812080548392906108b290849061188a565b9250508190555080600760008282546108cb919061188a565b909155505060408051338152602081018390527f9e71bc8eea02a63969f509818f2dafb9254532904319f9dbda79b67bd34a5f3d91016107b8565b6060600480546104ff906117dc565b600033610590818585610bca565b60008281526005602052604090206001015461093e81610c5b565b6105e58383610e58565b7f52ba824bfabc2bcfcdf7f0edbb486ebb05e1836c90e78047efeb949990f72e5f61097281610c5b565b6109b1836040518060400160405280600281526020017f746f0000000000000000000000000000000000000000000000000000000000008152506110cf565b6109d98260405180604001604052806006815260200165185b5bdd5b9d60d21b815250610d16565b6040517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152610a9d907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015610a5a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a7e919061182f565b836040518060600160405280602a8152602001611933602a9139610d59565b610ad16001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168484610de4565b6040518281527f3341a9b985bece02d04644789b3748c3a086c6ea28160798bacc57fb168ef0b09060200160405180910390a1505050565b61080f8383836001611124565b6001600160a01b038381166000908152600160209081526040808320938616835292905220547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146105e55781811015610bbb576040517ffb8f41b20000000000000000000000000000000000000000000000000000000081526001600160a01b038416600482015260248101829052604481018390526064015b60405180910390fd5b6105e584848484036000611124565b6001600160a01b038316610c0d576040517f96c6fd1e00000000000000000000000000000000000000000000000000000000815260006004820152602401610bb2565b6001600160a01b038216610c50576040517fec442f0500000000000000000000000000000000000000000000000000000000815260006004820152602401610bb2565b61080f83838361122b565b610c65813361136e565b50565b60008281526005602090815260408083206001600160a01b038516845290915281205460ff16610d0e5760008381526005602090815260408083206001600160a01b03861684529091529020805460ff19166001179055610cc63390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45060016104ea565b5060006104ea565b61082882600014826040518060400160405280601381526020017f73686f756c64206e6f74206265207a65726f2e000000000000000000000000008152506113dc565b8183101561080f57806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bb2919061169d565b6001600160a01b038216610dd8576040517f96c6fd1e00000000000000000000000000000000000000000000000000000000815260006004820152602401610bb2565b6108288260008361122b565b6040516001600160a01b0383811660248301526044820183905261080f91859182169063a9059cbb906064015b604051602081830303815290604052915060e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050611435565b60008281526005602090815260408083206001600160a01b038516845290915281205460ff1615610d0e5760008381526005602090815260408083206001600160a01b0386168085529252808320805460ff1916905551339286917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45060016104ea565b610f1e816040518060400160405280600781526020017f6272696467655f000000000000000000000000000000000000000000000000008152506110cf565b610f5d816040518060400160405280600781526020017f6272696467655f000000000000000000000000000000000000000000000000008152506114b1565b6006546001600160a01b031615610fa757600654610fa5907f52ba824bfabc2bcfcdf7f0edbb486ebb05e1836c90e78047efeb949990f72e5f906001600160a01b0316610e58565b505b6006546001600160a01b0316610fdd7f52ba824bfabc2bcfcdf7f0edbb486ebb05e1836c90e78047efeb949990f72e5f83610c68565b50600680547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0384811691821790925560405190918316907faae9beddccf584528e87b66c6ff2563825c8a1433305b8a656e9b5f9bf39049990600090a35050565b6040516001600160a01b0384811660248301528381166044830152606482018390526105e59186918216906323b872dd90608401610e11565b6001600160a01b0382166110c3576040517fec442f0500000000000000000000000000000000000000000000000000000000815260006004820152602401610bb2565b6108286000838361122b565b61082860006001600160a01b0316836001600160a01b031614826040518060400160405280601881526020017f657870656374656420746f206265206e6f6e207a65726f2e00000000000000008152506113dc565b6001600160a01b038416611167576040517fe602df0500000000000000000000000000000000000000000000000000000000815260006004820152602401610bb2565b6001600160a01b0383166111aa576040517f94280d6200000000000000000000000000000000000000000000000000000000815260006004820152602401610bb2565b6001600160a01b03808516600090815260016020908152604080832093871683529290522082905580156105e557826001600160a01b0316846001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258460405161121d91815260200190565b60405180910390a350505050565b6001600160a01b03831661125657806002600082825461124b919061188a565b909155506112e19050565b6001600160a01b038316600090815260208190526040902054818110156112c2576040517fe450d38c0000000000000000000000000000000000000000000000000000000081526001600160a01b03851660048201526024810182905260448101839052606401610bb2565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b0382166112fd5760028054829003905561131c565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161136191815260200190565b60405180910390a3505050565b60008281526005602090815260408083206001600160a01b038516845290915290205460ff16610828576040517fe2517d3f0000000000000000000000000000000000000000000000000000000081526001600160a01b038216600482015260248101839052604401610bb2565b821561080f5781816040516020016113f592919061189d565b60408051601f19818403018152908290527f08c379a0000000000000000000000000000000000000000000000000000000008252610bb29160040161169d565b600061144a6001600160a01b038416836114fe565b9050805160001415801561146f57508080602001905181019061146d91906118cc565b155b1561080f576040517f5274afe70000000000000000000000000000000000000000000000000000000081526001600160a01b0384166004820152602401610bb2565b610828826001600160a01b03163b600014826040518060400160405280601281526020017f6973206e6f74206120636f6e74726163742e00000000000000000000000000008152506113dc565b60606105b98383600084600080856001600160a01b0316848660405161152491906118ee565b60006040518083038185875af1925050503d8060008114611561576040519150601f19603f3d011682016040523d82523d6000602084013e611566565b606091505b5091509150611576868383611580565b9695505050505050565b60608261159557611590826115f5565b6105b9565b81511580156115ac57506001600160a01b0384163b155b156115ee576040517f9996b3150000000000000000000000000000000000000000000000000000000081526001600160a01b0385166004820152602401610bb2565b50806105b9565b8051156116055780518082602001fd5b6040517f1425ea4200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006020828403121561164957600080fd5b81357fffffffff00000000000000000000000000000000000000000000000000000000811681146105b957600080fd5b60005b8381101561169457818101518382015260200161167c565b50506000910152565b60208152600082518060208401526116bc816040850160208701611679565b601f01601f19169190910160400192915050565b80356001600160a01b03811681146116e757600080fd5b919050565b600080604083850312156116ff57600080fd5b611708836116d0565b946020939093013593505050565b60008060006060848603121561172b57600080fd5b611734846116d0565b9250611742602085016116d0565b9150604084013590509250925092565b60006020828403121561176457600080fd5b5035919050565b60006020828403121561177d57600080fd5b6105b9826116d0565b6000806040838503121561179957600080fd5b823591506117a9602084016116d0565b90509250929050565b600080604083850312156117c557600080fd5b6117ce836116d0565b91506117a9602084016116d0565b600181811c908216806117f057607f821691505b602082108103611829577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b60006020828403121561184157600080fd5b5051919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b818103818111156104ea576104ea611848565b808201808211156104ea576104ea611848565b600083516118af818460208801611679565b8351908301906118c3818360208801611679565b01949350505050565b6000602082840312156118de57600080fd5b815180151581146105b957600080fd5b60008251611900818460208701611679565b919091019291505056fe456d6d65744c6971756964697479506f6f6c20726571756972657320726562616c616e63696e672e496e73756666696369656e7420456d6d65744c6971756964697479506f6f6c206c69717569646974792e496e73756666696369656e7420456d6d65744c5020746f6b656e7320746f207769746864726177a2646970667358221220fdbf82fae7fe5f96071f155bc6bf904056f6c16300042e3dfbecaa4b44b19f9164736f6c6343000818003352ba824bfabc2bcfcdf7f0edbb486ebb05e1836c90e78047efeb949990f72e5f";
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
