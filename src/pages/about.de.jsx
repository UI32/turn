import React from "react";
import AppWrapper from "../ui/layouts/AppWarpper";
import HelmetComponent from "../ui/layouts/HelmetComponent";
import metaTags from "../config/meta-tags/de.json";
import AboutPage from "../ui/pages/AboutPage";

const About = props => {
  return (
    <>
      <HelmetComponent
        title={metaTags.aboutTitle}
        description={metaTags.about}
        page="/about"
        keywords={metaTags.keys}
      />
      <AppWrapper {...props} lang="de">
        <AboutPage />
      </AppWrapper>
    </>
  );
};

export default About;
