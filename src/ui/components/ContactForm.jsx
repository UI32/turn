import React, { useCallback, useState } from "react";
import FormInput from "./forms/FormInput";
import FormField from "./forms/FormField";
import Textarea from "./forms/Textarea";
import Button from "./buttons/Button";
import { getFormErrors, validateMail } from "../../utils/validation";

const SUCCESS_VISIBLE_TIME = 2000;

// Form submission is done with Formspree
const Contact = ({}) => {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [successVisible, setSuccessVisible] = useState(false);

  const showSuccess = useCallback(async () => {
    setSuccessVisible(true);
    setTimeout(() => setSuccessVisible(false), SUCCESS_VISIBLE_TIME);
  }, []);

  const updateFormData = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = useCallback(() => {
    async function submit() {
      setLoading(true);
      // TODO change this to the company's form in Formspree
      fetch("https://formspree.io/f/mbjevpee", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })
        .then(response => {
          if (response.ok) {
            setLoading(false);
            showSuccess();
            setFormData({});
          } else {
            response.json().then(data => {
              if (Object.hasOwn(data, "errors")) {
                console.log("Form submission failed.");
                data.errors.map(error => console.warn(error));
              } else {
                console.log("Form submission failed.");
              }
            });
          }
        })
        .catch(error => {
          console.warn(error);
        });
    }
    const formErrors = getFormErrors(formData);
    setErrors(formErrors);
    if (Object.keys(formErrors).length !== 0) return;
    submit();
  }, [formData, showSuccess]);

  return (
    <form id="contact-form" className="contact-form">
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
      {loading ? (
        <Button type="submit" loading />
      ) : successVisible ? (
        <Button type="submit" success />
      ) : (
        <Button
          type="button"
          onClick={() => handleSubmit()}
          label="contact:submit"
        />
      )}
    </form>
  );
};

export default Contact;
