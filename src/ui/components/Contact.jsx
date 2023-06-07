import React from "react";
import useTranslations from "../../hooks/useTranslations";
import icon from "../../assets/images/icon2.svg";
import ContactForm from "./ContactForm";
import Panel from "./Panel";

const Contact = ({}) => {
  const t = useTranslations();
  return (
    <div className="contact" id="contact">
      <div className="wrapper">
        <Panel
          className="contact-panel"
          icon={icon}
          pretitle="contact:name"
          title="contact:title"
        >
          <div className="contact-info">
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
        </Panel>
      </div>
    </div>
  );
};

export default Contact;
