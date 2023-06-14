import React from "react";

const GlobeText = () => {
  return (
    <div className="globe-text">
      <div className="circle">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="300px"
          height="300px"
          viewBox="0 0 300 300"
          enableBackground="new 0 0 300 300"
          xmlSpace="preserve"
        >
          <defs>
            <path
              id="circlePath"
              d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
            />
          </defs>
          <g>
            <use xlinkHref="#circlePath" fill="none" />
            <text fill="#000">
              <textPath xlinkHref="#circlePath">
                Global &nbsp; &nbsp;responsibility
              </textPath>
            </text>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default GlobeText;
