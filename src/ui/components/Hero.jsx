import React from "react";
import sensor from "../../assets/images/hero-sensor.png";
import TextReveal from "./TextReveal";

const Hero = ({ title, video }) => {
  return (
    <div className="hero">
      <div className="hero-intro">
        <div className="wrapper">
          <div className="hero-text">
            <TextReveal title={title}/>
          </div>
        </div>
      </div>
      <div className="hero-bg" data-aos="custom-animation">
        <div className="video-container">
          <div className="video-size-wrapper">
            <img className="sensor" src={sensor} alt="video sensor" />
            <video autoPlay loop muted playsInline>
              <source src={video} />
            </video>
            {/* <iframe
              src="https://player.vimeo.com/video/837842705?h=d907f3a7c1&mute=1&badge=0&autopause=0&background=1&player_id=0&app_id=58479&controls=0&autoplay=1&loop=1"
              allow="autoplay"
              allowFullScreen
              style={{
                border: "none",
              }}
              title="TURN2X"
            ></iframe>*/}
          </div>
        </div>

        <script src="https://player.vimeo.com/api/player.js"></script>
      </div>
    </div>
  );
};

export default Hero;
