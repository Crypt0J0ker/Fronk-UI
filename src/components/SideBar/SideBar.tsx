import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import imgSrcLogo from '../../../public/images/fronk/Logo_small.png'
import imgSrcAvatar from '../../../public/images/fronk/Avatar.png'
import DiscordIcon from '@/components/icons/discordIcon'
import TwitterIcon from '@/components/icons/twitterIcon'
import InstagramIcon from '@/components/icons/instagramIcon'
import { useAccount } from 'wagmi'
import { useAuth } from '@/hook/useAuth'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import { IUser } from '@/interfaces'
import { getClient, isCorrectChain } from '@/client'
import WalletButton from '../WalletButton/WalletButton'
import Popup from '../DisconnectPopup/DisconnectPopup'

const socials = [
  { icon: <TwitterIcon />, label: 'twitter', path: '#' },
  { icon: <InstagramIcon />, label: 'instagram', path: '#' },
  { icon: <DiscordIcon />, label: 'discord', path: '#' },
]

const UserInfoPanel = ({ user }: { user: IUser }) => (
  <div className="flex flex-col items-center border border-fronk-orange py-10 mb-2">
    <div className="avatar rounded-sm border border-fronk-orange mx-2">
      <Image src={imgSrcAvatar} width={178} alt="avatar" />
    </div>
    <h1 className="mt-2.5 text-2xl">{user.name}</h1>
    <div className="w-full px-2.5">
      {user.socials.map(item => (
        <Link key={item.label} href={item.path}>
          <div className="flex justify-between items-center border border-fronk-orange mt-5 pr-5 py-2">
            <h1 className="ml-2.5 text-base">{item.name}</h1>
            <div className="flex w-1/6 justify-center items-center">
              {item.icon}
            </div>
          </div>
        </Link>
      ))}
    </div>
  </div>
)

const TotalPanel = ({ children }: { children: number | string }) => {
  const { t }: { t: any } = useTranslation()
  const total = children.toString().split('').join(' ')

  return (
    <div className="flex flex-col items-center px-9">
      <h1 className="text-[1.75rem]">{t('total FXP')}</h1>
      <div className="w-full border border-fronk-green whitespace-nowrap overflow-hidden">
        <h1 className="text-fronk-green text-center tracking-widest text-[2rem] font-bold">
          {total}
        </h1>
      </div>
    </div>
  )
}

const Sidebar = ({
  user,
  connectWallet,
}: {
  user: IUser
  connectWallet: any
}) => {
  const { t }: { t: any } = useTranslation()
  const { address } = useAccount()
  const { isAuth } = useAuth()

  const [total, setTotal] = useState('0')

  useEffect(() => {
    if (isAuth) {
      isCorrectChain().then(res => {
        if (!!res) {
          const fronkWorldClient = getClient()
          fronkWorldClient
            .getFronkXPBalance(address)
            .then((total: string) => setTotal(total))
        } else {
          console.log('incorrect chain')
        }
      })
    }
  }, [address, isAuth])

  return (
    <>
      <Popup />
      <div className="w-1/5 hidden md:block"></div>
      <div
        // className="hidden md:flex font-main h-screen overflow-y-auto uppercase text-white w-1/5 fixed flex-col justify-between border border-fronk-orange"
        className="hidden md:flex font-main uppercase text-white w-1/5 absolute flex-col justify-between border border-fronk-orange"
      >
        <header className="w-full flex justify-center">
          <div className="w-5/6 flex justify-center items-center my-10">
            <Image src={imgSrcLogo} width={99} alt="logo" />
          </div>
        </header>

        <div className="flex flex-col mx-3">
          <UserInfoPanel user={user} />
          <WalletButton connectWallet={connectWallet} />
          {isAuth && <TotalPanel>{total}</TotalPanel>}
        </div>

        <footer className="flex flex-col items-center">
          <h1 className="text-base tracking-widest font-extralight mb-3">
            {t('all rights reserved')}
          </h1>
          <div className="w-full flex justify-center items-center mb-12">
            {socials.map(({ icon, label, path }) => (
              <Link key={label} href={path} className="mx-4">
                {icon}
              </Link>
            ))}
          </div>
        </footer>
      </div>
    </>
  )
}

export default Sidebar
