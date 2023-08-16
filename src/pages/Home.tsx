import React, { FC } from "react";
import { AboutUs } from "src/page-components/AboutUs";
import { Banner } from "src/page-components/Banner";

const Home: FC = () => (
  <>
    <Banner />
    <AboutUs />
  </>
);

export default Home;
