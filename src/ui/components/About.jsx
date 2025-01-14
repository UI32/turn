import React from "react";
import useTranslations from "../../hooks/useTranslations";
import Panel from "./Panel";

import philip from "../../assets/images/about/philip.jpg";
import philipSm from "../../assets/images/about/philip-mb.jpg";
import benedikt from "../../assets/images/about/benedikt.jpg";
import benediktSm from "../../assets/images/about/benedikt-mb.jpg";
import dominik from "../../assets/images/about/dominik.jpg";
import dominikSm from "../../assets/images/about/dominik-mb.jpg";
import thomas from "../../assets/images/about/thomas.jpg";
import evan from "../../assets/images/about/evan.jpg";
import stefan from "../../assets/images/about/stefan.jpg";

import AboutCard from "./AboutCard";
import AboutCardAdvisor from "./AboutCardAdvisor";
import AnimatedIcon from "./AnimatedIcon";
import aboutIcon from "../../assets/animations/Icon-3.json";
import { midScreenPlay } from "../../utils/lottieInteractivities";

import Marquee from "../components/Marquee";

import logoBa from "../../assets/images/marquee/logo-bain.svg";
import logoBas from "../../assets/images/marquee/logo-basf.svg";
import logoKi from "../../assets/images/marquee/logo-kit.svg";
import logoLi from "../../assets/images/marquee/logo-linde.svg";
import logoMe from "../../assets/images/marquee/logo-mercedes.svg";
import logoSi from "../../assets/images/marquee/logo-siemens.svg";
import logoTe from "../../assets/images/marquee/logo-tesla.svg";
import logoTu from "../../assets/images/marquee/logo-tum.svg";

const logos = [logoBa, logoBas, logoKi, logoLi, logoMe, logoSi, logoTe, logoTu];

const About = () => {
  const t = useTranslations();
  return (
    <div className="about">
      <div className="wrapper">
        <Panel
          className="about-panel"
          icon={
            <AnimatedIcon
              lottieAnimation={aboutIcon}
              startFrame={10}
              autoplay={false}
              loop={true}
              interactivity={midScreenPlay}
            ></AnimatedIcon>
          }
          pretitle="about:management"
          title="about:title"
        >
          <div className="about-management">
            <AboutCard
              name="Philip Kessler"
              alt="Philip Kessler"
              image={philip}
              imageSm={philipSm}
              position="philip:position"
              description="philip:description"
              linkedin="https://www.linkedin.com/in/philip-kessler/"
            />
            <AboutCard
              name="Benedikt Stolz"
              alt="Benedikt Stolz"
              image={benedikt}
              imageSm={benediktSm}
              position="benedikt:position"
              description="benedikt:description"
              linkedin="https://www.linkedin.com/in/benediktstolz/"
            />
            <AboutCard
              name="Dr. Dominik Schollenberger"
              alt="Dr. Dominik Schollenberger"
              image={dominik}
              imageSm={dominikSm}
              position="dominik:position"
              description="dominik:description"
              linkedin="https://www.linkedin.com/in/dominik-schollenberger-14aa34ba/"
            />
          </div>
        </Panel>
      </div>

      <Marquee logos={logos} />

      <div className="wrapper">
        <div className="about-advisors">
          <p className="lead-m about-advisors-lead">
            {t("about:advisory-board")}
          </p>
          <div
            className="about-advisors-container"
            data-aos="stagger-from-bottom"
            data-aos-anchor-placement="center-bottom"
            data-aos-once="true"
          >
            <AboutCardAdvisor
              name="Dr. Stefan Kaufmann"
              alt="Dr. Stefan Kaufmann"
              image={stefan}
              position="stefan:position"
            />
            <AboutCardAdvisor
              name="Evan Horetsky"
              alt="Evan Horetsky"
              image={evan}
              position="evan:position"
            />
            <AboutCardAdvisor
              name="Thomas Schaffer"
              alt="Thomas Schaffer"
              image={thomas}
              position="thomas:position"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
