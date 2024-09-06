import React, { useEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "../components/Hero";
import Contact from "../components/Contact";
import About from "../components/About";
import Process from "../components/Process";
import Mission from "../components/Mission";
import Model3D from "../components/Model3D";
import Quotes from "../components/Quotes";
import Plant from "../components/Plant";
// import Press from "../components/Press";
import useTranslations from "../../hooks/useTranslations";
import pattern from "../../assets/images/pattern1-min.png";
import { HOME_HERO_VIDEO, HOME_MODEL_3D } from "../../constants/mediaUrls";

// import Typography from "../components/Typography";

const HomePage = () => {
  const t = useTranslations();

  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <MainLayout bottomPattern={false} className="home">
      {/* <Typography /> */}
      <Hero title={t("hero:title")} video={HOME_HERO_VIDEO} />
      <div className="top-pattern">
        <img className="pattern" src={pattern} alt="pattern" loading="lazy" />
      </div>
      <Quotes />
      <div id="how-it-works" className="nav-reference"></div>
      <Process />
      <Model3D src={HOME_MODEL_3D}>
        <div className="wrapper custom-cursor_text view">
          <div className="panel info-panel">
            <p className="panel-pretitle lead-m">{t("model:label")}</p>
            <h2 className="alpha">{t("model:title")}</h2>
            <p className="text-xl">{t("model:text")}</p>
          </div>
        </div>
      </Model3D>
      <Plant />
      <div id="mission" className="nav-reference"></div>
      <Mission />
      {/* <Press />   temp */}
      <div id="about" className="nav-reference"></div>
      <About />
      <div id="contact" className="nav-reference"></div>
      <Contact />
    </MainLayout>
  );
};

export default HomePage;
