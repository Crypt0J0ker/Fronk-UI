import React from "react";
import type { AppProps } from "next/app";
import "@/styles/globals.css";
import { WagmiConfig, createConfig, configureChains, mainnet } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { InjectedConnector } from "wagmi/connectors/injected";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import TokenHandler from "@/components/TokenHandler";
import "../i18n/i18n";
import { AuthProvider } from "@/hoc/AuthProvider";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet],
  [publicProvider()]
);

const projectId = process.env.PROJECT_ID_WALLET;

const config = createConfig({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    new InjectedConnector({
      chains,
      options: {
        name: "Trust Wallet",
        shimDisconnect: true,
      },
    }),
    new WalletConnectConnector({
      chains,
      options: {
        projectId: projectId as string,
      },
    }),
  ],
  publicClient,
  webSocketPublicClient,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <WagmiConfig config={config}>
        <TokenHandler />
        <Component {...pageProps} />
      </WagmiConfig>
    </AuthProvider>
  );
}
