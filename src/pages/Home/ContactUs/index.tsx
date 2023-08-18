import React, { FC } from "react";
import { SectionWrapper } from "src/components/Layouts/SectionWrapper";
import { FeedbackForm } from "./FeedbackForm";
import { Contacts } from "./Contacts";

export const ContactUs: FC = () => (
  <SectionWrapper className="flex justify-between items-start mt-25">
    <FeedbackForm />
    <Contacts />
  </SectionWrapper>
);
