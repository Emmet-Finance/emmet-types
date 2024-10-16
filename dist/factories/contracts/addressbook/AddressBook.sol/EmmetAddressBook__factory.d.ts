import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type { EmmetAddressBook, EmmetAddressBookInterface } from "../../../../contracts/addressbook/AddressBook.sol/EmmetAddressBook";
type EmmetAddressBookConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class EmmetAddressBook__factory extends ContractFactory {
    constructor(...args: EmmetAddressBookConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<EmmetAddressBook & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): EmmetAddressBook__factory;
    static readonly bytecode = "0x60a06040523060805234801561001457600080fd5b506080516121f961003e60003960008181610f3001528181610f59015261110c01526121f96000f3fe60806040526004361061018b5760003560e01c80635c975abb116100d6578063a1ebf35d1161007f578063ad3cb1cc11610059578063ad3cb1cc146104d1578063d547741f14610527578063ec87621c1461054757600080fd5b8063a1ebf35d14610468578063a217fddf1461049c578063a815ff15146104b157600080fd5b80638456cb59116100b05780638456cb59146103ba57806391d14854146103cf5780639f6f50ed1461043457600080fd5b80635c975abb1461034c578063693ec85e146103835780637104ddb2146103a357600080fd5b806336568abe11610138578063485cc95511610112578063485cc955146103045780634f1ef2861461032457806352d1902d1461033757600080fd5b806336568abe146102975780633a16e5cf146102b75780633f4ba83a146102ef57600080fd5b8063153348d911610169578063153348d914610206578063248a9ca3146102285780632f2ff15d1461027757600080fd5b806301ffc9a714610190578063056da048146101c557806306661abd146101e7575b600080fd5b34801561019c57600080fd5b506101b06101ab366004611aec565b61057b565b60405190151581526020015b60405180910390f35b3480156101d157600080fd5b506101da6105d7565b6040516101bc9190611b7e565b3480156101f357600080fd5b506001545b6040519081526020016101bc565b34801561021257600080fd5b50610226610221366004611c1c565b6106b3565b005b34801561023457600080fd5b506101f8610243366004611c37565b60009081527f02dd7bc7dec4dceedda775e58dd541e08a116c6c53815c0bd028192f7b626800602052604090206001015490565b34801561028357600080fd5b50610226610292366004611c50565b6107d7565b3480156102a357600080fd5b506102266102b2366004611c50565b610821565b3480156102c357600080fd5b506000546102d7906001600160a01b031681565b6040516001600160a01b0390911681526020016101bc565b3480156102fb57600080fd5b50610226610872565b34801561031057600080fd5b5061022661031f366004611c7c565b6108af565b610226610332366004611d32565b610a7d565b34801561034357600080fd5b506101f8610a98565b34801561035857600080fd5b507fcd5ed15c6e187e77e9aee88184c21f4f2182ab5827cb3b7e07fbedcd63f033005460ff166101b0565b34801561038f57600080fd5b506102d761039e366004611db4565b610ac7565b3480156103af57600080fd5b506001546101f89081565b3480156103c657600080fd5b50610226610ad4565b3480156103db57600080fd5b506101b06103ea366004611c50565b60009182527f02dd7bc7dec4dceedda775e58dd541e08a116c6c53815c0bd028192f7b626800602090815260408084206001600160a01b0393909316845291905290205460ff1690565b34801561044057600080fd5b506101f87fa3096443b30f1eec162a8cf66862cf662a85fd0e4fd35a824b183bfeac968c3281565b34801561047457600080fd5b506101f87fe2f4eaae4a9751e85a3e4a7b9587827a877f29914755229b07a7b2da98285f7081565b3480156104a857600080fd5b506101f8600081565b3480156104bd57600080fd5b506102266104cc366004611de9565b610b0e565b3480156104dd57600080fd5b5061051a6040518060400160405280600581526020017f352e302e3000000000000000000000000000000000000000000000000000000081525081565b6040516101bc9190611e2e565b34801561053357600080fd5b50610226610542366004611c50565b610b4c565b34801561055357600080fd5b506101f87f241ecf16d79d0f8dbfb92cbc07fe17840425976cf0667f022fe9877caa831b0881565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167fc0d4feec0000000000000000000000000000000000000000000000000000000014806105d157506105d182610b90565b92915050565b60606001600201805480602002602001604051908101604052809291908181526020016000905b828210156106aa57838290600052602060002001805461061d90611e41565b80601f016020809104026020016040519081016040528092919081815260200182805461064990611e41565b80156106965780601f1061066b57610100808354040283529160200191610696565b820191906000526020600020905b81548152906001019060200180831161067957829003601f168201915b5050505050815260200190600101906105fe565b50505050905090565b7f241ecf16d79d0f8dbfb92cbc07fe17840425976cf0667f022fe9877caa831b086106dd81610c27565b6106e5610c31565b6001600160a01b038216156107d357816001600160a01b03163b6000036107745760408051808201825260208082527f70726f76696465642063636d5f206973206e6f74206120636f6e74726163742e818301528251808401909352601283527f456d6d65742041646d696e204572726f723a0000000000000000000000000000908301526107749190610c8f565b6000805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0384169081179091556040519081527f157d007e6aa857bd220c7b32cc72f4d3f62ec8f304a4c5d107269f42c00ed4519060200160405180910390a15b5050565b60008281527f02dd7bc7dec4dceedda775e58dd541e08a116c6c53815c0bd028192f7b626800602052604090206001015461081181610c27565b61081b8383610cbb565b50505050565b6001600160a01b0381163314610863576040517f6697b23200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61086d8282610d8a565b505050565b61087a610e30565b7f241ecf16d79d0f8dbfb92cbc07fe17840425976cf0667f022fe9877caa831b086108a481610c27565b6108ac610e8b565b50565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00805468010000000000000000810460ff16159067ffffffffffffffff166000811580156108fa5750825b905060008267ffffffffffffffff1660011480156109175750303b155b905081158015610925575080155b1561095c576040517ff92ee8a900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b84547fffffffffffffffffffffffffffffffffffffffffffffffff000000000000000016600117855583156109a757845468ff00000000000000001916680100000000000000001785555b6109af610efd565b6109b7610f05565b6109bf610efd565b6109c7610f15565b6109d2600033610cbb565b506109fd7fa3096443b30f1eec162a8cf66862cf662a85fd0e4fd35a824b183bfeac968c3288610cbb565b50610a287f241ecf16d79d0f8dbfb92cbc07fe17840425976cf0667f022fe9877caa831b0887610cbb565b508315610a7457845468ff000000000000000019168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b50505050505050565b610a85610f25565b610a8e82610ff5565b6107d38282611000565b6000610aa2611101565b507f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc90565b60006105d1600183611163565b610adc610c31565b7f241ecf16d79d0f8dbfb92cbc07fe17840425976cf0667f022fe9877caa831b08610b0681610c27565b6108ac611197565b610b16610c31565b7f241ecf16d79d0f8dbfb92cbc07fe17840425976cf0667f022fe9877caa831b08610b4081610c27565b61086d600184846111f2565b60008281527f02dd7bc7dec4dceedda775e58dd541e08a116c6c53815c0bd028192f7b6268006020526040902060010154610b8681610c27565b61081b8383610d8a565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f7965db0b0000000000000000000000000000000000000000000000000000000014806105d157507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316146105d1565b6108ac813361134d565b7fcd5ed15c6e187e77e9aee88184c21f4f2182ab5827cb3b7e07fbedcd63f033005460ff1615610c8d576040517fd93c066500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b610c9982826113da565b60405162461bcd60e51b8152600401610cb29190611e2e565b60405180910390fd5b60008281527f02dd7bc7dec4dceedda775e58dd541e08a116c6c53815c0bd028192f7b626800602081815260408084206001600160a01b038616855290915282205460ff16610d80576000848152602082815260408083206001600160a01b03871684529091529020805460ff19166001179055610d363390565b6001600160a01b0316836001600160a01b0316857f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a460019150506105d1565b60009150506105d1565b60008281527f02dd7bc7dec4dceedda775e58dd541e08a116c6c53815c0bd028192f7b626800602081815260408084206001600160a01b038616855290915282205460ff1615610d80576000848152602082815260408083206001600160a01b0387168085529252808320805460ff1916905551339287917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a460019150506105d1565b7fcd5ed15c6e187e77e9aee88184c21f4f2182ab5827cb3b7e07fbedcd63f033005460ff16610c8d576040517f8dfc202b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610e93610e30565b7fcd5ed15c6e187e77e9aee88184c21f4f2182ab5827cb3b7e07fbedcd63f03300805460ff191681557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a150565b610c8d61145a565b610f0d61145a565b610c8d6114c1565b610f1d61145a565b610c8d6114f4565b306001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161480610fbe57507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316610fb27f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b6001600160a01b031614155b15610c8d576040517fe07c8dba00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006107d381610c27565b816001600160a01b03166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa92505050801561105a575060408051601f3d908101601f1916820190925261105791810190611e7b565b60015b61109b576040517f4c9c8ce30000000000000000000000000000000000000000000000000000000081526001600160a01b0383166004820152602401610cb2565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc81146110f7576040517faa1d49a400000000000000000000000000000000000000000000000000000000815260048101829052602401610cb2565b61086d8383611522565b306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610c8d576040517fe07c8dba00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600082600101826040516111779190611e94565b908152604051908190036020019020546001600160a01b03169392505050565b61119f610c31565b7fcd5ed15c6e187e77e9aee88184c21f4f2182ab5827cb3b7e07fbedcd63f03300805460ff191660011781557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a25833610edf565b6001600160a01b03811661120a5761086d8383611578565b6000836001018360405161121e9190611e94565b908152604051908190036020019020546001600160a01b03908116915082168114611305578184600101846040516112569190611e94565b90815260405160209181900382019020805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0393909316929092179091556002850180546001810182556000918252919020016112b18482611f00565b5083548460006112c083611fd6565b91905055507f9b44bb68d692f88dc444d725cdba4f245ea59a47a9eff90a8a2f6e9c8465efb88183856040516112f893929190611ff0565b60405180910390a161081b565b60405162461bcd60e51b815260206004820152601260248201527f4e6f206368616e676520696e20617373657400000000000000000000000000006044820152606401610cb2565b60008281527f02dd7bc7dec4dceedda775e58dd541e08a116c6c53815c0bd028192f7b626800602090815260408083206001600160a01b038516845290915290205460ff166107d3576040517fe2517d3f0000000000000000000000000000000000000000000000000000000081526001600160a01b038216600482015260248101839052604401610cb2565b604080516002808252606082810190935260009190816020015b60608152602001906001900390816113f4579050509050838160008151811061141f5761141f61201c565b6020026020010181905250828160018151811061143e5761143e61201c565b60200260200101819052506114528161180c565b949350505050565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a005468010000000000000000900460ff16610c8d576040517fd7e6bcf800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6114c961145a565b7fcd5ed15c6e187e77e9aee88184c21f4f2182ab5827cb3b7e07fbedcd63f03300805460ff19169055565b6114fc61145a565b60017f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f0055565b61152b82611899565b6040516001600160a01b038316907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a28051156115705761086d8282611936565b6107d36119ac565b6000826001018260405161158c9190611e94565b908152604051908190036020019020546001600160a01b0316905080156117c45782600101826040516115bf9190611e94565b908152604051908190036020019020805473ffffffffffffffffffffffffffffffffffffffff19169055600080805b600286015481101561167f578460405160200161160b9190611e94565b604051602081830303815290604052805190602001208660020182815481106116365761163661201c565b906000526020600020016040516020016116509190612032565b6040516020818303038152906040528051906020012003611677578092506001915061167f565b6001016115ee565b50806116cd5760405162461bcd60e51b815260206004820152600e60248201527f4e616d65206e6f7420666f756e640000000000000000000000000000000000006044820152606401610cb2565b60028501546116de906001906120a8565b821461173d576002850180546116f6906001906120a8565b815481106117065761170661201c565b906000526020600020018560020183815481106117255761172561201c565b90600052602060002001908161173b91906120bb565b505b8460020180548061175057611750612196565b60019003818190600052602060002001600061176c9190611a9e565b9055845485600061177c836121ac565b91905055507f9b44bb68d692f88dc444d725cdba4f245ea59a47a9eff90a8a2f6e9c8465efb8836000866040516117b593929190611ff0565b60405180910390a15050505050565b60405162461bcd60e51b815260206004820152601d60248201527f44656c6574696e672061206e6f6e2d6578697374616e742061737365740000006044820152606401610cb2565b60606000825160005b8181101561183457602081810286010151519290920191600101611815565b50604051925060208301828101604052828452600092505b818310156118915760208381028601810151805191019060005b8181101561187e578281015184820152602001611866565b508083019250505060018301925061184c565b505050919050565b806001600160a01b03163b6000036118e8576040517f4c9c8ce30000000000000000000000000000000000000000000000000000000081526001600160a01b0382166004820152602401610cb2565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b6060600080846001600160a01b0316846040516119539190611e94565b600060405180830381855af49150503d806000811461198e576040519150601f19603f3d011682016040523d82523d6000602084013e611993565b606091505b50915091506119a38583836119e4565b95945050505050565b3415610c8d576040517fb398979f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6060826119f9576119f482611a5c565b611a55565b8151158015611a1057506001600160a01b0384163b155b15611a52576040517f9996b3150000000000000000000000000000000000000000000000000000000081526001600160a01b0385166004820152602401610cb2565b50805b9392505050565b805115611a6c5780518082602001fd5b6040517f1425ea4200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b508054611aaa90611e41565b6000825580601f10611aba575050565b601f0160209004906000526020600020908101906108ac91905b80821115611ae85760008155600101611ad4565b5090565b600060208284031215611afe57600080fd5b81357fffffffff0000000000000000000000000000000000000000000000000000000081168114611a5557600080fd5b60005b83811015611b49578181015183820152602001611b31565b50506000910152565b60008151808452611b6a816020860160208601611b2e565b601f01601f19169290920160200192915050565b600060208083016020845280855180835260408601915060408160051b87010192506020870160005b82811015611bf3577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc0888603018452611be1858351611b52565b94509285019290850190600101611ba7565b5092979650505050505050565b80356001600160a01b0381168114611c1757600080fd5b919050565b600060208284031215611c2e57600080fd5b611a5582611c00565b600060208284031215611c4957600080fd5b5035919050565b60008060408385031215611c6357600080fd5b82359150611c7360208401611c00565b90509250929050565b60008060408385031215611c8f57600080fd5b611c9883611c00565b9150611c7360208401611c00565b634e487b7160e01b600052604160045260246000fd5b600067ffffffffffffffff80841115611cd757611cd7611ca6565b604051601f8501601f19908116603f01168101908282118183101715611cff57611cff611ca6565b81604052809350858152868686011115611d1857600080fd5b858560208301376000602087830101525050509392505050565b60008060408385031215611d4557600080fd5b611d4e83611c00565b9150602083013567ffffffffffffffff811115611d6a57600080fd5b8301601f81018513611d7b57600080fd5b611d8a85823560208401611cbc565b9150509250929050565b600082601f830112611da557600080fd5b611a5583833560208501611cbc565b600060208284031215611dc657600080fd5b813567ffffffffffffffff811115611ddd57600080fd5b61145284828501611d94565b60008060408385031215611dfc57600080fd5b823567ffffffffffffffff811115611e1357600080fd5b611e1f85828601611d94565b925050611c7360208401611c00565b602081526000611a556020830184611b52565b600181811c90821680611e5557607f821691505b602082108103611e7557634e487b7160e01b600052602260045260246000fd5b50919050565b600060208284031215611e8d57600080fd5b5051919050565b60008251611ea6818460208701611b2e565b9190910192915050565b601f82111561086d576000816000526020600020601f850160051c81016020861015611ed95750805b601f850160051c820191505b81811015611ef857828155600101611ee5565b505050505050565b815167ffffffffffffffff811115611f1a57611f1a611ca6565b611f2e81611f288454611e41565b84611eb0565b602080601f831160018114611f635760008415611f4b5750858301515b600019600386901b1c1916600185901b178555611ef8565b600085815260208120601f198616915b82811015611f9257888601518255948401946001909101908401611f73565b5085821015611fb05787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b634e487b7160e01b600052601160045260246000fd5b60006000198203611fe957611fe9611fc0565b5060010190565b60006001600160a01b038086168352808516602084015250606060408301526119a36060830184611b52565b634e487b7160e01b600052603260045260246000fd5b600080835461204081611e41565b60018281168015612058576001811461206d5761209c565b60ff198416875282151583028701945061209c565b8760005260208060002060005b858110156120935781548a82015290840190820161207a565b50505082870194505b50929695505050505050565b818103818111156105d1576105d1611fc0565b8181036120c6575050565b6120d08254611e41565b67ffffffffffffffff8111156120e8576120e8611ca6565b6120f681611f288454611e41565b6000601f82116001811461212a57600083156121125750848201545b600019600385901b1c1916600184901b17845561218f565b600085815260209020601f19841690600086815260209020845b838110156121645782860154825560019586019590910190602001612144565b50858310156121825781850154600019600388901b60f8161c191681555b50505060018360011b0184555b5050505050565b634e487b7160e01b600052603160045260246000fd5b6000816121bb576121bb611fc0565b50600019019056fea26469706673582212201854b8fc77fc498f4db84a5edeed1dc3db541306cf71a2a1ad3878dcc4aaf70164736f6c63430008180033";
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
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "oldAddress";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "newAddress";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }];
        readonly name: "AddressUpdate";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "newCCM";
            readonly type: "address";
        }];
        readonly name: "CCMUpdated";
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
        readonly name: "CFO_ROLE";
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
        readonly name: "MANAGER_ROLE";
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
        readonly name: "UPGRADE_INTERFACE_VERSION";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "ccm";
        readonly outputs: readonly [{
            readonly internalType: "contract ICrossChainMessenger";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "count";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }];
        readonly name: "get";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "asset";
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
            readonly internalType: "address";
            readonly name: "cfo_";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "manager_";
            readonly type: "address";
        }];
        readonly name: "initialize";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "names";
        readonly outputs: readonly [{
            readonly internalType: "string[]";
            readonly name: "";
            readonly type: "string[]";
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
        readonly inputs: readonly [];
        readonly name: "self";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "count";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }, {
            readonly internalType: "address";
            readonly name: "asset";
            readonly type: "address";
        }];
        readonly name: "set";
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
        readonly name: "unpause";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "ccm_";
            readonly type: "address";
        }];
        readonly name: "updateCCM";
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
    static createInterface(): EmmetAddressBookInterface;
    static connect(address: string, runner?: ContractRunner | null): EmmetAddressBook;
}
export {};
