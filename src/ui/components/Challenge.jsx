import React from "react";
import useTranslations from "../../hooks/useTranslations";
import plantImg from "../../assets/images/first-comm-plant.jpg";

const Challenge = () => {
  const t = useTranslations();

  return (
    <section className="challenge">
      <div className="wrapper no-p-md">
        <div className="challenge-container">
          <div className="challenge-img-wrapper">
            <img
              src={plantImg}
              alt="challenge video"
              loading="lazy"
              className="challenge-img"
            />
          </div>

          <div className="panel challenge-panel">
            <p className="panel-pretitle lead-m">{t("plant:label")}</p>
            <h2 className="alpha">{t("plant:title")}</h2>
            <p className="text-xl">{t("plant:text")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Challenge;
