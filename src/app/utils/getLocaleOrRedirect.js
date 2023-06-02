import {
  setupI18n,
  getBrowserLocale,
  canonizePath,
  DEFAULT_LOCALE,
} from "../../libs/i18n";
import { navigate } from "gatsby";

function getForcedLocale() {
  if (typeof window !== "undefined") {
    return localStorage.getItem("content-language");
  }
}

const localizePath = (lang, path) => {
  const canonPath = canonizePath(path);
  return lang !== DEFAULT_LOCALE ? `/${lang}${canonPath}` : canonPath;
};

function getLocaleOrRedirect(isSSR, location, lang) {
  // -- BEGIN i18n -----
  const forcedLocale = getForcedLocale();
  const browserLocale = getBrowserLocale();
  const { messages, locale } = setupI18n(lang || DEFAULT_LOCALE);
  const pathname = isSSR ? "/" : location.pathname || window.location.pathname;
  // console.log({ lang, locale, forcedLocale })
  if (lang !== undefined && lang !== forcedLocale && !isSSR) {
    console.log("--> Removed forced locale");
    localStorage.removeItem("content-language");
  }
  if (!lang && forcedLocale && forcedLocale !== locale) {
    console.log("--> Redirect! (A)");
    navigate(localizePath(forcedLocale, pathname), { replace: true });
  } else if (!lang && !forcedLocale && locale !== browserLocale && !isSSR) {
    console.log("--> Redirect! (B)");
    navigate(localizePath(browserLocale, pathname), { replace: true });
  }
  return { messages, locale };
}

export default getLocaleOrRedirect;
