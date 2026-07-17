import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

import earthTexture from "../../assets/textures/earth.jpg";

function Earth() {
  const earthRef = useRef();

  const texture = useLoader(
    TextureLoader,
    earthTexture
  );

  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.0025;
    }
  });

  return (
    <mesh ref={earthRef}>
      <sphereGeometry args={[2, 64, 64]} />

      <meshStandardMaterial
        map={texture}
        metalness={0}
        roughness={1}
      />
    </mesh>
  );
}

export default Earth;