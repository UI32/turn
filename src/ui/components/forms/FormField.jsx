import React from "react";
import useTranslations from "../../../hooks/useTranslations";
import cx from "classnames";
import { ReactComponent as Exclamation } from "../../../assets/icons/exclamation.svg";
import { ReactComponent as Tick } from "../../../assets/icons/tick.svg";

const FormField = ({
  label,
  labelFor,
  field,
  errorText,
  required,
  className,
  success,
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
      {success && <Tick className="success-icon icon" />}
      {errorText && <Exclamation className="error-icon icon" />}
      {errorText && <p className="error-text">{t(errorText)}</p>}
    </div>
  );
};

export default FormField;
