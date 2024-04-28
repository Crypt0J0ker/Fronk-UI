import React from "react";
import Image from "next/image";
import imgSrcCover from "../../../public/images/fronk/Card_pass.png";
import {
  ArrowUpRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const dividerText = (text: string) => {
  return text.split(" ");
};

const arrow = (
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
);

const cross = (
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
);

const HeroComponent = () => {
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
          <div className="flex flex-col pt-24">
            {dividerText("Fronk Ticket NFT").map((item) => (
              <p
                key={item}
                className="text-[16.875rem] -mt-52 font-extrabold text-left"
              >
                {item}
              </p>
            ))}
          </div>

          <div className="font-archivo flex justify-center items-start -mt-10 mb-14 border border-white p-2 pl-5">
            <h1 className="text-[2.7rem]">Join the mint list</h1>
            <ArrowUpRightIcon className="h-6 w-6 mx-2 my-1" />
          </div>
        </div>

        <Image
          src={imgSrcCover}
          width={642}
          alt="img"
          // className="absolute right-0 top-0 z-0 3xl:hidden"
          className="hidden md:block absolute -right-3 inset-y-0 z-0 3xl:hidden"
        />
        <div
          data-name="control"
          className="hover:bg-black/50 px-4 py-10 absolute flex items-center justify-center right-0 bottom-0"
        >
          <a href="#" className="text-white font-light  rotate-180">
            {arrow}
          </a>
          <a href="#" className="text-white p-3">
            {cross}
          </a>
          <a href="#" className="text-white font-light">
            {arrow}
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
