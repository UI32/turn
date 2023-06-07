import React from "react";
import FormInput from "./forms/FormInput";
import FormField from "./forms/FormField";
import Textarea from "./forms/Textarea";
import Button from "./buttons/Button";
import Toast from "./Toast.jsx";

const Contact = ({}) => {
  return (
    <form className="contact-form">
      <Toast success text="contact:success" />
      <Toast error text="contact:error" />
      <FormField
        success
        field={
          <FormInput
            type="text"
            id=""
            name="full_name"
            placeholder="contact:full-name"
          />
        }
      />
      <FormField
        errorText="Please enter a correct Email."
        field={
          <FormInput
            type="email"
            id=""
            name="email"
            placeholder="contact:email"
          />
        }
      />
      <FormField
        field={
          <FormInput
            type="number"
            id=""
            name="phone"
            placeholder="contact:phone"
          />
        }
      />
      <FormField
        field={<Textarea id="" name="message" placeholder="contact:message" />}
      />
      <Button type="submit" label="contact:submit" />
      <Button type="submit" success />
      <Button type="submit" loading />
    </form>
  );
};

export default Contact;
