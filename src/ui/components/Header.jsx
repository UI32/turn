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

const Header = ({ onMenuToggle }) => {
  const t = useTranslations();

  // Open/Close menu

  const [isMenuOpen, setisMenuOpen] = useState(false);
  const toggleMenu = useCallback(() => {
    setisMenuOpen(prev => {
      const newValue = !prev;
      onMenuToggle(newValue); // Notify parent about the change
      return newValue;
    });
  }, [onMenuToggle]);

  const closeMenu = useCallback(() => {
    setisMenuOpen(false);
    onMenuToggle(false); // Notify parent to close the menu
  }, [onMenuToggle]);

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
            <nav className="header-nav" role="navigation">
              <Link to="/#how-it-works" className="nav-item" onClick={closeMenu}>
                {t("how-it-works:name")}
              </Link>

              <Link to="/" className="nav-item" onClick={closeMenu}>
                Commercial Plant
              </Link>

              <Link to="/#mission" className="nav-item hide-in-xl" onClick={closeMenu}>
                Mission
              </Link>

              <NavDropdown title="Industry Insights">
                <NavDropdownLink text="Maritime" to="/" icon={PaperD} onClick={closeMenu}/>
                <NavDropdownLink text="Utilities" to="/" icon={PaperD} onClick={closeMenu}/>
                <NavDropdownLink
                  text="Energy Intensive Industries"
                  to="/"
                  icon={PaperD}
                  onClick={closeMenu}
                />
              </NavDropdown>

              <Link to="/#about" className="nav-item" onClick={closeMenu}>
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
              <LangSelector className="show-in-xl" />

              <a
                className="nav-item careers hide-in-xl"
                href="https://turn2x.jobs.personio.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text">{t("careers:name")}</span>
              </a>

              <Link to="/#contact" className="button button-clear nav-item">
                {t("contact-sales:name")}
              </Link>
            </div>

            <div className="header-legal hide-in-xl">
              <Link className="nav-item" to="/legal">
                {t("legal:name")}
              </Link>
              <Link className="nav-item" to="/privacy">
                {t("data-privacy:name")}
              </Link>
              <LangSelector className="lang-mobile button button-tiny" />
            </div>
          </div>
        </div>

        <button
          className="button-menu hide-in-xl"
          onClick={toggleMenu}
          aria-label="menu"
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
