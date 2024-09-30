import React from "react";
import useTranslations from "../../hooks/useTranslations";
import img from "../../assets/images/about/task_force.png";
import arrowIcon from "../../assets/icons/right-arrow-light.svg";

const TaskForce = () => {
  const t = useTranslations();

  return (
    <section className="task">
      <div className="wrapper no-p-md">
        <div className="task-container">
          <div className="task-img-wrapper">
            <img
              src={img}
              alt="task force team visual"
              loading="lazy"
              className="task-img"
              data-aos="custom-animation"
            />
          </div>
          <a
            href="https://turn2x.jobs.personio.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="panel task-panel" data-aos="custom-animation">
              <p className="panel-pretitle lead-m">{t("about-taskforce:label")}</p>
              <h2 className="alpha">{t("about-taskforce:title")}</h2>
              <p className="text-xl">{t("about-taskforce:text")}</p>
              <div className="link-icon">
                <span className="link-icon-text text-xl">
                  {t("about-taskforce:link")}
                </span>
                <img
                  src={arrowIcon}
                  alt="arrow right"
                  className="link-icon-icon"
                />
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TaskForce;
