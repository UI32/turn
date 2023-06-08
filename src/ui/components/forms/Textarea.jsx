import React from "react";
import useTranslations from "../../../hooks/useTranslations";

const FormInput = ({ id, name, placeholder, onChange, value }) => {
  const t = useTranslations();
  // This input is controlled, the value is set by the parent component
  return (
    <textarea
      value={value || ""}
      className="form-textarea"
      id={id}
      name={name}
      placeholder={t(placeholder)}
      onChange={onChange}
    />
  );
};

export default FormInput;
