import React from "react";
import AppWrapper from "../ui/layouts/AppWarpper";
import HelmetComponent from "../ui/layouts/HelmetComponent";
import metaTags from "../config/meta-tags/en.json";
import { getLocaleFromPathname } from "../libs/i18n.js";
import HomePage from "../ui/pages/HomePage";
import { validInput } from "../utils/entryCheck";
import NotFoundPage from "./404";

const isPrivate = process.env.ACCESS === "private";

const IndexPage = props => {
  const locale = getLocaleFromPathname(props.location);

  const prompt =
    typeof window !== "undefined" && isPrivate
      ? window.prompt("Enter password: ")
      : undefined;

  const inputValid =
    isPrivate && prompt !== undefined ? validInput(prompt) : true;

  return inputValid ? (
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
  ) : (
    <NotFoundPage />
  );
};

export default IndexPage;
