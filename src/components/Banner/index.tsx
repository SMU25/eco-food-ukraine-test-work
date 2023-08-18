import React, { FC } from "react";
import cn from "classnames";
import { SectionWrapper } from "src/components/Layouts/SectionWrapper";
import { Heading } from "src/components/Heading";
import { TagsHeading } from "src/components/Heading/types";
import { Button } from "src/components/Button";
import { HandleClickButton } from "src/types";

interface Description {
  boldText: string;
  normalText: string;
}

interface Props {
  className?: string;
  title: string;
  desciption: Description;
  buttonName?: string;
  onClick?: HandleClickButton;
}

export const Banner: FC<Props> = ({
  className,
  title,
  desciption,
  buttonName,
  onClick,
}) => (
  <SectionWrapper className={cn("bg-no-repeat bg-center bg-cover", className)}>
    <div className="max-w-127.5">
      <Heading className="text-white" tagHeading={TagsHeading.H2}>
        {title}
      </Heading>
      <p className="mt-5 text-white text-2xl leading-normal">
        <span className="font-semibold">{desciption.boldText}</span>
        <span> {desciption.normalText}</span>
      </p>
      {buttonName && (
        <Button
          className="max-w-68.75 mt-20.5 pt-3.5 pb-4.25 default:text-25 default:rounded-32.5"
          onClick={onClick}
        >
          {buttonName}
        </Button>
      )}
    </div>
  </SectionWrapper>
);
