import React, { useState, useEffect } from "react";
import useTranslations from "../../hooks/useTranslations";
import { ReactComponent as Cross } from "../../assets/icons/cross.svg";
import { ReactComponent as Exclamation } from "../../assets/icons/exclamation.svg";
import { ReactComponent as Tick } from "../../assets/icons/tick.svg";

const Toast = ({ text, success, error, onClose }) => {
  const t = useTranslations();

  const [close, setclose] = useState(false);

  useEffect(() => {
    if (close && onClose) onClose();
  }, [close, onClose]);

  return (
    !close && (
      <div className="toast">
        {success ? <Tick className="icon success-icon" /> : null}
        {error ? <Exclamation className="icon error-icon" /> : null}
        <p className="text">{t(text)}</p>
        <button
          className="button-icon"
          onClick={() => {
            setclose(true);
          }}
        >
          <Cross className="icon" />
        </button>
      </div>
    )
  );
};

export default Toast;
