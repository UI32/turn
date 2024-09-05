import React from "react";
import PressItem from "./PressItem";
import useTranslations from "../../hooks/useTranslations";
import imgEnergy from "../../assets/images/press-item-energy.jpg";
import imgMariti from "../../assets/images/press-item-maritime.jpg";
import imgUtilit from "../../assets/images/press-item-utilities.jpg";

const Press = ({ hiddenItem, pressItems = null, label, title, text }) => {
  const t = useTranslations();

  const defaultPressItems = [
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

  const items = pressItems || defaultPressItems;

  const pressLabel = label || t("press:label");
  const pressTitle = title || t("press:title");
  const pressText = text || t("press:text");

  return (
    <section className="press">
      <div className="press-wrapper">
        <div className="press-container">
          <div className="press-item press-item-first">
            <div className="press-item-heading">
              <div className="press-item-pretitle">
                <p className="lead-m">{pressLabel}</p>
              </div>
              <h3 className="press-item-title alpha">{pressTitle}</h3>
              <p className="press-item-text text-xl">{pressText}</p>
            </div>
          </div>

          {items.map((item) =>
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
