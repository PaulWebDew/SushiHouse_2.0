import React from "react";
export interface IIconsProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  width?: number;
  height?: number;
  className?: string;
}
