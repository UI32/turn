import React, { useEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import Cta from "../components/Cta";
import Quote from "../components/Quote";
import AOS from "aos";
import "aos/dist/aos.css";

const HomePage = () => {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <MainLayout>
      <Cta
        skin="dark"
        title="cta:title"
        buttonText="action:lets-make-it-happen"
      />
      <Cta skin="dark" title="cta2:title" buttonText="cta2:action" reversed />
      <Cta skin="dark" title="cta3:title" buttonText="cta3:action" />
      <Quote
        text="quote:text"
        author="Daniel Seiler"
        position="quote:daniel-position"
      />
    </MainLayout>
  );
};

export default HomePage;
