import React from "react";
import useTranslations from "../../hooks/useTranslations";
import cx from "classnames";

const Panel = ({ className, pretitle, title, icon, children }) => {
  const t = useTranslations();
  return (
    <div className={cx("panel", { [className]: className })}>
      <div className="panel-header">
        {icon}
        <p className="panel-pretitle lead-m">{t(pretitle)}</p>
        <h2
          className="alpha"
          dangerouslySetInnerHTML={{
            __html: t(title),
          }}
        />
      </div>
      <div className="panel-content">{children}</div>
    </div>
  );
};

export default Panel;
