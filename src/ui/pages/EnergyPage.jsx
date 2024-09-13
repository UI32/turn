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

const EnergyPage = () => {
  const t = useTranslations();

  useEffect(() => {
    AOS.init({});
  }, []);

  const introCardItems = [
    {
      iconLight: EmissL,
      iconWhite: EmissW,
      titleKey: "energy-intro-card-1:title",
      textKey: "energy-intro-card-1:text",
    },
    {
      iconLight: FuelL,
      iconWhite: FuelW,
      titleKey: "energy-intro-card-2:title",
      textKey: "energy-intro-card-2:text",
    },
    {
      iconLight: PaperL,
      iconWhite: PaperW,
      titleKey: "energy-intro-card-3:title",
      textKey: "energy-intro-card-3:text",
    },
  ];

  const toggleCardItems = [
    {
      id: "item1",
      titleKey: "energy-3d-card-1:title",
      textKey: "energy-3d-card-1:text",
    },
    {
      id: "item2",
      titleKey: "energy-3d-card-2:title",
      textKey: "energy-3d-card-2:text",
    },
    {
      id: "item3",
      titleKey: "energy-3d-card-3:title",
      textKey: "energy-3d-card-3:text",
    },        
  ];

  return (
    <MainLayout className="energy-page insights-page">
      <Hero
        title={t("energy-hero:title")}
        pretitle={t("energy-hero:pretitle")}
        img={heroImg}
      />
      <div className="top-pattern">
        <img className="pattern" src={pattern} alt="pattern" loading="lazy" />
      </div>

      <IntroCards
        title={t("energy-intro:title")}
        cardItems={introCardItems}
      />

      <Challenge
        label={t("energy-challenge:pretitle")}
        title={t("energy-challenge:title")}
        text={t("energy-challenge:text")}
        video={HOME_HERO_VIDEO}
      />

      <Model3D
        src={HOME_MODEL_3D}
        headingLabel={t("energy-solution:pretitle")}
        headingTitle={t("energy-solution:title")}
      >
        <div className="wrapper model-content">
          <ToggleCards items={toggleCardItems} />
        </div>
      </Model3D>

      <Press
        hiddenItem="energy"
        label={t("energy-press:label")}
        title={t("energy-press:title")}
        text={t("energy-press:text")}
      />
      <div id="contact" className="nav-reference"></div>
      <Contact />
    </MainLayout>
  );
};

export default EnergyPage;
