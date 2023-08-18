import React, { FC } from "react";
import cn from "classnames";
import { useField } from "formik";
import { IFormField } from "src/types/form";
import { FormField } from ".";
import {
  DEFAULT_CLASSNAME_TEXT_FIELD,
  TEXT_FIELD_STYLE_VARIANTS,
} from "./constants";
import { TextFieldVariants } from "./types";

export const Textarea: FC<Omit<IFormField, "type">> = ({
  className,
  containerClassName,
  labelClassName,
  id,
  label,
  placeholder,
  variant = TextFieldVariants.PRIMARY,
  ...props
}) => {
  const fieldId = id || props.name;

  const [{ value, ...field }, { error, touched }] = useField(fieldId);
  const isShownError = Boolean((touched || value) && error);

  return (
    <FormField
      className={containerClassName}
      labelClassName={labelClassName}
      label={label}
      labelFor={fieldId}
      isShownError={isShownError}
      error={error}
    >
      <textarea
        id={fieldId}
        className={cn(
          "min-h-46 pl-1 border",
          DEFAULT_CLASSNAME_TEXT_FIELD,
          TEXT_FIELD_STYLE_VARIANTS[variant],
          className,
          { "border-red-400": isShownError }
        )}
        value={value}
        placeholder={placeholder}
        {...props}
        {...field}
      />
    </FormField>
  );
};
