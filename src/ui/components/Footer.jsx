import React from "react";
import useTranslations from "../../hooks/useTranslations";
import { Link } from "gatsby";
import Globe from "./Globe";
import ButtonHashLink from "../components/buttons/Button";

const Footer = () => {
  const t = useTranslations();

  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="footer-item">
          <span className="footer-caption">{t("careers:name")}</span>

          <ButtonHashLink tiny label="hiring:name" to="#" />
        </div>
        <Link className="footer-caption" to="/legal">
          {t("legal:name")}
        </Link>
        <Globe />
        <Link className="footer-caption" to="/privacy">
          {t("data-privacy:name")}
        </Link>
        <span className="footer-caption">© 2023 Turn Energy GmbH</span>
      </div>
    </footer>
  );
};

export default Footer;
