import React from "react";
import AppWrapper from "../ui/layouts/AppWarpper";
import HelmetComponent from "../ui/layouts/HelmetComponent";
import metaTags from "../config/meta-tags/en.json";
import { getLocaleFromPathname } from "../libs/i18n";
import LegalPage from "../ui/pages/LegalPage";

const Legal = props => {
  const locale = getLocaleFromPathname(props.location);

  return (
    <>
      <HelmetComponent
        title={metaTags.legalTitle}
        description={metaTags.legal}
        page="/legal"
      />
      <AppWrapper {...props} lang={locale}>
        <LegalPage />
      </AppWrapper>
    </>
  );
};

export default Legal;
