export const videoSource = {
  streamUrl: "https://turn2x.s3.eu-north-1.amazonaws.com/turnDroneVideo.mp4",
  contentType: "video/mp4",
};

export const initialPlaybackProps = { isMuted: true, isPaused: false };

export const videoPlayerOptions = {
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
