import React from "react";
import useTranslations from "../../hooks/useTranslations";
import { ReactComponent as Document } from "../../assets/icons/document.svg";
import { ReactComponent as Cog } from "../../assets/icons/cog.svg";
import { ReactComponent as Documents } from "../../assets/icons/documents.svg";
import { ReactComponent as Helix } from "../../assets/icons/helix.svg";
import { ReactComponent as Charge } from "../../assets/icons/charge.svg";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { ReactComponent as Patterns } from "../../assets/icons/double-pattern.svg";
import Goal from "./Goal";

const MissionContent = () => {
  const t = useTranslations();
  return (
    <div className="mission-content" data-aos="custom-animation">
      <div className="goals">
        <Goal
          future
          icon={<Logo className="icon" />}
          date="By 2030"
          text="mission:2030"
          className="last"
        />

        <Goal
          future
          icon={<Helix className="icon helix" />}
          date="2024"
          text="mission:2024"
          className="w-47_2"
        />
        <Goal
          future
          icon={<Documents className="icon documents" />}
          date="2023"
          text="mission:2023"
          className="w-53_8"
        />
        <Goal
          past
          icon={<Charge className="icon charge" />}
          date="2022"
          text="mission:2022"
          className="w-73_6"
        />
        <Goal
          past
          icon={<Patterns className="icon patterns" />}
          date="2019"
          text="mission:2019"
          className="w-80_2"
        />
        <Goal
          past
          icon={<Cog className="icon cog" />}
          date="2018"
          text="mission:2018"
          className="w-86_2"
        />
        <Goal
          past
          icon={<Document className="icon document" />}
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
