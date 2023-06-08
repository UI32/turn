import React from "react";
import useTranslations from "../../hooks/useTranslations";
import { ReactComponent as Cross } from "../../assets/icons/cross.svg";
import cx from "classnames";

const Member = ({ image, name, alt, position, description, extended }) => {
  const t = useTranslations();
  return (
    <div className={cx("member", { extended: extended })}>
      <img src={image} alt={alt} className="member-image" />
      <div className="member-info">
        <h2 className="member-name">{name}</h2>
        <p className="member-position">{t(position)}</p>
        <p className="member-description">{t(description)}</p>
      </div>
      <button className="close-button" onClick={() => {}}>
        <Cross />
      </button>
    </div>
  );
};

export default Member;
