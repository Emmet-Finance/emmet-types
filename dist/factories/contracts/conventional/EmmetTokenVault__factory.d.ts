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
    static readonly bytecode = "0x60806040523480156200001157600080fd5b50600060016200002282336200004e565b508062000034576200003482620000fd565b5050600280546001600160a01b0319163317905562000414565b6000828152602081815260408083206001600160a01b038516845290915281205460ff16620000f3576000838152602081815260408083206001600160a01b03861684529091529020805460ff19166001179055620000aa3390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a4506001620000f7565b5060005b92915050565b6200012e81604051806040016040528060078152602001666272696467655f60c81b8152506200021460201b60201c565b6200015f81604051806040016040528060078152602001666272696467655f60c81b8152506200026560201b60201c565b6001546001600160a01b0316156200019b57600154620001999060008051602062001746833981519152906001600160a01b0316620002af565b505b6001546001600160a01b0316620001c260008051602062001746833981519152836200004e565b50600180546001600160a01b0319166001600160a01b0384811691821790925560405190918316907faae9beddccf584528e87b66c6ff2563825c8a1433305b8a656e9b5f9bf39049990600090a35050565b60408051808201909152601881527f657870656374656420746f206265206e6f6e207a65726f2e0000000000000000602082015262000261906001600160a01b0384161590839062000334565b5050565b62000261826001600160a01b03163b600014826040518060400160405280601281526020017134b9903737ba10309031b7b73a3930b1ba1760711b8152506200033460201b60201c565b6000828152602081815260408083206001600160a01b038516845290915281205460ff1615620000f3576000838152602081815260408083206001600160a01b0386168085529252808320805460ff1916905551339286917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a4506001620000f7565b82156200038157818160405160200162000350929190620003ac565b60408051601f198184030181529082905262461bcd60e51b82526200037891600401620003df565b60405180910390fd5b505050565b60005b83811015620003a357818101518382015260200162000389565b50506000910152565b60008351620003c081846020880162000386565b835190830190620003d681836020880162000386565b01949350505050565b60208152600082518060208401526200040081604085016020870162000386565b601f01601f19169190910160400192915050565b61132280620004246000396000f3fe6080604052600436106100ec5760003560e01c8063a217fddf1161008a578063d547741f11610059578063d547741f14610312578063e2f273bd14610332578063e78cea9214610352578063f851a4401461038a57610125565b8063a217fddf14610289578063b5bfddea1461029e578063beabacc8146102d2578063c4d66de8146102f257610125565b806336568abe116100c657806336568abe146101e557806364a197f3146102055780636eb382121461022557806391d148541461024557610125565b806301ffc9a714610152578063248a9ca3146101875780632f2ff15d146101c557610125565b36610125576001546001600160a01b031633146101235760405163570870ef60e11b81523360048201526024015b60405180910390fd5b005b6001546001600160a01b031633146101235760405163570870ef60e11b815233600482015260240161011a565b34801561015e57600080fd5b5061017261016d366004611100565b6103aa565b60405190151581526020015b60405180910390f35b34801561019357600080fd5b506101b76101a2366004611149565b60009081526020819052604090206001015490565b60405190815260200161017e565b3480156101d157600080fd5b506101236101e036600461117e565b610443565b3480156101f157600080fd5b5061012361020036600461117e565b61046e565b34801561021157600080fd5b506101236102203660046111aa565b6104bf565b34801561023157600080fd5b506101236102403660046111d4565b610669565b34801561025157600080fd5b5061017261026036600461117e565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b34801561029557600080fd5b506101b7600081565b3480156102aa57600080fd5b506101b77f52ba824bfabc2bcfcdf7f0edbb486ebb05e1836c90e78047efeb949990f72e5f81565b3480156102de57600080fd5b506101236102ed3660046111ef565b610681565b3480156102fe57600080fd5b5061012361030d3660046111d4565b610947565b34801561031e57600080fd5b5061012361032d36600461117e565b610a9a565b34801561033e57600080fd5b5061012361034d3660046111d4565b610abf565b34801561035e57600080fd5b50600154610372906001600160a01b031681565b6040516001600160a01b03909116815260200161017e565b34801561039657600080fd5b50600254610372906001600160a01b031681565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f7965db0b00000000000000000000000000000000000000000000000000000000148061043d57507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b60008281526020819052604090206001015461045e81610ba4565b6104688383610bb1565b50505050565b6001600160a01b03811633146104b0576040517f6697b23200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104ba8282610c5b565b505050565b6001546001600160a01b031633146104ec5760405163570870ef60e11b815233600482015260240161011a565b61052b826040518060400160405280600381526020017f746f5f0000000000000000000000000000000000000000000000000000000000815250610cde565b61056a816040518060400160405280600781526020017f616d6f756e745f00000000000000000000000000000000000000000000000000815250610d33565b47818110156105af576040517fbce50671000000000000000000000000000000000000000000000000000000008152600481018390526024810182905260440161011a565b6000836001600160a01b0316836040516105ec907f456d6d657442726964676520636f696e2072656c656173650000000000000000815260180190565b60006040518083038185875af1925050503d8060008114610629576040519150601f19603f3d011682016040523d82523d6000602084013e61062e565b606091505b5050905080610468576040517fb12d13eb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061067481610ba4565b61067d82610d76565b5050565b6001546001600160a01b031633146106ae5760405163570870ef60e11b815233600482015260240161011a565b6106ed836040518060400160405280600c81526020017f6c6f636b6564546f6b656e5f0000000000000000000000000000000000000000815250610cde565b61072c836040518060400160405280600c81526020017f6c6f636b6564546f6b656e5f0000000000000000000000000000000000000000815250610ede565b61076b826040518060400160405280600381526020017f746f5f0000000000000000000000000000000000000000000000000000000000815250610cde565b6107aa816040518060400160405280600781526020017f616d6f756e745f00000000000000000000000000000000000000000000000000815250610d33565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015283906000906001600160a01b038316906370a0823190602401602060405180830381865afa15801561080c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610830919061122b565b905082811015610876576040517fbce50671000000000000000000000000000000000000000000000000000000008152600481018490526024810182905260440161011a565b6040517fa9059cbb0000000000000000000000000000000000000000000000000000000081526001600160a01b038581166004830152602482018590526000919084169063a9059cbb906044016020604051808303816000875af11580156108e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109069190611244565b90508061093f576040517ff27f64e400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00805468010000000000000000810460ff16159067ffffffffffffffff166000811580156109925750825b905060008267ffffffffffffffff1660011480156109af5750303b155b9050811580156109bd575080155b156109f4576040517ff92ee8a900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b84547fffffffffffffffffffffffffffffffffffffffffffffffff00000000000000001660011785558315610a3f57845468ff00000000000000001916680100000000000000001785555b610a4886610d76565b831561093f57845468ff000000000000000019168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a1505050505050565b600082815260208190526040902060010154610ab581610ba4565b6104688383610c5b565b6002546001600160a01b03163314610aec5760405163570870ef60e11b815233600482015260240161011a565b610b2b816040518060400160405280600681526020017f61646d696e5f0000000000000000000000000000000000000000000000000000815250610cde565b600280546001600160a01b038381167fffffffffffffffffffffffff000000000000000000000000000000000000000083168117909355604080519190921680825260208201939093527faef13d210b8a75b8fbff9c55099253b5d1a907b81cfc1eb0401debbbad466281910160405180910390a15050565b610bae8133610f3f565b50565b6000828152602081815260408083206001600160a01b038516845290915281205460ff16610c53576000838152602081815260408083206001600160a01b03861684529091529020805460ff19166001179055610c0b3390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a450600161043d565b50600061043d565b6000828152602081815260408083206001600160a01b038516845290915281205460ff1615610c53576000838152602081815260408083206001600160a01b0386168085529252808320805460ff1916905551339286917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a450600161043d565b61067d60006001600160a01b0316836001600160a01b031614826040518060400160405280601881526020017f657870656374656420746f206265206e6f6e207a65726f2e0000000000000000815250610fab565b61067d82600014826040518060400160405280601381526020017f73686f756c64206e6f74206265207a65726f2e00000000000000000000000000815250610fab565b610db5816040518060400160405280600781526020017f6272696467655f00000000000000000000000000000000000000000000000000815250610cde565b610df4816040518060400160405280600781526020017f6272696467655f00000000000000000000000000000000000000000000000000815250611004565b6001546001600160a01b031615610e3e57600154610e3c907f52ba824bfabc2bcfcdf7f0edbb486ebb05e1836c90e78047efeb949990f72e5f906001600160a01b0316610c5b565b505b6001546001600160a01b0316610e747f52ba824bfabc2bcfcdf7f0edbb486ebb05e1836c90e78047efeb949990f72e5f83610bb1565b50600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0384811691821790925560405190918316907faae9beddccf584528e87b66c6ff2563825c8a1433305b8a656e9b5f9bf39049990600090a35050565b61067d827f36372b0700000000000000000000000000000000000000000000000000000000836040518060400160405280601e81526020017f6973206e6f7420612070726f70657220455243323020636f6e74726163740000815250611051565b6000828152602081815260408083206001600160a01b038516845290915290205460ff1661067d576040517fe2517d3f0000000000000000000000000000000000000000000000000000000081526001600160a01b03821660048201526024810183905260440161011a565b82156104ba578181604051602001610fc492919061128a565b60408051601f19818403018152908290527f08c379a000000000000000000000000000000000000000000000000000000000825261011a916004016112b9565b61067d826001600160a01b03163b600014826040518060400160405280601281526020017f6973206e6f74206120636f6e74726163742e0000000000000000000000000000815250610fab565b6040517f01ffc9a70000000000000000000000000000000000000000000000000000000081527fffffffff0000000000000000000000000000000000000000000000000000000084166004820152610468906001600160a01b038616906301ffc9a790602401602060405180830381865afa1580156110d4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110f89190611244565b158383610fab565b60006020828403121561111257600080fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461114257600080fd5b9392505050565b60006020828403121561115b57600080fd5b5035919050565b80356001600160a01b038116811461117957600080fd5b919050565b6000806040838503121561119157600080fd5b823591506111a160208401611162565b90509250929050565b600080604083850312156111bd57600080fd5b6111c683611162565b946020939093013593505050565b6000602082840312156111e657600080fd5b61114282611162565b60008060006060848603121561120457600080fd5b61120d84611162565b925061121b60208501611162565b9150604084013590509250925092565b60006020828403121561123d57600080fd5b5051919050565b60006020828403121561125657600080fd5b8151801515811461114257600080fd5b60005b83811015611281578181015183820152602001611269565b50506000910152565b6000835161129c818460208801611266565b8351908301906112b0818360208801611266565b01949350505050565b60208152600082518060208401526112d8816040850160208701611266565b601f01601f1916919091016040019291505056fea2646970667358221220d3e5c61a5cdba8de9a1bc911122a8391bc02cfa05bf5b909781313e006ae005464736f6c6343000818003352ba824bfabc2bcfcdf7f0edbb486ebb05e1836c90e78047efeb949990f72e5f";
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
