import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const AdaptiveCursor = ({ bgColor = "#487AEE" }) => {
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
        backgroundColor: bgColor,
        height: 116,
        width: 116,
      },
    },
  }).current;

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 780px)");

    const handleMouseMove = (event) => {
      if (!cursor.element) return;

      gsap.to(cursor.element, {
        duration: 0.3,
        left: event.clientX,
        top: event.clientY,
      });

      const targetElement = event.target;
      const state = targetElement?.getAttribute("data-cursor") || "default";
      let label = targetElement?.getAttribute("data-cursor-label") || "";
      if (label === undefined || label === null) {
        label = "";
      }
      updateCursor(state, label);

      if (!targetElement.closest("[data-cursor]")) {
        gsap.to(cursor.element, { duration: 0.3, opacity: 0 });
      } else {
        gsap.to(cursor.element, { duration: 0.3, opacity: 1 });
      }
    };

    const handleScroll = () => {
      const elements = document.querySelectorAll("[data-cursor]");
      let isCursorVisible = false;

      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight &&
          rect.bottom >= 0 &&
          rect.left <= window.innerWidth &&
          rect.right >= 0
        ) {
          isCursorVisible = true;
        }
      });

      if (!isCursorVisible) {
        gsap.to(cursor.element, { duration: 0.3, opacity: 0 });
      }
    };

    const updateCursor = (state, label) => {
      gsap.to(cursor.element, {
        duration: 0.3,
        ...(cursor.states[state] || cursor.states["default"]),
      });
      cursor.element.className = `has-${state}-state`;
      cursor.element.innerHTML = label;
    };

    const handleMediaChange = (e) => {
      if (e.matches) {
        cursor.element = cursorRef.current;
        gsap.set(cursor.element, {
          left: window.innerWidth / 2,
          top: window.innerHeight / 2,
        });
        updateCursor("default", "");
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("scroll", handleScroll);
        cursor.element.style.display = "flex";
      } else {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("scroll", handleScroll);
        if (cursor.element) {
          cursor.element.style.display = "none";
        }
      }
    };

    handleMediaChange(mediaQuery);
    mediaQuery.addEventListener("change", handleMediaChange);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("scroll", handleScroll);
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, [cursor, bgColor]);

  return <div id="adaptive-cursor" className="text-m" ref={cursorRef}></div>;
};

export default AdaptiveCursor;
