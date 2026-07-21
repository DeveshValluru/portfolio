"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import {
  featuredProjects,
  projectCategories,
  accentMap,
  type Project
} from "@/lib/projects";

export default function Projects() {
  return (
    <section id="projects" className="relative">
      <div className="section-pad">
        <SectionHeading
          eyebrow="Featured work"
          title="Things I&apos;ve built, grouped by discipline."
          description="Recruiter-friendly cuts across the stack — agentic systems with human-in-the-loop, custom CUDA kernels for transformer inference, fine-tuning under tight VRAM budgets, and evaluation harnesses that stress-test real relational data."
        />

        <div className="space-y-16">
          {projectCategories.map((cat, catIdx) => {
            const items = featuredProjects.filter((p) => p.category === cat.id);
            if (items.length === 0) return null;

            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: catIdx * 0.05, ease: "easeOut" }}
              >
                <div className="mb-6 flex flex-col gap-1.5 border-l-2 border-white/10 pl-4">
                  <div className="flex items-baseline gap-3">
                    <h3 className="text-xl font-semibold text-white md:text-2xl">
                      {cat.title}
                    </h3>
                    <span className="font-mono text-xs text-ink-400">
                      {items.length} {items.length === 1 ? "project" : "projects"}
                    </span>
                  </div>
                  <p className="max-w-3xl text-sm text-ink-300 md:text-base">
                    {cat.description}
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {items.map((p, i) => (
                    <ProjectCard key={p.slug} project={p} index={i} />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project: p, index: i }: { project: Project; index: number }) {
  const accent = accentMap[p.accent];
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
      className="group relative flex flex-col"
    >
      {/* Glow */}
      <div
        className={`absolute -inset-px -z-10 rounded-2xl bg-gradient-to-br ${accent.glow} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100`}
        aria-hidden
      />

      <div
        className={`glass relative flex h-full flex-col p-6 ring-1 ring-white/5 transition-all duration-300 group-hover:-translate-y-1 ${accent.ring}`}
      >
        <div className="mb-3 flex items-center justify-between">
          <span className={`text-xs font-mono ${accent.text}`}>{p.period}</span>
        </div>

        <h3 className="text-xl font-semibold leading-snug text-white">{p.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-300">{p.tagline}</p>

        <ul className="mt-5 space-y-2.5 text-sm text-ink-200">
          {p.highlights.map((h, idx) => (
            <li key={idx} className="flex gap-2.5">
              <span
                className={`mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full ${accent.dot}`}
                aria-hidden
              />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-1.5">
          {p.stack.map((s) => (
            <span
              key={s}
              className="rounded-md border border-white/5 bg-white/[0.03] px-2 py-0.5 font-mono text-[11px] text-ink-300"
            >
              {s}
            </span>
          ))}
        </div>

        {p.links && p.links.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2 border-t border-white/5 pt-4">
            {p.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1 text-xs font-medium ${accent.text} hover:underline`}
              >
                {l.label}
                <ArrowUpRight className="h-3 w-3" />
              </a>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  );
}
