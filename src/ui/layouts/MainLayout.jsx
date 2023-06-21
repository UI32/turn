import React from "react";
import cx from "classnames";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { MemoryRouter } from "react-router-dom";
import NotificationBanner from "../components/NotificationBanner";
import pattern from "../../assets/images/bottom-pattern3.png";
import pattern3 from "../../assets/images/pattern3-min.png";

const MainLayout = ({ children, className, bottomPattern, simple }) => {
  return (
    <MemoryRouter>
      <div
        className={cx("outer-wrapper", {
          [className]: className,
          simple: simple,
        })}
      >
        <NotificationBanner />
        <Header />
        <div className="content">{children}</div>
        <Footer />
        {bottomPattern && (
          <img
            className="bottom-pattern"
            src={simple ? pattern3 : pattern}
            alt="pattern"
            loading="lazy"
          />
        )}
      </div>
    </MemoryRouter>
  );
};

export default MainLayout;
