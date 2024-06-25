"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SafeERC20__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "currentAllowance",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "requestedDecrease",
                type: "uint256",
            },
        ],
        name: "SafeERC20FailedDecreaseAllowance",
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
];
const _bytecode = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220f3361f086782ae445ceae1f01141ae9b2a0287bcebf9c11586e4384fcf79897264736f6c63430008180033";
const isSuperArgs = (xs) => xs.length > 1;
class SafeERC20__factory extends ethers_1.ContractFactory {
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
exports.SafeERC20__factory = SafeERC20__factory;
SafeERC20__factory.bytecode = _bytecode;
SafeERC20__factory.abi = _abi;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2FmZUVSQzIwX19mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2ZhY3Rvcmllcy9Ab3BlbnplcHBlbGluL2NvbnRyYWN0cy90b2tlbi9FUkMyMC91dGlscy9TYWZlRVJDMjBfX2ZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsK0NBQStDO0FBQy9DLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsbUNBS2dCO0FBUWhCLE1BQU0sSUFBSSxHQUFHO0lBQ1g7UUFDRSxNQUFNLEVBQUU7WUFDTjtnQkFDRSxZQUFZLEVBQUUsU0FBUztnQkFDdkIsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsSUFBSSxFQUFFLFNBQVM7YUFDaEI7WUFDRDtnQkFDRSxZQUFZLEVBQUUsU0FBUztnQkFDdkIsSUFBSSxFQUFFLGtCQUFrQjtnQkFDeEIsSUFBSSxFQUFFLFNBQVM7YUFDaEI7WUFDRDtnQkFDRSxZQUFZLEVBQUUsU0FBUztnQkFDdkIsSUFBSSxFQUFFLG1CQUFtQjtnQkFDekIsSUFBSSxFQUFFLFNBQVM7YUFDaEI7U0FDRjtRQUNELElBQUksRUFBRSxrQ0FBa0M7UUFDeEMsSUFBSSxFQUFFLE9BQU87S0FDZDtJQUNEO1FBQ0UsTUFBTSxFQUFFO1lBQ047Z0JBQ0UsWUFBWSxFQUFFLFNBQVM7Z0JBQ3ZCLElBQUksRUFBRSxPQUFPO2dCQUNiLElBQUksRUFBRSxTQUFTO2FBQ2hCO1NBQ0Y7UUFDRCxJQUFJLEVBQUUsMEJBQTBCO1FBQ2hDLElBQUksRUFBRSxPQUFPO0tBQ2Q7Q0FDTyxDQUFDO0FBRVgsTUFBTSxTQUFTLEdBQ2IsOFJBQThSLENBQUM7QUFNalMsTUFBTSxXQUFXLEdBQUcsQ0FDbEIsRUFBOEIsRUFDdUIsRUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBRXhFLE1BQWEsa0JBQW1CLFNBQVEsd0JBQWU7SUFDckQsWUFBWSxHQUFHLElBQWdDO1FBQzdDLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7WUFDdEIsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDakIsQ0FBQzthQUFNLENBQUM7WUFDTixLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsQyxDQUFDO0lBQ0gsQ0FBQztJQUVRLG9CQUFvQixDQUMzQixTQUFtRDtRQUVuRCxPQUFPLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLElBQUksRUFBRSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUNRLE1BQU0sQ0FBQyxTQUFtRDtRQUNqRSxPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxJQUFJLEVBQUUsQ0FJbEMsQ0FBQztJQUNKLENBQUM7SUFDUSxPQUFPLENBQUMsTUFBNkI7UUFDNUMsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBdUIsQ0FBQztJQUNyRCxDQUFDO0lBSUQsTUFBTSxDQUFDLGVBQWU7UUFDcEIsT0FBTyxJQUFJLGtCQUFTLENBQUMsSUFBSSxDQUF1QixDQUFDO0lBQ25ELENBQUM7SUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQWUsRUFBRSxNQUE4QjtRQUM1RCxPQUFPLElBQUksaUJBQVEsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBeUIsQ0FBQztJQUNyRSxDQUFDOztBQWhDSCxnREFpQ0M7QUFSaUIsMkJBQVEsR0FBRyxTQUFTLENBQUM7QUFDckIsc0JBQUcsR0FBRyxJQUFJLENBQUMifQ==