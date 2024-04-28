import React from "react";

const arrow = (
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

const repeaterText = (num: number, text: string) => {
  let array = Array.from({ length: num }, (_, i) => i);

  return array.map((item) => (
    <div key={item} className="flex items-center">
      <h1
        className={`text-8xl font-bold ${
          item % 2 !== 0
            ? "text-stroke-1 text-stroke-fronk-dark text-stroke-fill-fronk-orange"
            : "text-fronk-dark"
        }`}
      >
        {text}
      </h1>
      {arrow}
    </div>
  ));
};

const BlocksDivider = ({ text }: { text: string }) => {
  return (
    <div className="my-14 px-5  bg-fronk-orange ">
      <div className="flex items-center text-fronk-dark overflow-hidden whitespace-nowrap">
        {/* <h1 className="text-8xl font-bold">{text}</h1> */}
        {repeaterText(5, text)}
      </div>
    </div>
  );
};

export default BlocksDivider;
