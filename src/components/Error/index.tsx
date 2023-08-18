import React, { FC, ReactNode } from "react";
import cn from "classnames";

interface Props {
  children: ReactNode;
  className?: string;
  isShownError: boolean;
}

export const Error: FC<Props> = ({ children, className, isShownError }) => {
  if (!isShownError) return null;

  return (
    <div
      className={cn(
        "absolute -bottom-6 left-0 text-red-400 text-sm",
        className
      )}
    >
      {children}
    </div>
  );
};
