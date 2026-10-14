export type ProjectCategoryId =
  | "agentic"
  | "gpu"
  | "genai"
  | "eval";

export type Project = {
  slug: string;
  title: string;
  period: string;
  tagline: string;
  highlights: string[];
  stack: string[];
  accent: "indigo" | "violet" | "fuchsia" | "cyan";
  category: ProjectCategoryId;
  links?: { label: string; href: string }[];
};

export type ProjectCategory = {
  id: ProjectCategoryId;
  title: string;
  description: string;
};

export const projectCategories: ProjectCategory[] = [
  {
    id: "agentic",
    title: "Agentic AI & LLM Systems",
    description:
      "Multi-step agent loops, tool-use, and human-in-the-loop systems that turn raw model outputs into shippable workflows."
  },
  {
    id: "gpu",
    title: "GPU / Systems Performance",
    description:
      "Hand-written CUDA kernels focused on the memory-bound ops that dominate transformer inference."
  },
  {
    id: "genai",
    title: "Generative Models & Fine-tuning",
    description:
      "Diffusion, VLM, and LLM fine-tuning under real hardware budgets — with the serving stack around it."
  },
  {
    id: "eval",
    title: "LLM Evaluation & Data",
    description:
      "Benchmarks and evaluation harnesses that stress-test where models actually break."
  }
];

