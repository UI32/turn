import React from "react";
import Carousel from "../Carousel";
import { plantModelCards } from "../../../constants/carouselSettings";

const ModelCards = ({}) => {
  return (
    <div className="wrapper">
      <Carousel settings={plantModelCards}>
        <div className="model-card">
          <div className="model-card-head">
            <p className="jumbo">350</p>
            <p className="beta">t</p>
          </div>
          <div className="model-card-body">
            <p className="text-l ">
              CO2 savings compared to fossil natural gas
            </p>
          </div>
        </div>
        <div className="model-card">
          <div className="model-card-head">
            <p className="jumbo">350</p>
            <p className="beta">t</p>
          </div>
          <div className="model-card-body">
            <p className="text-l ">
              CO2 savings compared to fossil natural gas
            </p>
          </div>
        </div>
        <div className="model-card">
          <div className="model-card-head">
            <p className="jumbo">350</p>
            <p className="beta">t</p>
          </div>
          <div className="model-card-body">
            <p className="text-l ">
              CO2 savings compared to fossil natural gas
            </p>
          </div>
        </div>
        <div className="model-card">
          <div className="model-card-head">
            <p className="jumbo">350</p>
            <p className="beta">t</p>
          </div>
          <div className="model-card-body">
            <p className="text-l ">
              CO2 savings compared to fossil natural gas
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default ModelCards;
