import React from "react";
import heroVideoURL from "../../assets/videos/sample-video.mp4";
import useTranslations from "../../hooks/useTranslations";

const Hero = ({}) => {
  const t = useTranslations();
  return (
    <div className="hero">
      <div className="wrapper">
        <div className="hero-text">
          <h1
            className="jumbo"
            dangerouslySetInnerHTML={{
              __html: t("hero:title"),
            }}
          />
        </div>
      </div>
      <div className="hero-bg">
        <video className="videoloop" autoPlay loop muted playsInline>
          <source src={heroVideoURL} />
        </video>
      </div>
    </div>
  );
};

export default Hero;
