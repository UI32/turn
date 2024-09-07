import React from "react";
import useTranslations from "../../hooks/useTranslations";
import Panel from "./Panel";
import AnimatedIcon from "./AnimatedIcon";
import missionIcon from "../../assets/animations/Icon-5.json";
import { midScreenPlay } from "../../utils/lottieInteractivities";
import MissionContent from "./MissionContent";

const Mission = () => {
  const t = useTranslations();
  return (
    <div className="mission">
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
              className="hide-in-mobile"
            ></AnimatedIcon>
          }
          pretitle="mission:mission"
          title="mission:title"
        >
          <MissionContent />
        </Panel>
      </div>
    </div>
  );
};

export default Mission;
