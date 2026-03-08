"use client";

import dynamic from "next/dynamic";

export const DynamicScene = dynamic(() => import("./Scene"), {
  ssr: false,
});

export const DynamicParticleField = dynamic(() => import("./ParticleField"), {
  ssr: false,
});

export const DynamicFloatingGeometry = dynamic(
  () => import("./FloatingGeometry"),
  {
    ssr: false,
  }
);
