import React from "react";
import useTranslations from "../../hooks/useTranslations";
import icon from "../../assets/images/icon2.svg";
import ContactForm from "./ContactForm";

const Contact = ({}) => {
  const t = useTranslations();
  return (
    <div className="contact" id="contact">
      <div className="wrapper">
        <div className="panel contact-panel">
          <div className="contact-info">
            <img src={icon} alt="icon" className="animated-logo" />
            <p className="lead-m">{t("contact:name")}</p>
            <h2 className="beta">{t("contact:title")}</h2>
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
