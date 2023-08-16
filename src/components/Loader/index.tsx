import React, { FC } from "react";
import cn from "classnames";
import { LOADER_SIZES } from "./constants";
import { SizeVariants } from "./types";

interface Props {
  size?: SizeVariants;
  className?: string;
}

export const Loader: FC<Props> = ({ size = SizeVariants.M, className }) => (
  <div
    className={cn(
      "mx-auto border-2 border-gray-lighter border-t-black-dark rounded-full animate-spin",
      LOADER_SIZES[size],
      className
    )}
  />
);
