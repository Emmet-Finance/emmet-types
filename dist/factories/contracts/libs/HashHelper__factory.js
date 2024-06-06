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
            {
                internalType: "string",
                name: "fromChainHash",
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
const _bytecode = "0x61031061003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100355760003560e01c806366492e571461003a575b600080fd5b61004d610048366004610164565b61005f565b60405190815260200160405180910390f35b60008888888888888888604051602001610080989796959493929190610276565b60405160208183030381529060405280519060200120905098975050505050505050565b803567ffffffffffffffff811681146100bc57600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126100e857600080fd5b813567ffffffffffffffff80821115610103576101036100c1565b604051601f8301601f19908116603f0116810190828211818310171561012b5761012b6100c1565b8160405283815286602085880101111561014457600080fd5b836020870160208301376000602085830101528094505050505092915050565b600080600080600080600080610100898b03121561018157600080fd5b61018a896100a4565b975061019860208a016100a4565b96506040890135955060608901359450608089013567ffffffffffffffff808211156101c357600080fd5b6101cf8c838d016100d7565b955060a08b01359150808211156101e557600080fd5b6101f18c838d016100d7565b945060c08b013591508082111561020757600080fd5b6102138c838d016100d7565b935060e08b013591508082111561022957600080fd5b506102368b828c016100d7565b9150509295985092959890939650565b6000815160005b81811015610267576020818501810151868301520161024d565b50600093019283525090919050565b600067ffffffffffffffff60c01b808b60c01b168352808a60c01b166008840152508760108301528660308301526102cc6102c66102c06102ba605086018a610246565b88610246565b86610246565b84610246565b9a995050505050505050505056fea26469706673582212206fb81fb8b87eb0fb19bca83bc28ed35ec36edd0857893f30b2546ea85b212a6964736f6c63430008180033";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGFzaEhlbHBlcl9fZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9mYWN0b3JpZXMvY29udHJhY3RzL2xpYnMvSGFzaEhlbHBlcl9fZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwrQ0FBK0M7QUFDL0Msb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixtQ0FLZ0I7QUFRaEIsTUFBTSxJQUFJLEdBQUc7SUFDWDtRQUNFLE1BQU0sRUFBRTtZQUNOO2dCQUNFLFlBQVksRUFBRSxRQUFRO2dCQUN0QixJQUFJLEVBQUUsYUFBYTtnQkFDbkIsSUFBSSxFQUFFLFFBQVE7YUFDZjtZQUNEO2dCQUNFLFlBQVksRUFBRSxRQUFRO2dCQUN0QixJQUFJLEVBQUUsV0FBVztnQkFDakIsSUFBSSxFQUFFLFFBQVE7YUFDZjtZQUNEO2dCQUNFLFlBQVksRUFBRSxTQUFTO2dCQUN2QixJQUFJLEVBQUUsUUFBUTtnQkFDZCxJQUFJLEVBQUUsU0FBUzthQUNoQjtZQUNEO2dCQUNFLFlBQVksRUFBRSxTQUFTO2dCQUN2QixJQUFJLEVBQUUsT0FBTztnQkFDYixJQUFJLEVBQUUsU0FBUzthQUNoQjtZQUNEO2dCQUNFLFlBQVksRUFBRSxRQUFRO2dCQUN0QixJQUFJLEVBQUUsV0FBVztnQkFDakIsSUFBSSxFQUFFLFFBQVE7YUFDZjtZQUNEO2dCQUNFLFlBQVksRUFBRSxRQUFRO2dCQUN0QixJQUFJLEVBQUUsU0FBUztnQkFDZixJQUFJLEVBQUUsUUFBUTthQUNmO1lBQ0Q7Z0JBQ0UsWUFBWSxFQUFFLFFBQVE7Z0JBQ3RCLElBQUksRUFBRSxXQUFXO2dCQUNqQixJQUFJLEVBQUUsUUFBUTthQUNmO1lBQ0Q7Z0JBQ0UsWUFBWSxFQUFFLFFBQVE7Z0JBQ3RCLElBQUksRUFBRSxlQUFlO2dCQUNyQixJQUFJLEVBQUUsUUFBUTthQUNmO1NBQ0Y7UUFDRCxJQUFJLEVBQUUseUJBQXlCO1FBQy9CLE9BQU8sRUFBRTtZQUNQO2dCQUNFLFlBQVksRUFBRSxTQUFTO2dCQUN2QixJQUFJLEVBQUUsUUFBUTtnQkFDZCxJQUFJLEVBQUUsU0FBUzthQUNoQjtTQUNGO1FBQ0QsZUFBZSxFQUFFLE1BQU07UUFDdkIsSUFBSSxFQUFFLFVBQVU7S0FDakI7Q0FDTyxDQUFDO0FBRVgsTUFBTSxTQUFTLEdBQ2Isd3BEQUF3cEQsQ0FBQztBQU0zcEQsTUFBTSxXQUFXLEdBQUcsQ0FDbEIsRUFBK0IsRUFDc0IsRUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBRXhFLE1BQWEsbUJBQW9CLFNBQVEsd0JBQWU7SUFDdEQsWUFBWSxHQUFHLElBQWlDO1FBQzlDLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7WUFDdEIsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDakIsQ0FBQzthQUFNLENBQUM7WUFDTixLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsQyxDQUFDO0lBQ0gsQ0FBQztJQUVRLG9CQUFvQixDQUMzQixTQUFtRDtRQUVuRCxPQUFPLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLElBQUksRUFBRSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUNRLE1BQU0sQ0FBQyxTQUFtRDtRQUNqRSxPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxJQUFJLEVBQUUsQ0FJbEMsQ0FBQztJQUNKLENBQUM7SUFDUSxPQUFPLENBQUMsTUFBNkI7UUFDNUMsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBd0IsQ0FBQztJQUN0RCxDQUFDO0lBSUQsTUFBTSxDQUFDLGVBQWU7UUFDcEIsT0FBTyxJQUFJLGtCQUFTLENBQUMsSUFBSSxDQUF3QixDQUFDO0lBQ3BELENBQUM7SUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQWUsRUFBRSxNQUE4QjtRQUM1RCxPQUFPLElBQUksaUJBQVEsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBMEIsQ0FBQztJQUN0RSxDQUFDOztBQWhDSCxrREFpQ0M7QUFSaUIsNEJBQVEsR0FBRyxTQUFTLENBQUM7QUFDckIsdUJBQUcsR0FBRyxJQUFJLENBQUMifQ==