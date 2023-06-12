import React from "react";
import Lottie from "lottie-react";

const AnimatedIcon = ({ lottieAnimation, loop, autoplay, interactivity }) => {
  return (
    <div className="lottie-container">
      <Lottie
        animationData={lottieAnimation}
        interactivity={interactivity}
        autoplay={autoplay}
        loop={loop}
      ></Lottie>
    </div>
  );
};

export default AnimatedIcon;
