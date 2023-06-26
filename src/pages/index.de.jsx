import React from "react";
import AppWrapper from "../ui/layouts/AppWarpper";
import HelmetComponent from "../ui/layouts/HelmetComponent";
import metaTags from "../config/meta-tags/de.json";
import HomePage from "../ui/pages/HomePage";

const IndexPage = props => {
  return (
    <>
      <HelmetComponent
        title={metaTags.indexTitle}
        description={metaTags.index}
        page="/de/"
        keywords={metaTags.indexKeys}
      />
      <AppWrapper {...props} lang="de">
        <HomePage />
      </AppWrapper>
    </>
  );
};

export default IndexPage;
