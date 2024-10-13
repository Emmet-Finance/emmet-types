"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LPModule__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "newBridge",
                type: "address",
            },
            {
                internalType: "address",
                name: "newEmmetData",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
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
        name: "EnforcedPause",
        type: "error",
    },
    {
        inputs: [],
        name: "ExpectedPause",
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
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "newAdmin",
                type: "address",
            },
        ],
        name: "AdminUpdated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "newBridge",
                type: "address",
            },
        ],
        name: "BridgeUpdated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "newEmmetData",
                type: "address",
            },
        ],
        name: "DataUpdated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "string",
                name: "symbol",
                type: "string",
            },
            {
                indexed: false,
                internalType: "string",
                name: "operation",
                type: "string",
            },
        ],
        name: "LPUpdate",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "Paused",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "Unpaused",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "string",
                name: "symbol",
                type: "string",
            },
            {
                indexed: false,
                internalType: "address",
                name: "recepient",
                type: "address",
            },
        ],
        name: "Withdraw",
        type: "event",
    },
    {
        inputs: [],
        name: "BridgeSettings",
        outputs: [
            {
                internalType: "contract IEmmetData",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "admin",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "bridge",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "coinWithdraw",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "pause",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "paused",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "symbol",
                type: "string",
            },
        ],
        name: "pools",
        outputs: [
            {
                internalType: "address",
                name: "pool",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "enum BridgeTypes.Step",
                name: "step",
                type: "uint8",
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
        name: "receiveInstallment",
        outputs: [
            {
                internalType: "uint256",
                name: "receiveAmount",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "enum BridgeTypes.Step",
                name: "step",
                type: "uint8",
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
        name: "sendInstallment",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes4",
                name: "interfaceId",
                type: "bytes4",
            },
        ],
        name: "supportsInterface",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "tokenContract",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "tokenWithdraw",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "unpause",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newAdmin",
                type: "address",
            },
        ],
        name: "updateAdmin",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newBridge",
                type: "address",
            },
        ],
        name: "updateBridge",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newEmmetData",
                type: "address",
            },
        ],
        name: "updateData",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "pool",
                type: "address",
            },
            {
                internalType: "string",
                name: "symbol",
                type: "string",
            },
        ],
        name: "updateLP",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        stateMutability: "payable",
        type: "receive",
    },
];
const _bytecode = "0x60806040523480156200001157600080fd5b50604051620031a0380380620031a083398101604081905262000034916200030a565b600080546001600160a81b0319166101003302179055818162000057826200006c565b620000628162000125565b505050506200036d565b60005461010090046001600160a01b03163314620000c55760405162461bcd60e51b8152602060048201526011602482015270155b985d5d1a1bdc9a5cd9590818d85b1b607a1b60448201526064015b60405180910390fd5b620000d08162000292565b600180546001600160a01b0319166001600160a01b0383169081179091556040519081527fe1694c0b21fdceff6411daed547c7463c2341b9695387bc82595b5b9b1851d4a906020015b60405180910390a150565b60005461010090046001600160a01b031633146200017a5760405162461bcd60e51b8152602060048201526011602482015270155b985d5d1a1bdc9a5cd9590818d85b1b607a1b6044820152606401620000bc565b620001858162000292565b600280546001600160a01b0319166001600160a01b0383169081179091556040516301ffc9a760e01b8152637dadce6f60e01b60048201526301ffc9a790602401602060405180830381865afa158015620001e4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200020a919062000342565b620002585760405162461bcd60e51b815260206004820152601760248201527f4e6f7420612070726f7065722049456d6d6574446174610000000000000000006044820152606401620000bc565b6040516001600160a01b03821681527fe5ba8ac1590c13f1dac4b187c1bb63d2703d5e151dab926a1dd60637e09e09c1906020016200011a565b6001600160a01b038116620002ea5760405162461bcd60e51b815260206004820152601b60248201527f416464726573732073686f756c64206e6f74206265207a65726f2e00000000006044820152606401620000bc565b50565b80516001600160a01b03811681146200030557600080fd5b919050565b600080604083850312156200031e57600080fd5b6200032983620002ed565b91506200033960208401620002ed565b90509250929050565b6000602082840312156200035557600080fd5b815180151581146200036657600080fd5b9392505050565b612e23806200037d6000396000f3fe6080604052600436106100f75760003560e01c80638456cb591161008a578063e45512ca11610059578063e45512ca146102b6578063e78cea92146102d6578063edfd36cd146102f6578063f851a4401461030b57600080fd5b80638456cb59146102205780639d6f17a814610235578063be50af2e14610276578063e2f273bd1461029657600080fd5b80635b427732116100c65780635b427732146101905780635c975abb146101c85780636dc3e77e146101e05780636eb382121461020057600080fd5b806301ffc9a7146101035780632308f36b146101385780632c092ee91461014d5780633f4ba83a1461017b57600080fd5b366100fe57005b600080fd5b34801561010f57600080fd5b5061012361011e3660046123c1565b610330565b60405190151581526020015b60405180910390f35b61014b61014636600461255e565b6103c9565b005b34801561015957600080fd5b5061016d61016836600461267b565b6106ed565b60405190815260200161012f565b34801561018757600080fd5b5061014b610d70565b34801561019c57600080fd5b506002546101b0906001600160a01b031681565b6040516001600160a01b03909116815260200161012f565b3480156101d457600080fd5b5060005460ff16610123565b3480156101ec57600080fd5b5061014b6101fb3660046127e3565b610dd5565b34801561020c57600080fd5b5061014b61021b3660046127e3565b610f7e565b34801561022c57600080fd5b5061014b611035565b34801561024157600080fd5b506101b0610250366004612800565b80516020818301810180516003825292820191909301209152546001600160a01b031681565b34801561028257600080fd5b5061014b610291366004612835565b611098565b3480156102a257600080fd5b5061014b6102b13660046127e3565b611273565b3480156102c257600080fd5b5061014b6102d1366004612861565b61133c565b3480156102e257600080fd5b506001546101b0906001600160a01b031681565b34801561030257600080fd5b5061014b611636565b34801561031757600080fd5b506000546101b09061010090046001600160a01b031681565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000831614806103c357507fffffffff0000000000000000000000000000000000000000000000000000000082167f0f01dd8200000000000000000000000000000000000000000000000000000000145b92915050565b6001546001600160a01b0316331461041c5760405162461bcd60e51b8152602060048201526011602482015270155b985d5d1a1bdc9a5cd9590818d85b1b607a1b60448201526064015b60405180910390fd5b600782600e811115610430576104306128b1565b146104b5576104b56040518060400160405280601f81526020017f57726f6e67204c504d6f64756c65206d617070696e6720746f20737465703a0081525061048884600e811115610483576104836128b1565b611792565b60408051808201909152600f81526e262826b7b23ab6329022b93937b91d60891b60208201529190611832565b600060038260a001516040516104cb91906128eb565b908152604051908190036020019020546001600160a01b0316905080610597576105976040518060400160405280601981526020017f4c697175696469747920506f6f6c20666f7220746f6b656e3a000000000000008152508360a001516040518060400160405280600c81526020017f2d206973206e6f742073657400000000000000000000000000000000000000008152506040518060400160405280600f81526020016e262826b7b23ab6329022b93937b91d60891b815250611856909392919063ffffffff16565b60025460a083015160405163182e67ed60e31b81526000926001600160a01b03169163c1733f68916105cc9190600401612933565b606060405180830381865afa1580156105e9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061060d9190612957565b5190506001600160a01b0381166106ca576106ca6040518060400160405280600781526020017f546f6f6b656e3a000000000000000000000000000000000000000000000000008152508460a001516040518060400160405280600c81526020017f2d206973206e6f742073657400000000000000000000000000000000000000008152506040518060400160405280600f81526020016e262826b7b23ab6329022b93937b91d60891b815250611856909392919063ffffffff16565b60408301516106e7906001600160a01b0383169033908590611862565b50505050565b6001546000906001600160a01b0316331461073e5760405162461bcd60e51b8152602060048201526011602482015270155b985d5d1a1bdc9a5cd9590818d85b1b607a1b6044820152606401610413565b6001546001600160a01b0316331461078c5760405162461bcd60e51b8152602060048201526011602482015270155b985d5d1a1bdc9a5cd9590818d85b1b607a1b6044820152606401610413565b600883600e8111156107a0576107a06128b1565b146107f3576107f36040518060400160405280601f81526020017f57726f6e67204c504d6f64756c65206d617070696e6720746f20737465703a0081525061048885600e811115610483576104836128b1565b6000600383610140015160405161080a91906128eb565b908152604051908190036020019020546001600160a01b03169050806108a0576108a06040518060400160405280601d81526020017f506f6f6c2061646472657373206973206e6f742073657420666f72202d0000008152508461014001516040518060400160405280600f81526020016e262826b7b23ab6329022b93937b91d60891b8152506118329092919063ffffffff16565b60025461012084015160405163182e67ed60e31b81526000926001600160a01b03169163c1733f68916108d69190600401612933565b606060405180830381865afa1580156108f3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109179190612957565b60025461014086015160405163182e67ed60e31b81529293506000926001600160a01b039092169163c1733f689161095191600401612933565b606060405180830381865afa15801561096e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109929190612957565b82519091506001600160a01b0316610a1a57610a1a6040518060400160405280601e81526020017f546f6b656e2061646472657373206973206e6f742073657420666f72202d00008152508661012001516040518060400160405280600f81526020016e262826b7b23ab6329022b93937b91d60891b8152506118329092919063ffffffff16565b80516001600160a01b0316610a9f57610a9f6040518060400160405280601e81526020017f546f6b656e2061646472657373206973206e6f742073657420666f72202d00008152508661014001516040518060400160405280600f81526020016e262826b7b23ab6329022b93937b91d60891b8152506118329092919063ffffffff16565b610120850151610140860151610ab4916118ea565b610aea57610ae58260200151826020015184604001518460400151896080015161191190949392919063ffffffff16565b610af0565b84608001515b81516040517f70a082310000000000000000000000000000000000000000000000000000000081526001600160a01b0386811660048301529296508692909116906370a0823190602401602060405180830381865afa158015610b57573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b7b91906129c7565b1015610bf057610bf06040518060400160405280601e81526020017f4c502062616c616e6365203c2072657175657374656420616d6f756e742e00008152506040518060400160405280600f81526020016e262826b7b23ab6329022b93937b91d60891b815250611b8190919063ffffffff16565b826001600160a01b031663f40d71f1610c0d876101000151611b8b565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e084901b1681526001600160a01b03909116600482015260248101879052604401600060405180830381600087803b158015610c6d57600080fd5b505af1925050508015610c7e575060015b610cd657610cd1604051806060016040528060218152602001612da86021913961014087015160408051808201909152600f81526e262826b7b23ab6329022b93937b91d60891b60208201529190611832565b610d67565b6040517f3cefb8ff000000000000000000000000000000000000000000000000000000008152600481018590526001600160a01b03841690633cefb8ff906024016020604051808303816000875af1158015610d36573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d5a91906129c7565b610d6490856129f6565b93505b50505092915050565b610d78611ca9565b60005461010090046001600160a01b03163314610dcb5760405162461bcd60e51b8152602060048201526011602482015270155b985d5d1a1bdc9a5cd9590818d85b1b607a1b6044820152606401610413565b610dd3611ce5565b565b60005461010090046001600160a01b03163314610e285760405162461bcd60e51b8152602060048201526011602482015270155b985d5d1a1bdc9a5cd9590818d85b1b607a1b6044820152606401610413565b610e3181611d37565b6002805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0383169081179091556040517f01ffc9a70000000000000000000000000000000000000000000000000000000081527f7dadce6f0000000000000000000000000000000000000000000000000000000060048201526301ffc9a790602401602060405180830381865afa158015610ece573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ef29190612a09565b610f3e5760405162461bcd60e51b815260206004820152601760248201527f4e6f7420612070726f7065722049456d6d6574446174610000000000000000006044820152606401610413565b6040516001600160a01b03821681527fe5ba8ac1590c13f1dac4b187c1bb63d2703d5e151dab926a1dd60637e09e09c1906020015b60405180910390a150565b60005461010090046001600160a01b03163314610fd15760405162461bcd60e51b8152602060048201526011602482015270155b985d5d1a1bdc9a5cd9590818d85b1b607a1b6044820152606401610413565b610fda81611d37565b6001805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0383169081179091556040519081527fe1694c0b21fdceff6411daed547c7463c2341b9695387bc82595b5b9b1851d4a90602001610f73565b61103d611d8d565b60005461010090046001600160a01b031633146110905760405162461bcd60e51b8152602060048201526011602482015270155b985d5d1a1bdc9a5cd9590818d85b1b607a1b6044820152606401610413565b610dd3611dca565b60005461010090046001600160a01b031633146110eb5760405162461bcd60e51b8152602060048201526011602482015270155b985d5d1a1bdc9a5cd9590818d85b1b607a1b6044820152606401610413565b6110f482611d37565b6040517fa9059cbb000000000000000000000000000000000000000000000000000000008152336004820152602481018290526000906001600160a01b0384169063a9059cbb906044016020604051808303816000875af115801561115d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111819190612a09565b9050806111d05760405162461bcd60e51b815260206004820152601560248201527f546f6b656e207472616e73666572206661696c656400000000000000000000006044820152606401610413565b7f8703deb082bbe9dd18bf858af977f1d7ced58bd7803c949a6e1011ae2d79f1ac836001600160a01b03166395d89b416040518163ffffffff1660e01b8152600401600060405180830381865afa15801561122f573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526112579190810190612a26565b33604051611266929190612a94565b60405180910390a1505050565b60005461010090046001600160a01b031633146112c65760405162461bcd60e51b8152602060048201526011602482015270155b985d5d1a1bdc9a5cd9590818d85b1b607a1b6044820152606401610413565b6112cf81611d37565b600080547fffffffffffffffffffffff0000000000000000000000000000000000000000ff166101006001600160a01b038416908102919091179091556040519081527f54e4612788f90384e6843298d7854436f3a585b2c3831ab66abf1de63bfa6c2d90602001610f73565b60005461010090046001600160a01b0316331461138f5760405162461bcd60e51b8152602060048201526011602482015270155b985d5d1a1bdc9a5cd9590818d85b1b607a1b6044820152606401610413565b8051600003611407576114076040518060400160405280600c81526020017f456d7074792073796d626f6c00000000000000000000000000000000000000008152506040518060400160405280600f81526020016e262826b7b23ab6329022b93937b91d60891b815250611b8190919063ffffffff16565b6000806001600160a01b031660038360405161142391906128eb565b908152604051908190036020019020546001600160a01b0390811691909114915083166114ff57801561149857611498604051806060016040528060258152602001612dc96025913960408051808201909152600f81526e262826b7b23ab6329022b93937b91d60891b602082015290611b81565b6003826040516114a891906128eb565b908152604051908190036020018120805473ffffffffffffffffffffffffffffffffffffffff191690557fef60746c22bef14ec43a3dacac0285ecf09185e7a45f16143e4cec2f62d0579290611266908490612abf565b826001600160a01b03163b600003611580576115806040518060400160405280601b81526020017f54686520706f6f6c206973206e6f74206120636f6e74726163742e00000000008152506040518060400160405280600f81526020016e262826b7b23ab6329022b93937b91d60891b815250611b8190919063ffffffff16565b8260038360405161159191906128eb565b90815260405190819003602001902080546001600160a01b039290921673ffffffffffffffffffffffffffffffffffffffff199092169190911790558015611602577fef60746c22bef14ec43a3dacac0285ecf09185e7a45f16143e4cec2f62d05792826040516112669190612b11565b7fef60746c22bef14ec43a3dacac0285ecf09185e7a45f16143e4cec2f62d05792826040516112669190612b63565b505050565b60005461010090046001600160a01b031633146116895760405162461bcd60e51b8152602060048201526011602482015270155b985d5d1a1bdc9a5cd9590818d85b1b607a1b6044820152606401610413565b47801561178f57604051600090339083908381818185875af1925050503d80600081146116d2576040519150601f19603f3d011682016040523d82523d6000602084013e6116d7565b606091505b50509050806117285760405162461bcd60e51b815260206004820152601460248201527f436f696e207769746864726177206661696c65640000000000000000000000006044820152606401610413565b60408051818152600b818301527f4e617469766520436f696e000000000000000000000000000000000000000000606082015233602082015290517f8703deb082bbe9dd18bf858af977f1d7ced58bd7803c949a6e1011ae2d79f1ac9181900360800190a1505b50565b6060600061179f83611e07565b600101905060008167ffffffffffffffff8111156117bf576117bf612412565b6040519080825280601f01601f1916602001820160405280156117e9576020820181803683370190505b5090508181016020015b600019017f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a85049450846117f357509392505050565b61183d838383611ee8565b60405162461bcd60e51b81526004016104139190612933565b61183d84848484611f81565b604080516001600160a01b0385811660248301528416604482015260648082018490528251808303909101815260849091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f23b872dd000000000000000000000000000000000000000000000000000000001790526106e7908590612043565b60008151835114801561190a575081805190602001208380519060200120145b9392505050565b600080856001600160a01b03166350d25bcd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611952573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061197691906129c7565b90506000856001600160a01b03166350d25bcd6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156119b8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119dc91906129c7565b90508115806119e9575080155b156119f957600092505050611b78565b600085886001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa158015611a3a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a5e9190612bb5565b611a689190612bd0565b611a7390600a612ccd565b9050600085886001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa158015611ab6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ada9190612bb5565b611ae49190612bd0565b611aef90600a612ccd565b9050818111600081611b0a57611b0583856129f6565b611b14565b611b1484846129f6565b90506000611b22878e612cdc565b905081600003611b3d57611b368682612cf3565b9750611b70565b8215611b585785611b4e8383612cdc565b611b369190612cf3565b85611b638383612cf3565b611b6d9190612cf3565b97505b505050505050505b95945050505050565b61183d82826120bf565b80516000908290602a03611c3b576000808060025b602a811015611c3057611bb561010085612d15565b9350611bd9858281518110611bcc57611bcc612d3e565b016020015160f81c61213f565b9250611bfa85611bea836001612d54565b81518110611bcc57611bcc612d3e565b915081611c08846010612d15565b611c129190612d67565b611c1c9085612d67565b9350611c29600282612d54565b9050611ba0565b509195945050505050565b60405162461bcd60e51b815260206004820152602860248201527f496e76616c696420737472696e67206c656e67746820666f7220616e2045564d60448201527f20616464726573730000000000000000000000000000000000000000000000006064820152608401610413565b60005460ff16610dd3576040517f8dfc202b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611ced611ca9565b6000805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b6001600160a01b03811661178f5760405162461bcd60e51b815260206004820152601b60248201527f416464726573732073686f756c64206e6f74206265207a65726f2e00000000006044820152606401610413565b60005460ff1615610dd3576040517fd93c066500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611dd2611d8d565b6000805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258611d1a3390565b60007a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008210611e4f577a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000820491506040015b6d04ee2d6d415b85acef81000000008210611e7b576d04ee2d6d415b85acef8100000000820491506020015b662386f26fc100008210611e9957662386f26fc10000820491506010015b6305f5e1008210611eb1576305f5e100820491506008015b6127108210611ec557612710820491506004015b60648210611ed7576064820491506002015b600a8210611ee3576001015b919050565b6040805160038082526080820190925260609160009190816020015b6060815260200190600190039081611f045790505090508481600081518110611f2f57611f2f612d3e565b60200260200101819052508381600181518110611f4e57611f4e612d3e565b60200260200101819052508281600281518110611f6d57611f6d612d3e565b6020026020010181905250611b788161220a565b60408051600480825260a0820190925260609160009190816020015b6060815260200190600190039081611f9d5790505090508581600081518110611fc857611fc8612d3e565b60200260200101819052508481600181518110611fe757611fe7612d3e565b6020026020010181905250838160028151811061200657612006612d3e565b6020026020010181905250828160038151811061202557612025612d3e565b60200260200101819052506120398161220a565b9695505050505050565b60006120586001600160a01b03841683612297565b9050805160001415801561207d57508080602001905181019061207b9190612a09565b155b15611631576040517f5274afe70000000000000000000000000000000000000000000000000000000081526001600160a01b0384166004820152602401610413565b604080516002808252606082810190935260009190816020015b60608152602001906001900390816120d9579050509050838160008151811061210457612104612d3e565b6020026020010181905250828160018151811061212357612123612d3e565b60200260200101819052506121378161220a565b949350505050565b600060618260ff1610158015612159575060668260ff1611155b1561217257612169605783612d8e565b60ff1692915050565b60308260ff161015801561218a575060398260ff1611155b1561219a57612169603083612d8e565b60418260ff16101580156121b2575060468260ff1611155b156121c257612169603783612d8e565b60405162461bcd60e51b815260206004820152601c60248201527f4e6f6e2d6865782063686172616374657220696e2061646472657373000000006044820152606401610413565b60606000825160005b8181101561223257602081810286010151519290920191600101612213565b50604051925060208301828101604052828452600092505b8183101561228f5760208381028601810151805191019060005b8181101561227c578281015184820152602001612264565b508083019250505060018301925061224a565b505050919050565b606061190a8383600084600080856001600160a01b031684866040516122bd91906128eb565b60006040518083038185875af1925050503d80600081146122fa576040519150601f19603f3d011682016040523d82523d6000602084013e6122ff565b606091505b509150915061203986838360608261231f5761231a8261237f565b61190a565b815115801561233657506001600160a01b0384163b155b15612378576040517f9996b3150000000000000000000000000000000000000000000000000000000081526001600160a01b0385166004820152602401610413565b508061190a565b80511561238f5780518082602001fd5b6040517f1425ea4200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000602082840312156123d357600080fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461190a57600080fd5b8035600f8110611ee357600080fd5b634e487b7160e01b600052604160045260246000fd5b604051610120810167ffffffffffffffff8111828210171561244c5761244c612412565b60405290565b604051610180810167ffffffffffffffff8111828210171561244c5761244c612412565b604051601f8201601f1916810167ffffffffffffffff8111828210171561249f5761249f612412565b604052919050565b801515811461178f57600080fd5b8035611ee3816124a7565b80356fffffffffffffffffffffffffffffffff81168114611ee357600080fd5b600067ffffffffffffffff8211156124fa576124fa612412565b50601f01601f191660200190565b600082601f83011261251957600080fd5b813561252c612527826124e0565b612476565b81815284602083860101111561254157600080fd5b816020850160208301376000918101602001919091529392505050565b6000806040838503121561257157600080fd5b61257a83612403565b9150602083013567ffffffffffffffff8082111561259757600080fd5b9084019061012082870312156125ac57600080fd5b6125b4612428565b823581526125c4602084016124b5565b602082015260408301356040820152606083013560608201526125e9608084016124c0565b608082015260a08301358281111561260057600080fd5b61260c88828601612508565b60a08301525060c08301358281111561262457600080fd5b61263088828601612508565b60c08301525060e08301358281111561264857600080fd5b61265488828601612508565b60e083015250610100915061266a8284016124b5565b828201528093505050509250929050565b6000806040838503121561268e57600080fd5b61269783612403565b9150602083013567ffffffffffffffff808211156126b457600080fd5b9084019061018082870312156126c957600080fd5b6126d1612452565b823581526020830135602082015260408301356040820152606083013560608201526080830135608082015260a083013560a082015261271360c084016124c0565b60c082015261272460e084016124c0565b60e0820152610100808401358381111561273d57600080fd5b61274989828701612508565b828401525050610120808401358381111561276357600080fd5b61276f89828701612508565b828401525050610140808401358381111561278957600080fd5b61279589828701612508565b82840152505061016080840135838111156127af57600080fd5b6127bb89828701612508565b8284015250508093505050509250929050565b6001600160a01b038116811461178f57600080fd5b6000602082840312156127f557600080fd5b813561190a816127ce565b60006020828403121561281257600080fd5b813567ffffffffffffffff81111561282957600080fd5b61213784828501612508565b6000806040838503121561284857600080fd5b8235612853816127ce565b946020939093013593505050565b6000806040838503121561287457600080fd5b823561287f816127ce565b9150602083013567ffffffffffffffff81111561289b57600080fd5b6128a785828601612508565b9150509250929050565b634e487b7160e01b600052602160045260246000fd5b60005b838110156128e25781810151838201526020016128ca565b50506000910152565b600082516128fd8184602087016128c7565b9190910192915050565b6000815180845261291f8160208601602086016128c7565b601f01601f19169290920160200192915050565b60208152600061190a6020830184612907565b805160ff81168114611ee357600080fd5b60006060828403121561296957600080fd5b6040516060810181811067ffffffffffffffff8211171561298c5761298c612412565b604052825161299a816127ce565b815260208301516129aa816127ce565b60208201526129bb60408401612946565b60408201529392505050565b6000602082840312156129d957600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b818103818111156103c3576103c36129e0565b600060208284031215612a1b57600080fd5b815161190a816124a7565b600060208284031215612a3857600080fd5b815167ffffffffffffffff811115612a4f57600080fd5b8201601f81018413612a6057600080fd5b8051612a6e612527826124e0565b818152856020838501011115612a8357600080fd5b611b788260208301602086016128c7565b604081526000612aa76040830185612907565b90506001600160a01b03831660208301529392505050565b604081526000612ad26040830184612907565b8281036020840152600781527f44656c657465640000000000000000000000000000000000000000000000000060208201526040810191505092915050565b604081526000612b246040830184612907565b8281036020840152600581527f416464656400000000000000000000000000000000000000000000000000000060208201526040810191505092915050565b604081526000612b766040830184612907565b8281036020840152600781527f557064617465640000000000000000000000000000000000000000000000000060208201526040810191505092915050565b600060208284031215612bc757600080fd5b61190a82612946565b60ff81811683821601908111156103c3576103c36129e0565b600181815b80851115612c24578160001904821115612c0a57612c0a6129e0565b80851615612c1757918102915b93841c9390800290612bee565b509250929050565b600082612c3b575060016103c3565b81612c48575060006103c3565b8160018114612c5e5760028114612c6857612c84565b60019150506103c3565b60ff841115612c7957612c796129e0565b50506001821b6103c3565b5060208310610133831016604e8410600b8410161715612ca7575081810a6103c3565b612cb18383612be9565b8060001904821115612cc557612cc56129e0565b029392505050565b600061190a60ff841683612c2c565b80820281158282048414176103c3576103c36129e0565b600082612d1057634e487b7160e01b600052601260045260246000fd5b500490565b6001600160a01b03828116828216818102831692918115828504821417610d6757610d676129e0565b634e487b7160e01b600052603260045260246000fd5b808201808211156103c3576103c36129e0565b6001600160a01b03818116838216019080821115612d8757612d876129e0565b5092915050565b60ff82811682821603908111156103c3576103c36129e056fe52656c656173652066726f6d204c50206661696c656420666f7220746f6b656e3a456d70747920706f6f6c207265706c6163696e6720616e20656d707479207265636f72642ea264697066735822122079e68399d55b620be01a647582ea2d8d4ac7e31b0d062075646f86e2b3b246cd64736f6c63430008180033";
const isSuperArgs = (xs) => xs.length > 1;
class LPModule__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    getDeployTransaction(newBridge, newEmmetData, overrides) {
        return super.getDeployTransaction(newBridge, newEmmetData, overrides || {});
    }
    deploy(newBridge, newEmmetData, overrides) {
        return super.deploy(newBridge, newEmmetData, overrides || {});
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
exports.LPModule__factory = LPModule__factory;
LPModule__factory.bytecode = _bytecode;
LPModule__factory.abi = _abi;
