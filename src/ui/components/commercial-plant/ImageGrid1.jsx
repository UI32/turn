import React from "react";
import imageGrid11 from "../../../assets/images/commercial-plant/image-grid-1-1.jpg";
import imageGrid12 from "../../../assets/images/commercial-plant/image-grid-1-2.jpg";
import imageGrid13 from "../../../assets/images/commercial-plant/image-grid-1-3.jpg";
import imageGrid1map from "../../../assets/images/commercial-plant/image-grid-1-map.jpg";
import useTranslations from "../../../hooks/useTranslations";

const ImageGrid1 = () => {
  const t = useTranslations();

  return (
    <section className="grid-1">
      <div className="wrapper">
        <div className="image-grid">
          <div className="image-grid-col-1">
            <div className="image-grid-item">
              <img src={imageGrid11} alt="plant" loading="lazy" />
            </div>
            <div className="image-grid-item">
              <img src={imageGrid12} alt="plant" loading="lazy" />
            </div>
          </div>
          <div className="image-grid-col-2">
            <div className="image-grid-item">
              <img src={imageGrid13} alt="plant" loading="lazy" />
            </div>
            <div className="image-grid-item image-grid-item--content">
              <h4 className="alpha">
                {t("plant-grid-1:title")}
              </h4>
              <p className="text-xl">
                {t("plant-grid-1:text")}
              </p>
            </div>
            <div className="image-grid-item image-grid-item--map">
              <a href="/" target="_blank" rel="noopener noreferrer">
                <img src={imageGrid1map} alt="plant" loading="lazy" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageGrid1;
