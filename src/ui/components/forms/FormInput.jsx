import React from "react";
import useTranslations from "../../../hooks/useTranslations";

const FormInput = ({ type, id, name, placeholder, onChange, onKeydown }) => {
  const t = useTranslations();

  return (
    <input
      className="form-input"
      type={type}
      id={id}
      name={name}
      placeholder={t(placeholder)}
      onChange={onChange}
      onKeyDown={onKeydown}
    />
  );
};

export default FormInput;
