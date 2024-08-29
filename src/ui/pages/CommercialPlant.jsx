import React, { useEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "../components/Hero";
import Model3D from "../components/Model3D";
import Press from "../components/Press";
import Contact from "../components/Contact";
import useTranslations from "../../hooks/useTranslations";
import { HOME_HERO_VIDEO, HOME_MODEL_3D } from '../../constants/mediaUrls';

const CommercialPlant = () => {
  const t = useTranslations();

  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <MainLayout simple>
      <div className="wrapper">
        <h1>{t("legal:name")}</h1>
      </div>
      <Hero 
        title={t("hero:title")}
        video={HOME_HERO_VIDEO}
      />
      <Model3D src={HOME_MODEL_3D}>
        <div className="wrapper custom-cursor_text view">
          diff content here
        </div>
      </Model3D>
      <Press />
      <div id="contact" className="nav-reference"></div>
      <Contact />      

    </MainLayout>
  );
};

export default CommercialPlant;
