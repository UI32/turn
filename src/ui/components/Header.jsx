import React, { useState, useCallback, useLayoutEffect } from "react";
import useTranslations from "../../hooks/useTranslations";
import LangSelector from "../components/LangSelector";
import {Link} from "gatsby";
import cx from "classnames";
import useScrollspy from "../../hooks/useScrollSpy";

const Header = () => {
  const t = useTranslations();

  const [isMenuOpen, setisMenuOpen] = useState(false);
  const toggleMenu = useCallback(
    () => setisMenuOpen(!isMenuOpen),
    [isMenuOpen],
  );
  const closeMenu = useCallback(() => setisMenuOpen(false), [setisMenuOpen]);

  useLayoutEffect(() => {
    // Remove body scroll when menu is open
    // Get original body overflow
    // const originalStyle = window.getComputedStyle(document.body).overflow
    // Prevent scrolling on mount
    if (isMenuOpen) {
      document.body.classList.add("disable-scroll-mobile");
    }
    // Re-enable scrolling when component unmounts
    return () => document.body.classList.remove("disable-scroll-mobile");
  }, [isMenuOpen]); // Empty array ensures effect is only run on mount and unmount

  const ids = ["option1", "option2"];
  const activeId = useScrollspy(ids, 101);

  return (
    <header className={cx("header", { "open-menu": isMenuOpen })}>
      <div className="wrapper">
        <Link to="/" className="logo" activeClassName="active">
          Logo
        </Link>
        <nav className="main-nav" onClick={closeMenu}>
          <Link
            to=""
            className={cx("nav-item", {
              active: activeId === "option1" || activeId === "option2",
            })}
          >
            {t("sample:text")}
          </Link>
          <LangSelector />
        </nav>
        <button
          className="button-menu show-in-mobile"
          onClick={toggleMenu}
          aria-label="menu"
        >
          <span className="hamburger"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
