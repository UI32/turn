import React from "react";
import useTranslations from "../../hooks/useTranslations";
import Panel from "./Panel";
import philip from "../../assets/images/about/philip.png";
import benedikt from "../../assets/images/about/benedikt.png";
import dominik from "../../assets/images/about/dominik.png";
import Member from "./Member";
import AnimatedIcon from "./AnimatedIcon";
import headerIcon from "../../assets/animations/Icon-3.json";

const About = ({}) => {
  const t = useTranslations();
  return (
    <div className="about" id="about">
      <div className="wrapper">
        <Panel
          className="about-panel"
          icon={
            <AnimatedIcon
              lottieAnimation={headerIcon}
              loop={true}
              autoplay={true}
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
