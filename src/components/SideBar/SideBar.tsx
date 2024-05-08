import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import Image from "next/image";
import imgSrcLogo from "../../../public/images/fronk/Logo_small.png";
import imgSrcAvatar from "../../../public/images/fronk/Avatar.png";
import DiscordIcon from "@/components/icons/discordIcon";
import TwitterIcon from "@/components/icons/twitterIcon";
import InstagramIcon from "@/components/icons/instagramIcon";
import { useAccount, useDisconnect } from "wagmi";
import { useAuth } from "@/hook/useAuth";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { IUser } from "@/interfaces";
import { FronkWorldClient } from "../../../dist";

const socials = [
  { icon: <TwitterIcon />, label: "twitter", link: "#" },
  { icon: <InstagramIcon />, label: "instagram", link: "#" },
  { icon: <DiscordIcon />, label: "discord", link: "#" },
];

const UserInfoPanel = ({ user }: { user: IUser }) => (
  <div className="flex flex-col items-center border border-fronk-orange py-10 mb-2">
    <div className="avatar rounded-sm border border-fronk-orange mx-2">
      <Image src={imgSrcAvatar} width={178} alt="avatar" />
    </div>
    <h1 className="mt-2.5 text-2xl">{user.name}</h1>
    <div className="w-full px-2.5">
      {user.socials.map((item) => (
        <Link key={item.label} href={item.link}>
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
);

const Popup = () => {
  const { t }: { t: any } = useTranslation();
  const { disconnect } = useDisconnect();
  const { setIsLoading, setIsOpenSidebar } = useAuth();

  function handleDisconnect() {
    setIsLoading(true);
    disconnect();
    setIsOpenSidebar(false);
  }
  return (
    <>
      <input type="checkbox" id="popup" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box text-black">
          <p className="py-4">{t("Are you sure you want to disconnect?")}</p>
          <div className="modal-action">
            <label htmlFor="popup" className="btn">
              {t("cancel")}
            </label>
            <label htmlFor="popup" onClick={handleDisconnect} className="btn">
              {t("disconnect")}
            </label>
          </div>
        </div>

        <label className="modal-backdrop" htmlFor="popup"></label>
      </div>
    </>
  );
};

const WalletButton = ({ connectWallet }: { connectWallet: any }) => {
  const { t }: { t: any } = useTranslation();
  const [walletAdress, setWalletAdress] = useState("");
  const { address } = useAccount();
  const { isAuth } = useAuth();

  useEffect(() => {
    if (address) {
      const value = `${address.slice(0, 5)}...${address?.slice(-4)}`;
      setWalletAdress(value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuth]);

  if (isAuth) {
    return (
      <label
        htmlFor="popup"
        className="bg-fronk-orange hover:bg-fronk-orange/50 text-4xl normal-case font-semibold text-white w-full py-2 my-6 flex justify-center items-center"
      >
        <p>{walletAdress}</p>
      </label>
    );
  }
  return (
    <label
      className="bg-fronk-orange hover:bg-fronk-orange/50 text-4xl normal-case font-semibold text-white w-full py-2 my-6 flex justify-center items-center"
      onClick={() => {
        connectWallet(true);
      }}
    >
      <p className="uppercase">{t("wallet")}</p>
    </label>
  );
};

const TotalPanel = ({ children }: { children: number | string }) => {
  const { t }: { t: any } = useTranslation();
  const total = children.toString().split("").join(" ");

  return (
    <div className="flex flex-col items-center px-9">
      <h1 className="text-[1.75rem]">{t("total FXP")}</h1>
      <div className="w-full border border-fronk-green whitespace-nowrap overflow-hidden">
        <h1 className="text-fronk-green text-center tracking-widest text-[2rem] font-bold">
          {total}
        </h1>
      </div>
    </div>
  );
};

const SideBar = ({
  user,
  connectWallet,
}: {
  user: IUser;
  connectWallet: any;
}) => {
  const { t }: { t: any } = useTranslation();
  const { address } = useAccount();
  const { isAuth } = useAuth();

  const [total, setTotal] = useState("520");

  useEffect(() => {
    if (isAuth) {
      // if (window.ethereum) {
      //   const provider = new ethers.providers.Web3Provider(window.ethereum);
      //   const signer = provider.getSigner();
      //   const fronkWorldClient = new FronkWorldClient(signer);
      //   fronkWorldClient
      //     .getFronkXPBalance(address)
      //     .then((total: string) => setTotal(total));
      // }
    }
  }, [address, isAuth]);

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
            {t("all rights reserved")}
          </h1>
          <div className="w-full flex justify-center items-center mb-12">
            {socials.map(({ icon, label, link }) => (
              <Link key={label} href={link} className="mx-4">
                {icon}
              </Link>
            ))}
          </div>
        </footer>
      </div>
    </>
  );
};

export default SideBar;
