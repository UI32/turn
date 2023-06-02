import * as React from "react";
import { IntlProvider } from "react-intl";
import AppWrapper from "../ui/layouts/AppWarpper";

const NotFoundPage = () => {
  return (
    <IntlProvider>
      <AppWrapper>
        <div className="not-found-page">
          <div className="content">
            404
          </div>
        </div>
      </AppWrapper>
    </IntlProvider>
  );
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;
