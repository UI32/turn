import React, { useState } from "react";
import cx from "classnames";

const NavDropdown = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleKeyDown = event => {
    if (event.key === "Enter" || event.key === " ") {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div
      className="nav-dropdown"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-expanded={isOpen}
    >
      <p className={cx("nav-dropdown-title nav-item", { "is-open": isOpen })}>
        {title}
      </p>
      <div className={cx("nav-dropdown-area", { "is-open": isOpen })}>
        <div className="nav-dropdown-menu">
          <div className="nav-dropdown-menu-inner">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default NavDropdown;
