import React from "react";
import { MENU_ITEMS } from "./constants";
import { Heading } from "../Heading";
import { TagsHeading } from "../Heading/types";
import { Menu } from "../Menu";

const HEADING = "Eco Food Ukraine";
const HOMEPAGE_ANCHOR_HREF = "#home";

export const Header = () => (
  <header className="w-full bg-white">
    <div className="container flex justify-between items-baseline pt-10 pb-5">
      <a
        className="transition-all duration-200 hover:text-yellow-400 hover:scale-105"
        href={HOMEPAGE_ANCHOR_HREF}
      >
        <Heading className="min-w-87" tagHeading={TagsHeading.H1}>
          {HEADING}
        </Heading>
      </a>
      <nav className="ml-10">
        <Menu menuItems={MENU_ITEMS} />
      </nav>
    </div>
  </header>
);
