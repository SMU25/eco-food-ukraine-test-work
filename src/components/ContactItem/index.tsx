import React, { FC } from "react";
import cn from "classnames";
import { ILink } from "./types";

interface Props extends ILink {
  className?: string;
}

export const ContactItem: FC<Props> = ({
  className,
  label,
  href,
  isOpenNewTab,
}) => (
  <li className={cn("font-open-sans transition-all duration-150", className)}>
    <a href={href} target={isOpenNewTab ? "_blank" : "_self"} rel="noreferrer">
      {label || href}
    </a>
  </li>
);
