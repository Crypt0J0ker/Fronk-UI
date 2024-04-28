import React, { useEffect } from "react";
import { ethers } from "ethers";
import Web3Token from "web3-token";
import { useAccount, useDisconnect } from "wagmi";
import Config from "@/config/config";
import axios from "axios";
import { useRouter } from "next/router";
import { useAuth } from "@/hook/useAuth";

const TokenHandler = () => {
  const { status } = useAccount();
  const { disconnect } = useDisconnect();
  const { setIsAuth, setIsOpenSidebar, setIsLoading } = useAuth();

  const { push } = useRouter();

  const setToken = async () => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);

      const signer = provider.getSigner();
      const token = await Web3Token.sign(
        async (msg: any) => await signer.signMessage(msg),
        `${Config.tokenExpireDays}d`
      );

      const staleTime = new Date();
      staleTime.setDate(staleTime.getDate() + Config.tokenExpireDays);
      console.log("staleTime", staleTime);
      localStorage.setItem("token", token);
      localStorage.setItem("staleTime", staleTime.getTime().toString());

      return token;
    } catch (error: any) {
      disconnect();
    } finally {
      setIsLoading(false);
    }
  };

  const setAxiosTokenMiddleware = async (token: string) => {
    axios.interceptors.request.use(
      (config: any) => {
        if (typeof window !== "undefined") {
          // deleted checking if initial state value contains isAuthentificated = true
          config.headers.Authorization = `Bearer ${token}`;
        }

        // Do something before request is sent
        return config;
      },
      (error: any) => {
        // Do something with request error
        return Promise.reject(error);
      }
    );
  };

  const onConnect = async () => {
    // get current token
    const tokenFromState = localStorage.getItem("token");
    const tokenFromStateStaleTimeString = localStorage.getItem("staleTime");
    var tokenFromStateStaleTimeNumber = +(tokenFromStateStaleTimeString ?? "");
    // check if exists and valid
    if (
      !!tokenFromState &&
      tokenFromState.length > 10 &&
      !!tokenFromStateStaleTimeString &&
      !Number.isNaN(tokenFromStateStaleTimeNumber) &&
      tokenFromStateStaleTimeNumber > 0 &&
      new Date().getTime() < tokenFromStateStaleTimeNumber
    ) {
      // set axios middleware
      setIsAuth(true);
      setIsOpenSidebar(false);
      await setAxiosTokenMiddleware(tokenFromState);
      return;
    } else {
      // create if not exists or not valid
      const token = await setToken();

      if (token && token?.length > 10) {
        setIsAuth(true);
        setIsOpenSidebar(false);
      }
      token && token?.length > 10 && (await setAxiosTokenMiddleware(token));
      return;
    }
  };

  useEffect(() => {
    if (status === "connected") {
      onConnect();
    } else if (status === "disconnected") {
      axios.interceptors.request.clear();
      localStorage.clear();
      setIsAuth(false);
      setIsOpenSidebar(false);
      push("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  return <></>;
};

export default TokenHandler;
