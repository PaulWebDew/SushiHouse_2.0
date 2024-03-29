import { FC } from "react";
import { IIconsProps } from "../types.ts";

export const ArrowRight: FC<IIconsProps> = ({
  width,
  height,
  className,
  onClick,
}) => {
  return (
    <div className={className} onClick={onClick}>
      <svg
        width={width ?? "800px"}
        height={height ?? "800px"}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 12.0002V9.33017C6 6.02017 8.35 4.66017 11.22 6.32017L13.53 7.66017L15.84 9.00017C18.71 10.6602 18.71 13.3702 15.84 15.0302L13.53 16.3702L11.22 17.7102C8.35 19.3402 6 17.9902 6 14.6702V12.0002Z"
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
