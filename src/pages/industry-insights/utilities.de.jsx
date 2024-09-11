import React from "react";
import AppWrapper from "../../ui/layouts/AppWarpper";
import HelmetComponent from "../../ui/layouts/HelmetComponent";
import metaTags from "../../config/meta-tags/en.json";
import UtilitiesPage from "../../ui/pages/UtilitiesPage";

const Utilities = props => {

  return (
    <>
      <HelmetComponent
        title={metaTags.utilitiesTitle}
        description={metaTags.utilities}
        page="/industry-insights/utilities"
        keywords={metaTags.keys}
      />
      <AppWrapper {...props} lang="de">
        <UtilitiesPage />
      </AppWrapper>
    </>
  );
};

export default Utilities;