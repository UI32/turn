import React, { useState, useEffect, useRef } from "react";

const IntroCard = ({ title, text, iconLight, iconWhite }) => {
  const [hover, setHover] = useState(false);
  const [textHeight, setTextHeight] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const textRef = useRef(null);

  const calculateTextHeight = () => {
    if (textRef.current) {
      setTextHeight(textRef.current.clientHeight);
    }
  };

  useEffect(() => {
    calculateTextHeight();
  }, [title]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1060px)");
    const handleResize = () => {
      setIsLargeScreen(!mediaQuery.matches);
      calculateTextHeight();
    };

    handleResize();

    mediaQuery.addEventListener("change", handleResize);
    window.addEventListener("resize", calculateTextHeight);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
      window.removeEventListener("resize", calculateTextHeight);
    };
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setHover(!hover);
    }
  };

  return (
    <article
      data-cursor="label"
      data-cursor-label="HOVER"
      className="intro-card"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex="0"
      aria-label={`Intro card for ${title}`}
    >
      <div className="intro-card-icon-container">
        <img
          src={iconLight}
          alt="intro card icon"
          loading="lazy"
          className="intro-card-icon intro-card-icon-light"
        />
        <img
          src={iconWhite}
          alt="intro card icon"
          loading="lazy"
          className="intro-card-icon intro-card-icon-white"
        />
      </div>
      <div
        className="intro-card-content"
        style={
          isLargeScreen
            ? { transform: `translateY(${hover ? 0 : textHeight}px)` }
            : {}
        }
      >
        <h3 className="intro-card-title alpha">{title}</h3>
        <p ref={textRef} className="intro-card-text text-xl">
          {text}
        </p>
      </div>
    </article>
  );
};

export default IntroCard;
