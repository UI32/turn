import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import SplitType from 'split-type';

const TextReveal = ({ title }) => {
  const textRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const myText = new SplitType(textRef.current);

      // Ensure the text is hidden until the animation starts
      gsap.set(textRef.current, { visibility: 'visible', opacity: 0 });

      // GSAP animation for each character
      gsap.fromTo(
        '.char',
        { y: '100%', opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.02,
          delay: 0.03,
          duration: 0.5,
          ease: 'power2.out',
        }
      );

      // Fade in the entire text block when the animation starts
      gsap.to(textRef.current, { opacity: 1, duration: 0 });

      // Clean up SplitType instance on unmount
      return () => {
        myText.revert();
      };
    }
  }, []);

  return (
    <h1
      ref={textRef}
      className="jumbo"
      dangerouslySetInnerHTML={{
        __html: title,
      }}
    />
  );
};

export default TextReveal;
