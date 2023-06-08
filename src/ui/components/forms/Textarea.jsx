import React from "react";
import useTranslations from "../../../hooks/useTranslations";

const FormInput = ({ id, name, placeholder, onChange }) => {
  const t = useTranslations();

  return (
    <textarea
      className="form-textarea"
      id={id}
      name={name}
      placeholder={t(placeholder)}
      onChange={onChange}
    />
  );
};

export default FormInput;
