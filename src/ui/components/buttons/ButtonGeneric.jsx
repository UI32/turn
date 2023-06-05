import React from "react";
import cx from "classnames";
import useTranslations from "../../../hooks/useTranslations.js";

const ButtonGeneric = ({ label, disabled, clear = false, children, icon }) => {
  const t = useTranslations();
  const buttonClasses = cx("button", {
    "is-clear": clear,
    "is-disabled": disabled,
  });
  const buttonContent = (
    <div className="button-content">
      {icon ? <span className="icon">{icon}</span> : null}
      {label ? <span className="button-text">{t(label)}</span> : null}
      <span className="button-shadow"></span>
    </div>
  );

  return <>{children({ buttonClasses, buttonContent })}</>;
};

export default ButtonGeneric;
