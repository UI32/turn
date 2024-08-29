import React from "react";

const Model3D = ({ src, children }) => {
  return (
    <div className="model" id="model">
      <div className="model-wrapper">
        <div className="ui-cover top-left"></div>
        <div className="ui-cover top-right"></div>
        <iframe
          title="3D Model"
          style={{ width: "100%", height: "100%", border: "none", zIndex: -1 }}
          src={src}
        ></iframe>
        <div className="ui-cover bottom"></div>
      </div>
      {children}
    </div>
  );
};

export default Model3D;