import React from "react";
import { Link } from "gatsby";

const LinkIcon = ({ to, icon, children, ...props }) => {
  return (
    <Link to={to} {...props} className="link-icon">
      <span className="link-icon-text text-xl">{children}</span>
      {icon && <img src={icon} alt="arrow icon" className="link-icon-icon" />}
    </Link>
  );
};

export default LinkIcon;