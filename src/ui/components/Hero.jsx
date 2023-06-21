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
        <div style={{ padding: 0, position: "relative" }}>
          <iframe
            src="https://player.vimeo.com/video/837842705?h=d907f3a7c1&mute=1&badge=0&autopause=0&background=1&player_id=0&app_id=58479&controls=0&autoplay=1&loop=1"
            allow="autoplay"
            allowFullScreen
            style={{
              border: "none",
              position: "absolute",
              top: 0,
              left: 0,
              width: "100vw",
              aspectRatio: "16/9",
            }}
            title="TURN2X"
          ></iframe>
        </div>
        <script src="https://player.vimeo.com/api/player.js"></script>
      </div>
    </div>
  );
};

export default Hero;
