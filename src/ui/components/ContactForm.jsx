import React, { useState, useEffect, useRef } from "react";
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
  const [loading, handleSubmit, submitResult] = useFormSubmit();

  const successVisible = submitResult.successVisible;
  const conectionError = submitResult.errors.conection;

  const [formData, setFormData] = useState({});
  const isDirty = Object.values(formData).find(value => value !== "");
  const errors = isDirty ? getFormErrors(formData) : submitResult.errors;

  const [successToastOpen, setSuccessToastOpen] = useState(false);
  const [errorToastOpen, setErrorToastOpen] = useState(false);

  const updateFormData = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  useEffect(() => {
    if (!successVisible) setFormData({});
    else setSuccessToastOpen(true);
  }, [successVisible]);

  useEffect(() => {
    if (conectionError) setErrorToastOpen(true);
  }, [conectionError]);

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
        field={
          <FormInput
            value={formData.full_name}
            type="text"
            id=""
            name="full_name"
            placeholder="contact:full-name"
            onChange={e => updateFormData("full_name", e.target.value)}
          />
        }
      />
      <FormField
        success={formData.email && validateMail(formData.email)}
        errorText={
          errors.email
            ? errors.email
            : validateMail(formData.email)
            ? ""
            : "contact:email-message"
        }
        field={
          <FormInput
            value={formData.email}
            type="email"
            id=""
            name="email"
            placeholder="contact:email"
            onChange={e => updateFormData("email", e.target.value)}
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
          onClick={() => {
            handleSubmit(formData);
          }}
          success={successVisible}
          label={successVisible ? "" : "contact:submit"}
          disabled={Object.keys(errors).length !== 0}
        />
      )}
    </form>
  );
};

export default Contact;
