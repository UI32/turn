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
import Typography from "../components/Typography";

const HomePage = () => {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <MainLayout bottomPattern={false}>
      <Typography />
      <Hero />
      <Quotes />
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
