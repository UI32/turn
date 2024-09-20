import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import SplitType from 'split-type'; // Correct import statement for SplitType

const TextReveal = ({ title }) => {
  const textRef = useRef(null);

  useEffect(() => {
    // Ensure SplitType and GSAP are only executed in the browser
    if (typeof window !== 'undefined') {
      // Initialize SplitType on the referenced text element
      const myText = new SplitType(textRef.current);

      // GSAP animation for each character
      gsap.fromTo(
        '.char',
        { y: '100%' }, // Start from below the text
        {
          y: 0,
          stagger: 0.02, // Time between each character animation
          delay: 0.03,    // Delay before animation starts
          duration: 0.5, // Duration of each character animation
          ease: 'power2.out',
        }
      );

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
