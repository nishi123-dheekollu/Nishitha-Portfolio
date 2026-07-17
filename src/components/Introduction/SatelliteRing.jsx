import { useRef } from "react";
import { Torus } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

function SatelliteRing() {
  const ringRef = useRef();

  useFrame(() => {
    if (ringRef.current) {
      ringRef.current.rotation.x += 0.01;
      ringRef.current.rotation.y += 0.005;
    }
  });

  return (
    <Torus
      ref={ringRef}
      args={[2.6, 0.02, 16, 100]}
    >
      <meshBasicMaterial
        color="#38bdf8"
        transparent
        opacity={0.7}
      />
    </Torus>
  );
}

export default SatelliteRing;