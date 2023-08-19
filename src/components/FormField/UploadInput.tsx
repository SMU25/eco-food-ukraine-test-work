import React, {
  FC,
  ChangeEvent,
  MouseEvent,
  useState,
  useCallback,
  useRef,
} from "react";
import cn from "classnames";
import { useField } from "formik";
import { IFormField } from "src/types/form";
import { FormField } from ".";
import {
  DEFAULT_CLASSNAME_TEXT_FIELD,
  TEXT_FIELD_STYLE_VARIANTS,
} from "./constants";
import { TextFieldVariants } from "./types";
import { Button } from "../Button";
import { ButtonVariants } from "../Button/types";

interface Props extends IFormField {
  buttonName?: string;
  variantButton?: ButtonVariants;
}

export const UploadInput: FC<Props> = ({
  className,
  containerClassName,
  labelClassName,
  id,
  label,
  placeholder,
  buttonName = "Прикріпити",
  variant = TextFieldVariants.PRIMARY,
  variantButton = ButtonVariants.SECONDARY,
  ...props
}) => {
  const fieldId = id || props.name;

  const [{ value, onChange, ...field }, { error, touched }] = useField(fieldId);
  const isShownError = Boolean((touched || value) && error);

  const uploadInputRef = useRef(null);

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files[0];

      setSelectedFile(file);
      onChange(event);
    },
    [onChange]
  );

  const onSelectFileClick = (e: MouseEvent) => {
    e.preventDefault();
    uploadInputRef.current.click();
  };

  return (
    <FormField
      className={containerClassName}
      labelClassName={labelClassName}
      label={label}
      labelFor={fieldId}
      isShownError={isShownError}
      error={error}
    >
      <input
        className="hidden"
        type="file"
        ref={uploadInputRef}
        id={fieldId}
        value={value}
        onChange={handleFileChange}
        {...field}
        {...props}
      />
      <div className="flex flex-col xs:flex-row items-center">
        <span
          className={cn(
            "truncate",
            DEFAULT_CLASSNAME_TEXT_FIELD,
            TEXT_FIELD_STYLE_VARIANTS[variant],
            className,
            { "border-red-400": isShownError }
          )}
        >
          {selectedFile?.name || placeholder}
        </span>
        <Button
          className="xs:max-w-42 mt-3.5 xs:mt-0 xs:ml-5 md:ml-9"
          variant={variantButton}
          onClick={onSelectFileClick}
        >
          {buttonName}
        </Button>
      </div>
    </FormField>
  );
};
