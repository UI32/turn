import React from "react";
import useTranslations from "../../hooks/useTranslations";
import Panel from "./Panel";
import AnimatedIcon from "./AnimatedIcon";
import headerIcon from "../../assets/animations/Icon-5.json";

const Mission = ({}) => {
  const t = useTranslations();
  return (
    <div className="mission" id="mission" data-aos="custom-animation">
      <div className="wrapper">
        <Panel
          className="mission-panel"
          icon={
            <AnimatedIcon
              lottieAnimation={headerIcon}
              loop={true}
              autoplay={true}
            ></AnimatedIcon>
          }
          pretitle="mission:mission"
          title="mission:title"
        ></Panel>
      </div>
    </div>
  );
};

export default Mission;
