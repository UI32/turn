import React from "react";
import useTranslations from "../../hooks/useTranslations";
import { Replay } from "vimond-replay";
import CompoundVideoStreamer from "vimond-replay/video-streamer/compound";

const Hero = () => {
  let playVideo, setPlaybackPosition;

  const playbackActionsReady = ({ play, setPosition }) => {
    playVideo = play;
    setPlaybackPosition = setPosition;
  };
  const restartVideo = () => {
    if (setPlaybackPosition && playVideo) {
      setPlaybackPosition(0);
      playVideo();
    }
  };

  const videoPlayerOptions = {
    controls: { includeControls: [] },
    videoStreamer: {
      // Adaptative playback config.
      shakaPlayer: {
        customConfiguration: {
          streaming: {
            bufferingGoal: 120,
          },
        },
      },
      hlsjs: {
        customConfiguration: {
          capLevelToPlayerSize: true,
          maxBufferLength: 45,
        },
      },
    },
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
            onPlaybackActionsReady={playbackActionsReady}
            onStreamStateChange={state => {
              if (state.position > 17.05) restartVideo();
            }}
            source={{
              streamUrl:
                "https://turn2x.s3.eu-north-1.amazonaws.com/turnDroneVideo.mp4",
              contentType: "video/mp4",
            }}
            options={videoPlayerOptions}
            initialPlaybackProps={{
              isMuted: true,
              isPaused: false,
            }}
          >
            <CompoundVideoStreamer />
          </Replay>
        </div>
        {/* <video className="videoloop" autoPlay loop muted playsInline>
          <source
            src={
              "https://turn2x.s3.eu-north-1.amazonaws.com/turnDroneVideo.mp4"
            }
          />
        </video> */}
      </div>
    </div>
  );
};

export default Hero;
