import React from "react";
import AppWrapper from "../ui/layouts/AppWarpper";
import HelmetComponent from "../ui/layouts/HelmetComponent";
import metaTags from "../config/meta-tags/en.json";
import { getLocaleFromPathname } from "../libs/i18n.js";
import HomePage from "../ui/pages/HomePage";

const IndexPage = props => {
  const locale = getLocaleFromPathname(props.location);

  return (
    <>
      <HelmetComponent
        title={metaTags.indexTitle}
        description={metaTags.index}
        keywords={metaTags.indexKeys}
        page=""
      />
      <AppWrapper {...props} lang={locale}>
        <HomePage />
      </AppWrapper>
    </>
  );
};

export default IndexPage;
