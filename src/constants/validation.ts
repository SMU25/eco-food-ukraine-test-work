import * as yup from "Yup";

const ERROR_TEXT_REQUIRED_FIELD = "Обов'зкове поле";

export const NAME_VALIDATION_SCHEMA = yup
  .string()
  .min(2, "Мінімальна кількість символів 2");

export const PHONE_VALIDATION_SCHEMA = yup
  .string()
  .required(ERROR_TEXT_REQUIRED_FIELD)
  .min(9, "Мінімальна кількість символів 9")
  .max(15, "Максимальна кількість символів 15")
  .matches(
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
    "Некоректний номер телефону"
  );

export const EMAIL_VALIDATION_SCHEMA = yup
  .string()
  .email("Некоректний email")
  .required(ERROR_TEXT_REQUIRED_FIELD);
