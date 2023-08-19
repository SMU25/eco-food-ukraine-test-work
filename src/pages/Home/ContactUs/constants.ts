import * as yup from "yup";
import { Input } from "src/components/FormField/Input";
import { UploadInput } from "src/components/FormField/UploadInput";
import { Textarea } from "src/components/FormField/Textarea";
import {
  NAME_VALIDATION_SCHEMA,
  EMAIL_VALIDATION_SCHEMA,
  FILE_VALIDATION_SCHEMA,
  MESSAGE_VALIDATION_SCHEMA,
} from "src/constants/validation";

export const CONTACT_LINKS = [
  {
    label: "м. Київ, вул. Комбінатна, 21",
    href: "https://goo.gl/maps/XJwTdetUpWeqYKGV9",
    isOpenNewTab: true,
  },
  {
    label: "+38 067 900 93 83",
    href: "tel:380679009383",
  },
  {
    label: "EcoFoodUkraine@gmail.com",
    href: "mailto:EcoFoodUkraine@gmail.com",
  },
];

export const FEEDBACK_FIELDS = [
  {
    name: "firstName",
    placeholder: "Ім’я ",
    type: "text",
    component: Input,
    containerClassName:
      "gl:max-w-73 w-full xs:w-calc-1/2-minus-2.5 xl:w-calc-1/2-minus-5.5",
  },
  {
    name: "lastName",
    placeholder: "Прізвище",
    type: "text",
    component: Input,
    containerClassName:
      "gl:max-w-73 w-full xs:w-calc-1/2-minus-2.5 xl:w-calc-1/2-minus-5.5",
  },
  {
    name: "email",
    placeholder: "E-mail",
    type: "email",
    component: Input,
    containerClassName: "w-full",
  },
  {
    name: "file",
    placeholder: "Завантажити файл",
    component: UploadInput,
    containerClassName: "w-full",
  },
  {
    name: "message",
    label: "Повідомлення",
    component: Textarea,
    containerClassName: "w-full",
    labelClassName: "mb-2.5",
  },
];

export const FEEDBACK_VALIDATION_SCHEMA = yup.object().shape({
  firstName: NAME_VALIDATION_SCHEMA,
  lastName: NAME_VALIDATION_SCHEMA,
  email: EMAIL_VALIDATION_SCHEMA,
  file: FILE_VALIDATION_SCHEMA,
  message: MESSAGE_VALIDATION_SCHEMA,
});
