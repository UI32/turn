import React from "react";
import useTranslations from "../../hooks/useTranslations";
import {Link} from "gatsby";

const Footer = () => {
  const t = useTranslations();

  return (
    <header className="footer">
      <div className="wrapper">
        <div className="left-slot">
          <Link className="footer-caption" to="/privacy">
            {t("sample:text")}
          </Link>
          <Link className="footer-caption" to="/legal">
            {t("sample:text")}
          </Link>
          <Link className="footer-caption" to="/cookies">
            {t("sample:text")}
          </Link>
        </div>
        <div className="right-slot">
          <span className="footer-caption">
            turn2x 2023 © {t("sample:text")}
          </span>
        </div>
      </div>
    </header>
  );
};

export default Footer;
