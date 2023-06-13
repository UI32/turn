import React, { useEffect, useState, useRef } from "react";
import useTranslations from "../../hooks/useTranslations";
import Panel from "./Panel";
import AnimatedIcon from "./AnimatedIcon";
import howItWorksIcon from "../../assets/animations/Icon-4.json";
import { midScreenPlay } from "../../utils/lottieInteractivities";
import cx from "classnames";
import section1 from "../../assets/images/section1.svg";
import section2 from "../../assets/images/section2.svg";
import section3 from "../../assets/images/section3.svg";
import section1active from "../../assets/images/section1-active.svg";
import section2active from "../../assets/images/section2-active.svg";
import section3active from "../../assets/images/section3-active.svg";

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

const HowItWorks = ({}) => {
  const t = useTranslations();
  const [StateWrapper] = useCycleActiveStates(["E1", "E2", "E3"], 3000);

  return (
    <div className="how-it-works" id="how-it-works" data-aos="custom-animation">
      <div className="wrapper">
        <Panel
          className="how-it-works-panel"
          icon={
            <AnimatedIcon
              lottieAnimation={howItWorksIcon}
              loop={true}
              autoplay={false}
              startFrame={120}
              interactivity={midScreenPlay}
            ></AnimatedIcon>
          }
          pretitle="how-it-works:esg-compliant"
          title="how-it-works:title"
        >
          <div className={cx("process")}>
            <div className="process-bullets">
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
            <div className="process-graphic">
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
        </Panel>
      </div>
    </div>
  );
};

export default HowItWorks;
