"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Sparkles } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { skillGroups, education, certifications } from "@/lib/skills";

export default function About() {
  return (
    <section id="about" className="relative">
      <div className="section-pad">
        <SectionHeading
          eyebrow="About"
          title="New grad AI engineer focused on LLM systems."
          description="MS Computer Science candidate at ASU (4.0 GPA, May 2026) targeting early-career AI/ML engineering roles across LLM applications, inference systems, and GPU-aware machine learning."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="glass glass-hover p-7 lg:col-span-2"
          >
            <p className="text-base leading-relaxed text-ink-200 md:text-lg">
              I&apos;m a <span className="text-indigo-300">new-grad AI engineer</span> who builds across the
              ML lifecycle — data pipelines, model training, LLM-powered applications, evaluation frameworks,
              and deployment. I like the messy middle: real data, real users, real GPU budgets.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-300">
              Recent work spans an <span className="text-cyan-300">agentic system on top of MCP + Gemini 3 Pro</span>
              {" "}for retail observability, <span className="text-indigo-300">LoRA fine-tuning of Stable Diffusion</span>
              {" "}inside 8 GB of VRAM, a <span className="text-violet-300">multi-agent scientific-ideation pipeline</span>
              {" "}deployed on ASU&apos;s HPC via vLLM and SLURM, and{" "}
              <span className="text-fuchsia-300">benchmarking LLM reasoning over real relational data</span>.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-300">
              I&apos;m using the rest of my MS to <span className="text-cyan-300">level up on the GPU side of model
              serving</span> — vLLM internals, batching and throughput tradeoffs, and the basics of CUDA / GPU
              kernel programming. I&apos;m honest about being early on that journey; the goal is to be a stronger
              ML engineer at the inference layer, not to claim it&apos;s already a specialty.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="chip">
                <Sparkles className="h-3 w-3 text-indigo-300" />
                New Grad 2026
              </span>
              <span className="chip">
                <Sparkles className="h-3 w-3 text-violet-300" />
                LLM applications
              </span>
              <span className="chip">
                <Sparkles className="h-3 w-3 text-fuchsia-300" />
                Multi-agent systems
              </span>
              <span className="chip">
                <Sparkles className="h-3 w-3 text-indigo-300" />
                Diffusion fine-tuning
              </span>
              <span className="chip">
                <Sparkles className="h-3 w-3 text-emerald-300" />
                Evaluation frameworks
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="glass glass-hover p-7"
          >
            <div className="flex items-center gap-2 text-sm font-medium text-indigo-300">
              <Award className="h-4 w-4" />
              Certifications
            </div>
            <ul className="mt-4 space-y-3">
              {certifications.map((c) => (
                <li key={c.name}>
                  <div className="font-medium text-white">{c.name}</div>
                  <div className="text-sm text-ink-400">{c.issuer}</div>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex items-center gap-2 text-sm font-medium text-violet-300">
              <GraduationCap className="h-4 w-4" />
              Leadership
            </div>
            <div className="mt-3">
              <div className="font-medium text-white">Chairman, PROBE</div>
              <div className="text-sm text-ink-400">NIT Tiruchirappalli - 2020-2021</div>
              <p className="mt-2 text-sm text-ink-300">
                Secured Micron + Qualcomm sponsorships; ran 15+ events for the first online edition with
                zero execution issues.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="mt-16">
          <h3 className="mb-6 flex items-center gap-2 text-lg font-semibold text-ink-100">
            <GraduationCap className="h-5 w-5 text-indigo-300" />
            Education
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            {education.map((e, i) => (
              <motion.div
                key={e.school}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                className="glass glass-hover p-6"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="font-semibold text-white">{e.school}</div>
                    <div className="text-sm text-ink-300">{e.degree}</div>
                  </div>
                  <span className="chip text-xs text-indigo-300">{e.detail}</span>
                </div>
                <div className="mt-2 flex items-center gap-2 text-xs text-ink-400">
                  <span>{e.period}</span>
                  <span className="h-1 w-1 rounded-full bg-ink-500" />
                  <span>{e.location}</span>
                </div>
                {e.coursework.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {e.coursework.map((c) => (
                      <span
                        key={c}
                        className="rounded-md border border-white/5 bg-white/[0.02] px-2 py-0.5 text-[11px] text-ink-300"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="mb-6 text-lg font-semibold text-ink-100">Technical skills</h3>
          <div className="grid gap-4 md:grid-cols-2">
            {skillGroups.map((g, i) => {
              const isLearning = g.tone === "learning";
              return (
                <motion.div
                  key={g.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.06, ease: "easeOut" }}
                  className={`glass glass-hover p-5 ${
                    isLearning ? "border-cyan-400/20 bg-cyan-400/[0.02]" : ""
                  }`}
                >
                  <div
                    className={`mb-3 text-xs uppercase tracking-wider ${
                      isLearning ? "text-cyan-300" : "text-indigo-300"
                    }`}
                  >
                    {g.name}
                  </div>
                  {g.note && (
                    <p className="-mt-1 mb-3 text-xs italic text-ink-400">{g.note}</p>
                  )}
                  <div className="flex flex-wrap gap-2">
                    {g.items.map((s) => (
                      <span
                        key={s}
                        className={
                          isLearning
                            ? "inline-flex items-center gap-1.5 rounded-full border border-dashed border-cyan-400/30 bg-cyan-400/[0.04] px-3 py-1 text-xs font-medium text-cyan-100/90 backdrop-blur-md transition-colors hover:border-cyan-400/60 hover:text-white"
                            : "chip"
                        }
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
