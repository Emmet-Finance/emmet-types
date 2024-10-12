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
import type { NonPayableOverrides } from "../../../../common";
import type {
  ExplorerUpgradable,
  ExplorerUpgradableInterface,
} from "../../../../contracts/BridgeExplorer/Explorer.sol/ExplorerUpgradable";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "newData",
        type: "address",
      },
      {
        internalType: "address",
        name: "newConsensus",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "consensus",
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
    inputs: [
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "convertToUsd",
    outputs: [
      {
        internalType: "uint256",
        name: "converted",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "dataAddress",
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
    inputs: [
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
    ],
    name: "getPriceAndDecimals",
    outputs: [
      {
        internalType: "int256",
        name: "price",
        type: "int256",
      },
      {
        internalType: "uint8",
        name: "decimals",
        type: "uint8",
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
    name: "getPriceDecimals",
    outputs: [
      {
        internalType: "uint8",
        name: "decimals",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getStats",
    outputs: [
      {
        internalType: "uint256",
        name: "bridgedInUSD",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "collectedFees",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalTransactions",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "uniqueAccounts",
        type: "uint256",
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
    name: "getTokenPrice",
    outputs: [
      {
        internalType: "int256",
        name: "price",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "txHash",
        type: "bytes32",
      },
    ],
    name: "getTransaction",
    outputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "txHash",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "start",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "finish",
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
            internalType: "uint256",
            name: "sentInUSD",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "receivedInUSD",
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
            internalType: "uint256",
            name: "protocolFee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "compensation",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "sender",
            type: "string",
          },
          {
            internalType: "string",
            name: "recipient",
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
        ],
        internalType: "struct ExplorerUpgradable.ExplorerTransaction",
        name: "bridgeTransaction",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "batch",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "offset",
        type: "uint256",
      },
    ],
    name: "getTransactions",
    outputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "txHash",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "start",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "finish",
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
            internalType: "uint256",
            name: "sentInUSD",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "receivedInUSD",
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
            internalType: "uint256",
            name: "protocolFee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "compensation",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "sender",
            type: "string",
          },
          {
            internalType: "string",
            name: "recipient",
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
        ],
        internalType: "struct ExplorerUpgradable.ExplorerTransaction[]",
        name: "bridgeTransactions",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint128",
        name: "chainId",
        type: "uint128",
      },
    ],
    name: "protocolFee",
    outputs: [
      {
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
    ],
    stateMutability: "view",
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
        name: "newConsensus",
        type: "address",
      },
    ],
    name: "updateConsensus",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newData",
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
        internalType: "uint128",
        name: "chainId",
        type: "uint128",
      },
      {
        internalType: "uint256",
        name: "newProtocolFee",
        type: "uint256",
      },
    ],
    name: "updateProtocolFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "txHash",
        type: "bytes32",
      },
    ],
    name: "updateTransaction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001e3138038062001e31833981016040819052620000349162000083565b600280546001600160a01b039384166001600160a01b03199182161790915560018054929093169116179055620000bb565b80516001600160a01b03811681146200007e57600080fd5b919050565b600080604083850312156200009757600080fd5b620000a28362000066565b9150620000b26020840162000066565b90509250929050565b611d6680620000cb6000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c8063b0b7393511610097578063ca7090a211610066578063ca7090a214610286578063e2f273bd14610299578063ec616b88146102ac578063eca3c82f146102bf57600080fd5b8063b0b739351461020a578063b1014cd91461021d578063bdf7a87b14610247578063c59d48471461025a57600080fd5b806375b238fc116100d357806375b238fc1461018b5780638898971a146101b25780638ef3f761146101d2578063a5f94027146101e557600080fd5b80631b655054146101055780634aae13ca146101355780635350758f146101555780636dc3e77e14610176575b600080fd5b600254610118906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b61014861014336600461117a565b6102e8565b60405161012c91906112e4565b61016861016336600461142d565b610544565b60405190815260200161012c565b610189610184366004611482565b610642565b005b6101687fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c2177581565b6101c56101c036600461149f565b6106d0565b60405161012c91906114c1565b600154610118906001600160a01b031681565b6101f86101f336600461142d565b6108a6565b60405160ff909116815260200161012c565b61018961021836600461117a565b61099d565b61023061022b36600461142d565b610cd4565b6040805192835260ff90911660208301520161012c565b610168610255366004611543565b610cf2565b60035460045460055460065460408051948552602085019390935291830152606082015260800161012c565b610189610294366004611482565b610d30565b6101896102a7366004611482565b610db9565b6101896102ba36600461159d565b610e42565b6101686102cd3660046115c9565b6001600160801b031660009081526009602052604090205490565b610376604051806101e001604052806000801916815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160801b0316815260200160006001600160801b031681526020016000815260200160008152602001606081526020016060815260200160608152602001606081525090565b6001546040517f4aae13ca000000000000000000000000000000000000000000000000000000008152600481018490526000916001600160a01b031690634aae13ca90602401600060405180830381865afa1580156103d9573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261040191908101906117dc565b90506000610429600480846101c001515161041c9190611827565b6101c08501519190610eb8565b9050600080828060200190518101906104429190611840565b91509150604051806101e00160405280838152602001826060015181526020018560a001516001600160801b031681526020018260800151815260200161048d866101a00151610fe0565b81526020016104a58361012001518460800151610cf2565b81526020016104bd8361014001518460a00151610cf2565b815260200185604001516001600160801b0316815260200185606001516001600160801b031681526020018561010001516001600160801b031681526020018560c001516001600160801b03168152602001856101200151815260200182610100015181526020018261012001518152602001826101400151815250945050505050919050565b6002546040517fc1733f6800000000000000000000000000000000000000000000000000000000815260009182916001600160a01b039091169063c1733f689061059290869060040161198c565b606060405180830381865afa1580156105af573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105d391906119b0565b602001519050806001600160a01b03166350d25bcd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610617573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061063b9190611a02565b9392505050565b6000546001600160a01b031633146106a15760405162461bcd60e51b815260206004820152601160248201527f556e617574686f72697365642063616c6c00000000000000000000000000000060448201526064015b60405180910390fd5b6002805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b6001546040517f8898971a00000000000000000000000000000000000000000000000000000000815260048101849052602481018390526060916000916001600160a01b0390911690638898971a90604401600060405180830381865afa15801561073f573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526107679190810190611a1b565b80519091508067ffffffffffffffff811115610785576107856112f7565b60405190808252806020026020018201604052801561084457816020015b610831604051806101e001604052806000801916815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160801b0316815260200160006001600160801b031681526020016000815260200160008152602001606081526020016060815260200160608152602001606081525090565b8152602001906001900390816107a35790505b50925060005b8181101561089d5761087883828151811061086757610867611ade565b6020026020010151600001516102e8565b84828151811061088a5761088a611ade565b602090810291909101015260010161084a565b50505092915050565b6002546040517fc1733f6800000000000000000000000000000000000000000000000000000000815260009182916001600160a01b039091169063c1733f68906108f490869060040161198c565b606060405180830381865afa158015610911573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061093591906119b0565b602001519050806001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa158015610979573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061063b9190611af4565b6000546001600160a01b031633146109f75760405162461bcd60e51b815260206004820152601160248201527f556e617574686f72697365642063616c6c0000000000000000000000000000006044820152606401610698565b60008181526007602052604090205460ff1615610a565760405162461bcd60e51b815260206004820152601b60248201527f5472616e73616374696f6e20616c7265616479207570646174656400000000006044820152606401610698565b6000610a61826102e8565b80519091508214610ab45760405162461bcd60e51b815260206004820152601860248201527f556e7265636f676e697a6564207472616e73616374696f6e00000000000000006044820152606401610698565b6000828152600760205260408120805460ff191660011790556005805491610adb83611b0f565b91905055506008816101600151604051610af59190611b29565b9081526040519081900360200190205460ff16610b595760016008826101600151604051610b239190611b29565b908152604051908190036020019020805491151560ff1990921691909117905560068054906000610b5383611b0f565b91905055505b6008816101800151604051610b6e9190611b29565b9081526040519081900360200190205460ff16610bd25760016008826101800151604051610b9c9190611b29565b908152604051908190036020019020805491151560ff1990921691909117905560068054906000610bcc83611b0f565b91905055505b8060a0015160036000828254610be89190611b45565b909155505060025460e08201516040517fe22fe72f0000000000000000000000000000000000000000000000000000000081526001600160801b039091166004820152600091610ca8916001600160a01b039091169063e22fe72f9060240160a060405180830381865afa158015610c64573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c889190611ba7565b6040015173ffffffffffffffffffffffffffffffffffffffff1916611068565b9050610cb981836101200151610cf2565b60046000828254610cca9190611b45565b9091555050505050565b600080610ce083610544565b9150610ceb836108a6565b9050915091565b6000806000610d0085610cd4565b9092509050610d1360ff8216600a611ceb565b610d1d8386611cf7565b610d279190611d0e565b95945050505050565b6000546001600160a01b03163314610d8a5760405162461bcd60e51b815260206004820152601160248201527f556e617574686f72697365642063616c6c0000000000000000000000000000006044820152606401610698565b6001805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b6000546001600160a01b03163314610e135760405162461bcd60e51b815260206004820152601160248201527f556e617574686f72697365642063616c6c0000000000000000000000000000006044820152606401610698565b6000805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b6000546001600160a01b03163314610e9c5760405162461bcd60e51b815260206004820152601160248201527f556e617574686f72697365642063616c6c0000000000000000000000000000006044820152606401610698565b6001600160801b03909116600090815260096020526040902055565b606081610ec681601f611b45565b1015610f145760405162461bcd60e51b815260206004820152600e60248201527f736c6963655f6f766572666c6f770000000000000000000000000000000000006044820152606401610698565b610f1e8284611b45565b84511015610f6e5760405162461bcd60e51b815260206004820152601160248201527f736c6963655f6f75744f66426f756e64730000000000000000000000000000006044820152606401610698565b606082158015610f8d5760405191506000825260208201604052610fd7565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015610fc6578051835260209283019201610fae565b5050858452601f01601f1916604052505b50949350505050565b60008181805b825181101561106057600083828151811061100357611003611ade565b016020015160f81c90506030811080159061101f575060398111155b1561104b5761102f603082611827565b61103a84600a611cf7565b6110449190611b45565b9250611057565b50600095945050505050565b50600101610fe6565b509392505050565b606060005b600c811080156110b357508281600c811061108a5761108a611ade565b1a60f81b7fff000000000000000000000000000000000000000000000000000000000000001615155b156110c8576110c181611b0f565b905061106d565b60008167ffffffffffffffff8111156110e3576110e36112f7565b6040519080825280601f01601f19166020018201604052801561110d576020820181803683370190505b50905060005b82811015611060578481600c811061112d5761112d611ade565b1a60f81b82828151811061114357611143611ade565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600101611113565b60006020828403121561118c57600080fd5b5035919050565b60005b838110156111ae578181015183820152602001611196565b50506000910152565b600081518084526111cf816020860160208601611193565b601f01601f19169290920160200192915050565b60006101e0825184526020830151602085015260408301516040850152606083015160608501526080830151608085015260a083015160a085015260c083015160c085015260e083015161124260e08601826001600160801b03169052565b50610100838101516001600160801b0316908501526101208084015190850152610140808401519085015261016080840151818601839052611286838701826111b7565b9250505061018080840151858303828701526112a283826111b7565b925050506101a080840151858303828701526112be83826111b7565b925050506101c080840151858303828701526112da83826111b7565b9695505050505050565b60208152600061063b60208301846111e3565b634e487b7160e01b600052604160045260246000fd5b6040516101e0810167ffffffffffffffff81118282101715611331576113316112f7565b60405290565b604051610180810167ffffffffffffffff81118282101715611331576113316112f7565b6040516060810167ffffffffffffffff81118282101715611331576113316112f7565b604051601f8201601f1916810167ffffffffffffffff811182821017156113a7576113a76112f7565b604052919050565b600067ffffffffffffffff8211156113c9576113c96112f7565b50601f01601f191660200190565b600082601f8301126113e857600080fd5b81356113fb6113f6826113af565b61137e565b81815284602083860101111561141057600080fd5b816020850160208301376000918101602001919091529392505050565b60006020828403121561143f57600080fd5b813567ffffffffffffffff81111561145657600080fd5b611462848285016113d7565b949350505050565b6001600160a01b038116811461147f57600080fd5b50565b60006020828403121561149457600080fd5b813561063b8161146a565b600080604083850312156114b257600080fd5b50508035926020909101359150565b600060208083016020845280855180835260408601915060408160051b87010192506020870160005b82811015611536577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc08886030184526115248583516111e3565b945092850192908501906001016114ea565b5092979650505050505050565b6000806040838503121561155657600080fd5b823567ffffffffffffffff81111561156d57600080fd5b611579858286016113d7565b95602094909401359450505050565b6001600160801b038116811461147f57600080fd5b600080604083850312156115b057600080fd5b82356115bb81611588565b946020939093013593505050565b6000602082840312156115db57600080fd5b813561063b81611588565b80516115f181611588565b919050565b600082601f83011261160757600080fd5b81516116156113f6826113af565b81815284602083860101111561162a57600080fd5b611462826020830160208701611193565b60006101e0828403121561164e57600080fd5b61165661130d565b90508151815260208201516020820152611672604083016115e6565b6040820152611683606083016115e6565b6060820152611694608083016115e6565b60808201526116a560a083016115e6565b60a08201526116b660c083016115e6565b60c08201526116c760e083016115e6565b60e08201526101006116da8184016115e6565b908201526101208281015167ffffffffffffffff808211156116fb57600080fd5b611707868387016115f6565b8385015261014092508285015191508082111561172357600080fd5b61172f868387016115f6565b8385015261016092508285015191508082111561174b57600080fd5b611757868387016115f6565b8385015261018092508285015191508082111561177357600080fd5b61177f868387016115f6565b838501526101a092508285015191508082111561179b57600080fd5b6117a7868387016115f6565b838501526101c09250828501519150808211156117c357600080fd5b506117d0858286016115f6565b82840152505092915050565b6000602082840312156117ee57600080fd5b815167ffffffffffffffff81111561180557600080fd5b6114628482850161163b565b634e487b7160e01b600052601160045260246000fd5b8181038181111561183a5761183a611811565b92915050565b6000806040838503121561185357600080fd5b82519150602083015167ffffffffffffffff8082111561187257600080fd5b90840190610180828703121561188757600080fd5b61188f611337565b825181526020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a08201526118d160c084016115e6565b60c08201526118e260e084016115e6565b60e082015261010080840151838111156118fb57600080fd5b611907898287016115f6565b828401525050610120808401518381111561192157600080fd5b61192d898287016115f6565b828401525050610140808401518381111561194757600080fd5b611953898287016115f6565b828401525050610160808401518381111561196d57600080fd5b611979898287016115f6565b8284015250508093505050509250929050565b60208152600061063b60208301846111b7565b805160ff811681146115f157600080fd5b6000606082840312156119c257600080fd5b6119ca61135b565b82516119d58161146a565b815260208301516119e58161146a565b60208201526119f66040840161199f565b60408201529392505050565b600060208284031215611a1457600080fd5b5051919050565b60006020808385031215611a2e57600080fd5b825167ffffffffffffffff80821115611a4657600080fd5b818501915085601f830112611a5a57600080fd5b815181811115611a6c57611a6c6112f7565b8060051b611a7b85820161137e565b9182528381018501918581019089841115611a9557600080fd5b86860192505b83831015611ad157825185811115611ab35760008081fd5b611ac18b89838a010161163b565b8352509186019190860190611a9b565b9998505050505050505050565b634e487b7160e01b600052603260045260246000fd5b600060208284031215611b0657600080fd5b61063b8261199f565b60006000198203611b2257611b22611811565b5060010190565b60008251611b3b818460208701611193565b9190910192915050565b8082018082111561183a5761183a611811565b600060408284031215611b6a57600080fd5b6040516040810181811067ffffffffffffffff82111715611b8d57611b8d6112f7565b604052825181526020928301519281019290925250919050565b600060a08284031215611bb957600080fd5b611bc161135b565b611bcb8484611b58565b8152611bda8460408501611b58565b6020820152608083015173ffffffffffffffffffffffffffffffffffffffff19811681146119f657600080fd5b600181815b80851115611c42578160001904821115611c2857611c28611811565b80851615611c3557918102915b93841c9390800290611c0c565b509250929050565b600082611c595750600161183a565b81611c665750600061183a565b8160018114611c7c5760028114611c8657611ca2565b600191505061183a565b60ff841115611c9757611c97611811565b50506001821b61183a565b5060208310610133831016604e8410600b8410161715611cc5575081810a61183a565b611ccf8383611c07565b8060001904821115611ce357611ce3611811565b029392505050565b600061063b8383611c4a565b808202811582820484141761183a5761183a611811565b600082611d2b57634e487b7160e01b600052601260045260246000fd5b50049056fea264697066735822122022b54f29577afaac83c04af580c0c56b8942a61486cbebac5660fb008fba81bd64736f6c63430008180033";

type ExplorerUpgradableConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ExplorerUpgradableConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ExplorerUpgradable__factory extends ContractFactory {
  constructor(...args: ExplorerUpgradableConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    newData: AddressLike,
    newConsensus: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(newData, newConsensus, overrides || {});
  }
  override deploy(
    newData: AddressLike,
    newConsensus: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(newData, newConsensus, overrides || {}) as Promise<
      ExplorerUpgradable & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): ExplorerUpgradable__factory {
    return super.connect(runner) as ExplorerUpgradable__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ExplorerUpgradableInterface {
    return new Interface(_abi) as ExplorerUpgradableInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ExplorerUpgradable {
    return new Contract(address, _abi, runner) as unknown as ExplorerUpgradable;
  }
}
