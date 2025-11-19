import React, { useState, useEffect, useCallback } from "react";
import FormInput from "./forms/FormInput";
import FormField from "./forms/FormField";
import Textarea from "./forms/Textarea";
import Button from "./buttons/Button";
import {
  blockInvalidPhoneInput,
  getFormErrors,
  validateMail,
} from "../../utils/validation";
import useFormSubmit from "../../hooks/useFormSubmit";
import Toast from "./Toast.jsx";

const Contact = () => {
  const [loading, submit, submitResult] = useFormSubmit();

  const successVisible = submitResult.successVisible;
  const conectionError = submitResult.error;

  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const [successToastOpen, setSuccessToastOpen] = useState(false);
  const [errorToastOpen, setErrorToastOpen] = useState(false);

  const updateFormData = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  useEffect(() => {}, []);

  useEffect(() => {
    if (!successVisible) setFormData({});
    else setSuccessToastOpen(true);
  }, [successVisible]);

  useEffect(() => {
    if (conectionError) setErrorToastOpen(true);
  }, [conectionError]);

  const handleSubmit = useCallback(() => {
    const formErrors = getFormErrors(formData);
    if (Object.keys(formErrors).length !== 0) {
      setErrors({ ...formErrors });
      return;
    }
    submit(formData);
  }, [formData, submit]);

  return (
    <form className="contact-form">
      {successToastOpen && (
        <Toast
          success
          text="contact:success"
          onClose={() => setSuccessToastOpen(false)}
        />
      )}
      {errorToastOpen && (
        <Toast
          error
          text="contact:error"
          onClose={() => setErrorToastOpen(false)}
        />
      )}
      <FormField
        success={formData.full_name}
        errorText={errors.full_name ? "contact:full-name-message" : ""}
        hideErrorText={errors.full_name && !formData.full_name}
        field={
          <FormInput
            value={formData.full_name}
            type="text"
            id=""
            name="full_name"
            placeholder="contact:full-name"
            onChange={e => {
              updateFormData("full_name", e.target.value);
              setErrors({ ...errors, full_name: false });
            }}
          />
        }
      />
      <FormField
        success={formData.email && validateMail(formData.email)}
        errorText={errors.email ? "contact:email-message" : ""}
        hideErrorText={errors.email && !formData.email}
        field={
          <FormInput
            value={formData.email}
            type="text"
            id=""
            name="email"
            placeholder="contact:email"
            onChange={e => {
              updateFormData("email", e.target.value);
              setErrors({ ...errors, email: false });
            }}
            onBlur={e => {
              if (formData.email) setErrors({ ...getFormErrors(formData) });
            }}
          />
        }
      />
      <FormField
        success={formData.phone}
        field={
          <FormInput
            onKeydown={blockInvalidPhoneInput}
            value={formData.phone}
            type="text"
            id=""
            name="phone"
            placeholder="contact:phone"
            onChange={e => updateFormData("phone", e.target.value)}
          />
        }
      />
      <FormField
        value={formData.message}
        field={
          <Textarea
            value={formData.message}
            id=""
            name="message"
            placeholder="contact:message"
            onChange={e => updateFormData("message", e.target.value)}
          />
        }
      />
      {loading ? (
        <Button type="button" loading />
      ) : (
        <Button
          type="button"
          onClick={handleSubmit}
          success={successVisible}
          label={successVisible ? "" : "contact:submit"}
          disabled={errors.email || errors.name}
          extraPadding={true}
        />
      )}
    </form>
  );
};

export default Contact;