export const featuredProjects: Project[] = [
  // ─────────── Agentic AI & LLM Systems ───────────
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
    category: "agentic",
    links: [
      { label: "GitHub", href: "https://github.com/DeveshValluru/lossless" }
    ]
  },
  {
    slug: "arxiv-research-agent",
    title: "arXiv Research Agent · Verified Literature Review",
    period: "2026",
    tagline:
      "Ask a paper a question or run a full literature review — every sentence cites the passage it came from and is checked against it by a judge from a different model family before you see it.",
    highlights: [
      "Shipped a LangGraph pipeline (plan → search arXiv → screen → snowball references → optional human pause → read → write → critic) with hybrid retrieval (dense + BM25 + cross-encoder) lifting evidence recall@5 from 0.68 → 0.91 and Q&A correctness from 0.76 → 0.83.",
      "Built a cross-family claim-checker that caught 94% of planted hallucinations (negations, number swaps, wrong-source citations) with zero false alarms — a repair-vs-remove loop then rewrites unsupported sentences, taking correctness from 0.31 → 0.93.",
      "Web UI + API with live SSE progress streams, background jobs, a citation graph, and a prompt-injection guard red-teamed on 105 attacks; evaluated against 5 real survey papers (1.8× precision over the raw candidate pool)."
    ],
    stack: ["Python", "LangGraph", "FastAPI", "BM25", "Cross-encoder", "SSE"],
    accent: "violet",
    category: "agentic",
    links: [
      { label: "GitHub", href: "https://github.com/DeveshValluru/arxiv-research-agent" }
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
    category: "agentic",
    links: [
      { label: "GitHub", href: "https://github.com/DeveshValluru/Phase_2_multiagent" }
    ]
  },
  {
    slug: "greenlight-ai",
    title: "GreenLight AI · Film Due-Diligence Committee",
    period: "2026",
    tagline:
      "7-agent investment committee for film financing — no central orchestrator, agents self-route through Band chat via @mention handoffs, with a Red Team adversary before the final verdict.",
    highlights: [
      "Designed a chat-as-protocol architecture: 5 specialist agents (Script, Budget, Market, Legal, Talent) analyze in parallel, a Red Team adversary issues formal CHALLENGE entries, and a Chief Risk Officer synthesizes a weighted verdict.",
      "Mixed 3 framework adapters (Google ADK, custom) and 3 Gemini model tiers per workload — cheap Flash tiers for structured parsing, Pro tiers for adversarial reasoning — with the Band chat room itself acting as the audit trail.",
      "Built for the Band of Agents Hackathon (Track 3 — Regulated & High-Stakes Workflows); the entire message history — analysis, challenges, defenses, verdict — is the compliance artifact."
    ],
    stack: ["Python", "Gemini 2.5", "Google ADK", "Band Protocol"],
    accent: "cyan",
    category: "agentic",
    links: [
      { label: "GitHub", href: "https://github.com/DeveshValluru/greenlight-ai" }
    ]
  },
  {
    slug: "multi-agent-content-studio",
    title: "Multi-Agent Content Studio (from scratch)",
    period: "2026",
    tagline:
      "Researcher → Writer → Editor pipeline built without any agent framework — proves multi-agent is just function composition over LLM calls with role-defining prompts.",
    highlights: [
      "Three specialized LLM agents hand off in a chain: Researcher extracts 5 key angles, Writer drafts an article, Editor polishes to final — persisted end-to-end in MongoDB Atlas.",
      "Deliberately framework-free: each agent is one LLM call with a role prompt, and the 'multi-agent system' is just Python function composition — a demonstration of the primitive before reaching for LangChain / AutoGen / CrewAI.",
      "Served through a FastAPI backend with a Gradio frontend; every generation is retrievable by ID for downstream review or A/B evaluation."
    ],
    stack: ["Python", "FastAPI", "Gradio", "MongoDB Atlas", "OpenAI API"],
    accent: "violet",
    category: "agentic",
    links: [
      { label: "GitHub", href: "https://github.com/DeveshValluru/MultiAgentSystem" }
    ]
  },

  // ─────────── GPU / Systems Performance ───────────
  {
    slug: "vllm-h100-optimization",
    title: "vLLM Optimization Study · Qwen 14B on H100",
    period: "2026",
    tagline:
      "Progressive vLLM tuning on production-grade hardware — only kept optimizations that measurably won, ending at +19% throughput and -42% latency vs the baseline for ~$5 of H100 time.",
    highlights: [
      "Ran one-change-at-a-time optimization levels under real Poisson traffic (500 ShareGPT conversations, 6 RPS × 4 prompt-length buckets); kept CUDA graphs (+4%) and INT4 AWQ (+19%), dropped prefix caching (-20%), max_num_batched_tokens, and n-gram speculative decoding (-16%).",
      "Showed INT4 AWQ shifts the latency cliff to the right on H100 — more headroom before latency explodes under load — and that prefill cost dominates at long prompts (6× throughput drop from 500 → 8000 tokens).",
      "Methodology-first: a 'what didn't work' table that's as valuable as the wins, with latency-throughput Pareto frontiers and per-RPS saturation charts generated from the run data."
    ],
    stack: ["Python", "vLLM", "H100", "Modal", "Qwen 2.5-14B", "AWQ INT4"],
    accent: "fuchsia",
    category: "gpu",
    links: [
      { label: "GitHub", href: "https://github.com/DeveshValluru/vllm-h100-optimization" }
    ]
  },
  {
    slug: "vllm-optimization-progression",
    title: "vLLM Throughput Progression · 30× on an RTX 4060 Laptop",
    period: "2026",
    tagline:
      "8-level benchmark from naive HuggingFace generate() to a fully-tuned vLLM server on 8 GB VRAM — 39 → 1188 tok/s (30×), with the optimizations that regressed charted alongside the wins.",
    highlights: [
      "Measured each lever in isolation on Qwen 2.5-1.5B: continuous batching gave +1270% (the single biggest jump), INT4 AWQ added another +62%, while CUDA graphs regressed by 10% on a model this small — surfacing which optimizations actually depend on model scale.",
      "Captured end-to-end throughput, latency (p50/p95/p99), and TTFT at every level over 100 fixed prompts with a shared 500-token system prefix, so prefix caching had something real to cache.",
      "Companion study to the H100 run — same methodology, consumer hardware — the pair shows how vLLM optimization choices move as you scale from 1.5B/laptop to 14B/datacenter."
    ],
    stack: ["Python", "vLLM 0.24", "Qwen 2.5-1.5B", "AWQ", "WSL2", "RTX 4060"],
    accent: "fuchsia",
    category: "gpu",
    links: [
      { label: "GitHub", href: "https://github.com/DeveshValluru/vllm-optimization-progression" }
    ]
  },
  {
    slug: "cuda-flashattention",
    title: "CUDA FlashAttention-1 Forward Kernel",
    period: "2026",
    tagline:
      "Hand-written FP32 FlashAttention forward pass — the N×N attention matrix never touches HBM, delivering 2.05× over a naive baseline on an RTX 4060.",
    highlights: [
      "Implemented FlashAttention-1 (Dao et al., 2022) from scratch in CUDA: tiled K/V streaming with a running (m, l, O) online-softmax state per query row, so the N×N score matrix is never materialized.",
      "Achieves 2.05× speedup over a naive attention baseline on an RTX 4060; eliminates the ~256 MB/head intermediate that caps sequence length at N=8192 in FP32.",
      "Single-head FP32 reference implementation focused on the memory-hierarchy insight — HBM traffic dominates attention latency, and tiling + online softmax is the fix."
    ],
    stack: ["CUDA", "C++", "PyTorch bindings"],
    accent: "fuchsia",
    category: "gpu",
    links: [
      { label: "GitHub", href: "https://github.com/DeveshValluru/cuda-flashattention-forward" }
    ]
  },
  {
    slug: "cuda-fused-rmsnorm",
    title: "CUDA Fused RMSNorm + Residual Add",
    period: "2026",
    tagline:
      "Single-launch fused kernel for the residual-add + RMSNorm pattern at the start of every LLaMA/Mistral/Qwen transformer block — ~50% less HBM traffic, ~1.4× wall-clock.",
    highlights: [
      "Fused two ops (residual add and RMSNorm) into one CUDA kernel, cutting HBM traffic by ~50% versus a three-kernel PyTorch-style baseline and delivering ~1.4× wall-clock speedup on RTX 4060.",
      "Launch shape mirrors production LLM kernels: one block per row, blockDim.x = 256, dynamic shared memory of (H + 1) floats — the extra slot broadcasts rsqrt(variance + eps) so pass 2 skips re-reading x and r from HBM.",
      "Targets the exact normalization pattern used in LLaMA-2/3, Mistral, Qwen, and DeepSeek — a memory-bound op where kernel fusion is the highest-leverage inference-time win."
    ],
    stack: ["CUDA", "C++"],
    accent: "fuchsia",
    category: "gpu",
    links: [
      { label: "GitHub", href: "https://github.com/DeveshValluru/cuda-fused-rmsnorm" }
    ]
  },

  // ─────────── Generative Models & Fine-tuning ───────────
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
    category: "genai",
    links: [
      { label: "GitHub", href: "https://github.com/DeveshValluru/Lora-image-stylizer" }
    ]
  },
  {
    slug: "gemma-caption",
    title: "GemmaCaption · Multi-Style Video Captioning",
    period: "2026",
    tagline:
      "Video captioning in 4 distinct voices — formal, sarcastic, humorous-tech, humorous-non-tech — 100% Gemma, with every witty line fact-checked against the actual frames.",
    highlights: [
      "Built a description-grounded selection pipeline: Gemma writes N high-temperature witty candidates, then an independent low-temperature Gemma description acts as source of truth — an accuracy gate drops any candidate the frames don't support before a wit-pick keeps the boldest survivor.",
      "Hand-tuned four persona contracts (news-wire formal, deadpan sarcastic, sustained-tech-metaphor, warm everyday) with per-style temperature regimes and a hard non-tech word ban with regeneration.",
      "Single self-contained container reads /input/tasks.json and writes /output/results.json; built for the AMD Developer Hackathon (ACT II · Track 2 — Video Captioning)."
    ],
    stack: ["Python", "Gemma-4-31B", "Docker", "AMD ROCm"],
    accent: "indigo",
    category: "genai",
    links: [
      { label: "GitHub", href: "https://github.com/DeveshValluru/GemmaCaption" }
    ]
  },

  // ─────────── LLM Evaluation & Data ───────────
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
    accent: "fuchsia",
    category: "eval"
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
