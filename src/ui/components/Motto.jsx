import React from "react";
import useTranslations from "../../hooks/useTranslations";
import logo1 from "../../assets/images/logo-pattern-left.svg";
import logo2 from "../../assets/images/logo-pattern-right.svg";

const Motto = ({}) => {
  const t = useTranslations();
  return (
    <div className="motto">
      <div className="wrapper">
        <img
          src={logo1}
          alt="Turnx2 pattern"
          className="left-icon"
          data-aos="custom-animation"
        />
        <span
          data-aos="custom-animation"
          dangerouslySetInnerHTML={{
            __html: t("hero:quote"),
          }}
        />
        <img
          src={logo2}
          alt="Turnx2 pattern"
          className="right-icon"
          data-aos="custom-animation"
        />
      </div>
    </div>
  );
};

export default Motto;
