import React, { useState } from "react";
import ConnectWalletComponent from "@/components/ConnectWalletComponent/ConnectWalletComponent";
import SideBar from "@/components/SideBar/SideBar";
import XIcon from "@/components/icons/xIcon";
import DiscordIcon from "@/components/icons/discordIcon";
import MailIcon from "@/components/icons/mailIcon";

interface ISocial {
  label: string;
  name: string;
  link: string;
  icon: any;
}
export interface IUser {
  name: string;
  socials: ISocial[];
  total: number;
}

const socials: ISocial[] = [
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
];
const user: IUser = {
  name: "@Mr. Frog",
  socials,
  total: 520,
};

const BaseLayout = (props: any) => {
  const [isOpenConnectWallet, setIsOpenConnectWallet] = useState(false);

  return (
    <div
      className={`text-white ${
        isOpenConnectWallet ? "fixed" : "relative"
      } bg-fronk-dark flex w-full overflow-x-hidden`}
      style={{
        background:
          "radial-gradient(circle closest-corner at 90% 60%, rgba(227, 113, 8, 0.1) 30%, rgba(12, 12, 12, 1) 100%), linear-gradient(to right, rgba(12, 12, 12, 1), rgba(12, 12, 12, 1))",
      }}
    >
      <SideBar user={user} connectWallet={setIsOpenConnectWallet} />
      <ConnectWalletComponent
        isOpenConnectWallet={isOpenConnectWallet}
        setIsOpenConnectWallet={setIsOpenConnectWallet}
      />

      <div className="w-full md:w-4/5 min-h-screen font-main overflow-hidden p-10">
        <div className="container max-w-[67.125rem] mx-auto">
          <div className="min-h-screen">{props.children}</div>
        </div>
      </div>
    </div>
  );
};

export default BaseLayout;
