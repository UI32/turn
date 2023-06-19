import React, { useEffect, useState, useRef } from "react";
import useTranslations from "../../hooks/useTranslations";
import Panel from "./Panel";
import AnimatedIcon from "./AnimatedIcon";
import ProcessIcon from "../../assets/animations/Icon-4.json";
import { midScreenPlay } from "../../utils/lottieInteractivities";
import cx from "classnames";
import section1 from "../../assets/images/process/section1.svg";
import section1mb from "../../assets/images/process/section1-mb.svg";
import section2 from "../../assets/images/process/section2.svg";
import section2mb from "../../assets/images/process/section2-mb.svg";
import section3 from "../../assets/images/process/section3.svg";
import section3mb from "../../assets/images/process/section3-mb.svg";
import section1active from "../../assets/images/process/section1-active.svg";
import section1activemb from "../../assets/images/process/section1-mb-active.svg";
import section2active from "../../assets/images/process/section2-active.svg";
import section2activemb from "../../assets/images/process/section2-mb-active.svg";
import section3active from "../../assets/images/process/section3-active.svg";
import section3activemb from "../../assets/images/process/section3-mb-active.svg";

const useCycleActiveStates = (stateList, delay) => {
  const [activeState, setActiveState] = useState(stateList[0]);
  const timerId = useRef(null);
  // actions
  const activateState = state => {
    clearTimeout(timerId.current);
    setActiveState(state);
  };
  const resumeTimer = () => {
    clearTimeout(timerId.current);
    timerId.current = setTimeout(cycleActiveState, delay);
  };
  const cycleActiveState = () => {
    const idx = stateList.indexOf(activeState);
    setActiveState(stateList[(idx + 1) % stateList.length]);
  };
  // trigger & content
  const StateWrapper = ({ state, children, className, ...props }) => (
    <div
      onMouseEnter={() => activateState(state)}
      onMouseLeave={resumeTimer}
      className={cx({ active: state === activeState, [className]: className })}
    >
      {children}
    </div>
  );
  // initialization
  useEffect(() => {
    resumeTimer();
    return () => clearTimeout(timerId.current);
  });
  // result
  return [StateWrapper];
};

const Process = ({}) => {
  const t = useTranslations();
  const [StateWrapper] = useCycleActiveStates(["E1", "E2", "E3"], 5000);

  return (
    <div className="process" id="how-it-works" data-aos="custom-animation">
      <div className="wrapper">
        <Panel
          className="process-panel"
          icon={
            <AnimatedIcon
              lottieAnimation={ProcessIcon}
              loop={true}
              autoplay={false}
              startFrame={120}
              interactivity={midScreenPlay}
            ></AnimatedIcon>
          }
          pretitle="process:esg-compliant"
          title="process:title"
        >
          <div className={cx("process-content")}>
            <div className="process-bullets" data-aos="custom-animation">
              <StateWrapper state="E1" className="bullet">
                {t("process:section1")}
              </StateWrapper>
              <StateWrapper state="E2" className="bullet">
                {t("process:section2")}
              </StateWrapper>
              <StateWrapper state="E3" className="bullet">
                {t("process:section3")}
              </StateWrapper>
              <p className="caption">{t("process:caption1")}</p>
              <p className="caption">{t("process:caption2")}</p>
            </div>
            <div className="process-graphic" data-aos="custom-animation">
              <div className="mobile-graphic">
                <StateWrapper state="E1" className="graphic-section section-1">
                  <img
                    src={section1mb}
                    className="section-img mobile"
                    alt="section 1"
                  />
                  <img
                    src={section1activemb}
                    className="section-img-active mobile"
                    alt="section 1 active"
                  />
                </StateWrapper>
                <StateWrapper state="E2" className="graphic-section section-2">
                  <img
                    src={section2mb}
                    alt="section 2"
                    className="section-img mobile"
                  />
                  <img
                    src={section2activemb}
                    alt="section 2 active"
                    className="section-img-active mobile"
                  />
                </StateWrapper>
                <StateWrapper state="E3" className="graphic-section section-3">
                  <img
                    src={section3mb}
                    alt="section 3"
                    className="section-img mobile"
                  />
                  <img
                    src={section3activemb}
                    alt="section 3 active"
                    className="section-img-active mobile"
                  />
                </StateWrapper>
              </div>
              <div className="desktop-graphic">
                <StateWrapper state="E1" className="graphic-section section-1">
                  <img src={section1} className="section-img" alt="section 1" />
                  <img
                    src={section1active}
                    className="section-img-active"
                    alt="section 1 active"
                  />
                </StateWrapper>
                <StateWrapper state="E2" className="graphic-section section-2">
                  <img src={section2} alt="section 2" className="section-img" />
                  <img
                    src={section2active}
                    alt="section 2 active"
                    className="section-img-active"
                  />
                </StateWrapper>
                <StateWrapper state="E3" className="graphic-section section-3">
                  <img src={section3} alt="section 3" className="section-img" />
                  <img
                    src={section3active}
                    alt="section 3 active"
                    className="section-img-active"
                  />
                </StateWrapper>
              </div>
            </div>
          </div>
        </Panel>
      </div>
    </div>
  );
};

export default Process;
