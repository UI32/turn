import React from "react";
import useTranslations from "../../hooks/useTranslations";
import { Link } from "gatsby";
import Globe from "./Globe";
import GlobeText from "./GlobeText";

const Footer = () => {
  const t = useTranslations();

  return (
    <footer className="footer" data-aos="custom-animation">
      <div className="wrapper">
        <div className="footer-item">
          <span className="footer-caption">{t("careers:name")}</span>
          <a
            className="button button-tiny"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("hiring:name")}
          </a>
        </div>
        <Link className="footer-caption" to="/legal">
          {t("legal:name")}
        </Link>
        <div className="globe-wrapper">
          <GlobeText />
          <Globe />
        </div>
        <Link className="footer-caption" to="/privacy">
          {t("data-privacy:name")}
        </Link>
        <span className="footer-caption">© 2023 Turn Energy GmbH</span>
      </div>
    </footer>
  );
};

export default Footer;
