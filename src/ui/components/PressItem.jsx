import React from "react";
import { Link } from "gatsby";
import useTranslations from "../../hooks/useTranslations";
import cx from "classnames";
import arrowIcon from "../../assets/icons/right-arrow-light.svg";

const PressItem = ({ to, title, pretitle, img, className }) => {
  const t = useTranslations();
  return (
    <Link to={to} className={cx("press-item", { [className]: className })}>
      <div className="press-item-heading">
        <div className="press-item-pretitle">
          <p className="lead-m">{t(pretitle)}</p>
          <img
            src={arrowIcon}
            alt="press item icon"
            className="press-item-icon"
          />
        </div>
        <h3 className="press-item-title beta">{t(title)}</h3>
      </div>
      <div className="press-item-img-container">
        <img src={img} alt="press item visual" className="press-item-img" />
      </div>
    </Link>
  );
};

export default PressItem;
