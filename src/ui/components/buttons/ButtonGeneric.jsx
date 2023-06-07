import React from "react";
import cx from "classnames";
import useTranslations from "../../../hooks/useTranslations.js";
import { ReactComponent as Tick } from "../../../assets/icons/tick.svg";

const ButtonGeneric = ({
  label,
  disabled,
  clear = false,
  children,
  icon,
  loading,
  success,
  tiny,
}) => {
  const t = useTranslations();
  const buttonClasses = cx("button", {
    "button-clear": clear,
    "is-disabled": disabled,
    "button-tiny": tiny,
  });
  const buttonContent = (
    <>
      {icon ? <span className="icon">{icon}</span> : null}
      {label ? <span className="button-text">{t(label)}</span> : null}
      {loading ? <span className="loader"></span> : null}
      {success ? (
        <div className="success-text">
          <span className="button-text">Success</span>
          <Tick className="icon" />
        </div>
      ) : null}
    </>
  );

  return <>{children({ buttonClasses, buttonContent })}</>;
};

export default ButtonGeneric;
