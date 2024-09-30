import React from "react";
import cx from "classnames";
import AnimatedCounter from "./AnimatedCounter";

const SolutionCard = ({ img, id, label, text, num1, num2, duration }) => {
  return (
    <div className={cx("solution-card", id)}>
      <div className="solution-card-head">
        <p className="solution-card-label lead-m">{label}</p>
        <p className="solution-card-number">
          <AnimatedCounter
            className="solution-card-number-big"
            dataNum={num1}
            duration={duration}
          />
          <span className="solution-card-number-small">{num2}</span>
        </p>
        <p className="text-xl">{text}</p>
      </div>
      <div className="solution-card-img-container">
        <img src={img} alt="solutions visual" loading="lazy" />
      </div>
    </div>
  );
};

export default SolutionCard;
