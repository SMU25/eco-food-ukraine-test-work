import React, { FC } from "react";
import { CornBanner } from "./CornBanner";
import { AboutUs } from "./AboutUs";
import { GrainProducts } from "./GrainProducts";
import { Certificates } from "./Certificates";
import { ContactUs } from "./ContactUs";

const Home: FC = () => (
  <main>
    <CornBanner />
    <AboutUs />
    <GrainProducts />
    <Certificates />
    <ContactUs />
  </main>
);

export default Home;
