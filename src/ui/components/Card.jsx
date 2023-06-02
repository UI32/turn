import React from "react";
import useTranslations from "../../hooks/useTranslations";
import cx from "classnames";

const Card = ({ title, content, className }) => {
  const t = useTranslations();

  return (
    <div className={cx("card", { [className]: className })}>
      <h2 className="gamma">{t(title)}</h2>
      {content}
    </div>
  );
};

export default Card;
