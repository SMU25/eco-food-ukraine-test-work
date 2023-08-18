import React, { FC } from "react";
import { SectionWrapper } from "src/components/Layouts/SectionWrapper";
import { Heading } from "src/components/Heading";
import trademarkImg from "src/assets/images/certificates/trademark.jpg";
import foodSafetyImg from "src/assets/images/certificates/food-safety.jpg";

const HEADING = "Сертифікати Якості";
const IMG_FOOD_SAFETY_ALT = "food safety certificate";

const TrademarkImg = () => (
  <div>
    <img src={trademarkImg} alt="trademark certificate" />
  </div>
);

export const Certificates: FC = () => (
  <SectionWrapper className="mt-33">
    <div className="default:bg-white pt-11 pb-19 px-10.5">
      <Heading className="text-center">{HEADING}</Heading>
      <div className="flex justify-center items-center mt-14">
        <TrademarkImg />
        <div className="mx-11">
          <img src={foodSafetyImg} alt={IMG_FOOD_SAFETY_ALT} />
        </div>
        <TrademarkImg />
      </div>
    </div>
  </SectionWrapper>
);
