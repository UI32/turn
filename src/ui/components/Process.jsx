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
  const stateWrapperProps = (state, className) => ({
    onMouseEnter: () => activateState(state),
    onMouseLeave: resumeTimer,
    className: cx({
      active: state === activeState,
      [className]: className,
    }),
  });
  // initialization
  useEffect(() => {
    resumeTimer();
    return () => clearTimeout(timerId.current);
  });
  // result
  return [stateWrapperProps];
};

const Process = () => {
  const t = useTranslations();
  const [stateWrapperProps] = useCycleActiveStates(["E1", "E2", "E3"], 5000);

  return (
    <div className="process">
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
              className="hide-in-mobile"
            ></AnimatedIcon>
          }
          pretitle="process:esg-compliant"
          title="process:title"
        >
          <div className={cx("process-content")}>
            <div className="process-bullets show-in-tablet">
              <div className="process-bullets-container">
                <div {...stateWrapperProps("E1", "bullet")}>
                  {t("process:section1")}
                </div>
                <div {...stateWrapperProps("E2", "bullet")}>
                  {t("process:section2")}
                </div>
                <div {...stateWrapperProps("E3", "bullet")}>
                  {t("process:section3")}
                </div>
              </div>
              <div className="process-bullets-caption">
                <p className="caption">{t("process:caption1")}</p>
                <p className="caption">{t("process:caption2")}</p>
              </div>
            </div>
            <div className="process-graphic">
              <div className="mobile-graphic">
                <div {...stateWrapperProps("E1", "bullet")}>
                  {t("process:section1")}
                </div>
                <div {...stateWrapperProps("E1", "graphic-section section-1")}>
                  <img
                    loading="lazy"
                    src={section1mb}
                    className="section-img mobile"
                    alt="section 1"
                  />
                  <img
                    loading="lazy"
                    src={section1activemb}
                    className="section-img-active mobile"
                    alt="section 1 active"
                  />
                </div>
                <div {...stateWrapperProps("E2", "bullet")}>
                  {t("process:section2")}
                </div>
                <div {...stateWrapperProps("E2", "graphic-section section-2")}>
                  <img
                    loading="lazy"
                    src={section2mb}
                    alt="section 2"
                    className="section-img mobile"
                  />
                  <img
                    loading="lazy"
                    src={section2activemb}
                    alt="section 2 active"
                    className="section-img-active mobile"
                  />
                </div>
                <div {...stateWrapperProps("E3", "bullet")}>
                  {t("process:section3")}
                </div>
                <div {...stateWrapperProps("E3", "graphic-section section-3")}>
                  <img
                    loading="lazy"
                    src={section3mb}
                    alt="section 3"
                    className="section-img mobile"
                  />
                  <img
                    loading="lazy"
                    src={section3activemb}
                    alt="section 3 active"
                    className="section-img-active mobile"
                  />
                </div>
                <div className="process-graphic-caption hide-in-desktop">
                  <p className="caption">{t("process:caption1")}</p>
                  <p className="caption">{t("process:caption2")}</p>
                </div>
              </div>
              <div className="desktop-graphic">
                <div {...stateWrapperProps("E1", "graphic-section section-1")}>
                  <img
                    loading="lazy"
                    src={section1}
                    className="section-img"
                    alt="section 1"
                    width="215"
                    height="563"
                  />
                  <img
                    loading="lazy"
                    src={section1active}
                    className="section-img-active"
                    alt="section 1 active"
                    width="215"
                    height="563"
                  />
                </div>
                <div {...stateWrapperProps("E2", "graphic-section section-2")}>
                  <img
                    loading="lazy"
                    src={section2}
                    alt="section 2"
                    className="section-img"
                    width="185"
                    height="563"
                  />
                  <img
                    loading="lazy"
                    src={section2active}
                    alt="section 2 active"
                    className="section-img-active"
                    width="185"
                    height="563"
                  />
                </div>
                <div {...stateWrapperProps("E3", "graphic-section section-3")}>
                  <img
                    loading="lazy"
                    src={section3}
                    alt="section 3"
                    className="section-img"
                    width="327"
                    height="565"
                  />
                  <img
                    loading="lazy"
                    src={section3active}
                    alt="section 3 active"
                    className="section-img-active"
                    width="327"
                    height="565"
                  />
                </div>
              </div>
            </div>
          </div>
        </Panel>
      </div>
    </div>
  );
};

export default Process;
