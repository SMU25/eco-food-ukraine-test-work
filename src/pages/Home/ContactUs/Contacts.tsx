import React, { FC } from "react";
import { Heading } from "src/components/Heading";
import { ContactItem } from "src/components/ContactItem";
import { CONTACT_LINKS } from "./constants";

const HEADING = "Контакти";

export const Contacts: FC = () => (
  <div className="w-full gl:w-auto bg-yellow-light mt-5 gl:mt-0 gl:ml-5 py-6 xs:py-10 xl:py-15 px-6 xs:px-10 gl:px-12 xl:px-16">
    <Heading>{HEADING}</Heading>
    <ul>
      {CONTACT_LINKS.map((link) => (
        <ContactItem
          key={link.href}
          className="mt-1 md:mt-2.5 text-base md:text-xl hover:text-yellow-600"
          {...link}
        />
      ))}
    </ul>
  </div>
);
