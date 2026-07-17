import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";

function CameraAnimation() {
  const { camera } = useThree();

  const speed = useRef(0.004);

  useFrame(() => {
    if (camera.position.z > 0.8) {
      speed.current += 0.00005;

      if (speed.current > 0.02) {
        speed.current = 0.02;
      }

      camera.position.z -= speed.current;
    }

    camera.lookAt(0, 0, 0);
  });

  return null;
}

export default CameraAnimation;