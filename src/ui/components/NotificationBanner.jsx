import React, { useState } from "react";
import useTranslations from "../../hooks/useTranslations";
import { ReactComponent as Cross } from "../../assets/icons/cross.svg";

const NotificationBanner = () => {
  const t = useTranslations();
  const isVisible = Date.now() >= new Date("2023-06-27");

  const [close, setclose] = useState(false);

  return (
    !close &&
    isVisible && (
      <div className="notification-banner">
        <div className="wrapper">
          <p className="text">{t("announcement:text")}</p>
          <button
            aria-label="close"
            className="button-icon"
            onClick={() => {
              setclose(true);
            }}
          >
            <Cross className="icon" />
          </button>
        </div>
      </div>
    )
  );
};

export default NotificationBanner;
