import React, { FC } from "react";
import { IIconsProps } from "@/assets/types";

export const SearchIcon: FC<IIconsProps> = ({
  width,
  height,
  className,
  ...props
}) => {
  return (
    <div className={className} {...props}>
      <svg
        width={width ?? "800px"}
        height={height ?? "800px"}
        viewBox="0 0 1024 1024"
        fill={"currentColor" || "#000"}
        version="1.1"
      >
        <path
          d="M359.876 719.926c-96.136 0-186.524-37.446-254.51-105.432-140.33-140.33-140.33-368.69 0-509.02C173.354 37.488 263.742 0.042 359.876 0.042c96.136 0 186.526 37.446 254.51 105.432 68.002 67.986 105.448 158.374 105.448 254.51 0.016 96.136-37.43 186.524-105.416 254.51-68 67.986-158.388 105.432-254.542 105.432z m0-703.886c-91.872 0-178.244 35.79-243.2 100.746-134.098 134.096-134.098 352.302 0 486.398 64.956 64.956 151.328 100.746 243.2 100.746 91.872 0 178.26-35.792 243.232-100.746 64.954-64.97 100.744-151.328 100.728-243.2 0-91.872-35.792-178.244-100.76-243.2-64.954-64.954-151.326-100.744-243.2-100.744z"
          fill=""
        />
        <path
          d="M359.876 687.9c-87.59 0-169.95-34.102-231.888-96.026C66.064 529.95 31.96 447.608 31.96 360c0.016-87.608 34.12-169.95 96.06-231.874 61.924-61.942 144.282-96.058 231.888-96.058 87.592 0 169.934 34.102 231.86 96.028 127.832 127.864 127.832 335.898 0.032 463.78-61.958 61.922-144.316 96.024-231.924 96.024z m0.032-639.836c-83.342 0-161.668 32.448-220.578 91.372C80.42 198.346 47.974 276.674 47.958 360c0 83.326 32.43 161.654 91.34 220.562 58.91 58.894 137.252 91.342 220.578 91.342 83.328 0 161.686-32.448 220.612-91.342 121.568-121.63 121.552-319.542-0.032-441.158-58.894-58.892-137.22-91.34-220.548-91.34z"
          fill=""
        />
        <path
          d="M103.93 368.014c-4.42 0-8-3.578-8-7.998 0-145.532 118.414-263.946 263.946-263.946 4.422 0 8 3.578 8 7.998a7.994 7.994 0 0 1-8 7.998c-136.72 0-247.948 111.228-247.948 247.95a7.994 7.994 0 0 1-7.998 7.998zM670.344 734.968a7.972 7.972 0 0 1-5.654-2.344L591.8 659.734a7.996 7.996 0 1 1 11.31-11.308L676 721.316a7.994 7.994 0 0 1-5.656 13.652zM726.894 678.45a7.972 7.972 0 0 1-5.654-2.344l-72.89-72.922a7.996 7.996 0 1 1 11.31-11.308l72.89 72.922a7.994 7.994 0 0 1-5.656 13.652z"
          fill=""
        />
        <path
          d="M659.036 746.31a7.996 7.996 0 0 1-5.656-13.654l79.172-79.17a7.996 7.996 0 1 1 11.308 11.31l-79.17 79.17a7.97 7.97 0 0 1-5.654 2.344z"
          fill=""
        />
        <path
          d="M998.402 927.32a7.976 7.976 0 0 1-5.656-2.344l-260.196-260.18a7.996 7.996 0 1 1 11.308-11.31l260.198 260.18a7.996 7.996 0 0 1-5.654 13.654zM920.292 1007.522a7.974 7.974 0 0 1-5.656-2.342L653.378 743.966a7.996 7.996 0 1 1 11.31-11.31l261.258 261.212a7.996 7.996 0 0 1-5.654 13.654z"
          fill=""
        />
        <path
          d="M959.91 1023.958c-17.106 0-33.182-6.672-45.274-18.778a7.996 7.996 0 1 1 11.31-11.31c9.076 9.092 21.136 14.09 33.962 14.09h0.032c12.808-0.016 24.822-4.998 33.852-14.058 9.092-9.076 14.09-21.122 14.09-33.932 0-12.824-4.998-24.884-14.074-33.96a7.996 7.996 0 1 1 11.31-11.31c12.108 12.108 18.762 28.182 18.762 45.272s-6.654 33.15-18.762 45.242c-12.044 12.074-28.088 18.73-45.178 18.746l-0.03-0.002z"
          fill=""
        />
        <path
          d="M976.844 950.97a7.974 7.974 0 0 1-5.656-2.342L732.55 710.006a7.996 7.996 0 1 1 11.308-11.31L982.496 937.32a7.996 7.996 0 0 1-5.652 13.65zM519.844 368.108H199.91a7.994 7.994 0 0 1-7.998-7.998v-31.994c0-4.42 3.578-8 7.998-8h319.934c4.422 0 8 3.578 8 8v31.994a7.994 7.994 0 0 1-8 7.998z m-311.934-15.996h303.936v-15.998H207.91v15.998z"
          fill=""
        />
        <path
          d="M247.884 528.074a7.992 7.992 0 0 1-7.826-6.436l-31.994-159.966a7.976 7.976 0 0 1 6.28-9.404c4.154-0.876 8.53 1.922 9.404 6.28l31.992 159.966a7.976 7.976 0 0 1-6.28 9.404 7.524 7.524 0 0 1-1.576 0.156z"
          fill=""
        />
        <path
          d="M471.854 528.074H247.9c-4.42 0-7.998-3.578-7.998-7.998s3.578-7.998 7.998-7.998h223.954c4.42 0 7.998 3.578 7.998 7.998s-3.576 7.998-7.998 7.998z"
          fill=""
        />
        <path
          d="M471.87 528.074c-0.532 0-1.062-0.046-1.578-0.156a7.978 7.978 0 0 1-6.28-9.404l31.994-159.966c0.876-4.358 5.232-7.138 9.404-6.28a7.978 7.978 0 0 1 6.28 9.404l-31.994 159.966a7.99 7.99 0 0 1-7.826 6.436zM359.876 480.084a7.994 7.994 0 0 1-7.998-7.998V408.1a7.994 7.994 0 0 1 7.998-7.998c4.422 0 8 3.578 8 7.998v63.986a7.994 7.994 0 0 1-8 7.998zM407.868 480.084a7.994 7.994 0 0 1-7.998-7.998V408.1a7.994 7.994 0 0 1 7.998-7.998 7.994 7.994 0 0 1 7.998 7.998v63.986a7.992 7.992 0 0 1-7.998 7.998zM311.888 480.084c-4.42 0-8-3.576-8-7.998V408.1c0-4.42 3.578-7.998 8-7.998s7.998 3.578 7.998 7.998v63.986a7.994 7.994 0 0 1-7.998 7.998zM263.898 336.114a7.996 7.996 0 0 1-5.656-13.652l79.984-79.984a7.996 7.996 0 1 1 11.31 11.31l-79.984 79.984a7.97 7.97 0 0 1-5.654 2.342zM455.858 336.114a7.97 7.97 0 0 1-5.654-2.342l-79.984-79.984a7.996 7.996 0 1 1 11.31-11.31l79.984 79.984a7.996 7.996 0 0 1-5.656 13.652z"
          fill=""
        />
      </svg>
    </div>
  );
};
