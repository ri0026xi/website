"use client";

import { cn } from "@/lib/utils";

interface GlitchTextProps {
  text: string;
  className?: string;
}

export default function GlitchText({ text, className }: GlitchTextProps) {
  return (
    <>
      <style jsx>{`
        .glitch {
          position: relative;
          display: inline-block;
        }

        .glitch::before,
        .glitch::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
        }

        .glitch::before {
          color: #0ff;
          z-index: -1;
        }

        .glitch::after {
          color: #f0f;
          z-index: -2;
        }

        .glitch:hover::before {
          opacity: 0.8;
          animation: glitch-before 0.3s infinite;
        }

        .glitch:hover::after {
          opacity: 0.8;
          animation: glitch-after 0.3s infinite;
        }

        @keyframes glitch-before {
          0% {
            clip-path: inset(40% 0 61% 0);
            transform: translate(-2px, -1px);
          }
          20% {
            clip-path: inset(92% 0 1% 0);
            transform: translate(1px, 2px);
          }
          40% {
            clip-path: inset(43% 0 1% 0);
            transform: translate(-1px, -1px);
          }
          60% {
            clip-path: inset(25% 0 58% 0);
            transform: translate(2px, 1px);
          }
          80% {
            clip-path: inset(54% 0 7% 0);
            transform: translate(-1px, 2px);
          }
          100% {
            clip-path: inset(58% 0 43% 0);
            transform: translate(2px, -2px);
          }
        }

        @keyframes glitch-after {
          0% {
            clip-path: inset(65% 0 13% 0);
            transform: translate(2px, 1px);
          }
          20% {
            clip-path: inset(79% 0 14% 0);
            transform: translate(-2px, -1px);
          }
          40% {
            clip-path: inset(12% 0 69% 0);
            transform: translate(1px, 2px);
          }
          60% {
            clip-path: inset(35% 0 51% 0);
            transform: translate(-1px, -2px);
          }
          80% {
            clip-path: inset(80% 0 5% 0);
            transform: translate(2px, -1px);
          }
          100% {
            clip-path: inset(18% 0 72% 0);
            transform: translate(-2px, 1px);
          }
        }
      `}</style>
      <span className={cn("glitch cursor-pointer", className)} data-text={text}>
        {text}
      </span>
    </>
  );
}
