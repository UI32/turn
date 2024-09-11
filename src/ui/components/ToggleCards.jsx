import React from "react";
import useTranslations from "../../hooks/useTranslations";
import ToggleCard from "./ToggleCard";

const ToggleCards = ({items}) => {
  const t = useTranslations();

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

export default ToggleCards;
