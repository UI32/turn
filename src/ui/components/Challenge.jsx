import React from "react";
import sensor from "../../assets/images/hero-sensor.png";

const Challenge = ({ label, title, text, video }) => {

  return (
    <section className="challenge">
      <div className="wrapper no-p-md">
        <div className="challenge-container">
          <div className="challenge-vis-wrapper" data-aos="custom-animation">
            <div className="video-container">
              <div className="video-size-wrapper">
                <img className="sensor" src={sensor} alt="video sensor" />
                <video autoPlay loop muted playsInline>
                  <source src={video} />
                </video>
              </div>
            </div>
          </div>
          <div className="panel challenge-panel">
            <p className="panel-pretitle lead-m">{label}</p>
            <h2 className="alpha">{title}</h2>
            <p className="text-xl">{text}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Challenge;
