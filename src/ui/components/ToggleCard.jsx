import React, { useState, useRef, useEffect } from "react";

const ToggleCard = ({ title, text }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleDropdown();
    }
  };

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [isOpen]);

  return (
    <div className={`toggle-card ${isOpen ? "open" : ""}`}>
      <div
        className="toggle-card-header"
        onClick={toggleDropdown}
        onKeyDown={handleKeyPress}
        role="button"
        tabIndex="0"
        aria-expanded={isOpen}
        aria-controls="toggle-card-body"
      >
        <p className="beta">{title}</p>
        <div className="toggle-card-icon">
          <span className="toggle-card-line toggle-card-line-1"></span>
          <span className="toggle-card-line toggle-card-line-2"></span>
        </div>
      </div>
      <div
        id="toggle-card-body"
        className="toggle-card-body"
        style={{
          maxHeight: isOpen ? `${contentHeight}px` : "0",
          opacity: isOpen ? 1 : 0,
        }}
        ref={contentRef}
        aria-hidden={!isOpen}
      >
        <p className="text-xl">{text}</p>
      </div>
    </div>
  );
};

export default ToggleCard;
