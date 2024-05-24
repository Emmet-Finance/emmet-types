import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, BigNumberish, AddressLike, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type { EmmetMultisig, EmmetMultisigInterface } from "../../../contracts/multisig/EmmetMultisig";
type EmmetMultisigConstructorParams = [linkLibraryAddresses: EmmetMultisigLibraryAddresses, signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class EmmetMultisig__factory extends ContractFactory {
    constructor(...args: EmmetMultisigConstructorParams);
    static linkBytecode(linkLibraryAddresses: EmmetMultisigLibraryAddresses): string;
    getDeployTransaction(emmetToken_: AddressLike, minStake_: BigNumberish, proposeReward_: BigNumberish, signReward_: BigNumberish, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(emmetToken_: AddressLike, minStake_: BigNumberish, proposeReward_: BigNumberish, signReward_: BigNumberish, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<EmmetMultisig & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): EmmetMultisig__factory;
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b50604051620020713803806200207183398101604081905262000034916200017d565b6200004160003362000082565b506200004c62000131565b6001600160a01b0390931660805260029190915560006005556001600160801b03918216600160801b0291161760015562000248565b6000828152602081815260408083206001600160a01b038516845290915281205460ff1662000127576000838152602081815260408083206001600160a01b03861684529091529020805460ff19166001179055620000de3390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45060016200012b565b5060005b92915050565b6003805462000142906002620001f5565b6200014e91906200020f565b6200015b90600162000232565b600455565b80516001600160801b03811681146200017857600080fd5b919050565b600080600080608085870312156200019457600080fd5b84516001600160a01b0381168114620001ac57600080fd5b60208601519094509250620001c46040860162000160565b9150620001d46060860162000160565b905092959194509250565b634e487b7160e01b600052601160045260246000fd5b80820281158282048414176200012b576200012b620001df565b6000826200022d57634e487b7160e01b600052601260045260246000fd5b500490565b808201808211156200012b576200012b620001df565b608051611dea620002876000396000818161031a015281816105590152818161099701528181610a6201528181610b360152610ce00152611dea6000f3fe608060405234801561001057600080fd5b506004361061018e5760003560e01c80639791e644116100de578063b88a802f11610097578063d1a6264811610071578063d1a6264814610412578063d547741f1461041b578063d9d086e11461042e578063f2d1597c1461044157600080fd5b8063b88a802f1461038d578063cc7a5e4514610395578063d1061fef146103d357600080fd5b80639791e644146103025780639806373614610315578063a1ebf35d14610354578063a217fddf14610369578063a694fc3a14610371578063affed0e01461038457600080fd5b806336568abe1161014b57806348d376f71161012557806348d376f71461026e578063501895ae146102ad578063642f2eaf146102cd57806391d14854146102ef57600080fd5b806336568abe14610249578063375b3c0a1461025c57806342cde4e81461026557600080fd5b806301ffc9a7146101935780630700037d146101bb57806316934fc4146101e9578063248a9ca3146102095780632def66201461022c5780632f2ff15d14610236575b600080fd5b6101a66101a13660046113e6565b610449565b60405190151581526020015b60405180910390f35b6101db6101c9366004611433565b60076020526000908152604090205481565b6040519081526020016101b2565b6101db6101f7366004611433565b60096020526000908152604090205481565b6101db61021736600461144e565b60009081526020819052604090206001015490565b610234610480565b005b610234610244366004611467565b61060b565b610234610257366004611467565b610636565b6101db60025481565b6101db60045481565b6101a661027c366004611593565b600b602090815260009283526040909220815180830184018051928152908401929093019190912091525460ff1681565b6101db6102bb36600461144e565b60066020526000908152604090205481565b6102e06102db36600461144e565b61066e565b6040516101b293929190611632565b6101a66102fd366004611467565b61071c565b61023461031036600461165d565b610745565b61033c7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016101b2565b6101db600080516020611d9583398151915281565b6101db600081565b61023461037f36600461144e565b61097a565b6101db60055481565b610234610c96565b6001546103b3906001600160801b0380821691600160801b90041682565b604080516001600160801b039384168152929091166020830152016101b2565b6103fd6103e1366004611433565b6008602052600090815260409020805460019091015460ff1682565b604080519283529015156020830152016101b2565b6101db60035481565b610234610429366004611467565b610da2565b61023461043c3660046116f0565b610dc7565b610234610fb1565b60006001600160e01b03198216637965db0b60e01b148061047a57506301ffc9a760e01b6001600160e01b03198316145b92915050565b33600090815260096020526040812054908190036104d6576040516307319dc160e11b815260206004820152600d60248201526c14dd185ad95908185b5bdd5b9d609a1b60448201526064015b60405180910390fd5b336000818152600960205260408120556104ff90600080516020611d958339815191529061071c565b1561053d5761051c600080516020611d9583398151915233610636565b60016003600082825461052f91906117a1565b9091555061053d90506110c0565b60405163a9059cbb60e01b8152336004820152602481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063a9059cbb906044016020604051808303816000875af11580156105aa573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105ce91906117b4565b5060408051338152602081018390527f0f5bb82176feb1b5e747e28471aa92156a04d9f3ab9f45f28e2d704232b93f75910160405180910390a150565b600082815260208190526040902060010154610626816110e9565b61063083836110f3565b50505050565b6001600160a01b038116331461065f5760405163334bd91960e11b815260040160405180910390fd5b6106698282611185565b505050565b600a6020526000908152604090208054600382018054919291610690906117d6565b80601f01602080910402602001604051908101604052809291908181526020018280546106bc906117d6565b80156107095780601f106106de57610100808354040283529160200191610709565b820191906000526020600020905b8154815290600101906020018083116106ec57829003601f168201915b5050506004909301549192505060ff1683565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b600080516020611d9583398151915261075d816110e9565b6040516380e1603160e01b815260009073__$ae9ca36ff49d726667b1c8a20fee8a6bb8$__906380e16031906107999088908890600401611839565b600060405180830381865af41580156107b6573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526107de919081019061189d565b80516001600160401b03166000908152600b60205260409081902060c083015191519293509161080e91906119a1565b9081526040519081900360200190205460ff161561084857805160c082015160405163e124d40b60e01b81526104cd9291906004016119bd565b60058054906000610858836119df565b9190505550600061086986866111f0565b6000818152600a6020526040902090915061088581838761131e565b60c083015160038201906108999082611a48565b50600554600090815260066020908152604080832085905585516001600160401b03168352600b9091529081902060c085015191516001926108da916119a1565b9081526040805160209281900383019020805460ff191693151593909317909255600154336000908152600790925291812080546001600160801b0390931692909190610928908490611b07565b909155505060055460c08401516040517f4b2bf9c60319edafd0bb04f9d808866e64e064acec75d4151e1f1f29a7b545a3926109699286928c918c91611b1a565b60405180910390a150505050505050565b604051636eb1769f60e11b815233600482015230602482015281907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063dd62ed3e90604401602060405180830381865afa1580156109e6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a0a9190611b58565b1015610a4b576040516307319dc160e11b815260206004820152600f60248201526e454d4d455420416c6c6f77616e636560881b60448201526064016104cd565b6040516370a0823160e01b815233600482015281907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015610ab1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ad59190611b58565b1015610b14576040516307319dc160e11b815260206004820152600d60248201526c454d4d45542042616c616e636560981b60448201526064016104cd565b6040516323b872dd60e01b8152336004820152306024820152604481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af1158015610b87573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bab91906117b4565b503360009081526009602052604081208054839290610bcb908490611b07565b909155505060408051338152602081018390527f9e71bc8eea02a63969f509818f2dafb9254532904319f9dbda79b67bd34a5f3d910160405180910390a16002543360009081526009602052604090205410801590610c3f5750610c3d600080516020611d958339815191523361071c565b155b15610c935760405180604001604052804262093a80610c5e9190611b07565b81526001602091820181905233600090815260088352604090208351815592909101519101805460ff19169115159190911790555b50565b600080516020611d95833981519152610cae816110e9565b336000908152600760205260409020548015610d555760405163a9059cbb60e01b8152336004820152602481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063a9059cbb906044016020604051808303816000875af1158015610d31573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061066991906117b4565b6040516307319dc160e11b815260206004820152601e60248201527f20616d6f756e74206f66207265776172647320746f207769746864726177000060448201526064016104cd565b5050565b600082815260208190526040902060010154610dbd816110e9565b6106308383611185565b600080516020611d95833981519152610ddf816110e9565b6000868152600a60205260409020600481015460ff1615610e3a5760405163b5e1dc2d60e01b8152602060048201526014602482015273151608185b1c9958591e48199a5b985b1a5e995960621b60448201526064016104cd565b60005b6002820154811015610f0157336001600160a01b0316826002018281548110610e6857610e68611b71565b6000918252602090912001546001600160a01b031603610ef957604080518981523360208201527f56fdd76edc867b2630e595ceaa0d4fcc88bd88e66081eb89aa8dcf146250e4a2910160405180910390a160405163b5e1dc2d60e01b81526020600482015260136024820152724475706c6963617465207369676e617475726560681b60448201526064016104cd565b600101610e3d565b50610f0d81888761131e565b600454815410610fa8576001543360009081526007602052604081208054600160801b9093046001600160801b031692909190610f4b908490611b07565b90915550506040517fd05ccfeb97f62a989db2afd6d43a785d2617799db0a2feec48b590d8658eab5690610f90908990869088908b9060028801906001890190611c4c565b60405180910390a160048101805460ff191660011790555b50505050505050565b336000908152600860205260409020600181015460ff166110065760405163b5e1dc2d60e01b815260206004820152600e60248201526d29ba34b636103832b73234b7339760911b60448201526064016104cd565b8054421015611048576040516307319dc160e11b815260206004820152600d60248201526c2a34b6b29032b630b839b2b21760991b60448201526064016104cd565b611060600080516020611d95833981519152336110f3565b506040513381527fffafe5c39be83f4bcf20d7e1a150f6e21c1858ea0948315ba84b6b1c386d45bb9060200160405180910390a16001808201805460ff19169055428255600380546000906110b6908490611b07565b90915550610c9390505b600380546110cf906002611ce6565b6110d99190611cfd565b6110e4906001611b07565b600455565b610c9381336113ad565b60006110ff838361071c565b61117d576000838152602081815260408083206001600160a01b03861684529091529020805460ff191660011790556111353390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a450600161047a565b50600061047a565b6000611191838361071c565b1561117d576000838152602081815260408083206001600160a01b0386168085529252808320805460ff1916905551339286917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a450600161047a565b60008073__$ae9ca36ff49d726667b1c8a20fee8a6bb8$__6380e1603185856040518363ffffffff1660e01b815260040161122c929190611839565b600060405180830381865af4158015611249573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052611271919081019061189d565b805160208201516040808401516005546060860151608087015160a088015160c089015195516366492e5760e01b815298995073__$dbe595de12c18a29f8dc50ae58041c340e$__986366492e57986112d598909790969594939291600401611d1f565b602060405180830381865af41580156112f2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113169190611b58565b949350505050565b825483600061132c836119df565b9091555050600283018054600181810183556000928352602080842090920180546001600160a01b031916331790558086018054918201815583529120016113748282611a48565b506040518281527f15ed1d396993dbd64465b8a61e9b514e52180afba879998b6036176387df2c0d9060200160405180910390a1505050565b6113b7828261071c565b610d9e5760405163e2517d3f60e01b81526001600160a01b0382166004820152602481018390526044016104cd565b6000602082840312156113f857600080fd5b81356001600160e01b03198116811461141057600080fd5b9392505050565b80356001600160a01b038116811461142e57600080fd5b919050565b60006020828403121561144557600080fd5b61141082611417565b60006020828403121561146057600080fd5b5035919050565b6000806040838503121561147a57600080fd5b8235915061148a60208401611417565b90509250929050565b6001600160401b0381168114610c9357600080fd5b634e487b7160e01b600052604160045260246000fd5b60405160e081016001600160401b03811182821017156114e0576114e06114a8565b60405290565b604051601f8201601f191681016001600160401b038111828210171561150e5761150e6114a8565b604052919050565b60006001600160401b0382111561152f5761152f6114a8565b50601f01601f191660200190565b600082601f83011261154e57600080fd5b813561156161155c82611516565b6114e6565b81815284602083860101111561157657600080fd5b816020850160208301376000918101602001919091529392505050565b600080604083850312156115a657600080fd5b82356115b181611493565b915060208301356001600160401b038111156115cc57600080fd5b6115d88582860161153d565b9150509250929050565b60005b838110156115fd5781810151838201526020016115e5565b50506000910152565b6000815180845261161e8160208601602086016115e2565b601f01601f19169290920160200192915050565b83815260606020820152600061164b6060830185611606565b90508215156040830152949350505050565b60008060006040848603121561167257600080fd5b83356001600160401b038082111561168957600080fd5b818601915086601f83011261169d57600080fd5b8135818111156116ac57600080fd5b8760208285010111156116be57600080fd5b6020928301955093509085013590808211156116d957600080fd5b506116e68682870161153d565b9150509250925092565b600080600080600060a0868803121561170857600080fd5b853594506020860135935060408601356001600160401b038082111561172d57600080fd5b61173989838a0161153d565b9450606088013591508082111561174f57600080fd5b61175b89838a0161153d565b9350608088013591508082111561177157600080fd5b5061177e8882890161153d565b9150509295509295909350565b634e487b7160e01b600052601160045260246000fd5b8181038181111561047a5761047a61178b565b6000602082840312156117c657600080fd5b8151801515811461141057600080fd5b600181811c908216806117ea57607f821691505b60208210810361180a57634e487b7160e01b600052602260045260246000fd5b50919050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b602081526000611316602083018486611810565b805161142e81611493565b600082601f83011261186957600080fd5b815161187761155c82611516565b81815284602083860101111561188c57600080fd5b6113168260208301602087016115e2565b6000602082840312156118af57600080fd5b81516001600160401b03808211156118c657600080fd5b9083019060e082860312156118da57600080fd5b6118e26114be565b6118eb8361184d565b81526118f96020840161184d565b60208201526040830151604082015260608301518281111561191a57600080fd5b61192687828601611858565b60608301525060808301518281111561193e57600080fd5b61194a87828601611858565b60808301525060a08301518281111561196257600080fd5b61196e87828601611858565b60a08301525060c08301518281111561198657600080fd5b61199287828601611858565b60c08301525095945050505050565b600082516119b38184602087016115e2565b9190910192915050565b6001600160401b03831681526040602082015260006113166040830184611606565b6000600182016119f1576119f161178b565b5060010190565b601f821115610669576000816000526020600020601f850160051c81016020861015611a215750805b601f850160051c820191505b81811015611a4057828155600101611a2d565b505050505050565b81516001600160401b03811115611a6157611a616114a8565b611a7581611a6f84546117d6565b846119f8565b602080601f831160018114611aaa5760008415611a925750858301515b600019600386901b1c1916600185901b178555611a40565b600085815260208120601f198616915b82811015611ad957888601518255948401946001909101908401611aba565b5085821015611af75787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b8082018082111561047a5761047a61178b565b858152846020820152608060408201526000611b3a608083018587611810565b8281036060840152611b4c8185611606565b98975050505050505050565b600060208284031215611b6a57600080fd5b5051919050565b634e487b7160e01b600052603260045260246000fd5b6000828254808552602080860195506005818360051b8501016000878152838120815b86811015611c3d57601f19888503018b52828254611bc7816117d6565b80875260018281168015611be25760018114611bfb57611c26565b60ff198416898c01528215158a1b89018b019450611c26565b8688528a8820885b84811015611c1e5781548b82018e0152908301908c01611c03565b8a018c019550505b509d89019d92965050509190910190600101611baa565b50919998505050505050505050565b8681526000602060c06020840152611c6760c0840189611606565b8381036040850152611c798189611606565b6060850188905284810360808601528654808252600088815260208082209450909201915b81811015611cc35783546001600160a01b031683526001938401939285019201611c9e565b505084810360a0860152611cd78187611b87565b9b9a5050505050505050505050565b808202811582820484141761047a5761047a61178b565b600082611d1a57634e487b7160e01b600052601260045260246000fd5b500490565b60006101006001600160401b03808c168452808b16602085015250886040840152876060840152806080840152611d5881840188611606565b905082810360a0840152611d6c8187611606565b905082810360c0840152611d808186611606565b905082810360e0840152611cd7818561160656fee2f4eaae4a9751e85a3e4a7b9587827a877f29914755229b07a7b2da98285f70a264697066735822122069d2804c21415190fc0fd4aca5adce23b9d48ccacff6190447f05059f1f5d06264736f6c63430008180033";
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
        readonly name: "PreviouslyProcessedTransaction";
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
            readonly internalType: "address[]";
            readonly name: "signers";
            readonly type: "address[]";
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
        readonly name: "previouslyProcessedTransactions";
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
    static createInterface(): EmmetMultisigInterface;
    static connect(address: string, runner?: ContractRunner | null): EmmetMultisig;
}
export interface EmmetMultisigLibraryAddresses {
    ["contracts/libs/SignatureVerifier.sol:SignatureVerifier"]: string;
    ["contracts/libs/HashHelper.sol:HashHelper"]: string;
}
export {};
