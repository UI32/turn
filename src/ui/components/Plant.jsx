import React from "react";
import AdaptiveCursor from "../components/AdaptiveCursor";
import { Link } from "gatsby";
import useTranslations from "../../hooks/useTranslations";
import plantImg from "../../assets/images/first-comm-plant.jpg";
import arrowIcon from "../../assets/icons/right-arrow-light.svg";

const Plant = () => {
  const t = useTranslations();

  return (
    <section className="plant">
      <AdaptiveCursor />
      <div className="wrapper no-p-md">
        <div className="plant-container">
          <Link to="/plant">
            <div className="plant-img-wrapper">
              <img
                src={plantImg}
                alt="Aerial view of TURN2X's first commercial plant."
                loading="lazy"
                data-cursor="label"
                data-cursor-label="READ MORE"
                className="plant-img"
                data-aos="custom-animation"
              />
            </div>
          </Link>
          <Link to="/plant">
            <div className="panel plant-panel" data-aos="custom-animation">
              <p className="panel-pretitle lead-m">{t("plant:label")}</p>
              <h2 className="alpha">{t("plant:title")}</h2>
              <p className="text-xl">{t("plant:text")}</p>
              <div className="link-icon">
                <span className="link-icon-text text-xl">{t("read-more:text")}</span>
                <img
                  src={arrowIcon}
                  alt="arrow right"
                  className="link-icon-icon"
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Plant;
