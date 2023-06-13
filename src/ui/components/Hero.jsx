import React from "react";
import heroVideoURL from "../../assets/videos/video.mp4";
import useTranslations from "../../hooks/useTranslations";

const Hero = () => {
  const t = useTranslations();
  return (
    <div className="hero">
      <div className="hero-intro">
        <div className="wrapper">
          <div className="hero-text" data-aos="custom-animation">
            <h1
              className="jumbo"
              dangerouslySetInnerHTML={{
                __html: t("hero:title"),
              }}
            />
          </div>
        </div>
      </div>
      <div className="hero-bg" data-aos="custom-animation">
        <video className="videoloop" autoPlay loop muted playsInline>
          <source src={heroVideoURL} />
        </video>
      </div>
    </div>
  );
};

export default Hero;
