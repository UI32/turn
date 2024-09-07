import React from "react";

import logoBi from "../../assets/images/marquee/logo-business-insider.svg";
import logoDs from "../../assets/images/marquee/logo-der-spiegel.svg";
import logoFt from "../../assets/images/marquee/logo-financial-times.svg";
import logoFa from "../../assets/images/marquee/logo-frankfurter-allgmeine.svg";
import logoHs from "../../assets/images/marquee/logo-handelsblatt.svg";
import logoHi from "../../assets/images/marquee/logo-hydrogeninsight.svg";
import logoSz from "../../assets/images/marquee/logo-sueddeutsche-zeitung.svg";

const logos = [logoBi, logoDs, logoFt, logoFa, logoHs, logoHi, logoSz];

const LogoItem = ({ logo }) => (
  <li className="marquee-item">
    <img src={logo} alt="press logo" loading="eager" />
  </li>
);

const Marquee = () => {
  return (
    <section className="marquee">
      <div className="marquee-track">
        {Array.from({ length: 4 }).map((_, index) => (
          <ul className="marquee-content" key={index}>
            {logos.map((logo, idx) => (
              <LogoItem key={`${index}-${idx}`} logo={logo} />
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
};

export default Marquee;
