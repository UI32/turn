import React from "react";

const Hero = ({ title, pretitle, img }) => {
  return (
    <div className="hero hero__img">
      <div className="hero-intro">
        <div className="wrapper">
          <div className="hero-text">
            <p className="lead-m">{pretitle}</p>
            <h1
              className="jumbo"
              dangerouslySetInnerHTML={{
                __html: title,
              }}
            />
          </div>
        </div>
      </div>
      <div className="hero-img-container">
        <img src={img} alt="hero visual" />
      </div>
    </div>
  );
};

export default Hero;
