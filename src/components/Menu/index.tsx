import React, { FC } from "react";
import cn from "classnames";
import { MenuItem } from "./MenuItem";
import { IMenuItem } from "./types";

interface Props {
  isOpen: string;
  menuItems: IMenuItem[];
}

export const Menu: FC<Props> = ({ isOpen, menuItems }) => (
  <ul
    className={cn(
      "fixed top-16 lg:top-20 -right-96 gl:static flex flex-col gl:flex-row items-center w-57 gl:w-full bg-white py-5 gl:py-0 px-4 gl:px-0 text-center gl:text-start border-gray-300 border gl:border-0 rounded-10 gl:rounded-none invisible gl:visible opacity-0 gl:opacity-100 transition-all duration-200",
      {
        "default:right-5 sm:right-10 md:right-20 default:visible default:opacity-100":
          isOpen,
      }
    )}
  >
    {menuItems.map(({ id, ...item }) => (
      <MenuItem key={id} {...item} />
    ))}
  </ul>
);
