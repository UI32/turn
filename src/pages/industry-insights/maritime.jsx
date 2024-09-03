import React from "react";
import AppWrapper from "../../ui/layouts/AppWarpper";
import HelmetComponent from "../../ui/layouts/HelmetComponent";
import metaTags from "../../config/meta-tags/en.json";
import { getLocaleFromPathname } from "../../libs/i18n";
import MaritimePage from "../../ui/pages/MaritimePage";

const Maritime = props => {
  const locale = getLocaleFromPathname(props.location);

  return (
    <>
      <HelmetComponent
        title={metaTags.maritimeTitle}
        description={metaTags.maritime}
        page="/industry-insights/maritime"
        keywords={metaTags.keys}
      />
      <AppWrapper {...props} lang={locale}>
        <MaritimePage />
      </AppWrapper>
    </>
  );
};

export default Maritime;