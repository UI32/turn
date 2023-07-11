import React, { useState } from "react";
import useTranslations from "../../hooks/useTranslations";
import { ReactComponent as Cross } from "../../assets/icons/cross.svg";

const NotificationBanner = () => {
  const t = useTranslations();

  const [close, setclose] = useState(false);

  return (
    !close && (
      <div className="notification-banner">
        <div className="wrapper">
          <a
            className="text"
            href="https://www.businessinsider.de/gruenderszene/business/mit-diesen-10-folien-pitchte-das-biogas-startup-turn2x-um-millionen/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("announcement:text")}
          </a>
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
