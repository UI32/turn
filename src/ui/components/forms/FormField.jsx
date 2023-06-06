import React from "react";
import useTranslations from "../../../hooks/useTranslations";
import cx from "classnames";
import { ReactComponent as Exclamation } from "../../../assets/icons/exclamation.svg";

const FormField = ({
  label,
  labelFor,
  field,
  errorText,
  required,
  className,
}) => {
  const t = useTranslations();

  return (
    <div
      className={cx("form-field", {
        "has-error": errorText,
        [className]: className,
      })}
    >
      {label && (
        <label htmlFor={labelFor} className="form-label">
          {t(label)}
          {required && " *"}
        </label>
      )}
      {field}
      {errorText && <Exclamation className="error-icon" />}
      {errorText && <p className="error-text">{t(errorText)}</p>}
    </div>
  );
};

export default FormField;
