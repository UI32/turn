import React from "react";
import cx from "classnames";
import useSwitchLanguage from "../../hooks/useSwitchLanguage";
import { useIntl } from "react-intl";

const LangSelector = ({ className }) => {
  const switchToEn = useSwitchLanguage("en");
  const switchToDe = useSwitchLanguage("de");
  const { locale } = useIntl();
  return (
    <div className={cx("lang-selector", { [className]: className })}>
      <button
        className={cx("lang-item", { active: locale === "de" })}
        onClick={switchToDe}
        aria-label="button language selection"
        disabled={locale === "de"}
      >
        EN
      </button>
      <button
        className={cx("lang-item", { active: locale === "en" })}
        onClick={switchToEn}
        aria-label="button language selection"
        disabled={locale === "en"}
      >
        DE
      </button>
    </div>
  );
};

export default LangSelector;
