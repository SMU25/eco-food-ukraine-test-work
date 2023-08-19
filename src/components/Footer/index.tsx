import React, { FC } from "react";

const COPYRIGHT_TEXT = "© Eco Food Ukraine Всі права захищені";

export const Footer: FC = () => (
  <footer className="default:bg-white mt-15 md:mt-28 lg:mt-39 py-3 md:py-5 lg:py-9.5">
    <div className="container default:bg-white">
      <p className="text-sm sm:text-base">{COPYRIGHT_TEXT}</p>
    </div>
  </footer>
);
