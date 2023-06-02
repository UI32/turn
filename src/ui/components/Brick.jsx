import React from "react";
import cx from "classnames";

const Brick = ({ className, children, id, aos }) => {
  return (
    <div
      className={cx(`brick`, {
        [className]: className,
      })}
      id={id}
      data-aos={aos}
    >
      <div className="wrapper">{children}</div>
    </div>
  );
};

export default Brick;
