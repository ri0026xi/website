"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface TypeWriterProps {
  texts: string[];
  speed?: number;
  className?: string;
}

type Phase = "typing" | "pausing" | "deleting";

export default function TypeWriter({
  texts,
  speed = 80,
  className,
}: TypeWriterProps) {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>("typing");

  const currentText = texts[textIndex] ?? "";

  const advance = useCallback(() => {
    switch (phase) {
      case "typing":
        if (charIndex < currentText.length) {
          setCharIndex((i) => i + 1);
        } else {
          setPhase("pausing");
        }
        break;
      case "pausing":
        setPhase("deleting");
        break;
      case "deleting":
        if (charIndex > 0) {
          setCharIndex((i) => i - 1);
        } else {
          setTextIndex((i) => (i + 1) % texts.length);
          setPhase("typing");
        }
        break;
    }
  }, [phase, charIndex, currentText.length, texts.length]);

  useEffect(() => {
    const delay = phase === "pausing" ? 1500 : phase === "deleting" ? speed / 2 : speed;
    const timer = setTimeout(advance, delay);
    return () => clearTimeout(timer);
  }, [advance, phase, speed]);

  const displayed = currentText.slice(0, charIndex);

  return (
    <span className={cn("inline-flex items-center", className)}>
      <AnimatePresence mode="wait">
        <motion.span
          key={`${textIndex}-${charIndex}`}
          initial={{ opacity: 0.8 }}
          animate={{ opacity: 1 }}
        >
          {displayed}
        </motion.span>
      </AnimatePresence>
      <motion.span
        className="ml-0.5 inline-block w-[2px] h-[1em] bg-cyan-400"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
      />
    </span>
  );
}
