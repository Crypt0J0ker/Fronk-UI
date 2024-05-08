import { Provider } from "@ethersproject/abstract-provider";
import { Signer } from "@ethersproject/abstract-signer";
import { ChainId } from "./constants";
import { Contracts } from "./types";
export declare class FronkWorldClient {
    private readonly signerOrProvider;
    private readonly multi;
    static fromUrl(url: string): FronkWorldClient;
    static fromChainId(chainId: ChainId): FronkWorldClient;
    constructor(signerOrProvider: Signer | Provider);
    get signer(): Signer;
    get provider(): Provider;
    protected getChainId(): Promise<ChainId>;
    protected getContracts(readonly?: boolean): Promise<Contracts>;
    getFronkXPBalance(userAddress?: string): Promise<string>;
    checkIfMintedToday(userAddress?: string): Promise<boolean>;
    getMintStreak(userAddress?: string): Promise<number>;
    getMintAmountForDay(day: number): Promise<string>;
    mint(): Promise<void>;
}
