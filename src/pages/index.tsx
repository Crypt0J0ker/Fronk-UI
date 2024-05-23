import React from 'react'
import Head from 'next/head'
import BaseLayout from '@/layouts/BaseLayout/BaseLayout'
import MainPage from '@/components/MainPage/MainPage'
import XIcon from '@/components/icons/xIcon'
import DiscordIcon from '@/components/icons/discordIcon'
import MailIcon from '@/components/icons/mailIcon'
import { IUser } from '@/interfaces'

const user: IUser = {
  name: '@Mr. Frog',
  socials: [
    {
      label: 'twitter',
      name: '@Mr. Frog',
      path: '#',
      icon: <XIcon />,
    },
    {
      label: 'discord',
      name: '@Mr. Frog',
      path: '#',
      icon: <DiscordIcon />,
    },
    {
      label: 'mail',
      name: '@Mr. Frog',
      path: '#',
      icon: <MailIcon />,
    },
  ],
}

const IndexPage = () => {
  return (
    <>
      <React.StrictMode>
        <BaseLayout user={user}>
          <Head>
            <title>Fronk World</title>
            <meta property="og:title" content="Fronk World" key="title" />
          </Head>
          <MainPage />
        </BaseLayout>
      </React.StrictMode>
    </>
  )
}

export default IndexPage
