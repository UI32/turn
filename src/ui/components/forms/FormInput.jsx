import React from "react";
import useTranslations from "../../../hooks/useTranslations";

const FormInput = ({
  type,
  id,
  name,
  placeholder,
  onChange,
  onKeydown,
  value,
}) => {
  const t = useTranslations();
  // This input is controlled, the value is set by the parent component
  return (
    <input
      value={value || ""}
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
