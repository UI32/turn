import React from "react";
import imageGrid21 from "../../../assets/images/commercial-plant/image-grid-2-1.jpg";
import imageGrid22 from "../../../assets/images/commercial-plant/image-grid-2-2.jpg";
import imageGrid23 from "../../../assets/images/commercial-plant/image-grid-2-3.jpg";
import imageGrid24 from "../../../assets/images/commercial-plant/image-grid-2-4.jpg";
import useTranslations from "../../../hooks/useTranslations";
import sensor from "../../../assets/images/hero-sensor.png";
import { HOME_HERO_VIDEO } from "../../../constants/mediaUrls";

const ImageGrid2 = () => {
  const t = useTranslations();

  return (
    <section className="commercial-plant-grid-2">
      <div className="no-p-md wrapper">
        <div className="video-bg" data-aos="custom-animation">
          <div className="video-container">
            <div className="video-size-wrapper">
              <img className="sensor" src={sensor} alt="video sensor" />
              <video autoPlay loop muted playsInline>
                <source src={HOME_HERO_VIDEO} />
              </video>
            </div>
          </div>
          {/* <script src="https://player.vimeo.com/api/player.js"></script> */}
        </div>
      </div>
      <div className="wrapper">
        <div className="image-grid">
          <div className="image-grid-col-1">
            <div className="image-grid-item image-grid-item--content">
              <h4 className="alpha">{t("plant-grid-2:title")}</h4>
              <p className="text-xl">{t("plant-grid-2:text")}</p>
            </div>
            <div className="image-grid-item show-in-tablet">
              <img
                src={imageGrid21}
                alt="plant inaguration photo"
                loading="lazy"
              />
            </div>
            <div className="image-grid-item show-in-tablet">
              <img
                src={imageGrid22}
                alt="plant inaguration photo"
                loading="lazy"
              />
            </div>
          </div>
          <div className="image-grid-col-2">
            <div className="image-grid-item show-in-tablet">
              <img
                src={imageGrid23}
                alt="plant inaguration photo"
                loading="lazy"
              />
            </div>
            <div className="image-grid-item show-in-tablet">
              <img
                src={imageGrid24}
                alt="plant inaguration photo"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="commercial-plant-grid-2-slider hide-in-tablet">
        <div className="commercial-plant-grid-2-slider-wrapper">
          <div className="commercial-plant-grid-2-slider-container">
            <div className="commercial-plant-grid-2-slider-item">
              <img
                src={imageGrid21}
                alt="plant inaguration photo"
                loading="lazy"
              />
            </div>
            <div className="commercial-plant-grid-2-slider-item">
              <img
                src={imageGrid22}
                alt="plant inaguration photo"
                loading="lazy"
              />
            </div>
            <div className="commercial-plant-grid-2-slider-item">
              <img
                src={imageGrid23}
                alt="plant inaguration photo"
                loading="lazy"
              />
            </div>
            <div className="commercial-plant-grid-2-slider-item">
              <img
                src={imageGrid24}
                alt="plant inaguration photo"
                loading="lazy"
              />
            </div>
            <div className="commercial-plant-grid-2-slider-item spacer"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageGrid2;