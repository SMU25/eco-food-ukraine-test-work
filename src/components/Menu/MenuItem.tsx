import React, { FC } from "react";
import { createAnchorHref } from "src/utils/anchors";
import { IMenuItem } from "./types";

export const MenuItem: FC<Omit<IMenuItem, "id">> = ({ name, href }) => (
  <li className="ml-8 text-xl leading-1.28 font-semibold transition-all duration-200 hover:text-yellow-400 hover:scale-110">
    <a href={createAnchorHref(href)}>{name}</a>
  </li>
);
