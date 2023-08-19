import React, { FC } from "react";
import { SectionWrapper } from "src/components/Layouts/SectionWrapper";
import { FeedbackForm } from "./FeedbackForm";
import { Contacts } from "./Contacts";

export const ContactUs: FC = () => (
  <SectionWrapper
    id="feedback"
    className="flex flex-col gl:flex-row justify-between items-start mt-12 md:mt-16 lg:mt-25"
  >
    <FeedbackForm />
    <Contacts />
  </SectionWrapper>
);
