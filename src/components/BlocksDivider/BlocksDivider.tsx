import React from "react";
import { useTranslation } from "react-i18next";

const LongArrow = () => {
  return (
    <svg
      width="97"
      height="57"
      viewBox="0 0 97 57"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-20 h-14 mx-8"
    >
      <path
        d="M67.635 1L94.9504 28.3154L67.9248 55.341"
        stroke="currentColor"
        strokeWidth="2.12657"
      />
      <path d="M0 28.2568H95" stroke="currentColor" strokeWidth="2.12657" />
    </svg>
  );
};

const Divider = ({ num, text }: { num: number; text: string }) => {
  let array = Array.from({ length: num }, (_, i) => i);
  const { t }: { t: any } = useTranslation();

  return array.map((item) => (
    <div
      key={item}
      className="flex items-center even:text-stroke-1 even:text-stroke-fronk-dark even:text-stroke-fill-fronk-orange odd:text-fronk-dark"
    >
      <h1 className="text-8xl font-bold">{t(text)}</h1>
      <LongArrow />
    </div>
  ));
};

const BlocksDivider = ({ text }: { text: string }) => {
  return (
    <div className="my-14 px-5  bg-fronk-orange ">
      <div className="flex items-center text-fronk-dark overflow-hidden whitespace-nowrap">
        <Divider num={3} text={text} />
      </div>
    </div>
  );
};

export default BlocksDivider;
