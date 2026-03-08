"use client";

import { motion } from "framer-motion";
import {
  DynamicScene,
  DynamicParticleField,
  DynamicFloatingGeometry,
} from "@/components/three/DynamicScene";
import GlitchText from "@/components/ui/GlitchText";
import TypeWriter from "@/components/ui/TypeWriter";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { useMousePosition } from "@/hooks/useMousePosition";
import { useIsMobile } from "@/hooks/useMediaQuery";

const TYPEWRITER_TEXTS = ["AI Vibe Coder", "PLC Engineer", "Web Creator"];

export default function Hero() {
  const { normalizedX, normalizedY } = useMousePosition();
  const isMobile = useIsMobile();

  const mousePosition = { x: normalizedX, y: normalizedY };
  const particleCount = isMobile ? 100 : 500;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* R3F Background */}
      <DynamicScene>
        <DynamicParticleField
          count={particleCount}
          mousePosition={mousePosition}
        />
        <DynamicFloatingGeometry />
      </DynamicScene>

      {/* Content */}
      <ScrollReveal direction="up" duration={0.8}>
        <div className="relative z-10 text-center">
          <h1 className="font-display text-7xl sm:text-8xl md:text-9xl font-bold tracking-tighter">
            <GlitchText text="Ryota" />
          </h1>

          <p className="mt-6 text-xl sm:text-2xl md:text-3xl text-muted-foreground">
            <TypeWriter texts={TYPEWRITER_TEXTS} speed={80} />
          </p>
        </div>
      </ScrollReveal>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="text-xs text-muted-foreground tracking-widest uppercase">
          Scroll
        </span>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-muted-foreground"
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <path d="m6 9 6 6 6-6" />
        </motion.svg>
      </motion.div>
    </section>
  );
}
