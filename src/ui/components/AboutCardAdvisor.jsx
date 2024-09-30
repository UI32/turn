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
          <h2 className="text-xl">{name}</h2>
          <p className="text-l">{t(position)}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutCardAdvisor;
