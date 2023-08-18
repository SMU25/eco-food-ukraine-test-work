import React, { FC, FormEvent, useCallback } from "react";
import { FormikProvider, useFormik, FormikHelpers } from "formik";
import { useFeedbackForm } from "src/hooks/api/useFeedbackForm";
import { Heading } from "src/components/Heading";
import { RenderFormField } from "src/components/RenderFormField";
import { Button } from "src/components/Button";
import { getFormikDefaultInitialValues } from "src/utils/getFormikDefaultInitialValues";
import { IFeedbackFormValues } from "src/types/form";
import { FEEDBACK_FIELDS, FEEDBACK_VALIDATION_SCHEMA } from "./constants";

const HEADING = "Написати нам !";
const BUTTON_NAME_SEND = "Надіслати";

export const FeedbackForm: FC = () => {
  const { isLoading, success, sendFeedbackForm } = useFeedbackForm();

  const formikProps = {
    initialValues:
      getFormikDefaultInitialValues<IFeedbackFormValues>(FEEDBACK_FIELDS),
    validationSchema: FEEDBACK_VALIDATION_SCHEMA,
    onSubmit: (
      values: IFeedbackFormValues,
      formikBag: FormikHelpers<IFeedbackFormValues>
    ) => {
      console.log(values);
      sendFeedbackForm(values, formikBag.resetForm);
    },
  };

  const formik = useFormik<IFeedbackFormValues>(formikProps);
  const { isValid, submitForm } = formik;

  const onSubmitForm = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      submitForm();
    },
    [submitForm]
  );

  return (
    <div className="max-w-203 w-full bg-white py-15 px-23">
      <Heading>{HEADING}</Heading>
      <FormikProvider value={formik}>
        <form className="flex flex-col mt-15">
          <div className="flex flex-wrap gap-y-10">
            <RenderFormField fields={FEEDBACK_FIELDS} />
          </div>
          <Button
            className="max-w-56.5 mt-7.5 self-end"
            onClick={onSubmitForm}
            isLoading={isLoading}
            isShownDoneIcon={success}
            isDisabled={!isValid}
          >
            {BUTTON_NAME_SEND}
          </Button>
        </form>
      </FormikProvider>
    </div>
  );
};
