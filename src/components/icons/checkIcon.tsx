import React from "react";

const CheckIcon = ({
  size = 23,
  color = "#30B501",
}: {
  size?: number;
  color?: string;
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 23 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.88948 12.9451L2.9914 7.93321L0.888184 10.0853L7.88948 17.2493L22.3279 2.47534L20.2247 0.323242L7.88948 12.9451Z"
        fill={color}
      />
    </svg>
  );
};

export default CheckIcon;
