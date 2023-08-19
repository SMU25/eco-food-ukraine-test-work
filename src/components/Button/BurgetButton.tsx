import React, { FC } from "react";
import cn from "classnames";

const DEFAULT_CLASSNAME_ITEM =
  "absolute left-1.5 w-7 h-0.5 bg-black transition-all duration-300";

interface Props {
  className?: string;
  isOpen?: boolean;
  setIsOpen: (isOpen: boolean | ((isOpen: boolean) => boolean)) => void;
}

export const BurgetButton: FC<Props> = ({ className, isOpen, setIsOpen }) => {
  const toggleIsOpen = () => setIsOpen((prev) => !prev);

  return (
    <button
      className={cn(
        "relative top-1/2 gl:hidden w-10 h-10 p-2.5 bg-gray-300 rounded-10 outline-none",
        className
      )}
      onClick={toggleIsOpen}
    >
      <div
        className={cn("top-2", DEFAULT_CLASSNAME_ITEM, {
          "!top-4.5 rotate-45": isOpen,
        })}
      />
      <div
        className={cn("top-4.5", DEFAULT_CLASSNAME_ITEM, {
          "translate-x-full opacity-0": isOpen,
        })}
      />
      <div
        className={cn("top-7", DEFAULT_CLASSNAME_ITEM, {
          "!top-4.5 rotate-315": isOpen,
        })}
      />
    </button>
  );
};
