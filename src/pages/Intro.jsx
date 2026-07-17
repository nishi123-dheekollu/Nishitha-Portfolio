import { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";

import IntroText from "../components/Introduction/IntroText";
import StarsBackground from "../components/Introduction/StarsBackground";
import Earth from "../components/Introduction/Earth";
import Clouds from "../components/Introduction/Clouds";
import SatelliteRing from "../components/Introduction/SatelliteRing";
import CameraAnimation from "../components/Introduction/CameraAnimation";
import FadeTransition from "../components/Introduction/FadeTransition";

function Intro({ onComplete }) {
  const [showIntroText, setShowIntroText] = useState(true);

  const [showFade, setShowFade] = useState(false);

  // Intro Text -> Earth Scene
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntroText(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  // Earth Scene -> Home Page
  useEffect(() => {
    if (!showIntroText) {
      const fadeTimer = setTimeout(() => {
        setShowFade(true);
      }, 4700);

      const homeTimer = setTimeout(() => {
        onComplete();
      }, 5100);

      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(homeTimer);
      };
    }
  }, [showIntroText, onComplete]);

  return (
    <div className="fixed inset-0 bg-black overflow-hidden">
      {showIntroText ? (
        <IntroText />
      ) : (
        <>
          <StarsBackground />

          <Canvas
            className="absolute inset-0"
            camera={{ position: [0, 0, 8], fov: 45 }}
          >
            <ambientLight intensity={0.08} />

            <directionalLight
              position={[8, 3, 5]}
              intensity={3}
              color="#ffffff"
            />

            <pointLight
              position={[-10, -5, -8]}
              intensity={0.5}
              color="#3b82f6"
            />

            <Earth />
            <Clouds />
            <SatelliteRing />
            <CameraAnimation />
          </Canvas>

          <FadeTransition show={showFade} />
        </>
      )}
    </div>
  );
}

export default Intro;
