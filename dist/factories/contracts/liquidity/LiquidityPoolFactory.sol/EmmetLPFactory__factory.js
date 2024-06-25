"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmmetLPFactory__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "adderssBook_",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [],
        name: "addressBook",
        outputs: [
            {
                internalType: "contract IAddressBook",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "underlyingToken_",
                type: "address",
            },
        ],
        name: "createPool",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "batch",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "skip",
                type: "uint256",
            },
        ],
        name: "getPools",
        outputs: [
            {
                internalType: "uint256",
                name: "chainId",
                type: "uint256",
            },
            {
                components: [
                    {
                        internalType: "address",
                        name: "underlyingToken",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "lp",
                        type: "address",
                    },
                    {
                        internalType: "string",
                        name: "symbol",
                        type: "string",
                    },
                ],
                internalType: "struct EmmetLPFactory.Pool[]",
                name: "poolsData",
                type: "tuple[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "index",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "i",
                type: "uint256",
            },
        ],
        name: "indices",
        outputs: [
            {
                internalType: "address",
                name: "underlyingToken",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "underlyingToken",
                type: "address",
            },
        ],
        name: "pools",
        outputs: [
            {
                internalType: "address",
                name: "pool",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
const _bytecode = "0x60806040523480156200001157600080fd5b50604051620033a1380380620033a1833981016040819052620000349162000230565b6200006a816040518060400160405280600c81526020016b61646465727373426f6f6b5f60a01b8152506200010460201b60201c565b620000de8163c12b374b60e01b6040518060400160405280600c81526020016b61646465727373426f6f6b5f60a01b8152506040518060400160405280601d81526020017f6973206e6f7420612070726f706572206164647265737320626f6f6b2e0000008152506200015560201b60201c565b600080546001600160a01b0319166001600160a01b039290921691909117905562000314565b60408051808201909152601881527f657870656374656420746f206265206e6f6e207a65726f2e0000000000000000602082015262000151906001600160a01b03841615908390620001de565b5050565b6040516301ffc9a760e01b81526001600160e01b031984166004820152620001d8906001600160a01b038616906301ffc9a790602401602060405180830381865afa158015620001a9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001cf919062000262565b158383620001de565b50505050565b82156200022b578181604051602001620001fa929190620002ac565b60408051601f198184030181529082905262461bcd60e51b82526200022291600401620002df565b60405180910390fd5b505050565b6000602082840312156200024357600080fd5b81516001600160a01b03811681146200025b57600080fd5b9392505050565b6000602082840312156200027557600080fd5b815180151581146200025b57600080fd5b60005b83811015620002a357818101518382015260200162000289565b50506000910152565b60008351620002c081846020880162000286565b835190830190620002d681836020880162000286565b01949350505050565b60208152600082518060208401526200030081604085016020870162000286565b601f01601f19169190910160400192915050565b61307d80620003246000396000f3fe60806040523480156200001157600080fd5b50600436106200007b5760003560e01c8063a4063dbc1162000056578063a4063dbc14620000fb578063bbe958371462000127578063f5887cdd146200014e57600080fd5b80632986c0e514620000805780639049f9d2146200009d578063a1a953fd14620000b6575b600080fd5b6200008a60015481565b6040519081526020015b60405180910390f35b620000b4620000ae36600462000876565b62000162565b005b620000e2620000c73660046200089d565b6002602052600090815260409020546001600160a01b031681565b6040516001600160a01b03909116815260200162000094565b620000e26200010c36600462000876565b6003602052600090815260409020546001600160a01b031681565b6200013e62000138366004620008b7565b620004b1565b604051620000949291906200092e565b600054620000e2906001600160a01b031681565b620001a3816040518060400160405280601081526020017f756e6465726c79696e67546f6b656e5f0000000000000000000000000000000081525062000677565b620001e4816040518060400160405280601081526020017f756e6465726c79696e67546f6b656e5f00000000000000000000000000000000815250620006d2565b6001600160a01b038181166000908152600360205260409020541615620004ae576000816001600160a01b03166395d89b416040518163ffffffff1660e01b8152600401600060405180830381865afa15801562000246573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052620002709190810190620009fa565b905060008160405160200162000287919062000ab3565b60408051808303601f1901815290829052600080547f693ec85e00000000000000000000000000000000000000000000000000000000845260206004850152600b60248501527f456d6d65744272696467650000000000000000000000000000000000000000006044850152919350916001600160a01b039091169063693ec85e90606401602060405180830381865afa1580156200032a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000350919062000afa565b848460405160200162000364919062000b1a565b60405160208183030381529060405284604051620003829062000852565b62000391949392919062000b61565b604051809103906000f080158015620003ae573d6000803e3d6000fd5b506000546040517fa815ff150000000000000000000000000000000000000000000000000000000081529192506001600160a01b03169063a815ff1590620003fd908590859060040162000ba3565b600060405180830381600087803b1580156200041857600080fd5b505af11580156200042d573d6000803e3d6000fd5b505060018054925090506000620004448362000be6565b9091555050600154600090815260026020908152604080832080546001600160a01b03808a167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316811790935591855260039093529220805493909216921691909117905550505b50565b60006060600154831062000526576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f536b697020657863656564732073746f726564206172726179206c656e67746860448201526064015b60405180910390fd5b60015446925062000538848662000c21565b11156200055257826001546200054f919062000c3d565b93505b60008062000561868662000c21565b9050845b818110156200066d576000818152600260209081526040808320546001600160a01b0390811680855260038452828520548351606081018552828152921693820184905282517f95d89b4100000000000000000000000000000000000000000000000000000000815283519195929384019285926395d89b419260048082019392918290030181865afa15801562000601573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526200062b9190810190620009fa565b81525086868151811062000643576200064362000c53565b602002602001018190525084806200065b9062000be6565b95505060019092019150620005659050565b5050509250929050565b620006ce60006001600160a01b0316836001600160a01b031614826040518060400160405280601881526020017f657870656374656420746f206265206e6f6e207a65726f2e000000000000000081525062000735565b5050565b620006ce827f36372b0700000000000000000000000000000000000000000000000000000000836040518060400160405280601e81526020017f6973206e6f7420612070726f70657220455243323020636f6e7472616374000081525062000798565b8215620007935781816040516020016200075192919062000c69565b60408051601f19818403018152908290527f08c379a00000000000000000000000000000000000000000000000000000000082526200051d9160040162000c9c565b505050565b6040517f01ffc9a70000000000000000000000000000000000000000000000000000000081527fffffffff00000000000000000000000000000000000000000000000000000000841660048201526200084c906001600160a01b038616906301ffc9a790602401602060405180830381865afa1580156200081d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000843919062000cb1565b15838362000735565b50505050565b6123728062000cd683390190565b6001600160a01b0381168114620004ae57600080fd5b6000602082840312156200088957600080fd5b8135620008968162000860565b9392505050565b600060208284031215620008b057600080fd5b5035919050565b60008060408385031215620008cb57600080fd5b50508035926020909101359150565b60005b83811015620008f7578181015183820152602001620008dd565b50506000910152565b600081518084526200091a816020860160208601620008da565b601f01601f19169290920160200192915050565b6000604080830185845260206040818601528186518084526060935060608701915060608160051b88010183890160005b83811015620009d4578983037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa0018552815180516001600160a01b039081168552878201511687850152880151888401889052620009c08885018262000900565b95870195935050908501906001016200095f565b50909a9950505050505050505050565b634e487b7160e01b600052604160045260246000fd5b60006020828403121562000a0d57600080fd5b815167ffffffffffffffff8082111562000a2657600080fd5b818401915084601f83011262000a3b57600080fd5b81518181111562000a505762000a50620009e4565b604051601f8201601f19908116603f0116810190838211818310171562000a7b5762000a7b620009e4565b8160405282815287602084870101111562000a9557600080fd5b62000aa8836020830160208801620008da565b979650505050505050565b7f656c70000000000000000000000000000000000000000000000000000000000081526000825162000aed816003850160208701620008da565b9190910160030192915050565b60006020828403121562000b0d57600080fd5b8151620008968162000860565b7f577261707065642000000000000000000000000000000000000000000000000081526000825162000b54816008850160208701620008da565b9190910160080192915050565b60006001600160a01b0380871683528086166020840152506080604083015262000b8f608083018562000900565b828103606084015262000aa8818562000900565b60408152600062000bb8604083018562000900565b90506001600160a01b03831660208301529392505050565b634e487b7160e01b600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820362000c1a5762000c1a62000bd0565b5060010190565b8082018082111562000c375762000c3762000bd0565b92915050565b8181038181111562000c375762000c3762000bd0565b634e487b7160e01b600052603260045260246000fd5b6000835162000c7d818460208801620008da565b83519083019062000c93818360208801620008da565b01949350505050565b60208152600062000896602083018462000900565b60006020828403121562000cc457600080fd5b815180151581146200089657600080fdfe60a06040523480156200001157600080fd5b5060405162002372380380620023728339810160408190526200003491620006b6565b83600083836003620000478382620007d6565b506004620000568282620007d6565b506200006891506000905033620001b3565b50806200007a576200007a8262000266565b5050620000b2836040518060400160405280600c81526020016b7374616b6564546f6b656e5f60a01b8152506200037d60201b60201c565b620000e8836040518060400160405280600c81526020016b7374616b6564546f6b656e5f60a01b815250620003ce60201b60201c565b6200011e836040518060400160405280600c81526020016b7374616b6564546f6b656e5f60a01b8152506200041860201b60201c565b6001600160a01b03831660808190526040805163313ce56760e01b8152905163313ce567916004808201926020929091908290030181865afa15801562000169573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200018f9190620008a2565b600660146101000a81548160ff021916908360ff160217905550505050506200095a565b60008281526005602090815260408083206001600160a01b038516845290915281205460ff166200025c5760008381526005602090815260408083206001600160a01b03861684529091529020805460ff19166001179055620002133390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a450600162000260565b5060005b92915050565b6200029781604051806040016040528060078152602001666272696467655f60c81b8152506200037d60201b60201c565b620002c881604051806040016040528060078152602001666272696467655f60c81b815250620003ce60201b60201c565b6006546001600160a01b0316156200030457600654620003029060008051602062002352833981519152906001600160a01b031662000468565b505b6006546001600160a01b03166200032b6000805160206200235283398151915283620001b3565b50600680546001600160a01b0319166001600160a01b0384811691821790925560405190918316907faae9beddccf584528e87b66c6ff2563825c8a1433305b8a656e9b5f9bf39049990600090a35050565b60408051808201909152601881527f657870656374656420746f206265206e6f6e207a65726f2e00000000000000006020820152620003ca906001600160a01b03841615908390620004f1565b5050565b620003ca826001600160a01b03163b600014826040518060400160405280601281526020017134b9903737ba10309031b7b73a3930b1ba1760711b815250620004f160201b60201c565b620003ca826336372b0760e01b836040518060400160405280601e81526020017f6973206e6f7420612070726f70657220455243323020636f6e747261637400008152506200054360201b60201c565b60008281526005602090815260408083206001600160a01b038516845290915281205460ff16156200025c5760008381526005602090815260408083206001600160a01b0386168085529252808320805460ff1916905551339286917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a450600162000260565b82156200053e5781816040516020016200050d929190620008ce565b60408051601f198184030181529082905262461bcd60e51b8252620005359160040162000901565b60405180910390fd5b505050565b6040516301ffc9a760e01b81526001600160e01b031984166004820152620005c6906001600160a01b038616906301ffc9a790602401602060405180830381865afa15801562000597573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620005bd919062000936565b158383620004f1565b50505050565b80516001600160a01b0381168114620005e457600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60005b838110156200061c57818101518382015260200162000602565b50506000910152565b600082601f8301126200063757600080fd5b81516001600160401b0380821115620006545762000654620005e9565b604051601f8301601f19908116603f011681019082821181831017156200067f576200067f620005e9565b816040528381528660208588010111156200069957600080fd5b620006ac846020830160208901620005ff565b9695505050505050565b60008060008060808587031215620006cd57600080fd5b620006d885620005cc565b9350620006e860208601620005cc565b60408601519093506001600160401b03808211156200070657600080fd5b620007148883890162000625565b935060608701519150808211156200072b57600080fd5b506200073a8782880162000625565b91505092959194509250565b600181811c908216806200075b57607f821691505b6020821081036200077c57634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200053e576000816000526020600020601f850160051c81016020861015620007ad5750805b601f850160051c820191505b81811015620007ce57828155600101620007b9565b505050505050565b81516001600160401b03811115620007f257620007f2620005e9565b6200080a8162000803845462000746565b8462000782565b602080601f831160018114620008425760008415620008295750858301515b600019600386901b1c1916600185901b178555620007ce565b600085815260208120601f198616915b82811015620008735788860151825594840194600190910190840162000852565b5085821015620008925787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b600060208284031215620008b557600080fd5b815160ff81168114620008c757600080fd5b9392505050565b60008351620008e2818460208801620005ff565b835190830190620008f8818360208801620005ff565b01949350505050565b602081526000825180602084015262000922816040850160208701620005ff565b601f01601f19169190910160400192915050565b6000602082840312156200094957600080fd5b81518015158114620008c757600080fd5b6080516119b962000999600039600081816103ab015281816106780152818161075f0152818161086101528181610a0b0152610aaa01526119b96000f3fe608060405234801561001057600080fd5b50600436106101a35760003560e01c806370a08231116100ee578063a9059cbb11610097578063d547741f11610071578063d547741f146103e5578063dd62ed3e146103f8578063e78cea9214610431578063f40d71f11461044457600080fd5b8063a9059cbb1461036c578063b5bfddea1461037f578063cc7a262e146103a657600080fd5b806391d14854116100c857806391d148541461032357806395d89b411461035c578063a217fddf1461036457600080fd5b806370a08231146102de5780637547c7a314610307578063817b1cd21461031a57600080fd5b80632647620411610150578063315a095d1161012a578063315a095d146102a557806336568abe146102b85780636eb38212146102cb57600080fd5b806326476204146102405780632f2ff15d14610260578063313ce5671461027557600080fd5b806318160ddd1161018157806318160ddd146101f857806323b872dd1461020a578063248a9ca31461021d57600080fd5b806301ffc9a7146101a857806306fdde03146101d0578063095ea7b3146101e5575b600080fd5b6101bb6101b6366004611637565b610457565b60405190151581526020015b60405180910390f35b6101d86104f0565b6040516101c7919061169d565b6101bb6101f33660046116ec565b610582565b6002545b6040519081526020016101c7565b6101bb610218366004611716565b61059a565b6101fc61022b366004611752565b60009081526005602052604090206001015490565b6101fc61024e36600461176b565b60086020526000908152604090205481565b61027361026e366004611786565b6105c0565b005b60065474010000000000000000000000000000000000000000900460ff1660405160ff90911681526020016101c7565b6102736102b3366004611752565b6105eb565b6102736102c6366004611786565b6107c3565b6102736102d936600461176b565b610814565b6101fc6102ec36600461176b565b6001600160a01b031660009081526020819052604090205490565b610273610315366004611752565b61082c565b6101fc60075481565b6101bb610331366004611786565b60009182526005602090815260408084206001600160a01b0393909316845291905290205460ff1690565b6101d8610906565b6101fc600081565b6101bb61037a3660046116ec565b610915565b6101fc7f52ba824bfabc2bcfcdf7f0edbb486ebb05e1836c90e78047efeb949990f72e5f81565b6103cd7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016101c7565b6102736103f3366004611786565b610923565b6101fc6104063660046117b2565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6006546103cd906001600160a01b031681565b6102736104523660046116ec565b610948565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f7965db0b0000000000000000000000000000000000000000000000000000000014806104ea57507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b6060600380546104ff906117dc565b80601f016020809104026020016040519081016040528092919081815260200182805461052b906117dc565b80156105785780601f1061054d57610100808354040283529160200191610578565b820191906000526020600020905b81548152906001019060200180831161055b57829003601f168201915b5050505050905090565b600033610590818585610b09565b5060019392505050565b6000336105a8858285610b16565b6105b3858585610bca565b60019150505b9392505050565b6000828152600560205260409020600101546105db81610c5b565b6105e58383610c68565b50505050565b6106138160405180604001604052806006815260200165185b5bdd5b9d60d21b815250610d16565b33600090815260208190526040902054610646908260405180606001604052806027815260200161195d60279139610d59565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015261070a907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156106c7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106eb919061182f565b8260405180606001604052806028815260200161190b60289139610d59565b3360009081526008602052604081208054839290610729908490611877565b9250508190555080600760008282546107429190611877565b9091555061075290503382610d95565b6107866001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000163383610de4565b60408051338152602081018390527f7084f5476618d8e60b11ef0d7d3f06914655adb8793e28ff7f018d4c76d505d591015b60405180910390a150565b6001600160a01b0381163314610805576040517f6697b23200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61080f8282610e58565b505050565b600061081f81610c5b565b61082882610edf565b5050565b6108548160405180604001604052806006815260200165185b5bdd5b9d60d21b815250610d16565b6108896001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333084611047565b6108933382611080565b33600090815260086020526040812080548392906108b290849061188a565b9250508190555080600760008282546108cb919061188a565b909155505060408051338152602081018390527f9e71bc8eea02a63969f509818f2dafb9254532904319f9dbda79b67bd34a5f3d91016107b8565b6060600480546104ff906117dc565b600033610590818585610bca565b60008281526005602052604090206001015461093e81610c5b565b6105e58383610e58565b7f52ba824bfabc2bcfcdf7f0edbb486ebb05e1836c90e78047efeb949990f72e5f61097281610c5b565b6109b1836040518060400160405280600281526020017f746f0000000000000000000000000000000000000000000000000000000000008152506110cf565b6109d98260405180604001604052806006815260200165185b5bdd5b9d60d21b815250610d16565b6040517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152610a9d907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015610a5a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a7e919061182f565b836040518060600160405280602a8152602001611933602a9139610d59565b610ad16001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168484610de4565b6040518281527f3341a9b985bece02d04644789b3748c3a086c6ea28160798bacc57fb168ef0b09060200160405180910390a1505050565b61080f8383836001611124565b6001600160a01b038381166000908152600160209081526040808320938616835292905220547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146105e55781811015610bbb576040517ffb8f41b20000000000000000000000000000000000000000000000000000000081526001600160a01b038416600482015260248101829052604481018390526064015b60405180910390fd5b6105e584848484036000611124565b6001600160a01b038316610c0d576040517f96c6fd1e00000000000000000000000000000000000000000000000000000000815260006004820152602401610bb2565b6001600160a01b038216610c50576040517fec442f0500000000000000000000000000000000000000000000000000000000815260006004820152602401610bb2565b61080f83838361122b565b610c65813361136e565b50565b60008281526005602090815260408083206001600160a01b038516845290915281205460ff16610d0e5760008381526005602090815260408083206001600160a01b03861684529091529020805460ff19166001179055610cc63390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45060016104ea565b5060006104ea565b61082882600014826040518060400160405280601381526020017f73686f756c64206e6f74206265207a65726f2e000000000000000000000000008152506113dc565b8183101561080f57806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bb2919061169d565b6001600160a01b038216610dd8576040517f96c6fd1e00000000000000000000000000000000000000000000000000000000815260006004820152602401610bb2565b6108288260008361122b565b6040516001600160a01b0383811660248301526044820183905261080f91859182169063a9059cbb906064015b604051602081830303815290604052915060e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050611435565b60008281526005602090815260408083206001600160a01b038516845290915281205460ff1615610d0e5760008381526005602090815260408083206001600160a01b0386168085529252808320805460ff1916905551339286917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45060016104ea565b610f1e816040518060400160405280600781526020017f6272696467655f000000000000000000000000000000000000000000000000008152506110cf565b610f5d816040518060400160405280600781526020017f6272696467655f000000000000000000000000000000000000000000000000008152506114b1565b6006546001600160a01b031615610fa757600654610fa5907f52ba824bfabc2bcfcdf7f0edbb486ebb05e1836c90e78047efeb949990f72e5f906001600160a01b0316610e58565b505b6006546001600160a01b0316610fdd7f52ba824bfabc2bcfcdf7f0edbb486ebb05e1836c90e78047efeb949990f72e5f83610c68565b50600680547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0384811691821790925560405190918316907faae9beddccf584528e87b66c6ff2563825c8a1433305b8a656e9b5f9bf39049990600090a35050565b6040516001600160a01b0384811660248301528381166044830152606482018390526105e59186918216906323b872dd90608401610e11565b6001600160a01b0382166110c3576040517fec442f0500000000000000000000000000000000000000000000000000000000815260006004820152602401610bb2565b6108286000838361122b565b61082860006001600160a01b0316836001600160a01b031614826040518060400160405280601881526020017f657870656374656420746f206265206e6f6e207a65726f2e00000000000000008152506113dc565b6001600160a01b038416611167576040517fe602df0500000000000000000000000000000000000000000000000000000000815260006004820152602401610bb2565b6001600160a01b0383166111aa576040517f94280d6200000000000000000000000000000000000000000000000000000000815260006004820152602401610bb2565b6001600160a01b03808516600090815260016020908152604080832093871683529290522082905580156105e557826001600160a01b0316846001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258460405161121d91815260200190565b60405180910390a350505050565b6001600160a01b03831661125657806002600082825461124b919061188a565b909155506112e19050565b6001600160a01b038316600090815260208190526040902054818110156112c2576040517fe450d38c0000000000000000000000000000000000000000000000000000000081526001600160a01b03851660048201526024810182905260448101839052606401610bb2565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b0382166112fd5760028054829003905561131c565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161136191815260200190565b60405180910390a3505050565b60008281526005602090815260408083206001600160a01b038516845290915290205460ff16610828576040517fe2517d3f0000000000000000000000000000000000000000000000000000000081526001600160a01b038216600482015260248101839052604401610bb2565b821561080f5781816040516020016113f592919061189d565b60408051601f19818403018152908290527f08c379a0000000000000000000000000000000000000000000000000000000008252610bb29160040161169d565b600061144a6001600160a01b038416836114fe565b9050805160001415801561146f57508080602001905181019061146d91906118cc565b155b1561080f576040517f5274afe70000000000000000000000000000000000000000000000000000000081526001600160a01b0384166004820152602401610bb2565b610828826001600160a01b03163b600014826040518060400160405280601281526020017f6973206e6f74206120636f6e74726163742e00000000000000000000000000008152506113dc565b60606105b98383600084600080856001600160a01b0316848660405161152491906118ee565b60006040518083038185875af1925050503d8060008114611561576040519150601f19603f3d011682016040523d82523d6000602084013e611566565b606091505b5091509150611576868383611580565b9695505050505050565b60608261159557611590826115f5565b6105b9565b81511580156115ac57506001600160a01b0384163b155b156115ee576040517f9996b3150000000000000000000000000000000000000000000000000000000081526001600160a01b0385166004820152602401610bb2565b50806105b9565b8051156116055780518082602001fd5b6040517f1425ea4200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006020828403121561164957600080fd5b81357fffffffff00000000000000000000000000000000000000000000000000000000811681146105b957600080fd5b60005b8381101561169457818101518382015260200161167c565b50506000910152565b60208152600082518060208401526116bc816040850160208701611679565b601f01601f19169190910160400192915050565b80356001600160a01b03811681146116e757600080fd5b919050565b600080604083850312156116ff57600080fd5b611708836116d0565b946020939093013593505050565b60008060006060848603121561172b57600080fd5b611734846116d0565b9250611742602085016116d0565b9150604084013590509250925092565b60006020828403121561176457600080fd5b5035919050565b60006020828403121561177d57600080fd5b6105b9826116d0565b6000806040838503121561179957600080fd5b823591506117a9602084016116d0565b90509250929050565b600080604083850312156117c557600080fd5b6117ce836116d0565b91506117a9602084016116d0565b600181811c908216806117f057607f821691505b602082108103611829577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b60006020828403121561184157600080fd5b5051919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b818103818111156104ea576104ea611848565b808201808211156104ea576104ea611848565b600083516118af818460208801611679565b8351908301906118c3818360208801611679565b01949350505050565b6000602082840312156118de57600080fd5b815180151581146105b957600080fd5b60008251611900818460208701611679565b919091019291505056fe456d6d65744c6971756964697479506f6f6c20726571756972657320726562616c616e63696e672e496e73756666696369656e7420456d6d65744c6971756964697479506f6f6c206c69717569646974792e496e73756666696369656e7420456d6d65744c5020746f6b656e7320746f207769746864726177a2646970667358221220fdbf82fae7fe5f96071f155bc6bf904056f6c16300042e3dfbecaa4b44b19f9164736f6c6343000818003352ba824bfabc2bcfcdf7f0edbb486ebb05e1836c90e78047efeb949990f72e5fa26469706673582212202056f47e834e17f9b5cff0b4991010671cd63d85d56f8c2841d1543c8793f6be64736f6c63430008180033";
const isSuperArgs = (xs) => xs.length > 1;
class EmmetLPFactory__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    getDeployTransaction(adderssBook_, overrides) {
        return super.getDeployTransaction(adderssBook_, overrides || {});
    }
    deploy(adderssBook_, overrides) {
        return super.deploy(adderssBook_, overrides || {});
    }
    connect(runner) {
        return super.connect(runner);
    }
    static createInterface() {
        return new ethers_1.Interface(_abi);
    }
    static connect(address, runner) {
        return new ethers_1.Contract(address, _abi, runner);
    }
}
exports.EmmetLPFactory__factory = EmmetLPFactory__factory;
EmmetLPFactory__factory.bytecode = _bytecode;
EmmetLPFactory__factory.abi = _abi;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW1tZXRMUEZhY3RvcnlfX2ZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvZmFjdG9yaWVzL2NvbnRyYWN0cy9saXF1aWRpdHkvTGlxdWlkaXR5UG9vbEZhY3Rvcnkuc29sL0VtbWV0TFBGYWN0b3J5X19mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLCtDQUErQztBQUMvQyxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG1DQUtnQjtBQWFoQixNQUFNLElBQUksR0FBRztJQUNYO1FBQ0UsTUFBTSxFQUFFO1lBQ047Z0JBQ0UsWUFBWSxFQUFFLFNBQVM7Z0JBQ3ZCLElBQUksRUFBRSxjQUFjO2dCQUNwQixJQUFJLEVBQUUsU0FBUzthQUNoQjtTQUNGO1FBQ0QsZUFBZSxFQUFFLFlBQVk7UUFDN0IsSUFBSSxFQUFFLGFBQWE7S0FDcEI7SUFDRDtRQUNFLE1BQU0sRUFBRSxFQUFFO1FBQ1YsSUFBSSxFQUFFLGFBQWE7UUFDbkIsT0FBTyxFQUFFO1lBQ1A7Z0JBQ0UsWUFBWSxFQUFFLHVCQUF1QjtnQkFDckMsSUFBSSxFQUFFLEVBQUU7Z0JBQ1IsSUFBSSxFQUFFLFNBQVM7YUFDaEI7U0FDRjtRQUNELGVBQWUsRUFBRSxNQUFNO1FBQ3ZCLElBQUksRUFBRSxVQUFVO0tBQ2pCO0lBQ0Q7UUFDRSxNQUFNLEVBQUU7WUFDTjtnQkFDRSxZQUFZLEVBQUUsU0FBUztnQkFDdkIsSUFBSSxFQUFFLGtCQUFrQjtnQkFDeEIsSUFBSSxFQUFFLFNBQVM7YUFDaEI7U0FDRjtRQUNELElBQUksRUFBRSxZQUFZO1FBQ2xCLE9BQU8sRUFBRSxFQUFFO1FBQ1gsZUFBZSxFQUFFLFlBQVk7UUFDN0IsSUFBSSxFQUFFLFVBQVU7S0FDakI7SUFDRDtRQUNFLE1BQU0sRUFBRTtZQUNOO2dCQUNFLFlBQVksRUFBRSxTQUFTO2dCQUN2QixJQUFJLEVBQUUsT0FBTztnQkFDYixJQUFJLEVBQUUsU0FBUzthQUNo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