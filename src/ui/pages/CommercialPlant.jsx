import React, { useEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "../components/Hero";
import Model3D from "../components/Model3D";
import Press from "../components/Press";
import Contact from "../components/Contact";
import Quote from "../components/Quote";
import useTranslations from "../../hooks/useTranslations";
import { HOME_HERO_VIDEO, HOME_MODEL_3D } from "../../constants/mediaUrls";
import thomas from "../../assets/images/thomas.png";
import thomasCompany from "../../assets/images/noelle.png";

const CommercialPlant = () => {
  const t = useTranslations();

  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <MainLayout className="commercial-plant">
      <Hero title={t("plant-hero:title")} video={HOME_HERO_VIDEO} />
      <Model3D src={HOME_MODEL_3D}>
        <div className="wrapper custom-cursor_text view">diff content here</div>
      </Model3D>
      <section className="commercial-plant-grid-1">
        <div className="wrapper">
          <div className="image-grid">
            <div className="image-grid-col-1">
              <div className="image-grid-item">img1</div>
              <div className="image-grid-item">img2</div>
            </div>
            <div className="image-grid-col-2">
              <div className="image-grid-item">img3</div>
              <div className="image-grid-item image-grid-item--content">
                <h4>World's First Plant Demonstrating Commercial Viability</h4>
                <p>
                  TURN2X's plant in Miajadas, Spain, marks a global milestone in
                  commercial viability by selling 100% of its renewable natural
                  gas output via longterm off-take contracts. This achievement
                  underscores TURN2X's pioneering role in sustainable ener gy
                  solutions.
                </p>
              </div>

              <div className="image-grid-item image-grid-item--map">
                map img
              </div>
            </div>
          </div>
        </div>
      </section>
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
      <Press />
      <div id="contact" className="nav-reference"></div>
      <Contact />
    </MainLayout>
  );
};

export default CommercialPlant;
