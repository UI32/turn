import React from "react";
import useTranslations from "../../hooks/useTranslations";

const Model3D = ({}) => {
  const t = useTranslations();
  return (
    <div className="model" id="model" data-aos="custom-animation">
      <div className="model-wrapper"></div>
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
