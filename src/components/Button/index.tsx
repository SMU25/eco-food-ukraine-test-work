import React, { FC, ReactNode } from "react";
import cn from "classnames";
import { BUTTON_STYLE_VARIANTS } from "./constants";
import { HandleClickButton } from "src/types";
import { ReactComponent as DoneIcon } from "src/assets/icons/done.svg";
import { ButtonVariants } from "./types";
import { Loader } from "../Loader";

const DONE_ICON_SIZE = 20;

const DONE_TEXT = "Готово";

interface Props {
  children: ReactNode;
  isLoading?: boolean;
  variant?: ButtonVariants;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: HandleClickButton;
  isDisabled?: boolean;
  isShownDoneIcon?: boolean;
}

export const Button: FC<Props> = ({
  children,
  isLoading,
  variant = ButtonVariants.PRIMARY,
  className,
  type,
  onClick,
  isDisabled,
  isShownDoneIcon,
}) => {
  const isShownDone = !isLoading && isShownDoneIcon;

  return (
    <button
      className={cn(
        "flex justify-center items-center w-full px-5 text-sm leading-normal rounded-21 truncate transition ease-in-out duration-300 active:duration-150 disabled:bg-red-400 active:translate-y-1 disabled:text-white disabled:active:translate-y-0",
        BUTTON_STYLE_VARIANTS[variant],
        className
      )}
      type={type}
      onClick={onClick}
      disabled={isDisabled}
    >
      {isLoading && <Loader className="mr-2.5" />}
      {isShownDone && (
        <DoneIcon
          className="mr-2.5"
          width={DONE_ICON_SIZE}
          height={DONE_ICON_SIZE}
        />
      )}
      {isShownDone ? DONE_TEXT : children}
    </button>
  );
};
