import React from "react";
import AppWrapper from "../../ui/layouts/AppWarpper";
import HelmetComponent from "../../ui/layouts/HelmetComponent";
import metaTags from "../../config/meta-tags/en.json";
import { getLocaleFromPathname } from "../../libs/i18n";
import EnergyPage from "../../ui/pages/EnergyPage";

const Energy = props => {
  const locale = getLocaleFromPathname(props.location);

  return (
    <>
      <HelmetComponent
        title={metaTags.energyTitle}
        description={metaTags.energy}
        page="/industry-insights/energy"
        keywords={metaTags.keys}
      />
      <AppWrapper {...props} lang={locale}>
        <EnergyPage />
      </AppWrapper>
    </>
  );
};

export default Energy;