"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { useIsMobile } from "@/hooks/useMediaQuery";
import { projects } from "@/data/projects";
import type { Project } from "@/data/projects";

const gradients = [
  "from-primary/40 via-neon-purple/30 to-neon-blue/20",
  "from-neon-blue/40 via-primary/30 to-accent/20",
  "from-accent/40 via-neon-blue/30 to-primary/20",
  "from-neon-purple/40 via-accent/30 to-neon-blue/20",
];

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const gradient = gradients[index % gradients.length];

  return (
    <motion.div
      className="group relative flex-shrink-0 w-[340px] md:w-[420px] rounded-2xl overflow-hidden border border-surface-light/50 bg-surface"
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Gradient placeholder image */}
      <div
        className={`h-52 bg-gradient-to-br ${gradient} relative overflow-hidden`}
      >
        {/* Decorative grid pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        {/* Decorative circle */}
        <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-white/5 blur-xl" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display text-xl font-bold text-foreground mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-muted leading-relaxed line-clamp-3 mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-full bg-surface-light text-neon-blue/80 border border-neon-blue/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Hover overlay */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <a
          href={project.link}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-cyan-500/50 bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20 transition-colors text-sm font-medium"
        >
          詳細を見る
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </a>
      </motion.div>
    </motion.div>
  );
}

function DesktopGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  return (
    <div ref={containerRef} className="relative h-[250vh]">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div
          className="flex gap-8 pl-[max(2rem,calc((100vw-1280px)/2))]"
          style={{ x }}
        >
          {projects.map((project, i) => (
            <ScrollReveal key={project.id} direction="up" delay={i * 0.1}>
              <ProjectCard project={project} index={i} />
            </ScrollReveal>
          ))}
          {/* Extra spacer so last card is fully visible */}
          <div className="flex-shrink-0 w-[10vw]" />
        </motion.div>
      </div>
    </div>
  );
}

function MobileGallery() {
  return (
    <div className="grid gap-6 px-4 sm:px-6">
      {projects.map((project, i) => (
        <ScrollReveal key={project.id} direction="up" delay={i * 0.1}>
          <ProjectCard project={project} index={i} />
        </ScrollReveal>
      ))}
    </div>
  );
}

export default function Projects() {
  const isMobile = useIsMobile();

  return (
    <section id="projects" className="py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-16">
        <ScrollReveal direction="up">
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter">
            Projects
          </h2>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.15}>
          <p className="mt-4 text-lg text-muted max-w-xl">
            個人・業務で手掛けたプロジェクトの一部を紹介します。
          </p>
        </ScrollReveal>
      </div>

      {isMobile ? <MobileGallery /> : <DesktopGallery />}
    </section>
  );
}
