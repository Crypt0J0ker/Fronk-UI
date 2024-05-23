export interface IDictionary {
  [index: string]: string
}

export type SocialType = {
  label: string
  name: string
  path: string
  icon?: any
}
export interface IUser {
  name: string
  socials: SocialType[]
}

export type DirectionType = 'right' | 'left' | 'up' | 'down'

export interface AddEthereumChainParameter {
  chainId: string
  chainName: string
  rpcUrls: string[]
  iconUrls: string[]
  nativeCurrency: {
    name: string
    symbol: string
    decimals: number
  }
  blockExplorerUrls?: string[]
}
export interface INetWork {
  polygon: AddEthereumChainParameter
  arbitrum_one: AddEthereumChainParameter
  arbitrum_nova: AddEthereumChainParameter
  blast: AddEthereumChainParameter
  base: AddEthereumChainParameter
  linea: AddEthereumChainParameter
  scroll: AddEthereumChainParameter
  zksync: AddEthereumChainParameter
}
export type NetworkNameType =
  | 'polygon'
  | 'arbitrum_one'
  | 'arbitrum_nova'
  | 'blast'
  | 'base'
  | 'linea'
  | 'scroll'
  | 'zksync'
