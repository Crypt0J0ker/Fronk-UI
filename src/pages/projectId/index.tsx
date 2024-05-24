import React, { useState, useEffect } from 'react'
import ScreenLayout from '@/layouts/ScreenLayout/ScreenLayout'
import ProjectComponent from '@/components/ProjectComponent/ProjectComponent'
import ConnectWalletComponent from '@/components/ConnectWalletComponent/ConnectWalletComponent'
import { IUser } from '@/interfaces'
import XIcon from '@/components/icons/xIcon'
import DiscordIcon from '@/components/icons/discordIcon'
import MailIcon from '@/components/icons/mailIcon'
import WalletButton from '@/components/WalletButton/WalletButton'
import Popup from '@/components/DisconnectPopup/DisconnectPopup'

const project = {
  name: 'Projects name',
  img: '',
  quests: [
    {
      label: '1',
      completed: true,
    },
    {
      label: '2',
      completed: true,
    },
    {
      label: '3',
      completed: true,
    },
    {
      label: '4',
      completed: true,
    },
    {
      label: '5',
      completed: true,
    },
    {
      label: '6',
      completed: false,
    },
    {
      label: '7',
      completed: false,
    },
    {
      label: '8',
      completed: false,
    },
    {
      label: '9',
      completed: false,
    },
    {
      label: '10',
      completed: false,
    },
    {
      label: '11',
      completed: false,
    },
    {
      label: '12',
      completed: false,
    },
  ],
  tag: 'tag',
  socials: [
    {
      label: 'twitter',
      name: '@Mr. Frog',
      path: '#',
    },
    {
      label: 'discord',
      name: '@Mr. Frog',
      path: '#',
    },
    {
      label: 'mail',
      name: '@Mr. Frog',
      path: '#',
    },
  ],
  description:
    'Cryptocurrency is virtual money that is used on the Internet. They are protected by encryption and are not controlled by the government or banks. Some cryptocurrencies, such as Bitcoin, have become very popular in recent years.',
}

const ProjectItemPage = () => {
  const [isOpenConnectWallet, setIsOpenConnectWallet] = useState(false)

  return (
    <>
      <Popup />
      <ScreenLayout socials={project.socials}>
        <ProjectComponent data={project} />
      </ScreenLayout>
      <WalletButton connectWallet={setIsOpenConnectWallet} isSidebar={false} />
      <ConnectWalletComponent
        isOpenConnectWallet={isOpenConnectWallet}
        setIsOpenConnectWallet={setIsOpenConnectWallet}
      />
    </>
  )
}

export default ProjectItemPage
