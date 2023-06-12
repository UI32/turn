import React from "react";
import useTranslations from "../../hooks/useTranslations";
import MainLayout from "../layouts/MainLayout";

const LegalPage = () => {
  const t = useTranslations();

  return (
    <MainLayout bottomPattern className="simple">
      <div className="generic-content wrapper">
        <h1 className="alpha">{t("legal:name")}</h1>
        <div className="inner-wrapper">
          <p>{t("sample:text")}</p>
          <ul className="basic-list">
            <li>{t("sample:text")}</li>
            <li>{t("sample:text")}</li>
            <li>{t("sample:text")}</li>
            <li>{t("sample:text")}</li>
            <li>{t("sample:text")}</li>
            <li>{t("sample:text")}</li>
          </ul>
          <div className="panel">Info</div>
        </div>
      </div>
    </MainLayout>
  );
};

export default LegalPage;
