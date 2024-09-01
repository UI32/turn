import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { defaultSettings } from "../../constants/carouselSettings";

const Carousel = ({ children, settings = defaultSettings }) => {
  return <Slider {...settings}>{children}</Slider>;
};

export default Carousel;
