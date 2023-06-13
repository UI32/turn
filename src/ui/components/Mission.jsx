import React from "react";
import useTranslations from "../../hooks/useTranslations";
import Panel from "./Panel";
import AnimatedIcon from "./AnimatedIcon";
import missionIcon from "../../assets/animations/Icon-5.json";
import { midScreenPlay } from "../../utils/lottieInteractivities";

const Mission = ({}) => {
  const t = useTranslations();
  return (
    <div className="mission" id="mission" data-aos="custom-animation">
      <div className="wrapper">
        <Panel
          className="mission-panel"
          icon={
            <AnimatedIcon
              startFrame={160}
              lottieAnimation={missionIcon}
              loop={true}
              autoplay={false}
              interactivity={midScreenPlay}
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
