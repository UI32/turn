import React, { useEffect } from "react";
import { IntlProvider } from "react-intl";
import moment from "moment";
import getLocaleOrRedirect from "../../app/utils/getLocaleOrRedirect";
import "../../assets/stylesheets/style.scss";

const AppWrapper = ({ children, location = {}, lang }) => {
  const isSSR = typeof window === "undefined";
  // -- BEGIN i18n ---
  const { messages, locale } = getLocaleOrRedirect(isSSR, location, lang);
  if (locale !== "en")
    moment.locale(locale, { months: messages.months?.split("") });
  useEffect(() => {
    // set locale attribute (lighthouse compliance)
    document.querySelector("html").setAttribute("lang", locale);
    // class in body to style each language
    document.body.classList.value = locale;
    // autoscroll to top of document on navigation
    // if (!isSSR) window.scrollTo(0, 0);
  }, [
    locale,
    // location
  ]);
  // -- END i18n ----

  return (
    <IntlProvider
      messages={messages}
      locale={locale}
      textComponent={React.Fragment}
    >
      {children}
    </IntlProvider>
  );
};

export default AppWrapper;
