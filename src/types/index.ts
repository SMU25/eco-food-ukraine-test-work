import { MouseEventHandler } from "react";

export type HandleClickButton =
  | MouseEventHandler<HTMLButtonElement>
  | VoidFunction;
