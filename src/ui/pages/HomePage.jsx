import React, { useEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "../components/Hero";
import Contact from "../components/Contact";

const HomePage = () => {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <MainLayout>
      <Hero />
      <Contact />
    </MainLayout>
  );
};

export default HomePage;
