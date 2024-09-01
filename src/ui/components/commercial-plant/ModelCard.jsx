import React from "react";

const ModelCard = ({title, subtitle, text}) => {
  return (
    <div className="model-card">
      <div className="model-card-head">
        <p className="jumbo">{title}</p>
        <p className="beta">{subtitle}</p>
      </div>
      <div className="model-card-body">
        <p className="text-l">{text}</p>
      </div>
    </div>
  );
};

export default ModelCard;
