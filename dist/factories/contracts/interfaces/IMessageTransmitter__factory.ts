/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IMessageTransmitter,
  IMessageTransmitterInterface,
} from "../../../contracts/interfaces/IMessageTransmitter";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes",
        name: "message",
        type: "bytes",
      },
    ],
    name: "MessageSent",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "message",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "receiveMessage",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IMessageTransmitter__factory {
  static readonly abi = _abi;
  static createInterface(): IMessageTransmitterInterface {
    return new Interface(_abi) as IMessageTransmitterInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IMessageTransmitter {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as IMessageTransmitter;
  }
}
