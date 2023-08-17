import React, { FC } from "react";
import { Banner } from "src/components/Banner";

const HEADING = "Кукурудза";
const DESCRIPTION = {
  boldText: "Щорічний експорт зернових культур 100 000 тонн.",
  normalText: "Для продовольчих, кормових цілей та на експорт",
};
const BUTTON_NAME_BUY_NOW = "Купити зараз";

export const CornBanner: FC = () => (
  <Banner
    className="bg-cornBanner pt-55 pb-57"
    title={HEADING}
    desciption={DESCRIPTION}
    buttonName={BUTTON_NAME_BUY_NOW}
  />
);
