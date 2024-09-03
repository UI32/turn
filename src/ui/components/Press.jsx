import React from "react";
import PressItem from "./PressItem";
import useTranslations from "../../hooks/useTranslations";
import imgEnergy from "../../assets/images/press-item-energy.jpg";
import imgMariti from "../../assets/images/press-item-maritime.jpg";
import imgUtilit from "../../assets/images/press-item-utilities.jpg";

const Press = ({ hiddenItem }) => {
  const t = useTranslations();

  const pressItems = [
    {
      id: "maritime",
      to: "/",
      pretitleKey: "press:item-1-pre",
      titleKey: "press:item-1-title",
      img: imgMariti,
    },
    {
      id: "utilities",
      to: "/",
      pretitleKey: "press:item-1-pre",
      titleKey: "press:item-1-title",
      img: imgUtilit,
    },
    {
      id: "energy",
      to: "/",
      pretitleKey: "press:item-1-pre",
      titleKey: "press:item-1-title",
      img: imgEnergy,
    },
  ];

  return (
    <section className="press">
      <div className="press-wrapper">
        <div className="press-container">

          <div className="press-item press-item-first">
            <div className="press-item-heading">
              <div className="press-item-pretitle">
                <p className="lead-m">{t("press:label")}</p>
              </div>
              <h3 className="press-item-title alpha">{t("press:title")}</h3>
              <p className="press-item-text text-xl">{t("press:text")}</p>
            </div>
          </div>

          {pressItems.map((item) =>
            item.id !== hiddenItem ? (
              <PressItem
                key={item.id}
                to={item.to}
                pretitle={t(item.pretitleKey)}
                title={t(item.titleKey)}
                img={item.img}
              />
            ) : null
          )}
          <div className="press-item spacer"></div>
        </div>
      </div>
    </section>
  );
};

export default Press;
