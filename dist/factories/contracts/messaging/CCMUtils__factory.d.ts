import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type { CCMUtils, CCMUtilsInterface } from "../../../contracts/messaging/CCMUtils";
type CCMUtilsConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class CCMUtils__factory extends ContractFactory {
    constructor(...args: CCMUtilsConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<CCMUtils & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): CCMUtils__factory;
    static readonly bytecode = "0x60a06040523060805234801561001457600080fd5b5060805161131461003e60003960008181610994015281816109bd0152610beb01526113146000f3fe6080604052600436106101125760003560e01c80638820446f116100a5578063c1f0808a11610074578063e22fe72f11610059578063e22fe72f14610363578063e66f0a77146103e3578063f851a440146104175761014a565b8063c1f0808a14610320578063cc9e3e891461034d5761014a565b80638820446f14610266578063a9ab95061461029a578063aae8e9ed146102b4578063ad3cb1cc146102ca5761014a565b80634f1ef286116100e15780634f1ef286146101c757806352d1902d146101da5780635300f841146101ef5780635c975abb1461022f5761014a565b806314075360146101525780631b06bf9f146101725780631e8505451461019b57806342cde4e8146101b15761014a565b3661014a5761011f610454565b61014860017f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f0055565b005b61011f610454565b34801561015e57600080fd5b5061014861016d366004610f66565b6104fb565b34801561017e57600080fd5b5061018860015481565b6040519081526020015b60405180910390f35b3480156101a757600080fd5b5061018860025481565b3480156101bd57600080fd5b5061018860055481565b6101486101d5366004610ff7565b61071a565b3480156101e657600080fd5b50610188610739565b3480156101fb57600080fd5b5061021f61020a3660046110b9565b60126020526000908152604090205460ff1681565b6040519015158152602001610192565b34801561023b57600080fd5b507fcd5ed15c6e187e77e9aee88184c21f4f2182ab5827cb3b7e07fbedcd63f033005460ff1661021f565b34801561027257600080fd5b506102866102813660046110d4565b610768565b60405161019298979695949392919061113d565b3480156102a657600080fd5b5060005461021f9060ff1681565b3480156102c057600080fd5b5061018860045481565b3480156102d657600080fd5b506103136040518060400160405280600581526020017f352e302e3000000000000000000000000000000000000000000000000000000081525081565b60405161019291906111ba565b34801561032c57600080fd5b5061018861033b3660046110d4565b60106020526000908152604090205481565b34801561035957600080fd5b5061018860035481565b34801561036f57600080fd5b506103bd61037e3660046111cd565b600f60205260009081526040902080546001909101546001600160a01b0381169074010000000000000000000000000000000000000000900460ff1683565b604080519384526001600160a01b03909216602084015260ff1690820152606001610192565b3480156103ef57600080fd5b506104036103fe3660046110d4565b6108ee565b6040516101929897969594939291906111ff565b34801561042357600080fd5b5060005461043c9061010090046001600160a01b031681565b6040516001600160a01b039091168152602001610192565b7f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f0080547ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016104cf576040517f3ee5aeb500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60029055565b60017f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f0055565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00805468010000000000000000810460ff16159067ffffffffffffffff166000811580156105465750825b905060008267ffffffffffffffff1660011480156105635750303b155b905081158015610571575080155b156105a8576040517ff92ee8a900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b84547fffffffffffffffffffffffffffffffffffffffffffffffff000000000000000016600117855583156105f357845468ff00000000000000001916680100000000000000001785555b6105fb61095f565b610603610969565b61060b610979565b60008054466003557fffffffffffffffffffffff00000000000000000000000000000000000000000016336101000260ff1916179055600680547fffffffffffffffffffffffff00000000000000000000000000000000000000009081166001600160a01b038d81169190911790925560078b905560088a9055600b8054909116918916919091179055600980547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00001661ffff8816179055831561070e57845468ff000000000000000019168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b50505050505050505050565b610722610989565b61072b82610a59565b6107358282610ada565b5050565b6000610743610be0565b507f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc90565b601360205260009081526040902080546001820154600283015460038401546004850154600586018054959694956fffffffffffffffffffffffffffffffff8086169670010000000000000000000000000000000090960416946001600160a01b03948516949093169291906107dd90611256565b80601f016020809104026020016040519081016040528092919081815260200182805461080990611256565b80156108565780601f1061082b57610100808354040283529160200191610856565b820191906000526020600020905b81548152906001019060200180831161083957829003601f168201915b50505050509080600601805461086b90611256565b80601f016020809104026020016040519081016040528092919081815260200182805461089790611256565b80156108e45780601f106108b9576101008083540402835291602001916108e4565b820191906000526020600020905b8154815290600101906020018083116108c757829003601f168201915b5050505050905088565b601160205260009081526040902080546001820154600283015460038401546004850154600586018054959694956fffffffffffffffffffffffffffffffff8086169670010000000000000000000000000000000090960416946001600160a01b039094169391906107dd90611256565b610967610c42565b565b610971610c42565b610967610ca9565b610981610c42565b610967610cb1565b306001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161480610a2257507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316610a167f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b6001600160a01b031614155b15610967576040517fe07c8dba00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60005461010090046001600160a01b03163314610ad7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f556e617574686f72697365642063616c6c00000000000000000000000000000060448201526064015b60405180910390fd5b50565b816001600160a01b03166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa925050508015610b34575060408051601f3d908101601f19168201909252610b31918101906112a9565b60015b610b75576040517f4c9c8ce30000000000000000000000000000000000000000000000000000000081526001600160a01b0383166004820152602401610ace565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc8114610bd1576040517faa1d49a400000000000000000000000000000000000000000000000000000000815260048101829052602401610ace565b610bdb8383610ce4565b505050565b306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610967576040517fe07c8dba00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a005468010000000000000000900460ff16610967576040517fd7e6bcf800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104d5610c42565b610cb9610c42565b7fcd5ed15c6e187e77e9aee88184c21f4f2182ab5827cb3b7e07fbedcd63f03300805460ff19169055565b610ced82610d3a565b6040516001600160a01b038316907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a2805115610d3257610bdb8282610de2565b610735610e58565b806001600160a01b03163b600003610d89576040517f4c9c8ce30000000000000000000000000000000000000000000000000000000081526001600160a01b0382166004820152602401610ace565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0392909216919091179055565b6060600080846001600160a01b031684604051610dff91906112c2565b600060405180830381855af49150503d8060008114610e3a576040519150601f19603f3d011682016040523d82523d6000602084013e610e3f565b606091505b5091509150610e4f858383610e90565b95945050505050565b3415610967576040517fb398979f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606082610ea557610ea082610f08565b610f01565b8151158015610ebc57506001600160a01b0384163b155b15610efe576040517f9996b3150000000000000000000000000000000000000000000000000000000081526001600160a01b0385166004820152602401610ace565b50805b9392505050565b805115610f185780518082602001fd5b6040517f1425ea4200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80356001600160a01b0381168114610f6157600080fd5b919050565b600080600080600060a08688031215610f7e57600080fd5b610f8786610f4a565b94506020860135935060408601359250610fa360608701610f4a565b9150608086013561ffff81168114610fba57600080fd5b809150509295509295909350565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000806040838503121561100a57600080fd5b61101383610f4a565b9150602083013567ffffffffffffffff8082111561103057600080fd5b818501915085601f83011261104457600080fd5b81358181111561105657611056610fc8565b604051601f8201601f19908116603f0116810190838211818310171561107e5761107e610fc8565b8160405282815288602084870101111561109757600080fd5b8260208601602083013760006020848301015280955050505050509250929050565b6000602082840312156110cb57600080fd5b610f0182610f4a565b6000602082840312156110e657600080fd5b5035919050565b60005b838110156111085781810151838201526020016110f0565b50506000910152565b600081518084526111298160208601602086016110ed565b601f01601f19169290920160200192915050565b888152602081018890526fffffffffffffffffffffffffffffffff8781166040830152861660608201526001600160a01b038581166080830152841660a082015261010060c0820181905260009061119783820186611111565b905082810360e08401526111ab8185611111565b9b9a5050505050505050505050565b602081526000610f016020830184611111565b6000602082840312156111df57600080fd5b81356fffffffffffffffffffffffffffffffff81168114610f0157600080fd5b60006101008a83528960208401526fffffffffffffffffffffffffffffffff808a1660408501528089166060850152506001600160a01b03871660808401528560a08401528060c084015261119781840186611111565b600181811c9082168061126a57607f821691505b6020821081036112a3577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b6000602082840312156112bb57600080fd5b5051919050565b600082516112d48184602087016110ed565b919091019291505056fea26469706673582212203b7c74dfa8fa27b0c60a49da2a7552d5941273370763052aecd9e54e25f8c6b664736f6c63430008180033";
    static readonly abi: readonly [{
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
        readonly stateMutability: "payable";
        readonly type: "fallback";
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
        readonly name: "admin";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint128";
            readonly name: "chainId";
            readonly type: "uint128";
        }];
        readonly name: "chains";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "fee";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "priceFeed";
            readonly type: "address";
        }, {
            readonly internalType: "uint8";
            readonly name: "decimals";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "inNonce";
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
            readonly name: "feeToken";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "nativeTokenFee";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "erc20Fee";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "priceFeed";
            readonly type: "address";
        }, {
            readonly internalType: "uint16";
            readonly name: "relayerShare";
            readonly type: "uint16";
        }];
        readonly name: "initiate";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "isRelayerPaymentInERC20";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "outNonce";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
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
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "txHash";
            readonly type: "bytes32";
        }];
        readonly name: "processed";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
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
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
        }];
        readonly name: "received";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "txHash";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint128";
            readonly name: "fromChainId";
            readonly type: "uint128";
        }, {
            readonly internalType: "uint128";
            readonly name: "toChainId";
            readonly type: "uint128";
        }, {
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "signatures";
            readonly type: "uint256";
        }, {
            readonly internalType: "string";
            readonly name: "sender";
            readonly type: "string";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "relayers";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "relayersCount";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "selfChainId";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
        }];
        readonly name: "sent";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "txHash";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint128";
            readonly name: "fromChainId";
            readonly type: "uint128";
        }, {
            readonly internalType: "uint128";
            readonly name: "toChainId";
            readonly type: "uint128";
        }, {
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "contr";
            readonly type: "address";
        }, {
            readonly internalType: "string";
            readonly name: "receiver";
            readonly type: "string";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
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
    }, {
        readonly stateMutability: "payable";
        readonly type: "receive";
    }];
    static createInterface(): CCMUtilsInterface;
    static connect(address: string, runner?: ContractRunner | null): CCMUtils;
}
export {};
