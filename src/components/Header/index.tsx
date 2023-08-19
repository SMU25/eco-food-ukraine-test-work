import React, { useState } from "react";
import { MENU_ITEMS } from "./constants";
import { Heading } from "../Heading";
import { TagsHeading } from "../Heading/types";
import { Menu } from "../Menu";
import { BurgetButton } from "../Button/BurgetButton";

const HEADING = "Eco Food Ukraine";
const HOMEPAGE_ANCHOR_HREF = "#home";

export const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState();

  return (
    <header className="sticky top-0 w-full bg-white z-50">
      <div className="container flex justify-between items-center gl:items-baseline default:bg-white pt-3 lg:pt-5 gl:pt-10 pb-3 lg:pb-5">
        <a
          className="transition-all duration-200 hover:text-yellow-400 hover:scale-105"
          href={HOMEPAGE_ANCHOR_HREF}
        >
          <Heading className="whitespace-nowrap" tagHeading={TagsHeading.H1}>
            {HEADING}
          </Heading>
        </a>
        <nav className="relative ml-6">
          <BurgetButton isOpen={isOpenMenu} setIsOpen={setIsOpenMenu} />
          <Menu isOpen={isOpenMenu} menuItems={MENU_ITEMS} />
        </nav>
      </div>
    </header>
  );
};
