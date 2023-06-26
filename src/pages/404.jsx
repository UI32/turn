import React from "react";
import AppWrapper from "../ui/layouts/AppWarpper";
import HelmetComponent from "../ui/layouts/HelmetComponent";
import { getLocaleFromPathname } from "../libs/i18n";
import NotFoundPage from "../ui/pages/NotFoundPage";

const Legal = props => {
  const locale = getLocaleFromPathname(props.location);

  return (
    <>
      <HelmetComponent
        title="Not found"
        description="Not found page"
        page="/404"
      />
      <AppWrapper {...props} lang={locale}>
        <NotFoundPage />
      </AppWrapper>
    </>
  );
};

export default Legal;
