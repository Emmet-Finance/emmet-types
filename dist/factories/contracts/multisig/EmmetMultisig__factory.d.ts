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
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b50604051620021193803806200211983398101604081905262000034916200017d565b6200004160003362000082565b506200004c62000131565b6001600160a01b0390931660805260029190915560006005556001600160801b03918216600160801b0291161760015562000248565b6000828152602081815260408083206001600160a01b038516845290915281205460ff1662000127576000838152602081815260408083206001600160a01b03861684529091529020805460ff19166001179055620000de3390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45060016200012b565b5060005b92915050565b6003805462000142906002620001f5565b6200014e91906200020f565b6200015b90600162000232565b600455565b80516001600160801b03811681146200017857600080fd5b919050565b600080600080608085870312156200019457600080fd5b84516001600160a01b0381168114620001ac57600080fd5b60208601519094509250620001c46040860162000160565b9150620001d46060860162000160565b905092959194509250565b634e487b7160e01b600052601160045260246000fd5b80820281158282048414176200012b576200012b620001df565b6000826200022d57634e487b7160e01b600052601260045260246000fd5b500490565b808201808211156200012b576200012b620001df565b608051611e92620002876000396000818161031a0152818161055a0152818161099a01528181610a6501528181610b390152610ce10152611e926000f3fe608060405234801561001057600080fd5b506004361061018e5760003560e01c806391d14854116100de578063b88a802f11610097578063d1a6264811610071578063d1a6264814610412578063d547741f1461041b578063ecdfa8231461042e578063f2d1597c1461044157600080fd5b8063b88a802f1461038d578063cc7a5e4514610395578063d1061fef146103d357600080fd5b806391d14854146103025780639806373614610315578063a1ebf35d14610354578063a217fddf14610369578063a694fc3a14610371578063affed0e01461038457600080fd5b806336568abe1161014b57806348d376f71161012557806348d376f71461026e578063501895ae146102ad578063642f2eaf146102cd578063854f5476146102ef57600080fd5b806336568abe14610249578063375b3c0a1461025c57806342cde4e81461026557600080fd5b806301ffc9a7146101935780630700037d146101bb57806316934fc4146101e9578063248a9ca3146102095780632def66201461022c5780632f2ff15d14610236575b600080fd5b6101a66101a13660046113f5565b610449565b60405190151581526020015b60405180910390f35b6101db6101c9366004611442565b60076020526000908152604090205481565b6040519081526020016101b2565b6101db6101f7366004611442565b60096020526000908152604090205481565b6101db61021736600461145d565b60009081526020819052604090206001015490565b610234610480565b005b610234610244366004611476565b61060c565b610234610257366004611476565b610637565b6101db60025481565b6101db60045481565b6101a661027c3660046115a2565b600b602090815260009283526040909220815180830184018051928152908401929093019190912091525460ff1681565b6101db6102bb36600461145d565b60066020526000908152604090205481565b6102e06102db36600461145d565b61066f565b6040516101b293929190611641565b6102346102fd36600461166c565b61071d565b6101a6610310366004611476565b610954565b61033c7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016101b2565b6101db600080516020611e3d83398151915281565b6101db600081565b61023461037f36600461145d565b61097d565b6101db60055481565b610234610c97565b6001546103b3906001600160801b0380821691600160801b90041682565b604080516001600160801b039384168152929091166020830152016101b2565b6103fd6103e1366004611442565b6008602052600090815260409020805460019091015460ff1682565b604080519283529015156020830152016101b2565b6101db60035481565b610234610429366004611476565b610da3565b61023461043c366004611724565b610dc8565b610234610fbc565b60006001600160e01b03198216637965db0b60e01b148061047a57506301ffc9a760e01b6001600160e01b03198316145b92915050565b33600090815260096020526040812054908190036104d6576040516307319dc160e11b815260206004820152600d60248201526c14dd185ad95908185b5bdd5b9d609a1b60448201526064015b60405180910390fd5b336000818152600960205260408120556104ff90600080516020611e3d83398151915290610954565b1561053e5761051c600080516020611e3d833981519152336110cf565b5060016003600082825461053091906117f8565b9091555061053e9050611142565b60405163a9059cbb60e01b8152336004820152602481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063a9059cbb906044016020604051808303816000875af11580156105ab573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105cf919061180b565b5060408051338152602081018390527f0f5bb82176feb1b5e747e28471aa92156a04d9f3ab9f45f28e2d704232b93f75910160405180910390a150565b6000828152602081905260409020600101546106278161116b565b6106318383611175565b50505050565b6001600160a01b03811633146106605760405163334bd91960e11b815260040160405180910390fd5b61066a82826110cf565b505050565b600a60205260009081526040902080546003820180549192916106919061182d565b80601f01602080910402602001604051908101604052809291908181526020018280546106bd9061182d565b801561070a5780601f106106df5761010080835404028352916020019161070a565b820191906000526020600020905b8154815290600101906020018083116106ed57829003601f168201915b5050506004909301549192505060ff1683565b600080516020611e3d8339815191526107358161116b565b6040516380e1603160e01b815260009073__$ae9ca36ff49d726667b1c8a20fee8a6bb8$__906380e16031906107719089908990600401611890565b600060405180830381865af415801561078e573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526107b691908101906118f4565b80516001600160401b03166000908152600b60205260409081902060c08301519151929350916107e691906119f8565b9081526040519081900360200190205460ff161561082057805160c082015160405163e124d40b60e01b81526104cd929190600401611a14565b6005805490600061083083611a36565b9190505550600061084187876111ff565b6000818152600a6020526040902090915061085e8183888861132d565b60c083015160038201906108729082611a9f565b50600554600090815260066020908152604080832085905585516001600160401b03168352600b9091529081902060c085015191516001926108b3916119f8565b9081526040805160209281900383019020805460ff191693151593909317909255600154336000908152600790925291812080546001600160801b0390931692909190610901908490611b5e565b909155505060055460c08401516040517f4b2bf9c60319edafd0bb04f9d808866e64e064acec75d4151e1f1f29a7b545a3926109429286928d918d91611b71565b60405180910390a15050505050505050565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b604051636eb1769f60e11b815233600482015230602482015281907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063dd62ed3e90604401602060405180830381865afa1580156109e9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a0d9190611baf565b1015610a4e576040516307319dc160e11b815260206004820152600f60248201526e454d4d455420416c6c6f77616e636560881b60448201526064016104cd565b6040516370a0823160e01b815233600482015281907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015610ab4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ad89190611baf565b1015610b17576040516307319dc160e11b815260206004820152600d60248201526c454d4d45542042616c616e636560981b60448201526064016104cd565b6040516323b872dd60e01b8152336004820152306024820152604481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af1158015610b8a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bae919061180b565b503360009081526009602052604081208054839290610bce908490611b5e565b909155505060408051338152602081018390527f9e71bc8eea02a63969f509818f2dafb9254532904319f9dbda79b67bd34a5f3d910160405180910390a16002543360009081526009602052604090205410801590610c425750610c40600080516020611e3d83398151915233610954565b155b15610c9457604051806040016040528042603c610c5f9190611b5e565b81526001602091820181905233600090815260088352604090208351815592909101519101805460ff19169115159190911790555b50565b600080516020611e3d833981519152610caf8161116b565b336000908152600760205260409020548015610d565760405163a9059cbb60e01b8152336004820152602481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063a9059cbb906044016020604051808303816000875af1158015610d32573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061066a919061180b565b6040516307319dc160e11b815260206004820152601e60248201527f20616d6f756e74206f66207265776172647320746f207769746864726177000060448201526064016104cd565b5050565b600082815260208190526040902060010154610dbe8161116b565b61063183836110cf565b600080516020611e3d833981519152610de08161116b565b6000878152600a60205260409020600481015460ff1615610e3b5760405163b5e1dc2d60e01b8152602060048201526014602482015273151608185b1c9958591e48199a5b985b1a5e995960621b60448201526064016104cd565b60005b6002820154811015610f0a578680519060200120826002018281548110610e6757610e67611bc8565b90600052602060002001604051610e7e9190611bde565b604051809103902003610f0257604080518a81523360208201527f56fdd76edc867b2630e595ceaa0d4fcc88bd88e66081eb89aa8dcf146250e4a2910160405180910390a160405163b5e1dc2d60e01b81526020600482015260136024820152724475706c6963617465207369676e617475726560681b60448201526064016104cd565b600101610e3e565b50610f178189878961132d565b600454815410610fb2576001543360009081526007602052604081208054600160801b9093046001600160801b031692909190610f55908490611b5e565b90915550506040517f1f4d4ff517e3a27e4a4d3e8b162d44a5697c89eaec80829229ddcc3329b812b990610f9a908a90869088908c9060028801906001890190611d19565b60405180910390a160048101805460ff191660011790555b5050505050505050565b336000908152600860205260409020600181015460ff166110115760405163b5e1dc2d60e01b815260206004820152600e60248201526d29ba34b636103832b73234b7339760911b60448201526064016104cd565b8054421015611053576040516307319dc160e11b815260206004820152600d60248201526c2a34b6b29032b630b839b2b21760991b60448201526064016104cd565b61106b600080516020611e3d83398151915233611175565b506040513381527fffafe5c39be83f4bcf20d7e1a150f6e21c1858ea0948315ba84b6b1c386d45bb9060200160405180910390a16001808201805460ff19169055428255600380546000906110c1908490611b5e565b90915550610c949050611142565b60006110db8383610954565b1561113a576000838152602081815260408083206001600160a01b0386168085529252808320805460ff1916905551339286917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a450600161047a565b50600061047a565b60038054611151906002611d7f565b61115b9190611d96565b611166906001611b5e565b600455565b610c9481336113bc565b60006111818383610954565b61113a576000838152602081815260408083206001600160a01b03861684529091529020805460ff191660011790556111b73390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a450600161047a565b60008073__$ae9ca36ff49d726667b1c8a20fee8a6bb8$__6380e1603185856040518363ffffffff1660e01b815260040161123b929190611890565b600060405180830381865af4158015611258573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261128091908101906118f4565b805160208201516040808401516005546060860151608087015160a088015160c089015195516366492e5760e01b815298995073__$dbe595de12c18a29f8dc50ae58041c340e$__986366492e57986112e498909790969594939291600401611db8565b602060405180830381865af4158015611301573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113259190611baf565b949350505050565b835484600061133b83611a36565b909155505060028401805460018101825560009182526020909120016113618282611a9f565b50600180850180549182018155600090815260209020016113828382611a9f565b506040518381527f15ed1d396993dbd64465b8a61e9b514e52180afba879998b6036176387df2c0d9060200160405180910390a150505050565b6113c68282610954565b610d9f5760405163e2517d3f60e01b81526001600160a01b0382166004820152602481018390526044016104cd565b60006020828403121561140757600080fd5b81356001600160e01b03198116811461141f57600080fd5b9392505050565b80356001600160a01b038116811461143d57600080fd5b919050565b60006020828403121561145457600080fd5b61141f82611426565b60006020828403121561146f57600080fd5b5035919050565b6000806040838503121561148957600080fd5b8235915061149960208401611426565b90509250929050565b6001600160401b0381168114610c9457600080fd5b634e487b7160e01b600052604160045260246000fd5b60405160e081016001600160401b03811182821017156114ef576114ef6114b7565b60405290565b604051601f8201601f191681016001600160401b038111828210171561151d5761151d6114b7565b604052919050565b60006001600160401b0382111561153e5761153e6114b7565b50601f01601f191660200190565b600082601f83011261155d57600080fd5b813561157061156b82611525565b6114f5565b81815284602083860101111561158557600080fd5b816020850160208301376000918101602001919091529392505050565b600080604083850312156115b557600080fd5b82356115c0816114a2565b915060208301356001600160401b038111156115db57600080fd5b6115e78582860161154c565b9150509250929050565b60005b8381101561160c5781810151838201526020016115f4565b50506000910152565b6000815180845261162d8160208601602086016115f1565b601f01601f19169290920160200192915050565b83815260606020820152600061165a6060830185611615565b90508215156040830152949350505050565b6000806000806060858703121561168257600080fd5b84356001600160401b038082111561169957600080fd5b818701915087601f8301126116ad57600080fd5b8135818111156116bc57600080fd5b8860208285010111156116ce57600080fd5b6020928301965094509086013590808211156116e957600080fd5b6116f58883890161154c565b9350604087013591508082111561170b57600080fd5b506117188782880161154c565b91505092959194509250565b60008060008060008060c0878903121561173d57600080fd5b863595506020870135945060408701356001600160401b038082111561176257600080fd5b61176e8a838b0161154c565b9550606089013591508082111561178457600080fd5b6117908a838b0161154c565b945060808901359150808211156117a657600080fd5b6117b28a838b0161154c565b935060a08901359150808211156117c857600080fd5b506117d589828a0161154c565b9150509295509295509295565b634e487b7160e01b600052601160045260246000fd5b8181038181111561047a5761047a6117e2565b60006020828403121561181d57600080fd5b8151801515811461141f57600080fd5b600181811c9082168061184157607f821691505b60208210810361186157634e487b7160e01b600052602260045260246000fd5b50919050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b602081526000611325602083018486611867565b805161143d816114a2565b600082601f8301126118c057600080fd5b81516118ce61156b82611525565b8181528460208386010111156118e357600080fd5b6113258260208301602087016115f1565b60006020828403121561190657600080fd5b81516001600160401b038082111561191d57600080fd5b9083019060e0828603121561193157600080fd5b6119396114cd565b611942836118a4565b8152611950602084016118a4565b60208201526040830151604082015260608301518281111561197157600080fd5b61197d878286016118af565b60608301525060808301518281111561199557600080fd5b6119a1878286016118af565b60808301525060a0830151828111156119b957600080fd5b6119c5878286016118af565b60a08301525060c0830151828111156119dd57600080fd5b6119e9878286016118af565b60c08301525095945050505050565b60008251611a0a8184602087016115f1565b9190910192915050565b6001600160401b03831681526040602082015260006113256040830184611615565b600060018201611a4857611a486117e2565b5060010190565b601f82111561066a576000816000526020600020601f850160051c81016020861015611a785750805b601f850160051c820191505b81811015611a9757828155600101611a84565b505050505050565b81516001600160401b03811115611ab857611ab86114b7565b611acc81611ac6845461182d565b84611a4f565b602080601f831160018114611b015760008415611ae95750858301515b600019600386901b1c1916600185901b178555611a97565b600085815260208120601f198616915b82811015611b3057888601518255948401946001909101908401611b11565b5085821015611b4e5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b8082018082111561047a5761047a6117e2565b858152846020820152608060408201526000611b91608083018587611867565b8281036060840152611ba38185611615565b98975050505050505050565b600060208284031215611bc157600080fd5b5051919050565b634e487b7160e01b600052603260045260246000fd5b6000808354611bec8161182d565b60018281168015611c045760018114611c1957611c48565b60ff1984168752821515830287019450611c48565b8760005260208060002060005b85811015611c3f5781548a820152908401908201611c26565b50505082870194505b50929695505050505050565b6000828254808552602080860195506005818360051b8501016000878152838120815b86811015611d0a57601f19888503018b52828254611c948161182d565b80875260018281168015611caf5760018114611cc857611cf3565b60ff198416898c01528215158a1b89018b019450611cf3565b8688528a8820885b84811015611ceb5781548b82018e0152908301908c01611cd0565b8a018c019550505b509d89019d92965050509190910190600101611c77565b50919998505050505050505050565b86815260c060208201526000611d3260c0830188611615565b8281036040840152611d448188611615565b90508560608401528281036080840152611d5e8186611c54565b905082810360a0840152611d728185611c54565b9998505050505050505050565b808202811582820484141761047a5761047a6117e2565b600082611db357634e487b7160e01b600052601260045260246000fd5b500490565b60006101006001600160401b03808c168452808b16602085015250886040840152876060840152806080840152611df181840188611615565b905082810360a0840152611e058187611615565b905082810360c0840152611e198186611615565b905082810360e0840152611e2d8185611615565b9b9a505050505050505050505056fee2f4eaae4a9751e85a3e4a7b9587827a877f29914755229b07a7b2da98285f70a264697066735822122045567ebd4cfd7d57aae3e68280eef17786d445fcd33be5ab42f00fdb2a80895764736f6c63430008180033";
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
    static createInterface(): EmmetMultisigInterface;
    static connect(address: string, runner?: ContractRunner | null): EmmetMultisig;
}
export interface EmmetMultisigLibraryAddresses {
    ["contracts/libs/SignatureVerifier.sol:SignatureVerifier"]: string;
    ["contracts/libs/HashHelper.sol:HashHelper"]: string;
}
export {};
