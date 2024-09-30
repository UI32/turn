import React, { useEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "../components/industry-insights/Hero";
import Contact from "../components/Contact";
import useTranslations from "../../hooks/useTranslations";
import heroImg from "../../assets/images/about/about_hero.png";
import Panel from "../components/Panel";
import AnimatedIcon from "../components/AnimatedIcon";
import missionIcon from "../../assets/animations/Icon-5.json";
import { midScreenPlay } from "../../utils/lottieInteractivities";
import TaskForce from "../components/TaskForce";
import Values from "../components/Values";
import Accordion from "../components/Accordion";
import About from "../components/About";

const AboutPage = () => {
  const t = useTranslations();

  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <MainLayout className="about-page">
      <Hero title={t("about-hero:title")} img={heroImg} />
      <Accordion/>
      <section className="disclaimer">
        <div className="wrapper">
          <Panel
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
            pretitle={t("about-disclaimer:label")}
            bigtitle={t("about-disclaimer:text")}
          ></Panel>
        </div>
      </section>
      <TaskForce />
      <Values/>
      <About />
      <div id="contact" className="nav-reference"></div>
      <Contact />
    </MainLayout>
  );
};

export default AboutPage;
