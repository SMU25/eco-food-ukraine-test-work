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
  id?: string;
  className?: string;
  title: string;
  desciption: Description;
  buttonName?: string;
  onClick?: HandleClickButton;
}

export const Banner: FC<Props> = ({
  id,
  className,
  title,
  desciption,
  buttonName,
  onClick,
}) => (
  <SectionWrapper
    id={id}
    className={cn("bg-no-repeat bg-right sm:bg-center bg-cover", className)}
  >
    <div>
      <Heading className="text-white" tagHeading={TagsHeading.H2}>
        {title}
      </Heading>
      <p className="max-w-xs md:max-w-127.5 mt-1.5 sm:mt-2 md:mt-10 text-white text-sm sm:text-base md:text-xl gl:text-2xl leading-normal">
        <span className="font-semibold">{desciption.boldText}</span>
        <span> {desciption.normalText}</span>
      </p>
      {buttonName && (
        <Button
          className="max-w-60 xs:max-w-68.75 mt-10 md:mt-15 lg:mt-26 mx-auto xs:mx-0 pt-2 xs:pt-3.5 pb-2 xs:pb-4.25 default:text-25 default:rounded-32.5"
          onClick={onClick}
        >
          {buttonName}
        </Button>
      )}
    </div>
  </SectionWrapper>
);
