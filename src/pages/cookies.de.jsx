import React from "react";
import AppWrapper from "../ui/layouts/AppWarpper";
import HelmetComponent from "../ui/layouts/HelmetComponent";
import metaTags from "../config/meta-tags/de.json";
import CookiesPage from "../ui/pages/CookiesPage";

const Cookies = props => {
  return (
    <>
      <HelmetComponent
        title={metaTags.cookiesTitle}
        description={metaTags.cookies}
        page="/de/cookies"
      />
      <AppWrapper {...props} lang="de">
        <CookiesPage />
      </AppWrapper>
    </>
  );
};

export default Cookies;
