import React, { FC, ReactNode } from "react";
import cn from "classnames";
import { HEADING_STYLE_VARIANTS } from "./constants";
import { TagsHeading } from "./types";

interface Props {
  children: ReactNode;
  className?: string;
  tagHeading?: TagsHeading;
}

export const Heading: FC<Props> = ({
  children,
  className,
  tagHeading = TagsHeading.H3,
}) => {
  const Heading = tagHeading;

  return (
    <Heading
      className={cn(
        "uppercase leading-1.28 font-extrabold",
        HEADING_STYLE_VARIANTS[tagHeading],
        className
      )}
    >
      {children}
    </Heading>
  );
};
