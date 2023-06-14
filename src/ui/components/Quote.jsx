import React from "react";
import useTranslations from "../../hooks/useTranslations";
import Brick from "../components/Brick";

const Quote = () => {
  const t = useTranslations();

  return <Brick className="quote"></Brick>;
};

export default Quote;
