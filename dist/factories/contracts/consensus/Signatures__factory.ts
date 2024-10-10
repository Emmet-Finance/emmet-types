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
  Signatures,
  SignaturesInterface,
} from "../../../contracts/consensus/Signatures";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "txHash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "returnToChainId",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isSuccess",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "string",
        name: "message",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes[]",
        name: "aggregatedSignature",
        type: "bytes[]",
      },
      {
        indexed: false,
        internalType: "string[]",
        name: "signers",
        type: "string[]",
      },
    ],
    name: "Feedback",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "txHash",
        type: "bytes32",
      },
    ],
    name: "PartialSignature",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "txHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint128",
        name: "toChainId",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "fromChainId",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "bytes[]",
        name: "aggregatedSignature",
        type: "bytes[]",
      },
      {
        indexed: false,
        internalType: "bytes[]",
        name: "signers",
        type: "bytes[]",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "callData",
        type: "bytes",
      },
    ],
    name: "Signed",
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
        name: "chainName",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "operation",
        type: "string",
      },
    ],
    name: "UpdatedNonEvmId",
    type: "event",
  },
] as const;

const _bytecode =
  "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220a96f4894ff3150010c11d76d7fbd6a87e414d6546696df8b4b89bef9547d3d6c64736f6c63430008180033";

type SignaturesConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SignaturesConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Signatures__factory extends ContractFactory {
  constructor(...args: SignaturesConstructorParams) {
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
      Signatures & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Signatures__factory {
    return super.connect(runner) as Signatures__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SignaturesInterface {
    return new Interface(_abi) as SignaturesInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Signatures {
    return new Contract(address, _abi, runner) as unknown as Signatures;
  }
}
