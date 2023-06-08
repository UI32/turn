import React, { useCallback, useState, useEffect } from "react";
import useTranslations from "./useTranslations";
// import Notification from "../ui/components/Notification";
import { getFormErrors } from "../utils/validation";

// Form submission is done with Formspree

const SUCCESS_VISIBLE_TIME = 2000;

const useFormSubmit = () => {
  const [loading, setLoading] = useState();

  const [submitResult, setSubmitResult] = useState({
    successVisible: false,
    errors: {},
  });

  const t = useTranslations();

  // Removes the success flag after some wait time.
  useEffect(() => {
    setTimeout(
      () =>
        setSubmitResult({
          errors: {},
          successVisible: false,
        }),
      SUCCESS_VISIBLE_TIME,
    );
  }, [submitResult]);

  const submit = useCallback(async formData => {
    const formErrors = getFormErrors(formData);
    if (Object.keys(formErrors).length !== 0) {
      setSubmitResult({ successVisible: false, errors: formErrors });
      return;
    }
    try {
      setLoading(true);
      const response = await fetch("https://formspree.io/f/mbjevpee", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });
      console.log("Form submitted: ", response);
      if (response.status !== 200) throw Error("Form submission failed");
      setSubmitResult({ successVisible: true, errors: {} });
    } catch (e) {
      setSubmitResult({
        successVisible: false,
        errors: { conection: e.message },
      });
    }
    setLoading(false);
  }, []);

  return [loading, submit, submitResult];
};

export default useFormSubmit;
