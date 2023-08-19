import React, { FC } from "react";
import { SectionWrapper } from "src/components/Layouts/SectionWrapper";
import { Heading } from "src/components/Heading";
import { Products } from "src/components/Products";
import { GRAIN_PRODUCTS } from "./constants";

const HEADING = "Наша продукція";

export const GrainProducts: FC = () => (
  <SectionWrapper id="products" className="mt-12 md:mt-16 lg:mt-25">
    <Heading className="text-center">{HEADING}</Heading>
    <Products items={GRAIN_PRODUCTS} />
  </SectionWrapper>
);
