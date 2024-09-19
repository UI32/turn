import React, { useEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "../components/industry-insights/Hero";
import Contact from "../components/Contact";
import useTranslations from "../../hooks/useTranslations";
import pattern from "../../assets/images/pattern1-min.png";
import heroImg from "../../assets/images/industry-insights/img-utilities.jpg";
import heroImgMobile from "../../assets/images/industry-insights/img-utilities-card.jpg";
import IntroCards from "../components/industry-insights/IntroCards";
import Press from "../components/Press";
import Model3D from "../components/Model3D";
import ToggleCards from "../components/ToggleCards";
import Challenge from "../components/Challenge";
import { UTILITIES_HERO_VIDEO, UTILITIES_MODEL_3D } from "../../constants/mediaUrls";
import PaperW from "../../assets/icons/paper-white.svg";
import PaperL from "../../assets/icons/paper-light.svg";
import AssetW from "../../assets/icons/asset-white.svg";
import AssetL from "../../assets/icons/asset-light.svg";
import ThundW from "../../assets/icons/thunder-white.svg";
import ThundL from "../../assets/icons/thunder-light.svg";

const UtilitiesPage = () => {
  const t = useTranslations();

  useEffect(() => {
    AOS.init({});
  }, []);

  const introCardItems = [
    {
      iconLight: PaperL,
      iconWhite: PaperW, 
      titleKey: "utilities-intro-card-1:title",
      textKey: "utilities-intro-card-1:text",
    },
    {
      iconLight: ThundL,
      iconWhite: ThundW,
      titleKey: "utilities-intro-card-2:title",
      textKey: "utilities-intro-card-2:text",
    },
    {
      iconLight: AssetL,
      iconWhite: AssetW,
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
      textKey: "utilities-3d-card-2:text",
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
        imgMobile={heroImgMobile}        
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
        video={UTILITIES_HERO_VIDEO}
      />

      <Model3D
        src={UTILITIES_MODEL_3D}
        headingLabel={t("utilities-solution:pretitle")}
        headingTitle={t("utilities-solution:title")}
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
