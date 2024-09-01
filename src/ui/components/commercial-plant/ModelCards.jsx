import React, { useState, useEffect } from "react";
import Carousel from "../Carousel";
import ModelCard from "./ModelCard";
import { plantModelCards } from "../../../constants/carouselSettings";
import useTranslations from "../../../hooks/useTranslations";

const ModelCards = () => {
  const t = useTranslations();
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 960px)");
    setIsSmallScreen(mediaQuery.matches);
    const handleMediaQueryChange = e => {
      setIsSmallScreen(e.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div className="model-cards">
      {isSmallScreen ? (
        <Carousel settings={plantModelCards}>
          {[1, 2, 3, 4].map(num => (
            <ModelCard
              key={num}
              title={t(`plant-card-${num}:title`)}
              subtitle={t(`plant-card-${num}:subtitle`)}
              text={t(`plant-card-${num}:text`)}
            />
          ))}
        </Carousel>
      ) : (
        <div className="model-cards-desktop">
          {[1, 2, 3, 4].map(num => (
            <ModelCard
              key={num}
              title={t(`plant-card-${num}:title`)}
              subtitle={t(`plant-card-${num}:subtitle`)}
              text={t(`plant-card-${num}:text`)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ModelCards;
