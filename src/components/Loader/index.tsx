import React, { FC } from "react";
import cn from "classnames";
import { LOADER_SIZES } from "./constants";
import { SizeVariants } from "./types";

interface Props {
  size?: SizeVariants;
  className?: string;
}

export const Loader: FC<Props> = ({ size = SizeVariants.XS, className }) => (
  <div
    className={cn(
      "border-2 border-gray-light border-t-black rounded-full animate-spin",
      LOADER_SIZES[size],
      className
    )}
  />
);
