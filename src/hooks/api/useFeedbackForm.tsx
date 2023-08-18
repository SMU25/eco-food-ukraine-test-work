import { useState } from "react";
import { instance } from "src/services/api-client";
import { IFeedbackFormValues } from "src/types/form";

export const useFeedbackForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendFeedbackForm = async (
    formValues: IFeedbackFormValues,
    handleSuccess: VoidFunction
  ) => {
    try {
      setIsLoading(true);

      await instance.post("/feedback", formValues);

      setSuccess(true);
      setTimeout(() => setSuccess(false), 2000);
      handleSuccess();
    } catch ({ message }) {
      setSuccess(false);

      return message;
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, success, sendFeedbackForm };
};
