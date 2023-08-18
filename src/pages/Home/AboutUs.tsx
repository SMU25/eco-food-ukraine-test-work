import React, { FC } from "react";
import { SectionWrapper } from "src/components/Layouts/SectionWrapper";
import { Heading } from "src/components/Heading";
import { Button } from "src/components/Button";
import { ReactComponent as ArrowRightIcon } from "src/assets/icons/arrow-rightsvg.svg";
import combineImg from "src/assets/images/about-us/combine.jpg";

const IMG_COMBINE = {
  SRC: combineImg,
  ALT: "combine",
};

const HEADING = "Про нас";
const DESCRIPTION = [
  `На базах господарств вирощуються профільні овочеві та зернобобові культури, 
  які постачаються на власні консервні заводи для переробки, та біржові культури. 
  Використання власної сировини є однією із умов, що гарантує високу якість та 
  безпечність овочевої консервації.`,

  `Починаючи з етапу підбору насіння, ми приділяємо значну увагу біологічним 
  характеристиками сортів, завдяки чому отримуємо сировину з високими смаковими 
  показниками. Чітке дотримання технології вирощування без застосування стимуляторів 
  росту, відповідальність при зборі урожаю та максимально короткий час транспортування 
  дають можливість зберегти свіжість та якість агропродукції.`,
];
const BUTTON_NAME_READ_MORE = "Читати далі";

export const AboutUs: FC = () => (
  <SectionWrapper className="flex items-center mt-22.5">
    <div className="max-w-177 w-full bg-white pt-7 pb-7.5 pr-31.5 pl-8.5">
      <Heading>{HEADING}</Heading>
      <div className="mt-4.5 text-justify">
        {DESCRIPTION.map((text, id) => (
          <p key={id} className="mt-10 first:mt-0">
            {text}
          </p>
        ))}
      </div>
      <Button className="flex justify-center items-center max-w-44.5 mt-8 pt-2.75 pb-3">
        <span>{BUTTON_NAME_READ_MORE}</span>
        <ArrowRightIcon className="ml-1.5" />
      </Button>
    </div>
    <img
      className="h-98.5 -ml-17"
      src={IMG_COMBINE.SRC}
      alt={IMG_COMBINE.ALT}
    />
  </SectionWrapper>
);
