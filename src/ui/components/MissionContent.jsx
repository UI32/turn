import React from "react";
import { ReactComponent as Graph } from "../../assets/icons/graph-light.svg";
import { ReactComponent as PaperD } from "../../assets/icons/paper-dark.svg";
import { ReactComponent as PaperL } from "../../assets/icons/paper-light.svg";
import { ReactComponent as Rocket } from "../../assets/icons/rocket-light.svg";
import { ReactComponent as Scale } from "../../assets/icons/scale-light.svg";
import { ReactComponent as Target } from "../../assets/icons/target-dark.svg";
import { ReactComponent as TurnxD } from "../../assets/icons/turnx-dark.svg";
import { ReactComponent as TurnxL } from "../../assets/icons/turnx-light.svg";


import Goal from "./Goal";

const MissionContent = () => {
  return (
    <div className="mission-content">
      <div className="goals">
        <span className="goal spacer"></span>
        <Goal
          future
          icon={<TurnxL className="icon" />}
          date="BY 2031"
          text="mission:2031"
          className="last"
        />

        <Goal
          future
          icon={<Rocket className="icon" />}
          date="2024"
          text="mission:2024"
          className="w-44_2"
        />
        <Goal
          future
          icon={<Graph className="icon" />}
          date="2024"
          text="mission:2024-1"
          className="w-44_2"
        />
        <Goal
          future
          icon={<Scale className="icon" />}
          date="2024"
          text="mission:2024-2"
          className="w-44_2"
        />                
        <Goal
          future
          icon={<PaperL className="icon" />}
          date="2023"
          text="mission:2023"
          className="w-51_2"
        />
        <Goal
          past
          icon={<TurnxD className="icon" />}
          date="2019"
          text="mission:2019"
          className="w-79"
        />
        <Goal
          past
          icon={<Target className="icon" />}
          date="2018"
          text="mission:2018"
          className="w-86_2"
        />
        <Goal
          past
          icon={<PaperD className="icon" />}
          date="2016"
          text="mission:2016"
          className="w-100"
        />
      </div>
      <div className="timeline">
        <div className="timeline-item is-past">2016</div>
        <div className="timeline-item is-past">2017</div>
        <div className="timeline-item is-past">2018</div>
        <div className="timeline-item is-past">2019</div>
        <div className="timeline-item is-past">2020</div>
        <div className="timeline-item is-past">2021</div>
        <div className="timeline-item is-past">2022</div>
        <div className="timeline-item is-future">2023</div>
        <div className="timeline-item is-future">2024</div>
        <div className="timeline-item is-future">2025</div>
        <div className="timeline-item is-future">2026</div>
        <div className="timeline-item is-future">2027</div>
        <div className="timeline-item is-future">2028</div>
        <div className="timeline-item is-future">2029</div>
        <div className="timeline-item is-future">2030</div>
      </div>
    </div>
  );
};

export default MissionContent;
