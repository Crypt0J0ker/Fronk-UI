const Config = {
  tokenExpireDays: 30,
  languages: ["EN", "CN", "HI", "RU"],
  // chains: {
  //   polygon: {
  //     chainId: `0x${Number(137).toString(16)}`,
  //     chainName: "Polygon",
  //     nativeCurrency: {
  //       name: "MATIC",
  //       symbol: "MATIC",
  //       decimals: 18,
  //     },
  //     rpcUrls: [
  //       "https://polygon-rpc.com/",
  //       "https://rpc-mainnet.matic.network",
  //       "https://matic-mainnet.chainstacklabs.com",
  //       "https://rpc-mainnet.maticvigil.com",
  //       "https://rpc-mainnet.matic.quiknode.pro",
  //       "https://matic-mainnet-full-rpc.bwarelabs.com",
  //       "https://polygon-bor-rpc.publicnode.com",
  //       "wss://polygon-bor-rpc.publicnode.com",
  //       "https://polygon.gateway.tenderly.co",
  //       "wss://polygon.gateway.tenderly.co",
  //       "https://polygon.drpc.org",
  //       "wss://polygon.drpc.org",
  //     ],
  //     blockExplorerUrls: ["https://polygonscan.com"],
  //     iconUrls: ["https://assets-global.website-files.com/637359c81e22b715cec245ad/66273ffe068c26509a5a7c7c_Frame%20514542.png"]
  //   },
  //   arbitrum_one: {
  //     chainId: `0x${Number(42161).toString(16)}`,
  //     chainName: "Arbitrum One",
  //     nativeCurrency: {
  //       name: "Ether",
  //       symbol: "ETH",
  //       decimals: 18,
  //     },
  //     rpcUrls: [
  //       "https://arbitrum-mainnet.infura.io/v3/${INFURA_API_KEY}",
  //       "https://arb-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}",
  //       "https://arb1.arbitrum.io/rpc",
  //       "https://arbitrum-one.publicnode.com",
  //       "wss://arbitrum-one.publicnode.com",
  //     ],
  //     blockExplorerUrls:["https://arbiscan.io"],
  //     iconUrls: ["https://arbiscan.io/favicon.ico"]
  //   },
  //   arbitrum_nova: {
  //     chainId: `0x${Number(42170).toString(16)}`,
  //     chainName: "Arbitrum Nova",
  //     nativeCurrency: {
  //       name: "Ether",
  //       symbol: "ETH",
  //       decimals: 18,
  //     },
  //     rpcUrls: [
  //       "https://nova.arbitrum.io/rpc",
  //       "https://arbitrum-nova.publicnode.com",
  //       "wss://arbitrum-nova.publicnode.com",
  //     ],
  //     blockExplorerUrls: ["https://nova-explorer.arbitrum.io"],
  //     iconUrls: ["https://nova.arbiscan.io/favicon.ico"]
  //   },
  //   blast: {
  //     chainId: `0x${Number(81457).toString(16)}`,
  //     chainName: "Blast",
  //     nativeCurrency: {
  //       name: "Ether",
  //       symbol: "ETH",
  //       decimals: 18,
  //     },
  //     rpcUrls: ["https://rpc.blastblockchain.com"],
  //     blockExplorerUrls: ["https://scan.blastblockchain.com"],
  //     iconUrls: ["https://blast.io/favicon.svg"]
  //   },
  //   base: {
  //     chainId: `0x${Number(8453).toString(16)}`,
  //     chainName: "Base",
  //     nativeCurrency: {
  //       name: "Ether",
  //       symbol: "ETH",
  //       decimals: 18,
  //     },
  //     rpcUrls: [
  //       "https://mainnet.base.org/",
  //       "https://developer-access-mainnet.base.org/",
  //       "https://base.gateway.tenderly.co",
  //       "wss://base.gateway.tenderly.co",
  //       "https://base-rpc.publicnode.com",
  //       "wss://base-rpc.publicnode.com",
  //     ],
  //     blockExplorerUrls: ["https://basescan.org"],
  //     iconUrls: ["https://www.base.org/document/favicon-32x32.png"]
  //   },
  //   linea: {
  //     chainId: `0x${Number(59144).toString(16)}`,
  //     chainName: "Linea",
  //     nativeCurrency: {
  //       name: "Linea Ether",
  //       symbol: "ETH",
  //       decimals: 18,
  //     },
  //     rpcUrls: [
  //       "https://rpc.linea.build",
  //       "wss://rpc.linea.build",
  //       "https://linea-mainnet.infura.io/v3/${INFURA_API_KEY}",
  //       "wss://linea-mainnet.infura.io/ws/v3/${INFURA_API_KEY}",
  //     ],
  //     blockExplorerUrls: ["https://lineascan.build"],
  //     iconUrls: ["https://linea.build/favicon-32x32.png"]
  //   },
  //   scroll: {
  //     chainId: `0x${Number(534352).toString(16)}`,
  //     chainName: "Scroll",
  //     nativeCurrency: {
  //       name: "Ether",
  //       symbol: "ETH",
  //       decimals: 18,
  //     },
  //     rpcUrls: [
  //       "https://rpc.scroll.io",
  //       "https://rpc.ankr.com/scroll",
  //       "https://scroll-mainnet.chainstacklabs.com",
  //     ],
  //     blockExplorerUrls: ["https://scrollscan.com"],
  //     iconUrls: ["https://scroll.io/favicon_new.ico"]
  //   },
  //   zksync: {
  //     chainId: `0x${Number(324).toString(16)}`,
  //     chainName: "zkSync",
  //     nativeCurrency: {
  //       name: "Ether",
  //       symbol: "ETH",
  //       decimals: 18,
  //     },
  //     rpcUrls: [
  //       "https://mainnet.era.zksync.io",
  //       "https://zksync.drpc.org",
  //       "wss://zksync.drpc.org",
  //     ],
  //     blockExplorerUrls: ["https://explorer.zksync.io"],
  //     iconUrls: ["https://zksync.io/favicon.ico"]
  //   }
  // }
  chains: {
    polygon: {
      chainId: `0x${Number(80002).toString(16)}`,
      chainName: "Polygon",
      nativeCurrency: {
        name: "MATIC",
        symbol: "MATIC",
        decimals: 18,
      },
      rpcUrls: [
        "https://rpc-amoy.polygon.technology"
      ],
      iconUrls: ["https://assets-global.website-files.com/637359c81e22b715cec245ad/66273ffe068c26509a5a7c7c_Frame%20514542.png"]
    },
    arbitrum_one: {
      chainId: `0x${Number(421614).toString(16)}`,
      chainName: "Arbitrum One",
      nativeCurrency: {
        name: "Ether",
        symbol: "ETH",
        decimals: 18,
      },
      rpcUrls: [
        "https://sepolia-rollup.arbitrum.io/rpc"
      ],
      iconUrls: ["https://arbiscan.io/favicon.ico"]
    },
    arbitrum_nova: {
      chainId: `0x${Number(421614).toString(16)}`,
      chainName: "Arbitrum Nova",
      nativeCurrency: {
        name: "Ether",
        symbol: "ETH",
        decimals: 18,
      },
      rpcUrls: [
        "https://sepolia-rollup.arbitrum.io/rpc",
      ],
      iconUrls: ["https://nova.arbiscan.io/favicon.ico"]
    },
    blast: {
      chainId: `0x${Number(168587773).toString(16)}`,
      chainName: "Blast",
      nativeCurrency: {
        name: "Ether",
        symbol: "ETH",
        decimals: 18,
      },
      rpcUrls: ["https://sepolia.blast.io"],
      iconUrls: ["https://blast.io/favicon.svg"]
    },
    base: {
      chainId: `0x${Number(84532).toString(16)}`,
      chainName: "Base",
      nativeCurrency: {
        name: "Ether",
        symbol: "ETH",
        decimals: 18,
      },
      rpcUrls: [
        "https://sepolia.base.org",
      ],
      iconUrls: ["https://www.base.org/document/favicon-32x32.png"]
    },
    linea: {
      chainId: `0x${Number(59141).toString(16)}`,
      chainName: "Linea",
      nativeCurrency: {
        name: "Linea Ether",
        symbol: "ETH",
        decimals: 18,
      },
      rpcUrls: [
        "https://rpc.sepolia.linea.build",
      ],
      iconUrls: ["https://linea.build/favicon-32x32.png"]
    },
    scroll: {
      chainId: `0x${Number(534351).toString(16)}`,
      chainName: "Scroll",
      nativeCurrency: {
        name: "Ether",
        symbol: "ETH",
        decimals: 18,
      },
      rpcUrls: [
        "https://sepolia-rpc.scroll.io"
      ],
      iconUrls: ["https://scroll.io/favicon_new.ico"]
    },
    zksync: {
      chainId: `0x${Number(300).toString(16)}`,
      chainName: "zkSync",
      nativeCurrency: {
        name: "Ether",
        symbol: "ETH",
        decimals: 18,
      },
      rpcUrls: [
        "https://zksync-era-sepolia.blockpi.network/v1/rpc/public",
        "https://endpoints.omniatech.io/v1/zksync-era/sepolia/public",
        "https://sepolia.era.zksync.dev",
        "wss://zksync-sepolia.drpc.org",
        "https://zksync-sepolia.drpc.org"
      ],
      iconUrls: ["https://zksync.io/favicon.ico"]
    }
  }
};
export default Config;
