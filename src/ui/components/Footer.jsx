import React from "react";
import useTranslations from "../../hooks/useTranslations";
import { Link } from "gatsby";
import Globe from "./Globe";
import fundedByEU from "../../assets/images/EN_FundedbytheEU_RGB_POS.png";
// import GlobeText from "./GlobeText";

const Footer = () => {
  const t = useTranslations();

  return (
    <footer className="footer">
      <div className="wrapper">
        <a
          className="footer-item careers"
          href="https://turn2x.jobs.personio.com"
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
        <div className="footer-eu-section">
          <img
            src={fundedByEU}
            alt="funded-by-EU"
            className="eu-funding-logo"
          />
          <span className="footer-caption copy">© 2025 TURN2X</span>
        </div>
        <div className="globe-wrapper">
          {/*<GlobeText />*/}
          <div className="globe-mobile">
            <Globe mobile />
          </div>
          <div className="globe-desktop">
            <Globe />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
