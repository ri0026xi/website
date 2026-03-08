"use client";

import { Canvas } from "@react-three/fiber";
import type { ReactNode } from "react";

interface SceneProps {
  children: ReactNode;
  className?: string;
}

export default function Scene({ children, className }: SceneProps) {
  return (
    <div
      className={className}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    >
      <Canvas
        gl={{ alpha: true, antialias: true }}
        camera={{ position: [0, 0, 10], fov: 60 }}
        style={{ pointerEvents: "none" }}
        dpr={[1, 1.5]}
      >
        {children}
      </Canvas>
    </div>
  );
}
