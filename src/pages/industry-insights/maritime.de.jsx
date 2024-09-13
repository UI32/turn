import React from "react";
import AppWrapper from "../../ui/layouts/AppWarpper";
import HelmetComponent from "../../ui/layouts/HelmetComponent";
import metaTags from "../../config/meta-tags/de.json";
import MaritimePage from "../../ui/pages/MaritimePage";

const Maritime = props => {

  return (
    <>
      <HelmetComponent
        title={metaTags.maritimeTitle}
        description={metaTags.maritime}
        page="/industry-insights/maritime"
        keywords={metaTags.keys}
      />
      <AppWrapper {...props} lang="de">
        <MaritimePage />
      </AppWrapper>
    </>
  );
};

export default Maritime;