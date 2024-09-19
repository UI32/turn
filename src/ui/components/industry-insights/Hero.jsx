import React from "react";
import useMediaQuery from "../../../hooks/useMediaQuery";

const Hero = ({ title, pretitle, img, imgMobile }) => {

  const isMobile = useMediaQuery("(max-width: 780px)");

  return (
    <div className="hero hero__img">
      <div className="hero-intro">
        <div className="wrapper">
          <div className="hero-text">
            {pretitle && <p className="lead-m">{pretitle}</p>}
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
        <img src={isMobile && imgMobile ? imgMobile : img} alt="hero visual" />
      </div>
    </div>
  );
};

export default Hero;
