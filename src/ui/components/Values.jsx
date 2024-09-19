import React, { useMemo } from "react";
import Carousel from "../components/Carousel";
import useTranslations from "../../hooks/useTranslations";
import value1 from "../../assets/images/about/climate.svg";
import value2 from "../../assets/images/about/customer.svg";
import value3 from "../../assets/images/about/own.svg";
import value4 from "../../assets/images/about/backbone.svg";
import value5 from "../../assets/images/about/strength.svg";
import { valuesCards } from "../../constants/carouselSettings";
import useMediaQuery from "../../hooks/useMediaQuery";

const ValueItem = ({ label, title, text, imgSrc }) => (
  <article className="value-item">
    <div className="value-item-heading">
      <p className="value-item-pretitle lead-m">{label}</p>
      <h4 className="value-item-title beta">{title}</h4>
      <p className="value-item-text text-xl">{text}</p>
    </div>
    <div className="value-item-img-container">
      <img src={imgSrc} alt={title} className="value-item-img" />
    </div>
  </article>
);

const Values = () => {
  const t = useTranslations();
  const isSmallScreen = useMediaQuery("(max-width: 780px)");

  const valuesItems = useMemo(
    () => [
      {
        id: 1,
        label: t("about-values:label-1"),
        title: t("about-values:title-1"),
        text: t("about-values:text-1"),
        imgSrc: value1,
      },
      {
        id: 2,
        label: t("about-values:label-2"),
        title: t("about-values:title-2"),
        text: t("about-values:text-2"),
        imgSrc: value2,
      },
      {
        id: 3,
        label: t("about-values:label-3"),
        title: t("about-values:title-3"),
        text: t("about-values:text-3"),
        imgSrc: value3,
      },
      {
        id: 4,
        label: t("about-values:label-4"),
        title: t("about-values:title-4"),
        text: t("about-values:text-4"),
        imgSrc: value4,
      },
      {
        id: 5,
        label: t("about-values:label-5"),
        title: t("about-values:title-5"),
        text: t("about-values:text-5"),
        imgSrc: value5,
      },
    ],
    [t],
  );

  const renderValueItems = () =>
    valuesItems.map(item => (
      <ValueItem
        key={item.id}
        label={item.label}
        title={item.title}
        text={item.text}
        imgSrc={item.imgSrc}
      />
    ));

  return (
    <section className="values-section">
      {isSmallScreen ? (
        <div className="wrapper">
          <div className="values-carousel custom-slick">
            <Carousel settings={valuesCards}>{renderValueItems()}</Carousel>
          </div>
        </div>
      ) : (
        <div className="values-wrapper">
          <div className="values-container">
            {renderValueItems()}
            <div className="value-item spacer"></div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Values;
