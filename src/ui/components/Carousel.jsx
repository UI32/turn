import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ children }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    arrows: false,
  };

  const mobileSettings = {
    dots: false,
    infinite: true,
    speed: 4000,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    arrows: false,
  };

  let isMobile = false;
  if (typeof window !== "undefined") {
    isMobile = window.innerWidth <= 780;
  }

  return (
    <Slider {...(isMobile ? mobileSettings : settings)}>{children}</Slider>
  );
};

export default Carousel;
