import React, { FC, ReactNode } from "react";
import cn from "classnames";

interface Props {
  children: ReactNode;
  id?: string;
  className?: string;
}

export const SectionWrapper: FC<Props> = ({ children, id, className }) => (
  <section id={id} className="-mt-15 xl:-mt-24 pt-15 xl:pt-24">
    <div className={cn("container", className)}>{children}</div>
  </section>
);
