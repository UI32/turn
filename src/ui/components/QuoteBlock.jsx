import React from "react";
import Motto from "./Motto";
import author from "../../assets/images/dirk.png";
import company from "../../assets/images/siempelkamp.png";
import Quote from "../components/Quote";

const QuoteBlock = () => {
  return (
    <div className="quote-block" data-aos="custom-animation">
      <div className="wrapper">
        <Motto />
        <Quote
          author="Dirk Howe"
          authorImage={author}
          quote="dirk:quote"
          position="dirk:position"
          company="Siempelkamp"
          companyImage={company}
          companyWidth={83}
          companyHeight={33}
        />
      </div>
    </div>
  );
};

export default QuoteBlock;
