import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const AnimatedCounter = ({ dataNum, duration, className }) => {
  const counterRef = useRef(null);

  useEffect(() => {
    const counterElement = counterRef.current;

    const animateCounter = (element) => {
      const counter = { val: 0 };

      gsap.to(counter, {
        val: dataNum,
        duration: duration || 5,
        roundProps: "val",
        onUpdate: () => {
          element.innerHTML = counter.val;
        },
      });
    };

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          if (counterElement.classList.contains("aos-animate")) {
            animateCounter(counterElement);
          }
        }
      });
    });

    observer.observe(counterElement, { attributes: true });

    return () => {
      observer.disconnect();
    };
  }, [dataNum, duration]);

  return (
    <span className={className} data-aos="true" ref={counterRef}>
      0
    </span>
  );
};

export default AnimatedCounter;
