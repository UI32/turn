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
import stefan from "../../assets/images/about/stefan.png";
import AboutCard from "./AboutCard";
import AboutCardAdvisor from "./AboutCardAdvisor";
import AnimatedIcon from "./AnimatedIcon";
import aboutIcon from "../../assets/animations/Icon-3.json";
import { midScreenPlay } from "../../utils/lottieInteractivities";
import fraunhofer from "../../assets/images/clients/fraunhofer.png";
import basf from "../../assets/images/clients/basf.png";
import kit from "../../assets/images/clients/kit.png";
import mercedes from "../../assets/images/clients/mercedes.png";
import h2ub from "../../assets/images/clients/h2ub.png";
import tumvl from "../../assets/images/clients/tumvl.png";
import werk1 from "../../assets/images/clients/werk1.png";
import dvgw from "../../assets/images/clients/dvgw.png";
import siemens from "../../assets/images/clients/siemens.png";

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
              className="hide-in-mobile"
            ></AnimatedIcon>
          }
          pretitle="about:management"
          title="about:title"
        >
          <div className="about-container">
            <div className="about-management">
              <AboutCard
                name="Philip Kessler"
                alt="Philip Kessler"
                image={philip}
                imageSm={philipSm}
                position="philip:position"
                description="philip:description"
                linkedin="https://www.linkedin.com/in/philip-kessler/"
                // email="philip@turn2x.com"
              />
              <AboutCard
                name="Benedikt Stolz"
                alt="Benedikt Stolz"
                image={benedikt}
                imageSm={benediktSm}
                position="benedikt:position"
                description="benedikt:description"
                linkedin="https://www.linkedin.com/in/benediktstolz/"
                // email="ben@turn2x.com"
              />
              <AboutCard
                name="Dr. Dominik Schollenberger"
                alt="Dr. Dominik Schollenberger"
                image={dominik}
                imageSm={dominikSm}
                position="dominik:position"
                description="dominik:description"
                linkedin="https://www.linkedin.com/in/dominik-schollenberger-14aa34ba/"
                // email="dominik@turn2x.com"
              />
            </div>
            <div className="about-clients">
              <div className="client">
                <img
                  src={fraunhofer}
                  alt="Fraunhofer"
                  width="149"
                  height="25"
                  loading="lazy"
                />
              </div>
              <div className="client">
                <img
                  src={basf}
                  alt="Basf"
                  width="83"
                  height="37"
                  loading="lazy"
                />
              </div>
              <div className="client">
                <img
                  src={kit}
                  alt="kit"
                  width="66"
                  height="31"
                  loading="lazy"
                />
              </div>
              <div className="client">
                <img
                  src={mercedes}
                  alt="Mercedes Benz"
                  width="135"
                  height="38"
                  loading="lazy"
                />
              </div>
              <div className="client">
                <img
                  src={h2ub}
                  alt="H2UB"
                  width="48"
                  height="42"
                  loading="lazy"
                />
              </div>
              <div className="client">
                <img
                  src={tumvl}
                  alt="Tum VL"
                  width="149"
                  height="25"
                  loading="lazy"
                />
              </div>
              <div className="client">
                <img
                  src={werk1}
                  alt="Werk 1"
                  width="104"
                  height="37"
                  loading="lazy"
                />
              </div>
              <div className="client dvgw">
                <img
                  src={dvgw}
                  alt="DVGW"
                  width="59"
                  height="36"
                  loading="lazy"
                />
              </div>
              <div className="client">
                <img
                  src={siemens}
                  alt="Siemens"
                  width="131"
                  height="31"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="about-advisors">
              <div className="about-card-wrapper">
                <p className="lead-m">{t("about:advisory-board")}</p>
                <div className="about-card-container">
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

              <div className="about-cta-wrapper">
                <p className="lead-m">{t("about:career")}</p>
                <div className="about-cta">
                  <h2 className="cta-title">{t("cta:title")}</h2>
                  <a
                    className="button"
                    href="https://turn2x.jobs.personio.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("about:explore-carreer-opportunities")}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Panel>
      </div>
    </div>
  );
};

export default About;
