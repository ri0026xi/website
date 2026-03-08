"use client";

import { useCallback, useRef } from "react";
import { motion } from "framer-motion";
import {
  Bot,
  MessageSquare,
  MousePointer,
  Sparkles,
  Cpu,
  FileCode,
  Factory,
  Monitor,
  Globe,
  FileType,
  Cloud,
  Award,
  type LucideIcon,
} from "lucide-react";
import { skills, skillCategories, type SkillCategory } from "@/data/skills";
import ScrollReveal from "@/components/ui/ScrollReveal";

/* ------------------------------------------------------------------ */
/*  Icon mapping                                                       */
/* ------------------------------------------------------------------ */

const iconMap: Record<string, LucideIcon> = {
  bot: Bot,
  "message-square": MessageSquare,
  "mouse-pointer": MousePointer,
  sparkles: Sparkles,
  cpu: Cpu,
  "file-code": FileCode,
  factory: Factory,
  monitor: Monitor,
  globe: Globe,
  "file-type": FileType,
  cloud: Cloud,
  award: Award,
};

/* ------------------------------------------------------------------ */
/*  3D Tilt Card                                                       */
/* ------------------------------------------------------------------ */

interface TiltCardProps {
  icon: string;
  name: string;
  index: number;
}

function TiltCard({ icon, name, index }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const card = cardRef.current;
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -10;
      const rotateY = ((x - centerX) / centerX) * 10;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`;
    },
    [],
  );

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
  }, []);

  const Icon = iconMap[icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group relative flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-6 backdrop-blur-sm transition-[transform,box-shadow] duration-300 ease-out hover:border-cyan-400/30 hover:shadow-[0_0_24px_-4px_rgba(34,211,238,0.25)]"
        style={{ willChange: "transform" }}
      >
        {Icon && (
          <Icon
            className="h-7 w-7 text-cyan-400 transition-colors duration-300 group-hover:text-cyan-300"
            strokeWidth={1.5}
          />
        )}
        <span className="text-center text-sm leading-tight text-gray-300 transition-colors duration-300 group-hover:text-white">
          {name}
        </span>
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Category group                                                     */
/* ------------------------------------------------------------------ */

interface CategoryGroupProps {
  category: SkillCategory;
  categoryIndex: number;
}

function CategoryGroup({ category, categoryIndex }: CategoryGroupProps) {
  const categorySkills = skills.filter((s) => s.category === category);

  return (
    <ScrollReveal delay={categoryIndex * 0.15}>
      <div className="space-y-6">
        <h3 className="text-lg font-semibold tracking-wide text-white/90">
          {category}
        </h3>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {categorySkills.map((skill, i) => (
            <TiltCard key={skill.name} icon={skill.icon} name={skill.name} index={i} />
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}

/* ------------------------------------------------------------------ */
/*  Skills section                                                     */
/* ------------------------------------------------------------------ */

export default function Skills() {
  return (
    <section id="skills" className="py-32">
      <div className="mx-auto max-w-5xl px-6">
        <ScrollReveal>
          <h2 className="mb-16 font-display text-4xl font-bold tracking-tight text-white md:text-5xl">
            Skills
          </h2>
        </ScrollReveal>

        <div className="space-y-14">
          {skillCategories.map((category, i) => (
            <CategoryGroup key={category} category={category} categoryIndex={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
