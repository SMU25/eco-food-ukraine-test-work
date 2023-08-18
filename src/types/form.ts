import { FC } from "react";
import { TextFieldVariants } from "src/components/FormField/types";

export interface IFormField {
  id?: string;
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
  className?: string;
  containerClassName?: string;
  labelClassName?: string;
  variant?: TextFieldVariants;
}

export interface IRenderFormField extends IFormField {
  component: FC<IFormField>;
}

export interface IFeedbackFormValues {
  firstName: string;
  lastName: string;
  email: string;
  file: string;
  message: string;
}
