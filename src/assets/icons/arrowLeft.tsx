import React, { FC } from "react";
import { IIconsProps } from "@/assets/types";

export const ArrowLeft: FC<IIconsProps> = ({ width, height, className }) => {
  return (
    <div className={className}>
      <svg
        width={width ?? "800px"}
        height={height ?? "800px"}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.0003 12.0001V14.6701C18.0003 17.9801 15.6503 19.3401 12.7803 17.6801L10.4703 16.3401L8.16031 15.0001C5.29031 13.3401 5.29031 10.6301 8.16031 8.97005L10.4703 7.63005L12.7803 6.29005C15.6503 4.66005 18.0003 6.01005 18.0003 9.33005V12.0001Z"
          stroke={"currentColor" || "#292D32"}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};
