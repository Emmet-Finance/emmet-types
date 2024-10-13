import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, BigNumberish, AddressLike, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type { MockRelayerRewards, MockRelayerRewardsInterface } from "../../../contracts/mock/MockRelayerRewards";
type MockRelayerRewardsConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class MockRelayerRewards__factory extends ContractFactory {
    constructor(...args: MockRelayerRewardsConstructorParams);
    getDeployTransaction(feeToken: AddressLike, nativeTokenFee: BigNumberish, erc20Fee: BigNumberish, priceFeed: AddressLike, relayerShare: BigNumberish, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(feeToken: AddressLike, nativeTokenFee: BigNumberish, erc20Fee: BigNumberish, priceFeed: AddressLike, relayerShare: BigNumberish, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<MockRelayerRewards & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): MockRelayerRewards__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50604051620015ca380380620015ca833981016040819052610031916100b6565b60008054600195909555600293909355600580546001600160a01b03939093166001600160a01b03199384161790556003805461ffff90921661ffff1990921691909117905573eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee921691909117905550610118565b80516001600160a01b03811681146100b157600080fd5b919050565b600080600080600060a086880312156100ce57600080fd5b6100d78661009a565b945060208601519350604086015192506100f36060870161009a565b9150608086015161ffff8116811461010a57600080fd5b809150509295509295909350565b6114a280620001286000396000f3fe6080604052600436106100c75760003560e01c8063c4bffccd11610074578063eb68e4bf1161004e578063eb68e4bf1461020d578063f0621c201461022d578063f50e8c7c1461024d57600080fd5b8063c4bffccd1461019a578063ca709a25146101d0578063d853432f146101f857600080fd5b80638af954df116100a55780638af954df14610136578063af3ccee11461017a578063bd097e21146100ec57600080fd5b80630de58392146100cc578063418f5095146100ee578063726bb26214610116575b600080fd5b3480156100d857600080fd5b506100ec6100e73660046111b4565b610262565b005b3480156100fa57600080fd5b5060035460405161ffff90911681526020015b60405180910390f35b34801561012257600080fd5b506100ec6101313660046111ed565b610277565b34801561014257600080fd5b5061016c610151366004611217565b6001600160a01b031660009081526008602052604090205490565b60405190815260200161010d565b34801561018657600080fd5b506100ec610195366004611232565b610283565b3480156101a657600080fd5b5061016c6101b5366004611217565b6001600160a01b031660009081526007602052604090205490565b3480156101dc57600080fd5b506000546040516001600160a01b03909116815260200161010d565b34801561020457600080fd5b5060015461016c565b34801561021957600080fd5b506100ec610228366004611254565b61028f565b34801561023957600080fd5b506100ec610248366004611278565b61029d565b34801561025957600080fd5b5060025461016c565b60005a9050610273600082846102a9565b5050565b61027360008383610530565b6102736000838361066d565b61029a6000826106cf565b50565b6102736000838361078f565b6000808280156102bd575060008560020154115b156103695760038501546002860154612710916102e09161ffff909116906112da565b6102ea91906112f1565b85546001600160a01b0316600090815260078701602052604081208054929450849290919061031a90849061132c565b9091555050600285015461032f90839061133f565b85546001600160a01b031660009081526008870160205260408120805490919061035a90849061132c565b90915550600191506104589050565b60018501541561041f5760038501546001860154612710916103919161ffff909116906112da565b61039b91906112f1565b73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee60009081526007870160205260408120805492945084929091906103d590849061132c565b909155505060018501546103ea90839061133f565b73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee60009081526008870160205260408120805490919061035a90849061132c565b604080514681523060208201527f4f610f5c319352ba213f9e657ace47b4260fe16cb8d672d28adfa58b3d4887f2910160405180910390a15b8015610520576040805160608101825283815243602082015233918101919091526004860180546006880191600091908261049283611352565b9091555081526020808201929092526040908101600020835181559183015160018301559190910151600290910180547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b039092169190911790558215610516578454610511906001600160a01b03163384610883565b610520565b6105203383610903565b61052984610a81565b5050505050565b6001600160a01b038216600090815260088401602052604090205481116105c45760405162461bcd60e51b815260206004820152602d60248201527f4e6f2070726f746f636f6c207265776172647320746f2077697468647261772060448201527f696e207468697320746f6b656e0000000000000000000000000000000000000060648201526084015b60405180910390fd5b6001600160a01b03821660008181526008850160205260408120557fffffffffffffffffffffffff1111111111111111111111111111111111111112016106145761060f3382610903565b610628565b6106286001600160a01b0383163383610883565b6040518181526001600160a01b0383169033907f45b1c2308b2f2a02a8ecc34dfa89004416da24dd13078d61a1eb487c62ee66589060200160405180910390a3505050565b600183018290556040518281527fd10d75876659a287a59a6ccfa2e3fff42f84d94b542837acd30bc184d562de409060200160405180910390a160028301819055811580156106ba575080155b156106ca576106ca8360006106cf565b505050565b6127108161ffff1611156107255760405162461bcd60e51b815260206004820152601a60248201527f52656c617965722073686172652065786365656473203130302500000000000060448201526064016105bb565b6003820180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00001661ffff83169081179091556040519081527f181ca3c8c6930108cfa1a8b0777afca756812d14758e976fb232fcea65c1a41c9060200160405180910390a15050565b6107ce826040518060400160405280600b81526020017f6e6577466565546f6b656e000000000000000000000000000000000000000000815250610bf2565b61080d816040518060400160405280600981526020017f7072696365466565640000000000000000000000000000000000000000000000815250610f18565b82547fffffffffffffffffffffffff00000000000000000000000000000000000000009081166001600160a01b0384811691821786556005860180549093169084169081179092556040517f91a03e1d689caf891fe531c01e290f7b718f9c6a3af6726d6d837d2b7bd82e6790600090a3505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb000000000000000000000000000000000000000000000000000000001790526106ca908490610f65565b804710156109795760405162461bcd60e51b815260206004820152602160248201527f496e73756666696369656e74204e617469766520546f6b656e2062616c616e6360448201527f650000000000000000000000000000000000000000000000000000000000000060648201526084016105bb565b6000826001600160a01b0316826040516109b6907f456d6d65742052656c6179657220526577617264000000000000000000000000815260140190565b60006040518083038185875af1925050503d80600081146109f3576040519150601f19603f3d011682016040523d82523d6000602084013e6109f8565b606091505b50509050806106ca57604080514681523060208201527f982861fc5b4e3bb04b63759f2c5e54793e0912d68773ce8b6972f8a213cab2e7910160405180910390a160405162461bcd60e51b815260206004820152601a60248201527f4e617469766520546f6b656e20726577617264206661696c656400000000000060448201526064016105bb565b60005a610a8e908361133f565b90503a6000610a9d82846112da565b9050600080336001600160a01b031683604051610add907f47617320666565207265696d62757273656d656e740000000000000000000000815260150190565b60006040518083038185875af1925050503d8060008114610b1a576040519150601f19603f3d011682016040523d82523d6000602084013e610b1f565b606091505b509150915081610ba757805115610b395780518082602001fd5b60405162461bcd60e51b815260206004820152602860248201527f476173207265696d62757273656d656e74206661696c65643a20756e6b6e6f7760448201527f6e20726561736f6e00000000000000000000000000000000000000000000000060648201526084016105bb565b604080518681526020810186905290810184905233907f9f7f109474a14e154e76582743f4492709a52148aa46b2be777eedd721228c019060600160405180910390a2505050505050565b610bfc8282610f18565b60405130602482015260009081906001600160a01b0385169060440160408051601f198184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f70a082310000000000000000000000000000000000000000000000000000000017905251610c7b91906113ae565b600060405180830381855afa9150503d8060008114610cb6576040519150601f19603f3d011682016040523d82523d6000602084013e610cbb565b606091505b5091509150610d0e82158015610cd2575060008251115b846040518060400160405280601b81526020017f204661696c65643a2062616c616e63654f662861646472657373290000000000815250610fe1565b6040513060248201819052604482015260009081906001600160a01b0387169060640160408051601f198184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fdd62ed3e0000000000000000000000000000000000000000000000000000000017905251610d9491906113ae565b600060405180830381855afa9150503d8060008114610dcf576040519150601f19603f3d011682016040523d82523d6000602084013e610dd4565b606091505b5091509150610e0a82158015610deb575060008251115b8660405180606001604052806023815260200161144a60239139610fe1565b60408051600481526024810182526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f18160ddd00000000000000000000000000000000000000000000000000000000179052905160009182916001600160a01b038a1691610e7b916113ae565b600060405180830381855afa9150503d8060008114610eb6576040519150601f19603f3d011682016040523d82523d6000602084013e610ebb565b606091505b5091509150610f0e82158015610ed2575060008251115b886040518060400160405280601681526020017f204661696c65643a20746f74616c537570706c79282900000000000000000000815250610fe1565b5050505050505050565b610273826001600160a01b03163b600014826040518060400160405280601381526020017f206973206e6f74206120636f6e74726163742e00000000000000000000000000815250610fe1565b6000610f7a6001600160a01b03841683611020565b90508051600014158015610f9f575080806020019051810190610f9d91906113ca565b155b156106ca576040517f5274afe70000000000000000000000000000000000000000000000000000000081526001600160a01b03841660048201526024016105bb565b82156106ca578181604051602001610ffa9291906113e7565b60408051601f198184030181529082905262461bcd60e51b82526105bb91600401611416565b606061102e83836000611037565b90505b92915050565b606081471015611075576040517fcd7860590000000000000000000000000000000000000000000000000000000081523060048201526024016105bb565b600080856001600160a01b0316848660405161109191906113ae565b60006040518083038185875af1925050503d80600081146110ce576040519150601f19603f3d011682016040523d82523d6000602084013e6110d3565b606091505b50915091506110e38683836110ef565b925050505b9392505050565b606082611104576110ff82611164565b6110e8565b815115801561111b57506001600160a01b0384163b155b1561115d576040517f9996b3150000000000000000000000000000000000000000000000000000000081526001600160a01b03851660048201526024016105bb565b50806110e8565b8051156111745780518082602001fd5b6040517f1425ea4200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b801515811461029a57600080fd5b6000602082840312156111c657600080fd5b81356110e8816111a6565b80356001600160a01b03811681146111e857600080fd5b919050565b6000806040838503121561120057600080fd5b611209836111d1565b946020939093013593505050565b60006020828403121561122957600080fd5b61102e826111d1565b6000806040838503121561124557600080fd5b50508035926020909101359150565b60006020828403121561126657600080fd5b813561ffff811681146110e857600080fd5b6000806040838503121561128b57600080fd5b611294836111d1565b91506112a2602084016111d1565b90509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b8082028115828204841417611031576110316112ab565b600082611327577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b80820180821115611031576110316112ab565b81810381811115611031576110316112ab565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611383576113836112ab565b5060010190565b60005b838110156113a557818101518382015260200161138d565b50506000910152565b600082516113c081846020870161138a565b9190910192915050565b6000602082840312156113dc57600080fd5b81516110e8816111a6565b600083516113f981846020880161138a565b83519083019061140d81836020880161138a565b01949350505050565b602081526000825180602084015261143581604085016020870161138a565b601f01601f1916919091016040019291505056fe204661696c65643a20616c6c6f77616e636528616464726573732c6164647265737329a2646970667358221220a1f2ae296e02585a9470ccbf035285b65948b7d3464d5b74608df55c4f8abadb64736f6c63430008180033";
    static readonly abi: readonly [{
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
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
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
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "AddressInsufficientBalance";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "FailedInnerCall";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }];
        readonly name: "SafeERC20FailedOperation";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newFeeToken";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "priceFeed";
            readonly type: "address";
        }];
        readonly name: "FeeTokenUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "relayer";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "gasUsed";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "gasPrice";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "reimbursement";
            readonly type: "uint256";
        }];
        readonly name: "GasFeeReimbursed";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "newProtocolFee";
            readonly type: "uint256";
        }];
        readonly name: "ProtocolFeeUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "ProtocolRewardsWithdrawn";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint16";
            readonly name: "newRelayerShare";
            readonly type: "uint16";
        }];
        readonly name: "RelayerShareUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "chainId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "target";
            readonly type: "address";
        }];
        readonly name: "RewardFundingRequired";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "chainId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "target";
            readonly type: "address";
        }];
        readonly name: "RewardsNotConfigured";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "fundContract";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getErc20Fee";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getFeeToken";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getNativeTokenFee";
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
            readonly name: "token";
            readonly type: "address";
        }];
        readonly name: "getPaidRelayerRewards";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getRelayerShare";
        readonly outputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "";
            readonly type: "uint16";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }];
        readonly name: "getRemainingProtocolRewards";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bool";
            readonly name: "isRewardInERC20";
            readonly type: "bool";
        }];
        readonly name: "mockAwardRelayer";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newFeeToken";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "priceFeed";
            readonly type: "address";
        }];
        readonly name: "mockUpdateFeeToken";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "nativeTokenFee";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "erc20Fee";
            readonly type: "uint256";
        }];
        readonly name: "mockUpdateProtocolFee";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "newRelayerShare";
            readonly type: "uint16";
        }];
        readonly name: "mockUpdateRelayerShare";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "mockWithdrawProtocolRewards";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): MockRelayerRewardsInterface;
    static connect(address: string, runner?: ContractRunner | null): MockRelayerRewards;
}
export {};
