import React, { FC } from "react";
import { createAnchorHref } from "src/utils/anchors";
import { IMenuItem } from "./types";

export const MenuItem: FC<Omit<IMenuItem, "id">> = ({ name, href }) => (
  <li className="gl:ml-8 py-1.5 gl:px-0 text-lg gl:text-base xl:text-xl leading-1.28 font-semibold transition-all duration-200 hover:text-yellow-400 hover:scale-110">
    <a href={createAnchorHref(href)}>{name}</a>
  </li>
);
