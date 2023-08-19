import React, { FC } from "react";
import { IProduct } from "./types";
import { Heading } from "../Heading";
import { TagsHeading } from "../Heading/types";
import { ContactItem } from "../ContactItem";

export const ProductCard: FC<Omit<IProduct, "id">> = ({
  title,
  description,
  price,
  img,
  contacts,
}) => (
  <div className="relative flex flex-col lg:flex-row items-start py-10 first:pt-0 xl:first:text-xl after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:max-w-calc-full-minus-18.5 after:w-full after:h-0.5 after:bg-yellow-light">
    <div className="lg:max-w-60.25 w-full">
      <img
        className="min-h-58 object-cover mx-auto sm:mx-0"
        src={img}
        alt={title}
      />
    </div>

    <div className="flex flex-col justify-between w-full lg:min-h-58 mt-10 lg:mt-0 lg:ml-13">
      <div>
        <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-start">
          <Heading className="lg:truncate" tagHeading={TagsHeading.H4}>
            {title}
          </Heading>
          <div className="mt-1 xs:mt-1.5 sm:mt-0 sm:ml-4 text-center uppercase text-sm xs:text-base gl:text-lg xl:text-2xl font-extrabold">
            {price}
          </div>
        </div>
        {description && (
          <p className="lg:max-w-131.25 mt-2 sm:mt-4 lg:mt-7.5 text-justify xs:text-start text-sm md:text-base">
            {description}
          </p>
        )}
      </div>
      {contacts && (
        <div className="flex flex-col xs:flex-row items-start xs:items-end xl:items-center w-full mt-2 sm:mt-4 lg:mt-7.5 text-sm md:text-base">
          <p className="max-w-30 md:max-w-41 xl:max-w-none">{contacts.title}</p>
          <ul className="flex flex-col xs:flex-row flex-wrap xl:flex-nowrap items-baseline">
            {contacts.links.map((link) => (
              <ContactItem
                key={link.href}
                className="ml-1 hover:text-yellow-500"
                {...link}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  </div>
);
