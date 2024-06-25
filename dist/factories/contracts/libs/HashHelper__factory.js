"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HashHelper__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "uint64",
                name: "fromChainId",
                type: "uint64",
            },
            {
                internalType: "uint64",
                name: "toChainid",
                type: "uint64",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "nonce",
                type: "uint256",
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
                name: "recipient",
                type: "string",
            },
        ],
        name: "generateTransactionHash",
        outputs: [
            {
                internalType: "bytes32",
                name: "txHash",
                type: "bytes32",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
];
const _bytecode = "0x61032a61003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100355760003560e01c8063cc39c3ec1461003a575b600080fd5b61004d610048366004610198565b61005f565b60405190815260200160405180910390f35b60008787878787878760405160200161007e9796959493929190610285565b604051602081830303815290604052805190602001209050979650505050505050565b803567ffffffffffffffff811681146100b957600080fd5b919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600082601f8301126100fe57600080fd5b813567ffffffffffffffff80821115610119576101196100be565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190828211818310171561015f5761015f6100be565b8160405283815286602085880101111561017857600080fd5b836020870160208301376000602085830101528094505050505092915050565b600080600080600080600060e0888a0312156101b357600080fd5b6101bc886100a1565b96506101ca602089016100a1565b95506040880135945060608801359350608088013567ffffffffffffffff808211156101f557600080fd5b6102018b838c016100ed565b945060a08a013591508082111561021757600080fd5b6102238b838c016100ed565b935060c08a013591508082111561023957600080fd5b506102468a828b016100ed565b91505092959891949750929550565b6000815160005b81811015610276576020818501810151868301520161025c565b50600093019283525090919050565b60007fffffffffffffffff000000000000000000000000000000000000000000000000808a60c01b168352808960c01b166008840152508660108301528560308301526102e76102e16102db6050850188610255565b86610255565b84610255565b999850505050505050505056fea26469706673582212206ece39038091d2359238e1f2356f44df0934dd34f578ff600989eb46a55ad2d964736f6c63430008180033";
const isSuperArgs = (xs) => xs.length > 1;
class HashHelper__factory extends ethers_1.ContractFactory {
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
exports.HashHelper__factory = HashHelper__factory;
HashHelper__factory.bytecode = _bytecode;
HashHelper__factory.abi = _abi;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGFzaEhlbHBlcl9fZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9mYWN0b3JpZXMvY29udHJhY3RzL2xpYnMvSGFzaEhlbHBlcl9fZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwrQ0FBK0M7QUFDL0Msb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixtQ0FLZ0I7QUFRaEIsTUFBTSxJQUFJLEdBQUc7SUFDWDtRQUNFLE1BQU0sRUFBRTtZQUNOO2dCQUNFLFlBQVksRUFBRSxRQUFRO2dCQUN0QixJQUFJLEVBQUUsYUFBYTtnQkFDbkIsSUFBSSxFQUFFLFFBQVE7YUFDZjtZQUNEO2dCQUNFLFlBQVksRUFBRSxRQUFRO2dCQUN0QixJQUFJLEVBQUUsV0FBVztnQkFDakIsSUFBSSxFQUFFLFFBQVE7YUFDZjtZQUNEO2dCQUNFLFlBQVksRUFBRSxTQUFTO2dCQUN2QixJQUFJLEVBQUUsUUFBUTtnQkFDZCxJQUFJLEVBQUUsU0FBUzthQUNoQjtZQUNEO2dCQUNFLFlBQVksRUFBRSxTQUFTO2dCQUN2QixJQUFJLEVBQUUsT0FBTztnQkFDYixJQUFJLEVBQUUsU0FBUzthQUNoQjtZQUNEO2dCQUNFLFlBQVksRUFBRSxRQUFRO2dCQUN0QixJQUFJLEVBQUUsV0FBVztnQkFDakIsSUFBSSxFQUFFLFFBQVE7YUFDZjtZQUNEO2dCQUNFLFlBQVksRUFBRSxRQUFRO2dCQUN0QixJQUFJLEVBQUUsU0FBUztnQkFDZixJQUFJLEVBQUUsUUFBUTthQUNmO1lBQ0Q7Z0JBQ0UsWUFBWSxFQUFFLFFBQVE7Z0JBQ3RCLElBQUksRUFBRSxXQUFXO2dCQUNqQixJQUFJLEVBQUUsUUFBUTthQUNmO1NBQ0Y7UUFDRCxJQUFJLEVBQUUseUJBQXlCO1FBQy9CLE9BQU8sRUFBRTtZQUNQO2dCQUNFLFlBQVksRUFBRSxTQUFTO2dCQUN2QixJQUFJLEVBQUUsUUFBUTtnQkFDZCxJQUFJLEVBQUUsU0FBUzthQUNoQjtTQUNGO1FBQ0QsZUFBZSxFQUFFLE1BQU07UUFDdkIsSUFBSSxFQUFFLFVBQVU7S0FDakI7Q0FDTyxDQUFDO0FBRVgsTUFBTSxTQUFTLEdBQ2IsNHNEQUE0c0QsQ0FBQztBQU0vc0QsTUFBTSxXQUFXLEdBQUcsQ0FDbEIsRUFBK0IsRUFDc0IsRUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBRXhFLE1BQWEsbUJBQW9CLFNBQVEsd0JBQWU7SUFDdEQsWUFBWSxHQUFHLElBQWlDO1FBQzlDLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7WUFDdEIsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDakIsQ0FBQzthQUFNLENBQUM7WUFDTixLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsQyxDQUFDO0lBQ0gsQ0FBQztJQUVRLG9CQUFvQixDQUMzQixTQUFtRDtRQUVuRCxPQUFPLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLElBQUksRUFBRSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUNRLE1BQU0sQ0FBQyxTQUFtRDtRQUNqRSxPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxJQUFJLEVBQUUsQ0FJbEMsQ0FBQztJQUNKLENBQUM7SUFDUSxPQUFPLENBQUMsTUFBNkI7UUFDNUMsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBd0IsQ0FBQztJQUN0RCxDQUFDO0lBSUQsTUFBTSxDQUFDLGVBQWU7UUFDcEIsT0FBTyxJQUFJLGtCQUFTLENBQUMsSUFBSSxDQUF3QixDQUFDO0lBQ3BELENBQUM7SUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQWUsRUFBRSxNQUE4QjtRQUM1RCxPQUFPLElBQUksaUJBQVEsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBMEIsQ0FBQztJQUN0RSxDQUFDOztBQWhDSCxrREFpQ0M7QUFSaUIsNEJBQVEsR0FBRyxTQUFTLENBQUM7QUFDckIsdUJBQUcsR0FBRyxJQUFJLENBQUMifQ==