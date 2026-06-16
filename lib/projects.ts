export type Project = {
  slug: string;
  title: string;
  period: string;
  tagline: string;
  highlights: string[];
  stack: string[];
  accent: "indigo" | "violet" | "fuchsia" | "cyan";
  links?: { label: string; href: string }[];
};

export const featuredProjects: Project[] = [
  {
    slug: "lossless",
    title: "Lossless · AI Store Operations Agent",
    period: "2026",
    tagline:
      "Agentic system for retail managers — turns Dynatrace observability into business impact (\"you're losing $1,840 in the last 30 min\"), then waits for human approval before fixing.",
    highlights: [
      "Built a multi-step agent loop — detect → diagnose → quantify → propose → await approval → execute → verify — with human oversight as a structural requirement, not a toggle.",
      "Wired the official Dynatrace MCP server as a Node subprocess feeding Gemini 3 Pro (Vertex AI SDK), so the model reasons over real observability data and translates incidents into peak-hour-aware revenue loss.",
      "Shipped a FastAPI + vanilla-JS dashboard with letter-grade store health (A–F), conversion-funnel drop-off, and 30-minute revenue tracking; deployable to Cloud Run via a Python 3.12 + Node 20 Dockerfile."
    ],
    stack: [
      "Python",
      "FastAPI",
      "Gemini 3 Pro",
      "Vertex AI",
      "Dynatrace MCP",
      "Docker",
      "Cloud Run"
    ],
    accent: "cyan",
    links: [
      { label: "GitHub", href: "https://github.com/DeveshValluru/lossless" }
    ]
  },
  {
    slug: "lora-image-stylizer",
    title: "LoRA Image Stylizer",
    period: "2026",
    tagline:
      "End-to-end Stable Diffusion stylization service on a single 8GB GPU — three styles, hot-swapped per request, $0 cloud cost.",
    highlights: [
      "Shipped dataset curation, 3 LoRA fine-tunes on SD 1.5, and a FastAPI + Gradio inference server in under 8 hours of total training on an RTX 4060.",
      "Trained three rank-16 LoRA adapters (~30 MB each) using PEFT, 8-bit AdamW, bf16 mixed precision, and gradient checkpointing to fit inside 8 GB VRAM.",
      "Designed a single-process service that hot-swaps adapters per request via pipeline.set_adapters() — ~3 GB inference VRAM, ~5 sec/image — and shipped it as a one-command Docker container."
    ],
    stack: ["Python", "PyTorch", "Diffusers", "PEFT", "FastAPI", "Gradio", "Docker"],
    accent: "indigo",
    links: [
      { label: "GitHub", href: "https://github.com/DeveshValluru/Lora-image-stylizer" }
    ]
  },
  {
    slug: "multi-agent-ideation",
    title: "Multi-Agent Scientific Ideation Pipeline",
    period: "2026",
    tagline:
      "Retriever→Planner→Generator→Critic→Refiner→Selector pipeline that beat the Llama-3.3-70B baseline on SCIMON and IdeaBench.",
    highlights: [
      "Built a 6-stage multi-agent pipeline for automated scientific ideation, surpassing Llama-3.3-70B baselines on SCIMON (ROUGE-L, BERTScore) and IdeaBench.",
      "Engineered a Gold-style Critic rubric plus a submodular top-3 selection strategy that improved Insight-Novelty and eliminated the 40–55% malformed-ranking failure rate from Phase 1.",
      "Deployed fault-tolerant execution on ASU Sol Gaudi-2 HPUs via per-instance JSONL checkpointing, SLURM sharding, and a <think>-aware JSON parser for reliable distributed inference."
    ],
    stack: ["Python", "Llama-3.3-70B", "Qwen3-32B", "vLLM", "SLURM"],
    accent: "violet",
    links: [
      { label: "GitHub", href: "https://github.com/DeveshValluru/Phase_2_multiagent" }
    ]
  },
  {
    slug: "multi-table-llm-benchmarking",
    title: "Multi-Table LLM Benchmarking",
    period: "2025",
    tagline:
      "Multi-hop query benchmarks across healthcare, e-commerce, and finance — uncovered a ~35% accuracy drop on real-world relational data.",
    highlights: [
      "Developed multi-hop query benchmark datasets across healthcare, e-commerce, and finance to stress-test LLM reasoning on real relational tables.",
      "Uncovered a ~35% accuracy drop from synthetic to real-world data, exposing key LLM limitations on complex schema inference and multi-table joins.",
      "Compared GPT-4o mini and Gemini 1.5 Flash across domains; surfaced systematic failure modes on joins spanning 3+ tables with ambiguous foreign keys."
    ],
    stack: ["Python", "PostgreSQL", "GPT-4o mini", "Gemini 1.5 Flash"],
    accent: "fuchsia"
  }
];

export const accentMap: Record<
  Project["accent"],
  { glow: string; text: string; ring: string; dot: string }
> = {
  indigo: {
    glow: "from-indigo-500/30 to-indigo-500/0",
    text: "text-indigo-300",
    ring: "group-hover:ring-indigo-400/40",
    dot: "bg-indigo-400"
  },
  violet: {
    glow: "from-violet-500/30 to-violet-500/0",
    text: "text-violet-300",
    ring: "group-hover:ring-violet-400/40",
    dot: "bg-violet-400"
  },
  fuchsia: {
    glow: "from-fuchsia-500/30 to-fuchsia-500/0",
    text: "text-fuchsia-300",
    ring: "group-hover:ring-fuchsia-400/40",
    dot: "bg-fuchsia-400"
  },
  cyan: {
    glow: "from-cyan-500/30 to-cyan-500/0",
    text: "text-cyan-300",
    ring: "group-hover:ring-cyan-400/40",
    dot: "bg-cyan-400"
  }
};
