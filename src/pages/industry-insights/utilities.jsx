import React from "react";
import AppWrapper from "../../ui/layouts/AppWarpper";
import HelmetComponent from "../../ui/layouts/HelmetComponent";
import metaTags from "../../config/meta-tags/en.json";
import { getLocaleFromPathname } from "../../libs/i18n";
import UtilitiesPage from "../../ui/pages/UtilitiesPage";

const Utilities = props => {
  const locale = getLocaleFromPathname(props.location);

  return (
    <>
      <HelmetComponent
        title={metaTags.utilitiesTitle}
        description={metaTags.utilities}
        page="/industry-insights/utilities"
        keywords={metaTags.keys}
      />
      <AppWrapper {...props} lang={locale}>
        <UtilitiesPage />
      </AppWrapper>
    </>
  );
};

export default Utilities;