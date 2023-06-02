import React, { useCallback, useState, useEffect } from "react";
import useTranslations from "./useTranslations";
import Notification from "../ui/components/Notification";

// This is using formSubmit.co to handle the form submitting.
// It is kind of weird... but free. We might want to change it eventually.

const useFormSubmit = () => {
  const [loading, setLoading] = useState();

  const [submitResult, setSubmitResult] = useState(null);

  const t = useTranslations();

  // Removes the result object after 3 seconds.
  useEffect(() => {
    if (submitResult) setTimeout(() => setSubmitResult(null), 3000);
  }, [submitResult]);

  const submit = useCallback(async info => {
    try {
      setLoading(true);
      await fetch(`https://formsubmit.co/ajax/${t("contact:bonsai-email")}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: info.name,
          email: info.email,
          purpose: info.purpose,
          budget: info.budget,
          message: info.message,
        }),
      });
      setSubmitResult(<Notification message={t("contact:submit-success")} />);
    } catch (e) {
      setSubmitResult(
        <Notification message={t("contact:submit-fail")} isError={true} />,
      );
    }
    setLoading(false);
  }, []);

  return [loading, submit, submitResult];
};

export default useFormSubmit;
