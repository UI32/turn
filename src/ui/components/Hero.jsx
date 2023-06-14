import React from "react";
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
          <source
            src={
              "https://turn2x.s3.eu-north-1.amazonaws.com/turnDroneVideo.mp4"
            }
          />
        </video>
      </div>
    </div>
  );
};

export default Hero;
