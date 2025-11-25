import { useCallback, useState, useEffect } from "react";
import useTranslations from "./useTranslations";
import { convertToFormData } from "../utils/format";

// Form submission is done with Formspree

const SUCCESS_VISIBLE_TIME = 2000;
const formSpreeEndpoint = "https://formspree.io/f/xnnwpyjv" // Turn 2X account endpoint 

const useFormSubmit = () => {
  const [loading, setLoading] = useState();
  const [submitResult, setSubmitResult] = useState({});

  useEffect(() => {
    // Removes the success flag after some wait time.
    if (!submitResult.successVisible) return;
    setTimeout(() => setSubmitResult({}), SUCCESS_VISIBLE_TIME);
  }, [submitResult]);

  const submit = useCallback(async data => {
    const formatedData = convertToFormData(data);
    try {
      setLoading(true);
      const response = await fetch(formSpreeEndpoint, {
        method: "post",
        body: formatedData,

        headers: {
          Accept: "application/json",
        },
      });
      if (response.status !== 200) throw Error("Form submission failed");
      setSubmitResult({ successVisible: true });
    } catch (e) {
      setSubmitResult({
        error: e.message,
      });
    }
    setLoading(false);
  }, []);

  return [loading, submit, submitResult];
};

export default useFormSubmit;
