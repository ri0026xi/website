"use client";

import { useState, useEffect, useCallback, useRef } from "react";

interface MousePosition {
  x: number;
  y: number;
  normalizedX: number;
  normalizedY: number;
}

export function useMousePosition(): MousePosition {
  const [position, setPosition] = useState<MousePosition>({
    x: 0,
    y: 0,
    normalizedX: 0,
    normalizedY: 0,
  });

  const rafId = useRef<number>(0);
  const latestEvent = useRef<{ x: number; y: number } | null>(null);

  const updatePosition = useCallback(() => {
    if (latestEvent.current) {
      const { x, y } = latestEvent.current;
      const normalizedX = (x / window.innerWidth) * 2 - 1;
      const normalizedY = (y / window.innerHeight) * 2 - 1;
      setPosition({ x, y, normalizedX, normalizedY });
      latestEvent.current = null;
    }
    rafId.current = 0;
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      latestEvent.current = { x: e.clientX, y: e.clientY };
      if (!rafId.current) {
        rafId.current = requestAnimationFrame(updatePosition);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [updatePosition]);

  return position;
}
