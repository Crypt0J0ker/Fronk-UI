import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useConnect, useAccount } from "wagmi";
import { wallets } from "@/client/mockData";
import { useAuth } from "@/hook/useAuth";

const WalletButtonComponent = ({
  connector,
  setIsOpen,
}: {
  connector: any;
  setIsOpen: any;
}) => {
  const [ready, setReady] = useState(false);
  const { connect, isLoading, pendingConnector } = useConnect();
  const { status } = useAccount();
  const { setIsLoading, setIsOpenSidebar } = useAuth();
  const data = wallets.filter(({ title }) => connector.name === title)[0];

  useEffect(() => {
    if (status === "connected") {
      setIsOpen(false);
    }
  }, [status, setIsOpen]);

  const handleClick = () => {
    connect({ connector });
    setIsLoading(true);
    // setIsOpenSidebar(false);
  };
  useEffect(() => {
    connector.ready ? setReady(true) : setReady(false);
  }, [connector.ready]);

  return (
    <button
      className="flex items-center px-4 py-2 mt-4 w-full text-white/40 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg"
      disabled={!ready}
      onClick={handleClick}
    >
      <div className="h-6 w-6 flex justify-center items-center">
        <Image src={data.logo} width={48} height={48} alt="img" />
      </div>
      <div className="ml-4">
        <p className="text-white text-left">{connector.name}</p>
        <p className="text-xs mt-1 text-left">{data.description}</p>
      </div>

      {!ready && " (unavailable)"}
      {isLoading && connector.id === pendingConnector?.id && " (connecting)"}
    </button>
  );
};

export default WalletButtonComponent;
