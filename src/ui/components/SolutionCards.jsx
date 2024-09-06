import React from "react";
import SolutionCard from "./SolutionCard";
import useTranslations from "../../hooks/useTranslations";
import img1 from "../../assets/images/solutions/solution-production.svg";
import img2 from "../../assets/images/solutions/solution-emission.svg";
import img3 from "../../assets/images/solutions/solution-energy.svg";

const SolutionCards = () => {
  const t = useTranslations();

  const items = [
    {
      id: "sol-1",
      labelKey: "maritime-solution-card-1:label",
      textKey: "maritime-solution-card-1:text",
      imgKey: img1,
      num1Key: "15",
      num2Key: "%",
    },
    {
      id: "sol-2",
      labelKey: "maritime-solution-card-2:label",
      textKey: "maritime-solution-card-2:text",
      imgKey: img2,
      num1Key: "83",
      num2Key: "%",
    },
    {
      id: "sol-3",
      labelKey: "maritime-solution-card-3:label",
      textKey: "maritime-solution-card-3:text",
      imgKey: img3,
      num1Key: "2",
      num2Key: "x",
    },
  ];

  return (
    <section className="solution-cards">
      <div className="wrapper">
        <p className="solution-cards-label lead-m">
          {t("maritime-solution:pretitle")}
        </p>
        <h3 className="solution-cards-title jumbo">
          {t("maritime-solution:title")}
        </h3>
      </div>

      <div className="solution-cards-wrapper">
        <div className="solution-cards-container">
          {items.map(item => (
            <SolutionCard
              key={item.id}
              id={item.id}
              label={t(item.labelKey)}
              text={t(item.textKey)}
              num1={item.num1Key}
              num2={item.num2Key}
              img={item.imgKey}
            />
          ))}
          <div className="solution-card spacer"></div>
        </div>
      </div>
    </section>
  );
};

export default SolutionCards;
