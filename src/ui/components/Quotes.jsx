import React from "react";
import Carousel from "./Carousel";
import Quote from "../components/Quote";
import thomas from "../../assets/images/thomas.png";
import thomasCompany from "../../assets/images/noelle.png";
import jorg from "../../assets/images/jorg.png";
import jorgCompany from "../../assets/images/energie360.svg";

const Quotes = ({}) => {
  return (
    <div data-aos="custom-animation" className="quotes wrapper">
      <Carousel>
        <Quote
          author="Thomas Köhler"
          authorImage={thomas}
          quote="thomas-kohler:quote"
          position="thomas-kohler:position"
          company="Noelle + Von Campe"
          companyImage={thomasCompany}
          companyWidth={106}
          companyHeight={38}
        />
        <Quote
          author="Jörg Wild"
          authorImage={jorg}
          quote="jorg-wild:quote"
          position="jorg-wild:position"
          company="Energie 360° AG"
          companyImage={jorgCompany}
          companyWidth={143}
          companyHeight={29}
          smText
        />
      </Carousel>
    </div>
  );
};

export default Quotes;
