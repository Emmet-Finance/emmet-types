"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmmetPriceFeed__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
        name: "AccessControlBadConfirmation",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
            {
                internalType: "bytes32",
                name: "neededRole",
                type: "bytes32",
            },
        ],
        name: "AccessControlUnauthorizedAccount",
        type: "error",
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
                name: "implementation",
                type: "address",
            },
        ],
        name: "ERC1967InvalidImplementation",
        type: "error",
    },
    {
        inputs: [],
        name: "ERC1967NonPayable",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "reason",
                type: "string",
            },
        ],
        name: "EmmetPriceFeedError",
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
        inputs: [],
        name: "InvalidInitialization",
        type: "error",
    },
    {
        inputs: [],
        name: "NotInitializing",
        type: "error",
    },
    {
        inputs: [],
        name: "ReentrancyGuardReentrantCall",
        type: "error",
    },
    {
        inputs: [],
        name: "UUPSUnauthorizedCallContext",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "slot",
                type: "bytes32",
            },
        ],
        name: "UUPSUnsupportedProxiableUUID",
        type: "error",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "newCCM",
                type: "address",
            },
        ],
        name: "CCMUpdated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint64",
                name: "version",
                type: "uint64",
            },
        ],
        name: "Initialized",
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
                internalType: "int256",
                name: "oldPrice",
                type: "int256",
            },
            {
                indexed: false,
                internalType: "int256",
                name: "newPrice",
                type: "int256",
            },
            {
                indexed: false,
                internalType: "uint80",
                name: "answeredInRound",
                type: "uint80",
            },
        ],
        name: "PriceUpdated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
            },
            {
                indexed: true,
                internalType: "bytes32",
                name: "previousAdminRole",
                type: "bytes32",
            },
            {
                indexed: true,
                internalType: "bytes32",
                name: "newAdminRole",
                type: "bytes32",
            },
        ],
        name: "RoleAdminChanged",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
            },
            {
                indexed: true,
                internalType: "address",
                name: "account",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "sender",
                type: "address",
            },
        ],
        name: "RoleGranted",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
            },
            {
                indexed: true,
                internalType: "address",
                name: "account",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "sender",
                type: "address",
            },
        ],
        name: "RoleRevoked",
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
                indexed: true,
                internalType: "address",
                name: "implementation",
                type: "address",
            },
        ],
        name: "Upgraded",
        type: "event",
    },
    {
        inputs: [],
        name: "CFO_ROLE",
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
        name: "DEFAULT_ADMIN_ROLE",
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
        name: "MANAGER_ROLE",
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
        name: "SIGNER_ROLE",
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
        name: "UPGRADE_INTERFACE_VERSION",
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
        inputs: [],
        name: "ccm",
        outputs: [
            {
                internalType: "contract ICrossChainMessenger",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "decimals",
        outputs: [
            {
                internalType: "uint8",
                name: "",
                type: "uint8",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "description",
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
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
            },
        ],
        name: "getRoleAdmin",
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
        inputs: [
            {
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "grantRole",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "hasRole",
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
                name: "cfo_",
                type: "address",
            },
            {
                internalType: "address",
                name: "manager_",
                type: "address",
            },
        ],
        name: "initialize",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint8",
                name: "decimals_",
                type: "uint8",
            },
            {
                internalType: "string",
                name: "description_",
                type: "string",
            },
            {
                internalType: "address",
                name: "manager_",
                type: "address",
            },
            {
                internalType: "address",
                name: "cfo_",
                type: "address",
            },
        ],
        name: "initializePriceFeed",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "latestAnswer",
        outputs: [
            {
                internalType: "int256",
                name: "",
                type: "int256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "latestRoundData",
        outputs: [
            {
                internalType: "uint80",
                name: "roundId",
                type: "uint80",
            },
            {
                internalType: "int256",
                name: "answer",
                type: "int256",
            },
            {
                internalType: "uint256",
                name: "_startedAt",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "updatedAt",
                type: "uint256",
            },
            {
                internalType: "uint80",
                name: "answeredInRound",
                type: "uint80",
            },
        ],
        stateMutability: "view",
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
        inputs: [],
        name: "proxiableUUID",
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
        inputs: [
            {
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "callerConfirmation",
                type: "address",
            },
        ],
        name: "renounceRole",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "revokeRole",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "startedAt",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
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
                name: "ccm_",
                type: "address",
            },
        ],
        name: "updateCCM",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "int256",
                name: "newPrice_",
                type: "int256",
            },
            {
                internalType: "uint80",
                name: "answeredInRound_",
                type: "uint80",
            },
        ],
        name: "updateTokenPrice",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newImplementation",
                type: "address",
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "upgradeToAndCall",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
];
const _bytecode = "0x60a06040523060805234801561001457600080fd5b50608051611e9561003e600039600081816112460152818161126f01526114220152611e956000f3fe6080604052600436106101a15760003560e01c80637284e416116100e1578063a1ebf35d1161008a578063d547741f11610064578063d547741f1461055b578063ec87621c1461057b578063f21f537d146105af578063feaf968c146105c557600080fd5b8063a1ebf35d146104c9578063a217fddf146104fd578063ad3cb1cc1461051257600080fd5b806385ef8338116100bb57806385ef83381461041057806391d14854146104305780639f6f50ed1461049557600080fd5b80637284e416146103b95780637fe83c11146103db5780638456cb59146103fb57600080fd5b80633a16e5cf1161014e5780634f1ef286116101285780634f1ef2861461034457806350d25bcd1461035757806352d1902d1461036d5780635c975abb1461038257600080fd5b80633a16e5cf146102d75780633f4ba83a1461030f578063485cc9551461032457600080fd5b80632f2ff15d1161017f5780632f2ff15d1461025a578063313ce5671461027a57806336568abe146102b757600080fd5b806301ffc9a7146101a6578063153348d9146101db578063248a9ca3146101fd575b600080fd5b3480156101b257600080fd5b506101c66101c136600461199c565b610630565b60405190151581526020015b60405180910390f35b3480156101e757600080fd5b506101fb6101f63660046119fa565b6106c9565b005b34801561020957600080fd5b5061024c610218366004611a15565b60009081527f02dd7bc7dec4dceedda775e58dd541e08a116c6c53815c0bd028192f7b626800602052604090206001015490565b6040519081526020016101d2565b34801561026657600080fd5b506101fb610275366004611a2e565b6107f8565b34801561028657600080fd5b5060005474010000000000000000000000000000000000000000900460ff1660405160ff90911681526020016101d2565b3480156102c357600080fd5b506101fb6102d2366004611a2e565b610842565b3480156102e357600080fd5b506000546102f7906001600160a01b031681565b6040516001600160a01b0390911681526020016101d2565b34801561031b57600080fd5b506101fb610893565b34801561033057600080fd5b506101fb61033f366004611a5a565b6108d0565b6101fb610352366004611b10565b610a87565b34801561036357600080fd5b5061024c60015481565b34801561037957600080fd5b5061024c610aa2565b34801561038e57600080fd5b507fcd5ed15c6e187e77e9aee88184c21f4f2182ab5827cb3b7e07fbedcd63f033005460ff166101c6565b3480156103c557600080fd5b506103ce610ad1565b6040516101d29190611b96565b3480156103e757600080fd5b506101fb6103f6366004611bc9565b610b5f565b34801561040757600080fd5b506101fb610cf5565b34801561041c57600080fd5b506101fb61042b366004611c54565b610d2f565b34801561043c57600080fd5b506101c661044b366004611a2e565b60009182527f02dd7bc7dec4dceedda775e58dd541e08a116c6c53815c0bd028192f7b626800602090815260408084206001600160a01b0393909316845291905290205460ff1690565b3480156104a157600080fd5b5061024c7fa3096443b30f1eec162a8cf66862cf662a85fd0e4fd35a824b183bfeac968c3281565b3480156104d557600080fd5b5061024c7fe2f4eaae4a9751e85a3e4a7b9587827a877f29914755229b07a7b2da98285f7081565b34801561050957600080fd5b5061024c600081565b34801561051e57600080fd5b506103ce6040518060400160405280600581526020017f352e302e3000000000000000000000000000000000000000000000000000000081525081565b34801561056757600080fd5b506101fb610576366004611a2e565b610ee8565b34801561058757600080fd5b5061024c7f241ecf16d79d0f8dbfb92cbc07fe17840425976cf0667f022fe9877caa831b0881565b3480156105bb57600080fd5b5061024c60025481565b3480156105d157600080fd5b5060005460015460025460035460045460408051750100000000000000000000000000000000000000000090960469ffffffffffffffffffff90811687526020870195909552850192909252606084015216608082015260a0016101d2565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f7965db0b0000000000000000000000000000000000000000000000000000000014806106c357507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b7f241ecf16d79d0f8dbfb92cbc07fe17840425976cf0667f022fe9877caa831b086106f381610f2c565b6106fb610f36565b6001600160a01b038216156107f457816001600160a01b03163b60000361078a5760408051808201825260208082527f70726f76696465642063636d5f206973206e6f74206120636f6e74726163742e818301528251808401909352601283527f456d6d65742041646d696e204572726f723a00000000000000000000000000009083015261078a9190610f94565b600080547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0384169081179091556040519081527f157d007e6aa857bd220c7b32cc72f4d3f62ec8f304a4c5d107269f42c00ed4519060200160405180910390a15b5050565b60008281527f02dd7bc7dec4dceedda775e58dd541e08a116c6c53815c0bd028192f7b626800602052604090206001015461083281610f2c565b61083c8383610fd1565b50505050565b6001600160a01b0381163314610884576040517f6697b23200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61088e82826110a0565b505050565b61089b611146565b7f241ecf16d79d0f8dbfb92cbc07fe17840425976cf0667f022fe9877caa831b086108c581610f2c565b6108cd6111a1565b50565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00805468010000000000000000810460ff16159067ffffffffffffffff1660008115801561091b5750825b905060008267ffffffffffffffff1660011480156109385750303b155b905081158015610946575080155b1561097d576040517ff92ee8a900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b845467ffffffffffffffff1916600117855583156109b157845468ff00000000000000001916680100000000000000001785555b6109b9611213565b6109c161121b565b6109c9611213565b6109d161122b565b6109dc600033610fd1565b50610a077fa3096443b30f1eec162a8cf66862cf662a85fd0e4fd35a824b183bfeac968c3288610fd1565b50610a327f241ecf16d79d0f8dbfb92cbc07fe17840425976cf0667f022fe9877caa831b0887610fd1565b508315610a7e57845468ff000000000000000019168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b50505050505050565b610a8f61123b565b610a988261130b565b6107f48282611316565b6000610aac611417565b507f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc90565b60058054610ade90611c93565b80601f0160208091040260200160405190810160405280929190818152602001828054610b0a90611c93565b8015610b575780601f10610b2c57610100808354040283529160200191610b57565b820191906000526020600020905b815481529060010190602001808311610b3a57829003601f168201915b505050505081565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00805468010000000000000000810460ff16159067ffffffffffffffff16600081158015610baa5750825b905060008267ffffffffffffffff166001148015610bc75750303b155b905081158015610bd5575080155b15610c0c576040517ff92ee8a900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b845467ffffffffffffffff191660011785558315610c4057845468ff00000000000000001916680100000000000000001785555b600080547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff167401000000000000000000000000000000000000000060ff8c16021790556005610c908982611d1d565b5042600255610c9f86886108d0565b8315610cea57845468ff000000000000000019168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b505050505050505050565b610cfd610f36565b7f241ecf16d79d0f8dbfb92cbc07fe17840425976cf0667f022fe9877caa831b08610d2781610f2c565b6108cd611479565b7f241ecf16d79d0f8dbfb92cbc07fe17840425976cf0667f022fe9877caa831b08610d5981610f2c565b8169ffffffffffffffffffff16600003610dfa576040517f54b3e2a700000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f496e73756666696369656e74206e756d626572206f6620616e7377657273206960448201527f6e20726f756e642e00000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b600080547501000000000000000000000000000000000000000000900469ffffffffffffffffffff16906015610e2f83611ddd565b82546101009290920a69ffffffffffffffffffff81810219909316918316021790915542600355600480547fffffffffffffffffffffffffffffffffffffffffffff000000000000000000001691851691909117905550600154831461088e576001805490849055604080518281526020810186905269ffffffffffffffffffff85168183015290517fdc28ce8f0f1e7c276751ae27d4fce6b5bec464a41ca6194df415378c1523de4d9181900360600190a150505050565b60008281527f02dd7bc7dec4dceedda775e58dd541e08a116c6c53815c0bd028192f7b6268006020526040902060010154610f2281610f2c565b61083c83836110a0565b6108cd81336114d4565b7fcd5ed15c6e187e77e9aee88184c21f4f2182ab5827cb3b7e07fbedcd63f033005460ff1615610f92576040517fd93c066500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b610f9e8282611561565b6040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610df19190611b96565b60008281527f02dd7bc7dec4dceedda775e58dd541e08a116c6c53815c0bd028192f7b626800602081815260408084206001600160a01b038616855290915282205460ff16611096576000848152602082815260408083206001600160a01b03871684529091529020805460ff1916600117905561104c3390565b6001600160a01b0316836001600160a01b0316857f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a460019150506106c3565b60009150506106c3565b60008281527f02dd7bc7dec4dceedda775e58dd541e08a116c6c53815c0bd028192f7b626800602081815260408084206001600160a01b038616855290915282205460ff1615611096576000848152602082815260408083206001600160a01b0387168085529252808320805460ff1916905551339287917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a460019150506106c3565b7fcd5ed15c6e187e77e9aee88184c21f4f2182ab5827cb3b7e07fbedcd63f033005460ff16610f92576040517f8dfc202b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6111a9611146565b7fcd5ed15c6e187e77e9aee88184c21f4f2182ab5827cb3b7e07fbedcd63f03300805460ff191681557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a150565b610f926115e1565b6112236115e1565b610f92611648565b6112336115e1565b610f9261167b565b306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614806112d457507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166112c87f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b6001600160a01b031614155b15610f92576040517fe07c8dba00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006107f481610f2c565b816001600160a01b03166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa925050508015611370575060408051601f3d908101601f1916820190925261136d91810190611e14565b60015b6113b1576040517f4c9c8ce30000000000000000000000000000000000000000000000000000000081526001600160a01b0383166004820152602401610df1565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc811461140d576040517faa1d49a400000000000000000000000000000000000000000000000000000000815260048101829052602401610df1565b61088e83836116a9565b306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610f92576040517fe07c8dba00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611481610f36565b7fcd5ed15c6e187e77e9aee88184c21f4f2182ab5827cb3b7e07fbedcd63f03300805460ff191660011781557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258336111f5565b60008281527f02dd7bc7dec4dceedda775e58dd541e08a116c6c53815c0bd028192f7b626800602090815260408083206001600160a01b038516845290915290205460ff166107f4576040517fe2517d3f0000000000000000000000000000000000000000000000000000000081526001600160a01b038216600482015260248101839052604401610df1565b604080516002808252606082810190935260009190816020015b606081526020019060019003908161157b57905050905083816000815181106115a6576115a6611e2d565b602002602001018190525082816001815181106115c5576115c5611e2d565b60200260200101819052506115d9816116ff565b949350505050565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a005468010000000000000000900460ff16610f92576040517fd7e6bcf800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6116506115e1565b7fcd5ed15c6e187e77e9aee88184c21f4f2182ab5827cb3b7e07fbedcd63f03300805460ff19169055565b6116836115e1565b60017f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f0055565b6116b28261178c565b6040516001600160a01b038316907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a28051156116f75761088e8282611834565b6107f46118aa565b60606000825160005b8181101561172757602081810286010151519290920191600101611708565b50604051925060208301828101604052828452600092505b818310156117845760208381028601810151805191019060005b81811015611771578281015184820152602001611759565b508083019250505060018301925061173f565b505050919050565b806001600160a01b03163b6000036117db576040517f4c9c8ce30000000000000000000000000000000000000000000000000000000081526001600160a01b0382166004820152602401610df1565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0392909216919091179055565b6060600080846001600160a01b0316846040516118519190611e43565b600060405180830381855af49150503d806000811461188c576040519150601f19603f3d011682016040523d82523d6000602084013e611891565b606091505b50915091506118a18583836118e2565b95945050505050565b3415610f92576040517fb398979f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6060826118f7576118f28261195a565b611953565b815115801561190e57506001600160a01b0384163b155b15611950576040517f9996b3150000000000000000000000000000000000000000000000000000000081526001600160a01b0385166004820152602401610df1565b50805b9392505050565b80511561196a5780518082602001fd5b6040517f1425ea4200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000602082840312156119ae57600080fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461195357600080fd5b80356001600160a01b03811681146119f557600080fd5b919050565b600060208284031215611a0c57600080fd5b611953826119de565b600060208284031215611a2757600080fd5b5035919050565b60008060408385031215611a4157600080fd5b82359150611a51602084016119de565b90509250929050565b60008060408385031215611a6d57600080fd5b611a76836119de565b9150611a51602084016119de565b634e487b7160e01b600052604160045260246000fd5b600067ffffffffffffffff80841115611ab557611ab5611a84565b604051601f8501601f19908116603f01168101908282118183101715611add57611add611a84565b81604052809350858152868686011115611af657600080fd5b858560208301376000602087830101525050509392505050565b60008060408385031215611b2357600080fd5b611b2c836119de565b9150602083013567ffffffffffffffff811115611b4857600080fd5b8301601f81018513611b5957600080fd5b611b6885823560208401611a9a565b9150509250929050565b60005b83811015611b8d578181015183820152602001611b75565b50506000910152565b6020815260008251806020840152611bb5816040850160208701611b72565b601f01601f19169190910160400192915050565b60008060008060808587031215611bdf57600080fd5b843560ff81168114611bf057600080fd5b9350602085013567ffffffffffffffff811115611c0c57600080fd5b8501601f81018713611c1d57600080fd5b611c2c87823560208401611a9a565b935050611c3b604086016119de565b9150611c49606086016119de565b905092959194509250565b60008060408385031215611c6757600080fd5b82359150602083013569ffffffffffffffffffff81168114611c8857600080fd5b809150509250929050565b600181811c90821680611ca757607f821691505b602082108103611cc757634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111561088e576000816000526020600020601f850160051c81016020861015611cf65750805b601f850160051c820191505b81811015611d1557828155600101611d02565b505050505050565b815167ffffffffffffffff811115611d3757611d37611a84565b611d4b81611d458454611c93565b84611ccd565b602080601f831160018114611d805760008415611d685750858301515b600019600386901b1c1916600185901b178555611d15565b600085815260208120601f198616915b82811015611daf57888601518255948401946001909101908401611d90565b5085821015611dcd5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b600069ffffffffffffffffffff808316818103611e0a57634e487b7160e01b600052601160045260246000fd5b6001019392505050565b600060208284031215611e2657600080fd5b5051919050565b634e487b7160e01b600052603260045260246000fd5b60008251611e55818460208701611b72565b919091019291505056fea2646970667358221220fae16788e0ba8ca1332e64c17a12e13a5ab78c8351cc0df2f94e846eecba120564736f6c63430008180033";
const isSuperArgs = (xs) => xs.length > 1;
class EmmetPriceFeed__factory extends ethers_1.ContractFactory {
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
exports.EmmetPriceFeed__factory = EmmetPriceFeed__factory;
EmmetPriceFeed__factory.bytecode = _bytecode;
EmmetPriceFeed__factory.abi = _abi;
