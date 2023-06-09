import React from "react";
import heroVideoURL from "../../assets/videos/video.mp4";
import useTranslations from "../../hooks/useTranslations";
import pattern from "../../assets/images/pattern1.png";
import logo1 from "../../assets/images/logo-pattern-left.svg";
import logo2 from "../../assets/images/logo-pattern-right.svg";

const Hero = ({}) => {
  const t = useTranslations();
  return (
    <div className="hero">
      <img className="hero-pattern" src={pattern} alt="pattern" />
      <div className="hero-content">
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
        <div className="hero-bg" data-aos="custom-animation">
          <video className="videoloop" autoPlay loop muted playsInline>
            <source src={heroVideoURL} />
          </video>
        </div>
        <div className="hero-quote">
          <div className="wrapper">
            <img
              src={logo1}
              alt="Turnx2 pattern"
              className="left-icon"
              data-aos="custom-animation"
            />
            <span
              data-aos="custom-animation"
              dangerouslySetInnerHTML={{
                __html: t("hero:quote"),
              }}
            />
            <img
              src={logo2}
              alt="Turnx2 pattern"
              className="right-icon"
              data-aos="custom-animation"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
