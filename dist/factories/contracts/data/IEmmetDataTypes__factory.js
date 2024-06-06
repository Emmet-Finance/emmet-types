"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IEmmetDataTypes__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "string",
                name: "message",
                type: "string",
            },
        ],
        name: "GassFeesUpdateError",
        type: "error",
    },
    {
        inputs: [],
        name: "StringOver32Charachters",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "uint128",
                name: "chainId",
                type: "uint128",
            },
        ],
        name: "UnsupportedChain",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "symbol",
                type: "string",
            },
        ],
        name: "UnsupportedToken",
        type: "error",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint128",
                name: "chainId",
                type: "uint128",
            },
        ],
        name: "CCTPChainDeleted",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint128",
                name: "chainId",
                type: "uint128",
            },
            {
                indexed: false,
                internalType: "uint128",
                name: "cctpDestId",
                type: "uint128",
            },
            {
                indexed: false,
                internalType: "uint8",
                name: "awaitMinutes",
                type: "uint8",
            },
            {
                indexed: false,
                internalType: "uint8",
                name: "awaitSeconds",
                type: "uint8",
            },
            {
                indexed: false,
                internalType: "uint8",
                name: "numberOfAwaitedBlocks",
                type: "uint8",
            },
        ],
        name: "CctpChainUpdated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint128",
                name: "chainId",
                type: "uint128",
            },
        ],
        name: "ChainDeleted",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint128",
                name: "chainId",
                type: "uint128",
            },
            {
                indexed: false,
                internalType: "string",
                name: "name",
                type: "string",
            },
            {
                indexed: false,
                internalType: "string",
                name: "token",
                type: "string",
            },
        ],
        name: "ChainUpdate",
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
        ],
        name: "TokenDeleted",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "addr",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint8",
                name: "decimals",
                type: "uint8",
            },
            {
                indexed: false,
                internalType: "string",
                name: "symbol",
                type: "string",
            },
        ],
        name: "TokenUpdate",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "oldGasFees",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "newGasFees",
                type: "address",
            },
        ],
        name: "UpdatedGasFeesAddress",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint128",
                name: "oldFee",
                type: "uint128",
            },
            {
                indexed: false,
                internalType: "uint128",
                name: "newFee",
                type: "uint128",
            },
        ],
        name: "UpdatedProtocolFee",
        type: "event",
    },
];
class IEmmetDataTypes__factory {
    static createInterface() {
        return new ethers_1.Interface(_abi);
    }
    static connect(address, runner) {
        return new ethers_1.Contract(address, _abi, runner);
    }
}
exports.IEmmetDataTypes__factory = IEmmetDataTypes__factory;
IEmmetDataTypes__factory.abi = _abi;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSUVtbWV0RGF0YVR5cGVzX19mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2ZhY3Rvcmllcy9jb250cmFjdHMvZGF0YS9JRW1tZXREYXRhVHlwZXNfX2ZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLCtDQUErQztBQUMvQyxvQkFBb0I7QUFDcEIsb0JBQW9COzs7QUFFcEIsbUNBQWtFO0FBTWxFLE1BQU0sSUFBSSxHQUFHO0lBQ1g7UUFDRSxNQUFNLEVBQUU7WUFDTjtnQkFDRSxZQUFZLEVBQUUsUUFBUTtnQkFDdEIsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsSUFBSSxFQUFFLFFBQVE7YUFDZjtTQUNGO1FBQ0QsSUFBSSxFQUFFLHFCQUFxQjtRQUMzQixJQUFJLEVBQUUsT0FBTztLQUNkO0lBQ0Q7UUFDRSxNQUFNLEVBQUUsRUFBRTtRQUNWLElBQUksRUFBRSx5QkFBeUI7UUFDL0IsSUFBSSxFQUFFLE9BQU87S0FDZDtJQUNEO1FBQ0UsTUFBTSxFQUFFO1lBQ047Z0JBQ0UsWUFBWSxFQUFFLFNBQVM7Z0JBQ3ZCLElBQUksRUFBRSxTQUFTO2dCQUNmLElBQUksRUFBRSxTQUFTO2FBQ2hCO1NBQ0Y7UUFDRCxJQUFJLEVBQUUsa0JBQWtCO1FBQ3hCLElBQUksRUFBRSxPQUFPO0tBQ2Q7SUFDRDtRQUNFLE1BQU0sRUFBRTtZQUNOO2dCQUNFLFlBQVksRUFBRSxRQUFRO2dCQUN0QixJQUFJLEVBQUUsUUFBUTtnQkFDZCxJQUFJLEVBQUUsUUFBUTthQUNmO1NBQ0Y7UUFDRCxJQUFJLEVBQUUsa0JBQWtCO1FBQ3hCLElBQUksRUFBRSxPQUFPO0tBQ2Q7SUFDRDtRQUNFLFNBQVMsRUFBRSxLQUFLO1FBQ2hCLE1BQU0sRUFBRTtZQUNOO2dCQUNFLE9BQU8sRUFBRSxLQUFLO2dCQUNkLFlBQVksRUFBRSxTQUFTO2dCQUN2QixJQUFJLEVBQUUsU0FBUztnQkFDZixJQUFJLEVBQUUsU0FBUzthQUNoQjtT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