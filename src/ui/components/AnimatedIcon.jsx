import React from "react";
import Lottie from "lottie-react";

const AnimatedIcon = ({ lottieAnimation, loop, autoplay, interactivity }) => {
  return (
    <Lottie
      animationData={lottieAnimation}
      interactivity={interactivity}
      autoplay={autoplay}
      loop={loop}
    ></Lottie>
  );
};

export default AnimatedIcon;
