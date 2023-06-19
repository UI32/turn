import React, { useState } from "react";
import AppWrapper from "../ui/layouts/AppWarpper";
import HelmetComponent from "../ui/layouts/HelmetComponent";
import metaTags from "../config/meta-tags/en.json";
import { getLocaleFromPathname } from "../libs/i18n.js";
import HomePage from "../ui/pages/HomePage";
import { validInput } from "../utils/entryCheck";
import NotFoundPage from "./404";

const IndexPage = props => {
  const locale = getLocaleFromPathname(props.location);

  const userInput = window.prompt("Enter password: ");
  const result = validInput(userInput);

  return (
    <>
      <HelmetComponent
        title={metaTags.indexTitle}
        description={metaTags.index}
        keywords={metaTags.indexKeys}
        page=""
      />
      <AppWrapper {...props} lang={locale}>
        {result ? <HomePage /> : <NotFoundPage />}
      </AppWrapper>
    </>
  );
};

export default IndexPage;
