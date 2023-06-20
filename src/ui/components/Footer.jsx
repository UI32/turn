import React from "react";
import useTranslations from "../../hooks/useTranslations";
import { Link } from "gatsby";
import Globe from "./Globe";
import GlobeText from "./GlobeText";
import GlobeMobile from "./GlobeMobile";

const Footer = () => {
  const t = useTranslations();

  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="footer-item careers">
          <span>{t("careers:name")}</span>
          <a
            className="button button-tiny"
            href="https://turn-energy.notion.site/turn-energy/Careers-at-Turn-c960e136909b410ca737de169f5967a6"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("hiring:name")}
          </a>
        </div>
        <Link className="footer-caption legal" to="/legal">
          {t("legal:name")}
        </Link>

        <Link className="footer-caption privacy" to="/privacy">
          {t("data-privacy:name")}
        </Link>
        <span className="footer-caption copy">© 2023 Turn Energy GmbH</span>
        <div className="globe-wrapper">
          <GlobeText />
          <GlobeMobile />
          <Globe />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
