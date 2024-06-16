import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type { EmmetTokenVault, EmmetTokenVaultInterface } from "../../../contracts/conventional/EmmetTokenVault";
type EmmetTokenVaultConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class EmmetTokenVault__factory extends ContractFactory {
    constructor(...args: EmmetTokenVaultConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<EmmetTokenVault & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): EmmetTokenVault__factory;
    static readonly bytecode = "0x60806040523480156200001157600080fd5b50600060016200002282336200004e565b508062000034576200003482620000fd565b5050600280546001600160a01b0319163317905562000402565b6000828152602081815260408083206001600160a01b038516845290915281205460ff16620000f3576000838152602081815260408083206001600160a01b03861684529091529020805460ff19166001179055620000aa3390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a4506001620000f7565b5060005b92915050565b6200012e81604051806040016040528060078152602001666272696467655f60c81b8152506200020160201b60201c565b6200015f81604051806040016040528060078152602001666272696467655f60c81b8152506200025260201b60201c565b6001546200018790600080516020620013ea833981519152906001600160a01b03166200029c565b506001546001600160a01b0316620001af600080516020620013ea833981519152836200004e565b50600180546001600160a01b0319166001600160a01b0384811691821790925560405190918316907faae9beddccf584528e87b66c6ff2563825c8a1433305b8a656e9b5f9bf39049990600090a35050565b60408051808201909152601881527f657870656374656420746f206265206e6f6e207a65726f2e000000000000000060208201526200024e906001600160a01b0384161590839062000321565b5050565b6200024e826001600160a01b03163b600014826040518060400160405280601281526020017134b9903737ba10309031b7b73a3930b1ba1760711b8152506200032160201b60201c565b6000828152602081815260408083206001600160a01b038516845290915281205460ff1615620000f3576000838152602081815260408083206001600160a01b0386168085529252808320805460ff1916905551339286917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a4506001620000f7565b82156200036f5781816040516020016200033d9291906200039a565b60408051601f1981840301815290829052631aaca1eb60e11b82526200036691600401620003cd565b60405180910390fd5b505050565b60005b838110156200039157818101518382015260200162000377565b50506000910152565b60008351620003ae81846020880162000374565b835190830190620003c481836020880162000374565b01949350505050565b6020815260008251806020840152620003ee81604085016020870162000374565b601f01601f19169190910160400192915050565b610fd880620004126000396000f3fe6080604052600436106100ec5760003560e01c8063a217fddf1161008a578063d547741f11610059578063d547741f146102ee578063e2f273bd1461030e578063e78cea921461032e578063f851a4401461036657610125565b8063a217fddf14610265578063b5bfddea1461027a578063beabacc8146102ae578063c4d66de8146102ce57610125565b806336568abe116100c657806336568abe146101e557806364a197f3146102055780636eb382121461022557806391d148541461024557610125565b806301ffc9a714610152578063248a9ca3146101875780632f2ff15d146101c557610125565b36610125576001546001600160a01b031633146101235760405163570870ef60e11b81523360048201526024015b60405180910390fd5b005b6001546001600160a01b031633146101235760405163570870ef60e11b815233600482015260240161011a565b34801561015e57600080fd5b5061017261016d366004610dce565b610386565b60405190151581526020015b60405180910390f35b34801561019357600080fd5b506101b76101a2366004610dff565b60009081526020819052604090206001015490565b60405190815260200161017e565b3480156101d157600080fd5b506101236101e0366004610e34565b6103bd565b3480156101f157600080fd5b50610123610200366004610e34565b6103e8565b34801561021157600080fd5b50610123610220366004610e60565b610420565b34801561023157600080fd5b50610123610240366004610e8a565b610568565b34801561025157600080fd5b50610172610260366004610e34565b610580565b34801561027157600080fd5b506101b7600081565b34801561028657600080fd5b506101b77f52ba824bfabc2bcfcdf7f0edbb486ebb05e1836c90e78047efeb949990f72e5f81565b3480156102ba57600080fd5b506101236102c9366004610ea5565b6105a9565b3480156102da57600080fd5b506101236102e9366004610e8a565b6107b9565b3480156102fa57600080fd5b50610123610309366004610e34565b6108c8565b34801561031a57600080fd5b50610123610329366004610e8a565b6108ed565b34801561033a57600080fd5b5060015461034e906001600160a01b031681565b6040516001600160a01b03909116815260200161017e565b34801561037257600080fd5b5060025461034e906001600160a01b031681565b60006001600160e01b03198216637965db0b60e01b14806103b757506301ffc9a760e01b6001600160e01b03198316145b92915050565b6000828152602081905260409020600101546103d8816109a3565b6103e283836109b0565b50505050565b6001600160a01b03811633146104115760405163334bd91960e11b815260040160405180910390fd5b61041b8282610a42565b505050565b6001546001600160a01b0316331461044d5760405163570870ef60e11b815233600482015260240161011a565b6104728260405180604001604052806003815260200162746f5f60e81b815250610aad565b61049b8160405180604001604052806007815260200166616d6f756e745f60c81b815250610b02565b47818110156104c75760405163bce5067160e01b8152600481018390526024810182905260440161011a565b6000836001600160a01b031683604051610504907f456d6d657442726964676520636f696e2072656c656173650000000000000000815260180190565b60006040518083038185875af1925050503d8060008114610541576040519150601f19603f3d011682016040523d82523d6000602084013e610546565b606091505b50509050806103e25760405163b12d13eb60e01b815260040160405180910390fd5b6000610573816109a3565b61057c82610b3b565b5050565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b6001546001600160a01b031633146105d65760405163570870ef60e11b815233600482015260240161011a565b610604836040518060400160405280600c81526020016b6c6f636b6564546f6b656e5f60a01b815250610aad565b610632836040518060400160405280600c81526020016b6c6f636b6564546f6b656e5f60a01b815250610c4d565b6106578260405180604001604052806003815260200162746f5f60e81b815250610aad565b6106808160405180604001604052806007815260200166616d6f756e745f60c81b815250610b02565b6040516370a0823160e01b815230600482015283906000906001600160a01b038316906370a0823190602401602060405180830381865afa1580156106c9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106ed9190610ee1565b90508281101561071a5760405163bce5067160e01b8152600481018490526024810182905260440161011a565b60405163a9059cbb60e01b81526001600160a01b038581166004830152602482018590526000919084169063a9059cbb906044016020604051808303816000875af115801561076d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107919190610efa565b9050806107b157604051633c9fd93960e21b815260040160405180910390fd5b505050505050565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a008054600160401b810460ff16159067ffffffffffffffff166000811580156107ff5750825b905060008267ffffffffffffffff16600114801561081c5750303b155b90508115801561082a575080155b156108485760405163f92ee8a960e01b815260040160405180910390fd5b845467ffffffffffffffff19166001178555831561087257845460ff60401b1916600160401b1785555b61087b86610b3b565b83156107b157845460ff60401b19168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a1505050505050565b6000828152602081905260409020600101546108e3816109a3565b6103e28383610a42565b6002546001600160a01b0316331461091a5760405163570870ef60e11b815233600482015260240161011a565b610942816040518060400160405280600681526020016561646d696e5f60d01b815250610aad565b600280546001600160a01b038381166001600160a01b031983168117909355604080519190921680825260208201939093527faef13d210b8a75b8fbff9c55099253b5d1a907b81cfc1eb0401debbbad466281910160405180910390a15050565b6109ad8133610c95565b50565b60006109bc8383610580565b610a3a576000838152602081815260408083206001600160a01b03861684529091529020805460ff191660011790556109f23390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45060016103b7565b5060006103b7565b6000610a4e8383610580565b15610a3a576000838152602081815260408083206001600160a01b0386168085529252808320805460ff1916905551339286917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45060016103b7565b61057c60006001600160a01b0316836001600160a01b031614826040518060400160405280601881526020017f657870656374656420746f206265206e6f6e207a65726f2e0000000000000000815250610cce565b61057c82600014826040518060400160405280601381526020017239b437bab632103737ba103132903d32b9379760691b815250610cce565b610b6481604051806040016040528060078152602001666272696467655f60c81b815250610aad565b610b8d81604051806040016040528060078152602001666272696467655f60c81b815250610d0e565b600154610bc4907f52ba824bfabc2bcfcdf7f0edbb486ebb05e1836c90e78047efeb949990f72e5f906001600160a01b0316610a42565b506001546001600160a01b0316610bfb7f52ba824bfabc2bcfcdf7f0edbb486ebb05e1836c90e78047efeb949990f72e5f836109b0565b50600180546001600160a01b0319166001600160a01b0384811691821790925560405190918316907faae9beddccf584528e87b66c6ff2563825c8a1433305b8a656e9b5f9bf39049990600090a35050565b61057c826336372b0760e01b836040518060400160405280601e81526020017f6973206e6f7420612070726f70657220455243323020636f6e74726163740000815250610d50565b610c9f8282610580565b61057c5760405163e2517d3f60e01b81526001600160a01b03821660048201526024810183905260440161011a565b821561041b578181604051602001610ce7929190610f40565b60408051601f1981840301815290829052631aaca1eb60e11b825261011a91600401610f6f565b61057c826001600160a01b03163b600014826040518060400160405280601281526020017134b9903737ba10309031b7b73a3930b1ba1760711b815250610cce565b6040516301ffc9a760e01b81526001600160e01b0319841660048201526103e2906001600160a01b038616906301ffc9a790602401602060405180830381865afa158015610da2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dc69190610efa565b158383610cce565b600060208284031215610de057600080fd5b81356001600160e01b031981168114610df857600080fd5b9392505050565b600060208284031215610e1157600080fd5b5035919050565b80356001600160a01b0381168114610e2f57600080fd5b919050565b60008060408385031215610e4757600080fd5b82359150610e5760208401610e18565b90509250929050565b60008060408385031215610e7357600080fd5b610e7c83610e18565b946020939093013593505050565b600060208284031215610e9c57600080fd5b610df882610e18565b600080600060608486031215610eba57600080fd5b610ec384610e18565b9250610ed160208501610e18565b9150604084013590509250925092565b600060208284031215610ef357600080fd5b5051919050565b600060208284031215610f0c57600080fd5b81518015158114610df857600080fd5b60005b83811015610f37578181015183820152602001610f1f565b50506000910152565b60008351610f52818460208801610f1c565b835190830190610f66818360208801610f1c565b01949350505050565b6020815260008251806020840152610f8e816040850160208701610f1c565b601f01601f1916919091016040019291505056fea2646970667358221220b2ac58f5039e8af0e0767dc10f943e39eec70397bacdf6b270905c2969e89ad164736f6c6343000818003352ba824bfabc2bcfcdf7f0edbb486ebb05e1836c90e78047efeb949990f72e5f";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
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
        readonly inputs: readonly [];
        readonly name: "ERC20TransferFailed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ETHTransferFailed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "required";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "actual";
            readonly type: "uint256";
        }];
        readonly name: "InsufficientVaultBalance";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidInitialization";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "EOA";
            readonly type: "address";
        }];
        readonly name: "NotAContract";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NotInitializing";
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
            readonly name: "caller";
            readonly type: "address";
        }];
        readonly name: "Unauthorised";
        readonly type: "error";
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
            readonly internalType: "uint64";
            readonly name: "version";
            readonly type: "uint64";
        }];
        readonly name: "Initialized";
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
            readonly name: "oldAddress";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "newAddress";
            readonly type: "address";
        }];
        readonly name: "Update";
        readonly type: "event";
    }, {
        readonly stateMutability: "payable";
        readonly type: "fallback";
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
        readonly name: "admin";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
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
            readonly name: "bridge_";
            readonly type: "address";
        }];
        readonly name: "initialize";
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
            readonly name: "to_";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount_";
            readonly type: "uint256";
        }];
        readonly name: "sendETH";
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
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "lockedToken_";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "to_";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount_";
            readonly type: "uint256";
        }];
        readonly name: "transfer";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "admin_";
            readonly type: "address";
        }];
        readonly name: "updateAdmin";
        readonly outputs: readonly [];
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
        readonly stateMutability: "payable";
        readonly type: "receive";
    }];
    static createInterface(): EmmetTokenVaultInterface;
    static connect(address: string, runner?: ContractRunner | null): EmmetTokenVault;
}
export {};
