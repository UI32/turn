import React from "react";
import AppWrapper from "../ui/layouts/AppWarpper";
import HelmetComponent from "../ui/layouts/HelmetComponent";
import NotFoundPage from "../ui/pages/NotFoundPage";

const Error404 = props => {
  return (
    <>
      <HelmetComponent
        title="Not found page"
        description="Not found page"
        page="/de/404"
      />
      <AppWrapper {...props} lang="de">
        <NotFoundPage />
      </AppWrapper>
    </>
  );
};

export default Error404;
