import React, { FC } from "react";
import { Heading } from "src/components/Heading";
import { ContactItem } from "src/components/ContactItem";
import { CONTACT_LINKS } from "./constants";

const HEADING = "Контакти";

export const Contacts: FC = () => (
  <div className="bg-yellow-light py-15 px-16">
    <Heading>{HEADING}</Heading>
    <ul>
      {CONTACT_LINKS.map((link) => (
        <ContactItem
          key={link.href}
          className="mt-2.5 text-xl hover:text-yellow-600"
          {...link}
        />
      ))}
    </ul>
  </div>
);
