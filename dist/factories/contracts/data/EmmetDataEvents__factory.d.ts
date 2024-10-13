import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type { EmmetDataEvents, EmmetDataEventsInterface } from "../../../contracts/data/EmmetDataEvents";
type EmmetDataEventsConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class EmmetDataEvents__factory extends ContractFactory {
    constructor(...args: EmmetDataEventsConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<EmmetDataEvents & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): EmmetDataEvents__factory;
    static readonly bytecode = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212200c9d3c119a39ede2ea6149084153fab28dd16436402e8e9c494b80b220780f6864736f6c63430008180033";
    static readonly abi: readonly [{
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint128";
            readonly name: "chainId";
            readonly type: "uint128";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "bridge";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "currency";
            readonly type: "string";
        }];
        readonly name: "ChainUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint128";
            readonly name: "chainId";
            readonly type: "uint128";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "gasPrice";
            readonly type: "uint256";
        }];
        readonly name: "GasPriceUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint128";
            readonly name: "otherChainId";
            readonly type: "uint128";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "fromToken";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "toToken";
            readonly type: "string";
        }];
        readonly name: "TokenStrategyUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "priceFeed";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "symbol";
            readonly type: "string";
        }];
        readonly name: "TokenUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint128";
            readonly name: "chainId";
            readonly type: "uint128";
        }, {
            readonly indexed: false;
            readonly internalType: "enum BridgeTypes.Step";
            readonly name: "step";
            readonly type: "uint8";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "consumesGas";
            readonly type: "uint256";
        }];
        readonly name: "UsedGasUpdated";
        readonly type: "event";
    }];
    static createInterface(): EmmetDataEventsInterface;
    static connect(address: string, runner?: ContractRunner | null): EmmetDataEvents;
}
export {};
