"use client";

import { Github, Twitter } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import MagneticButton from "@/components/ui/MagneticButton";

const socialLinks = [
  { icon: Github, label: "GitHub", href: "#" },
  { icon: Twitter, label: "X (Twitter)", href: "#" },
];

/* Decorative dots positioned via CSS */
interface DecorativeDot {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  size: number;
  opacity: number;
}

const dots: DecorativeDot[] = [
  { top: "8%", left: "5%", size: 4, opacity: 0.15 },
  { top: "15%", right: "10%", size: 6, opacity: 0.1 },
  { bottom: "20%", left: "12%", size: 3, opacity: 0.2 },
  { top: "40%", right: "4%", size: 5, opacity: 0.12 },
  { bottom: "35%", left: "30%", size: 3, opacity: 0.08 },
  { top: "25%", right: "25%", size: 4, opacity: 0.14 },
  { bottom: "10%", right: "15%", size: 5, opacity: 0.1 },
  { top: "60%", left: "8%", size: 6, opacity: 0.07 },
];

export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative py-32 bg-[#030308] overflow-hidden"
    >
      {/* Top gradient separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-primary/[0.03] to-transparent pointer-events-none" />

      {/* Decorative dots */}
      {dots.map((dot, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-neon-blue"
          style={{
            top: dot.top,
            left: dot.left,
            right: dot.right,
            bottom: dot.bottom,
            width: dot.size,
            height: dot.size,
            opacity: dot.opacity,
          }}
        />
      ))}

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Heading */}
        <ScrollReveal direction="up">
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter">
            Let&apos;s Connect
          </h2>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.15}>
          <p className="mt-6 text-lg text-muted max-w-md mx-auto">
            お気軽にご連絡ください。プロジェクトのご相談、お仕事のご依頼をお待ちしております。
          </p>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal direction="up" delay={0.3}>
          <div className="mt-12 flex justify-center">
            <MagneticButton
              href="mailto:placeholder@example.com"
              className="px-8 py-4 text-base font-medium"
            >
              メールを送る
            </MagneticButton>
          </div>
        </ScrollReveal>

        {/* Social links */}
        <ScrollReveal direction="up" delay={0.4}>
          <div className="mt-12 flex justify-center gap-6">
            {socialLinks.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="group flex items-center justify-center w-12 h-12 rounded-full border border-surface-light bg-surface hover:border-neon-blue/40 hover:bg-neon-blue/10 transition-colors duration-200"
              >
                <Icon className="w-5 h-5 text-muted group-hover:text-neon-blue transition-colors duration-200" />
              </a>
            ))}
          </div>
        </ScrollReveal>

        {/* Copyright */}
        <ScrollReveal direction="up" delay={0.5}>
          <p className="mt-16 text-sm text-muted/60">
            &copy; 2026 Ryota. All rights reserved.
          </p>
        </ScrollReveal>
      </div>
    </footer>
  );
}
