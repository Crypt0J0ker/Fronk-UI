import React from "react";
import Image from "next/image";
import clsx from "clsx";
import UpdateIcon from "../icons/updateIcon";
import CheckIcon from "../icons/checkIcon";

const actionsArr = [
  {
    text: "Subscribe to Twitter.....",
    icon: <CheckIcon />,
  },
  {
    text: "Repost news.....",
    icon: <UpdateIcon />,
  },
  {
    text: "Buy 1 coins.....",
    icon: <UpdateIcon />,
  },
];

const ActionList = ({ item }: { item: any }) => (
  <div className="flex justify-between items-center border border-screen-green rounded-[5px]">
    <div className="flex items-center">
      <div
        className="w-[11px] h-[13px] mx-3"
        style={{
          border: "10px solid transparent",
          borderLeft: "10px solid #30B502",
        }}
      ></div>
      <p className="">{item.text}</p>
    </div>
    <div className="px-4">{item.icon}</div>
  </div>
);

const ProjectComponent = ({ data }: { data: any }) => {
  const { name, img, quests, tag, description } = data;

  return (
    <div className="w-full font-azeret flex flex-col justify-center items-center">
      <div className="border border-screen-green text-screen-green rounded-2xl px-[30px] py-[30px] mb-[30px] mx-3">
        <div className="flex mb-3">
          <div className="w-2/3 flex space-x-3">
            <div className="border border-screen-green">
              <Image src={img} height={70} width={70} alt="logo" />
            </div>
            <div className="uppercase">
              <h1 className="font-semibold text-[27px]">{name}</h1>
              <p className="text-[22px] -mt-2">{`#${tag}`}</p>
            </div>
          </div>

          <div className="w-1/3 flex flex-col items-end">
            <div className="flex border border-screen-green p-1 space-x-1">
              {quests.map((item: any) => {
                const color = item.completed ? "bg-screen-green" : "";
                return (
                  <div
                    key={item.label}
                    className={clsx("h-[18px] w-[11px]", color)}
                  ></div>
                );
              })}
            </div>
            <p className="uppercase">progress</p>
          </div>
        </div>
        <p className="leading-4 font-light">{description}</p>
      </div>

      <div className="space-y-2.5 w-full text-screen-green font-semibold text-[22px]">
        {actionsArr.map((item, i) => (
          <ActionList key={i} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ProjectComponent;
