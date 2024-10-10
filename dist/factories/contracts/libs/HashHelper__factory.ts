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
  HashHelper,
  HashHelperInterface,
} from "../../../contracts/libs/HashHelper";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint128",
        name: "fromChainId",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "toChainid",
        type: "uint128",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
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
] as const;

const _bytecode =
  "0x6102a061003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100355760003560e01c80635d5eb90f1461003a575b600080fd5b61004d6100483660046100f2565b61005f565b60405190815260200160405180910390f35b600086868686868660405160200161007c969594939291906101e0565b6040516020818303038152906040528051906020012090509695505050505050565b80356fffffffffffffffffffffffffffffffff811681146100be57600080fd5b919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60008060008060008060c0878903121561010b57600080fd5b6101148761009e565b95506101226020880161009e565b945060408701359350606087013592506080870135915060a087013567ffffffffffffffff8082111561015457600080fd5b818901915089601f83011261016857600080fd5b81358181111561017a5761017a6100c3565b604051601f8201601f19908116603f011681019083821181831017156101a2576101a26100c3565b816040528281528c60208487010111156101bb57600080fd5b8260208601602083013760006020848301015280955050505050509295509295509295565b60006fffffffffffffffffffffffffffffffff80891683526020818916602085015287604085015286606085015285608085015260c060a0850152845191508160c085015260005b828110156102445785810182015185820160e001528101610228565b5050600060e0828501015260e0601f19601f83011684010191505097965050505050505056fea2646970667358221220f9bcde08fbc189100b6180ed2830e95e97b0adc402c60c0e9d949c2882683e4164736f6c63430008180033";

type HashHelperConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: HashHelperConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class HashHelper__factory extends ContractFactory {
  constructor(...args: HashHelperConstructorParams) {
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
      HashHelper & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): HashHelper__factory {
    return super.connect(runner) as HashHelper__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): HashHelperInterface {
    return new Interface(_abi) as HashHelperInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): HashHelper {
    return new Contract(address, _abi, runner) as unknown as HashHelper;
  }
}
