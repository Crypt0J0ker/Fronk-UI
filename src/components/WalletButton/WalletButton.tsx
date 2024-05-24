import { useAuth } from '@/hook/useAuth'
import { useTranslation } from 'next-i18next'
import { useEffect, useState } from 'react'
import { useAccount } from 'wagmi'

const WalletButton = ({
  connectWallet,
  isSidebar = true,
}: {
  connectWallet: any
  isSidebar?: boolean
}) => {
  const { t }: { t: any } = useTranslation()
  const [walletAdress, setWalletAdress] = useState('')
  const { address } = useAccount()
  const { isAuth } = useAuth()

  useEffect(() => {
    if (address) {
      const value = `${address.slice(0, 5)}...${address?.slice(-4)}`
      setWalletAdress(value)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuth])

  const buttonClass = isSidebar
    ? 'bg-fronk-orange hover:bg-fronk-orange/50 text-4xl normal-case font-semibold text-white w-full py-2 my-6 flex justify-center items-center'
    : 'bg-fronk-black hover:bg-fronk-orange/50 text-4xl normal-case font-semibold text-white text-opacity-90 w-full py-2 my-6 flex justify-center items-center max-w-md border border-fronk-orange absolute bottom-0 left-14'

  if (isAuth) {
    return (
      <label htmlFor="popup" className={buttonClass}>
        <p>{walletAdress}</p>
      </label>
    )
  }

  return (
    <label
      className={buttonClass}
      onClick={() => {
        connectWallet(true)
      }}
    >
      <p className="uppercase">{t('wallet')}</p>
    </label>
  )
}

export default WalletButton
