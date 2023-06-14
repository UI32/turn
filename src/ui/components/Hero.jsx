import React from "react";
import useTranslations from "../../hooks/useTranslations";
import { Replay } from "vimond-replay";
import CompoundVideoStreamer from "vimond-replay/video-streamer/compound";
import {
  videoSource,
  videoPlayerOptions,
  initialPlaybackProps,
} from "../../config/videoPlayerConfig";

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
          <Replay
            onPlaybackActionsReady={handlePlaybackActionsReady}
            onStreamStateChange={handleStreamStateChange}
            source={videoSource}
            initialPlaybackProps={initialPlaybackProps}
            options={videoPlayerOptions}
          >
            <CompoundVideoStreamer />
          </Replay>
        </div>
      </div>
    </div>
  );
};

export default Hero;
