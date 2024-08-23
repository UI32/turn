import React from "react";

const Typography = () => {
  return (
    <div className="wrapper">
      <style jsx="true">{`
        .hl {
          color: #4579dd;
          font-weight: 700;
        }
      `}</style>
      <p className="jumbo">
        jumbo <span className="hl">h1</span> m36 d80
      </p>
      <p className="alpha">
        alpha <span className="hl">h2</span> m32 d36
      </p>
      <p className="beta">
        beta <span className="hl">h3</span> m20 d24
      </p>
      <p className="text-xl">
        text-xl <span className="hl">text-base</span> 20
      </p>
      <p className="text-l">
        text-l <span className="hl">text-sm-1</span> 16
      </p>
      <p className="text-m">
        text-m <span className="hl">text-sm-2</span> 16
      </p>
      <p className="text-s">
        text-s <span className="hl">text-xs</span> 14
      </p>
      <p className="lead-m">
        lead-m <span className="hl">overline</span> 14
      </p>
      <p className="quote-l">
        <span className="hl">quote-l</span> m26 d36
      </p>
      <p className="quote-m">
        <span className="hl">quote-m</span> m20 d28
      </p>
    </div>
  );
};

export default Typography;
