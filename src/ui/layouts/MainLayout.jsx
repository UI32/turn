import React, { useState, useCallback } from "react";
import cx from "classnames";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { MemoryRouter } from "react-router-dom";
import pattern from "../../assets/images/bottom-pattern3.png";
import pattern3 from "../../assets/images/pattern3-min.png";

const MainLayout = ({ children, className, bottomPattern, simple }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = useCallback((isOpen) => {
    setIsMenuOpen(isOpen);
  }, []);

  return (
    <MemoryRouter>
      <div
        className={cx("outer-wrapper", {
          [className]: className,
          simple: simple,
        })}
      >
        <Header onMenuToggle={handleMenuToggle} />
        <div className={cx("content", { opacity: isMenuOpen })}>
          {children}
        </div>
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
