import React from "react";
import useTranslations from "../../hooks/useTranslations";

const AboutCardAdvisor = ({ image, name, alt, position }) => {
  const t = useTranslations();

  return (
    <div className="about-card advisor">
      <div className="about-content">
        <div className="about-image">
          <img src={image} alt={alt} loading="lazy" />
        </div>
        <div className="about-info">
          <h2 className="about-name">{name}</h2>
          <p className="about-position">{t(position)}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutCardAdvisor;
