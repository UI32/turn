import React from "react";
import useTranslations from "../../hooks/useTranslations";
import MainLayout from "../layouts/MainLayout";

const PrivacyPage = () => {
  const t = useTranslations();

  return (
    <MainLayout bottomPattern className="simple">
      <div className="generic-content wrapper">
        <h1 className="alpha">{t("data-privacy:name")}</h1>
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
    </MainLayout>
  );
};

export default PrivacyPage;
