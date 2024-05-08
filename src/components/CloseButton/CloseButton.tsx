import React from "react";
import clsx from "clsx";

const CloseButton = ({
  handleClick,
  size = 16,
}: {
  handleClick?: any;
  size?: number;
}) => {
  const crossSize = `h-${size}`;

  return (
    <button
      data-name="close-btn"
      className={clsx("m-1 hover:bg-white/10", crossSize)}
      onClick={handleClick}
    >
      <svg
        data-name="close-btn"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1"
        stroke="currentColor"
        className="w-full h-full"
      >
        <path d="M6 18 18 6M6 6l12 12" />
      </svg>
    </button>
  );
};

export default CloseButton;
