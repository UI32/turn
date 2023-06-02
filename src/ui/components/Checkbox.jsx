import React from "react";
import useTranslations from "../../hooks/useTranslations";
import { ReactComponent as Tick } from "../../assets/icons/icon-tick.svg";

const Checkbox = ({ id, value, text, onChange }) => {
  const t = useTranslations();

  return (
    <label className="checkbox">
      <input type="checkbox" id={id} value={value} onChange={onChange} />
      {t(text)}
      <Tick className="checkmark" />
    </label>
  );
};

export default Checkbox;
