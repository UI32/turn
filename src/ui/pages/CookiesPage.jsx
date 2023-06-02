import React from "react";
import useTranslations from "../../hooks/useTranslations";
import SimpleLayout from "../layouts/SimpleLayout";

const CookiesPage = () => {
  const t = useTranslations();

  return (
    <SimpleLayout>
      <div className="generic-content">
        <div className="inner-wrapper">
          <h2 className="gamma">{t("sample:text")}</h2>
          <p>{t("sample:text")}</p>
        </div>
      </div>
    </SimpleLayout>
  );
};

export default CookiesPage;
