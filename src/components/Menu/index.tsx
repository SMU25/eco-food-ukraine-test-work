import React, { FC } from "react";
import { MenuItem } from "./MenuItem";
import { IMenuItem } from "./types";

interface Props {
  menuItems: IMenuItem[];
}

export const Menu: FC<Props> = ({ menuItems }) => (
  <ul className="flex items-center w-full">
    {menuItems.map(({ id, ...item }) => (
      <MenuItem key={id} {...item} />
    ))}
  </ul>
);
