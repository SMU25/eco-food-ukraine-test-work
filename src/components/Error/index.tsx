import React, { FC, ReactNode } from "react";
import cn from "classnames";

interface Props {
  children: ReactNode;
  className?: string;
  showError: boolean;
}

export const Error: FC<Props> = ({ children, className, showError }) => {
  if (!showError) return null;

  return (
    <div className={cn("absolute -bottom-6 left-4 text-red-dark", className)}>
      {children}
    </div>
  );
};
