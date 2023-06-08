import React from "react";
import Lottie from "lottie-react";

const AnimatedIcon = ({
  fps,
  startFrame,
  lottieAnimation,
  loop,
  autoplay,
  interactivity,
}) => {
  if (fps) lottieAnimation.fr = fps;
  return (
    <div className="lottie-container">
      <Lottie
        animationData={lottieAnimation}
        interactivity={
          interactivity && interactivity(startFrame || 0, lottieAnimation.op)
        }
        autoplay={autoplay}
        loop={loop}
      ></Lottie>
    </div>
  );
};

export default AnimatedIcon;
