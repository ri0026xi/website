export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
}

export const projects: Project[] = [
  {
    id: "ai-dashboard",
    title: "AI自動化ダッシュボード",
    description:
      "生成AIを活用した業務自動化ダッシュボード。データ分析、レポート生成、タスク管理をAIが自動処理し、生産性を大幅に向上させるWebアプリケーション。",
    tags: ["Next.js", "TypeScript", "OpenAI API", "AWS Lambda"],
    image: "/images/projects/ai-dashboard.png",
    link: "#",
  },
  {
    id: "smart-factory",
    title: "スマートファクトリー制御システム",
    description:
      "PLC制御とSCADAを統合したスマートファクトリーシステム。リアルタイム監視、異常検知、自動制御を実現し、工場の稼働率と品質を最適化。",
    tags: ["PLC", "SCADA", "IEC 61131-3", "IoT"],
    image: "/images/projects/smart-factory.png",
    link: "#",
  },
  {
    id: "portfolio",
    title: "ポートフォリオサイト",
    description:
      "Three.jsとFramer Motionを駆使したインタラクティブなポートフォリオサイト。3Dビジュアルとスムーズアニメーションで、クリエイティブな表現を追求。",
    tags: ["Next.js", "Three.js", "Framer Motion", "Tailwind CSS"],
    image: "/images/projects/portfolio.png",
    link: "#",
  },
  {
    id: "ai-chatbot",
    title: "AIチャットボット",
    description:
      "社内ナレッジベースと連携したAIチャットボット。自然言語で質問するだけで、社内ドキュメントから最適な回答を自動生成。問い合わせ対応時間を80%削減。",
    tags: ["Claude API", "RAG", "Next.js", "AWS"],
    image: "/images/projects/ai-chatbot.png",
    link: "#",
  },
];
