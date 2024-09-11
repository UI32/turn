import React from "react";

const Model3D = ({ src, children, headingLabel, headingTitle }) => {
  return (
    <div className="model" id="model">
      {headingTitle && (
        <div className="wrapper">
          <div className="model-heading">
            <p className="lead-m">{headingLabel}</p>
            <h3 className="alpha">{headingTitle}</h3>
          </div>
        </div>
      )}
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