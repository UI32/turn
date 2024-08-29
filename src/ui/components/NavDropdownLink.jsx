import React from "react";
import { Link } from "gatsby";

const NavDropdownLink = ({ to, icon, text, onClick }) => {
  return (
    <Link to={to} className="nav-dropdown-link" onClick={onClick}>
      {icon && (
        <img
          src={icon}
          alt="documents icon"
          className="nav-dropdown-link-icon"
        />
      )}
      <span className="nav-item">{text}</span>
    </Link>
  );
};

export default NavDropdownLink;
