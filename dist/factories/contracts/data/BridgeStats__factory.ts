/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  BridgeStats,
  BridgeStatsInterface,
} from "../../../contracts/data/BridgeStats";

const _abi = [
  {
    inputs: [],
    name: "getStats",
    outputs: [
      {
        internalType: "uint256",
        name: "totalAmountUSD",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalFeesUSD",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "uniqueAddresses",
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
        name: "user",
        type: "string",
      },
    ],
    name: "getUserStats",
    outputs: [
      {
        internalType: "uint128",
        name: "received",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "sent",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610328806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063114374e71461003b578063c59d48471461007c575b600080fd5b61004e6100493660046101f4565b6100a0565b604080516fffffffffffffffffffffffffffffffff9384168152929091166020830152015b60405180910390f35b60015460025460005460408051938452602084019290925290820152606001610073565b6000806100ad81846100b7565b9094909350915050565b600080600084600301846040516100ce91906102c3565b90815260405190819003602001902080549091506fffffffffffffffffffffffffffffffff161515806101275750805470010000000000000000000000000000000090046fffffffffffffffffffffffffffffffff1615155b610191576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f4e6f2075736572207265636f72647320666f756e640000000000000000000000604482015260640160405180910390fd5b546fffffffffffffffffffffffffffffffff8082169670010000000000000000000000000000000090920416945092505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60006020828403121561020657600080fd5b813567ffffffffffffffff8082111561021e57600080fd5b818401915084601f83011261023257600080fd5b813581811115610244576102446101c5565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190838211818310171561028a5761028a6101c5565b816040528281528760208487010111156102a357600080fd5b826020860160208301376000928101602001929092525095945050505050565b6000825160005b818110156102e457602081860181015185830152016102ca565b50600092019182525091905056fea2646970667358221220741dec1613302c814cae0948042a2468b34b36a12e8679ceb89460e11f64cb4f64736f6c63430008180033";

type BridgeStatsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BridgeStatsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BridgeStats__factory extends ContractFactory {
  constructor(...args: BridgeStatsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      BridgeStats & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): BridgeStats__factory {
    return super.connect(runner) as BridgeStats__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BridgeStatsInterface {
    return new Interface(_abi) as BridgeStatsInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): BridgeStats {
    return new Contract(address, _abi, runner) as unknown as BridgeStats;
  }
}
