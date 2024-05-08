import React from "react";
import HeroComponent from "../HeroComponent/HeroComponent";
import BlocksDivider from "../BlocksDivider/BlocksDivider";
import DailyStreak from "../DailyStreak/DailyStreak";
import { IUser } from "@/interfaces";

const FronkMain = ({ user }: { user: IUser }) => {
  return (
    <div className="uppercase">
      <HeroComponent />
      <BlocksDivider text={"daily streak"} />
      <DailyStreak />
    </div>
  );
};

export default FronkMain;
