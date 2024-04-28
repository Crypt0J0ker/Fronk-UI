import React, { useState, useEffect } from "react";
import Image from "next/image";
import imgSrcLogo from "../../../public/images/fronk/Logo_small.png";
import imgSrcAvatar from "../../../public/images/fronk/Avatar.png";
import { IUser } from "@/layouts/BaseLayout/BaseLayout";
import DiscordIcon from "@/components/icons/discordIcon";
import TwitterIcon from "@/components/icons/twitterIcon";
import InstagramIcon from "@/components/icons/instagramIcon";
import { useAccount, useDisconnect } from "wagmi";
import { useAuth } from "@/hook/useAuth";

const socials = [
  { icon: <TwitterIcon />, label: "twitter", link: "#" },
  { icon: <InstagramIcon />, label: "instagram", link: "#" },
  { icon: <DiscordIcon />, label: "discord", link: "#" },
];

const userInfo = (user: IUser) => (
  <div
    data-name="user"
    className="flex flex-col items-center border border-fronk-orange py-10 mb-2"
  >
    <div
      data-name="avatar"
      className="avatar rounded-sm border border-fronk-orange mx-2"
    >
      <Image src={imgSrcAvatar} width={178} alt="avatar" />
    </div>
    <h1 className="mt-2.5 text-2xl">{user.name}</h1>
    <div data-name="socials" className="w-full px-2.5">
      {user.socials.map((item) => (
        <a key={item.label} href={item.link}>
          <div className="flex justify-between items-center border border-fronk-orange mt-5 pr-5 py-2">
            <h1 className="ml-2.5 text-base">{item.name}</h1>
            <div className="flex w-1/6 justify-center items-center">
              {item.icon}
            </div>
          </div>
        </a>
      ))}
    </div>
  </div>
);

const SideBar = ({
  user,
  connectWallet,
}: {
  user: IUser;
  connectWallet: any;
}) => {
  const divideFunc = (str: any) => {
    return String(str).split("").join(" ");
  };
  const [walletAdress, setWalletAdress] = useState("");
  const { disconnect } = useDisconnect();
  const { address, isConnected } = useAccount();
  const { isAuth, setIsLoading, setIsOpenSidebar } = useAuth();

  const handleDisconnect = () => {
    setIsLoading(true);
    disconnect();
    setIsOpenSidebar(false);
  };

  useEffect(() => {
    if (address) {
      const value = `${address.slice(0, 5)}...${address?.slice(-4)}`;
      setWalletAdress(value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuth]);

  return (
    <>
      <div className="w-1/5 hidden md:block"></div>
      <div
        data-name="sidebar"
        // className="hidden md:flex font-main h-screen overflow-y-auto uppercase text-white w-1/5 fixed flex-col justify-between border border-fronk-orange"
        className="hidden md:flex font-main uppercase text-white w-1/5 absolute flex-col justify-between border border-fronk-orange"
      >
        <header className="w-full flex justify-center">
          <div
            data-name="logo"
            className="w-5/6 flex justify-center items-center my-10"
          >
            <Image src={imgSrcLogo} width={99} alt="logo" />
          </div>
        </header>

        <div data-name="main-info" className="flex flex-col mx-3">
          {userInfo(user)}

          {isConnected ? (
            <button
              className="bg-fronk-orange hover:bg-fronk-orange/50 uppercase text-4xl font-semibold text-white w-full py-2 my-6"
              onClick={handleDisconnect}
            >
              {walletAdress}
            </button>
          ) : (
            <button
              className="bg-fronk-orange hover:bg-fronk-orange/50 uppercase text-4xl font-semibold text-white w-full py-2 my-6"
              onClick={() => {
                connectWallet(true);
              }}
            >
              wallet
            </button>
          )}

          <div className="flex flex-col items-center px-9">
            <h1 className="text-[1.75rem]">total FXP</h1>
            <div className="w-full border border-fronk-green whitespace-nowrap overflow-hidden">
              <h1 className="text-fronk-green text-center tracking-widest text-[2rem] font-bold">
                {divideFunc(user.total)}
              </h1>
            </div>
          </div>
        </div>

        <footer className="flex flex-col items-center">
          <h1 className="text-base tracking-widest font-extralight mb-3">
            all rights reserved
          </h1>
          <div className="w-full flex justify-center items-center mb-12">
            {socials.map(({ icon, label, link }) => (
              <a key={label} href={link} className="mx-4">
                {icon}
              </a>
            ))}
          </div>
        </footer>
      </div>
    </>
  );
};

export default SideBar;
