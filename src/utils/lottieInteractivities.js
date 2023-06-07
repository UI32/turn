export const midScrollInteractivity = {
  mode: "scroll",
  actions: [
    {
      visibility: [0, 0.3],
      type: "stop",
    },
    {
      visibility: [0.3, 0.4],
      type: "seek",
      frames: [0, 50],
    },
    {
      visibility: [0.4, 0.6],
      type: "seek",
      frames: [50, -50],
    },
  ],
};
