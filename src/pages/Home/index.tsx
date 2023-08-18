import React, { FC } from "react";
import { AboutUs } from "./AboutUs";
import { CornBanner } from "./CornBanner";
import { GrainProducts } from "./GrainProducts";
import { Certificates } from "./Certificates";
import { ContactUs } from "./ContactUs";

const Home: FC = () => (
  <>
    <CornBanner />
    <AboutUs />
    <GrainProducts />
    <Certificates />
    <ContactUs />
  </>
);

export default Home;
