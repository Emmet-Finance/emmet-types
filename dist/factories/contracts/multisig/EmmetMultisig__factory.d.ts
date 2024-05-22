import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, BigNumberish, AddressLike, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type { EmmetMultisig, EmmetMultisigInterface } from "../../../contracts/multisig/EmmetMultisig";
type EmmetMultisigConstructorParams = [linkLibraryAddresses: EmmetMultisigLibraryAddresses, signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class EmmetMultisig__factory extends ContractFactory {
    constructor(...args: EmmetMultisigConstructorParams);
    static linkBytecode(linkLibraryAddresses: EmmetMultisigLibraryAddresses): string;
    getDeployTransaction(emmetToken_: AddressLike, threshold_: BigNumberish, minStake_: BigNumberish, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(emmetToken_: AddressLike, threshold_: BigNumberish, minStake_: BigNumberish, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<EmmetMultisig & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): EmmetMultisig__factory;
    static readonly bytecode = "0x60a060405234801561001057600080fd5b50604051611c8b380380611c8b83398101604081905261002f91610050565b6003919091556001600160a01b039091166080526001556000600455610093565b60008060006060848603121561006557600080fd5b83516001600160a01b038116811461007c57600080fd5b602085015160409095015190969495509392505050565b608051611bc16100ca600039600081816102b9015281816104b2015281816108bd015281816109880152610a5c0152611bc16000f3fe608060405234801561001057600080fd5b506004361061014d5760003560e01c806391d14854116100c3578063affed0e01161007c578063affed0e014610323578063d1061fef1461032c578063d1a626481461036b578063d547741f14610374578063d9d086e114610387578063f2d1597c1461039a57600080fd5b806391d148541461028e5780639791e644146102a157806398063736146102b4578063a1ebf35d146102f3578063a217fddf14610308578063a694fc3a1461031057600080fd5b806336568abe1161011557806336568abe146101e8578063375b3c0a146101fb57806342cde4e81461020457806348d376f71461020d578063501895ae1461024c578063642f2eaf1461026c57600080fd5b806301ffc9a71461015257806316934fc41461017a578063248a9ca3146101a85780632def6620146101cb5780632f2ff15d146101d5575b600080fd5b6101656101603660046111bd565b6103a2565b60405190151581526020015b60405180910390f35b61019a61018836600461120a565b60056020526000908152604090205481565b604051908152602001610171565b61019a6101b6366004611225565b60009081526020819052604090206001015490565b6101d36103d9565b005b6101d36101e336600461123e565b610564565b6101d36101f636600461123e565b61058f565b61019a60015481565b61019a60035481565b61016561021b36600461136a565b6009602090815260009283526040909220815180830184018051928152908401929093019190912091525460ff1681565b61019a61025a366004611225565b60076020526000908152604090205481565b61027f61027a366004611225565b6105c7565b60405161017193929190611409565b61016561029c36600461123e565b610675565b6101d36102af366004611434565b61069e565b6102db7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610171565b61019a600080516020611b6c83398151915281565b61019a600081565b6101d361031e366004611225565b6108a0565b61019a60045481565b61035661033a36600461120a565b6006602052600090815260409020805460019091015460ff1682565b60408051928352901515602083015201610171565b61019a60025481565b6101d361038236600461123e565b610bbc565b6101d36103953660046114c7565b610be1565b6101d3610d91565b60006001600160e01b03198216637965db0b60e01b14806103d357506301ffc9a760e01b6001600160e01b03198316145b92915050565b336000908152600560205260408120549081900361042f576040516307319dc160e11b815260206004820152600d60248201526c14dd185ad95908185b5bdd5b9d609a1b60448201526064015b60405180910390fd5b3360008181526005602052604081205561045890600080516020611b6c83398151915290610675565b1561049657610475600080516020611b6c8339815191523361058f565b6001600260008282546104889190611578565b909155506104969050610e9f565b60405163a9059cbb60e01b8152336004820152602481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063a9059cbb906044016020604051808303816000875af1158015610503573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610527919061158b565b5060408051338152602081018390527f0f5bb82176feb1b5e747e28471aa92156a04d9f3ab9f45f28e2d704232b93f75910160405180910390a150565b60008281526020819052604090206001015461057f81610ebf565b6105898383610ec9565b50505050565b6001600160a01b03811633146105b85760405163334bd91960e11b815260040160405180910390fd5b6105c28282610f5b565b505050565b600860205260009081526040902080546003820180549192916105e9906115ad565b80601f0160208091040260200160405190810160405280929190818152602001828054610615906115ad565b80156106625780601f1061063757610100808354040283529160200191610662565b820191906000526020600020905b81548152906001019060200180831161064557829003601f168201915b5050506004909301549192505060ff1683565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b600080516020611b6c8339815191526106b681610ebf565b6040516380e1603160e01b815260009073__$ae9ca36ff49d726667b1c8a20fee8a6bb8$__906380e16031906106f29088908890600401611610565b600060405180830381865af415801561070f573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526107379190810190611674565b80516001600160401b03166000908152600960205260409081902060c08301519151929350916107679190611778565b9081526040519081900360200190205460ff16156107a157805160c082015160405163e124d40b60e01b8152610426929190600401611794565b600480549060006107b1836117b6565b919050555060006107c28686610fc6565b60008181526008602052604090209091506107de8183876110f1565b60c083015160038201906107f2908261181f565b50600454600090815260076020908152604080832085905585516001600160401b0316835260099091529081902060c0850151915160019261083391611778565b908152604051908190036020018120805492151560ff199093169290921790915560045460c08501517f4b2bf9c60319edafd0bb04f9d808866e64e064acec75d4151e1f1f29a7b545a39261088f92869290918c918c916118de565b60405180910390a150505050505050565b604051636eb1769f60e11b815233600482015230602482015281907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063dd62ed3e90604401602060405180830381865afa15801561090c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610930919061191c565b1015610971576040516307319dc160e11b815260206004820152600f60248201526e454d4d455420416c6c6f77616e636560881b6044820152606401610426565b6040516370a0823160e01b815233600482015281907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156109d7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109fb919061191c565b1015610a3a576040516307319dc160e11b815260206004820152600d60248201526c454d4d45542042616c616e636560981b6044820152606401610426565b6040516323b872dd60e01b8152336004820152306024820152604481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af1158015610aad573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ad1919061158b565b503360009081526005602052604081208054839290610af1908490611935565b909155505060408051338152602081018390527f9e71bc8eea02a63969f509818f2dafb9254532904319f9dbda79b67bd34a5f3d910160405180910390a16001543360009081526005602052604090205410801590610b655750610b63600080516020611b6c83398151915233610675565b155b15610bb95760405180604001604052804262093a80610b849190611935565b81526001602091820181905233600090815260068352604090208351815592909101519101805460ff19169115159190911790555b50565b600082815260208190526040902060010154610bd781610ebf565b6105898383610f5b565b600080516020611b6c833981519152610bf981610ebf565b6000868152600860205260409020600481015460ff1615610c545760405163b5e1dc2d60e01b8152602060048201526014602482015273151608185b1c9958591e48199a5b985b1a5e995960621b6044820152606401610426565b60005b6002820154811015610d1b57336001600160a01b0316826002018281548110610c8257610c82611948565b6000918252602090912001546001600160a01b031603610d1357604080518981523360208201527f56fdd76edc867b2630e595ceaa0d4fcc88bd88e66081eb89aa8dcf146250e4a2910160405180910390a160405163b5e1dc2d60e01b81526020600482015260136024820152724475706c6963617465207369676e617475726560681b6044820152606401610426565b600101610c57565b50610d278188876110f1565b600354815410610d88577fd05ccfeb97f62a989db2afd6d43a785d2617799db0a2feec48b590d8658eab56878486898560020186600101604051610d7096959493929190611a23565b60405180910390a160048101805460ff191660011790555b50505050505050565b336000908152600660205260409020600181015460ff16610de65760405163b5e1dc2d60e01b815260206004820152600e60248201526d29ba34b636103832b73234b7339760911b6044820152606401610426565b8054421015610e28576040516307319dc160e11b815260206004820152600d60248201526c2a34b6b29032b630b839b2b21760991b6044820152606401610426565b610e40600080516020611b6c83398151915233610564565b6040513381527fffafe5c39be83f4bcf20d7e1a150f6e21c1858ea0948315ba84b6b1c386d45bb9060200160405180910390a16001808201805460ff1916905542825560028054600090610e95908490611935565b90915550610bb990505b60036002546002610eb09190611abd565b610eba9190611ad4565b600355565b610bb98133611180565b6000610ed58383610675565b610f53576000838152602081815260408083206001600160a01b03861684529091529020805460ff19166001179055610f0b3390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45060016103d3565b5060006103d3565b6000610f678383610675565b15610f53576000838152602081815260408083206001600160a01b0386168085529252808320805460ff1916905551339286917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45060016103d3565b60008073__$ae9ca36ff49d726667b1c8a20fee8a6bb8$__6380e1603185856040518363ffffffff1660e01b8152600401611002929190611610565b600060405180830381865af415801561101f573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526110479190810190611674565b80516020820151604080840151600480546060870151608088015160a089015160c08a015196516366492e5760e01b8152999a5073__$dbe595de12c18a29f8dc50ae58041c340e$__996366492e57996110a8999098909796909101611af6565b602060405180830381865af41580156110c5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110e9919061191c565b949350505050565b82548360006110ff836117b6565b9091555050600283018054600181810183556000928352602080842090920180546001600160a01b03191633179055808601805491820181558352912001611147828261181f565b506040518281527f15ed1d396993dbd64465b8a61e9b514e52180afba879998b6036176387df2c0d9060200160405180910390a1505050565b61118a8282610675565b6111b95760405163e2517d3f60e01b81526001600160a01b038216600482015260248101839052604401610426565b5050565b6000602082840312156111cf57600080fd5b81356001600160e01b0319811681146111e757600080fd5b9392505050565b80356001600160a01b038116811461120557600080fd5b919050565b60006020828403121561121c57600080fd5b6111e7826111ee565b60006020828403121561123757600080fd5b5035919050565b6000806040838503121561125157600080fd5b82359150611261602084016111ee565b90509250929050565b6001600160401b0381168114610bb957600080fd5b634e487b7160e01b600052604160045260246000fd5b60405160e081016001600160401b03811182821017156112b7576112b761127f565b60405290565b604051601f8201601f191681016001600160401b03811182821017156112e5576112e561127f565b604052919050565b60006001600160401b038211156113065761130661127f565b50601f01601f191660200190565b600082601f83011261132557600080fd5b8135611338611333826112ed565b6112bd565b81815284602083860101111561134d57600080fd5b816020850160208301376000918101602001919091529392505050565b6000806040838503121561137d57600080fd5b82356113888161126a565b915060208301356001600160401b038111156113a357600080fd5b6113af85828601611314565b9150509250929050565b60005b838110156113d45781810151838201526020016113bc565b50506000910152565b600081518084526113f58160208601602086016113b9565b601f01601f19169290920160200192915050565b83815260606020820152600061142260608301856113dd565b90508215156040830152949350505050565b60008060006040848603121561144957600080fd5b83356001600160401b038082111561146057600080fd5b818601915086601f83011261147457600080fd5b81358181111561148357600080fd5b87602082850101111561149557600080fd5b6020928301955093509085013590808211156114b057600080fd5b506114bd86828701611314565b9150509250925092565b600080600080600060a086880312156114df57600080fd5b853594506020860135935060408601356001600160401b038082111561150457600080fd5b61151089838a01611314565b9450606088013591508082111561152657600080fd5b61153289838a01611314565b9350608088013591508082111561154857600080fd5b5061155588828901611314565b9150509295509295909350565b634e487b7160e01b600052601160045260246000fd5b818103818111156103d3576103d3611562565b60006020828403121561159d57600080fd5b815180151581146111e757600080fd5b600181811c908216806115c157607f821691505b6020821081036115e157634e487b7160e01b600052602260045260246000fd5b50919050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b6020815260006110e96020830184866115e7565b80516112058161126a565b600082601f83011261164057600080fd5b815161164e611333826112ed565b81815284602083860101111561166357600080fd5b6110e98260208301602087016113b9565b60006020828403121561168657600080fd5b81516001600160401b038082111561169d57600080fd5b9083019060e082860312156116b157600080fd5b6116b9611295565b6116c283611624565b81526116d060208401611624565b6020820152604083015160408201526060830151828111156116f157600080fd5b6116fd8782860161162f565b60608301525060808301518281111561171557600080fd5b6117218782860161162f565b60808301525060a08301518281111561173957600080fd5b6117458782860161162f565b60a08301525060c08301518281111561175d57600080fd5b6117698782860161162f565b60c08301525095945050505050565b6000825161178a8184602087016113b9565b9190910192915050565b6001600160401b03831681526040602082015260006110e960408301846113dd565b6000600182016117c8576117c8611562565b5060010190565b601f8211156105c2576000816000526020600020601f850160051c810160208610156117f85750805b601f850160051c820191505b8181101561181757828155600101611804565b505050505050565b81516001600160401b038111156118385761183861127f565b61184c8161184684546115ad565b846117cf565b602080601f83116001811461188157600084156118695750858301515b600019600386901b1c1916600185901b178555611817565b600085815260208120601f198616915b828110156118b057888601518255948401946001909101908401611891565b50858210156118ce5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b8581528460208201526080604082015260006118fe6080830185876115e7565b828103606084015261191081856113dd565b98975050505050505050565b60006020828403121561192e57600080fd5b5051919050565b808201808211156103d3576103d3611562565b634e487b7160e01b600052603260045260246000fd5b6000828254808552602080860195506005818360051b8501016000878152838120815b86811015611a1457601f19888503018b5282825461199e816115ad565b808752600182811680156119b957600181146119d2576119fd565b60ff198416898c01528215158a1b89018b0194506119fd565b8688528a8820885b848110156119f55781548b82018e0152908301908c016119da565b8a018c019550505b509d89019d92965050509190910190600101611981565b50919998505050505050505050565b8681526000602060c06020840152611a3e60c08401896113dd565b8381036040850152611a5081896113dd565b6060850188905284810360808601528654808252600088815260208082209450909201915b81811015611a9a5783546001600160a01b031683526001938401939285019201611a75565b505084810360a0860152611aae818761195e565b9b9a5050505050505050505050565b80820281158282048414176103d3576103d3611562565b600082611af157634e487b7160e01b600052601260045260246000fd5b500490565b60006101006001600160401b03808c168452808b16602085015250886040840152876060840152806080840152611b2f818401886113dd565b905082810360a0840152611b4381876113dd565b905082810360c0840152611b5781866113dd565b905082810360e0840152611aae81856113dd56fee2f4eaae4a9751e85a3e4a7b9587827a877f29914755229b07a7b2da98285f70a264697066735822122051266c12ef6503508a31fb289a60d298072a24af9d3a7acbb116175d3f86a49664736f6c63430008180033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "emmetToken_";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "threshold_";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "minStake_";
            readonly type: "uint256";
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
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "stakes";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
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
