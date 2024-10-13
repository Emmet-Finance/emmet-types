import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../../../common";
import type { WrappedERC20Upgradable, WrappedERC20UpgradableInterface } from "../../../../../../contracts/bridge/components/conventional/WERC20Upgradable.sol/WrappedERC20Upgradable";
type WrappedERC20UpgradableConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class WrappedERC20Upgradable__factory extends ContractFactory {
    constructor(...args: WrappedERC20UpgradableConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<WrappedERC20Upgradable & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): WrappedERC20Upgradable__factory;
    static readonly bytecode = "0x60a06040523060805234801561001457600080fd5b5060805161249361003e6000396000818161159b015281816115c4015261179601526124936000f3fe6080604052600436106101b75760003560e01c806365f6aa35116100ec57806395d89b411161008a578063ad3cb1cc11610064578063ad3cb1cc14610585578063b5bfddea146105ce578063d547741f14610602578063dd62ed3e1461062257600080fd5b806395d89b411461053b578063a217fddf14610550578063a9059cbb1461056557600080fd5b806375b238fc116100c657806375b238fc1461046d57806379cc6790146104a15780638456cb59146104c157806391d14854146104d657600080fd5b806365f6aa35146103d85780636eb38212146103f857806370a082311461041857600080fd5b8063313ce5671161015957806340c10f191161013357806340c10f19146103595780634f1ef2861461037957806352d1902d1461038c5780635c975abb146103a157600080fd5b8063313ce5671461030257806336568abe146103245780633f4ba83a1461034457600080fd5b806318160ddd1161019557806318160ddd1461023357806323b872dd14610271578063248a9ca3146102915780632f2ff15d146102e057600080fd5b806301ffc9a7146101bc57806306fdde03146101f1578063095ea7b314610213575b600080fd5b3480156101c857600080fd5b506101dc6101d7366004611f5b565b610687565b60405190151581526020015b60405180910390f35b3480156101fd57600080fd5b5061020661077b565b6040516101e89190611fc1565b34801561021f57600080fd5b506101dc61022e366004612010565b610850565b34801561023f57600080fd5b507f52c63247e1f47db19d5ce0460030c497f067ca4cebf71ba98eeadabe20bace02545b6040519081526020016101e8565b34801561027d57600080fd5b506101dc61028c36600461203a565b610868565b34801561029d57600080fd5b506102636102ac366004612076565b60009081527f02dd7bc7dec4dceedda775e58dd541e08a116c6c53815c0bd028192f7b626800602052604090206001015490565b3480156102ec57600080fd5b506103006102fb36600461208f565b61088e565b005b34801561030e57600080fd5b5060005460405160ff90911681526020016101e8565b34801561033057600080fd5b5061030061033f36600461208f565b6108d8565b34801561035057600080fd5b50610300610929565b34801561036557600080fd5b50610300610374366004612010565b610966565b610300610387366004612147565b6109d8565b34801561039857600080fd5b506102636109f3565b3480156103ad57600080fd5b507fcd5ed15c6e187e77e9aee88184c21f4f2182ab5827cb3b7e07fbedcd63f033005460ff166101dc565b3480156103e457600080fd5b506103006103f33660046121c9565b610a22565b34801561040457600080fd5b50610300610413366004612256565b610be9565b34801561042457600080fd5b50610263610433366004612256565b6001600160a01b031660009081527f52c63247e1f47db19d5ce0460030c497f067ca4cebf71ba98eeadabe20bace00602052604090205490565b34801561047957600080fd5b506102637fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c2177581565b3480156104ad57600080fd5b506103006104bc366004612010565b610eea565b3480156104cd57600080fd5b50610300610f2e565b3480156104e257600080fd5b506101dc6104f136600461208f565b60009182527f02dd7bc7dec4dceedda775e58dd541e08a116c6c53815c0bd028192f7b626800602090815260408084206001600160a01b0393909316845291905290205460ff1690565b34801561054757600080fd5b50610206610f68565b34801561055c57600080fd5b50610263600081565b34801561057157600080fd5b506101dc610580366004612010565b610fb9565b34801561059157600080fd5b506102066040518060400160405280600581526020017f352e302e3000000000000000000000000000000000000000000000000000000081525081565b3480156105da57600080fd5b506102637f52ba824bfabc2bcfcdf7f0edbb486ebb05e1836c90e78047efeb949990f72e5f81565b34801561060e57600080fd5b5061030061061d36600461208f565b610fc7565b34801561062e57600080fd5b5061026361063d366004612271565b6001600160a01b0391821660009081527f52c63247e1f47db19d5ce0460030c497f067ca4cebf71ba98eeadabe20bace016020908152604080832093909416825291909152205490565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f390d688900000000000000000000000000000000000000000000000000000000148061071a57507fffffffff0000000000000000000000000000000000000000000000000000000082167f36372b0700000000000000000000000000000000000000000000000000000000145b8061076657507fffffffff0000000000000000000000000000000000000000000000000000000082167fa219a02500000000000000000000000000000000000000000000000000000000145b8061077557506107758261100b565b92915050565b7f52c63247e1f47db19d5ce0460030c497f067ca4cebf71ba98eeadabe20bace0380546060917f52c63247e1f47db19d5ce0460030c497f067ca4cebf71ba98eeadabe20bace00916107cc9061229b565b80601f01602080910402602001604051908101604052809291908181526020018280546107f89061229b565b80156108455780601f1061081a57610100808354040283529160200191610845565b820191906000526020600020905b81548152906001019060200180831161082857829003601f168201915b505050505091505090565b60003361085e8185856110a2565b5060019392505050565b6000336108768582856110af565b61088185858561115f565b60019150505b9392505050565b60008281527f02dd7bc7dec4dceedda775e58dd541e08a116c6c53815c0bd028192f7b62680060205260409020600101546108c8816111f0565b6108d283836111fa565b50505050565b6001600160a01b038116331461091a576040517f6697b23200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61092482826112c9565b505050565b61093161136f565b7fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c2177561095b816111f0565b6109636113cc565b50565b61096e61143e565b61097661149a565b7f52ba824bfabc2bcfcdf7f0edbb486ebb05e1836c90e78047efeb949990f72e5f6109a0816111f0565b6109aa838361151b565b506109d460017f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f0055565b5050565b6109e0611590565b6109e982611660565b6109d4828261168a565b60006109fd61178b565b507f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc90565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00805468010000000000000000810460ff16159067ffffffffffffffff16600081158015610a6d5750825b905060008267ffffffffffffffff166001148015610a8a5750303b155b905081158015610a98575080155b15610acf576040517ff92ee8a900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b84547fffffffffffffffffffffffffffffffffffffffffffffffff00000000000000001660011785558315610b1a57845468ff00000000000000001916680100000000000000001785555b610b2489896117ed565b610b2c6117ff565b610b34611807565b610b3c611817565b610b446117ff565b610b4f6000336111fa565b50610b7a7fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c21775336111fa565b50610b8487610be9565b6000805460ff191660ff88161790558315610bde57845468ff000000000000000019168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b505050505050505050565b7fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c21775610c13816111f0565b6001600160a01b038216610c6e5760405162461bcd60e51b815260206004820152601f60248201527f6e65774272696467654d6f64756c652069732061646472657373207a65726f0060448201526064015b60405180910390fd5b816001600160a01b03163b600003610cee5760405162461bcd60e51b815260206004820152602160248201527f6e65774272696467654d6f64756c65206973206e6f74206120636f6e7472616360448201527f74000000000000000000000000000000000000000000000000000000000000006064820152608401610c65565b6040517f01ffc9a70000000000000000000000000000000000000000000000000000000081527f0f01dd820000000000000000000000000000000000000000000000000000000060048201526001600160a01b038316906301ffc9a790602401602060405180830381865afa158015610d6b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d8f91906122d5565b610e015760405162461bcd60e51b815260206004820152603060248201527f6e65774272696467654d6f64756c6520646f6573206e6f7420696d706c656d6560448201527f6e7420494272696467654d6f64756c65000000000000000000000000000000006064820152608401610c65565b600054610e3d907f52ba824bfabc2bcfcdf7f0edbb486ebb05e1836c90e78047efeb949990f72e5f9061010090046001600160a01b03166112c9565b50610e687f52ba824bfabc2bcfcdf7f0edbb486ebb05e1836c90e78047efeb949990f72e5f836111fa565b50600080546040516001600160a01b0380861693610100909304169133917fe0e5a2cb89c381a6558890231eb3b1517daaad18c96f650a8050226443b7f7119190a450600080546001600160a01b03909216610100027fffffffffffffffffffffff0000000000000000000000000000000000000000ff909216919091179055565b610ef261143e565b610efa61149a565b7f52ba824bfabc2bcfcdf7f0edbb486ebb05e1836c90e78047efeb949990f72e5f610f24816111f0565b6109aa8383611827565b610f3661143e565b7fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c21775610f60816111f0565b610963611876565b7f52c63247e1f47db19d5ce0460030c497f067ca4cebf71ba98eeadabe20bace0480546060917f52c63247e1f47db19d5ce0460030c497f067ca4cebf71ba98eeadabe20bace00916107cc9061229b565b60003361085e81858561115f565b60008281527f02dd7bc7dec4dceedda775e58dd541e08a116c6c53815c0bd028192f7b6268006020526040902060010154611001816111f0565b6108d283836112c9565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f7965db0b00000000000000000000000000000000000000000000000000000000148061077557507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000831614610775565b61092483838360016118d1565b6001600160a01b0383811660009081527f52c63247e1f47db19d5ce0460030c497f067ca4cebf71ba98eeadabe20bace01602090815260408083209386168352929052205460001981146108d25781811015611150576040517ffb8f41b20000000000000000000000000000000000000000000000000000000081526001600160a01b03841660048201526024810182905260448101839052606401610c65565b6108d2848484840360006118d1565b6001600160a01b0383166111a2576040517f96c6fd1e00000000000000000000000000000000000000000000000000000000815260006004820152602401610c65565b6001600160a01b0382166111e5576040517fec442f0500000000000000000000000000000000000000000000000000000000815260006004820152602401610c65565b6109248383836119fd565b6109638133611b66565b60008281527f02dd7bc7dec4dceedda775e58dd541e08a116c6c53815c0bd028192f7b626800602081815260408084206001600160a01b038616855290915282205460ff166112bf576000848152602082815260408083206001600160a01b03871684529091529020805460ff191660011790556112753390565b6001600160a01b0316836001600160a01b0316857f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a46001915050610775565b6000915050610775565b60008281527f02dd7bc7dec4dceedda775e58dd541e08a116c6c53815c0bd028192f7b626800602081815260408084206001600160a01b038616855290915282205460ff16156112bf576000848152602082815260408083206001600160a01b0387168085529252808320805460ff1916905551339287917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a46001915050610775565b7fcd5ed15c6e187e77e9aee88184c21f4f2182ab5827cb3b7e07fbedcd63f033005460ff166113ca576040517f8dfc202b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b6113d461136f565b7fcd5ed15c6e187e77e9aee88184c21f4f2182ab5827cb3b7e07fbedcd63f03300805460ff191681557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a150565b7fcd5ed15c6e187e77e9aee88184c21f4f2182ab5827cb3b7e07fbedcd63f033005460ff16156113ca576040517fd93c066500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f0080547ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01611515576040517f3ee5aeb500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60029055565b6001600160a01b03821661155e576040517fec442f0500000000000000000000000000000000000000000000000000000000815260006004820152602401610c65565b6109d4600083836119fd565b60017f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f0055565b306001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016148061162957507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031661161d7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b6001600160a01b031614155b156113ca576040517fe07c8dba00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c217756109d4816111f0565b816001600160a01b03166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa9250505080156116e4575060408051601f3d908101601f191682019092526116e1918101906122f7565b60015b611725576040517f4c9c8ce30000000000000000000000000000000000000000000000000000000081526001600160a01b0383166004820152602401610c65565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc8114611781576040517faa1d49a400000000000000000000000000000000000000000000000000000000815260048101829052602401610c65565b6109248383611bf3565b306001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146113ca576040517fe07c8dba00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6117f5611c49565b6109d48282611cb0565b6113ca611c49565b61180f611c49565b6113ca611d13565b61181f611c49565b6113ca611d46565b6001600160a01b03821661186a576040517f96c6fd1e00000000000000000000000000000000000000000000000000000000815260006004820152602401610c65565b6109d4826000836119fd565b61187e61143e565b7fcd5ed15c6e187e77e9aee88184c21f4f2182ab5827cb3b7e07fbedcd63f03300805460ff191660011781557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a25833611420565b7f52c63247e1f47db19d5ce0460030c497f067ca4cebf71ba98eeadabe20bace006001600160a01b038516611935576040517fe602df0500000000000000000000000000000000000000000000000000000000815260006004820152602401610c65565b6001600160a01b038416611978576040517f94280d6200000000000000000000000000000000000000000000000000000000815260006004820152602401610c65565b6001600160a01b038086166000908152600183016020908152604080832093881683529290522083905581156119f657836001600160a01b0316856001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925856040516119ed91815260200190565b60405180910390a35b5050505050565b7f52c63247e1f47db19d5ce0460030c497f067ca4cebf71ba98eeadabe20bace006001600160a01b038416611a4b5781816002016000828254611a409190612310565b90915550611ad69050565b6001600160a01b03841660009081526020829052604090205482811015611ab7576040517fe450d38c0000000000000000000000000000000000000000000000000000000081526001600160a01b03861660048201526024810182905260448101849052606401610c65565b6001600160a01b03851660009081526020839052604090209083900390555b6001600160a01b038316611af4576002810180548390039055611b13565b6001600160a01b03831660009081526020829052604090208054830190555b826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051611b5891815260200190565b60405180910390a350505050565b60008281527f02dd7bc7dec4dceedda775e58dd541e08a116c6c53815c0bd028192f7b626800602090815260408083206001600160a01b038516845290915290205460ff166109d4576040517fe2517d3f0000000000000000000000000000000000000000000000000000000081526001600160a01b038216600482015260248101839052604401610c65565b611bfc82611d4e565b6040516001600160a01b038316907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a2805115611c41576109248282611df6565b6109d4611e6c565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a005468010000000000000000900460ff166113ca576040517fd7e6bcf800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611cb8611c49565b7f52c63247e1f47db19d5ce0460030c497f067ca4cebf71ba98eeadabe20bace007f52c63247e1f47db19d5ce0460030c497f067ca4cebf71ba98eeadabe20bace03611d048482612381565b50600481016108d28382612381565b611d1b611c49565b7fcd5ed15c6e187e77e9aee88184c21f4f2182ab5827cb3b7e07fbedcd63f03300805460ff19169055565b61156a611c49565b806001600160a01b03163b600003611d9d576040517f4c9c8ce30000000000000000000000000000000000000000000000000000000081526001600160a01b0382166004820152602401610c65565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0392909216919091179055565b6060600080846001600160a01b031684604051611e139190612441565b600060405180830381855af49150503d8060008114611e4e576040519150601f19603f3d011682016040523d82523d6000602084013e611e53565b606091505b5091509150611e63858383611ea4565b95945050505050565b34156113ca576040517fb398979f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606082611eb957611eb482611f19565b610887565b8151158015611ed057506001600160a01b0384163b155b15611f12576040517f9996b3150000000000000000000000000000000000000000000000000000000081526001600160a01b0385166004820152602401610c65565b5080610887565b805115611f295780518082602001fd5b6040517f1425ea4200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600060208284031215611f6d57600080fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461088757600080fd5b60005b83811015611fb8578181015183820152602001611fa0565b50506000910152565b6020815260008251806020840152611fe0816040850160208701611f9d565b601f01601f19169190910160400192915050565b80356001600160a01b038116811461200b57600080fd5b919050565b6000806040838503121561202357600080fd5b61202c83611ff4565b946020939093013593505050565b60008060006060848603121561204f57600080fd5b61205884611ff4565b925061206660208501611ff4565b9150604084013590509250925092565b60006020828403121561208857600080fd5b5035919050565b600080604083850312156120a257600080fd5b823591506120b260208401611ff4565b90509250929050565b634e487b7160e01b600052604160045260246000fd5b600067ffffffffffffffff808411156120ec576120ec6120bb565b604051601f8501601f19908116603f01168101908282118183101715612114576121146120bb565b8160405280935085815286868601111561212d57600080fd5b858560208301376000602087830101525050509392505050565b6000806040838503121561215a57600080fd5b61216383611ff4565b9150602083013567ffffffffffffffff81111561217f57600080fd5b8301601f8101851361219057600080fd5b61219f858235602084016120d1565b9150509250929050565b600082601f8301126121ba57600080fd5b610887838335602085016120d1565b600080600080608085870312156121df57600080fd5b843567ffffffffffffffff808211156121f757600080fd5b612203888389016121a9565b9550602087013591508082111561221957600080fd5b50612226878288016121a9565b93505061223560408601611ff4565b9150606085013560ff8116811461224b57600080fd5b939692955090935050565b60006020828403121561226857600080fd5b61088782611ff4565b6000806040838503121561228457600080fd5b61228d83611ff4565b91506120b260208401611ff4565b600181811c908216806122af57607f821691505b6020821081036122cf57634e487b7160e01b600052602260045260246000fd5b50919050565b6000602082840312156122e757600080fd5b8151801515811461088757600080fd5b60006020828403121561230957600080fd5b5051919050565b8082018082111561077557634e487b7160e01b600052601160045260246000fd5b601f821115610924576000816000526020600020601f850160051c8101602086101561235a5750805b601f850160051c820191505b8181101561237957828155600101612366565b505050505050565b815167ffffffffffffffff81111561239b5761239b6120bb565b6123af816123a9845461229b565b84612331565b602080601f8311600181146123e457600084156123cc5750858301515b600019600386901b1c1916600185901b178555612379565b600085815260208120601f198616915b82811015612413578886015182559484019460019091019084016123f4565b50858210156124315787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60008251612453818460208701611f9d565b919091019291505056fea2646970667358221220fcf96c54477f784b1068ec4406ee9d4b18074ed6d914f97b1e12e8a5267cb8c864736f6c63430008180033";
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
    static createInterface(): WrappedERC20UpgradableInterface;
    static connect(address: string, runner?: ContractRunner | null): WrappedERC20Upgradable;
}
export {};
