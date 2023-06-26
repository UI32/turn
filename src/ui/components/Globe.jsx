import React, { useEffect, useRef } from "react";
import createGlobe from "cobe";

export default function Globe({ mobile }) {
  const canvasRef = useRef();

  useEffect(() => {
    let phi = 0;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 840 * 2,
      height: 840 * 2,
      phi: 0,
      theta: 0,
      dark: 0,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 0.8,
      opacity: 0.7,
      baseColor: [247 / 255, 247 / 255, 247 / 255],
      markerColor: [0.1, 0.8, 1],
      // glowColor: [211 / 255 + 0.02, 211 / 255 + 0.02, 211 / 255 + 0.02],
      glowColor: [144 / 255, 144 / 255, 144 / 255],
      scale: mobile ? 0.5 : 1,
      markers: [
        // latitude longitude
        // { location: [48.137154, 11.576124], size: marker1Size }, // Munich
        // { location: [59.913868, 10.752245], size: marker2Size }, // Oslo
      ],
      onRender: state => {
        state.phi = phi;
        phi += 0.004;
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
        style={{ width: 840, height: 840, aspectRatio: 1 }}
      />
    </div>
  );
}
