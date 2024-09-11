import React from "react";
import useTranslations from "../../../hooks/useTranslations";
import IntroCard from "../../components/industry-insights/IntroCard";
import AdaptiveCursor from "../AdaptiveCursor";

const IntroCards = ({ title, cardItems }) => {
  const t = useTranslations();

  return (
    <section className="intro-cards">
      <div className="wrapper">
        <h2 className="jumbo">{title}</h2>

        <div className="intro-cards-container" data-aos="stagger-from-right" data-aos-anchor-placement="center-bottom" data-aos-once="true">
          <AdaptiveCursor bgColor="#F0E5A6" />
          {cardItems.map((card, index) => (
            <div className="w100" key={index}>
              <IntroCard
                iconLight={card.iconLight}
                iconWhite={card.iconWhite}
                title={t(card.titleKey)}
                text={t(card.textKey)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntroCards;
