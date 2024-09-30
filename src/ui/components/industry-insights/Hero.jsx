import React from "react";
import useMediaQuery from "../../../hooks/useMediaQuery";
import TextReveal from "../TextReveal";

const Hero = ({ title, pretitle, img, imgMobile }) => {

  const isMobile = useMediaQuery("(max-width: 780px)");

  return (
    <div className="hero hero__img">
      <div className="hero-intro">
        <div className="wrapper">
          <div className="hero-text">
            {pretitle && <p className="lead-m">{pretitle}</p>}
            <TextReveal title={title}/>
          </div>
        </div>
      </div>
      <div className="hero-img-container">
        <img src={isMobile && imgMobile ? imgMobile : img} alt="hero visual" />
      </div>
    </div>
  );
};

export default Hero;
