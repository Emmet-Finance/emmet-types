"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressStorageHelper__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
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
        name: "AddressStorageHelperError",
        type: "error",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "oldAddress",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "newAddress",
                type: "address",
            },
            {
                indexed: false,
                internalType: "string",
                name: "name",
                type: "string",
            },
        ],
        name: "AddressUpdate",
        type: "event",
    },
];
const _bytecode = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220f7660b7cdf0aa4e76f91c409907bb4d9ec02a8cfe2639718c032732bab9ca73964736f6c63430008180033";
const isSuperArgs = (xs) => xs.length > 1;
class AddressStorageHelper__factory extends ethers_1.ContractFactory {
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
exports.AddressStorageHelper__factory = AddressStorageHelper__factory;
AddressStorageHelper__factory.bytecode = _bytecode;
AddressStorageHelper__factory.abi = _abi;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRkcmVzc1N0b3JhZ2VIZWxwZXJfX2ZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZmFjdG9yaWVzL2NvbnRyYWN0cy9saWJzL0FkZHJlc3NTdG9yYWdlSGVscGVyX19mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLCtDQUErQztBQUMvQyxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG1DQUtnQjtBQVFoQixNQUFNLElBQUksR0FBRztJQUNYO1FBQ0UsTUFBTSxFQUFFO1lBQ047Z0JBQ0UsWUFBWSxFQUFFLFFBQVE7Z0JBQ3RCLElBQUksRUFBRSxTQUFTO2dCQUNmLElBQUksRUFBRSxRQUFRO2FBQ2Y7U0FDRjtRQUNELElBQUksRUFBRSwyQkFBMkI7UUFDakMsSUFBSSxFQUFFLE9BQU87S0FDZDtJQUNEO1FBQ0UsU0FBUyxFQUFFLEtBQUs7UUFDaEIsTUFBTSxFQUFFO1lBQ047Z0JBQ0UsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsWUFBWSxFQUFFLFNBQVM7Z0JBQ3ZCLElBQUksRUFBRSxZQUFZO2dCQUNsQixJQUFJLEVBQUUsU0FBUzthQUNoQjtZQUNEO2dCQUNFLE9BQU8sRUFBRSxLQUFLO2dCQUNkLFlBQVksRUFBRSxTQUFTO2dCQUN2QixJQUFJLEVBQUUsWUFBWTtnQkFDbEIsSUFBSSxFQUFFLFNBQVM7YUFDaEI7WUFDRDtnQkFDRSxPQUFPLEVBQUUsS0FBSztnQkFDZCxZQUFZLEVBQUUsUUFBUTtnQkFDdEIsSUFBSSxFQUFFLE1BQU07Z0JBQ1osSUFBSSxFQUFFLFFBQVE7YUFDZjtTQUNGO1FBQ0QsSUFBSSxFQUFFLGVBQWU7UUFDckIsSUFBSSxFQUFFLE9BQU87S0FDZDtDQUNPLENBQUM7QUFFWCxNQUFNLFNBQVMsR0FDYiw4UkFBOFIsQ0FBQztBQU1qUyxNQUFNLFdBQVcsR0FBRyxDQUNsQixFQUF5QyxFQUNZLEVBQUUsQ0FBQyxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztBQUV4RSxNQUFhLDZCQUE4QixTQUFRLHdCQUFlO0lBQ2hFLFlBQVksR0FBRyxJQUEyQztRQUN4RCxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO1lBQ3RCLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQ2pCLENBQUM7YUFBTSxDQUFDO1lBQ04sS0FBSyxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEMsQ0FBQztJQUNILENBQUM7SUFFUSxvQkFBb0IsQ0FDM0IsU0FBbUQ7UUFFbkQsT0FBTyxLQUFLLENBQUMsb0JBQW9CLENBQUMsU0FBUyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFDUSxNQUFNLENBQUMsU0FBbUQ7UUFDakUsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsSUFBSSxFQUFFLENBSWxDLENBQUM7SUFDSixDQUFDO0lBQ1EsT0FBTyxDQUNkLE1BQTZCO1FBRTdCLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQWtDLENBQUM7SUFDaEUsQ0FBQztJQUlELE1BQU0sQ0FBQyxlQUFlO1FBQ3BCLE9BQU8sSUFBSSxrQkFBUyxDQUFDLElBQUksQ0FBa0MsQ0FBQztJQUM5RCxDQUFDO0lBQ0QsTUFBTSxDQUFDLE9BQU8sQ0FDWixPQUFlLEVBQ2YsTUFBOEI7UUFFOUIsT0FBTyxJQUFJLGlCQUFRLENBQ2pCLE9BQU8sRUFDUCxJQUFJLEVBQ0osTUFBTSxDQUM0QixDQUFDO0lBQ3ZDLENBQUM7O0FBekNILHNFQTBDQztBQWZpQixzQ0FBUSxHQUFHLFNBQVMsQ0FBQztBQUNyQixpQ0FBRyxHQUFHLElBQUksQ0FBQyJ9