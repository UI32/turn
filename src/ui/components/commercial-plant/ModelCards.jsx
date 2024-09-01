import React, { useState, useEffect } from "react";
import Carousel from "../Carousel";
import ModelCard from "./ModelCard";
import { plantModelCards } from "../../../constants/carouselSettings";
import useTranslations from "../../../hooks/useTranslations";

const ModelCards = () => {
  const t = useTranslations();
  const [isSmallScreen, setIsSmallScreen] = useState(
    window.matchMedia("(max-width: 960px)").matches,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 960px)");
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

      {isSmallScreen && (
        <Carousel settings={plantModelCards}>
          <ModelCard
            title={t("plant-card-1:title")}
            subtitle={t("plant-card-1:subtitle")}
            text={t("plant-card-1:text")}
          />
          <ModelCard
            title={t("plant-card-2:title")}
            subtitle={t("plant-card-2:subtitle")}
            text={t("plant-card-2:text")}
          />
          <ModelCard
            title={t("plant-card-3:title")}
            subtitle={t("plant-card-3:subtitle")}
            text={t("plant-card-3:text")}
          />
          <ModelCard
            title={t("plant-card-4:title")}
            subtitle={t("plant-card-4:subtitle")}
            text={t("plant-card-4:text")}
          />
        </Carousel>
      )}

      {!isSmallScreen && (
        <div className="model-cards-desktop">
          <ModelCard
            title={t("plant-card-1:title")}
            subtitle={t("plant-card-1:subtitle")}
            text={t("plant-card-1:text")}
          />
          <ModelCard
            title={t("plant-card-2:title")}
            subtitle={t("plant-card-2:subtitle")}
            text={t("plant-card-2:text")}
          />
          <ModelCard
            title={t("plant-card-3:title")}
            subtitle={t("plant-card-3:subtitle")}
            text={t("plant-card-3:text")}
          />
          <ModelCard
            title={t("plant-card-4:title")}
            subtitle={t("plant-card-4:subtitle")}
            text={t("plant-card-4:text")}
          />
        </div>
      )}
    </div>
  );
};

export default ModelCards;
