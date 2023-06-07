import React from "react";
import useTranslations from "../../hooks/useTranslations";
import icon from "../../assets/images/icon3.svg";
import Panel from "./Panel";
import philip from "../../assets/images/about/philip.png";
import Member from "./Member";

const About = ({}) => {
  const t = useTranslations();
  return (
    <div className="about" id="about">
      <div className="wrapper">
        <Panel
          className="about-panel"
          icon={icon}
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
          </div>
          <div className="about-advisors"></div>
        </Panel>
      </div>
    </div>
  );
};

export default About;
