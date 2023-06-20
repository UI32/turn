import React, { useEffect, useRef } from "react";
import createGlobe from "cobe";

export default function Globe() {
  const canvasRef = useRef();

  useEffect(() => {
    let phi = 0;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 700 * 2,
      height: 700 * 2,
      phi: 0,
      theta: 0,
      dark: 0,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 1,
      baseColor: [0.75294, 0.8, 0.9411],
      markerColor: [0.1, 0.8, 1],
      glowColor: [(188 * 0.85) / 255, (196 * 0.85) / 255, (229 * 0.85) / 255],
      markers: [
        // latitude longitude
        // { location: [48.137154, 11.576124], size: marker1Size }, // Munich
        // { location: [59.913868, 10.752245], size: marker2Size }, // Oslo
      ],
      onRender: state => {
        state.phi = phi;
        phi += 0.01;
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
        style={{ width: 700, height: 700, aspectRatio: 1 }}
      />
    </div>
  );
}
