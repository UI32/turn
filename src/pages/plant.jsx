import React from "react";
import AppWrapper from "../ui/layouts/AppWarpper";
import HelmetComponent from "../ui/layouts/HelmetComponent";
import metaTags from "../config/meta-tags/en.json";
import { getLocaleFromPathname } from "../libs/i18n";
import CommercialPlant from "../ui/pages/CommercialPlantPage";

const Plant = props => {
  const locale = getLocaleFromPathname(props.location);

  return (
    <>
      <HelmetComponent
        title={metaTags.plantTitle}
        description={metaTags.plant}
        page="/plant"
        keywords={metaTags.keys}
      />
      <AppWrapper {...props} lang={locale}>
        <CommercialPlant />
      </AppWrapper>
    </>
  );
};

export default Plant;
