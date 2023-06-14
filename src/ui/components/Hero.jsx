import React from "react";
import useTranslations from "../../hooks/useTranslations";
// TODO: Uncomment this if a fix to the build error is found
// import { Replay } from "vimond-replay";
// import ShakaVideoStreamer from "vimond-replay/video-streamer/shaka-player";
// import {
//   videoSource,
//   videoPlayerOptions,
//   initialPlaybackProps,
// } from "../../config/videoPlayerConfig";

const Hero = () => {
  let playVideo, setPlaybackPosition;

  const handlePlaybackActionsReady = ({ play, setPosition }) => {
    playVideo = play;
    setPlaybackPosition = setPosition;
  };

  const handleStreamStateChange = state => {
    if (state.position > 17.05 && setPlaybackPosition && playVideo) {
      setPlaybackPosition(0);
      playVideo();
    }
  };

  const t = useTranslations();
  return (
    <div className="hero">
      <div className="hero-intro">
        <div className="wrapper">
          <div className="hero-text" data-aos="custom-animation">
            <h1
              className="jumbo"
              dangerouslySetInnerHTML={{
                __html: t("hero:title"),
              }}
            />
          </div>
        </div>
      </div>
      <div className="hero-bg" data-aos="custom-animation">
        <div className="videoloop">
          {/* <Replay // Adaptative video streaming. It has dynamic imports that make the build fail
            onPlaybackActionsReady={handlePlaybackActionsReady}
            onStreamStateChange={handleStreamStateChange}
            source={videoSource}
            initialPlaybackProps={initialPlaybackProps}
            options={videoPlayerOptions}
          >
            <ShakaVideoStreamer />
          </Replay> */}
          <video className="videoloop" autoPlay loop muted playsInline>
            <source
              src={
                "https://turn2x.s3.eu-north-1.amazonaws.com/turnDroneVideo.mp4"
              }
            />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Hero;
