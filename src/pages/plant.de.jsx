import React from "react";
import AppWrapper from "../ui/layouts/AppWarpper";
import HelmetComponent from "../ui/layouts/HelmetComponent";
import metaTags from "../config/meta-tags/en.json";
import CommercialPlant from "../ui/pages/CommercialPlantPage";

const Plant = props => {
  return (
    <>
      <HelmetComponent
        title={metaTags.plantTitle}
        description={metaTags.plant}
        page="/plant"
        keywords={metaTags.keys}
      />
      <AppWrapper {...props} lang="de">
        <CommercialPlant />
      </AppWrapper>
    </>
  );
};

export default Plant;
