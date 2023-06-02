import React from "react";
import AppWrapper from "../ui/layouts/AppWarpper";
import HelmetComponent from "../ui/layouts/HelmetComponent";
import metaTags from "../config/meta-tags/en.json";
import { getLocaleFromPathname } from "../libs/i18n";
import CookiesPage from "../ui/pages/CookiesPage";

const Cookies = props => {
  const locale = getLocaleFromPathname(props.location);

  return (
    <>
      <HelmetComponent
        title={metaTags.cookiesTitle}
        description={metaTags.cookies}
        page="cookies"
      />
      <AppWrapper {...props} lang={locale}>
        <CookiesPage />
      </AppWrapper>
    </>
  );
};

export default Cookies;
