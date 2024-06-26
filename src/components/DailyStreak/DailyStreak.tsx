import React, { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import { INetWork, NetworkNameType } from "@/interfaces";
import { ethers } from "ethers";
import { FronkWorldClient } from "../../../dist";
import CloseButton from "../CloseButton/CloseButton";
import Config from "@/config/config";
import { useAuth } from "@/hook/useAuth";

const networks: INetWork = Config.chains;

const header = "Sign in for a week straight, watch you prizes escalate";

function getClient() {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const client = new FronkWorldClient(signer);
  return client;
}

async function isCorrectChain() {
  let currentChainId: number;
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  await provider.getNetwork().then((chain) => {
    currentChainId = chain.chainId;
  });

  const currentChain = Object.values(networks).find(
    (item: any) => parseInt(item.chainId, 16) === currentChainId
  );
  return currentChain?.chainId;
}

const Card = ({ item, minted }: { item: number; minted: boolean }) => {
  const { t }: { t: any } = useTranslation();
  const { isAuth } = useAuth();
  const dailyStreakStatus = minted ? "done" : `day ${item + 1}`;
  const [amount, setAmount] = useState(`${(item + 1) * 2}`);

  useEffect(() => {
    if (isAuth) {
      isCorrectChain().then((res) => {
        if (res) {
          console.log("res", res);
          const fronkWorldClient = getClient();
          fronkWorldClient
            .getMintAmountForDay(item + 1)
            .then((res) => setAmount(res));
        } else {
          console.log("incorrect chain");
        }
      });
    }
  }, [item, isAuth]);

  return (
    <div data-name="card" className="w-32 mx-3">
      <div
        className={clsx("border", {
          "border-fronk-green": minted,
          "border-fronk-orange": !minted,
        })}
      >
        <div
          className={clsx(
            "mt-3 mx-3 flex flex-col justify-center items-center",
            {
              "bg-fronk-green": minted,
              "bg-fronk-orange": !minted,
            }
          )}
        >
          <p className="text-center text-6xl font-semibold italic mt-5 px-3">
            FXP
          </p>
          <p className="text-xl my-1">{`+${+amount}`}</p>
        </div>
        <div className="text-center">
          <p className="text-2xl my-1">{t(dailyStreakStatus)}</p>
        </div>
      </div>
    </div>
  );
};

const ChainCard = ({
  chain,
  setActiveChain,
  active,
}: {
  chain: NetworkNameType;
  setActiveChain: any;
  active: boolean;
}) => {
  const network = networks[chain];

  return (
    <div
      className={clsx(
        "cursor-pointer relative flex items-end justify-start px-2 pt-1 pb-2"
      )}
      onClick={() => {
        setActiveChain(chain);
      }}
      style={{
        background: `url(${
          network.iconUrls[0]
        }) top 12px right 12px/32px 32px no-repeat, url(${
          active
            ? "images/fronk/subtract-top-active.svg"
            : "images/fronk/subtract-top.svg"
        }) top/contain no-repeat, url(${
          active
            ? "images/fronk/subtract-bot-active.svg"
            : "images/fronk/subtract-bot.svg"
        }) bottom/contain no-repeat`,
      }}
    >
      <h5 className="w-full text-sm pt-14">{network.chainName}</h5>
    </div>
  );
};

const changeNetwork = async ({
  networkName,
}: {
  networkName: NetworkNameType;
}) => {
  try {
    if (!window.ethereum) throw new Error("No crypto wallet found");
    await window.ethereum.request({
      method: "wallet_addEthereumChain",
      params: [{ ...networks[networkName] }],
    });
  } catch (err: any) {
    console.log(err.message);
  }
};

async function handleNetworkSwitch(
  networkName: NetworkNameType,
  setIsOpenModal: any
) {
  const activeChainId =
    networkName && parseInt(networks[networkName].chainId, 16);

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const currentChain = await provider.getNetwork().then((chain) => {
    return chain.chainId;
  });

  if (currentChain === activeChainId)
    console.log("the chain is already connected", currentChain);
  if (currentChain !== activeChainId) {
    await changeNetwork({ networkName });
    mint();
    setIsOpenModal(false);
    console.log(
      "connected chain:",
      parseInt(networks[networkName].chainId, 16)
    );
  }
}

const Popup = ({
  setIsOpenModal,
  checkedToday,
}: {
  setIsOpenModal: any;
  checkedToday: boolean;
}) => {
  const { t }: { t: any } = useTranslation();
  const { isAuth } = useAuth();
  const [activeChain, setActiveChain] = useState<NetworkNameType>();
  
  function onClose(e: any) {
    if (e.target.getAttribute("data-name") === "overlay") {
      setIsOpenModal(false);
    }
  }

  const claimDisabled = !isAuth || checkedToday || !activeChain;
  return (
    <div
      data-name="overlay"
      className="fixed backdrop-blur z-30 top-0 right-0 bottom-0 left-0 bg-black/40 flex justify-end items-center lg:px-0"
      onClick={(e) => onClose(e)}
    >
      <div className="flex w-4/5 justify-center items-center">
        <div
          data-name="modal"
          className="relative font-archivo normal-case px-9 overflow-y-auto h-[480px] max-h-screen md:w-[676px] flex flex-col justify-around items-center bg-fronk-dark  border border-white/50"
          style={{
            background:
              "linear-gradient(to right, rgba(32, 24, 18, 0.91), rgba(32, 24, 18, 0.91))",
          }}
        >
          <div className="w-full flex justify-end absolute top-0 p-2">
            <CloseButton handleClick={() => setIsOpenModal(false)} />
          </div>
          {isAuth ? (
            <>
              <h1 className="text-5xl uppercase my-9">select chain</h1>
              <div className="w-full grid md:grid-cols-4 grid-cols-2 gap-y-[30px] gap-x-10">
                {Object.keys(networks).map((chain) => (
                  <ChainCard
                    key={chain}
                    chain={chain as NetworkNameType}
                    setActiveChain={setActiveChain}
                    active={activeChain === chain}
                  />
                ))}
              </div>
              <button
                disabled={claimDisabled}
                className="px-16 font-archivo text-5xl font-light border border-fronk-orange disabled:opacity-60 disabled:hover:bg-transparent hover:bg-fronk-orange uppercase py-2.5 mt-10 mb-5"
                onClick={() => {
                  activeChain &&
                    handleNetworkSwitch(activeChain, setIsOpenModal);
                }}
              >
                {t("Claim")}
              </button>
            </>
          ) : (
            <h1>The wallet not connected</h1>
          )}
        </div>
      </div>
    </div>
  );
};

async function mint() {
  // console.log("MINT!");
  const client = getClient();
  try {
    await client.mint();
  } catch {
    console.log("error");
  }
}

const DailyStreak = () => {
  const { isAuth, isLoading, setIsLoading } = useAuth();
  const { address } = useAccount();

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [checkedToday, setCheckedToday] = useState(false);
  const [mintStreak, setMintStreak] = useState(0);

  const list = Array.from(
    { length: Math.ceil(mintStreak / 7) ? Math.ceil(mintStreak / 7) * 7 : 7 },
    (_, i) => i
  );

  const { t }: { t: any } = useTranslation();

  useEffect(() => {
    if (isAuth) {
      isCorrectChain().then((res) => {
        if (!!res) {
          const fronkWorldClient = getClient();
          fronkWorldClient
            .checkIfMintedToday(address)
            .then((checkedToday: boolean) => setCheckedToday(checkedToday));
          fronkWorldClient
            .getMintStreak(address)
            .then((mintStreak: number) => setMintStreak(mintStreak));
        } else {
          console.log("incorrect chain");
        }
      });
    }
  }, [address, isAuth]);

  const claimDisabled = !isAuth || checkedToday;

  const handleMint = () => {
    isCorrectChain().then((res) => {
      if (!!res) {
        mint();
      } else {
        setIsOpenModal(true);
      }
    });
  };

  return (
    // isLoading ? (
    //   <div
    //     data-name="overlay"
    //     className="fixed backdrop-blur z-30 top-0 right-0 bottom-0 left-0 bg-black/40 flex justify-center items-center lg:px-0"
    //   >
    //     <span className="loading loading-spinner loading-lg"></span>
    //   </div>
    // ) : (
    <div className="flex flex-col justify-center items-center border-2 border-white/50 px-3.5 py-4">
      {isOpenModal && <Popup setIsOpenModal={setIsOpenModal} checkedToday={checkedToday} />}
      <div className="w-full flex justify-between px-3 mb-4">
        <h1>{t(header)}</h1>
        <button
          className="bg-fronk-orange hover:bg-fronk-orange/50 text-2xl uppercase w-1/6 px-2"
          onClick={() => setIsOpenModal(true)}
        >
          {t("switch")}
        </button>
      </div>
      <div className="flex justify-between w-full mt-3 overflow-x-auto">
        {list.slice(-7).map((item, i) => (
          <Card
            key={item}
            item={item}
            minted={mintStreak !== list.length ? i + 1 <= mintStreak % 7 : true}
          />
        ))}
      </div>
      <button
        disabled={claimDisabled}
        className="w-5/12 font-archivo text-5xl font-light border border-fronk-orange disabled:opacity-60 disabled:hover:bg-transparent hover:bg-fronk-orange uppercase py-2.5 mt-10 mb-5"
        onClick={handleMint}
      >
        {t("Claim")}
      </button>
    </div>
  );
};

export default DailyStreak;
