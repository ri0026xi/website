"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface ParticleFieldProps {
  count?: number;
  color?: string;
  mousePosition?: { x: number; y: number };
}

export default function ParticleField({
  count = 500,
  color = "#38bdf8",
  mousePosition = { x: 0, y: 0 },
}: ParticleFieldProps) {
  const pointsRef = useRef<THREE.Points>(null);

  const { positions, basePositions, opacities } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const basePositions = new Float32Array(count * 3);
    const opacities = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 20;
      const y = (Math.random() - 0.5) * 14;
      const z = (Math.random() - 0.5) * 10;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      basePositions[i * 3] = x;
      basePositions[i * 3 + 1] = y;
      basePositions[i * 3 + 2] = z;

      opacities[i] = 0.3 + Math.random() * 0.7;
    }

    return { positions, basePositions, opacities };
  }, [count]);

  useFrame(({ clock }) => {
    const points = pointsRef.current;
    if (!points) return;

    const posAttr = points.geometry.attributes.position;
    const posArray = posAttr.array as Float32Array;
    const time = clock.getElapsedTime();

    // Convert normalized mouse (-1..1) to world-space approximate
    const mx = mousePosition.x * 8;
    const my = mousePosition.y * 5;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const bx = basePositions[i3];
      const by = basePositions[i3 + 1];
      const bz = basePositions[i3 + 2];

      // Gentle floating oscillation
      const phase = i * 0.3;
      const floatX = Math.sin(time * 0.3 + phase) * 0.15;
      const floatY = Math.cos(time * 0.4 + phase) * 0.2;
      const floatZ = Math.sin(time * 0.2 + phase * 0.7) * 0.1;

      let px = bx + floatX;
      let py = by + floatY;
      let pz = bz + floatZ;

      // Mouse repulsion
      const dx = px - mx;
      const dy = py - my;
      const distSq = dx * dx + dy * dy;
      const pushRadius = 4;

      if (distSq < pushRadius * pushRadius && distSq > 0.001) {
        const dist = Math.sqrt(distSq);
        const force = (1 - dist / pushRadius) * 1.5;
        px += (dx / dist) * force;
        py += (dy / dist) * force;
      }

      posArray[i3] = px;
      posArray[i3 + 1] = py;
      posArray[i3 + 2] = pz;
    }

    posAttr.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={count}
        />
        <bufferAttribute
          attach="attributes-opacity"
          args={[opacities, 1]}
          count={count}
        />
      </bufferGeometry>
      <pointsMaterial
        color={color}
        size={2}
        sizeAttenuation
        transparent
        opacity={0.6}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
