import React from "react";
import LinkLocalized from "./LinkLocalized";

const NavDropdownLink = ({ to, icon, text, onClick }) => {
  return (
    <LinkLocalized to={to} className="nav-dropdown-link" onClick={onClick}>
      {icon && (
        <img
          src={icon}
          alt="documents icon"
          className="nav-dropdown-link-icon"
        />
      )}
      <span className="nav-item">{text}</span>
    </LinkLocalized>
  );
};

export default NavDropdownLink;
