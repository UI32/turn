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
import pattern from "../../assets/images/pattern1-min.png";
import QuoteBlock from "../components/QuoteBlock";
import Quote from "../components/Quote";
import author from "../../assets/images/thomas.png";
import company from "../../assets/images/noelle.png";

const HomePage = () => {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <MainLayout bottomPattern={false}>
      <Hero />
      <div className="top-pattern">
        <img className="pattern" src={pattern} alt="pattern" loading="lazy" />
      </div>
      <QuoteBlock />
      <div className="wrapper">
        <Quote
          author="Thomas Köhler"
          authorImage={author}
          quote="thomas-kohler:quote"
          position="thomas-kohler:position"
          company="Noelle + Von Campe"
          companyImage={company}
          companyWidth={106}
          companyHeight={38}
        />
      </div>
      <div id="how-it-works" className="nav-reference"></div>
      <Process />
      <Model3D />
      <div id="mission" className="nav-reference"></div>
      <Mission />
      <div id="about" className="nav-reference"></div>
      <About />
      <div id="contact" className="nav-reference"></div>
      <Contact />
    </MainLayout>
  );
};

export default HomePage;
