import * as yup from "yup";

const ERROR_TEXT_REQUIRED_FIELD = "Обов'зкове поле";

export const NAME_VALIDATION_SCHEMA = yup
  .string()
  .min(2, "Мінімальна кількість символів 2")
  .max(50, "Максимальна кількість символів 50")
  .required(ERROR_TEXT_REQUIRED_FIELD);

export const EMAIL_VALIDATION_SCHEMA = yup
  .string()
  .email("Некоректний email")
  .required(ERROR_TEXT_REQUIRED_FIELD);

export const MESSAGE_VALIDATION_SCHEMA = yup.string();

export const FILE_VALIDATION_SCHEMA = yup.string();
