import useLocalizePath from "./useLocalizePath";
import { navigate } from "gatsby";

const useSwitchLanguage = targetLang => {
  const pathname =
    typeof window === "undefined" ? "" : window.location.pathname;
  const to = useLocalizePath(targetLang)(pathname);
  return () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("content-language", targetLang);
      navigate(to);
    }
  };
};

export default useSwitchLanguage;
