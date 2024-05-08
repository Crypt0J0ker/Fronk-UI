import React from "react";
import Head from "next/head";
import BaseLayout from "@/layouts/BaseLayout/BaseLayout";
import MainPage from "@/components/MainPage/MainPage";
import XIcon from "@/components/icons/xIcon";
import DiscordIcon from "@/components/icons/discordIcon";
import MailIcon from "@/components/icons/mailIcon";
import { DailyStreakType, IUser } from "@/interfaces";

const list: DailyStreakType[] = [
  { id: 1, value: 2, checked: true },
  { id: 2, value: 4, checked: false },
  { id: 3, value: 6, checked: false },
  { id: 4, value: 8, checked: false },
  { id: 5, value: 10, checked: false },
  { id: 6, value: 12, checked: false },
  { id: 7, value: 15, checked: false },
];

const user: IUser = {
  name: "@Mr. Frog",
  socials: [
    {
      label: "twitter",
      name: "@Mr. Frog",
      link: "#",
      icon: <XIcon />,
    },
    {
      label: "discord",
      name: "@Mr. Frog",
      link: "#",
      icon: <DiscordIcon />,
    },
    {
      label: "mail",
      name: "@Mr. Frog",
      link: "#",
      icon: <MailIcon />,
    },
  ],
  dailyStreak: list,
};

const IndexPage = () => {
  return (
    <>
      <React.StrictMode>
        <BaseLayout user={user} >
          <Head>
            <title>Fronk World</title>
            <meta
              property="og:title"
              content="Fronk World"
              key="title"
            />
          </Head>
          <MainPage user={user} />
        </BaseLayout>
      </React.StrictMode>
    </>
  );
};

export default IndexPage;

