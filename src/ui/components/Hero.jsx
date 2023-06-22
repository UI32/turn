import React from "react";
import useTranslations from "../../hooks/useTranslations";

import sensor from "../../assets/images/hero-sensor.png";

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
        <div className="video-container">
          <div className="video-size-wrapper">
            <img className="sensor" src={sensor} />
            {/*
            <video autoplay="" loop="" muted="" playsinline="">
              <source src="https://turn2x.s3.eu-north-1.amazonaws.com/turnDroneVideo.mp4" />
            </video>  */}
            <iframe
              src="https://player.vimeo.com/video/837842705?h=d907f3a7c1&mute=1&badge=0&autopause=0&background=1&player_id=0&app_id=58479&controls=0&autoplay=1&loop=1"
              allow="autoplay"
              allowFullScreen
              style={{
                border: "none",
              }}
              title="TURN2X"
            ></iframe>
          </div>
        </div>

        <script src="https://player.vimeo.com/api/player.js"></script>
      </div>
    </div>
  );
};

export default Hero;
