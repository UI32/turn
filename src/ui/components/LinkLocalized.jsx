import React from "react";
import Link from "gatsby-link";
import { useLocalizePath } from "../../hooks/useLocalizePath";

const LinkLocalized = props => {
  const localizePath = useLocalizePath();
  if (props.to && props.to.startsWith("http")) {
    return <Link {...props} />;
  } else {
    const path = localizePath(props.to);
    return <Link {...props} to={path} />;
  }
};

export default LinkLocalized;
