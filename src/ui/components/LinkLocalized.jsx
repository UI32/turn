import React from "react";
import { Link } from "gatsby";
import { useLocalizePath } from "../../hooks/useLocalizePath";

const LinkLocalized = props => {
  const localizePath = useLocalizePath();
  if (props.to && props.to.startsWith("http")) {
    return <Link {...props}></Link>;
  } else {
    const path = localizePath(props.to);
    return <Link {...props} to={path}></Link>;
  }
};

export default LinkLocalized;
