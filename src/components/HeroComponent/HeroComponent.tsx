import React, { useEffect, useState } from "react";
import Image from "next/image";
import imgSrcCover from "../../../public/images/fronk/Card_pass.png";
import clsx from "clsx";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";
import { DirectionType } from "@/interfaces";

const ArrowButton = ({
  direction = "right",
}: {
  direction?: DirectionType;
}) => {
  const [className, setClassName] = useState("rotate-0");

  useEffect(() => {
    if (direction === "right") setClassName("rotate-0");
    if (direction === "down") setClassName("rotate-90");
    if (direction === "left") setClassName("rotate-180");
    if (direction === "up") setClassName("-rotate-90");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={clsx("text-white font-light cursor-pointer", className)}>
      <svg
        width="26"
        height="44"
        viewBox="0 0 26 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.2322 21.7678L0 40L3.53553 43.5355L23.5355 23.5355L25.3033 21.7678L23.5355 20L3.53553 0L4.34835e-07 3.53553L18.2322 21.7678Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

const CrossButton = () => (
  <div className="text-white p-3">
    <svg
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.77404 15.5605L0.713379 16.6212L2.8347 18.7425L3.89536 17.6819L9.72801 11.8492L15.5607 17.6819L16.6213 18.7425L18.7426 16.6212L17.682 15.5605L11.8493 9.72789L17.6819 3.89536L18.7425 2.8347L16.6212 0.713379L15.5605 1.77404L9.72801 7.60657L3.89547 1.77404L2.83481 0.713379L0.713494 2.8347L1.77415 3.89536L7.60669 9.72789L1.77404 15.5605Z"
        fill="white"
      />
    </svg>
  </div>
);

const RowsHeader = ({ children }: { children: string }) => {
  const arr: string[] = children.split(" ");
  return (
    <div className="flex flex-col pt-24">
      {arr.map((item) => (
        <p
          key={item}
          className="text-[16.875rem] -mt-52 font-extrabold text-left"
        >
          {item}
        </p>
      ))}
    </div>
  );
};

const HeroComponent = () => {
  const { t }: { t: any } = useTranslation();

  return (
    <div
      data-name="hero"
      className="relative hero bg-fronk-orange"
      style={{
        background:
          // "url('/images/fronk/Card_pass.png') right/48% no-repeat, linear-gradient(to right, rgba(227, 113, 8, 1), rgba(82, 39, 0, 0.7))",
          "linear-gradient(to right, rgba(227, 113, 8, 1), rgba(82, 39, 0, 0.7))",
      }}
    >
      <div className="relative flex w-full overflow-hidden pt-8 pl-10">
        <div className="flex flex-col items-start">
          <RowsHeader>{t("Fronk Ticket NFT")}</RowsHeader>

          <div className="font-archivo flex justify-center items-start -mt-10 mb-14 border border-white p-2 pl-5">
            <h1 className="text-[2.7rem]">{t("Join the mint list")}</h1>
            <ArrowUpRightIcon className="h-6 w-6 mx-2 my-1" />
          </div>
        </div>

        <Image
          src={imgSrcCover}
          width={642}
          alt="img"
          className="hidden md:block absolute -right-3 inset-y-0 z-0 3xl:hidden"
        />
        <div className="hover:bg-black/50 px-4 py-10 absolute flex items-center justify-center right-0 bottom-0">
          <ArrowButton direction="left" />
          <CrossButton />
          <ArrowButton />
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
