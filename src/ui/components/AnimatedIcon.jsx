import React from "react";
import Lottie from "lottie-react";
import cx from "classnames";

const AnimatedIcon = ({
  fps,
  startFrame,
  lottieAnimation,
  loop,
  autoplay,
  interactivity,
  endFramesTrim,
  className,
}) => {
  if (fps) lottieAnimation.fr = fps;
  const startingFrame = startFrame || 0;
  const endingFrame = lottieAnimation.op - (endFramesTrim || 0);

  return (
    <div className={cx("lottie-container", className)}>
      <Lottie
        animationData={lottieAnimation}
        interactivity={
          interactivity && interactivity(startingFrame, endingFrame)
        }
        autoplay={autoplay}
        loop={loop}
      ></Lottie>
    </div>
  );
};

export default AnimatedIcon;
