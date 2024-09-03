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

const MaritimePage = () => {
  const t = useTranslations();

  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <MainLayout className="commercial-plant">
      <Hero
        title={t("maritime-hero:title")}
        pretitle={t("maritime-hero:pretitle")}
        img={heroImg}
      />

      <div className="top-pattern">
        <img className="pattern" src={pattern} alt="pattern" loading="lazy" />
      </div>

      <IntroCards />
      <Press hiddenItem="maritime"/>
      <div id="contact" className="nav-reference"></div>
      <Contact />
    </MainLayout>
  );
};

export default MaritimePage;
