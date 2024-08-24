import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const AdaptiveCursor = () => {
  const cursorRef = useRef(null);
  const cursor = useRef({
    element: null,
    states: {
      default: {
        backgroundColor: "transparent",
        height: 40,
        width: 40,
      },
      label: {
        backgroundColor: "#487AEE",
        height: 116,
        width: 116,
      },
    },
  }).current;

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 780px)");

    const handleMouseMove = event => {
      if (!cursor.element) return;

      gsap.to(cursor.element, {
        duration: 0.3,
        left: event.clientX,
        top: event.clientY,
      });
      const state = event.target?.getAttribute("data-cursor") || "default";
      const label = event.target?.getAttribute("data-cursor-label") || "";
      updateCursor(state, label);
    };

    const updateCursor = (state, label) => {
      gsap.to(cursor.element, {
        duration: 0.3,
        ...(cursor.states[state] || cursor.states["default"]),
      });
      cursor.element.className = `has-${state}-state`;
      cursor.element.innerHTML = label;
    };

    const handleMediaChange = e => {
      if (e.matches) {
        cursor.element = cursorRef.current;
        gsap.set(cursor.element, {
          left: window.innerWidth / 2,
          top: window.innerHeight / 2,
        });
        updateCursor("default");
        document.addEventListener("mousemove", handleMouseMove);
        cursor.element.style.display = "flex";
      } else {
        document.removeEventListener("mousemove", handleMouseMove);
        if (cursor.element) {
          cursor.element.style.display = "none";
        }
      }
    };

    handleMediaChange(mediaQuery);
    mediaQuery.addEventListener("change", handleMediaChange);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, [cursor]);

  return <div id="adaptive-cursor" className="text-m" ref={cursorRef}></div>;
};

export default AdaptiveCursor;
