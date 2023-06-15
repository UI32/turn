import React, { useState } from "react";
import useTranslations from "../../hooks/useTranslations";
import { ReactComponent as Cross } from "../../assets/icons/cross.svg";
import cx from "classnames";

const AboutCard = ({ image, imageSm, name, alt, position, description }) => {
  const t = useTranslations();
  const [extendInfo, setExtendInfo] = useState(false);

  const onExtendInfo = () => {
    document.body.classList.add("disable-scroll");
    setExtendInfo(true);
  };

  const onCloseInfo = () => {
    document.body.classList.remove("disable-scroll");
    setExtendInfo(false);
  };

  return (
    <div className={cx("about-card", { extended: extendInfo })}>
      <div data-aos="custom-animation">
        <div className="about-content" onClick={onExtendInfo}>
          <div className="about-image">
            <img src={imageSm} alt={alt} loading="lazy" />
          </div>
          <div className="about-info">
            <h2 className="about-name">{name}</h2>
            <p className="about-position">{t(position)}</p>
          </div>
        </div>
      </div>

      <div className="overlay" onClick={onCloseInfo}></div>

      <div className="extra">
        <img src={image} alt={alt} loading="lazy" />
        <div className="info">
          <h2 className="about-name">{name}</h2>
          <p className="about-position">{t(position)}</p>
          <p className="about-description">{t(description)}</p>
          <div className="about-contact">
            <p>{t("about:get-in-touch")}</p>
            <a
              className="link"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <button className="close-button" onClick={onCloseInfo}>
          <Cross />
        </button>
      </div>
    </div>
  );
};

export default AboutCard;
