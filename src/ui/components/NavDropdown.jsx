import React, { useState, useEffect } from "react";
import cx from "classnames";

const NavDropdown = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1220px)");
    const handleResize = () => {
      setIsLargeScreen(!mediaQuery.matches);
      if (!mediaQuery.matches) {
        setIsOpen(false);
      }
    };

    handleResize();

    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  const handleMouseEnter = () => {
    if (isLargeScreen) {
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (isLargeScreen) {
      setIsOpen(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      setIsOpen(!isOpen);
    }
  };

  const handleClick = () => {
    if (!isLargeScreen) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div
      className="nav-dropdown"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-expanded={isOpen}
    >
      <button
        className={cx("nav-dropdown-title nav-item", { "is-open": isOpen })}
        onClick={handleClick}
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <div className="nav-dropdown-title-icon">
          <span className="icon-line icon-line-1"></span>
          <span className="icon-line icon-line-2"></span>
        </div>
      </button>
      <div className={cx("nav-dropdown-area", { "is-open": isOpen })}>
        <div className="nav-dropdown-menu">
          <div className="nav-dropdown-menu-inner">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default NavDropdown;
