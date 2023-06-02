import React from "react";
import cx from "classnames";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { MemoryRouter } from "react-router-dom";

const SimpleLayout = ({ children, className }) => {
  return (
    <MemoryRouter>
      <div className={cx("outer-wrapper", "simple-layout", className)}>
        <Header />
        <div className="content">{children}</div>
        <Footer hasNav={false} />
      </div>
    </MemoryRouter>
  );
};

export default SimpleLayout;
