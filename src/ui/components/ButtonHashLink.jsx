import React from "react";
import ButtonGeneric from "./ButtonGeneric";
import { HashLink } from "react-router-hash-link";

const ButtonHashLink = ({ to, ...props }) => {
  return (
    <ButtonGeneric {...props}>
      {({ buttonClasses, buttonContent }) => (
        <HashLink className={buttonClasses} to={to}>
          {buttonContent}
        </HashLink>
      )}
    </ButtonGeneric>
  );
};

export default ButtonHashLink;
