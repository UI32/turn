import React, { useState, useEffect } from "react";
import FormInput from "./forms/FormInput";
import FormField from "./forms/FormField";
import Textarea from "./forms/Textarea";
import Button from "./buttons/Button";
import { getFormErrors, validateMail } from "../../utils/validation";
import useFormSubmit from "../../hooks/useFormSubmit";

const Contact = ({}) => {
  const [loading, handleSubmit, submitResult] = useFormSubmit();
  const successVisible = submitResult.successVisible;
  const [formData, setFormData] = useState({});
  const isDirty = Object.keys(formData).length !== 0;
  const errors = isDirty ? getFormErrors(formData) : {};

  const updateFormData = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  useEffect(() => {
    if (!successVisible) setFormData({});
  }, [successVisible]);

  return (
    <form
      id="contact-form"
      className="contact-form"
      action="https://formspree.io/f/mbjevpee"
      method="post"
      onSubmit={event => {
        event.preventDefault();
        handleSubmit(formData);
      }}
    >
      <FormField
        success={formData.full_name}
        errorText={errors.full_name}
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
            : "Please enter a correct Email."
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
            value={formData.phone}
            type="number"
            id=""
            name="phone"
            placeholder="contact:phone"
            onChange={e => updateFormData("phone", e.target.value)}
          />
        }
      />
      <FormField
        value={formData.message}
        field={<Textarea id="" name="message" placeholder="contact:message" />}
        onChange={e => updateFormData("message", e.target.value)}
      />
      {submitResult.errors.conection && (
        <div className="error">{submitResult.errors.conection}</div>
      )}
      {loading ? (
        <Button type="button" loading />
      ) : successVisible ? (
        <Button type="button" success />
      ) : (
        <Button
          type="submit"
          // onClick={() => handleSubmit(formData)}
          label="contact:submit"
          disabled={!isDirty || Object.keys(errors).length !== 0}
        />
      )}
    </form>
  );
};

export default Contact;
