import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { FronkXP, FronkXPInterface } from "../FronkXP";
export declare class FronkXP__factory {
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        name?: never;
        anonymous?: never;
        outputs?: never;
    } | {
        inputs: never[];
        name: string;
        type: string;
        stateMutability?: never;
        anonymous?: never;
        outputs?: never;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: never;
        outputs?: never;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: never;
    })[];
    static createInterface(): FronkXPInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): FronkXP;
}
