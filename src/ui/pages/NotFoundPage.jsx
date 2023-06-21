import * as React from "react";
import { Link } from "gatsby-link";
import AnimatedIcon from "../components/AnimatedIcon";
import headerIcon from "../../assets/animations/Icon-1.json";
import logo from "../../assets/images/logo-text.svg";
import pattern from "../../assets/images/pattern3.png";
import useTranslations from "../../hooks/useTranslations";

const NotFoundPage = () => {
  const t = useTranslations();
  return (
    <div className="not-found-page">
      <div className="content wrapper">
        <Link to="/" className="logo" activeClassName="active">
          <AnimatedIcon
            lottieAnimation={headerIcon}
            loop={true}
            autoplay={true}
          ></AnimatedIcon>
          <img loading="lazy" src={logo} alt="Logo Turn2x" />
        </Link>
        <div className="panel">
          <h1 className="jumbo">404</h1>
          <h1 className="alpha">{t("error:title")}</h1>
          <Link className="button" to="/">
            {t("error:proceed")}
          </Link>
        </div>
      </div>
      <img
        loading="lazy"
        className="bottom-pattern"
        src={pattern}
        alt="pattern"
      />
    </div>
  );
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;
