import React, { FC } from "react";
import { ContactItem } from "./ContactItem";
import { IProduct } from "./types";
import { Heading } from "../Heading";
import { TagsHeading } from "../Heading/types";

export const ProductCard: FC<Omit<IProduct, "id">> = ({
  title,
  description,
  price,
  img,
  contacts,
}) => (
  <div className="relative flex items-start py-10 first:pt-0 first:text-xl after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:max-w-calc-full-minus-18.5 after:w-full after:h-0.5 after:bg-yellow-light">
    <div className="max-w-60.25 w-full">
      <img className="max-h-58 min-h-58 object-cover" src={img} alt={title} />
    </div>

    <div className="flex flex-col justify-between w-full min-h-58 max-h-58 ml-11">
      <div className="flex justify-between items-start">
        <div>
          <Heading tagHeading={TagsHeading.H4}>{title}</Heading>
          {description && <p className="max-w-131.25 mt-7.5">{description}</p>}
        </div>
        <div className="uppercase text-2xl font-extrabold">{price}</div>
      </div>
      {contacts && (
        <div className="flex items-center w-full mt-7.5">
          <p>{contacts.title}</p>
          <ul className="flex items-baseline">
            {contacts.links.map(({ ...link }) => (
              <ContactItem key={link.href} {...link} />
            ))}
          </ul>
        </div>
      )}
    </div>
  </div>
);
