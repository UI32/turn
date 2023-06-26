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
          <a
            className="text"
            href="https://turn-energy.notion.site/DRAFT-Press-release-Seed-Round-Turn-Energy-5bfcbe7d17de4ca88e8f1b5e3cbbc76d"
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
