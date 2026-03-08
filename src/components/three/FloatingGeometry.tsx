"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Icosahedron, Octahedron, Torus } from "@react-three/drei";
import type { Mesh } from "three";

interface ShapeProps {
  position: [number, number, number];
  rotationSpeed: [number, number, number];
  floatSpeed: number;
  floatAmplitude: number;
  scale?: number;
}

function FloatingShape({
  position,
  rotationSpeed,
  floatSpeed,
  floatAmplitude,
  scale = 1,
  children,
}: ShapeProps & { children: React.ReactNode }) {
  const meshRef = useRef<Mesh>(null);
  const baseY = position[1];

  useFrame(({ clock }) => {
    const mesh = meshRef.current;
    if (!mesh) return;
    const t = clock.getElapsedTime();

    mesh.rotation.x += rotationSpeed[0];
    mesh.rotation.y += rotationSpeed[1];
    mesh.rotation.z += rotationSpeed[2];
    mesh.position.y = baseY + Math.sin(t * floatSpeed) * floatAmplitude;
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      {children}
    </mesh>
  );
}

const NEON_PURPLE = "#c084fc";

export default function FloatingGeometry() {
  return (
    <group>
      {/* Top-right icosahedron */}
      <FloatingShape
        position={[7, 3.5, -3]}
        rotationSpeed={[0.002, 0.003, 0.001]}
        floatSpeed={0.6}
        floatAmplitude={0.4}
        scale={1.2}
      >
        <Icosahedron args={[1, 0]}>
          <meshBasicMaterial
            color={NEON_PURPLE}
            wireframe
            transparent
            opacity={0.2}
          />
        </Icosahedron>
      </FloatingShape>

      {/* Bottom-left octahedron */}
      <FloatingShape
        position={[-8, -3, -2]}
        rotationSpeed={[0.003, 0.001, 0.002]}
        floatSpeed={0.5}
        floatAmplitude={0.35}
        scale={1.0}
      >
        <Octahedron args={[1, 0]}>
          <meshBasicMaterial
            color={NEON_PURPLE}
            wireframe
            transparent
            opacity={0.15}
          />
        </Octahedron>
      </FloatingShape>

      {/* Center-right torus */}
      <FloatingShape
        position={[9, -1, -4]}
        rotationSpeed={[0.001, 0.004, 0.002]}
        floatSpeed={0.4}
        floatAmplitude={0.5}
        scale={0.8}
      >
        <Torus args={[1, 0.3, 8, 16]}>
          <meshBasicMaterial
            color={NEON_PURPLE}
            wireframe
            transparent
            opacity={0.18}
          />
        </Torus>
      </FloatingShape>

      {/* Top-left small icosahedron */}
      <FloatingShape
        position={[-6, 4, -5]}
        rotationSpeed={[0.002, 0.002, 0.003]}
        floatSpeed={0.7}
        floatAmplitude={0.3}
        scale={0.7}
      >
        <Icosahedron args={[1, 0]}>
          <meshBasicMaterial
            color={NEON_PURPLE}
            wireframe
            transparent
            opacity={0.12}
          />
        </Icosahedron>
      </FloatingShape>
    </group>
  );
}
