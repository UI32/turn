import React from "react";
import useTranslations from "../../hooks/useTranslations";
import Panel from "./Panel";
import AnimatedIcon from "./AnimatedIcon";
import headerIcon from "../../assets/animations/Icon-4.json";

const HowItWorks = ({}) => {
  const t = useTranslations();
  return (
    <div className="how-it-works" id="how-it-works" data-aos="custom-animation">
      <div className="wrapper">
        <Panel
          className="how-it-works-panel"
          icon={
            <AnimatedIcon
              lottieAnimation={headerIcon}
              loop={true}
              autoplay={true}
            ></AnimatedIcon>
          }
          pretitle="how-it-works:esg-compliant"
          title="how-it-works:title"
        ></Panel>
      </div>
    </div>
  );
};

export default HowItWorks;
