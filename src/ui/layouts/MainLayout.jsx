import React from "react";
import cx from "classnames";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { MemoryRouter } from "react-router-dom";
import NotificationBanner from "../components/NotificationBanner";

const MainLayout = ({ children, className }) => {
  return (
    <MemoryRouter>
      <div className={cx("outer-wrapper", className)}>
        <NotificationBanner />
        <Header />
        <div className="content">{children}</div>
        <Footer />
      </div>
    </MemoryRouter>
  );
};

export default MainLayout;
