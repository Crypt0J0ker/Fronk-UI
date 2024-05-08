
export const wallets = [
  {
    id: 0,
    title: "MetaMask",
    description: "Desktop / DApp in app",
    logo: "/images/wallets/wallet_metamask.svg",
  },
  {
    id: 1,
    title: "Trust Wallet",
    description: "DApp in app",
    logo: "/images/wallets/wallet_trust.svg",
  },
  {
    id: 2,
    title: "WalletConnect",
    description: "Any compatible app",
    logo: "/images/wallets/wallet_connect.svg",
  },
];

export const networks = {
  polygon: {
    name: "Polygon Mainnet",
    chain: "Polygon",
    icon: "polygon",
    rpc: [
      "https://polygon-rpc.com/",
      "https://rpc-mainnet.matic.network",
      "https://matic-mainnet.chainstacklabs.com",
      "https://rpc-mainnet.maticvigil.com",
      "https://rpc-mainnet.matic.quiknode.pro",
      "https://matic-mainnet-full-rpc.bwarelabs.com",
      "https://polygon-bor-rpc.publicnode.com",
      "wss://polygon-bor-rpc.publicnode.com",
      "https://polygon.gateway.tenderly.co",
      "wss://polygon.gateway.tenderly.co",
      "https://polygon.drpc.org",
      "wss://polygon.drpc.org",
    ],
    faucets: [],
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18,
    },
    infoURL: "https://polygon.technology/",
    shortName: "matic",
    chainId: 137,
    networkId: 137,
    slip44: 966,
    explorers: [
      {
        name: "polygonscan",
        url: "https://polygonscan.com",
        standard: "EIP3091",
      },
      {
        name: "dexguru",
        url: "https://polygon.dex.guru",
        icon: "dexguru",
        standard: "EIP3091",
      },
    ],
  },
  arbitrum_one: {
    name: "Arbitrum One",
    chainId: 42161,
    shortName: "arb1",
    chain: "ETH",
    networkId: 42161,
    nativeCurrency: {
      name: "Ether",
      symbol: "ETH",
      decimals: 18,
    },
    rpc: [
      "https://arbitrum-mainnet.infura.io/v3/${INFURA_API_KEY}",
      "https://arb-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}",
      "https://arb1.arbitrum.io/rpc",
      "https://arbitrum-one.publicnode.com",
      "wss://arbitrum-one.publicnode.com",
    ],
    faucets: [],
    explorers: [
      {
        name: "Arbiscan",
        url: "https://arbiscan.io",
        standard: "EIP3091",
      },
      {
        name: "Arbitrum Explorer",
        url: "https://explorer.arbitrum.io",
        standard: "EIP3091",
      },
      {
        name: "dexguru",
        url: "https://arbitrum.dex.guru",
        icon: "dexguru",
        standard: "EIP3091",
      },
    ],
    infoURL: "https://arbitrum.io",
    parent: {
      type: "L2",
      chain: "eip155-1",
      bridges: [
        {
          url: "https://bridge.arbitrum.io",
        },
      ],
    },
  },
  arbitrum_nova: {
    name: "Arbitrum Nova",
    chainId: 42170,
    shortName: "arb-nova",
    chain: "ETH",
    networkId: 42170,
    nativeCurrency: {
      name: "Ether",
      symbol: "ETH",
      decimals: 18,
    },
    rpc: [
      "https://nova.arbitrum.io/rpc",
      "https://arbitrum-nova.publicnode.com",
      "wss://arbitrum-nova.publicnode.com",
    ],
    faucets: [],
    explorers: [
      {
        name: "Arbitrum Nova Chain Explorer",
        url: "https://nova-explorer.arbitrum.io",
        icon: "blockscout",
        standard: "EIP3091",
      },
      {
        name: "dexguru",
        url: "https://nova.dex.guru",
        icon: "dexguru",
        standard: "EIP3091",
      },
    ],
    infoURL: "https://arbitrum.io",
    parent: {
      type: "L2",
      chain: "eip155-1",
      bridges: [
        {
          url: "https://bridge.arbitrum.io",
        },
      ],
    },
  },
  blast: {
    name: "Blast Mainnet",
    chain: "ETH",
    icon: "blastIcon",
    rpc: ["https://rpc.blastblockchain.com"],
    faucets: [],
    nativeCurrency: {
      name: "Ether",
      symbol: "ETH",
      decimals: 18,
    },
    infoURL: "https://docs.blastblockchain.com",
    shortName: "blast",
    chainId: 238,
    networkId: 238,
    explorers: [
      {
        name: "Blast Mainnet",
        url: "https://scan.blastblockchain.com",
        standard: "EIP3091",
      },
    ],
  },
  base: {
    name: "Base",
    chain: "ETH",
    rpc: [
      "https://mainnet.base.org/",
      "https://developer-access-mainnet.base.org/",
      "https://base.gateway.tenderly.co",
      "wss://base.gateway.tenderly.co",
      "https://base-rpc.publicnode.com",
      "wss://base-rpc.publicnode.com",
    ],
    faucets: [],
    nativeCurrency: {
      name: "Ether",
      symbol: "ETH",
      decimals: 18,
    },
    infoURL: "https://base.org",
    shortName: "base",
    chainId: 8453,
    networkId: 8453,
    icon: "base",
    explorers: [
      {
        name: "basescan",
        url: "https://basescan.org",
        standard: "none",
      },
      {
        name: "basescout",
        url: "https://base.blockscout.com",
        icon: "blockscout",
        standard: "EIP3091",
      },
      {
        name: "dexguru",
        url: "https://base.dex.guru",
        icon: "dexguru",
        standard: "EIP3091",
      },
    ],
    status: "active",
  },
  linea: {
    name: "Linea",
    title: "Linea Mainnet",
    chain: "ETH",
    rpc: [
      "https://rpc.linea.build",
      "wss://rpc.linea.build",
      "https://linea-mainnet.infura.io/v3/${INFURA_API_KEY}",
      "wss://linea-mainnet.infura.io/ws/v3/${INFURA_API_KEY}",
    ],
    faucets: [],
    nativeCurrency: {
      name: "Linea Ether",
      symbol: "ETH",
      decimals: 18,
    },
    infoURL: "https://linea.build",
    shortName: "linea",
    chainId: 59144,
    networkId: 59144,
    icon: "linea",
    parent: {
      type: "L2",
      chain: "eip155-1",
      bridges: [
        {
          url: "https://bridge.linea.build",
        },
      ],
    },
    explorers: [
      {
        name: "Etherscan",
        url: "https://lineascan.build",
        standard: "EIP3091",
        icon: "linea",
      },
      {
        name: "Blockscout",
        url: "https://explorer.linea.build",
        standard: "EIP3091",
        icon: "linea",
      },
      {
        name: "L2scan",
        url: "https://linea.l2scan.co",
        standard: "EIP3091",
        icon: "linea",
      },
    ],
    status: "active",
  },
  scroll: {
    name: "Scroll",
    chain: "ETH",
    status: "active",
    rpc: [
      "https://rpc.scroll.io",
      "https://rpc.ankr.com/scroll",
      "https://scroll-mainnet.chainstacklabs.com",
    ],
    faucets: [],
    nativeCurrency: {
      name: "Ether",
      symbol: "ETH",
      decimals: 18,
    },
    infoURL: "https://scroll.io",
    shortName: "scr",
    chainId: 534352,
    networkId: 534352,
    explorers: [
      {
        name: "Scrollscan",
        url: "https://scrollscan.com",
        standard: "EIP3091",
      },
    ],
    parent: {
      type: "L2",
      chain: "eip155-1",
      bridges: [
        {
          url: "https://scroll.io/bridge",
        },
      ],
    },
  },
  zksync: {
    name: "zkSync Mainnet",
    chain: "ETH",
    rpc: [
      "https://mainnet.era.zksync.io",
      "https://zksync.drpc.org",
      "wss://zksync.drpc.org",
    ],
    faucets: [],
    nativeCurrency: {
      name: "Ether",
      symbol: "ETH",
      decimals: 18,
    },
    infoURL: "https://zksync.io/",
    shortName: "zksync",
    chainId: 324,
    networkId: 324,
    icon: "zksync-era",
    explorers: [
      {
        name: "zkSync Era Block Explorer",
        url: "https://explorer.zksync.io",
        icon: "zksync-era",
        standard: "EIP3091",
      },
    ],
    parent: {
      type: "L2",
      chain: "eip155-1",
      bridges: [
        {
          url: "https://bridge.zksync.io/",
        },
      ],
    },
  },
};
