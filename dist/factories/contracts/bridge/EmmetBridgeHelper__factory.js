"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmmetBridgeHelper__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "target",
                type: "address",
            },
        ],
        name: "AddressEmptyCode",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "AddressInsufficientBalance",
        type: "error",
    },
    {
        inputs: [],
        name: "FailedInnerCall",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "token",
                type: "address",
            },
        ],
        name: "SafeERC20FailedOperation",
        type: "error",
    },
    {
        inputs: [],
        name: "BridgeError",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "BridgeSettings",
                type: "address",
            },
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "blockNumber",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "foreignIndexOut",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "value",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "start",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "sentAmount",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "receiveAmount",
                        type: "uint256",
                    },
                    {
                        internalType: "uint128",
                        name: "fromChainId",
                        type: "uint128",
                    },
                    {
                        internalType: "uint128",
                        name: "toChainId",
                        type: "uint128",
                    },
                    {
                        internalType: "string",
                        name: "to",
                        type: "string",
                    },
                    {
                        internalType: "string",
                        name: "fromToken",
                        type: "string",
                    },
                    {
                        internalType: "string",
                        name: "toToken",
                        type: "string",
                    },
                    {
                        internalType: "bytes",
                        name: "data",
                        type: "bytes",
                    },
                ],
                internalType: "struct BridgeTypes.ReceiveParams",
                name: "params",
                type: "tuple",
            },
        ],
        name: "validateReceiveInput",
        outputs: [],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "BridgeSettings",
                type: "address",
            },
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "blockNumber",
                        type: "uint256",
                    },
                    {
                        internalType: "bool",
                        name: "isFeeERC20",
                        type: "bool",
                    },
                    {
                        internalType: "uint256",
                        name: "sentAmount",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "receiveAmount",
                        type: "uint256",
                    },
                    {
                        internalType: "uint128",
                        name: "toChainId",
                        type: "uint128",
                    },
                    {
                        internalType: "string",
                        name: "fromToken",
                        type: "string",
                    },
                    {
                        internalType: "string",
                        name: "toToken",
                        type: "string",
                    },
                    {
                        internalType: "string",
                        name: "to",
                        type: "string",
                    },
                    {
                        internalType: "bool",
                        name: "isSuccess",
                        type: "bool",
                    },
                ],
                internalType: "struct BridgeTypes.SendParams",
                name: "params",
                type: "tuple",
            },
        ],
        name: "validateSendingInput",
        outputs: [],
        stateMutability: "view",
        type: "function",
    },
];
const _bytecode = "0x61251861003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100715760003560e01c8063b27e90e11161005a578063b27e90e1146100cb578063d4d30c61146100de578063e0fec003146100f157600080fd5b8063212f047f14610076578063ab996d88146100a9575b600080fd5b81801561008257600080fd5b50610096610091366004611bf7565b61012f565b6040519081526020015b60405180910390f35b8180156100b557600080fd5b506100c96100c4366004611c69565b610355565b005b6100c96100d9366004611cb8565b610831565b6100c96100ec366004611d08565b610ccb565b6101226040518060400160405280601281526020017122b6b6b2ba213934b233b29022b93937b91d60711b81525081565b6040516100a09190611d9e565b600080836001600160a01b0316632a7da1138460c001518561012001518661014001516040518463ffffffff1660e01b815260040161017093929190611db1565b600060405180830381865afa15801561018d573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526101b59190810190611e71565b602081015151909150600080805b8381101561034957846020015181815181106101e1576101e1611f26565b6020026020010151925088600084600e81111561020057610200611f3c565b600e81111561021157610211611f3c565b81526020810191909152604001600020546001600160a01b03169150816102b5576102b56040518060400160405280601c81526020017f4d6f64756c65206e6f7420646566696e656420666f7220737465703a0000000081525061028585600e81111561028057610280611f3c565b6112b5565b60408051808201909152601281527122b6b6b2ba213934b233b29022b93937b91d60711b60208201529190611373565b6040517f2c092ee90000000000000000000000000000000000000000000000000000000081526001600160a01b03831690632c092ee9906102fc9086908b90600401611f74565b6020604051808303816000875af115801561031b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061033f919061208a565b95506001016101c3565b50505050509392505050565b60006001600160a01b038316632a7da11361037660a08501608086016120a3565b61038360a08601866120be565b61039060c08801886120be565b6040518663ffffffff1660e01b81526004016103b0959493929190612137565b600060405180830381865afa1580156103cd573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526103f59190810190611e71565b9050600081600001515190506000806001905060006104bd876001600160a01b03166371433cfb6040518163ffffffff1660e01b8152600401600060405180830381865afa15801561044b573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261047391908101906121c7565b61048060a08901896120be565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092939250506113979050565b1561059957856040013534101561051b5760405162461bcd60e51b815260206004820152601d60248201527f53656e74206c65737320455448207468616e2073656e74416d6f756e7400000060448201526064015b60405180910390fd5b604080517f4e617469766520636f696e20456d6d65742e4c6f636b00000000000000000000815230918801359060160160006040518083038185875af1925050503d8060008114610588576040519150601f19603f3d011682016040523d82523d6000602084013e61058d565b606091505b5050506000915061062f565b6001600160a01b03871663c1733f686105b560a08901896120be565b6040518363ffffffff1660e01b81526004016105d29291906121fc565b606060405180830381865afa1580156105ef573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106139190612210565b51905061062f6001600160a01b038216333060408a01356113be565b60005b8481101561082657855180518290811061064e5761064e611f26565b60200260200101519350600089600086600e81111561066f5761066f611f3c565b600e81111561068057610680611f3c565b81526020810191909152604001600020546001600160a01b031690508061070f5760405162461bcd60e51b815260206004820152602160248201527f4272696467654d6f64756c65206e6f742073657420666f72207468652073746560448201527f70000000000000000000000000000000000000000000000000000000000000006064820152608401610512565b83156107a757604080517f095ea7b30000000000000000000000000000000000000000000000000000000081526001600160a01b038381166004830152918a013560248201529084169063095ea7b3906044016020604051808303816000875af1158015610781573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107a59190612278565b505b806001600160a01b0316632308f36b856107c55789604001356107c8565b60005b878b6040518463ffffffff1660e01b81526004016107e79291906122e6565b6000604051808303818588803b15801561080057600080fd5b505af1158015610814573d6000803e3d6000fd5b50506001909401935061063292505050565b505050505050505050565b80604001356000036108af576108af6040518060400160405280600f81526020017f5a65726f2073656e74416d6f756e7400000000000000000000000000000000008152506040518060400160405280601281526020017122b6b6b2ba213934b233b29022b93937b91d60711b81525061144c90919063ffffffff16565b6108bf60a08201608083016120a3565b6fffffffffffffffffffffffffffffffff1660000361094a5761094a6040518060400160405280600e81526020017f5a65726f20746f436861696e49640000000000000000000000000000000000008152506040518060400160405280601281526020017122b6b6b2ba213934b233b29022b93937b91d60711b81525061144c90919063ffffffff16565b61095760a08201826120be565b90506000036109d2576109d26040518060400160405280600f81526020017f456d7074792066726f6d546f6b656e00000000000000000000000000000000008152506040518060400160405280601281526020017122b6b6b2ba213934b233b29022b93937b91d60711b81525061144c90919063ffffffff16565b6109df60c08201826120be565b9050600003610a5a57610a5a6040518060400160405280600d81526020017f456d70747920746f546f6b656e000000000000000000000000000000000000008152506040518060400160405280601281526020017122b6b6b2ba213934b233b29022b93937b91d60711b81525061144c90919063ffffffff16565b610a6760e08201826120be565b9050600003610ae257610ae26040518060400160405280601381526020017f456d7074792072656365697665722028746f29000000000000000000000000008152506040518060400160405280601281526020017122b6b6b2ba213934b233b29022b93937b91d60711b81525061144c90919063ffffffff16565b6001600160a01b0382166351f4ee6b610b0160a08401608085016120a3565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e084901b1681526fffffffffffffffffffffffffffffffff9091166004820152602401600060405180830381865afa158015610b66573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610b8e91908101906123ee565b5060009150506001600160a01b03831663c1733f68610bb060a08501856120be565b6040518363ffffffff1660e01b8152600401610bcd9291906121fc565b606060405180830381865afa158015610bea573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c0e9190612210565b516001600160a01b031603610cc75760408051808201909152601681527f556e737570706f727465642066726f6d546f6b656e3a000000000000000000006020820152610cc790610c6260a08401846120be565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152505060408051808201909152601281527122b6b6b2ba213934b233b29022b93937b91d60711b60208201529392915050611373565b5050565b6001600160a01b038216610d4b57610d4b6040518060400160405280601981526020017f42726964676553657474696e6773206973206e6f7420736574000000000000008152506040518060400160405280601281526020017122b6b6b2ba213934b233b29022b93937b91d60711b81525061144c90919063ffffffff16565b8060200151600003610dc957610dc96040518060400160405280601b81526020017f706172616d732e666f726569676e496e6465784f7574203d3d203000000000008152506040518060400160405280601281526020017122b6b6b2ba213934b233b29022b93937b91d60711b81525061144c90919063ffffffff16565b8060800151600003610e4757610e476040518060400160405280601681526020017f706172616d732e73656e74416d6f756e74203d3d2030000000000000000000008152506040518060400160405280601281526020017122b6b6b2ba213934b233b29022b93937b91d60711b81525061144c90919063ffffffff16565b8060c001516fffffffffffffffffffffffffffffffff16600003610ed757610ed76040518060400160405280601781526020017f706172616d732e66726f6d436861696e4964203d3d20300000000000000000008152506040518060400160405280601281526020017122b6b6b2ba213934b233b29022b93937b91d60711b81525061144c90919063ffffffff16565b60c08101516040517f51f4ee6b0000000000000000000000000000000000000000000000000000000081526fffffffffffffffffffffffffffffffff90911660048201526000906001600160a01b038416906351f4ee6b90602401600060405180830381865afa158015610f4f573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610f7791908101906123ee565b505090508051600003610ff657610ff66040518060400160405280601e81526020017f556e737570706f7274656420706172616d732e66726f6d436861696e496400008152506040518060400160405280601281526020017122b6b6b2ba213934b233b29022b93937b91d60711b81525061144c90919063ffffffff16565b468260e001516fffffffffffffffffffffffffffffffff16146110a2576110a26040518060600160405280603081526020016124b36030913961104e8460e001516fffffffffffffffffffffffffffffffff166112b5565b6040518060600160405280602a8152602001612489602a9139611070466112b5565b60408051808201909152601281527122b6b6b2ba213934b233b29022b93937b91d60711b602082015293929190611456565b81610120015151600003611122576111226040518060400160405280601981526020017f706172616d732e66726f6d546f6b656e20697320656d707479000000000000008152506040518060400160405280601281526020017122b6b6b2ba213934b233b29022b93937b91d60711b81525061144c90919063ffffffff16565b816101400151516000036111a2576111a26040518060400160405280601781526020017f706172616d732e746f546f6b656e20697320656d7074790000000000000000008152506040518060400160405280601281526020017122b6b6b2ba213934b233b29022b93937b91d60711b81525061144c90919063ffffffff16565b6101408201516040517fc1733f680000000000000000000000000000000000000000000000000000000081526000916001600160a01b0386169163c1733f68916111ee91600401611d9e565b606060405180830381865afa15801561120b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061122f9190612210565b516001600160a01b0316036112b0576112b06040518060400160405280601a81526020017f556e737570706f7274656420706172616d732e746f546f6b656e0000000000008152506040518060400160405280601281526020017122b6b6b2ba213934b233b29022b93937b91d60711b81525061144c90919063ffffffff16565b505050565b606060006112c283611463565b600101905060008167ffffffffffffffff8111156112e2576112e26119a2565b6040519080825280601f01601f19166020018201604052801561130c576020820181803683370190505b5090508181016020015b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff017f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a850494508461131657509392505050565b61137e838383611544565b60405162461bcd60e51b81526004016105129190611d9e565b6000815183511480156113b7575081805190602001208380519060200120145b9392505050565b604080516001600160a01b0385811660248301528416604482015260648082018490528251808303909101815260849091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f23b872dd000000000000000000000000000000000000000000000000000000001790526114469085906115e6565b50505050565b61137e8282611662565b61137e85858585856116e2565b60007a184f03e93ff9f4daa797ed6e38ed64bf6a1f01000000000000000082106114ab577a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000820491506040015b6d04ee2d6d415b85acef810000000082106114d7576d04ee2d6d415b85acef8100000000820491506020015b662386f26fc1000082106114f557662386f26fc10000820491506010015b6305f5e100821061150d576305f5e100820491506008015b612710821061152157612710820491506004015b60648210611533576064820491506002015b600a821061153f576001015b919050565b6040805160038082526080820190925260609160009190816020015b6060815260200190600190039081611560579050509050848160008151811061158b5761158b611f26565b602002602001018190525083816001815181106115aa576115aa611f26565b602002602001018190525082816002815181106115c9576115c9611f26565b60200260200101819052506115dd816117c4565b95945050505050565b60006115fb6001600160a01b03841683611851565b9050805160001415801561162057508080602001905181019061161e9190612278565b155b156112b0576040517f5274afe70000000000000000000000000000000000000000000000000000000081526001600160a01b0384166004820152602401610512565b604080516002808252606082810190935260009190816020015b606081526020019060019003908161167c57905050905083816000815181106116a7576116a7611f26565b602002602001018190525082816001815181106116c6576116c6611f26565b60200260200101819052506116da816117c4565b949350505050565b60408051600580825260c0820190925260609160009190816020015b60608152602001906001900390816116fe579050509050868160008151811061172957611729611f26565b6020026020010181905250858160018151811061174857611748611f26565b6020026020010181905250848160028151811061176757611767611f26565b6020026020010181905250838160038151811061178657611786611f26565b602002602001018190525082816004815181106117a5576117a5611f26565b60200260200101819052506117b9816117c4565b979650505050505050565b60606000825160005b818110156117ec576020818102860101515192909201916001016117cd565b50604051925060208301828101604052828452600092505b818310156118495760208381028601810151805191019060005b8181101561183657828101518482015260200161181e565b5080830192505050600183019250611804565b505050919050565b60606113b78383600084600080856001600160a01b03168486604051611877919061246c565b60006040518083038185875af1925050503d80600081146118b4576040519150601f19603f3d011682016040523d82523d6000602084013e6118b9565b606091505b50915091506118c98683836118d3565b9695505050505050565b6060826118e8576118e382611948565b6113b7565b81511580156118ff57506001600160a01b0384163b155b15611941576040517f9996b3150000000000000000000000000000000000000000000000000000000081526001600160a01b0385166004820152602401610512565b50806113b7565b8051156119585780518082602001fd5b6040517f1425ea4200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50565b6001600160a01b038116811461198a57600080fd5b634e487b7160e01b600052604160045260246000fd5b604051610180810167ffffffffffffffff811182821017156119dc576119dc6119a2565b60405290565b6040516060810167ffffffffffffffff811182821017156119dc576119dc6119a2565b604051601f8201601f1916810167ffffffffffffffff81118282101715611a2e57611a2e6119a2565b604052919050565b80356fffffffffffffffffffffffffffffffff8116811461153f57600080fd5b600067ffffffffffffffff821115611a7057611a706119a2565b50601f01601f191660200190565b600082601f830112611a8f57600080fd5b8135611aa2611a9d82611a56565b611a05565b818152846020838601011115611ab757600080fd5b816020850160208301376000918101602001919091529392505050565b60006101808284031215611ae757600080fd5b611aef6119b8565b9050813581526020820135602082015260408201356040820152606082013560608201526080820135608082015260a082013560a0820152611b3360c08301611a36565b60c0820152611b4460e08301611a36565b60e08201526101008083013567ffffffffffffffff80821115611b6657600080fd5b611b7286838701611a7e565b83850152610120925082850135915080821115611b8e57600080fd5b611b9a86838701611a7e565b83850152610140925082850135915080821115611bb657600080fd5b611bc286838701611a7e565b83850152610160925082850135915080821115611bde57600080fd5b50611beb85828601611a7e565b82840152505092915050565b600080600060608486031215611c0c57600080fd5b833592506020840135611c1e8161198d565b9150604084013567ffffffffffffffff811115611c3a57600080fd5b611c4686828701611ad4565b9150509250925092565b60006101208284031215611c6357600080fd5b50919050565b600080600060608486031215611c7e57600080fd5b833592506020840135611c908161198d565b9150604084013567ffffffffffffffff811115611cac57600080fd5b611c4686828701611c50565b60008060408385031215611ccb57600080fd5b8235611cd68161198d565b9150602083013567ffffffffffffffff811115611cf257600080fd5b611cfe85828601611c50565b9150509250929050565b60008060408385031215611d1b57600080fd5b8235611d268161198d565b9150602083013567ffffffffffffffff811115611d4257600080fd5b611cfe85828601611ad4565b60005b83811015611d69578181015183820152602001611d51565b50506000910152565b60008151808452611d8a816020860160208601611d4e565b601f01601f19169290920160200192915050565b6020815260006113b76020830184611d72565b6fffffffffffffffffffffffffffffffff84168152606060208201526000611ddc6060830185611d72565b82810360408401526118c98185611d72565b600082601f830112611dff57600080fd5b8151602067ffffffffffffffff821115611e1b57611e1b6119a2565b8160051b611e2a828201611a05565b9283528481018201928281019087851115611e4457600080fd5b83870192505b848310156117b9578251600f8110611e625760008081fd5b82529183019190830190611e4a565b600060208284031215611e8357600080fd5b815167ffffffffffffffff80821115611e9b57600080fd5b9083019060608286031215611eaf57600080fd5b611eb76119e2565b825182811115611ec657600080fd5b611ed287828601611dee565b825250602083015182811115611ee757600080fd5b611ef387828601611dee565b602083015250604083015182811115611f0b57600080fd5b611f1787828601611dee565b60408301525095945050505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052602160045260246000fd5b600f8110611f7057634e487b7160e01b600052602160045260246000fd5b9052565b611f7e8184611f52565b60406020820152815160408201526020820151606082015260408201516080820152606082015160a0820152608082015160c082015260a082015160e0820152600060c0830151610100611fe5818501836fffffffffffffffffffffffffffffffff169052565b60e0850151915061012061200c818601846fffffffffffffffffffffffffffffffff169052565b8186015192506101809150610140828187015261202d6101c0870185611d72565b9350818701519150603f1961016081888703018189015261204e8685611d72565b95508289015193508188870301858901526120698685611d72565b95508089015194505080878603016101a08801525050506118c98282611d72565b60006020828403121561209c57600080fd5b5051919050565b6000602082840312156120b557600080fd5b6113b782611a36565b6000808335601e198436030181126120d557600080fd5b83018035915067ffffffffffffffff8211156120f057600080fd5b60200191503681900382131561210557600080fd5b9250929050565b818352818160208501375060006020828401015260006020601f19601f840116840101905092915050565b6fffffffffffffffffffffffffffffffff8616815260606020820152600061216360608301868861210c565b828103604084015261217681858761210c565b98975050505050505050565b600082601f83011261219357600080fd5b81516121a1611a9d82611a56565b8181528460208386010111156121b657600080fd5b6116da826020830160208701611d4e565b6000602082840312156121d957600080fd5b815167ffffffffffffffff8111156121f057600080fd5b6116da84828501612182565b6020815260006116da60208301848661210c565b60006060828403121561222257600080fd5b61222a6119e2565b82516122358161198d565b815260208301516122458161198d565b6020820152604083015160ff8116811461225e57600080fd5b60408201529392505050565b801515811461198a57600080fd5b60006020828403121561228a57600080fd5b81516113b78161226a565b803561153f8161226a565b6000808335601e198436030181126122b757600080fd5b830160208101925035905067ffffffffffffffff8111156122d757600080fd5b80360382131561210557600080fd5b6122f08184611f52565b6040602082015281356040820152600061230c60208401612295565b80151560608401525060408301356080830152606083013560a083015261233560808401611a36565b6fffffffffffffffffffffffffffffffff1660c083015261235960a08401846122a0565b6101208060e08601526123716101608601838561210c565b925061238060c08701876122a0565b9250603f1961010081888703018189015261239c86868561210c565b95506123ab60e08a018a6122a0565b955092508188870301848901526123c386868561210c565b95506123d0818a01612295565b9450505050506123e561014085018215159052565b50949350505050565b60008060006060848603121561240357600080fd5b835167ffffffffffffffff8082111561241b57600080fd5b61242787838801612182565b9450602086015191508082111561243d57600080fd5b61244987838801612182565b9350604086015191508082111561245f57600080fd5b50611c4686828701612182565b6000825161247e818460208701611d4e565b919091019291505056fe2d20646f6573206e6f74206d617468636820746865206c6f63616c20626c6f636b2e636861696e69643a57726f6e672064657374696e6174696f6e20636861696e2c20676976656e20706172616d732e746f436861696e49643aa2646970667358221220ad77cfd52d26431fa2d04873bb7b3797ccbdaafaf873cf464cd83923b7ed97be64736f6c63430008180033";
const isSuperArgs = (xs) => xs.length > 1;
class EmmetBridgeHelper__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    connect(runner) {
        return super.connect(runner);
    }
    static createInterface() {
        return new ethers_1.Interface(_abi);
    }
    static connect(address, runner) {
        return new ethers_1.Contract(address, _abi, runner);
    }
}
exports.EmmetBridgeHelper__factory = EmmetBridgeHelper__factory;
EmmetBridgeHelper__factory.bytecode = _bytecode;
EmmetBridgeHelper__factory.abi = _abi;
