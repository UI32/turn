import React from "react";
import useTranslations from "../../hooks/useTranslations";
import ContactForm from "./ContactForm";
import Panel from "./Panel";
import AnimatedIcon from "./AnimatedIcon";
import headerIcon from "../../assets/animations/Icon-2-loopable.json";

const Contact = ({}) => {
  const t = useTranslations();
  return (
    <div className="contact" id="contact">
      <div className="wrapper">
        <Panel
          className="contact-panel"
          icon={
            <AnimatedIcon
              lottieAnimation={headerIcon}
              loop={true}
              autoplay={true}
            ></AnimatedIcon>
          }
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
