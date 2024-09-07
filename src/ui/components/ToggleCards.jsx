import React from "react";
import useTranslations from "../../hooks/useTranslations";
import ToggleCard from "./ToggleCard";

const Press = () => {
  const t = useTranslations();

  const items = [
    {
      id: "item1",
      titleKey: "maritime-3d-card-1:title",
      textKey: "maritime-3d-card-1:text",
    },
    {
      id: "item2",
      titleKey: "maritime-3d-card-2:title",
      textKey: "maritime-3d-card-3:text",
    },
    {
      id: "item3",
      titleKey: "maritime-3d-card-3:title",
      textKey: "maritime-3d-card-3:text",
    },        
  ];

  return (
    <div className="toggle-cards">
      {items.map(item => (
        <ToggleCard
          key={item.id}
          title={t(item.titleKey)}
          text={t(item.textKey)}
        />
      ))}
    </div>
  );
};

export default Press;
