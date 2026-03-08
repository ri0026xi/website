"use client";

import { useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

interface ScrollProgress {
  progress: number;
  scrollY: number;
}

export function useScrollProgress(): ScrollProgress {
  const { scrollY, scrollYProgress } = useScroll();
  const [state, setState] = useState<ScrollProgress>({
    progress: 0,
    scrollY: 0,
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setState({
      progress: latest,
      scrollY: scrollY.get(),
    });
  });

  return state;
}
