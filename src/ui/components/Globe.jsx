import React, { useEffect, useRef } from "react";
import createGlobe from "cobe";

export default function Globe() {
  const canvasRef = useRef();

  useEffect(() => {
    let phi = 0;
    let marker1Size = 0.1;
    let marker2Size = 0.08;

    let markers = [
      // [latitude, longitude] (Go to https://www.latlong.net/ to find coordinates)
      { location: [52.375893, 9.73201], size: marker1Size }, // Hannover
      { location: [59.913868, 10.752245], size: marker2Size }, // Oslo
    ];

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 120 * 2,
      height: 120 * 2,
      phi: 0,
      theta: 0.2,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [],

      onRender: state => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        // Rotation animation
        state.phi = phi;
        phi += 0.01;
        // Markers animation
        state.markers = markers;
        marker1Size = ((Math.sin(Date.now() * 0.005) + 1.6) / 2) * 0.08;
        marker2Size = ((Math.sin(Date.now() * 0.005 + 2) + 1.6) / 2) * 0.08;
        markers[0].size = marker1Size;
        markers[1].size = marker2Size;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <div className="globe">
      <canvas
        ref={canvasRef}
        style={{ width: 120, height: 120, maxWidth: "100%", aspectRatio: 1 }}
      />
    </div>
  );
}
