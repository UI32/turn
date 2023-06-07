import React, { useState, useCallback, useLayoutEffect } from "react";
import useTranslations from "../../hooks/useTranslations";
import LangSelector from "../components/LangSelector";
import { Link } from "gatsby";
import cx from "classnames";
import useScrollspy from "../../hooks/useScrollSpy";
import logo from "../../assets/images/logo.svg";
import ButtonHashLink from "../components/buttons/Button";
import AnimatedIcon from "./AnimatedIcon";
import topLogoAnimation from "../../assets/animations/Icon-1.json";

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
          <AnimatedIcon
            lottieAnimation={topLogoAnimation}
            loop={true}
            autoplay={true}
          ></AnimatedIcon>
          {/* <img src={logo} alt="Logo Turn2x" /> */}
        </Link>
        <div className="header-content">
          <nav className="header-nav" onClick={closeMenu}>
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
          </nav>

          <div className="header-actions">
            <LangSelector />
            <ButtonHashLink clear label="contact-sales:name" to="/#contact" />
          </div>
        </div>

        <button
          className="button-menu show-in-mobile"
          onClick={toggleMenu}
          aria-label="menu"
        >
          <div className="hamburger">
            <span className="line line-1"></span>
            <span className="line line-2"></span>
            <span className="line line-3"></span>
          </div>
        </button>
      </div>
    </header>
  );
};

export default Header;
