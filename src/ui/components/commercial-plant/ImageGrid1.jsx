import React from "react";
import imageGrid11 from "../../../assets/images/commercial-plant/image-grid-1-1.jpg";
import imageGrid12 from "../../../assets/images/commercial-plant/image-grid-1-2.jpg";
import imageGrid13 from "../../../assets/images/commercial-plant/image-grid-1-3.jpg";
import imageGrid1map from "../../../assets/images/commercial-plant/image-grid-1-map.png";
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
              <h4 className="alpha">{t("plant-grid-1:title")}</h4>
              <p className="text-xl">{t("plant-grid-1:text")}</p>
            </div>
            <div className="image-grid-item image-grid-item--map">
              <a
                href="https://www.google.com/maps/place/Miajadas,+C%C3%A1ceres/@39.1557412,-5.9133892,7225m/data=!3m1!1e3!4m6!3m5!1s0xd144d5d1672a3db:0xa4384d535d448d92!8m2!3d39.1547405!4d-5.9021324!16s%2Fm%2F02z7k44?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
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
