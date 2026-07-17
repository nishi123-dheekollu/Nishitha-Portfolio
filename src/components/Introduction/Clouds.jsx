import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader, DoubleSide } from "three";

import cloudsTexture from "../../assets/textures/clouds.png";

function Clouds() {
  const cloudRef = useRef();

  const texture = useLoader(
    TextureLoader,
    cloudsTexture
  );

  useFrame(() => {
    if (cloudRef.current) {
      cloudRef.current.rotation.y += 0.003;
    }
  });

  return (
    <mesh
      ref={cloudRef}
      scale={1.01}
    >
      <sphereGeometry
        args={[2.02, 64, 64]}
      />

      <meshStandardMaterial
        map={texture}
        transparent
        opacity={0.45}
        depthWrite={false}
        side={DoubleSide}
      />
    </mesh>
  );
}

export default Clouds;