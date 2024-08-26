import React, {
  useState,
  useCallback,
  useLayoutEffect,
  useEffect,
} from "react";
import useTranslations from "../../hooks/useTranslations";
import LangSelector from "../components/LangSelector";
import Link from "../components/LinkLocalized";
import cx from "classnames";
import AnimatedIcon from "./AnimatedIcon";
import headerIcon from "../../assets/animations/Icon-1.json";
import logo from "../../assets/images/logo-text.svg";
import NavDropdown from "./NavDropdown";
import NavDropdownLink from "./NavDropdownLink";
import PaperD from "../../assets/icons/paper-dark.svg";

const Header = () => {
  const t = useTranslations();

  // Open/Close menu

  const [isMenuOpen, setisMenuOpen] = useState(false);
  const toggleMenu = useCallback(
    () => setisMenuOpen(!isMenuOpen),
    [isMenuOpen],
  );
  const closeMenu = useCallback(() => setisMenuOpen(false), [setisMenuOpen]);

  // Sticky header
  const [isSticky, setisSticky] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.pageYOffset;
      setisSticky(scrollTop > 80);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

  return (
    <header
      className={cx("header", {
        "open-menu": isMenuOpen,
        "is-sticky": isSticky,
      })}
    >
      <div className="wrapper">
        <Link to="/" className="logo" activeClassName="active">
          <AnimatedIcon
            lottieAnimation={headerIcon}
            loop={true}
            autoplay={true}
          ></AnimatedIcon>
          <img src={logo} alt="Logo Turn2x" />
        </Link>
        <div className="header-content">
          <div className="header-wrapper">
            <nav className="header-nav" onClick={closeMenu} role="navigation">
              <Link to="/#how-it-works" className="nav-item">
                {t("how-it-works:name")}
              </Link>

              <Link to="/" className="nav-item">
                Commercial Plant
              </Link>

              <NavDropdown title="Industry Insights">
                <NavDropdownLink text="Maritime" to="/" icon={PaperD} />
                <NavDropdownLink text="Utilities" to="/" icon={PaperD} />
                <NavDropdownLink
                  text="Energy Intensive Industries"
                  to="/"
                  icon={PaperD}
                />
              </NavDropdown>

              <Link to="/#about" className="nav-item">
                {t("about:name")}
              </Link>
            </nav>

            <div
              className="header-actions"
              onClick={closeMenu}
              onKeyDown={e => {
                if (e.key === "Enter" || e.key === " ") {
                  closeMenu();
                }
              }}
              role="button"
              tabIndex="0"
            >
              <LangSelector className="show-in-tablet" />
              <Link to="/#contact" className="button button-clear">
                {t("contact-sales:name")}
              </Link>
            </div>

            <div className="show-in-mobile">
              <a
                className="nav-item careers"
                href="https://turn2x.jobs.personio.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text">{t("careers:name")}</span>
                <span className="button button-tiny">{t("hiring:name")}</span>
              </a>
              <Link className="nav-item" to="/legal">
                {t("legal:name")}
              </Link>
              <Link className="nav-item" to="/privacy">
                {t("data-privacy:name")}
              </Link>
            </div>
          </div>
        </div>

        <LangSelector className="show-in-mobile lang-mobile" />

        <button
          className="button-menu show-in-mobile"
          onClick={toggleMenu}
          aria-label="menu"
          role="button"
          tabIndex="0"
        >
          <div className="hamburger">
            <span className="line line-1"></span>
            <span className="line line-2"></span>
          </div>
        </button>
      </div>
    </header>
  );
};

export default Header;
