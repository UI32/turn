import React from "react";
import useTranslations from "../../hooks/useTranslations";
import cx from "classnames";

const Goal = ({ past, className, date, text, icon }) => {
  const t = useTranslations();
  return (
    <div className={cx("goal", { "is-past": past, [className]: className })}>
      {icon}
      <div className="goal-info">
        <p className="date">{date}</p>
        <p className="text-xl">{t(text)}</p>
      </div>
    </div>
  );
};

export default Goal;
