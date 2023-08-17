import React, { FC } from "react";
import { AboutUs } from "./AboutUs";
import { CornBanner } from "./CornBanner";
import { GrainProducts } from "./GrainProducts";

const Home: FC = () => (
  <>
    <CornBanner />
    <AboutUs />
    <GrainProducts />
  </>
);

export default Home;
