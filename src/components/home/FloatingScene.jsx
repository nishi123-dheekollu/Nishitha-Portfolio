import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import satelliteImg from "../../assets/textures/satellite.jpg";

// Real satellite image, texture-mapped onto a plane, slowly spinning
function SatelliteImage() {
  const texture = useLoader(THREE.TextureLoader, satelliteImg);
  const meshRef = useRef();

  useFrame((_, delta) => {
    meshRef.current.rotation.y += delta * 0.2;
    meshRef.current.position.y = 0.5 + Math.sin(Date.now() * 0.0005) * 0.15;
  });

  return (
    <mesh ref={meshRef} position={[5.5, 0.5, -3]} scale={2.8}>
      {/* Adjust the 2/2 aspect ratio below to match your downloaded image's width/height */}
      <planeGeometry args={[2, 2]} />
      <meshBasicMaterial map={texture} transparent side={THREE.DoubleSide} />
    </mesh>
  );
}

// Gently follows the mouse for a subtle parallax feel
function ParallaxGroup({ children }) {
  const groupRef = useRef();
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame(() => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y +=
      (mouse.current.x * 0.15 - groupRef.current.rotation.y) * 0.02;
    groupRef.current.rotation.x +=
      (mouse.current.y * 0.1 - groupRef.current.rotation.x) * 0.02;
  });

  return <group ref={groupRef}>{children}</group>;
}

// Lightweight starfield with a gentle twinkle
function StarField() {
  const materialRef = useRef();
  const positions = useMemo(() => {
    const count = 400;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 40;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 40;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 40;
    }
    return arr;
  }, []);

  useFrame(({ clock }) => {
    if (materialRef.current) {
      materialRef.current.opacity = 0.55 + Math.sin(clock.elapsedTime * 1.5) * 0.25;
    }
  });

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        ref={materialRef}
        color="#ffffff"
        size={0.06}
        sizeAttenuation
        transparent
        opacity={0.7}
      />
    </points>
  );
}

function FloatingScene() {
  return (
    <Canvas
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      camera={{ position: [0, 0, 10], fov: 50 }}
    >
      <ambientLight intensity={0.6} />
      <pointLight position={[5, 5, 5]} intensity={1} color="#38bdf8" />

      <StarField />

      <ParallaxGroup>
        <SatelliteImage />
      </ParallaxGroup>
    </Canvas>
  );
}

export default FloatingScene;
