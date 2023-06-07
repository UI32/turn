import React from "react";
import cx from "classnames";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { MemoryRouter } from "react-router-dom";
import NotificationBanner from "../components/NotificationBanner";
import pattern from "../../assets/images/pattern2.png";

const MainLayout = ({ children, className, bottomPattern }) => {
  return (
    <MemoryRouter>
      <div className={cx("outer-wrapper", className)}>
        <NotificationBanner />
        <Header />
        <div className="content">{children}</div>
        <Footer />
        {bottomPattern && (
          <img className="bottom-pattern" src={pattern} alt="pattern" />
        )}
      </div>
    </MemoryRouter>
  );
};

export default MainLayout;
