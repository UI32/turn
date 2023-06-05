import React from "react";
import ButtonGeneric from "./ButtonGeneric";

const Button = ({ onClick, type, ...props }) => {
  return (
    <ButtonGeneric {...props}>
      {({ buttonClasses, buttonContent }) => (
        <button className={buttonClasses} onClick={onClick} type={type}>
          {buttonContent}
        </button>
      )}
    </ButtonGeneric>
  );
};

export default Button;
