import React, { FC } from "react";
import { ILink } from "./types";

export const ContactItem: FC<ILink> = ({ label, href, isOpenNewTab }) => (
  <li className="ml-1 font-open-sans transition-all duration-150 hover:text-yellow-500">
    <a href={href} target={isOpenNewTab ? "_blank" : "_self"} rel="noreferrer">
      {label || href}
    </a>
  </li>
);
