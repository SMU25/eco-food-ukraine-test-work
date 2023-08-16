import React, { FC, ReactNode } from "react";
import cn from "classnames";

interface Props {
  children: ReactNode;
  className?: string;
}

export const SectionWrapper: FC<Props> = ({ children, className }) => (
  <section className={cn("container", className)}>{children}</section>
);
