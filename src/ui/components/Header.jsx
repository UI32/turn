import React, { useState, useCallback, useLayoutEffect } from "react";
import useTranslations from "../../hooks/useTranslations";
import LangSelector from "../components/LangSelector";
import { Link } from "gatsby";
import cx from "classnames";
import useScrollspy from "../../hooks/useScrollSpy";
import logo from "../../assets/images/logo.svg";
import ButtonHashLink from "../components/buttons/Button";

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

  const ids = ["mission", "howItWorks", "about"];
  const activeId = useScrollspy(ids, 101);

  return (
    <header className={cx("header", { "open-menu": isMenuOpen })}>
      <div className="wrapper">
        <Link to="/" className="logo" activeClassName="active">
          <img src={logo} alt="Logo Turn2x" />
        </Link>
        <nav className="main-nav" onClick={closeMenu}>
          <Link
            to="/#mission"
            className={cx("nav-item", {
              active: activeId === "mission",
            })}
          >
            {t("mission:name")}
          </Link>
          <Link
            to="/#howItWorks"
            className={cx("nav-item", {
              active: activeId === "howItWorks",
            })}
          >
            {t("how-it-works:name")}
          </Link>
          <Link
            to="/#howItWorks"
            className={cx("nav-item", {
              active: activeId === "about",
            })}
          >
            {t("about:name")}
          </Link>
          <LangSelector />
          <ButtonHashLink label="contact-sales:name" to="/#contact" />
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
