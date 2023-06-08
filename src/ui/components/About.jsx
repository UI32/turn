import React from "react";
import useTranslations from "../../hooks/useTranslations";
import Panel from "./Panel";
import philip from "../../assets/images/about/philip.png";
import benedikt from "../../assets/images/about/benedikt.png";
import dominik from "../../assets/images/about/dominik.png";
import Member from "./Member";
import AnimatedIcon from "./AnimatedIcon";
import aboutIcon from "../../assets/animations/Icon-3.json";
import { midScreenPlay } from "../../utils/lottieInteractivities";

const About = ({}) => {
  const t = useTranslations();
  return (
    <div className="about" id="about">
      <div className="wrapper">
        <Panel
          className="about-panel"
          icon={
            <AnimatedIcon
              lottieAnimation={aboutIcon}
              startFrame={30}
              autoplay={false}
              loop={true}
              interactivity={midScreenPlay}
            ></AnimatedIcon>
          }
          pretitle="about:management"
          title="about:title"
        >
          <div className="about-management">
            <Member
              name="Philip Kessler"
              alt="Philip Kessler"
              image={philip}
              position="philip:position"
              description="philip:description"
            />
            <Member
              name="Benedikt Stolz"
              alt="Benedikt Stolz"
              image={benedikt}
              position="benedikt:position"
              description="benedikt:description"
            />
            <Member
              name="Dominik Stolz"
              alt="Dominik Stolz"
              image={dominik}
              position="dominik:position"
              description="dominik:description"
            />
          </div>
          <div className="about-advisors"></div>
        </Panel>
      </div>
    </div>
  );
};

export default About;
