import React from "react";
import useTranslations from "../../../hooks/useTranslations";
import IntroCard from "../../components/industry-insights/IntroCard";
import PaperW from "../../../assets/icons/paper-white.svg";
import PaperL from "../../../assets/icons/paper-light.svg";
import EmissW from "../../../assets/icons/emiss-white.svg";
import EmissL from "../../../assets/icons/emiss-light.svg";
import FuelW from "../../../assets/icons/fuel-white.svg";
import FuelL from "../../../assets/icons/fuel-light.svg";
import AdaptiveCursor from "../AdaptiveCursor";


const cardData = [
  {
    iconLight: EmissL,
    iconWhite: EmissW,
    titleKey: "maritime-intro-card-1:title",
    textKey: "maritime-intro-card-1:text",
  },
  {
    iconLight: FuelL,
    iconWhite: FuelW,
    titleKey: "maritime-intro-card-2:title",
    textKey: "maritime-intro-card-2:text",
  },
  {
    iconLight: PaperL,
    iconWhite: PaperW,
    titleKey: "maritime-intro-card-3:title",
    textKey: "maritime-intro-card-3:text",
  },
];

const IntroCards = () => {
  const t = useTranslations();

  return (
    <section className="intro-cards">
      <div className="wrapper">
        <h2 className="jumbo">{t("maritime-intro:title")}</h2>

        <div className="intro-cards-container">
          <AdaptiveCursor bgColor="#F0E5A6"/>
          {cardData.map((card, index) => (
            <IntroCard
              key={index}
              iconLight={card.iconLight}
              iconWhite={card.iconWhite}
              title={t(card.titleKey)}
              text={t(card.textKey)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntroCards;
