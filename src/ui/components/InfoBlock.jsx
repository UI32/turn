import React from "react";
import useTranslations from "../../hooks/useTranslations";
import cx from "classnames";

const InfoBlock = ({ title, content }) => {
  const t = useTranslations();

  return (
    <div className={cx("info-block")}>
      <h2 className="gamma">{t(title)}</h2>
      {content}
    </div>
  );
};

export default InfoBlock;
