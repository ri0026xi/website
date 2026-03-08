export interface Skill {
  name: string;
  category: SkillCategory;
  icon: string;
}

export type SkillCategory = "AI / Vibe Coding" | "PLC / 制御系" | "Web / AWS";

export const skillCategories: SkillCategory[] = [
  "AI / Vibe Coding",
  "PLC / 制御系",
  "Web / AWS",
];

export const skills: Skill[] = [
  // AI / Vibe Coding
  { name: "Claude Code", category: "AI / Vibe Coding", icon: "bot" },
  { name: "ChatGPT", category: "AI / Vibe Coding", icon: "message-square" },
  { name: "Cursor", category: "AI / Vibe Coding", icon: "mouse-pointer" },
  {
    name: "プロンプトエンジニアリング",
    category: "AI / Vibe Coding",
    icon: "sparkles",
  },

  // PLC / 制御系
  { name: "ラダー・ST言語", category: "PLC / 制御系", icon: "cpu" },
  { name: "IEC 61131-3", category: "PLC / 制御系", icon: "file-code" },
  { name: "FA設備設計", category: "PLC / 制御系", icon: "factory" },
  { name: "SCADA", category: "PLC / 制御系", icon: "monitor" },

  // Web / AWS
  { name: "Next.js", category: "Web / AWS", icon: "globe" },
  { name: "TypeScript", category: "Web / AWS", icon: "file-type" },
  {
    name: "AWS (EC2, S3, Lambda)",
    category: "Web / AWS",
    icon: "cloud",
  },
  {
    name: "Webクリエイター能力資格",
    category: "Web / AWS",
    icon: "award",
  },
];
