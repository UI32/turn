import { useIntl } from "react-intl";
import { DEFAULT_LOCALE, canonizePath } from "../libs/i18n";

export const useLocalizePath = lang => {
  const { locale } = useIntl();
  const dest = lang ? lang : locale;
  return path => {
    const canonPath = canonizePath(path);
    return dest !== DEFAULT_LOCALE ? `/${dest}${canonPath}` : canonPath;
  };
};

export default useLocalizePath;
