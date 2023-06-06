import React from "react";
import useTranslations from "../../hooks/useTranslations";
import icon from "../../assets/images/icon2.svg";
import ContactForm from "./ContactForm";

const Contact = ({}) => {
  const t = useTranslations();
  return (
    <div className="contact" id="contact">
      <div className="wrapper">
        <div className="panel">
          <div className="contact-info">
            <img src={icon} alt="icon" />
            <p className="pretitle">{t("contact:name")}</p>
            <h1 className="jumbo">{t("contact:title")}</h1>
            <p
              className="text-l"
              dangerouslySetInnerHTML={{
                __html: t("contact:address"),
              }}
            />
            <p
              className="text-l"
              dangerouslySetInnerHTML={{
                __html: t("contact:info"),
              }}
            />
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
