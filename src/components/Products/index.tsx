import React, { FC } from "react";
import { ProductCard } from "./ProductCard";
import { IProduct } from "./types";

interface Props {
  items: IProduct[];
}

export const Products: FC<Props> = ({ items }) => {
  if (!items) return null;

  return (
    <div className="bg-white mt-3 py-18 px-12">
      {items.map(({ id, ...item }) => (
        <ProductCard key={id} {...item} />
      ))}
    </div>
  );
};
