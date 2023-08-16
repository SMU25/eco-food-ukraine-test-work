import React from "react";
import { SectionWrapper } from "src/components/Layouts/SectionWrapper";
import { Heading } from "src/components/Heading";
import { TagsHeading } from "src/components/Heading/types";
import { Button } from "src/components/Button";

const HEADING = "Кукурудза";
const DESCRIPTION_BOLD_TEXT = "Щорічний експорт зернових культур 100 000 тонн.";
const DESCRIPTION_NORMAL_TEXT =
  "Для продовольчих, кормових цілей та на експорт";
const BUTTON_NAME_BUY_NOW = "Купити зараз";

export const Banner = () => (
  <SectionWrapper className="bg-cornBanner bg-no-repeat bg-center bg-cover pt-55 pb-57">
    <div className="max-w-127.5">
      <Heading className="text-white" tagHeading={TagsHeading.H2}>
        {HEADING}
      </Heading>
      <p className="mt-2 text-white text-2xl leading-normal">
        <span className="font-semibold">{DESCRIPTION_BOLD_TEXT}</span>
        <span> {DESCRIPTION_NORMAL_TEXT}</span>
      </p>
      <Button className="max-w-68.75 mt-20.5 pt-3.5 pb-4.25 default:text-25 default:rounded-32.5">
        {BUTTON_NAME_BUY_NOW}
      </Button>
    </div>
  </SectionWrapper>
);
