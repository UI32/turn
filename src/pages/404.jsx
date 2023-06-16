import * as React from "react";
import { IntlProvider } from "react-intl";
import AppWrapper from "../ui/layouts/AppWarpper";
import { Link } from "gatsby-link";
import AnimatedIcon from "../ui/components/AnimatedIcon";
import headerIcon from "../assets/animations/Icon-1.json";
import logo from "../assets/images/logo-text.svg";
import pattern from "../assets/images/pattern3.png";

const NotFoundPage = () => {
  return (
    <IntlProvider>
      <AppWrapper>
        <div className="not-found-page">
          <div className="content wrapper">
            <Link to="/" className="logo" activeClassName="active">
              <AnimatedIcon
                lottieAnimation={headerIcon}
                loop={true}
                autoplay={true}
              ></AnimatedIcon>
              <img src={logo} alt="Logo Turn2x" />
            </Link>
            <div className="panel">
              <h1 className="jumbo">404</h1>
              <h1 className="alpha">Page not found</h1>
              <Link className="button" to="/">
                Go Home
              </Link>
            </div>
          </div>
          <img className="bottom-pattern" src={pattern} alt="pattern" />
        </div>
      </AppWrapper>
    </IntlProvider>
  );
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;
