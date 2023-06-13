import React from "react";
import useTranslations from "../../hooks/useTranslations";
import ContactForm from "./ContactForm";
import Panel from "./Panel";
import AnimatedIcon from "./AnimatedIcon";
import contactIcon from "../../assets/animations/Icon-2-loopable.json";
import { midScreenPlay } from "../../utils/lottieInteractivities";

const Contact = ({}) => {
  const t = useTranslations();
  return (
    <div className="contact" id="contact" data-aos="custom-animation">
      <div className="wrapper">
        <Panel
          className="contact-panel"
          icon={
            <AnimatedIcon
              lottieAnimation={contactIcon}
              autoplay={false}
              loop={true}
              interactivity={midScreenPlay}
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
