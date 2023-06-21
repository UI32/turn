import React from "react";
import useTranslations from "../../hooks/useTranslations";
import { Link } from "gatsby";
import Globe from "./Globe";
// import GlobeText from "./GlobeText";

const Footer = () => {
  const t = useTranslations();

  return (
    <footer className="footer">
      <div className="wrapper">
        <a
          className="footer-item careers"
          href="https://turn-energy.notion.site/turn-energy/Careers-at-Turn-c960e136909b410ca737de169f5967a6"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text">{t("careers:name")}</span>
          <span className="button button-tiny">{t("hiring:name")}</span>
        </a>

        <Link className="footer-caption legal" to="/legal">
          {t("legal:name")}
        </Link>

        <Link className="footer-caption privacy" to="/privacy">
          {t("data-privacy:name")}
        </Link>
        <span className="footer-caption copy">© 2023 Turn Energy GmbH</span>
        <div className="globe-wrapper">
          {/*<GlobeText />*/}
          <div className="show-in-tablet">
            <Globe mobile />
          </div>
          <div className="show-in-desktop">
            <Globe />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
