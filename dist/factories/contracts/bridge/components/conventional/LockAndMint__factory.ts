/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../../../common";
import type {
  LockAndMint,
  LockAndMintInterface,
} from "../../../../../contracts/bridge/components/conventional/LockAndMint";

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
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200345b3803806200345b83398101604081905262000034916200030a565b600080546001600160a81b0319166101003302179055818162000057826200006c565b620000628162000125565b505050506200036d565b60005461010090046001600160a01b03163314620000c55760405162461bcd60e51b8152602060048201526011602482015270155b985d5d1a1bdc9a5cd9590818d85b1b607a1b60448201526064015b60405180910390fd5b620000d08162000292565b600180546001600160a01b0319166001600160a01b0383169081179091556040519081527fe1694c0b21fdceff6411daed547c7463c2341b9695387bc82595b5b9b1851d4a906020015b60405180910390a150565b60005461010090046001600160a01b031633146200017a5760405162461bcd60e51b8152602060048201526011602482015270155b985d5d1a1bdc9a5cd9590818d85b1b607a1b6044820152606401620000bc565b620001858162000292565b600280546001600160a01b0319166001600160a01b0383169081179091556040516301ffc9a760e01b8152637dadce6f60e01b60048201526301ffc9a790602401602060405180830381865afa158015620001e4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200020a919062000342565b620002585760405162461bcd60e51b815260206004820152601760248201527f4e6f7420612070726f7065722049456d6d6574446174610000000000000000006044820152606401620000bc565b6040516001600160a01b03821681527fe5ba8ac1590c13f1dac4b187c1bb63d2703d5e151dab926a1dd60637e09e09c1906020016200011a565b6001600160a01b038116620002ea5760405162461bcd60e51b815260206004820152601b60248201527f416464726573732073686f756c64206e6f74206265207a65726f2e00000000006044820152606401620000bc565b50565b80516001600160a01b03811681146200030557600080fd5b919050565b600080604083850312156200031e57600080fd5b6200032983620002ed565b91506200033960208401620002ed565b90509250929050565b6000602082840312156200035557600080fd5b815180151581146200036657600080fd5b9392505050565b6130de806200037d6000396000f3fe6080604052600436106100e15760003560e01c80636eb382121161007f578063e2f273bd11610059578063e2f273bd1461023f578063e78cea921461025f578063edfd36cd1461027f578063f851a4401461029457600080fd5b80636eb38212146101ea5780638456cb591461020a578063be50af2e1461021f57600080fd5b80633f4ba83a116100bb5780633f4ba83a146101655780635b4277321461017a5780635c975abb146101b25780636dc3e77e146101ca57600080fd5b806301ffc9a7146100ed5780632308f36b146101225780632c092ee91461013757600080fd5b366100e857005b600080fd5b3480156100f957600080fd5b5061010d6101083660046127aa565b6102b9565b60405190151581526020015b60405180910390f35b610135610130366004612947565b610352565b005b34801561014357600080fd5b50610157610152366004612a64565b61071f565b604051908152602001610119565b34801561017157600080fd5b50610135610fd7565b34801561018657600080fd5b5060025461019a906001600160a01b031681565b6040516001600160a01b039091168152602001610119565b3480156101be57600080fd5b5060005460ff1661010d565b3480156101d657600080fd5b506101356101e5366004612bcc565b61103c565b3480156101f657600080fd5b50610135610205366004612bcc565b6111f0565b34801561021657600080fd5b506101356112b2565b34801561022b57600080fd5b5061013561023a366004612be9565b611315565b34801561024b57600080fd5b5061013561025a366004612bcc565b6114f0565b34801561026b57600080fd5b5060015461019a906001600160a01b031681565b34801561028b57600080fd5b506101356115b9565b3480156102a057600080fd5b5060005461019a9061010090046001600160a01b031681565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316148061034c57507fffffffff0000000000000000000000000000000000000000000000000000000082167f0f01dd8200000000000000000000000000000000000000000000000000000000145b92915050565b6001546001600160a01b031633146103a55760405162461bcd60e51b8152602060048201526011602482015270155b985d5d1a1bdc9a5cd9590818d85b1b607a1b60448201526064015b60405180910390fd5b600382600e8111156103b9576103b9612c15565b036105dc57600254604080517f71433cfb0000000000000000000000000000000000000000000000000000000081529051610455926001600160a01b0316916371433cfb9160048083019260009291908290030181865afa158015610422573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261044a9190810190612c4f565b60a083015190611715565b156105a2578060400151341015610528576105286040518060400160405280600981526020017f53656e74204554483a00000000000000000000000000000000000000000000008152506104a83461173c565b6040518060400160405280601281526020017f2e205768696c65207265717565737465643a00000000000000000000000000008152506104eb856040015161173c565b60408051808201909152601281527f4c6f636b416e644d696e74204572726f723a00000000000000000000000000006020820152939291906117dc565b60408082015190517f4e617469766520636f696e20456d6d65742e4c6f636b00000000000000000000815230919060160160006040518083038185875af1925050503d8060008114610596576040519150601f19603f3d011682016040523d82523d6000602084013e61059b565b606091505b5050505050565b60006105b18260a001516117e9565b90506105d733308460400151846001600160a01b0316611862909392919063ffffffff16565b505050565b600582600e8111156105f0576105f0612c15565b0361068b5760006106048260a001516117e9565b60408084015190517f79cc679000000000000000000000000000000000000000000000000000000000815233600482015260248101919091529091506001600160a01b038216906379cc679090604401600060405180830381600087803b15801561066e57600080fd5b505af1158015610682573d6000803e3d6000fd5b50505050505050565b61071b6040518060400160405280601681526020017f57726f6e67206d617070696e67206f6620737465703a000000000000000000008152506106de84600e8111156106d9576106d9612c15565b61173c565b60408051808201909152601081527f3d3e204272696467654d6f64756c653a0000000000000000000000000000000060208201526104eb306118f0565b5050565b6001546000906001600160a01b031633146107705760405162461bcd60e51b8152602060048201526011602482015270155b985d5d1a1bdc9a5cd9590818d85b1b607a1b604482015260640161039c565b6001546001600160a01b031633146107be5760405162461bcd60e51b8152602060048201526011602482015270155b985d5d1a1bdc9a5cd9590818d85b1b607a1b604482015260640161039c565b60025461012083015160405163182e67ed60e31b81526000926001600160a01b03169163c1733f68916107f49190600401612ce9565b606060405180830381865afa158015610811573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108359190612d0d565b60025461014085015160405163182e67ed60e31b81529293506000926001600160a01b039092169163c1733f689161086f91600401612ce9565b606060405180830381865afa15801561088c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108b09190612d0d565b82519091506001600160a01b0316610946576109466040518060400160405280601e81526020017f546f6b656e2061646472657373206973206e6f742073657420666f72202d00008152508561012001516040518060400160405280601281526020017f4c6f636b416e644d696e74204572726f723a00000000000000000000000000008152506119069092919063ffffffff16565b80516001600160a01b03166109d9576109d96040518060400160405280601e81526020017f546f6b656e2061646472657373206973206e6f742073657420666f72202d00008152508561014001516040518060400160405280601281526020017f4c6f636b416e644d696e74204572726f723a00000000000000000000000000008152506119069092919063ffffffff16565b6101208401516101408501516109ee91611715565b610a2457610a1f8260200151826020015184604001518460400151886080015161191190949392919063ffffffff16565b610a2a565b83608001515b9250600485600e811115610a4057610a40612c15565b03610bb4576000610a558561014001516117e9565b9050806001600160a01b03166340c10f19610a74876101000151611b81565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e084901b1681526001600160a01b03909116600482015260248101879052604401600060405180830381600087803b158015610ad457600080fd5b505af1925050508015610ae5575060015b610bae57610bae6040518060400160405280601681526020017f4d696e74696e67206f662074686520616d6f756e743a00000000000000000000815250610b2b8661173c565b6040518060400160405280601381526020017f2d206661696c656420666f7220746f6b656e3a000000000000000000000000008152508861014001516040518060400160405280601281526020017f4c6f636b416e644d696e74204572726f723a00000000000000000000000000008152506117dc90949392919063ffffffff16565b50610fcf565b600685600e811115610bc857610bc8612c15565b03610f8157600254604080517f71433cfb0000000000000000000000000000000000000000000000000000000081529051610c65926001600160a01b0316916371433cfb9160048083019260009291908290030181865afa158015610c31573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610c599190810190612c4f565b61014086015190611715565b15610d2a57600080610c7b866101000151611b81565b6001600160a01b031685604051610cb5907f4e617469766520636f696e20456d6d65742e556e6c6f636b0000000000000000815260180190565b60006040518083038185875af1925050503d8060008114610cf2576040519150601f19603f3d011682016040523d82523d6000602084013e610cf7565b606091505b509150915081610d2357610d0a81611c9f565b60405162461bcd60e51b815260040161039c9190612ce9565b5050610fcf565b6000610d3a8561014001516117e9565b6040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201529091506000906001600160a01b038316906370a0823190602401602060405180830381865afa158015610d9d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dc19190612d7d565b905084811015610e2f57610e2f60405180606001604052806025815260200161303660259139610df08761173c565b6040518060400160405280601181526020017f2e2041637475616c2062616c616e63653a0000000000000000000000000000008152506104eb8561173c565b816001600160a01b031663a9059cbb610e4c886101000151611b81565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e084901b1681526001600160a01b039091166004820152602481018890526044016020604051808303816000875af1925050508015610ecd575060408051601f3d908101601f19168201909252610eca91810190612d96565b60015b610f2c57610f276040518060600160405280602b815260200161307e602b913960408051808201909152601281527f4c6f636b416e644d696e74204572726f723a0000000000000000000000000000602082015290611d14565b610d23565b80610f795760405162461bcd60e51b815260206004820152601360248201527f546f6b656e20756e6c6f636b206661696c656400000000000000000000000000604482015260640161039c565b505050610fcf565b610fcf6040518060400160405280601681526020017f57726f6e67206d617070696e67206f6620737465703a000000000000000000008152506106de87600e8111156106d9576106d9612c15565b505092915050565b610fdf611d1e565b60005461010090046001600160a01b031633146110325760405162461bcd60e51b8152602060048201526011602482015270155b985d5d1a1bdc9a5cd9590818d85b1b607a1b604482015260640161039c565b61103a611d5a565b565b60005461010090046001600160a01b0316331461108f5760405162461bcd60e51b8152602060048201526011602482015270155b985d5d1a1bdc9a5cd9590818d85b1b607a1b604482015260640161039c565b61109881611dac565b600280547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0383169081179091556040517f01ffc9a70000000000000000000000000000000000000000000000000000000081527f7dadce6f0000000000000000000000000000000000000000000000000000000060048201526301ffc9a790602401602060405180830381865afa158015611140573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111649190612d96565b6111b05760405162461bcd60e51b815260206004820152601760248201527f4e6f7420612070726f7065722049456d6d657444617461000000000000000000604482015260640161039c565b6040516001600160a01b03821681527fe5ba8ac1590c13f1dac4b187c1bb63d2703d5e151dab926a1dd60637e09e09c1906020015b60405180910390a150565b60005461010090046001600160a01b031633146112435760405162461bcd60e51b8152602060048201526011602482015270155b985d5d1a1bdc9a5cd9590818d85b1b607a1b604482015260640161039c565b61124c81611dac565b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0383169081179091556040519081527fe1694c0b21fdceff6411daed547c7463c2341b9695387bc82595b5b9b1851d4a906020016111e5565b6112ba611e02565b60005461010090046001600160a01b0316331461130d5760405162461bcd60e51b8152602060048201526011602482015270155b985d5d1a1bdc9a5cd9590818d85b1b607a1b604482015260640161039c565b61103a611e3f565b60005461010090046001600160a01b031633146113685760405162461bcd60e51b8152602060048201526011602482015270155b985d5d1a1bdc9a5cd9590818d85b1b607a1b604482015260640161039c565b61137182611dac565b6040517fa9059cbb000000000000000000000000000000000000000000000000000000008152336004820152602481018290526000906001600160a01b0384169063a9059cbb906044016020604051808303816000875af11580156113da573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113fe9190612d96565b90508061144d5760405162461bcd60e51b815260206004820152601560248201527f546f6b656e207472616e73666572206661696c65640000000000000000000000604482015260640161039c565b7f8703deb082bbe9dd18bf858af977f1d7ced58bd7803c949a6e1011ae2d79f1ac836001600160a01b03166395d89b416040518163ffffffff1660e01b8152600401600060405180830381865afa1580156114ac573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526114d49190810190612c4f565b336040516114e3929190612db3565b60405180910390a1505050565b60005461010090046001600160a01b031633146115435760405162461bcd60e51b8152602060048201526011602482015270155b985d5d1a1bdc9a5cd9590818d85b1b607a1b604482015260640161039c565b61154c81611dac565b600080547fffffffffffffffffffffff0000000000000000000000000000000000000000ff166101006001600160a01b038416908102919091179091556040519081527f54e4612788f90384e6843298d7854436f3a585b2c3831ab66abf1de63bfa6c2d906020016111e5565b60005461010090046001600160a01b0316331461160c5760405162461bcd60e51b8152602060048201526011602482015270155b985d5d1a1bdc9a5cd9590818d85b1b607a1b604482015260640161039c565b47801561171257604051600090339083908381818185875af1925050503d8060008114611655576040519150601f19603f3d011682016040523d82523d6000602084013e61165a565b606091505b50509050806116ab5760405162461bcd60e51b815260206004820152601460248201527f436f696e207769746864726177206661696c6564000000000000000000000000604482015260640161039c565b60408051818152600b818301527f4e617469766520436f696e000000000000000000000000000000000000000000606082015233602082015290517f8703deb082bbe9dd18bf858af977f1d7ced58bd7803c949a6e1011ae2d79f1ac9181900360800190a1505b50565b600081518351148015611735575081805190602001208380519060200120145b9392505050565b6060600061174983611e7c565b600101905060008167ffffffffffffffff811115611769576117696127fb565b6040519080825280601f01601f191660200182016040528015611793576020820181803683370190505b5090508181016020015b600019017f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a850494508461179d57509392505050565b610d0a8585858585611f5d565b60025460405163182e67ed60e31b81526000916001600160a01b03169063c1733f689061181a908590600401612ce9565b606060405180830381865afa158015611837573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061185b9190612d0d565b5192915050565b604080516001600160a01b0385811660248301528416604482015260648082018490528251808303909101815260849091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f23b872dd000000000000000000000000000000000000000000000000000000001790526118ea90859061203f565b50505050565b606061034c6001600160a01b03831660146120bb565b610d0a838383612346565b600080856001600160a01b03166350d25bcd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611952573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119769190612d7d565b90506000856001600160a01b03166350d25bcd6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156119b8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119dc9190612d7d565b90508115806119e9575080155b156119f957600092505050611b78565b600085886001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa158015611a3a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a5e9190612dde565b611a689190612e0f565b611a7390600a612f0c565b9050600085886001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa158015611ab6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ada9190612dde565b611ae49190612e0f565b611aef90600a612f0c565b9050818111600081611b0a57611b058385612f1b565b611b14565b611b148484612f1b565b90506000611b22878e612f2e565b905081600003611b3d57611b368682612f45565b9750611b70565b8215611b585785611b4e8383612f2e565b611b369190612f45565b85611b638383612f45565b611b6d9190612f45565b97505b505050505050505b95945050505050565b80516000908290602a03611c31576000808060025b602a811015611c2657611bab61010085612f67565b9350611bcf858281518110611bc257611bc2612f99565b016020015160f81c6123df565b9250611bf085611be0836001612faf565b81518110611bc257611bc2612f99565b915081611bfe846010612f67565b611c089190612fc2565b611c129085612fc2565b9350611c1f600282612faf565b9050611b96565b509195945050505050565b60405162461bcd60e51b815260206004820152602860248201527f496e76616c696420737472696e67206c656e67746820666f7220616e2045564d60448201527f2061646472657373000000000000000000000000000000000000000000000000606482015260840161039c565b6060604482511015611ce457505060408051808201909152601681527f556e636c6561722072657665727420726561736f6e2e00000000000000000000602082015290565b5080517ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc01600490910190815290565b610d0a82826124aa565b60005460ff1661103a576040517f8dfc202b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611d62611d1e565b6000805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b6001600160a01b0381166117125760405162461bcd60e51b815260206004820152601b60248201527f416464726573732073686f756c64206e6f74206265207a65726f2e0000000000604482015260640161039c565b60005460ff161561103a576040517fd93c066500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611e47611e02565b6000805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258611d8f3390565b60007a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008210611ec4577a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000820491506040015b6d04ee2d6d415b85acef81000000008210611ef0576d04ee2d6d415b85acef8100000000820491506020015b662386f26fc100008210611f0e57662386f26fc10000820491506010015b6305f5e1008210611f26576305f5e100820491506008015b6127108210611f3a57612710820491506004015b60648210611f4c576064820491506002015b600a8210611f58576001015b919050565b60408051600580825260c0820190925260609160009190816020015b6060815260200190600190039081611f795790505090508681600081518110611fa457611fa4612f99565b60200260200101819052508581600181518110611fc357611fc3612f99565b60200260200101819052508481600281518110611fe257611fe2612f99565b6020026020010181905250838160038151811061200157612001612f99565b6020026020010181905250828160048151811061202057612020612f99565b60200260200101819052506120348161251e565b979650505050505050565b60006120546001600160a01b038416836125ab565b905080516000141580156120795750808060200190518101906120779190612d96565b155b156105d7576040517f5274afe70000000000000000000000000000000000000000000000000000000081526001600160a01b038416600482015260240161039c565b60608260006120cb846002612f2e565b6120d6906002612faf565b67ffffffffffffffff8111156120ee576120ee6127fb565b6040519080825280601f01601f191660200182016040528015612118576020820181803683370190505b5090507f30000000000000000000000000000000000000000000000000000000000000008160008151811061214f5761214f612f99565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f7800000000000000000000000000000000000000000000000000000000000000816001815181106121b2576121b2612f99565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535060006121ee856002612f2e565b6121f9906001612faf565b90505b6001811115612296577f303132333435363738396162636465660000000000000000000000000000000083600f166010811061223a5761223a612f99565b1a60f81b82828151811061225057612250612f99565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535060049290921c9161228f81612fe9565b90506121fc565b50811561233e5761233e60405180606001604052806023815260200161305b602391396122c28661173c565b6040518060400160405280601b81526020017f646f6573206e6f74206d6174636820746865206076616c7565603a0000000000815250612301896125b9565b60408051808201909152600e81527f537472696e6773204572726f723a0000000000000000000000000000000000006020820152939291906117dc565b949350505050565b6040805160038082526080820190925260609160009190816020015b6060815260200190600190039081612362579050509050848160008151811061238d5761238d612f99565b602002602001018190525083816001815181106123ac576123ac612f99565b602002602001018190525082816002815181106123cb576123cb612f99565b6020026020010181905250611b788161251e565b600060618260ff16101580156123f9575060668260ff1611155b1561241257612409605783613000565b60ff1692915050565b60308260ff161015801561242a575060398260ff1611155b1561243a57612409603083613000565b60418260ff1610158015612452575060468260ff1611155b1561246257612409603783613000565b60405162461bcd60e51b815260206004820152601c60248201527f4e6f6e2d6865782063686172616374657220696e206164647265737300000000604482015260640161039c565b604080516002808252606082810190935260009190816020015b60608152602001906001900390816124c457905050905083816000815181106124ef576124ef612f99565b6020026020010181905250828160018151811061250e5761250e612f99565b602002602001018190525061233e815b60606000825160005b8181101561254657602081810286010151519290920191600101612527565b50604051925060208301828101604052828452600092505b818310156125a35760208381028601810151805191019060005b81811015612590578281015184820152602001612578565b508083019250505060018301925061255e565b505050919050565b60606117358383600061263d565b606061034c826126358460ff60806fffffffffffffffffffffffffffffffff83119081029290921c604067ffffffffffffffff82119081029190911c602063ffffffff82119081029190911c61ffff811160108181029290921c9490941160029094026004909202600890930294029390930101919091010190565b6001016120bb565b60608147101561267b576040517fcd78605900000000000000000000000000000000000000000000000000000000815230600482015260240161039c565b600080856001600160a01b031684866040516126979190613019565b60006040518083038185875af1925050503d80600081146126d4576040519150601f19603f3d011682016040523d82523d6000602084013e6126d9565b606091505b50915091506126e98683836126f3565b9695505050505050565b6060826127085761270382612768565b611735565b815115801561271f57506001600160a01b0384163b155b15612761576040517f9996b3150000000000000000000000000000000000000000000000000000000081526001600160a01b038516600482015260240161039c565b5080611735565b8051156127785780518082602001fd5b6040517f1425ea4200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000602082840312156127bc57600080fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461173557600080fd5b8035600f8110611f5857600080fd5b634e487b7160e01b600052604160045260246000fd5b604051610120810167ffffffffffffffff81118282101715612835576128356127fb565b60405290565b604051610180810167ffffffffffffffff81118282101715612835576128356127fb565b604051601f8201601f1916810167ffffffffffffffff81118282101715612888576128886127fb565b604052919050565b801515811461171257600080fd5b8035611f5881612890565b80356fffffffffffffffffffffffffffffffff81168114611f5857600080fd5b600067ffffffffffffffff8211156128e3576128e36127fb565b50601f01601f191660200190565b600082601f83011261290257600080fd5b8135612915612910826128c9565b61285f565b81815284602083860101111561292a57600080fd5b816020850160208301376000918101602001919091529392505050565b6000806040838503121561295a57600080fd5b612963836127ec565b9150602083013567ffffffffffffffff8082111561298057600080fd5b90840190610120828703121561299557600080fd5b61299d612811565b823581526129ad6020840161289e565b602082015260408301356040820152606083013560608201526129d2608084016128a9565b608082015260a0830135828111156129e957600080fd5b6129f5888286016128f1565b60a08301525060c083013582811115612a0d57600080fd5b612a19888286016128f1565b60c08301525060e083013582811115612a3157600080fd5b612a3d888286016128f1565b60e0830152506101009150612a5382840161289e565b828201528093505050509250929050565b60008060408385031215612a7757600080fd5b612a80836127ec565b9150602083013567ffffffffffffffff80821115612a9d57600080fd5b908401906101808287031215612ab257600080fd5b612aba61283b565b823581526020830135602082015260408301356040820152606083013560608201526080830135608082015260a083013560a0820152612afc60c084016128a9565b60c0820152612b0d60e084016128a9565b60e08201526101008084013583811115612b2657600080fd5b612b32898287016128f1565b8284015250506101208084013583811115612b4c57600080fd5b612b58898287016128f1565b8284015250506101408084013583811115612b7257600080fd5b612b7e898287016128f1565b8284015250506101608084013583811115612b9857600080fd5b612ba4898287016128f1565b8284015250508093505050509250929050565b6001600160a01b038116811461171257600080fd5b600060208284031215612bde57600080fd5b813561173581612bb7565b60008060408385031215612bfc57600080fd5b8235612c0781612bb7565b946020939093013593505050565b634e487b7160e01b600052602160045260246000fd5b60005b83811015612c46578181015183820152602001612c2e565b50506000910152565b600060208284031215612c6157600080fd5b815167ffffffffffffffff811115612c7857600080fd5b8201601f81018413612c8957600080fd5b8051612c97612910826128c9565b818152856020838501011115612cac57600080fd5b611b78826020830160208601612c2b565b60008151808452612cd5816020860160208601612c2b565b601f01601f19169290920160200192915050565b6020815260006117356020830184612cbd565b805160ff81168114611f5857600080fd5b600060608284031215612d1f57600080fd5b6040516060810181811067ffffffffffffffff82111715612d4257612d426127fb565b6040528251612d5081612bb7565b81526020830151612d6081612bb7565b6020820152612d7160408401612cfc565b60408201529392505050565b600060208284031215612d8f57600080fd5b5051919050565b600060208284031215612da857600080fd5b815161173581612890565b604081526000612dc66040830185612cbd565b90506001600160a01b03831660208301529392505050565b600060208284031215612df057600080fd5b61173582612cfc565b634e487b7160e01b600052601160045260246000fd5b60ff818116838216019081111561034c5761034c612df9565b600181815b80851115612e63578160001904821115612e4957612e49612df9565b80851615612e5657918102915b93841c9390800290612e2d565b509250929050565b600082612e7a5750600161034c565b81612e875750600061034c565b8160018114612e9d5760028114612ea757612ec3565b600191505061034c565b60ff841115612eb857612eb8612df9565b50506001821b61034c565b5060208310610133831016604e8410600b8410161715612ee6575081810a61034c565b612ef08383612e28565b8060001904821115612f0457612f04612df9565b029392505050565b600061173560ff841683612e6b565b8181038181111561034c5761034c612df9565b808202811582820484141761034c5761034c612df9565b600082612f6257634e487b7160e01b600052601260045260246000fd5b500490565b6001600160a01b03828116828216818102831692918115828504821417612f9057612f90612df9565b50505092915050565b634e487b7160e01b600052603260045260246000fd5b8082018082111561034c5761034c612df9565b6001600160a01b03818116838216019080821115612fe257612fe2612df9565b5092915050565b600081612ff857612ff8612df9565b506000190190565b60ff828116828216039081111561034c5761034c612df9565b6000825161302b818460208701612c2b565b919091019291505056fe496e73756666696369656e74207661756c742062616c616e63652e2052657175697265643a746f486578537472696e672876616c75652c6c656e6774682920606c656e677468603a42726964676554797065732e537465702e556e6c6f636b206661696c656420756e65787065637465646c79a2646970667358221220ad204e8fafe32952a656a2cb8a1075492ae97e3cd61187e77d4b3b99f84fce7064736f6c63430008180033";

type LockAndMintConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LockAndMintConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LockAndMint__factory extends ContractFactory {
  constructor(...args: LockAndMintConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    newBridge: AddressLike,
    newEmmetData: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(newBridge, newEmmetData, overrides || {});
  }
  override deploy(
    newBridge: AddressLike,
    newEmmetData: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(newBridge, newEmmetData, overrides || {}) as Promise<
      LockAndMint & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): LockAndMint__factory {
    return super.connect(runner) as LockAndMint__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LockAndMintInterface {
    return new Interface(_abi) as LockAndMintInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): LockAndMint {
    return new Contract(address, _abi, runner) as unknown as LockAndMint;
  }
}
