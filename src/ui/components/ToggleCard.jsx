import React, { useState, useRef, useEffect } from "react";

const ToggleCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // Set the content height dynamically when the dropdown is open
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [isOpen]);

  return (
    <div className={`toggle-card ${isOpen ? "open" : ""}`}>
      <div className="toggle-card-header" onClick={toggleDropdown}>
        <p>Reliability</p>
        <div className="toggle-card-icon">
          <span className="toggle-card-line toggle-card-line-1"></span>
          <span className="toggle-card-line toggle-card-line-2"></span>
        </div>
      </div>
      <div
        className="toggle-card-body"
        style={{
          maxHeight: isOpen ? `${contentHeight}px` : "0",
          opacity: isOpen ? 1 : 0,
        }}
        ref={contentRef}
      >
        <p>
          The blending approach creates long-term security around fleet
          investments since it allows for regulatory compliance for marine fuel
          decarbonisation until 2035 and beyond.
        </p>
      </div>
    </div>
  );
};

export default ToggleCard;
