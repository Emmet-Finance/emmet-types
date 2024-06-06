import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, BigNumberish, AddressLike, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type { EmmetMultisigV1, EmmetMultisigV1Interface } from "../../../contracts/multisig/EmmetMultisigV1";
type EmmetMultisigV1ConstructorParams = [linkLibraryAddresses: EmmetMultisigV1LibraryAddresses, signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class EmmetMultisigV1__factory extends ContractFactory {
    constructor(...args: EmmetMultisigV1ConstructorParams);
    static linkBytecode(linkLibraryAddresses: EmmetMultisigV1LibraryAddresses): string;
    getDeployTransaction(emmetToken_: AddressLike, minStake_: BigNumberish, proposeReward_: BigNumberish, signReward_: BigNumberish, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(emmetToken_: AddressLike, minStake_: BigNumberish, proposeReward_: BigNumberish, signReward_: BigNumberish, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<EmmetMultisigV1 & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): EmmetMultisigV1__factory;
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b50604051620026193803806200261983398101604081905262000034916200017d565b6200004160003362000082565b506200004c62000131565b6001600160a01b0390931660805260029190915560006005556001600160801b03918216600160801b0291161760015562000248565b6000828152602081815260408083206001600160a01b038516845290915281205460ff1662000127576000838152602081815260408083206001600160a01b03861684529091529020805460ff19166001179055620000de3390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45060016200012b565b5060005b92915050565b6003805462000142906002620001f5565b6200014e91906200020f565b6200015b90600162000232565b600455565b80516001600160801b03811681146200017857600080fd5b919050565b600080600080608085870312156200019457600080fd5b84516001600160a01b0381168114620001ac57600080fd5b60208601519094509250620001c46040860162000160565b9150620001d46060860162000160565b905092959194509250565b634e487b7160e01b600052601160045260246000fd5b80820281158282048414176200012b576200012b620001df565b6000826200022d57634e487b7160e01b600052601260045260246000fd5b500490565b808201808211156200012b576200012b620001df565b60805161239262000287600039600081816103830152818161078801528181610be201528181610cad01528181610d810152610f2901526123926000f3fe608060405234801561001057600080fd5b50600436106101c45760003560e01c8063854f5476116100f9578063b88a802f11610097578063d1a6264811610071578063d1a626481461047b578063d547741f14610484578063ecdfa82314610497578063f2d1597c146104aa57600080fd5b8063b88a802f146103f6578063cc7a5e45146103fe578063d1061fef1461043c57600080fd5b8063a1ebf35d116100d3578063a1ebf35d146103bd578063a217fddf146103d2578063a694fc3a146103da578063affed0e0146103ed57600080fd5b8063854f54761461035857806391d148541461036b578063980637361461037e57600080fd5b80632def662011610166578063375b3c0a11610140578063375b3c0a1461030457806342cde4e81461030d578063501895ae14610316578063642f2eaf1461033657600080fd5b80632def6620146102d45780632f2ff15d146102de57806336568abe146102f157600080fd5b80631476b72d116101a25780631476b72d1461023257806316934fc414610252578063248a9ca31461027257806329f69ca31461029557600080fd5b8063016eb06d146101c957806301ffc9a7146101ef5780630700037d14610212575b600080fd5b6101dc6101d7366004611738565b6104b2565b6040519081526020015b60405180910390f35b6102026101fd366004611783565b6105e0565b60405190151581526020016101e6565b6101dc6102203660046117d0565b60076020526000908152604090205481565b6102456102403660046118f6565b610617565b6040516101e69190611a1d565b6101dc6102603660046117d0565b60096020526000908152604090205481565b6101dc610280366004611a30565b60009081526020819052604090206001015490565b6102026102a3366004611a49565b600b602090815260009283526040909220815180830184018051928152908401929093019190912091525460ff1681565b6102dc6106ae565b005b6102dc6102ec366004611a98565b61083a565b6102dc6102ff366004611a98565b610865565b6101dc60025481565b6101dc60045481565b6101dc610324366004611a30565b60066020526000908152604090205481565b610349610344366004611a30565b61089d565b6040516101e693929190611ac4565b6102dc610366366004611aef565b61094b565b610202610379366004611a98565b610b9c565b6103a57f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016101e6565b6101dc60008051602061233d83398151915281565b6101dc600081565b6102dc6103e8366004611a30565b610bc5565b6101dc60055481565b6102dc610edf565b60015461041c906001600160801b0380821691600160801b90041682565b604080516001600160801b039384168152929091166020830152016101e6565b61046661044a3660046117d0565b6008602052600090815260409020805460019091015460ff1682565b604080519283529015156020830152016101e6565b6101dc60035481565b6102dc610492366004611a98565b610feb565b6102dc6104a5366004611b7c565b611010565b6102dc6113e5565b60008073__$ae9ca36ff49d726667b1c8a20fee8a6bb8$__6380e1603186866040518363ffffffff1660e01b81526004016104ee929190611c4e565b600060405180830381865af415801561050b573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526105339190810190611cc5565b905073__$dbe595de12c18a29f8dc50ae58041c340e$__6366492e5782600001518360200151846040015187866060015187608001518860a001518960c001516040518963ffffffff1660e01b8152600401610596989796959493929190611dc9565b602060405180830381865af41580156105b3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105d79190611e4d565b95945050505050565b60006001600160e01b03198216637965db0b60e01b148061061157506301ffc9a760e01b6001600160e01b03198316145b92915050565b604051635aa7e78960e01b815260609073__$ae9ca36ff49d726667b1c8a20fee8a6bb8$__90635aa7e7899061065d908b908b908b908b908b908b908b90600401611e66565b600060405180830381865af415801561067a573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526106a29190810190611ee0565b98975050505050505050565b3360009081526009602052604081205490819003610704576040516307319dc160e11b815260206004820152600d60248201526c14dd185ad95908185b5bdd5b9d609a1b60448201526064015b60405180910390fd5b3360008181526009602052604081205561072d9060008051602061233d83398151915290610b9c565b1561076c5761074a60008051602061233d833981519152336114f8565b5060016003600082825461075e9190611f3e565b9091555061076c905061156b565b60405163a9059cbb60e01b8152336004820152602481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063a9059cbb906044016020604051808303816000875af11580156107d9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107fd9190611f51565b5060408051338152602081018390527f0f5bb82176feb1b5e747e28471aa92156a04d9f3ab9f45f28e2d704232b93f75910160405180910390a150565b60008281526020819052604090206001015461085581611594565b61085f838361159e565b50505050565b6001600160a01b038116331461088e5760405163334bd91960e11b815260040160405180910390fd5b61089882826114f8565b505050565b600a60205260009081526040902080546003820180549192916108bf90611f73565b80601f01602080910402602001604051908101604052809291908181526020018280546108eb90611f73565b80156109385780601f1061090d57610100808354040283529160200191610938565b820191906000526020600020905b81548152906001019060200180831161091b57829003601f168201915b5050506004909301549192505060ff1683565b60008051602061233d83398151915261096381611594565b6040516380e1603160e01b815260009073__$ae9ca36ff49d726667b1c8a20fee8a6bb8$__906380e160319061099f9089908990600401611c4e565b600060405180830381865af41580156109bc573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526109e49190810190611cc5565b6005805491925060006109f683611fad565b91905055506000610a0a87876005546104b2565b82516001600160401b03166000908152600b60205260409081902060c0850151915192935091610a3a9190611fc6565b9081526040519081900360200190205460ff1680610a6557506000818152600a602052604090205415155b15610a8c57815160c0830151604051630f7dc1d360e11b81526106fb929190600401611fe2565b6000818152600a60205260409020610aa681838888611628565b60c08301516003820190610aba9082612054565b50600554600090815260066020908152604080832085905585516001600160401b03168352600b9091529081902060c08501519151600192610afb91611fc6565b9081526040805160209281900383019020805460ff191693151593909317909255600154336000908152600790925291812080546001600160801b0390931692909190610b49908490612113565b909155505060055460c08401516040517f4b2bf9c60319edafd0bb04f9d808866e64e064acec75d4151e1f1f29a7b545a392610b8a9286928d918d91612126565b60405180910390a15050505050505050565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b604051636eb1769f60e11b815233600482015230602482015281907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063dd62ed3e90604401602060405180830381865afa158015610c31573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c559190611e4d565b1015610c96576040516307319dc160e11b815260206004820152600f60248201526e454d4d455420416c6c6f77616e636560881b60448201526064016106fb565b6040516370a0823160e01b815233600482015281907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015610cfc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d209190611e4d565b1015610d5f576040516307319dc160e11b815260206004820152600d60248201526c454d4d45542042616c616e636560981b60448201526064016106fb565b6040516323b872dd60e01b8152336004820152306024820152604481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af1158015610dd2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610df69190611f51565b503360009081526009602052604081208054839290610e16908490612113565b909155505060408051338152602081018390527f9e71bc8eea02a63969f509818f2dafb9254532904319f9dbda79b67bd34a5f3d910160405180910390a16002543360009081526009602052604090205410801590610e8a5750610e8860008051602061233d83398151915233610b9c565b155b15610edc57604051806040016040528042603c610ea79190612113565b81526001602091820181905233600090815260088352604090208351815592909101519101805460ff19169115159190911790555b50565b60008051602061233d833981519152610ef781611594565b336000908152600760205260409020548015610f9e5760405163a9059cbb60e01b8152336004820152602481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063a9059cbb906044016020604051808303816000875af1158015610f7a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108989190611f51565b6040516307319dc160e11b815260206004820152601e60248201527f20616d6f756e74206f66207265776172647320746f207769746864726177000060448201526064016106fb565b5050565b60008281526020819052604090206001015461100681611594565b61085f83836114f8565b60008051602061233d83398151915261102881611594565b8761103485858a6104b2565b146110825760405163b5e1dc2d60e01b815260206004820152601c60248201527f4461746120616e642074784861736820646f206e6f74206d617463680000000060448201526064016106fb565b60008781526006602052604090205488146110e05760405163b5e1dc2d60e01b815260206004820152601b60248201527f69645f20646f6573206e6f74206d61746368207468652068617368000000000060448201526064016106fb565b6040516380e1603160e01b815260009073__$ae9ca36ff49d726667b1c8a20fee8a6bb8$__906380e160319061111c9088908890600401611c4e565b600060405180830381865af4158015611139573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526111619190810190611cc5565b80516001600160401b03166000908152600b60205260409081902060c08301519151929350916111919190611fc6565b9081526040519081900360200190205460ff1615806111bc57506000898152600a6020526040902054155b156112035760405163b5e1dc2d60e01b81526020600482015260166024820152752ab7383937b837b9b2b2103a3930b739b0b1ba34b7b760511b60448201526064016106fb565b6000898152600a60205260409020600481015460ff161561125e5760405163b5e1dc2d60e01b8152602060048201526014602482015273151608185b1c9958591e48199a5b985b1a5e995960621b60448201526064016106fb565b60005b600282015481101561132d57888051906020012082600201828154811061128a5761128a612158565b906000526020600020016040516112a1919061216e565b60405180910390200361132557604080518c81523360208201527f56fdd76edc867b2630e595ceaa0d4fcc88bd88e66081eb89aa8dcf146250e4a2910160405180910390a160405163b5e1dc2d60e01b81526020600482015260136024820152724475706c6963617465207369676e617475726560681b60448201526064016106fb565b600101611261565b5061133a818b898b611628565b6004548154106113d957600481018054600160ff199091168117909155543360009081526007602052604081208054600160801b9093046001600160801b031692909190611389908490612113565b90915550506040517f1f4d4ff517e3a27e4a4d3e8b162d44a5697c89eaec80829229ddcc3329b812b9906113d0908c9087908a908a908f90600289019060018a01906122a9565b60405180910390a15b50505050505050505050565b336000908152600860205260409020600181015460ff1661143a5760405163b5e1dc2d60e01b815260206004820152600e60248201526d29ba34b636103832b73234b7339760911b60448201526064016106fb565b805442101561147c576040516307319dc160e11b815260206004820152600d60248201526c2a34b6b29032b630b839b2b21760991b60448201526064016106fb565b61149460008051602061233d8339815191523361159e565b506040513381527fffafe5c39be83f4bcf20d7e1a150f6e21c1858ea0948315ba84b6b1c386d45bb9060200160405180910390a16001808201805460ff19169055428255600380546000906114ea908490612113565b90915550610edc905061156b565b60006115048383610b9c565b15611563576000838152602081815260408083206001600160a01b0386168085529252808320805460ff1916905551339286917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a4506001610611565b506000610611565b6003805461157a906002612303565b611584919061231a565b61158f906001612113565b600455565b610edc81336116b7565b60006115aa8383610b9c565b611563576000838152602081815260408083206001600160a01b03861684529091529020805460ff191660011790556115e03390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a4506001610611565b835484600061163683611fad565b9091555050600284018054600181018255600091825260209091200161165c8282612054565b506001808501805491820181556000908152602090200161167d8382612054565b506040518381527f15ed1d396993dbd64465b8a61e9b514e52180afba879998b6036176387df2c0d9060200160405180910390a150505050565b6116c18282610b9c565b610fe75760405163e2517d3f60e01b81526001600160a01b0382166004820152602481018390526044016106fb565b60008083601f84011261170257600080fd5b5081356001600160401b0381111561171957600080fd5b60208301915083602082850101111561173157600080fd5b9250929050565b60008060006040848603121561174d57600080fd5b83356001600160401b0381111561176357600080fd5b61176f868287016116f0565b909790965060209590950135949350505050565b60006020828403121561179557600080fd5b81356001600160e01b0319811681146117ad57600080fd5b9392505050565b80356001600160a01b03811681146117cb57600080fd5b919050565b6000602082840312156117e257600080fd5b6117ad826117b4565b6001600160401b0381168114610edc57600080fd5b80356117cb816117eb565b634e487b7160e01b600052604160045260246000fd5b60405160e081016001600160401b03811182821017156118435761184361180b565b60405290565b604051601f8201601f191681016001600160401b03811182821017156118715761187161180b565b604052919050565b60006001600160401b038211156118925761189261180b565b50601f01601f191660200190565b600082601f8301126118b157600080fd5b81356118c46118bf82611879565b611849565b8181528460208386010111156118d957600080fd5b816020850160208301376000918101602001919091529392505050565b600080600080600080600060e0888a03121561191157600080fd5b61191a88611800565b965061192860208901611800565b95506040880135945060608801356001600160401b038082111561194b57600080fd5b6119578b838c016118a0565b955060808a013591508082111561196d57600080fd5b6119798b838c016118a0565b945060a08a013591508082111561198f57600080fd5b61199b8b838c016118a0565b935060c08a01359150808211156119b157600080fd5b506119be8a828b016118a0565b91505092959891949750929550565b60005b838110156119e85781810151838201526020016119d0565b50506000910152565b60008151808452611a098160208601602086016119cd565b601f01601f19169290920160200192915050565b6020815260006117ad60208301846119f1565b600060208284031215611a4257600080fd5b5035919050565b60008060408385031215611a5c57600080fd5b8235611a67816117eb565b915060208301356001600160401b03811115611a8257600080fd5b611a8e858286016118a0565b9150509250929050565b60008060408385031215611aab57600080fd5b82359150611abb602084016117b4565b90509250929050565b838152606060208201526000611add60608301856119f1565b90508215156040830152949350505050565b60008060008060608587031215611b0557600080fd5b84356001600160401b0380821115611b1c57600080fd5b611b28888389016116f0565b90965094506020870135915080821115611b4157600080fd5b611b4d888389016118a0565b93506040870135915080821115611b6357600080fd5b50611b70878288016118a0565b91505092959194509250565b600080600080600080600060c0888a031215611b9757600080fd5b873596506020880135955060408801356001600160401b0380821115611bbc57600080fd5b611bc88b838c016118a0565b965060608a0135915080821115611bde57600080fd5b611bea8b838c016118a0565b955060808a0135915080821115611c0057600080fd5b611c0c8b838c016116f0565b909550935060a08a01359150808211156119b157600080fd5b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b602081526000611c62602083018486611c25565b949350505050565b80516117cb816117eb565b6000611c836118bf84611879565b9050828152838383011115611c9757600080fd5b6117ad8360208301846119cd565b600082601f830112611cb657600080fd5b6117ad83835160208501611c75565b600060208284031215611cd757600080fd5b81516001600160401b0380821115611cee57600080fd5b9083019060e08286031215611d0257600080fd5b611d0a611821565b611d1383611c6a565b8152611d2160208401611c6a565b602082015260408301516040820152606083015182811115611d4257600080fd5b611d4e87828601611ca5565b606083015250608083015182811115611d6657600080fd5b611d7287828601611ca5565b60808301525060a083015182811115611d8a57600080fd5b611d9687828601611ca5565b60a08301525060c083015182811115611dae57600080fd5b611dba87828601611ca5565b60c08301525095945050505050565b60006101006001600160401b03808c168452808b16602085015250886040840152876060840152806080840152611e02818401886119f1565b905082810360a0840152611e1681876119f1565b905082810360c0840152611e2a81866119f1565b905082810360e0840152611e3e81856119f1565b9b9a5050505050505050505050565b600060208284031215611e5f57600080fd5b5051919050565b60006001600160401b03808a16835280891660208401525086604083015260e06060830152611e9860e08301876119f1565b8281036080840152611eaa81876119f1565b905082810360a0840152611ebe81866119f1565b905082810360c0840152611ed281856119f1565b9a9950505050505050505050565b600060208284031215611ef257600080fd5b81516001600160401b03811115611f0857600080fd5b8201601f81018413611f1957600080fd5b611c6284825160208401611c75565b634e487b7160e01b600052601160045260246000fd5b8181038181111561061157610611611f28565b600060208284031215611f6357600080fd5b815180151581146117ad57600080fd5b600181811c90821680611f8757607f821691505b602082108103611fa757634e487b7160e01b600052602260045260246000fd5b50919050565b600060018201611fbf57611fbf611f28565b5060010190565b60008251611fd88184602087016119cd565b9190910192915050565b6001600160401b0383168152604060208201526000611c6260408301846119f1565b601f821115610898576000816000526020600020601f850160051c8101602086101561202d5750805b601f850160051c820191505b8181101561204c57828155600101612039565b505050505050565b81516001600160401b0381111561206d5761206d61180b565b6120818161207b8454611f73565b84612004565b602080601f8311600181146120b6576000841561209e5750858301515b600019600386901b1c1916600185901b17855561204c565b600085815260208120601f198616915b828110156120e5578886015182559484019460019091019084016120c6565b50858210156121035787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b8082018082111561061157610611611f28565b858152846020820152608060408201526000612146608083018587611c25565b82810360608401526106a281856119f1565b634e487b7160e01b600052603260045260246000fd5b600080835461217c81611f73565b6001828116801561219457600181146121a9576121d8565b60ff19841687528215158302870194506121d8565b8760005260208060002060005b858110156121cf5781548a8201529084019082016121b6565b50505082870194505b50929695505050505050565b6000828254808552602080860195506005818360051b8501016000878152838120815b8681101561229a57601f19888503018b5282825461222481611f73565b8087526001828116801561223f576001811461225857612283565b60ff198416898c01528215158a1b89018b019450612283565b8688528a8820885b8481101561227b5781548b82018e0152908301908c01612260565b8a018c019550505b509d89019d92965050509190910190600101612207565b50919998505050505050505050565b87815260c0602082015260006122c260c08301896119f1565b82810360408401526122d581888a611c25565b905085606084015282810360808401526122ef81866121e4565b905082810360a0840152611ed281856121e4565b808202811582820484141761061157610611611f28565b60008261233757634e487b7160e01b600052601260045260246000fd5b50049056fee2f4eaae4a9751e85a3e4a7b9587827a877f29914755229b07a7b2da98285f70a2646970667358221220b96d70002a5846da9b8b18017939a237f2fab84d56e7deda33007d53a7697d4264736f6c63430008180033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "emmetToken_";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "minStake_";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint128";
            readonly name: "proposeReward_";
            readonly type: "uint128";
        }, {
            readonly internalType: "uint128";
            readonly name: "signReward_";
            readonly type: "uint128";
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
            readonly internalType: "string";
            readonly name: "reason";
            readonly type: "string";
        }];
        readonly name: "CallFailed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "message";
            readonly type: "string";
        }];
        readonly name: "Insufficient";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint64";
            readonly name: "chainId";
            readonly type: "uint64";
        }, {
            readonly internalType: "string";
            readonly name: "txHash";
            readonly type: "string";
        }];
        readonly name: "PreviouslyProposedTransaction";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "txHash";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "signer";
            readonly type: "address";
        }];
        readonly name: "DoubleSigning";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "signer";
            readonly type: "address";
        }];
        readonly name: "NewSigner";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "txHash";
            readonly type: "bytes32";
        }];
        readonly name: "PartialSignature";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "txHash";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "txIndex";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "txData";
            readonly type: "bytes";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "originalChainHash";
            readonly type: "string";
        }];
        readonly name: "Proposal";
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
            readonly internalType: "bytes32";
            readonly name: "txHash";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "target";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "id";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes[]";
            readonly name: "signers";
            readonly type: "bytes[]";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes[]";
            readonly name: "aggregatedSignature";
            readonly type: "bytes[]";
        }];
        readonly name: "Signed";
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
        readonly name: "Unstaked";
        readonly type: "event";
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
        readonly name: "SIGNER_ROLE";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "claimReward";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "claimRole";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "emmetToken";
        readonly outputs: readonly [{
            readonly internalType: "contract IERC20";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint64";
            readonly name: "fromChainId";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint64";
            readonly name: "toChainId";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "string";
            readonly name: "fromToken";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "toToken";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "recipient";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "fromChainHash";
            readonly type: "string";
        }];
        readonly name: "encodeParams";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "encoded";
            readonly type: "bytes";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "data_";
            readonly type: "bytes";
        }, {
            readonly internalType: "uint256";
            readonly name: "nonce_";
            readonly type: "uint256";
        }];
        readonly name: "generateHash";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "txHash";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "pure";
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
            readonly internalType: "uint256";
            readonly name: "id";
            readonly type: "uint256";
        }];
        readonly name: "hashes";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "txHash";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "minStake";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "nonce";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint64";
            readonly name: "chainId";
            readonly type: "uint64";
        }, {
            readonly internalType: "string";
            readonly name: "txHash";
            readonly type: "string";
        }];
        readonly name: "previouslyProposedTransactions";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "data_";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "signature_";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "signer_";
            readonly type: "bytes";
        }];
        readonly name: "propose";
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
        readonly inputs: readonly [];
        readonly name: "rewardAmounts";
        readonly outputs: readonly [{
            readonly internalType: "uint128";
            readonly name: "proposeReward";
            readonly type: "uint128";
        }, {
            readonly internalType: "uint128";
            readonly name: "signReward";
            readonly type: "uint128";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "signer";
            readonly type: "address";
        }];
        readonly name: "rewards";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "reward";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "roleRequests";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "eligibleTime";
            readonly type: "uint256";
        }, {
            readonly internalType: "bool";
            readonly name: "pending";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "txHash_";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256";
            readonly name: "id_";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "signer_";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "signature_";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "data_";
            readonly type: "bytes";
        }, {
            readonly internalType: "string";
            readonly name: "contract_";
            readonly type: "string";
        }];
        readonly name: "sign";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "stake";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "staker";
            readonly type: "address";
        }];
        readonly name: "stakes";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "stake";
            readonly type: "uint256";
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
        readonly name: "threshold";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "totalSigners";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "txHash";
            readonly type: "bytes32";
        }];
        readonly name: "transactions";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "signatureCount";
            readonly type: "uint256";
        }, {
            readonly internalType: "string";
            readonly name: "originalHash";
            readonly type: "string";
        }, {
            readonly internalType: "bool";
            readonly name: "finalized";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "unstake";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): EmmetMultisigV1Interface;
    static connect(address: string, runner?: ContractRunner | null): EmmetMultisigV1;
}
export interface EmmetMultisigV1LibraryAddresses {
    ["contracts/libs/SignatureVerifier.sol:SignatureVerifier"]: string;
    ["contracts/libs/HashHelper.sol:HashHelper"]: string;
}
export {};
