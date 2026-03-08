"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ParallaxWrapper from "@/components/ui/ParallaxWrapper";

const bioParagraphs = [
  "AIとテクノロジーの力で、アイデアを形にする。",
  "PLCエンジニアとしての制御系バックグラウンドを持ちながら、AIバイブコーディングという新しいアプローチでWebの世界を探求しています。",
  "人間とAIの共創がもたらす可能性を信じ、日々実験を続けています。",
];

const quote = "テクノロジーは人間の創造性を拡張する道具である";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-32 px-6 sm:px-8 lg:px-16 overflow-hidden"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface/30 to-background pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Title */}
        <ScrollReveal>
          <div className="mb-20">
            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              About
            </h2>
            <div className="mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-primary to-accent" />
          </div>
        </ScrollReveal>

        {/* Split layout */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 items-center">
          {/* Left: Decorative gradient image placeholder */}
          <ParallaxWrapper speed={0.3}>
            <ScrollReveal direction="left" delay={0.1}>
              <div className="aspect-square w-full max-w-md mx-auto rounded-2xl overflow-hidden relative">
                {/* Gradient placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-accent/30 to-neon-blue/20 rounded-2xl" />
                {/* Inner pattern / texture */}
                <div className="absolute inset-0 bg-gradient-to-tr from-surface via-transparent to-surface-light/50 rounded-2xl" />
                {/* Decorative ring */}
                <div className="absolute inset-4 rounded-xl border border-white/5" />
                <div className="absolute inset-8 rounded-lg border border-white/[0.03]" />
                {/* Subtle glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 rounded-full bg-accent/10 blur-3xl" />
              </div>
            </ScrollReveal>
          </ParallaxWrapper>

          {/* Right: Bio text */}
          <div className="flex flex-col gap-8">
            {bioParagraphs.map((text, i) => (
              <ScrollReveal key={i} direction="right" delay={0.15 * (i + 1)}>
                <p className="text-lg leading-relaxed text-foreground/80">
                  {text}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Philosophy quote */}
        <ScrollReveal delay={0.4}>
          <blockquote className="mt-32 mx-auto max-w-3xl text-center relative">
            {/* Large decorative quotation marks */}
            <span
              className="absolute -top-10 left-0 sm:-left-4 font-display text-8xl sm:text-9xl leading-none text-accent/15 select-none"
              aria-hidden="true"
            >
              &ldquo;
            </span>
            <span
              className="absolute -bottom-16 right-0 sm:-right-4 font-display text-8xl sm:text-9xl leading-none text-accent/15 select-none"
              aria-hidden="true"
            >
              &rdquo;
            </span>

            <motion.p
              className="relative font-display text-2xl sm:text-3xl lg:text-4xl italic font-light tracking-wide leading-relaxed text-foreground/90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            >
              {quote}
            </motion.p>

            {/* Subtle accent line below quote */}
            <motion.div
              className="mx-auto mt-8 h-px w-24 bg-gradient-to-r from-transparent via-accent/50 to-transparent"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            />
          </blockquote>
        </ScrollReveal>
      </div>
    </section>
  );
}
