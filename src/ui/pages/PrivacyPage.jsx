import React from "react";
import useTranslations from "../../hooks/useTranslations";
import SimpleLayout from "../layouts/SimpleLayout";

const PrivacyPage = () => {
  const t = useTranslations();

  return (
    <SimpleLayout>
      <div className="generic-content">
        <div className="inner-wrapper">
          <h2 className="gamma">{t("sample:text")}</h2>
          <ul className="basic-list">
            <li>{t("sample:text")}</li>
            <li>{t("sample:text")}</li>
            <li>{t("sample:text")}</li>
            <li>{t("sample:text")}</li>
            <li>{t("sample:text")}</li>
            <li>{t("sample:text")}</li>
          </ul>
          <h3 className="delta">{t("sample:text")}</h3>
          <p>{t("sample:text")}</p>
          <h3 className="delta">{t("sample:text")}</h3>
          <p>{t("sample:text")}</p>
        </div>
      </div>
    </SimpleLayout>
  );
};

export default PrivacyPage;
