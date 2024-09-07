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
import { PLANT_HERO_VIDEO, PLANT_MODEL_3D } from "../../constants/mediaUrls";
import thomas from "../../assets/images/thomas.png";
import thomasCompany from "../../assets/images/noelle.png";
import Marquee from "../components/Marquee";
import ModelCards from "../components/commercial-plant/ModelCards";
import imgP1 from "../../assets/images/press-1.jpg";
import imgP2 from "../../assets/images/press-2.jpg";
import imgP3 from "../../assets/images/press-3.jpg";

const CommercialPlant = () => {
  const t = useTranslations();

  useEffect(() => {
    AOS.init({});
  }, []);

  const pressItems = [
    {
      id: "press1",
      to: "https://www.handelsblatt.com/unternehmen/erdgas-wie-turn2x-in-spanien-die-deutsche-energiewende-vorantreibt/100018237.html",
      pretitleKey: "plant-press-card-1:pretitle",
      titleKey: "plant-press-card-1:title",
      img: imgP1,
      isExternal: true,
    },
    {
      id: "press2",
      to: "https://www.sueddeutsche.de/wirtschaft/energie-muenchner-unternehmen-stellt-erneuerbares-gas-her-dpa.urn-newsml-dpa-com-20090101-240315-99-355182",
      pretitleKey: "plant-press-card-2:pretitle",
      titleKey: "plant-press-card-2:title",
      img: imgP2,
      isExternal: true,
    },
    {
      id: "press3",
      to: "https://www.energy-resilience.eu/turn2x-launches-first-commercial-plant-in-miajadas-joins-erlg-to-increase-energy-resilience-for-europe-with-renewable-natural-gas",
      pretitleKey: "plant-press-card-3:pretitle",
      titleKey: "plant-press-card-3:title",
      img: imgP3,
      isExternal: true,
    },
  ];

  return (
    <MainLayout className="commercial-plant">
      <Hero title={t("plant-hero:title")} video={PLANT_HERO_VIDEO} />
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
      <Press
        label={t("plant-press:label")}
        title={t("plant-press:title")}
        text={t("plant-press:text")}
        pressItems={pressItems}
      />
      <Marquee />
      <div id="contact" className="nav-reference"></div>
      <Contact />
    </MainLayout>
  );
};

export default CommercialPlant;
