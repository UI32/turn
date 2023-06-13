export const midScrollSeek = (startFrame, endFrame) => {
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
        frames: [startFrame, endFrame],
      },
    ],
  };
};

export const midScreenPlay = (startFrame, endFrame) => {
  return {
    mode: "scroll",
    actions: [
      { visibility: [0, 0.01], type: "stop", frames: [startFrame] },
      {
        visibility: [0.01, 0.99],
        type: "loop",
        frames: [startFrame, endFrame],
      },
      { visibility: [0.99, 1], type: "stop", frames: [startFrame] },
    ],
  };
};
