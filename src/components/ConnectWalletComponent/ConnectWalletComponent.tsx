import React, { FC } from "react";
import WalletButtonComponent from "@/components/WalletButtonComponent/WalletButtonComponent";
import { useTranslation } from "react-i18next";
import { useConnect } from "wagmi";
import CloseButton from "@/components/CloseButton/CloseButton";
import { useAuth } from "@/hook/useAuth";

const ConnectWalletComponent: FC<{
  isOpenConnectWallet: boolean;
  setIsOpenConnectWallet: any;
}> = ({ isOpenConnectWallet, setIsOpenConnectWallet }) => {
  const { t }: { t: any } = useTranslation();
  const { connectors, error } = useConnect();
  const { setIsOpenSidebar } = useAuth();
  const onClose = (e: any) => {
    if (
      e.target.getAttribute("data-name") === "overlay" ||
      e.target.getAttribute("data-name") === "close-btn"
    ) {
      setIsOpenConnectWallet(false);
      setIsOpenSidebar(false);
    }
  };
  return (
    <div data-name="connect-wallet-component">
      <div
        data-name="overlay"
        className={`${!isOpenConnectWallet && "hidden"} ${
          isOpenConnectWallet && "backdrop-blur bg-black/40"
        } fixed z-20 top-0 right-0 bottom-0 left-0 justify-center items-center h-screen overflow-y-auto`}
        onClick={(e) => onClose(e)}
      ></div>
      <div
        className={`absolute h-screen z-50 top-0 lg:right-[30rem] ${
          !isOpenConnectWallet && "hidden lg:block lg:translate-x-[100rem]"
        } duration-300`}
      >
        <div className="fixed flex flex-col justify-between w-full h-screen lg:w-[30rem] bg-gray-block">
          <div className="flex justify-end" onClick={(e) => onClose(e)}>
            <CloseButton />
          </div>
          <div className="px-6">
            <p className="hidden lg:flex my-8 text-2xl font-semibold capitalize">
              {t("Connect Wallet")}
            </p>
            {connectors.map((connector) => (
              <WalletButtonComponent
                key={connector.id}
                connector={connector}
                setIsOpen={setIsOpenConnectWallet}
              />
            ))}
            {error && <div>{error.message}</div>}
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default ConnectWalletComponent;
