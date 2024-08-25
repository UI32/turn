import React from "react";
import useTranslations from "../../hooks/useTranslations";

const Model3D = () => {
  const t = useTranslations();
  return (
    <div className="model" id="model">
      <div className="model-wrapper">
        <div className="ui-cover top-left"></div>
        <div className="ui-cover top-right"></div>
        <iframe
          title="3D Model"
          style={{ width: "100%", height: "100%", border: "none", zIndex: -1 }}
          src="https://sketchfab.com/models/9480e5409a0442e39e01854d1fd4c47c/embed?scrollwheel=0&autostart=1&camera=0&transparent=1&ui_hint=0&mousewheel=0&ui_stop=0&ui_infos=0"
        ></iframe>
        <div className="ui-cover bottom"></div>
      </div>
      <div className="wrapper custom-cursor_text view">
        <div className="panel info-panel">
          <p className="panel-pretitle lead-m">{t("model:label")}</p>
          <h2 className="alpha">{t("model:title")}</h2>
          <p className="text-xl">{t("model:text")}</p>
        </div>
      </div>
    </div>
  );
};

export default Model3D;
