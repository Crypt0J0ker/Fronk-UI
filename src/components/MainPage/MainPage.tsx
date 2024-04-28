import React from "react";
import HeroComponent from "../HeroComponent/HeroComponent";
import BlocksDivider from "../BlocksDivider/BlocksDivider";
import CardsList from "../CardsList/CardsList";

export interface ICard {
  id: number;
  value: number;
  checked: boolean;
}

const xpList: ICard[] = [
  { id: 1, value: 2, checked: true },
  { id: 2, value: 4, checked: false },
  { id: 3, value: 6, checked: false },
  { id: 4, value: 8, checked: false },
  { id: 5, value: 10, checked: false },
  { id: 6, value: 12, checked: false },
  { id: 7, value: 15, checked: false },
];

const FronkMain = () => {
  return (
    <div className="uppercase">
      <HeroComponent />
      <BlocksDivider text={"daily streak"} />
      <CardsList list={xpList} />
    </div>
  );
};

export default FronkMain;
