import React from "react";
import AppWrapper from "../ui/layouts/AppWarpper";
import HelmetComponent from "../ui/layouts/HelmetComponent";
import metaTags from "../config/meta-tags/en.json";
import { getLocaleFromPathname } from "../libs/i18n";
import AboutPage from "../ui/pages/AboutPage";

const About = props => {
  const locale = getLocaleFromPathname(props.location);

  return (
    <>
      <HelmetComponent
        title={metaTags.aboutTitle}
        description={metaTags.about}
        page="/about"
        keywords={metaTags.keys}
      />
      <AppWrapper {...props} lang={locale}>
        <AboutPage />
      </AppWrapper>
    </>
  );
};

export default About;
