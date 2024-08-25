import React from "react";
import PressItem from "./PressItem";
import imgEnergy from "../../assets/images/press-item-energy.jpg";
import imgMariti from "../../assets/images/press-item-maritime.jpg";
import imgUtilit from "../../assets/images/press-item-utilities.jpg";

const Press = () => {
  return (
    <section className="press">
      <div className="press-wrapper">
        <div className="press-container">
          <div className="press-item">intro</div>
          <PressItem
            to="/"
            pretitle="press:item-1-pre"
            title="press:item-1-title"
            img={imgMariti}
          />
          <PressItem
            to="/"
            pretitle="press:item-1-pre"
            title="press:item-1-title"
            img={imgUtilit}
          />
          <PressItem
            to="/"
            pretitle="press:item-1-pre"
            title="press:item-1-title"
            img={imgEnergy}
          />
          <div className="press-item spacer"></div>
        </div>
      </div>
    </section>
  );
};

export default Press;
