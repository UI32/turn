import React, { useEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "../components/industry-insights/Hero";
import Contact from "../components/Contact";
import useTranslations from "../../hooks/useTranslations";
import pattern from "../../assets/images/pattern1-min.png";
import heroImg from "../../assets/images/industry-insights/maritime-hero.jpg";
import IntroCards from "../components/industry-insights/IntroCards";
import Press from "../components/Press";
import Model3D from "../components/Model3D";
import ToggleCards from "../components/ToggleCards";
import Challenge from "../components/Challenge";
import { HOME_HERO_VIDEO, HOME_MODEL_3D } from "../../constants/mediaUrls";
import PaperW from "../../assets/icons/paper-white.svg";
import PaperL from "../../assets/icons/paper-light.svg";
import EmissW from "../../assets/icons/emiss-white.svg";
import EmissL from "../../assets/icons/emiss-light.svg";
import FuelW from "../../assets/icons/fuel-white.svg";
import FuelL from "../../assets/icons/fuel-light.svg";

const UtilitiesPage = () => {
  const t = useTranslations();

  useEffect(() => {
    AOS.init({});
  }, []);

  const introCardItems = [
    {
      iconLight: EmissL,
      iconWhite: EmissW,
      titleKey: "utilities-intro-card-1:title",
      textKey: "utilities-intro-card-1:text",
    },
    {
      iconLight: FuelL,
      iconWhite: FuelW,
      titleKey: "utilities-intro-card-2:title",
      textKey: "utilities-intro-card-2:text",
    },
    {
      iconLight: PaperL,
      iconWhite: PaperW,
      titleKey: "utilities-intro-card-3:title",
      textKey: "utilities-intro-card-3:text",
    },
  ];

  const toggleCardItems = [
    {
      id: "item1",
      titleKey: "utilities-3d-card-1:title",
      textKey: "utilities-3d-card-1:text",
    },
    {
      id: "item2",
      titleKey: "utilities-3d-card-2:title",
      textKey: "utilities-3d-card-3:text",
    },
    {
      id: "item3",
      titleKey: "utilities-3d-card-3:title",
      textKey: "utilities-3d-card-3:text",
    },        
  ];  

  return (
    <MainLayout className="utilities-page insights-page">
      <Hero
        title={t("utilities-hero:title")}
        pretitle={t("utilities-hero:pretitle")}
        img={heroImg}
      />
      <div className="top-pattern">
        <img className="pattern" src={pattern} alt="pattern" loading="lazy" />
      </div>

      <IntroCards
        title={t("utilities-intro:title")}
        cardItems={introCardItems}
      />

      <Challenge
        label={t("utilities-challenge:pretitle")}
        title={t("utilities-challenge:title")}
        text={t("utilities-challenge:text")}
        video={HOME_HERO_VIDEO}
      />

      <Model3D
        src={HOME_MODEL_3D}
        headingLabel={t("utilities-model:pretitle")}
        headingTitle={t("utilities-model:title")}
      >
        <div className="wrapper model-content">
          <ToggleCards items={toggleCardItems} />
        </div>
      </Model3D>

      <Press
        hiddenItem="utilities"
        label={t("utilities-press:label")}
        title={t("utilities-press:title")}
        text={t("utilities-press:text")}
      />
      <div id="contact" className="nav-reference"></div>
      <Contact />
    </MainLayout>
  );
};

export default UtilitiesPage;
