import React from "react";
import useTranslations from "../../hooks/useTranslations";
import Brick from "../components/Brick";

import cx from "classnames";

const Cta = ({  }) => {
  const t = useTranslations();
  return (
    <Brick className={cx("cta")}>
    </Brick>
  );
};

export default Cta;
