import { ethers } from 'ethers'
import { FronkWorldClient } from '../../dist'
import { INetWork, NetworkNameType } from '@/interfaces'
import Config from '@/config/config'

const networks: INetWork = Config.chains

export function getClient() {
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const signer = provider.getSigner()
  const client = new FronkWorldClient(signer)
  return client
}

export async function isCorrectChain() {
  let currentChainId: number
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  await provider.getNetwork().then(chain => {
    currentChainId = chain.chainId
  })

  const currentChain = Object.values(networks).find(
    (item: any) => parseInt(item.chainId, 16) === currentChainId
  )
  return currentChain?.chainId
}

export async function changeNetwork(networkName: NetworkNameType) {
  try {
    if (!window.ethereum) throw new Error('No crypto wallet found')
    await window.ethereum.request({
      method: 'wallet_addEthereumChain',
      params: [{ ...networks[networkName] }],
    })
  } catch (err: any) {
    console.log(err.message)
  }
}

export async function mint() {
  // console.log("MINT!");
  const client = getClient()
  try {
    await client.mint()
  } catch {
    console.log('error')
  }
}

export async function handleNetworkSwitch(
  networkName: NetworkNameType,
  setIsOpenModal: any
) {
  const activeChainId =
    networkName && parseInt(networks[networkName].chainId, 16)

  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const currentChain = await provider.getNetwork().then(chain => {
    return chain.chainId
  })

  if (currentChain === activeChainId)
    console.log('the chain is already connected', currentChain)
  if (currentChain !== activeChainId) {
    await changeNetwork(networkName)
    mint()
    setIsOpenModal(false)
    console.log('connected chain:', parseInt(networks[networkName].chainId, 16))
  }
}
