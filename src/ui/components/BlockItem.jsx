import React from "react";
import useTranslations from "../../hooks/useTranslations";

const BlockItem = ({ title, icon, text, aos }) => {
  const t = useTranslations();

  return (
    <div className="block-item" data-aos={aos}>
      <div className="icon-box">{icon}</div>
      <div className="info-box">
        <h3 className="delta">{t(title)}</h3>
        <p className="text">{t(text)}</p>
      </div>
    </div>
  );
};

export default BlockItem;
