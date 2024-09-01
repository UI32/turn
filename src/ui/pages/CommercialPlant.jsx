import React, { useEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "../components/Hero";
import Model3D from "../components/Model3D";
import Press from "../components/Press";
import Contact from "../components/Contact";
import Quote from "../components/Quote";
import ImageGrid1 from "../components/commercial-plant/ImageGrid1";
import ImageGrid2 from "../components/commercial-plant/ImageGrid2";
import useTranslations from "../../hooks/useTranslations";
import { HOME_HERO_VIDEO, PLANT_MODEL_3D } from "../../constants/mediaUrls";
import thomas from "../../assets/images/thomas.png";
import thomasCompany from "../../assets/images/noelle.png";
import Marquee from "../components/Marquee";
import ModelCards from "../components/commercial-plant/ModelCards";

const CommercialPlant = () => {
  const t = useTranslations();

  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <MainLayout className="commercial-plant">
      <Hero title={t("plant-hero:title")} video={HOME_HERO_VIDEO} />
      <Model3D src={PLANT_MODEL_3D}>
        <div className="wrapper model-content">
          <ModelCards />
        </div>
      </Model3D>
      <ImageGrid1 />
      <section className="commercial-plant-quote">
        <div className="wrapper">
          <Quote
            author="Thomas Köhler"
            authorImage={thomas}
            quote="thomas-kohler:quote"
            position="thomas-kohler:position"
            company="Noelle + Von Campe"
            companyImage={thomasCompany}
            companyWidth={106}
            companyHeight={38}
            quoteClass="quote-l"
          />
        </div>
      </section>
      <ImageGrid2 />
      <Press />
      <Marquee />
      <div id="contact" className="nav-reference"></div>
      <Contact />
    </MainLayout>
  );
};

export default CommercialPlant;
