import React, { useState, useMemo } from "react";
import Carousel from "../components/Carousel";
import useTranslations from "../../hooks/useTranslations";
import img1 from "../../assets/images/about/accordion-1.png";
import img2 from "../../assets/images/about/accordion-2.png";
import img3 from "../../assets/images/about/accordion-3.png";
import img4 from "../../assets/images/about/accordion-4.png";
import { valuesCards } from "../../constants/carouselSettings";
import useMediaQuery from "../../hooks/useMediaQuery";

const AccordionCard = React.memo(({ label, title, text, imgSrc }) => (
  <article className="accordion-card">
    <div className="accordion-card-img-container">
      <img src={imgSrc} alt={title} className="accordion-card-img" />
    </div>
    <div className="accordion-card-content">
      <p className="accordion-card-label lead-m">{label}</p>
      <h4 className="accordion-card-title beta">{title}</h4>
      <p className="accordion-card-text text-xl">{text}</p>
    </div>
  </article>
));

const Accordion = () => {
  const t = useTranslations();
  const isSmallScreen = useMediaQuery("(max-width: 1080px)");
  const [activeIndex, setActiveIndex] = useState(0);

  const accordionItems = useMemo(
    () => [
      {
        id: 1,
        yearKey: "2012",
        titleKey: t("about-accordion:title-1"),
        textKey: t("about-accordion:text-1"),
        img: img1,
      },
      {
        id: 2,
        yearKey: "2021",
        titleKey: t("about-accordion:title-2"),
        textKey: t("about-accordion:text-2"),
        img: img2,
      },
      {
        id: 3,
        yearKey: "2022",
        titleKey: t("about-accordion:title-3"),
        textKey: t("about-accordion:text-3"),
        img: img3,
      },
      {
        id: 4,
        yearKey: "2023",
        titleKey: t("about-accordion:title-4"),
        textKey: t("about-accordion:text-4"),
        img: img4,
      },
    ],
    [t],
  );

  const handleAccordionClick = index => {
    setActiveIndex(index);
  };

  const renderAccordionItems = items =>
    items.map((item, index) => (
      <div
        key={item.id}
        role="button"
        tabIndex={0}
        className={`accordion-item accordion-item-${item.id} ${
          activeIndex === index ? "active" : ""
        }`}
        onClick={() => handleAccordionClick(index)}
        onKeyDown={e => {
          if (e.key === "Enter" || e.key === " ") {
            handleAccordionClick(index);
          }
        }}
      >
        <div
          className="accordion-item-img"
          style={{ backgroundImage: `url(${item.img})` }}
        ></div>
        <span className="accordion-item-year text-xl">{item.yearKey}</span>
        <div className="accordion-item-content">
          <p className="alpha">{item.titleKey}</p>
          <p className="text-xl">{item.textKey}</p>
        </div>
      </div>
    ));

  return (
    <section className="accordion">
      <div className="wrapper">
        {isSmallScreen ? (
          <div className="accordion-carousel custom-slick">
            <Carousel settings={valuesCards}>
              {accordionItems.map(item => (
                <AccordionCard
                  key={item.id}
                  label={item.yearKey}
                  title={item.titleKey}
                  text={item.textKey}
                  imgSrc={item.img}
                />
              ))}
            </Carousel>
          </div>
        ) : (
          <div className="accordion-container">
            {renderAccordionItems(accordionItems)}
          </div>
        )}
      </div>
    </section>
  );
};

export default Accordion;
