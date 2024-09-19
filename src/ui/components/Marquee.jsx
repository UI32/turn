import React from "react";

const LogoItem = ({ logo }) => (
  <li className="marquee-item">
    <img src={logo} alt="press logo" loading="eager" />
  </li>
);

const Marquee = ({ logos }) => {
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
