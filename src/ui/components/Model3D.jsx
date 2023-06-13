import React from "react";
import useTranslations from "../../hooks/useTranslations";

const Model3D = () => {
  const t = useTranslations();
  return (
    <div className="model" id="model" data-aos="custom-animation">
      <div className="model-wrapper">
        <iframe
          style={{ width: "100%", height: "100%", border: "none" }}
          src="https://sketchfab.com/models/5ca574f7b6f24d7ab88a8ba6ab6eb0bb/embed?scrollwheel=0&autospin=0&autostart=1&camera=0&ui_hint=0&ui_stop=0"
        ></iframe>
      </div>
      <div className="panel info-panel">
        <p className="lead-m">{t("model:title")}</p>
        <p
          className="text-xl"
          dangerouslySetInnerHTML={{
            __html: t("model:text"),
          }}
        />
      </div>
    </div>
  );
};

export default Model3D;
