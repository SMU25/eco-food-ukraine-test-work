import React, { FC, ReactNode } from "react";
import cn from "classnames";
import { Error } from "../Error";

interface Props {
  children: ReactNode;
  className?: string;
  labelClassName?: string;
  label?: string;
  labelFor: string;
  isShownError?: boolean;
  error?: string;
}

export const FormField: FC<Props> = ({
  children,
  className,
  labelClassName,
  label,
  labelFor,
  isShownError,
  error,
}) => (
  <div className={cn("relative flex flex-col", className)}>
    {Boolean(label) && (
      <label
        htmlFor={labelFor}
        className={cn("text-sm xs:text-base md:text-xl", labelClassName)}
      >
        {label}
      </label>
    )}
    {children}
    <Error isShownError={isShownError}>{error}</Error>
  </div>
);
