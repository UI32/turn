import React from "react";
import useTranslations from "../../hooks/useTranslations";
import Panel from "./Panel";
import philip from "../../assets/images/about/philip.png";
import philipSm from "../../assets/images/about/philip-mb.png";
import benedikt from "../../assets/images/about/benedikt.png";
import benediktSm from "../../assets/images/about/benedikt-mb.png";
import dominik from "../../assets/images/about/dominik.png";
import dominikSm from "../../assets/images/about/dominik-mb.png";
import thomas from "../../assets/images/about/thomas.png";
import evan from "../../assets/images/about/evan.png";
import christian from "../../assets/images/about/christian.png";
import stefan from "../../assets/images/about/stefan.png";
import AboutCard from "./AboutCard";
import AboutCardAdvisor from "./AboutCardAdvisor";
import AnimatedIcon from "./AnimatedIcon";
import headerIcon from "../../assets/animations/Icon-3.json";
import fraunhofer from "../../assets/images/clients/fraunhofer.svg";
import basf from "../../assets/images/clients/basf.svg";
import kit from "../../assets/images/clients/kit.svg";
import mercedes from "../../assets/images/clients/mercedes.svg";
import dvgw from "../../assets/images/clients/dvgw.svg";
import siemens from "../../assets/images/clients/siemens.svg";

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
            <AboutCard
              name="Philip Kessler"
              alt="Philip Kessler"
              image={philip}
              imageSm={philipSm}
              position="philip:position"
              description="philip:description"
            />
            <AboutCard
              name="Benedikt Stolz"
              alt="Benedikt Stolz"
              image={benedikt}
              imageSm={benediktSm}
              position="benedikt:position"
              description="benedikt:description"
            />
            <AboutCard
              name="Dominik Stolz"
              alt="Dominik Stolz"
              image={dominik}
              imageSm={dominikSm}
              position="dominik:position"
              description="dominik:description"
            />
          </div>
          <div className="about-clients">
            <div className="client">
              <img src={fraunhofer} alt="Fraunhofer" />
            </div>
            <div className="client basf">
              <img src={basf} alt="Basf" />
            </div>
            <div className="client">
              <img src={kit} alt="kit" />
            </div>
            <div className="client">
              <img src={mercedes} alt="Mercedes Benz" />
            </div>
            <div className="client">
              <img src={dvgw} alt="DVGW" />
            </div>
            <div className="client">
              <img src={siemens} alt="Siemens" />
            </div>
          </div>
          <p className="lead-m">{t("about:advisory-board")}</p>
          <div className="about-advisors">
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
            <AboutCardAdvisor
              name="Christian Schneider"
              alt="Christian Schneider"
              image={christian}
              position="christian:position"
            />
          </div>
          <div className="about-actions">
            <a
              className="button"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("about:explore-carreer-opportunities")}
            </a>
          </div>
        </Panel>
      </div>
    </div>
  );
};

export default About;
