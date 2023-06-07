import React from "react";
import useTranslations from "../../hooks/useTranslations";
import { ReactComponent as Cross } from "../../assets/icons/cross.svg";
import cx from "classnames";

const Member = ({ image, name, alt, position, description, extended }) => {
  const t = useTranslations();
  return (
    <div className={cx("about-member", { extended: extended })}>
      <img src={image} alt={alt} className="about-image" />
      <div className="about-info">
        <h2 className="about-name">{name}</h2>
        <p className="about-position">{t(position)}</p>
        <p className="about-description">{t(description)}</p>
      </div>
      <button className="close-button" onClick={() => {}}>
        <Cross />
      </button>
    </div>
  );
};

export default Member;
