"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ITokenMessenger__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint64",
                name: "nonce",
                type: "uint64",
            },
            {
                indexed: true,
                internalType: "address",
                name: "burnToken",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                indexed: true,
                internalType: "address",
                name: "depositor",
                type: "address",
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "mintRecipient",
                type: "bytes32",
            },
            {
                indexed: false,
                internalType: "uint32",
                name: "destinationDomain",
                type: "uint32",
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "destinationTokenMessenger",
                type: "bytes32",
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "destinationCaller",
                type: "bytes32",
            },
        ],
        name: "DepositForBurn",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                internalType: "uint32",
                name: "destinationDomain",
                type: "uint32",
            },
            {
                internalType: "bytes32",
                name: "mintRecipient",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "burnToken",
                type: "address",
            },
        ],
        name: "depositForBurn",
        outputs: [
            {
                internalType: "uint64",
                name: "_nonce",
                type: "uint64",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
];
class ITokenMessenger__factory {
    static createInterface() {
        return new ethers_1.Interface(_abi);
    }
    static connect(address, runner) {
        return new ethers_1.Contract(address, _abi, runner);
    }
}
exports.ITokenMessenger__factory = ITokenMessenger__factory;
ITokenMessenger__factory.abi = _abi;
