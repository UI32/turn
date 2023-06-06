import React from "react";
import useTranslations from "../../hooks/useTranslations";
import { Link } from "gatsby";
import Globe from "./Globe";

const Footer = () => {
  const t = useTranslations();

  return (
    <footer className="footer">
      <div className="wrapper">
        <Link className="footer-caption" to="/privacy">
          {t("data-privacy:name")}
        </Link>
        <Link className="footer-caption" to="/cookies">
          {t("cookie-settings:name")}
        </Link>
        <Globe />
        <Link className="footer-caption" to="/imprint">
          {t("imprint:name")}
        </Link>
        <span className="footer-caption">© 2023 Turn Energy GmbH</span>
      </div>
    </footer>
  );
};

export default Footer;
