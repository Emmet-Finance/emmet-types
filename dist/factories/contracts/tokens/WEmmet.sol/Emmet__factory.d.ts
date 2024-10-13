import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type { Emmet, EmmetInterface } from "../../../../contracts/tokens/WEmmet.sol/Emmet";
type EmmetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Emmet__factory extends ContractFactory {
    constructor(...args: EmmetConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<Emmet & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): Emmet__factory;
    static readonly bytecode = "0x60a06040523060805234801561001457600080fd5b5060805161264a61003e6000396000818161175a015281816117830152611955015261264a6000f3fe6080604052600436106101c25760003560e01c80635c975abb116100f757806391d1485411610095578063ad3cb1cc11610064578063ad3cb1cc146105b0578063b5bfddea146105f9578063d547741f1461062d578063dd62ed3e1461064d57600080fd5b806391d148541461050157806395d89b4114610566578063a217fddf1461057b578063a9059cbb1461059057600080fd5b806370a08231116100d157806370a082311461044357806375b238fc1461049857806379cc6790146104cc5780638456cb59146104ec57600080fd5b80635c975abb146103cc57806365f6aa35146104035780636eb382121461042357600080fd5b80632f2ff15d116101645780633f4ba83a1161013e5780633f4ba83a1461036f57806340c10f19146103845780634f1ef286146103a457806352d1902d146103b757600080fd5b80632f2ff15d1461030d578063313ce5671461032d57806336568abe1461034f57600080fd5b806318160ddd116101a057806318160ddd1461023e57806319ab453c1461027c57806323b872dd1461029e578063248a9ca3146102be57600080fd5b806301ffc9a7146101c757806306fdde03146101fc578063095ea7b31461021e575b600080fd5b3480156101d357600080fd5b506101e76101e236600461211a565b6106b2565b60405190151581526020015b60405180910390f35b34801561020857600080fd5b506102116107a6565b6040516101f39190612180565b34801561022a57600080fd5b506101e76102393660046121cf565b61087b565b34801561024a57600080fd5b507f52c63247e1f47db19d5ce0460030c497f067ca4cebf71ba98eeadabe20bace02545b6040519081526020016101f3565b34801561028857600080fd5b5061029c6102973660046121f9565b610893565b005b3480156102aa57600080fd5b506101e76102b9366004612214565b610a3e565b3480156102ca57600080fd5b5061026e6102d9366004612250565b60009081527f02dd7bc7dec4dceedda775e58dd541e08a116c6c53815c0bd028192f7b626800602052604090206001015490565b34801561031957600080fd5b5061029c610328366004612269565b610a64565b34801561033957600080fd5b5060005460405160ff90911681526020016101f3565b34801561035b57600080fd5b5061029c61036a366004612269565b610aae565b34801561037b57600080fd5b5061029c610aff565b34801561039057600080fd5b5061029c61039f3660046121cf565b610b3c565b61029c6103b2366004612321565b610bae565b3480156103c357600080fd5b5061026e610bc9565b3480156103d857600080fd5b507fcd5ed15c6e187e77e9aee88184c21f4f2182ab5827cb3b7e07fbedcd63f033005460ff166101e7565b34801561040f57600080fd5b5061029c61041e3660046123a3565b610bf8565b34801561042f57600080fd5b5061029c61043e3660046121f9565b610da8565b34801561044f57600080fd5b5061026e61045e3660046121f9565b6001600160a01b031660009081527f52c63247e1f47db19d5ce0460030c497f067ca4cebf71ba98eeadabe20bace00602052604090205490565b3480156104a457600080fd5b5061026e7fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c2177581565b3480156104d857600080fd5b5061029c6104e73660046121cf565b6110a9565b3480156104f857600080fd5b5061029c6110ed565b34801561050d57600080fd5b506101e761051c366004612269565b60009182527f02dd7bc7dec4dceedda775e58dd541e08a116c6c53815c0bd028192f7b626800602090815260408084206001600160a01b0393909316845291905290205460ff1690565b34801561057257600080fd5b50610211611127565b34801561058757600080fd5b5061026e600081565b34801561059c57600080fd5b506101e76105ab3660046121cf565b611178565b3480156105bc57600080fd5b506102116040518060400160405280600581526020017f352e302e3000000000000000000000000000000000000000000000000000000081525081565b34801561060557600080fd5b5061026e7f52ba824bfabc2bcfcdf7f0edbb486ebb05e1836c90e78047efeb949990f72e5f81565b34801561063957600080fd5b5061029c610648366004612269565b611186565b34801561065957600080fd5b5061026e610668366004612430565b6001600160a01b0391821660009081527f52c63247e1f47db19d5ce0460030c497f067ca4cebf71ba98eeadabe20bace016020908152604080832093909416825291909152205490565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f390d688900000000000000000000000000000000000000000000000000000000148061074557507fffffffff0000000000000000000000000000000000000000000000000000000082167f36372b0700000000000000000000000000000000000000000000000000000000145b8061079157507fffffffff0000000000000000000000000000000000000000000000000000000082167fa219a02500000000000000000000000000000000000000000000000000000000145b806107a057506107a0826111ca565b92915050565b7f52c63247e1f47db19d5ce0460030c497f067ca4cebf71ba98eeadabe20bace0380546060917f52c63247e1f47db19d5ce0460030c497f067ca4cebf71ba98eeadabe20bace00916107f79061245a565b80601f01602080910402602001604051908101604052809291908181526020018280546108239061245a565b80156108705780601f1061084557610100808354040283529160200191610870565b820191906000526020600020905b81548152906001019060200180831161085357829003601f168201915b505050505091505090565b600033610889818585611261565b5060019392505050565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00805468010000000000000000810460ff16159067ffffffffffffffff166000811580156108de5750825b905060008267ffffffffffffffff1660011480156108fb5750303b155b905081158015610909575080155b15610940576040517ff92ee8a900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b845467ffffffffffffffff19166001178555831561097457845468ff00000000000000001916680100000000000000001785555b6109eb6040518060400160405280601381526020017f456d6d65742046696e616e636520546f6b656e000000000000000000000000008152506040518060400160405280600581526020017f454d4d4554000000000000000000000000000000000000000000000000000000815250886012610bf8565b8315610a3657845468ff000000000000000019168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b505050505050565b600033610a4c85828561126e565b610a5785858561131e565b60019150505b9392505050565b60008281527f02dd7bc7dec4dceedda775e58dd541e08a116c6c53815c0bd028192f7b6268006020526040902060010154610a9e816113af565b610aa883836113b9565b50505050565b6001600160a01b0381163314610af0576040517f6697b23200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610afa8282611488565b505050565b610b0761152e565b7fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c21775610b31816113af565b610b3961158b565b50565b610b446115fd565b610b4c611659565b7f52ba824bfabc2bcfcdf7f0edbb486ebb05e1836c90e78047efeb949990f72e5f610b76816113af565b610b8083836116da565b50610baa60017f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f0055565b5050565b610bb661174f565b610bbf8261181f565b610baa8282611849565b6000610bd361194a565b507f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc90565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00805468010000000000000000810460ff16159067ffffffffffffffff16600081158015610c435750825b905060008267ffffffffffffffff166001148015610c605750303b155b905081158015610c6e575080155b15610ca5576040517ff92ee8a900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b845467ffffffffffffffff191660011785558315610cd957845468ff00000000000000001916680100000000000000001785555b610ce389896119ac565b610ceb6119be565b610cf36119c6565b610cfb6119d6565b610d036119be565b610d0e6000336113b9565b50610d397fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c21775336113b9565b50610d4387610da8565b6000805460ff191660ff88161790558315610d9d57845468ff000000000000000019168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b505050505050505050565b7fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c21775610dd2816113af565b6001600160a01b038216610e2d5760405162461bcd60e51b815260206004820152601f60248201527f6e65774272696467654d6f64756c652069732061646472657373207a65726f0060448201526064015b60405180910390fd5b816001600160a01b03163b600003610ead5760405162461bcd60e51b815260206004820152602160248201527f6e65774272696467654d6f64756c65206973206e6f74206120636f6e7472616360448201527f74000000000000000000000000000000000000000000000000000000000000006064820152608401610e24565b6040517f01ffc9a70000000000000000000000000000000000000000000000000000000081527f0f01dd820000000000000000000000000000000000000000000000000000000060048201526001600160a01b038316906301ffc9a790602401602060405180830381865afa158015610f2a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f4e9190612494565b610fc05760405162461bcd60e51b815260206004820152603060248201527f6e65774272696467654d6f64756c6520646f6573206e6f7420696d706c656d6560448201527f6e7420494272696467654d6f64756c65000000000000000000000000000000006064820152608401610e24565b600054610ffc907f52ba824bfabc2bcfcdf7f0edbb486ebb05e1836c90e78047efeb949990f72e5f9061010090046001600160a01b0316611488565b506110277f52ba824bfabc2bcfcdf7f0edbb486ebb05e1836c90e78047efeb949990f72e5f836113b9565b50600080546040516001600160a01b0380861693610100909304169133917fe0e5a2cb89c381a6558890231eb3b1517daaad18c96f650a8050226443b7f7119190a450600080546001600160a01b03909216610100027fffffffffffffffffffffff0000000000000000000000000000000000000000ff909216919091179055565b6110b16115fd565b6110b9611659565b7f52ba824bfabc2bcfcdf7f0edbb486ebb05e1836c90e78047efeb949990f72e5f6110e3816113af565b610b8083836119e6565b6110f56115fd565b7fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c2177561111f816113af565b610b39611a35565b7f52c63247e1f47db19d5ce0460030c497f067ca4cebf71ba98eeadabe20bace0480546060917f52c63247e1f47db19d5ce0460030c497f067ca4cebf71ba98eeadabe20bace00916107f79061245a565b60003361088981858561131e565b60008281527f02dd7bc7dec4dceedda775e58dd541e08a116c6c53815c0bd028192f7b62680060205260409020600101546111c0816113af565b610aa88383611488565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f7965db0b0000000000000000000000000000000000000000000000000000000014806107a057507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316146107a0565b610afa8383836001611a90565b6001600160a01b0383811660009081527f52c63247e1f47db19d5ce0460030c497f067ca4cebf71ba98eeadabe20bace0160209081526040808320938616835292905220546000198114610aa8578181101561130f576040517ffb8f41b20000000000000000000000000000000000000000000000000000000081526001600160a01b03841660048201526024810182905260448101839052606401610e24565b610aa884848484036000611a90565b6001600160a01b038316611361576040517f96c6fd1e00000000000000000000000000000000000000000000000000000000815260006004820152602401610e24565b6001600160a01b0382166113a4576040517fec442f0500000000000000000000000000000000000000000000000000000000815260006004820152602401610e24565b610afa838383611bbc565b610b398133611d25565b60008281527f02dd7bc7dec4dceedda775e58dd541e08a116c6c53815c0bd028192f7b626800602081815260408084206001600160a01b038616855290915282205460ff1661147e576000848152602082815260408083206001600160a01b03871684529091529020805460ff191660011790556114343390565b6001600160a01b0316836001600160a01b0316857f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a460019150506107a0565b60009150506107a0565b60008281527f02dd7bc7dec4dceedda775e58dd541e08a116c6c53815c0bd028192f7b626800602081815260408084206001600160a01b038616855290915282205460ff161561147e576000848152602082815260408083206001600160a01b0387168085529252808320805460ff1916905551339287917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a460019150506107a0565b7fcd5ed15c6e187e77e9aee88184c21f4f2182ab5827cb3b7e07fbedcd63f033005460ff16611589576040517f8dfc202b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b61159361152e565b7fcd5ed15c6e187e77e9aee88184c21f4f2182ab5827cb3b7e07fbedcd63f03300805460ff191681557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a150565b7fcd5ed15c6e187e77e9aee88184c21f4f2182ab5827cb3b7e07fbedcd63f033005460ff1615611589576040517fd93c066500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f0080547ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016116d4576040517f3ee5aeb500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60029055565b6001600160a01b03821661171d576040517fec442f0500000000000000000000000000000000000000000000000000000000815260006004820152602401610e24565b610baa60008383611bbc565b60017f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f0055565b306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614806117e857507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166117dc7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b6001600160a01b031614155b15611589576040517fe07c8dba00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c21775610baa816113af565b816001600160a01b03166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa9250505080156118a3575060408051601f3d908101601f191682019092526118a0918101906124b6565b60015b6118e4576040517f4c9c8ce30000000000000000000000000000000000000000000000000000000081526001600160a01b0383166004820152602401610e24565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc8114611940576040517faa1d49a400000000000000000000000000000000000000000000000000000000815260048101829052602401610e24565b610afa8383611db2565b306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614611589576040517fe07c8dba00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6119b4611e08565b610baa8282611e6f565b611589611e08565b6119ce611e08565b611589611ed2565b6119de611e08565b611589611f05565b6001600160a01b038216611a29576040517f96c6fd1e00000000000000000000000000000000000000000000000000000000815260006004820152602401610e24565b610baa82600083611bbc565b611a3d6115fd565b7fcd5ed15c6e187e77e9aee88184c21f4f2182ab5827cb3b7e07fbedcd63f03300805460ff191660011781557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258336115df565b7f52c63247e1f47db19d5ce0460030c497f067ca4cebf71ba98eeadabe20bace006001600160a01b038516611af4576040517fe602df0500000000000000000000000000000000000000000000000000000000815260006004820152602401610e24565b6001600160a01b038416611b37576040517f94280d6200000000000000000000000000000000000000000000000000000000815260006004820152602401610e24565b6001600160a01b03808616600090815260018301602090815260408083209388168352929052208390558115611bb557836001600160a01b0316856001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92585604051611bac91815260200190565b60405180910390a35b5050505050565b7f52c63247e1f47db19d5ce0460030c497f067ca4cebf71ba98eeadabe20bace006001600160a01b038416611c0a5781816002016000828254611bff91906124cf565b90915550611c959050565b6001600160a01b03841660009081526020829052604090205482811015611c76576040517fe450d38c0000000000000000000000000000000000000000000000000000000081526001600160a01b03861660048201526024810182905260448101849052606401610e24565b6001600160a01b03851660009081526020839052604090209083900390555b6001600160a01b038316611cb3576002810180548390039055611cd2565b6001600160a01b03831660009081526020829052604090208054830190555b826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051611d1791815260200190565b60405180910390a350505050565b60008281527f02dd7bc7dec4dceedda775e58dd541e08a116c6c53815c0bd028192f7b626800602090815260408083206001600160a01b038516845290915290205460ff16610baa576040517fe2517d3f0000000000000000000000000000000000000000000000000000000081526001600160a01b038216600482015260248101839052604401610e24565b611dbb82611f0d565b6040516001600160a01b038316907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a2805115611e0057610afa8282611fb5565b610baa61202b565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a005468010000000000000000900460ff16611589576040517fd7e6bcf800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611e77611e08565b7f52c63247e1f47db19d5ce0460030c497f067ca4cebf71ba98eeadabe20bace007f52c63247e1f47db19d5ce0460030c497f067ca4cebf71ba98eeadabe20bace03611ec38482612538565b5060048101610aa88382612538565b611eda611e08565b7fcd5ed15c6e187e77e9aee88184c21f4f2182ab5827cb3b7e07fbedcd63f03300805460ff19169055565b611729611e08565b806001600160a01b03163b600003611f5c576040517f4c9c8ce30000000000000000000000000000000000000000000000000000000081526001600160a01b0382166004820152602401610e24565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0392909216919091179055565b6060600080846001600160a01b031684604051611fd291906125f8565b600060405180830381855af49150503d806000811461200d576040519150601f19603f3d011682016040523d82523d6000602084013e612012565b606091505b5091509150612022858383612063565b95945050505050565b3415611589576040517fb398979f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60608261207857612073826120d8565b610a5d565b815115801561208f57506001600160a01b0384163b155b156120d1576040517f9996b3150000000000000000000000000000000000000000000000000000000081526001600160a01b0385166004820152602401610e24565b5080610a5d565b8051156120e85780518082602001fd5b6040517f1425ea4200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006020828403121561212c57600080fd5b81357fffffffff0000000000000000000000000000000000000000000000000000000081168114610a5d57600080fd5b60005b8381101561217757818101518382015260200161215f565b50506000910152565b602081526000825180602084015261219f81604085016020870161215c565b601f01601f19169190910160400192915050565b80356001600160a01b03811681146121ca57600080fd5b919050565b600080604083850312156121e257600080fd5b6121eb836121b3565b946020939093013593505050565b60006020828403121561220b57600080fd5b610a5d826121b3565b60008060006060848603121561222957600080fd5b612232846121b3565b9250612240602085016121b3565b9150604084013590509250925092565b60006020828403121561226257600080fd5b5035919050565b6000806040838503121561227c57600080fd5b8235915061228c602084016121b3565b90509250929050565b634e487b7160e01b600052604160045260246000fd5b600067ffffffffffffffff808411156122c6576122c6612295565b604051601f8501601f19908116603f011681019082821181831017156122ee576122ee612295565b8160405280935085815286868601111561230757600080fd5b858560208301376000602087830101525050509392505050565b6000806040838503121561233457600080fd5b61233d836121b3565b9150602083013567ffffffffffffffff81111561235957600080fd5b8301601f8101851361236a57600080fd5b612379858235602084016122ab565b9150509250929050565b600082601f83011261239457600080fd5b610a5d838335602085016122ab565b600080600080608085870312156123b957600080fd5b843567ffffffffffffffff808211156123d157600080fd5b6123dd88838901612383565b955060208701359150808211156123f357600080fd5b5061240087828801612383565b93505061240f604086016121b3565b9150606085013560ff8116811461242557600080fd5b939692955090935050565b6000806040838503121561244357600080fd5b61244c836121b3565b915061228c602084016121b3565b600181811c9082168061246e57607f821691505b60208210810361248e57634e487b7160e01b600052602260045260246000fd5b50919050565b6000602082840312156124a657600080fd5b81518015158114610a5d57600080fd5b6000602082840312156124c857600080fd5b5051919050565b808201808211156107a057634e487b7160e01b600052601160045260246000fd5b601f821115610afa576000816000526020600020601f850160051c810160208610156125195750805b601f850160051c820191505b81811015610a3657828155600101612525565b815167ffffffffffffffff81111561255257612552612295565b61256681612560845461245a565b846124f0565b602080601f83116001811461259b57600084156125835750858301515b600019600386901b1c1916600185901b178555610a36565b600085815260208120601f198616915b828110156125ca578886015182559484019460019091019084016125ab565b50858210156125e85787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6000825161260a81846020870161215c565b919091019291505056fea264697066735822122042f9c5fc39b5fbdaae1b141a3f7115edea44e4a356603ce0480fb783dc15d8b464736f6c63430008180033";
    static readonly abi: readonly [{
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
            readonly name: "implementation";
            readonly type: "address";
        }];
        readonly name: "ERC1967InvalidImplementation";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ERC1967NonPayable";
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
        readonly name: "EnforcedPause";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ExpectedPause";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "FailedInnerCall";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidInitialization";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NotInitializing";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ReentrancyGuardReentrantCall";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "UUPSUnauthorizedCallContext";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "slot";
            readonly type: "bytes32";
        }];
        readonly name: "UUPSUnsupportedProxiableUUID";
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
            readonly name: "updater";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "oldBridge";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newBridgeModule";
            readonly type: "address";
        }];
        readonly name: "BridgeUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint64";
            readonly name: "version";
            readonly type: "uint64";
        }];
        readonly name: "Initialized";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "Paused";
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
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "Unpaused";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "implementation";
            readonly type: "address";
        }];
        readonly name: "Upgraded";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "ADMIN_ROLE";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
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
        readonly inputs: readonly [];
        readonly name: "UPGRADE_INTERFACE_VERSION";
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
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "burnFrom";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
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
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "bridge";
            readonly type: "address";
        }];
        readonly name: "init";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "symbol";
            readonly type: "string";
        }, {
            readonly internalType: "address";
            readonly name: "bridge";
            readonly type: "address";
        }, {
            readonly internalType: "uint8";
            readonly name: "decimals_";
            readonly type: "uint8";
        }];
        readonly name: "initialize";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
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
        readonly name: "mint";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
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
        readonly inputs: readonly [];
        readonly name: "pause";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "paused";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "proxiableUUID";
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
        readonly inputs: readonly [];
        readonly name: "unpause";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newBridgeModule";
            readonly type: "address";
        }];
        readonly name: "updateBridge";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newImplementation";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly name: "upgradeToAndCall";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }];
    static createInterface(): EmmetInterface;
    static connect(address: string, runner?: ContractRunner | null): Emmet;
}
export {};
