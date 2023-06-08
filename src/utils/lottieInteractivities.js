export const midScrollInteractivity = (startFrame, frameCount) => {
  return {
    mode: "scroll",
    actions: [
      {
        visibility: [0, 0.3],
        type: "stop",
        frames: [startFrame],
      },
      {
        visibility: [0.3, 0.8],
        type: "seek",
        frames: [startFrame, frameCount],
      },
    ],
  };
};

export const midScreenPlay = (startFrame, frameCount) => {
  return {
    mode: "scroll",
    actions: [
      { visibility: [0, 0.01], type: "stop", frames: [startFrame] },
      {
        visibility: [0.01, 0.99],
        type: "loop",
        frames: [startFrame, frameCount],
      },
      { visibility: [0.99, 1], type: "stop", frames: [startFrame] },
    ],
  };
};
